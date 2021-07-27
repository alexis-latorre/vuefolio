<template>
  <Input :authorizedCars="authorizedCars" />
</template>

<script>
import Input from "./Input";

export default {
  components: {
    Input: Input,
  },
  props: {
    authorizedCars: Array,
  },
};
</script>