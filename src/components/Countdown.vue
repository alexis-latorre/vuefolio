<template>
  <div
    id="countdown"
    :style="`height: ${Math.ceil(timerRadius * 2.5)}px; width: ${Math.ceil(
      timerRadius * 2.5
    )}px`"
  >
    <div
      id="countdown-number"
      :style="`line-height: ${Math.ceil(
        timerRadius * 2.5
      )}px; font-size: ${Math.ceil(timerRadius * 0.8)}px`"
    >
      {{ Math.round(timer) }}
    </div>
    <svg
      :style="`height: ${Math.ceil(timerRadius * 2.5)}px; width: ${Math.ceil(
        timerRadius * 2.5
      )}px`"
    >
      <circle
        id="background-circle"
        :style="`stroke-dasharray: ${rad}px;stroke-width: ${strokeThickness}px`"
        :r="timerRadius"
        :cx="Math.ceil(timerRadius * 1.25)"
        :cy="Math.ceil(timerRadius * 1.25)"
      ></circle>
      <circle
        id="countdown-circle"
        :r="timerRadius"
        :cx="Math.ceil(timerRadius * 1.25)"
        :cy="Math.ceil(timerRadius * 1.25)"
        :style="`stroke-dasharray: ${rad}px;stroke-width: ${strokeThickness}px;
          stroke-dashoffset: ${rad - timer * (rad / timerLimit)}px;
          stroke: ${
            (timer / timerLimit) * 100 >= 30
              ? 'green'
              : (timer / timerLimit) * 100 >= 10
              ? 'orange'
              : 'red'
          }`"
      ></circle>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: 0,
      timerLimit: 10,
      interval: null,
      rad: 252,
      timerRadius: 40,
      strokeThickness: 10,
    };
  },
  props: {
    timeLimit: Number,
    radius: Number,
    thickness: Number,
    startOn: Boolean,
    callback: {
      func: Function,
      args: Object,
    },
    running: Boolean,
    iterator: Number,
  },
  methods: {
    init() {
      clearInterval(this.interval);
      this.timer = this.$props.timeLimit ? this.$props.timeLimit : 10;
      this.interval = setInterval(() => {
        this.timer -= 0.01;
        if (this.timer <= 0) {
          this.timer = 0;
          clearInterval(this.interval);

          if (this.$props.callback && this.$props.callback.func)
            this.$props.callback.func(
              this.$props.callback.args ? this.$props.callback.args : null
            );
        }
      }, 10);
    },
  },
  mounted() {
    this.timerLimit = this.$props.timeLimit ? this.$props.timeLimit : 10;
    this.timerRadius = this.$props.radius ? this.$props.radius : 40;
    this.rad = Math.ceil(2 * Math.PI * this.timerRadius);
    this.strokeThickness = this.$props.thickness
      ? this.$props.thickness
      : Math.round(this.timerRadius / 4);
    if (this.$props.startOn) this.init();
  },
  watch: {
    running() {
      if (this.$props.running === false) clearInterval(this.interval);
    },
    iterator() {
      this.init();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../css/variables.scss";

#countdown {
  position: relative;
  margin: auto;
  text-align: center;
}

#countdown-number {
  color: $blue;
  display: inline-block;
  font-weight: bold;
}

svg {
  position: absolute;
  top: 0;
  right: 0;
  transform: rotateY(-180deg) rotateZ(-90deg);
}

#background-circle {
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke: #eee;
  fill: none;
}

#countdown-circle {
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  fill: none;
}
</style>