<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script>
export default {};
</script>

<style scoped>
h1::before {
  font-family: "Font Awesome 5 Free";
  content: "\f138";
  margin-right: 1rem;
}

h1 {
  text-align: left;
}
</style>