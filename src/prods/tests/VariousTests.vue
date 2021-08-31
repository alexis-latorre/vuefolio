<!-- Don't mind this file, it's my sandbox -->
<template>
  <div id="mouse-container" @mousemove="updateMouse($event)">
    <div
      @mousemove="prevent($event)"
      id="mouse-position"
      :style="`left: ${mousePosition.x}; top: ${mousePosition.y}`"
    >
      {{ position }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position: "0 : 0",
      mousePosition: {
        x: "50%",
        y: "50%",
      },
      url: `${this.$backendUrl}/mouse`,
    };
  },
  methods: {
    prevent(evt) {
      evt.preventDefault();
    },
    updateMouse(evt) {
      this.position = `${evt.offsetX} : ${evt.offsetY}`;
      this.mousePosition.x = `${evt.offsetX - 90}px`;
      this.mousePosition.y = `${evt.offsetY - 40}px`;

      this.axios
        .post(this.url, {
          x: evt.offsetX,
          y: evt.offsetY,
        })
        .then();
    },
  },
};
</script>

<style scoped>
#mouse-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border: solid 1px silver;
}
#mouse-position {
  position: absolute;
  min-width: 70px;
  text-align: center;
  background: darkmagenta;
  font-size: 0.8rem;
  color: white;
  border: solid 1px silver;
  padding: 0.5em;
}
</style>