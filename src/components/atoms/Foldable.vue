<template>
  <div v-if="title" class="foldable">
    <h3 @click="toggle" :class="folded ? 'folded' : 'unfolded'">{{ title }}</h3>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      folded: false,
    };
  },
  props: {
    title: String,
  },
  methods: {
    toggle() {
      this.folded = !this.folded;
    },
  },
};
</script>

<style scoped lang="scss">
.folded {
  cursor: pointer;

  &::after {
    margin-left: 1rem;
    content: "\f0da";
    font-family: "Font Awesome 5 Free";
  }

  & + .content {
    display: none;
  }
}
.unfolded {
  cursor: pointer;

  &::after {
    margin-left: 0.75rem;
    content: "\f0d7";
    font-family: "Font Awesome 5 Free";
  }

  & + .content {
    display: block;
  }
}
</style>
