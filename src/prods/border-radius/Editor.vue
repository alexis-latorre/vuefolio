<template>
  <div id="bre">
    <h3 class="h3 mb-3-rem">
      <span class="h3__content__numbered"
        >Play with the border radius properties</span
      >
    </h3>
    <div class="flex">
      <div id="panel">
        <div>
          <div class="mb-1-rem fs-s">
            <span v-if="!complex">simple</span>
            <a v-else href="#bre" @click="complex = false">simple</a> |
            <span v-if="complex">complex</span>
            <a v-else href="#bre" @click="complex = true">complex</a>
          </div>
          <div>
            <div class="inline-block">
              <div :class="'linked' + (complex ? ' complex' : '')">
                <i v-if="linked" @click="toggleLink" class="fas fa-link"></i>
                <i v-else @click="toggleLink" class="fas fa-unlink"></i>
              </div>
              <NumberInput
                v-if="!complex"
                width="100"
                id="tl"
                label="Top left"
                :min="0"
                :max="100"
                append="px"
                :value="borderRadiusTL"
                @update-value="changeValue('borderRadiusTL', $event)"
              />
              <fieldset v-else>
                <legend>Top left</legend>
                <NumberInput
                  width="80"
                  id="tl"
                  :min="0"
                  :max="100"
                  append="/"
                  :value="borderRadiusTL"
                  @update-value="changeValue('borderRadiusTL', $event)"
                />
                <NumberInput
                  width="80"
                  id="tlv"
                  :min="0"
                  :max="100"
                  append="px"
                  :value="borderVerticalRadiusTL"
                  @update-value="changeValue('borderVerticalRadiusTL', $event)"
                />
              </fieldset>
              <br />
              <NumberInput
                v-if="!complex"
                width="100"
                id="tr"
                label="Top right"
                :min="0"
                :max="100"
                append="px"
                :value="borderRadiusTR"
                @update-value="changeValue('borderRadiusTR', $event)"
              />
              <fieldset v-else>
                <legend>Top right</legend>
                <NumberInput
                  width="80"
                  id="tr"
                  :min="0"
                  :max="100"
                  append="px"
                  :value="borderRadiusTR"
                  @update-value="changeValue('borderRadiusTR', $event)"
                />
                <NumberInput
                  width="80"
                  id="trv"
                  :min="0"
                  :max="100"
                  append="px"
                  :value="borderVerticalRadiusTR"
                  @update-value="changeValue('borderVerticalRadiusTR', $event)"
                />
              </fieldset>
              <bl />
              <NumberInput
                v-if="!complex"
                width="100"
                id="bl"
                label="Bottom left"
                :min="0"
                :max="100"
                append="px"
                :value="borderRadiusBL"
                @update-value="changeValue('borderRadiusBL', $event)"
              />
              <fieldset v-else>
                <legend>Bottom left</legend>
                <NumberInput
                  width="80"
                  id="bl"
                  :min="0"
                  :max="100"
                  append="px"
                  :value="borderRadiusBL"
                  @update-value="changeValue('borderRadiusBL', $event)"
                />
                <NumberInput
                  width="80"
                  id="blv"
                  :min="0"
                  :max="100"
                  append="px"
                  :value="borderVerticalRadiusBL"
                  @update-value="changeValue('borderVerticalRadiusBL', $event)"
                />
              </fieldset>
              <br />
              <NumberInput
                v-if="!complex"
                width="100"
                id="br"
                label="Bottom right"
                :min="0"
                :max="100"
                append="px"
                :value="borderRadiusBR"
                @update-value="changeValue('borderRadiusBR', $event)"
              />
              <fieldset v-else>
                <legend>Bottom right</legend>
                <NumberInput
                  width="80"
                  id="br"
                  :min="0"
                  :max="100"
                  append="px"
                  :value="borderRadiusBR"
                  @update-value="changeValue('borderRadiusBR', $event)"
                />
                <NumberInput
                  width="80"
                  id="brv"
                  :min="0"
                  :max="100"
                  append="px"
                  :value="borderVerticalRadiusBR"
                  @update-value="changeValue('borderVerticalRadiusBR', $event)"
                />
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div id="preview" :style="previewCSS"></div>
    </div>
    <div v-if="previewCSS" id="code">
      <h3 class="h3 mt-2-rem">
        <span class="h3__content__numbered">Get your code snippet</span>
      </h3>
      <pre>
