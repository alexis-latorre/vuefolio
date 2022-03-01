<template>
  <div class="dark-bg">
    <div class="mb-5-rem">
      <a
        :data-title="neon"
        role="button"
        :class="`neon-btn ${color ? color : 'default'}`"
        @mouseenter="playSound"
        @mouseleave="stopSound"
      >
        <span class="flicker-fast">{{ neon }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audio: null,
      neon: "Button",
    };
  },
  props: { title: String, color: String, sound: String },
  methods: {
    playSound() {
      if (!this.audio) return;
      this.audio.volume = 1;
    },
    stopSound() {
      if (!this.audio) return;
      this.audio.volume = 0;
    },
  },
  mounted() {
    this.neon = this.$props.title ? this.$props.title : this.neon;
    if (!this.$props.sound) return;

    this.audio = new Audio(`${this.$appUrl}/assets/sound/${this.$props.sound}`);
    this.audio.play();
    this.audio.addEventListener("ended", () => {
      this.audio.play();
    });
    this.audio.volume = 0;
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Monoton");

$speed: 200ms;
$red: #a30000;
$red-glow: #ff0000;
$pink: #a3006d;
$pink-glow: #ff00aa;
$green: #00a000;
$green-glow: #00ff00;
$blue: #0000a0;
$blue-glow: #0000ff;
$cyan: #00a0a0;
$cyan-glow: #00ffff;
$yellow: #a0a000;
$yellow-glow: #ffff00;
$orange: #a05000;
$orange-glow: #ffa000;

@mixin button($color, $color-glow) {
  cursor: pointer;
  font-size: 3rem;
  font-family: "Monoton", cursive;

  color: $color;
  text-shadow: 0 0 0 lighten($color-glow, 15%), 0 0 0.25em $color;
  border: solid 0.125em $color;
  box-shadow: inset 0 0 1em $color, 0 0 1em $color;

  padding: 0.125em 0.5em;
  border-radius: 0.25em;

  position: relative;
  transition: background $speed linear, color $speed linear,
    border $speed linear, box-shadow $speed linear;
  outline: none;

  &:hover,
  &:focus {
    color: $color-glow;
    text-shadow: 0 0 0.0625em lighten($color-glow, 45%), 0 0 0.25em $color-glow;
    border: solid 0.125em $color-glow;
    box-shadow: inset 0 0 1em $color-glow, 0 0 2em $color-glow;

    transition: animation color $speed linear, border $speed linear,
      box-shadow $speed linear;
    &::after {
      content: attr(data-title);
      pointer-events: none;
      color: $color;
      position: absolute;
      top: 140%;
      height: 120%;
      left: 10%;
      transform: perspective(0.85em) rotate3d(1, 0, 0, 210deg);
      filter: blur(0.0125em);
      transition: color $speed linear, text-shadow $speed linear;
      animation: flicker 3s linear infinite;
    }

    .flicker-fast {
      animation: flicker 3s linear infinite;
    }
  }

  &::before {
    content: "";
    pointer-events: none;
    background: $color;
    position: absolute;
    top: 150%;
    left: -20%;
    width: 140%;
    height: 120%;

    transform: perspective(3em) rotateX(30deg);
    filter: blur(1em);
    transition: background $speed linear;
  }

  &:hover::after,
  &:focus::after {
    color: $color-glow;
    text-shadow: 0 0 0.0625em lighten($color-glow, 45%), 0 0 0.25em $color-glow;
    transition: color $speed linear, text-shadow $speed linear;
  }

  &:hover::before,
  &:focus::before {
    content: "";
    background: $color-glow;

    transition: background $speed linear;
  }
}

.neon-btn {
  &.default,
  &.pink {
    @include button($pink, $pink-glow);
  }
  &.red {
    @include button($red, $red-glow);
  }

  &.green {
    @include button($green, $green-glow);
  }

  &.blue {
    @include button($blue, $blue-glow);
  }

  &.cyan {
    @include button($cyan, $cyan-glow);
  }

  &.yellow {
    @include button($yellow, $yellow-glow);
  }

  &.orange {
    @include button($orange, $orange-glow);
  }
}

@keyframes flicker {
  0%,
  2.64%,
  8.27%,
  13.02%,
  16.38%,
  22.57%,
  25.25%,
  42.63%,
  46.99%,
  56.38%,
  66.45%,
  71.00%,
  71.92%,
  74.27%,
  82.36%,
  85.28%,
  96.62%,
  100% {
    //text-shadow: none;
    opacity: 0.99;
  }
  2.63%,
  8.26%,
  13.01%,
  16.37%,
  22.56%,
  25.24%,
  42.62%,
  46.98%,
  56.37%,
  66.44%,
  70.99%,
  71.91%,
  74.26%,
  82.35%,
  85.27%,
  96.61% {
    opacity: 0.4;
  }
}
.dark-bg {
  background: #222;
  margin: -1rem;
  height: 20rem;
  text-align: center;
  padding-top: 10%;
}
</style>