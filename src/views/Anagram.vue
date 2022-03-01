<template>
  <p>
    <label>Input string: <input type="text" @input="change" /></label>
  </p>
  <template v-for="(array, letter) of out" :key="`${letter}_${array.length}`">
    <p v-if="letter === 'count'">
      {{ out.count }} anagram{{ out.count > 1 ? "s" : "" }} found
    </p>
    <template v-else>
      <h2>{{ letter.toUpperCase() }}</h2>
      <div class="anagram_list">
        <span class="anagram" v-for="anagram of array.sort()" :key="anagram">{{
          anagram
        }}</span>
      </div>
    </template>
  </template>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      out: [],
    };
  },
  methods: {
    change($evt) {
      console.log($evt.target.value);
      this.src = $evt.target.value;
      this.out = [];

      if (this.src.length > 0) {
        const split = this.src.split("");
        split.sort();
        this.out = this.permutation("", split.join(""));
      }
      if (this.out.length > 0) {
        const r = { count: 0 };
        this.out.forEach((str) => {
          const c = str.substr(0, 1);

          if (r[c]) {
            if (!r[c].includes(str)) {
              r[c].push(str);
              r.count++;
            }
          } else {
            r[c] = [str];
            r.count++;
          }
        });
        this.out = r;
      }
    },
    permutation(start, string) {
      //base case
      if (string.length === 1) {
        return [start + string];
      } else {
        var returnResult = [];
        for (var i = 0; i < string.length; i++) {
          var result = this.permutation(
            string[i],
            string.substr(0, i) + string.substr(i + 1)
          );
          for (var j = 0; j < result.length; j++) {
            returnResult.push(start + result[j]);
          }
        }

        return returnResult;
      }
    },
  },
};
</script>

<style scoped>
p,
h2 {
  margin-top: 1em;
}

.anagram_list {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
}

.anagram {
  display: inline-flex;
  min-width: 10ch;
}
</style>