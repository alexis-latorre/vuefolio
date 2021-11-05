<template>
  <CSV2JSON />
</template>

<script>
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
    CSV2JSON,
  },
};
</script>