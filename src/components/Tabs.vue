<template>
  <div class="tabs--container">
    <div class="tabs--titles">
      <div
        :class="`tab--title${tab.selected ? ' selected' : ''}`"
        v-for="tab of tabs"
        :key="tab.name"
        @click="select(tab)"
      >
        {{ tab.title ? tab.title : "Tab" }}
      </div>
    </div>
    <div class="tab--content">
      <template v-for="tab of tabs" :key="tab.name">
        <slot v-if="tab.selected" :name="tab.name"></slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabsProps: Array,
  },
  data() {
    return {
      tabs: null,
    };
  },
  methods: {
    select(tab) {
      this.tabs.forEach((it) => {
        it.selected = false;
        if (it.name === tab.name) it.selected = true;
      });
    },
  },
  mounted() {
    this.tabs = this.$props.tabsProps;
  },
};
</script>

<style scoped lang="scss">
@import "../css/variables.scss";

.tabs--container {
  .tabs--titles {
    .tab--title {
      display: inline-block;
      border: solid 1px $purple;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      margin-left: 1px;
      border-top-left-radius: 0.2rem;
      border-top-right-radius: 0.6rem;
      cursor: pointer;
      background: lighten($purple, 40%);

      &:first-child {
        margin-left: 1rem;
      }

      &.selected {
        border-top: solid 4px $purple;
        border-bottom: solid 1px white;
        background: none;
      }
    }
  }

  .tab--content {
    border-radius: 0.2rem;
    margin-top: -1px;
    border: solid 1px $purple;
    width: calc(100% - 2rem);
    min-height: 10rem;
    padding: 1rem;
  }
}
</style>