<template>
  <div>
    <Product title="Budget" appUrl="Budget" :metas="metas" :history="history">
      <template v-slot:description> Budget application. </template>
      <BudgetProd />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import BudgetProd from "@/prods/budget/Budget.vue";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "0.1.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "0.1.0", date: "31/08/2021 16:52" }],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    BudgetProd: BudgetProd,
  },
};
</script>