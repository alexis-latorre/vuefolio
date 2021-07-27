<template>
  <template v-if="undefined !== user">
    <div class="flex">
      <Button
        :action="true"
        middleIcon="far fa-calendar-plus"
        :iconOnly="true"
        :click="addTask"
        color="green"
      >
        Add a new task
      </Button>
      <div class="ta-right">
        <span v-if="completedTasks.length > 0"
          >{{ completedTasks.length }}/</span
        >
        <span
          >{{ tasks.length }} task<span v-if="tasks.length > 1">s</span></span
        >
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
      :action="true"
      v-if="tasks.length > 2"
      middleIcon="far fa-calendar-plus"
      :iconOnly="true"
      :click="addTask"
      color="green"
    >
      Add a new task
    </Button>
  </template>
  <template v-else>
    <p>You must sign in to use the TODO application.</p>
    <div class="my-1-rem">
      <Login />
    </div>
  </template>
</template>

<script>
import { exists } from "@/utils/common.js";
import { db, auth } from "@/firebase";
import Button from "@/components/atoms/Button.vue";
import TaskList from "./components/TaskList.vue";
import Login from "@/views/user/Login.vue";

export default {
  data() {
    return {
      tasks: [],
      id: 1,
      updating: false,
      user: undefined,
    };
  },
  components: {
    Button: Button,
    TaskList: TaskList,
    Login: Login,
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
      if (undefined === this.user) return;
      const int = setInterval(() => {
        if (!this.updating) {
          clearInterval(int);

          this.tasks = [];
          const tasks = db
            .collection("users")
            .doc(this.user.uid)
            .collection("todos")
            .orderBy("order", "asc");
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
      if (undefined === this.user) return;
      let task = {
        id:
          this.tasks.length.toString() +
          Math.ceil(Math.random() * Date.now() * this.tasks.length),
        order: this.tasks.length,
        title: "TO DO",
        completed: false,
      };
      db.collection("users")
        .doc(this.user.uid)
        .collection("todos")
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
      if (undefined === this.user) return;
      const task = this.tasks.filter((task) => {
        return task.id === args.id;
      })[0];
      if (!this.compareTasks(task, args)) {
        this.updating = true;
        const backup = task.title;
        //task.title = "Updating...";
        db.collection("users")
          .doc(this.user.uid)
          .collection("todos")
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
      if (undefined === this.user) return;
      const task = this.tasks.filter((task) => {
        return task.id === id;
      })[0];
      db.collection("users")
        .doc(this.user.uid)
        .collection("todos")
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
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.fetchTasks();
      } else {
        this.user = undefined;
        this.tasks = [];
      }
    });
  },
};
</script>