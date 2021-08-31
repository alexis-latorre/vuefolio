<!-- Don't mind this file, it's my sandbox -->
<template>
  <div id="mouse-previewer">
    <div id="mouse" :style="`left: ${mouse.x}; top: ${mouse.y}`">mouse</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouse: {
        x: "50%",
        y: "50%",
      },
    };
  },
  methods: {
    getMouse() {
      this.axios.get("https://1l74f.sse.codesandbox.io/mouse").then((res) => {
        this.mouse.x = res.data.x + "px";
        this.mouse.y = res.data.y + "px";
        this.getMouse();
      });
    },
  },
  mounted() {
    this.getMouse();
  },
};
</script>

<style scoped>
#mouse-previewer {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border: solid 1px silver;
}
#mouse {
  position: absolute;
}
</style>