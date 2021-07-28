<template>
  <div>
    <Product
      title="Cause & Effect"
      appUrl="CauseEffect"
      :metas="metas"
      :history="history"
    >
      <template v-slot:description>
        <p>
          Patterns are integral to software engineering and represent
          potentially reusable components in program logic. However, patterns
          aren't used only for program logic, they are exist in other domains
          such as DevOps, user support, and the user interface.
        </p>
        <br />
        <p>
          A common user interface pattern is to summarize data in one section of
          a page that consists of some type of list (like text, images, or
          icons) that describes or categorizes a set of data. When a list item
          is clicked, the detailed data behind it is displayed in an adjacent
          pane on the page.
        </p>
        <br />
        <p>
          For example, on a real estate site clicking an address in a list of
          properties for sale displays the details about the property in another
          part of the page.
        </p>
      </template>
      <CauseEffectProd />
    </Product>
  </div>
</template>

<script>
import Product from "@/components/Product";
import CauseEffectProd from "@/prods/cause-effect/CauseEffect";

export default {
  data() {
    return {
      metas: [
        { key: "Current version", value: "1.0.0" },
        { key: "Release date", value: "28/07/2021 14:58" },
        { key: "Author", value: "Alexis La Torre" },
      ],
      history: [{ version: "1.0.0", date: "28/07/2021 10:06" }],
    };
  },
  name: "Todo",
  components: {
    Product: Product,
    CauseEffectProd: CauseEffectProd,
  },
};
</script>