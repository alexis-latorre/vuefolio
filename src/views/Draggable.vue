<template>
  <div>
    <Product title="Draggable items" :metas="metas">
      <DraggableProd :items="items"></DraggableProd>
    </Product>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import DraggableProd from "../prods/draggable/DraggableProd.vue";

export default {
  data() {
    return {
      items: [
        { name: "Item 1" },
        { name: "Item 2" },
        { name: "Item 3" },
        { name: "Item 4" },
      ],
      metas: [
        { key: "Author", value: "Alexis La Torre" },
        { key: "Creation date", value: "07/07/2021" },
        { key: "Version", value: "0.1.0" },
      ],
    };
  },
  name: "Draggable",
  components: {
    Product: Product,
    DraggableProd: DraggableProd,
  },
};
</script>