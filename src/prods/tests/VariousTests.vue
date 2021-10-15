<!-- Don't mind this file, it's my sandbox -->
<template>
  <input type="text" v-model="ext" />
  <!--input type=" file" @change="preload" />
  {{ file }}-->
  <button @click="loadSVG">Generate</button>
  <canvas height="1000" width="1000" style="border: solid 1px black" />
  <SLPeople />
</template>

<script>
import Canvg from "canvg";
import SLPeople from "@/prods/simlife/SLPeople"

export default {
  data() {
    return {
      file: null,
      ext: "",
    };
  },
  components: {SLPeople},
  methods: {
    loadSVG() {
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      Canvg.from(
        ctx,
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIC0xLjU0OCA0NC4zNDEgNTUuNjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Yng9Imh0dHBzOi8vYm94eS1zdmcuY29tIj4KICA8cGF0aCBzdHlsZT0iZmlsbDogcmdiKDI0MCwgMjQwLCAyNDApOyIgZD0iTSA3LjIzMiA1Mi44NTUgTCA3LjM5MyA1Mi44NTQgTCA3LjU1NCA1Mi44NTMgQyA2Ljg5MyA1Mi44NTMgNi4yMzIgNTIuNDc4IDUuNzM2IDUxLjkxNiBDIDUuMjQgNTEuMzUzIDQuOTEgNTAuNjAzIDQuOTEgNDkuODUzIEwgNC45MSAyNi4zNTMgTCA0LjkxIDIuODUzIEMgNC45MSAyLjEwMyA1LjI0IDEuMzUzIDUuNzM2IDAuNzkxIEMgNi4yMzIgMC4yMjggNi44OTMgLTAuMTQ3IDcuNTU0IC0wLjE0NyBMIDMxLjc5IC0wLjE0NyBDIDMyLjY3MSAtMC4xNDcgMzMuMTEyIC0wLjE0NyAzNC40MzQgMS4zNTMgTCA0MS40ODQgOC4zNTMgQyA0Mi44MDYgOS44NTMgNDIuODA2IDkuODUzIDQyLjgwNiAxMS4zNTMgTCA0Mi44MDYgMjkuODUzIEwgNDIuODA2IDQ5Ljg1MyBDIDQyLjgwNiA1MC42MDMgNDIuNDc2IDUxLjM1MyA0MS45OCA1MS45MTYgQyA0MS40ODQgNTIuNDc4IDQwLjgyMyA1Mi44NTMgNDAuMTYyIDUyLjg1MyBMIDIzLjY5OCA1Mi44NTQgTCA3LjIzMiA1Mi44NTUiIGJ4Om9yaWdpbj0iLTAuMTE2Mjc5IDAiLz4KICA8cGF0aCBzdHlsZT0iZmlsbDogcmdiKDIxNiwgMjE2LCAyMTYpOyIgZD0iTSA0Mi4yMzYgMTAuMTA3IEwgNDEuMzkyIDguNjk3IEwgMzMuOTU2IDAuMzkzIEwgMzIuNDAyIDAuMzkzIEwgMzIuNDAyIDcuOTA2IEMgMzIuNDAyIDEwLjEwNyAzMi40MDIgMTAuMTA3IDM0LjUwNCAxMC4xMDcgTCA0Mi4yMzYgMTAuMTA3IFoiLz4KICA8cGF0aCBzdHlsZT0ic3Ryb2tlOiByZ2IoODAsIDgwLCA4MCk7IGZpbGw6IG5vbmU7IiBkPSJNIDcuMjMyIDUyLjc5OCBMIDcuMzkyIDUyLjc5NyBMIDcuNTUzIDUyLjc5NiBDIDYuODkyIDUyLjc5NiA2LjIzMSA1Mi40MjEgNS43MzUgNTEuODU5IEMgNS4yNCA1MS4yOTYgNC45MSA1MC41NDYgNC45MSA0OS43OTYgTCA0LjkxIDI2LjI5NiBMIDQuOTEgMi43OTYgQyA0LjkxIDIuMDQ2IDUuMjQgMS4yOTYgNS43MzUgMC43MzQgQyA2LjIzMSAwLjE3MSA2Ljg5MiAtMC4yMDQgNy41NTMgLTAuMjA0IEwgMzEuNzkgLTAuMjA0IEMgMzIuNjcxIC0wLjIwNCAzMy4xMTIgLTAuMjA0IDM0LjQzNCAxLjI5NiBMIDQxLjQ4NCA4LjI5NiBDIDQyLjgwNiA5Ljc5NiA0Mi44MDYgOS43OTYgNDIuODA2IDExLjI5NiBMIDQyLjgwNiAyOS43OTYgTCA0Mi44MDYgNDkuNzk2IEMgNDIuODA2IDUwLjU0NiA0Mi40NzYgNTEuMjk2IDQxLjk4IDUxLjg1OSBDIDQxLjQ4NCA1Mi40MjEgNDAuODIzIDUyLjc5NiA0MC4xNjIgNTIuNzk2IEwgMjMuNjk3IDUyLjc5NyBMIDcuMjMyIDUyLjc5OCIgYng6b3JpZ2luPSItMC4xMTYyNzkgMCIvPgogIDxwYXRoIHN0eWxlPSJzdHJva2U6IHJnYigwLCA1MywgMTQ2KTsgZmlsbDogcmdiKDM5LCAxMjEsIDE5Myk7IiBkPSJNIDIuNzE2IDQ0Ljc5NiBMIDI5LjgxNyA0NC43OTQgQyAzMC40NzIgNDQuNzk5IDMxLjIxNiA0NC4yOTYgMzEuMjE2IDQzLjI5NiBMIDMxLjIxNiAzMS4yOTYgQyAzMS4yMTYgMzAuMjk2IDMwLjcxNiAyOS43OTYgMjkuNzE2IDI5Ljc5NiBMIDIuNzE2IDI5Ljc5NiBDIDEuNzE2IDI5Ljc5NiAxLjIxNiAzMC4yOTYgMS4yMTYgMzEuMjk2IEwgMS4yMTYgNDMuMjk2IEMgMS4yMTYgNDQuMjk2IDEuNzE2IDQ0Ljc5NiAyLjcxNiA0NC43OTYgWiIvPgogIDxwYXRoIHN0eWxlPSJmaWxsOiBub25lOyBzdHJva2U6IHJnYig4MCwgODAsIDgwKTsiIGQ9Ik0gMzIuNDI2IC0wLjA5IEwgMzIuNDA1IDcuNDM0IEMgMzIuMzkgMTAuMSAzMi4zOSAxMC4xIDM1LjIwNiAxMC4xMDcgTCA0Mi44MDYgMTAuMTA3Ii8+Cjwvc3ZnPg=="
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