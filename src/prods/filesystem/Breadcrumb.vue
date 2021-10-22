<template>
  <ul>
    <li v-for="(leaf, i) of tree" :key="i">
      <a v-if="i !== tree.length - 1" class="clickable" @click="cd(link(i))">
        <i v-if="i === 0" class="fas fa-home"></i>
        <template v-else>{{ leaf }}</template>
      </a>
      <template v-else>
        <i v-if="i === 0" class="fas fa-home"></i>
        <template v-else>{{ leaf }}</template>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      separator: "/",
    };
  },
  props: {
    path: String,
  },
  emits: ["cd"],
  methods: {
    link(depth) {
      const parts = [];
      this.$props.path.split(this.separator).forEach((it, i) => {
        if (i <= depth) parts.push(it);
      });
      return parts.join(this.separator).length > 0
        ? parts.join(this.separator)
        : this.separator;
    },
    cd(path) {
      this.$emit("cd", path);
    },
  },
  computed: {
    tree() {
      if (this.$props.path === this.separator) return [""];
      return this.$props.path.split(this.separator);
    },
  },
};
</script>

<style lang="less" scoped>
ul {
  list-style: none;

  li {
    display: inline-block;
    margin-right: 0.5rem;

    &::before {
      font-family: "Font Awesome 5 Free";
      font-weight: bold;
      content: "\f105";
      margin-right: 0.5rem;
    }

    &:first-child {
      &::before {
        content: "";
        margin-right: 0;
      }
    }
  }
}
.clickable {
  text-decoration: underline;
  cursor: pointer;
}
</style>