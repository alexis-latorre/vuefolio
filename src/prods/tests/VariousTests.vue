<!-- Don't mind this file, it's my sandbox -->
<template>
  <input type="text" v-model="ext" />
  <!--input type=" file" @change="preload" />
  {{ file }}-->
  <button @click="loadSVG">Generate</button>
  <canvas height="1000" width="1000" style="border: solid 1px black" />
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
        ctx.save();
        ctx.font = "200px sans-serif";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.textAlign = "center";
        ctx.lineWidth = 10;
        ctx.fillText(this.ext.toUpperCase(), 380, 775);
        ctx.strokeText(this.ext.toUpperCase(), 380, 775);
        ctx.restore();
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
  watch: {
    ext() {
      if (this.ext.length > 3) this.ext = this.ext.substr(0, 3);
    },
  },
};
</script>