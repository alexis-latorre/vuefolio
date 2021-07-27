<template>
  <Input :isNumber="true" :min="min" :max="max" />
</template>

<script>
import Input from "./Input";

export default {
  components: {
    Input: Input,
  },
  props: {
    isNumber: Boolean,
    min: Number,
    max: Number,
  },
};
</script>