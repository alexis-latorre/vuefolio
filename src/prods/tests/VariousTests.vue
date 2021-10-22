<!-- Don't mind this file, it's my sandbox -->
<template>
  <label>Bin: <input id="in" v-model="str" type="text" /></label>
  <button @click="compress">Compress</button>
  <pre>{{ format() }}</pre>
  <pre id="result">{{ compressed }}</pre>
  <p>{{ compressRate }}</p>
</template>

<script>
export default {
  data() {
    return {
      str: "",
      compressed: "",
      compressRate: "",
      dictionnaryMap: new Map(),
    };
  },
  methods: {
    format() {
      console.log("format");
      if (this.dictionnaryMap.toJSON) return this.dictionnaryMap.toJSON();
      else return "err";
    },
    compress() {
      const length = 8;
      this.compressed = "";
      const dictionnary = [];

      for (let i = 0; i < Math.ceil(this.str.length / length); i++) {
        const chunk = this.str.substr(i * length, length);

        if (dictionnary.indexOf(chunk) === -1) dictionnary.push(chunk);
      }

      let dicStr = dictionnary.length.toString().length;

      dictionnary.forEach((it, i) => {
        this.dictionnaryMap.set(it, this.pad(i.toString(), dicStr));
      });

      for (let i = 0; i < Math.ceil(this.str.length / length); i++) {
        const chunk = this.str.substr(i * length, length);
        this.compressed += this.dictionnaryMap.get(chunk) + "\r\n";
      }

      this.compressed = `${dicStr}:${this.compressed}`;
      this.compressRate = `${this.str.length} => ${this.compressed.length} (${
        dictionnary.join("").length
      }) : ${this.compressed.length + dictionnary.join("").length}`;
    },
    pad(str, len) {
      let r = "";
      for (let i = 0; i < len - str.length; i++) {
        r += "0";
      }
      return r + str;
    },
  },
};
</script>

<style scoped>
#result {
  overflow-x: scroll;
}
</style>