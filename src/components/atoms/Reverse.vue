<template>
  <span class="reverse">
    <slot></slot>
  </span>
</template>

<script>
export default {};
</script>

<style scoped>
.reverse {
  display: inline-block;
  transform: rotateY(180deg);
}
</style>