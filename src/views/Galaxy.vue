<template>
  <div>
    <Product title="Galaxy" appUrl="galaxy" :metas="metas" :history="history">
      <template v-slot:description> Behold the Galaxy. </template>
      <GalaxyProd />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import GalaxyProd from "@/prods/galaxy/Galaxy.vue";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "1.0.0" },
        { key: "Release date", value: "29/07/2021 10:40" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "1.0.0", date: "29/07/2021 09:00" }],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    GalaxyProd: GalaxyProd,
  },
};
</script>