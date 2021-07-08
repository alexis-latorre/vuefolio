<template>
  <div id="tasks-container">
    <DraggableProd :items="tasks" :isSlot="true" :onDragEnd="updateTasks">
      <div v-for="(task, i) in tasks" :key="task.id">
        <div :id="`dropzone_${i + 1}`" class="dropzone"></div>
        <div :id="`placeholder_${i + 1}`" class="placeholder">
          <div :id="`task_${task.id}`">
            <Task
              :task="task"
              v-on:remove-task="removeTask(task.id)"
              v-on:edit-task="editTask"
              v-on:complete-task="completeTask(task.id)"
            ></Task>
          </div>
        </div>
      </div>
      <div :id="`dropzone_${tasks.length + 1}`" class="dropzone"></div>
    </DraggableProd>
  </div>
</template>

<script>
import Task from "./Task.vue";
import DraggableProd from "../../../../prods/draggable/DraggableProd.vue";

export default {
  props: {
    tasks: Array,
  },
  components: {
    Task: Task,
    DraggableProd: DraggableProd,
  },
  methods: {
    updateTasks(ids) {
      let i = 0;
      for (const id of ids) {
        const task = this.tasks.filter((it) => {
          return it.id === id;
        })[0];
        const args = {
          id: task.id,
          order: i,
          title: task.title,
          completed: task.completed,
        };
        this.$emit("edit-task", args);
        i++;
      }
      this.$emit("fetch-tasks");
    },
    editTask(args) {
      this.$emit("edit-task", args);
    },
    removeTask(id) {
      this.$emit("remove-task", id);
    },
    completeTask(id) {
      this.$emit("complete-task", id);
    },
  },
};
</script>

<style scoped>
#tasks-container {
  margin: 0;
  padding-top: 1rem;
}
</style>