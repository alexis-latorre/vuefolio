<template>
  <div>
    <Product
      title="Christmas lights"
      appUrl="christmas-lights"
      :metas="metas"
      :history="history"
    >
      <template v-slot:description>
        <p>
          The ChristmasLights application relies on your development talents to
          create a mesmerizing light display. Your task is to draw seven colored
          circles in a row and based on a timer change the intensity of each
          circle. When a circle is brightened it's predecessor returns to its
          normal intensity.
        </p>
        <br />
        <p>
          This simulates the effect of a string of rippling lights, similar to
          the ones displayed during the Christmas Holidays.
        </p>
      </template>
      <ChristmasLights />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import ChristmasLights from "@/prods/christmas-lights/ChristmasLights";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "1.0.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "1.0.0", date: "28/07/2021 15:17" }],
    };
  },
  components: {
    Product: Product,
    ChristmasLights: ChristmasLights,
  },
};
</script>