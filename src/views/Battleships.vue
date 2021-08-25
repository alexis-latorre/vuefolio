<template>
  <div>
    <Product title="Battleships" appUrl="battleships" :metas="metas" :history="history">
      <template v-slot:description>Battleships game</template>
      <Battleships />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import Battleships from "@/prods/battleships/Battleships.vue";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "0.1.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "0.1.0", date: "24/08/2021 10:42" }],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    Battleships: Battleships,
  },
};
</script>