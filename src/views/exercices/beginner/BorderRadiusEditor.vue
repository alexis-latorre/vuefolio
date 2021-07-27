<template>
  <div>
    <Product
      title="Border Radius Editor"
      appUrl="BorderRadiusEditor"
      :metas="metas"
      :history="history"
    >
      <template v-slot:description>
        This app preview the border-radius CSS properties with editor. User can
        copy code in his clipboard too.
      </template>
      <BorderRadiusEditorProd />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import BorderRadiusEditorProd from "@/prods/border-radius/Editor";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "1.0.0" },
        { key: "Release date", value: "26/07/2021 17:06" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "1.0.0", date: "23/07/2021 15:20" }],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    BorderRadiusEditorProd: BorderRadiusEditorProd,
  },
};
</script>