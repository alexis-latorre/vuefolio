<template>
  <div>
    <Product title="Home">
      <p>Access all my work done with VueJs</p>
    </Product>
  </div>
</template>

<script>
import Product from "../components/Product.vue";

export default {
  name: "Home",
  components: {
    Product: Product,
  },
};
</script>