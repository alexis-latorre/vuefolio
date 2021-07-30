<template>
  <div>
    <Product
      title="Countdown timer"
      appUrl="countdown"
      :metas="metas"
      :history="history"
    >
      <template v-slot:description>
        <p>
          We all have important events we look forward to in life, birthdays, anniversaries, and holidays to name a few. Wouldn't it be nice to have an app that counts down the months, days, hours, minutes, and seconds to an event? Countdown Timer is just that app!
        </p>
        <br />
        <p>
          The objective of Countdown Timer is to provide a continuously decrementing display of the he months, days, hours, minutes, and seconds to a user entered event.
        </p>
      </template>
      <Countdown />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import Countdown from "@/prods/countdown/Countdown";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "1.0.0" },
        { key: "Release date", value: "N/A" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "1.0.0", date: "30/07/2021 14:28" }],
    };
  },
  components: {
    Product: Product,
    Countdown: Countdown,
  },
};
</script>