<template>
  <Toolbar v-on:refresh="refresh" :path="path" />
  <Breadcrumb v-on:cd="cd" :path="path" />
  <hr />
  <FileExplorer v-on:cd="cd" v-on:refresh="refresh" :path="path" :key="time" />
</template>

<script>
import Toolbar from "./Toolbar";
import Breadcrumb from "./Breadcrumb";
import FileExplorer from "./FileExplorer";

export default {
  components: {
    Toolbar,
    Breadcrumb,
    FileExplorer,
  },
  data() {
    return {
      path: "/",
      time: Date.now(),
    };
  },
  methods: {
    cd(path) {
      this.path = path;
    },
    refresh() {
      this.time = Date.now();
    },
  },
};
</script>