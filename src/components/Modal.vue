<template>
  <div class="modal-frame" v-if="open" @click="closeModal">
    <div class="modal-container" @click="$event.stopPropagation()">
      <div class="modal-header">
        <h3>{{ title ? title : "Modal title" }}</h3>
        <div class="modal-close-button" @click="closeModal">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    opened: Boolean,
  },
  emits: ["close"],
  data() {
    return {
      open: false,
    };
  },
  methods: {
    closeModal() {
      this.open = false;
      this.$emit("close");
    },
  },
  watch: {
    opened() {
      this.open = this.$props.opened;
    },
  },
  mounted() {
    this.open = this.$props.opened;
  },
};
</script>

<style lang="scss" scoped>
@import "../css/variables.scss";
$border: lighten($purple, 30%);

.modal-frame {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(51, 51, 51, 0.116);

  .modal-container {
    min-width: 400px;
    min-height: 50px;
    width: 70%;
    max-width: 70%;
    max-height: 70%;
    background: white;
    margin: 15%;
    border-radius: 6px;
    -webkit-box-shadow: 4px 4px 7px -3px rgba(0, 0, 0, 0.74);
    box-shadow: 4px 4px 7px -3px rgba(0, 0, 0, 0.74);
    border: solid 1px $border;

    .modal-header {
      display: flex;
      height: 50px;
      border-bottom: solid 1px $border;

      h3 {
        flex-grow: 1;
        line-height: 50px;
        padding-left: 1rem;
      }

      .modal-close-button {
        display: flex;
        border-left: solid 1px $border;

        &:hover {
          border-top-right-radius: 6px;
          background: lighten($border, 20%);
        }

        i {
          height: 50px;
          aspect-ratio: 1/1;
          text-align: center;
          line-height: 50px;
          margin: auto;
          cursor: pointer;
          font-size: 1.5rem;
          color: $purple;
        }
      }
    }

    .modal-content {
      margin: 1rem;
      margin-right: 0;
      padding-right: 1rem;
      max-height: calc(70vh - 51px - 2rem);
      overflow: auto;
    }
  }
}
</style>