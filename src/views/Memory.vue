<template>
  <div>
    <Product
      title="MemoryGame"
      appUrl="memory-game"
      :metas="metas"
      :history="history"
    >
      <template v-slot:description
        >Find all images pairs to beat the game.</template
      >
      <div id="mem">
        <MemoryGame />
      </div>
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import MemoryGame from "@/prods/memory-game/MemoryGame";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "0.1.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "0.1.0", date: "04/10/2021 15:01" }],
    };
  },
  components: {
    Product,
    MemoryGame,
  },
};
</script>

<style scoped>
#mem {
  max-width: 800px;
}
</style>