<!-- Don't mind this file, it's my sandbox -->
<template>
  <input type="file" @change="preload" />
  {{ file }}
  <button @click="loadSVG">Go</button>
  <canvas />
</template>

<script>
import Canvg from "canvg";

export default {
  data() {
    return {
      file: null,
    };
  },
  components: {},
  methods: {
    loadSVG() {
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      console.log("get file");
      Canvg.from(
        ctx,
        "https://file-examples-com.github.io/uploads/2020/03/file_example_SVG_20kB.svg"
      ).then((v) => {
        console.log("start");
        // Start SVG rendering with animations and mouse handling.
        v.start();
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