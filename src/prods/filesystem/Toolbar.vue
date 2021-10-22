<template>
  <div class="mb-1-rem">
    <button @click="refresh"><i class="fas fa-undo"></i></button>
    <button @click="mkdir"><i class="fas fa-folder-plus"></i></button>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  emits: ["refresh"],
  data() {
    return {
      separator: "/",
      url: `${this.$backendUrl}/fs`,
    };
  },
  methods: {
    refresh() {
      this.$emit("refresh");
    },
    mkdir() {
      const directory = prompt("New folder's name");

      this.axios
        .post(`${this.url}/dir`, {
          _method: "PUT",
          parent: this.$props.path,
          directory: directory,
        })
        .then((res) => {
          this.refresh();
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style lang="less" scoped>
button {
  padding: 0.2rem;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>