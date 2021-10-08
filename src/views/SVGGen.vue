<template>
  <div>
    <Product title="SVG generator" appUrl="svg" :metas="metas" :history="history">
      <template v-slot:description>SVG editor. You can draw and save SVG files.</template>
      <SVGGen />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import SVGGen from "@/prods/svg-generator/SVGGen";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "0.1.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "0.1.0", date: "29/09/2021 14:25" }],
    };
  },
  name: "Todo",
  components: {
    Product,
    SVGGen,
  },
};
</script>