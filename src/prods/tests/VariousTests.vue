<template>
  <div>
    <textarea class="textarea" @input="convert" v-model="raw"></textarea>
    <textarea v-model="b64"></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      raw: "",
      b64: "",
    };
  },
  methods: {
    convert() {
      this.b64 = btoa(this.raw);
    },
  },
};
</script>

<style scoped>
div {
  max-width: 100%;
}

textarea {
  width: calc(50% - 6px);
  margin: 2px;
  resize: none;
  height: 50vh;
}
</style>