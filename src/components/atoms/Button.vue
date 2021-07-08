<template>
  <div>
    <a
      role="button"
      @click="click"
      :class="size !== undefined ? 'fs-' + size : ''"
      :style="'color: ' + (color !== undefined ? color : '')"
    >
      <i v-if="undefined !== leftIcon && !iconOnly" :class="leftIcon"></i>
      <i v-if="iconOnly" :class="middleIcon"></i>
      <slot v-else></slot>
      <i v-if="undefined !== rightIcon && !iconOnly" :class="rightIcon"></i>
      <span class="btn-label">
        <slot></slot>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    leftIcon: String,
    middleIcon: String,
    rightIcon: String,
    iconOnly: Boolean,
    size: String,
    click: Function,
    color: String,
  },
};
</script>

<style scoped lang="scss">
@import "../../css/variables.scss";

a {
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

.btn-label {
  font-size: 1rem;
  color: var(--text-color);
  vertical-align: middle;
}
</style>