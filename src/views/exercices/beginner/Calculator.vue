<template>
  <div>
    <Product
      title="Calculator"
      appUrl="Calculator"
      :metas="metas"
      :history="history"
    >
      <template v-slot:description>
        This app preview the border-radius CSS properties with editor. User can
        copy code in his clipboard too.
      </template>
      <CalculatorProd />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product";
import CalculatorProd from "@/prods/calculator/Calculator";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "0.1.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "0.1.0", date: "27/07/2021 10:07" }],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    CalculatorProd: CalculatorProd,
  },
};
</script>