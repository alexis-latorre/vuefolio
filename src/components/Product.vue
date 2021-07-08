<template>
  <div>
    <PageTitle>{{ title }}</PageTitle>
    <MainContainer :metas="metas" :history="history" :appUrl="appUrl">
      <slot></slot>
    </MainContainer>
  </div>
</template>

<script>
import PageTitle from "./PageTitle.vue";
import MainContainer from "./MainContainer.vue";

export default {
  components: {
    PageTitle: PageTitle,
    MainContainer: MainContainer,
  },
  props: {
    title: String,
    metas: Array,
    history: Array,
    appUrl: String,
  },
};
</script>