<template>
  <div>
    <Product
      title="Calculator"
      appUrl="Calculator"
      :metas="metas"
      :history="history"
    >
      <template v-slot:description> This app is a basic calculator. </template>
      <CalculatorProd />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product";
import CalculatorProd from "@/prods/calculator/Calc";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "1.0.0" },
        { key: "Release date", value: "27/07/2021 15:52" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "1.0.0", date: "27/07/2021 10:07" }],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    CalculatorProd: CalculatorProd,
  },
};
</script>