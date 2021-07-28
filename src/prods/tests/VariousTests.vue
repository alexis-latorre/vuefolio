<template>
  <h2>{{ test }}</h2>
  <TextInput :value="test" @update-value="changeValue($event)" />
  <button @click="test = 'bonjour'">Change</button>
</template>

<script>
import { auth } from "@/firebase";
import TextInput from "@/components/atoms/input/TextInput";
export default {
  components: {
    TextInput: TextInput,
  },
  data() {
    return {
      test: "initial",
    };
  },
  methods: {
    changeValue(val) {
      this.test = val;
    },
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = undefined;
      }
    });
  },
};
</script>