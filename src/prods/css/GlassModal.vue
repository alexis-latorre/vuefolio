<template>
  <div class="container" @mouseup="locked = false" @mousemove="move">
    <div class="bg"></div>
    <div ref="modal" class="modal">
      <div ref="glass" class="glass"></div>
      <div class="modal-container">
        <div class="bar" @mousedown="locked = true"></div>
        <div class="content">Test</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locked: false,
    };
  },
  methods: {
    move(evt) {
      if (this.locked) {
        const offsetX = 250;
        const offsetY = 150;
        this.$refs.modal.style.left = evt.clientX - offsetX + "px";
        this.$refs.modal.style.top = evt.clientY - offsetY + "px";
        this.$refs.glass.style.backgroundPosition =
          (evt.clientX - offsetX) * -1.1 +
          "px " +
          (evt.clientY - offsetY) * -1.1 +
          "px";
      }
    },
  },
  mounted() {
    this.$refs.modal.style.left = "0px";
    this.$refs.modal.style.top = "0px";
  },
};
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("https://media.istockphoto.com/photos/back-to-school-concept-and-artist-kid-concept-with-drawing-book-picture-id1214043257?k=20&m=1214043257&s=612x612&w=0&h=3Vrvs214AP0-LY7apxuQFWb-2LDN4AdpJ4fFCNqx6tQ=")
      no-repeat;
  }

  .modal {
    position: relative;
    width: 30vh;
    aspect-ratio: 8/5;

    .glass,
    .content {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .glass {
      background: url("https://media.istockphoto.com/photos/back-to-school-concept-and-artist-kid-concept-with-drawing-book-picture-id1214043257?k=20&m=1214043257&s=612x612&w=0&h=3Vrvs214AP0-LY7apxuQFWb-2LDN4AdpJ4fFCNqx6tQ=")
        no-repeat;
      background-position: 0px 0px;
      border-radius: 0.3rem;
      transform: scale(1.1);
      filter: blur(0.15em);
      box-shadow: 0rem 0rem 0.1em #30308050, 0.1rem 0.1rem 0.1em #30308050;
    }
    .content {
      padding: 1rem;
    }
    .bar {
      position: absolute;
      z-index: 9999;
      height: 1rem;
      width: 100%;
    }
  }
}
</style>