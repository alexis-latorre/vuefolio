<template>
  <div class="main-container">
    <div id="grid-container">
      <div v-if="ended" id="end-screen">
        <h1>You Win!</h1>
      </div>
      <div v-if="null !== grid">
        <div class="row">
          <div class="cell">&nbsp;</div>
          <div v-for="i in 10" :key="i" class="cell">{{ i }}</div>
        </div>
        <div v-for="(row, i) of grid" :key="row" class="row">
          <div class="cell">{{ letters[i] }}</div>
          <div
            v-for="(cell, j) of row"
            :key="cell"
            :class="`cell ${
              cell === '*'
                ? 'water'
                : cell === 'O'
                ? 'splash'
                : cell === 'S'
                ? 'sunk'
                : 'hit'
            }`"
          >
            <a v-if="!ended" @click="strike(j, i)">&nbsp;</a>
            <template v-else>&nbsp;</template>
          </div>
        </div>
      </div>
    </div>
    <div id="stats-container">
      <h3 class="h3">
        <span class="h3__content">Statistics</span>
      </h3>
      <div class="stats">
        <p v-for="(stat, i) in stats" :key="i">
          {{ stat.key }}: {{ stat.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgeGame: null,
      grid: null,
      stats: null,
      coordinates: "",
      canStrike: true,
      ended: false,
      letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    };
  },
  props: {
    game: Object,
  },
  emits: ["end"],
  methods: {
    changeValue(target, value) {
      this[target] = value;
    },
    init() {
      this.axios
        .get(`${this.bgeGame.url}/ui-grid/${this.bgeGame.grid}`)
        .then((res) => {
          this.grid = res.data.grid;
        });
    },
    strike(x, y) {
      if (!this.canStrike) return;
      this.canStrike = false;
      const payload = {
        x: x,
        y: y,
      };
      this.axios
        .post(`${this.bgeGame.url}/strike/${this.bgeGame.uuid}`, payload)
        .then((res) => {
          this.ended = res.data.ended;
          this.grid = res.data.grid;
          this.stats = res.data.stats;

          if (this.ended) {
            this.$emit("end");
          } else {
            this.coordinates = "";
            this.canStrike = true;
          }
        });
    },
  },
  mounted() {
    this.bgeGame = this.$props.game;
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  aspect-ratio: 16/9;
}

#grid-container {
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: calc(100% - 2px);
  padding: 1px;
}
#end-screen {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(207, 255, 217, 0.8);
  display: inline-block;
  height: 100%;
  aspect-ratio: 1/1;

  h1 {
    width: 100%;
    padding-top: calc(50% - 0.5em);
    text-align: center;
    display: inline-block;
    margin: auto;
  }
}
#stats-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  .h3 {
    text-align: center;
    display: inline-block;
  }
  .stats p {
    line-height: 1rem;
  }
}
.row {
  display: block;
  line-height: 24px;
}
.cell {
  font-size: 18px;
  font-family: Courier;
  display: inline-block;
  width: 24px;
  text-align: center;
  border: solid 1px gray;
  margin: -1px;

  a {
    display: block;
    line-height: 24px;
    cursor: pointer;
  }
}
.water {
  background: #7f95f7;

  &:hover {
    background: lighten(#7f95f7, 10%);
  }
}
.hit {
  background: #ee6d31;
}
.splash {
  background: #9bdaff;
}
.sunk {
  background: #333;
}
</style>