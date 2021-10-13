<!-- Don't mind this file, it's my sandbox -->
<template>
  <input type="text" v-model="ext" />
  <!--input type=" file" @change="preload" />
  {{ file }}-->
  <button @click="loadSVG">Generate</button>
  <canvas />
</template>

<script>
import Canvg from "canvg";

export default {
  data() {
    return {
      file: null,
      ext: "",
    };
  },
  components: {},
  methods: {
    loadSVG() {
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      Canvg.from(
        ctx,
        "https://raw.githubusercontent.com/alexis-latorre/vuefolio/main/src/assets/svg/file.svg"
      ).then((v) => {
        // Start SVG rendering with animations and mouse handling.
        v.start();
        ctx.font = "48px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(this.ext, 5, 31);
        v.stop();
      });
    },
    preload(evt) {
      const reader = new FileReader();
      reader.onload = function () {
        const array = new Uint8Array(this.result);
        const hex = [];
        array.forEach((it) => hex.push(it.toString()));
        console.log(
          hex
            .slice(0, 4)
            .map((it) => parseInt(it, 10).toString(16).toUpperCase())
        );
      };
      reader.readAsArrayBuffer(evt.target.files[0]);
      this.file = evt.target;
    },
  },
};
</script>