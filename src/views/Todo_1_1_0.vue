<template>
  <div>
    <Product title="Todo list" appUrl="todo" :metas="metas" :history="history">
      <template v-slot:description>
        This is a "TO DO" list. It allows you to create tasks to takedown over
        the day.<br />This product features editable and draggable tasks.<br />
        Tasks are stored on a Firebase Firestore.
      </template>
      <TodoProd></TodoProd>
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import TodoProd from "@/prods/todo/1_1_0/TodoProd.vue";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "1.1.0" },
        { key: "Release date", value: "13/07/2021 16:08" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [
        { version: "1.1.0", date: "13/07/2021 16:08" },
        { version: "1.0.0", date: "08/07/2021 15:30" },
      ],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    TodoProd: TodoProd,
  },
};
</script>