<template>
  <div :class="'task' + (task.completed ? ' completed' : '')">
    <div>
      <Button
        :action="true"
        size="xxxl"
        middleIcon="fas fa-check-circle"
        :iconOnly="true"
        :click="completeTask"
        :color="task.completed ? 'green' : 'gray'"
      ></Button>
    </div>
    <div class="content">
      <input
        :ref="'task_' + task.id"
        v-if="editMode"
        type="text"
        placeholder="Item title"
        @blur="setTitle($event.target.value)"
        @keypress="checkKey($event)"
        :value="task.title"
      />
      <h2 v-else @dblclick="editTask('task_' + task.id)">{{ task.title }}</h2>
    </div>
    <div class="float-right">
      <Button
        :action="true"
        size="xl"
        middleIcon="far fa-trash-alt"
        :iconOnly="true"
        :click="remove"
        color="red"
      ></Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
export default {
  data() {
    return {
      title: "",
      editMode: false,
    };
  },
  props: {
    task: Object,
  },
  components: {
    Button: Button,
  },
  methods: {
    checkKey($event) {
      if ($event && $event.key === "Enter") this.setTitle($event.target.value);
    },
    remove() {
      this.$emit("remove-task", {});
    },
    editTask(id) {
      this.editMode = true;
    },
    setTitle(value) {
      if (value !== this.$props.task.title) {
        this.$emit("edit-task", {
          id: this.$props.task.id,
          title: !value ? "New task" : value,
          completed: this.$props.task.completed,
          order: this.$props.task.order,
        });
      }
      this.editMode = false;
    },
    completeTask() {
      this.$emit("edit-task", {
        id: this.$props.task.id,
        completed: !this.$props.task.completed,
        title: this.$props.task.title,
        order: this.$props.task.order,
      });
    },
  },
};
</script>

<style lang="scss">
.task {
  line-height: 1rem;
  border-radius: 0.5rem;
  background: #ebebeb;
  padding: 1rem;
  display: flex;
  align-content: center;
  margin-bottom: 1rem;
  box-shadow: 2px 2px 2px silver;

  &.completed {
    opacity: 0.3;
  }

  input {
    background: none;
    border: none;
    outline: none;

    &:focus {
      background: #e4dbb8;
    }
  }

  h2,
  input {
    text-align: left;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 2rem;
  }
  a {
    line-height: 2rem;
    padding: 1rem;
  }
  .content {
    display: inline-block;
    width: 100%;

    input {
      width: 100% !important;
    }
  }
}
</style>
