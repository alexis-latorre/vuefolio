<template>
  <div>
    <Product title="MyRH" appUrl="myrh" :metas="metas" :history="history">
      <template v-slot:description>HR Application.</template>
      <MyRH />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product";
import MyRH from "@/prods/myrh/MyRH";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "0.1.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "0.1.0", date: "20/01/2022 17:24" }],
    };
  },
  name: "Todo",
  components: {
    Product,
    MyRH,
  },
};
</script>