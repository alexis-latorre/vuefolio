<template>
  <StdInput :authorizedCars="authorizedCars">
    <template v-slot:prepend><slot name="prepend"></slot></template>
    <template v-slot:append><slot name="append"></slot></template>
  </StdInput>
</template>

<script>
import Input from "./Input";

export default {
  components: {
    StdInput: Input,
  },
  props: {
    authorizedCars: Array,
  },
};
</script>