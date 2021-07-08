<template>
  <div class="flex">
    <Button
      middleIcon="far fa-calendar-plus"
      :iconOnly="true"
      :click="addTask"
      color="green"
    >
      Add a new task
    </Button>
    <div class="ta-right">
      <span v-if="completedTasks.length > 0">{{ completedTasks.length }}/</span>
      <span>{{ tasks.length }} task<span v-if="tasks.length > 1">s</span></span>
      <span v-if="completedTasks.length > 0"> completed</span>
    </div>
  </div>
  <TaskList
    :tasks="orderedTasks"
    v-on:remove-task="removeTask"
    v-on:edit-task="editTask"
    v-on:complete-task="completeTask"
    v-on:fetch-tasks="fetchTasks"
  ></TaskList>
  <Button
    v-if="tasks.length > 2"
    middleIcon="far fa-calendar-plus"
    :iconOnly="true"
    :click="addTask"
    color="green"
  >
    Add a new task
  </Button>
</template>

<script>
import { exists } from "../../../utils/common.js";
import { db } from "../../../firebase";
import Button from "../../../components/atoms/Button.vue";
import TaskList from "./components/TaskList.vue";

export default {
  data() {
    return {
      tasks: [],
      id: 1,
      updating: false,
    };
  },
  components: {
    Button: Button,
    TaskList: TaskList,
  },
  methods: {
    compareTasks(a, b) {
      let equal = exists(a) && exists(b);
      if (equal) {
        for (let k of Object.keys(a)) {
          equal = equal && exists(b[k]) && a[k] === b[k];
        }
      }
      return equal;
    },
    fetchTasks() {
      const int = setInterval(() => {
        if (!this.updating) {
          clearInterval(int);

          this.tasks = [];
          const tasks = db.collection("todos").orderBy("order", "asc");
          tasks
            .get()
            .then((docs) => {
              docs.forEach((doc) => {
                if (doc.exists) {
                  this.tasks.push(doc.data());
                } else {
                  // doc.data() will be undefined in this case
                  console.error("No such document!");
                }
              });
            })
            .catch((error) => {
              console.error("Error getting document:", error);
            });
        }
      }, 500);
    },
    addTask() {
      let task = {
        id:
          this.tasks.length.toString() +
          Math.ceil(Math.random() * Date.now() * this.tasks.length),
        order: this.tasks.length,
        title: "TO DO",
        completed: false,
      };
      db.collection("todos")
        .doc(task.id)
        .set(task)
        .then(() => {
          this.tasks.push(task);
          this.id++;
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
    editTask(args) {
      const task = this.tasks.filter((task) => {
        return task.id === args.id;
      })[0];
      if (!this.compareTasks(task, args)) {
        this.updating = true;
        const backup = task.title;
        //task.title = "Updating...";
        db.collection("todos")
          .doc(task.id)
          .update(args)
          .then(() => {
            task.id = args.id;
            task.order = args.order;
            task.title = args.title;
            task.completed = args.completed;
            this.updating = false;
          })
          .catch((error) => {
            task.title = backup;
            console.error("Error writing document: ", error);
            this.updating = false;
          });
      }
    },
    removeTask(id) {
      const task = this.tasks.filter((task) => {
        return task.id === id;
      })[0];
      db.collection("todos")
        .doc(task.id)
        .delete()
        .then(() => {
          this.tasks = this.tasks.filter((task) => {
            return task.id !== id;
          });
        })
        .catch((error) => {
          console.error("Error deleting document: ", error);
        });
    },
    completeTask(id) {
      const task = this.tasks.filter((task) => {
        return task.id === id;
      })[0];
      if (task) task.completed = !task.completed;
    },
  },
  computed: {
    completedTasks() {
      return this.tasks.filter((task) => {
        return task.completed;
      });
    },
    orderedTasks() {
      let ordered = this.tasks;
      ordered.sort((a, b) => {
        return a.order - b.order;
      });
      ordered.sort((a, b) => {
        return (a.completed ? 1 : 0) - (!b.completed ? 0 : 1);
      });
      return ordered;
    },
  },
  mounted() {
    this.fetchTasks();
  },
};
</script>