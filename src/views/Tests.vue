<template>
  <div>
    <Product title="The LAB" :metas="metas">
      <VariousTests></VariousTests>
    </Product>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import VariousTests from "../prods/tests/VariousTests.vue";

export default {
  data() {
    return {
      metas: [{ key: "Author", value: "Alexis La Torre" }],
    };
  },
  name: "Lab",
  components: {
    Product: Product,
    VariousTests: VariousTests,
  },
};
</script>