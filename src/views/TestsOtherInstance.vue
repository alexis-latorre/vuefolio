<template>
  <div>
    <Product title="The LAB (other instance" :metas="metas">
      <VariousTestsOtherInstance></VariousTestsOtherInstance>
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import VariousTestsOtherInstance from "@/prods/tests/VariousTestsOtherInstance.vue";

export default {
  data() {
    return {
      metas: [{ key: "Author", value: "Alexis La Torre" }],
    };
  },
  name: "Lab",
  components: {
    Product: Product,
    VariousTestsOtherInstance: VariousTestsOtherInstance,
  },
};
</script>