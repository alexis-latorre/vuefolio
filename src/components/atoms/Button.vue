<template>
  <template v-if="action">
    <a
      role="button"
      :class="size !== undefined ? 'fs-' + size : ''"
      :style="'color: ' + (color !== undefined ? color : '')"
    >
      <template v-if="leftIcon || middleIcon || rightIcon">
        <i v-if="leftIcon && !iconOnly" :class="leftIcon"></i>
        <i v-else-if="iconOnly" :class="middleIcon"></i>
        <slot v-else></slot>
        <i v-if="rightIcon && !iconOnly" :class="rightIcon"></i>
      </template>
      <span v-else-if="!iconOnly" class="btn-label">
        <slot></slot>
      </span>
    </a>
  </template>
  <button v-else class="btn">
    <template v-if="leftIcon || middleIcon || rightIcon">
      <i v-if="undefined !== leftIcon && !iconOnly" :class="leftIcon"></i>
      <i v-else-if="iconOnly" :class="middleIcon"></i>
      <slot v-else></slot>
      <i v-if="undefined !== rightIcon && !iconOnly" :class="rightIcon"></i>
    </template>
    <span v-else class="btn-label">
      <slot></slot>
    </span>
  </button>
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
    action: Boolean,
  },
};
</script>

<style scoped lang="scss">
@import "../../css/variables.scss";

.btn {
  font-size: 1rem;
  display: inline-block;
  border: solid 1px $purple;
  background: lighten($purple, 10%);
  color: white;
  font-weight: bold;
  padding: 0.8rem;
  border-radius: 0.4rem;
  cursor: pointer;

  &:hover {
    border: solid 1px $purple;
    background: lighten($purple, 20%);
  }

  &:active {
    border: solid 1px lighten($purple, 20%);
    background: $purple;
  }

  &:focus {
    border: solid 1px $purple;
    background: white;
    color: $purple;
    outline: none;
  }
}

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