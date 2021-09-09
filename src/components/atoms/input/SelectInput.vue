<template>
  <div class="input__container mt-1-rem mr-2-rem">
    <div class="input">
      <label
        :style="`width: ${width ? width : 300}px`"
        v-if="label"
        class="block mb-2"
        :for="identifier"
        >{{ label }}</label
      >
      <select
        :style="`width: ${width ? width + 'px' : 'auto'}`"
        v-model="selected"
        @change="select"
      >
        <template v-for="option of options" :key="option">
          <option selected :value="option.value">
            {{ option.text }}
          </option>
        </template>
      </select>
    </div>
  </div>
</template>

<script>
import * as common from "@/utils/common";

export default {
  data() {
    return {
      identifier: "",
      selected: "",
    };
  },
  props: {
    width: String,
    options: Array,
    id: String,
    label: String,
    defaultValue: String,
  },
  emits: ["update-value"],
  methods: {
    select() {
      this.$emit("update-value", this.selected);
    },
  },
  mounted() {
    if (this.$props.label && undefined === this.$props.id) {
      this.identifier =
        "select_" + common.normalize(this.$props.label) + "_" + Date.now();
    } else {
      this.identifier = this.$props.id;
    }

    this.selected = this.$props.defaultValue
      ? this.$props.defaultValue
      : this.$props.options[0].value;
  },
};
</script>

<style scoped lang="scss">
@import "../../../css/variables.scss";
$background: lighten($lavander, 8%);
$color: $purple;

.input__container {
  width: 100%;
}

.input label {
  cursor: pointer;
}

.input select {
  clear: both;
  color: $color;
  height: 2rem;
  width: calc(100% - 1rem);
  background: $background;
  border-radius: 0.2rem;
  border: solid 1px $color;
  min-height: 1rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    border: solid 1px lighten($color, 25%);
  }

  option {
    /* F**k Chrome */
    color: $blue;
  }
}
</style>