<template>
  <div>
    <Product title="Quiz" appUrl="Quiz" :metas="metas" :history="history">
      <template v-slot:description> Behold the Quiz. </template>
      <QuizProd />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import QuizProd from "@/prods/quiz/Quiz.vue";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "0.1.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "0.1.0", date: "30/07/2021 16:40" }],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    QuizProd: QuizProd,
  },
};
</script>