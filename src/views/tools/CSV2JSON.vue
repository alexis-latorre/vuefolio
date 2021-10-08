<template>
  <div>
    <Product
      title="CSV2JSON"
      appUrl="csv2json"
      :metas="metas"
      :history="history"
    >
      <template v-slot:description> Convert CSV data to JSON </template>
      <CSV2JSON />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product";
import CSV2JSON from "@/prods/tools/CSV2JSON";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "0.1.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "0.1.0", date: "07/10/2021 11:01" }],
    };
  },
  components: {
    Product,
    CSV2JSON,
  },
};
</script>