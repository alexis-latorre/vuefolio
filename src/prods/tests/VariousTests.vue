<!-- Don't mind this file, it's my sandbox -->
<template>
  <input type="file" @change="preload" />
  {{ file }}
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },
  components: {},
  methods: {
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