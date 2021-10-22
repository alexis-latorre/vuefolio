<template>
  <div>
    <Product title="File System" appUrl="fs" :metas="metas" :history="history">
      <template v-slot:description>REST File System</template>
      <FS />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import FS from "@/prods/filesystem/FileSystem";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "0.1.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "0.1.0", date: "15/10/2021 11:00" }],
    };
  },
  name: "FileSystem",
  components: {
    Product,
    FS,
  },
};
</script>