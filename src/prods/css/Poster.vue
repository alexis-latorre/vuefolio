<template>
  <div :style="`height: ${height}px; width: ${width}px`" class="poster">
    <div class="background">
      <img @load="load" ref="img" :src="src" />
    </div>
    <div class="alpha"></div>
    <div class="foreground" ref="foreground">
      <div class="text" v-for="line of caption.split('#')" :key="line">
        <div>
          <span class="line">
            {{ line }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    caption: String,
  },
  data() {
    return {
      height: 0,
      width: 0,
      lines: [],
    };
  },
  methods: {
    load() {
      this.height = this.$refs.img.height;
      this.width = this.$refs.img.width;
    },
    resize() {
      this.lines = this.$props.caption.split("\n");
    },
  },
  watch: {
    caption() {
      this.resize();
    },
  },
  mounted() {
    this.resize();
  },
};
</script>

<style lang="scss" scoped>
.poster {
  position: relative;

  .background,
  .foreground,
  .alpha {
    position: absolute;
  }

  .background {
    img {
      max-width: 50vw;
      object-fit: cover;
      border: solid 1px black;
    }
  }

  .alpha,
  .foreground {
    width: 50%;
    height: calc(100% + 2px);
  }

  .alpha {
    background: #ffffff80;
  }

  .foreground {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: stretch;
    background: black;
    mix-blend-mode: multiply;
    color: white;

    .text {
      text-transform: uppercase;
      width: calc(100% - 8px);
      padding: 4px;
      flex-grow: 1;

      div {
        display: table;
        height: 100%;
        width: 100%;
        font-family: Impact;
        text-align: right;
        letter-spacing: 0.2em;

        span {
          display: table-cell;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>