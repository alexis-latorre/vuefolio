<template>
  <div>
    <Product
      title="Converter"
      appUrl="converter"
      :metas="metas"
      :history="history"
    >
      <template v-slot:description>
        This is a basic converter for binary to decimal and decimal to binary.
      </template>
      <Converter />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import Converter from "@/prods/converter/Converter";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "1.0.0" },
        { key: "Release date", value: "23/07/2021 14:35" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "1.0.0", date: "23/07/2021 14:35" }],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    Converter: Converter,
  },
};
</script>