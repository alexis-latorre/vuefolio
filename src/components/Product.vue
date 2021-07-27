<template>
  <div>
    <PageTitle>{{ title }}</PageTitle>
    <Foldable title="Description" v-if="hasDescription">
      <slot name="description"></slot>
    </Foldable>
    <MainContainer :metas="metas" :history="history" :appUrl="appUrl">
      <slot></slot>
    </MainContainer>
  </div>
</template>

<script>
import PageTitle from "./PageTitle.vue";
import MainContainer from "./MainContainer.vue";
import Foldable from "./atoms/Foldable.vue";

export default {
  components: {
    PageTitle: PageTitle,
    MainContainer: MainContainer,
    Foldable: Foldable,
  },
  props: {
    title: String,
    metas: Array,
    history: Array,
    appUrl: String,
  },
  computed: {
    hasDescription() {
      return this.$slots.description;
    },
  },
};
</script>

<style lang="scss">
.foldable {
  margin-top: 1rem;

  .content {
    padding: 0.5rem;
  }
}
</style>