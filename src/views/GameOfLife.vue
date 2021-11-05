<template>
  <div>
    <Product title="GameOfLife" appUrl="gameoflife">
      <template v-slot:description>The mythic game of Life.</template>
      <GameOfLife />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product";
import GameOfLife from "@/prods/gameoflife/GameOfLife";

export default {
  components: { Product, GameOfLife },
};
</script>