.border-radius { {{ previewCSS }}
}
    </pre
      >
    </div>
  </div>
</template>

<script>
import NumberInput from "@/components/atoms/input/NumberInput";

export default {
  data() {
    return {
      complex: false,
      linked: false,
      borderRadiusTL: 0,
      borderRadiusTR: 0,
      borderRadiusBL: 0,
      borderRadiusBR: 0,
      borderRadiusTLMem: 0,
      borderRadiusTRMem: 0,
      borderRadiusBLMem: 0,
      borderRadiusBRMem: 0,
      borderVerticalRadiusTL: 0,
      borderVerticalRadiusTR: 0,
      borderVerticalRadiusBL: 0,
      borderVerticalRadiusBR: 0,
      borderVerticalRadiusTLMem: 0,
      borderVerticalRadiusTRMem: 0,
      borderVerticalRadiusBLMem: 0,
      borderVerticalRadiusBRMem: 0,
    };
  },
  components: {
    NumberInput: NumberInput,
  },
  methods: {
    toggleLink() {
      this.linked = !this.linked;
      if (this.linked) {
        this.borderRadiusTLMem = this.borderRadiusTL;
        this.borderRadiusTRMem = this.borderRadiusTR;
        this.borderRadiusBLMem = this.borderRadiusBL;
        this.borderRadiusBRMem = this.borderRadiusBR;
        this.borderRadiusTL = this.borderRadiusTL;
        this.borderRadiusTR = this.borderRadiusTL;
        this.borderRadiusBL = this.borderRadiusTL;
        this.borderRadiusBR = this.borderRadiusTL;
        this.borderVerticalRadiusTLMem = this.borderVerticalRadiusTL;
        this.borderVerticalRadiusTRMem = this.borderVerticalRadiusTR;
        this.borderVerticalRadiusBLMem = this.borderVerticalRadiusBL;
        this.borderVerticalRadiusBRMem = this.borderVerticalRadiusBR;
        this.borderVerticalRadiusTL = this.borderVerticalRadiusTL;
        this.borderVerticalRadiusTR = this.borderVerticalRadiusTL;
        this.borderVerticalRadiusBL = this.borderVerticalRadiusTL;
        this.borderVerticalRadiusBR = this.borderVerticalRadiusTL;
      } else {
        this.borderRadiusTL = this.borderRadiusTLMem;
        this.borderRadiusTR = this.borderRadiusTRMem;
        this.borderRadiusBL = this.borderRadiusBLMem;
        this.borderRadiusBR = this.borderRadiusBRMem;
        this.borderVerticalRadiusTL = this.borderVerticalRadiusTLMem;
        this.borderVerticalRadiusTR = this.borderVerticalRadiusTRMem;
        this.borderVerticalRadiusBL = this.borderVerticalRadiusBLMem;
        this.borderVerticalRadiusBR = this.borderVerticalRadiusBRMem;
      }
    },
    changeValue(target, value) {
      if (typeof value === "string") {
        value = parseInt(value, 10);
        this[target] = value;
        this[target + "Mem"] = value;

        if (this.linked) {
          this.borderRadiusTL = value;
          this.borderRadiusTR = value;
          this.borderRadiusBL = value;
          this.borderRadiusBR = value;
          this.borderVerticalRadiusTL = value;
          this.borderVerticalRadiusTR = value;
          this.borderVerticalRadiusBL = value;
          this.borderVerticalRadiusBR = value;
        }
      }
    },
  },
  computed: {
    previewCSS() {
      let css = "";

      if (this.complex) {
        let leftSide = "";
        let rightSide = "";
        if (
          this.borderRadiusTL > 0 &&
          this.borderRadiusTL === this.borderRadiusTR &&
          this.borderRadiusTR === this.borderRadiusBL &&
          this.borderRadiusBL === this.borderRadiusBR
        ) {
          leftSide = this.borderRadiusTL + "px";
        } else {
          leftSide += `${
            this.borderRadiusTL > 0 ? this.borderRadiusTL : "0"
          }px `;
          leftSide += `${
            this.borderRadiusTR > 0 ? this.borderRadiusTR : "0"
          }px `;
          leftSide += `${
            this.borderRadiusBR > 0 ? this.borderRadiusBR : "0"
          }px `;
          leftSide += `${
            this.borderRadiusBL > 0 ? this.borderRadiusBL : "0"
          }px`;
        }

        if (
          this.borderVerticalRadiusTL > 0 &&
          this.borderVerticalRadiusTL === this.borderVerticalRadiusTR &&
          this.borderVerticalRadiusTR === this.borderVerticalRadiusBL &&
          this.borderVerticalRadiusBL === this.borderVerticalRadiusBR
        ) {
          rightSide = this.borderVerticalRadiusTL + "px";
        } else {
          rightSide += `${
            this.borderVerticalRadiusTL > 0
              ? this.borderVerticalRadiusTL
              : this.borderRadiusTL
          }px `;
          rightSide += `${
            this.borderVerticalRadiusTR > 0
              ? this.borderVerticalRadiusTR
              : this.borderRadiusTR
          }px `;
          rightSide += `${
            this.borderVerticalRadiusBR > 0
              ? this.borderVerticalRadiusBR
              : this.borderRadiusBR
          }px `;
          rightSide += `${
            this.borderVerticalRadiusBL > 0
              ? this.borderVerticalRadiusBL
              : this.borderRadiusBL
          }px`;
        }

        if (leftSide === rightSide) {
          css += `
    border-radius: ${leftSide};`;
        } else {
          css += `
    border-radius: ${leftSide} / ${rightSide};`;
        }
      } else {
        if (
          this.borderRadiusTL > 0 &&
          this.borderRadiusTL === this.borderRadiusTR &&
          this.borderRadiusTR === this.borderRadiusBL &&
          this.borderRadiusBL === this.borderRadiusBR
        ) {
          css += `
    border-radius: ${this.borderRadiusTL}px;`;
        } else {
          css += `
  border-radius: `;
          css += `${this.borderRadiusTL > 0 ? this.borderRadiusTL : "0"}px `;
          css += `${this.borderRadiusTR > 0 ? this.borderRadiusTR : "0"}px `;
          css += `${this.borderRadiusBR > 0 ? this.borderRadiusBR : "0"}px `;
          css += `${this.borderRadiusBL > 0 ? this.borderRadiusBL : "0"}px; `;
        }
      }
      return css;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../css/variables.scss";
#preview {
  width: 200px;
  aspect-ratio: 1/1;
  background: $purple;
}

fieldset {
  border: none;
}

.linked {
  float: left;
  max-width: 3rem;
  text-align: right;
  height: 12rem;
  margin-top: 2rem;
  margin-right: 1rem;
  border-right: solid 4px $purple;

  * {
    color: $purple;
    margin-right: -1rem;
    margin-top: 5rem;
    background: white;
    padding: 0.3rem;
    cursor: pointer;
  }
}

.complex {
  height: 18rem;

  * {
    margin-top: 8rem;
  }
}

#bre {
  counter-reset: h3;
}

.h3 {
  display: inline-block;
  &__content__numbered::before {
    counter-increment: h3;
    content: counter(h3) ". ";
  }
}
</style>