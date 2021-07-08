<template>
  <div>
    <Product title="Todo list" appUrl="todo" :metas="metas" :history="history">
      <TodoProd></TodoProd>
    </Product>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import TodoProd from "../prods/todo/1_0_0/TodoProd.vue";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "1.0.0" },
        { key: "Release date", value: "08/07/2021 15:30" },
        { key: "Creation date", value: "28/06/2021 11:16" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "1.0.0", date: "08/07/2021 15:30", current: true }],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    TodoProd: TodoProd,
  },
};
</script>