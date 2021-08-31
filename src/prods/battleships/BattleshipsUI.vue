<template>
  <h2 class="mb-2-rem" :style="`color: ${game.players[currentPlayer].color}`">
    {{ game.players[currentPlayer].name }}'s turn
  </h2>
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
          <div class="cell">{{ String.fromCharCode(65 + i) }}</div>
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
            <a
              v-if="!ended && cell === '*'"
              @click="strike(j, i, currentPlayer)"
              >&nbsp;</a
            >
            <template v-else>&nbsp;</template>
          </div>
        </div>
      </div>
    </div>
    <div v-if="game.ai" id="ai-container">
      <div v-if="null !== grid2">
        <div class="row">
          <div class="cell">&nbsp;</div>
          <div v-for="i in 10" :key="i" class="cell">{{ i }}</div>
        </div>
        <div v-for="(row, i) of grid2" :key="row" class="row">
          <div class="cell">{{ String.fromCharCode(65 + i) }}</div>
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
            <a
              v-if="!ended && cell === '*' && !game.ai"
              @click="strike(j, i, currentPlayer)"
            ></a>
            <template v-else></template>
          </div>
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
  <Button @click="clear">STOP</Button>
</template>

<script>
export default {
  data() {
    return {
      bgeGame: null,
      grid: null,
      grid1: null,
      grid2: null,
      stats: null,
      stats1: null,
      stats2: null,
      coordinates: "",
      canStrike: true,
      ended: false,
      currentPlayer: 0,
      timeout: null,
    };
  },
  props: {
    game: Object,
    id: String,
  },
  emits: ["end"],
  methods: {
    clear() {
      clearTimeout(this.timeout);
    },
    changeValue(target, value) {
      this[target] = value;
    },
    init() {
      this.axios
        .get(`${this.bgeGame.url}/ui-grid/${this.bgeGame.grid.player1}`)
        .then((res) => {
          this.grid1 = res.data.grid;
          this.grid = this.grid1;
        });
      if (this.game.nbPlayers === 2 || this.game.ai) {
        this.axios
          .get(`${this.bgeGame.url}/ui-grid/${this.bgeGame.grid.player2}`)
          .then((res) => {
            this.grid2 = res.data.grid;
          });
      }
    },
    strike(x, y, player) {
      if (!this.canStrike) return;
      this.canStrike = false;
      const payload = {
        player: player,
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
            return;
          }

          if (this.game.nbPlayers === 2) {
            if (this.currentPlayer === 0) {
              this.grid1 = res.data.grid;
              this.grid = this.grid1;
              this.stats1 = res.data.stats;
              this.stats = this.stats1;

              if (!res.data.hit) {
                setTimeout(() => {
                  this.grid = this.grid2;
                  this.stats = this.stats2;
                  this.currentPlayer = 1;
                  this.coordinates = "";
                  this.canStrike = true;
                }, 1000);
              } else {
                this.coordinates = "";
                this.canStrike = true;
              }
            } else {
              this.grid2 = res.data.grid;
              this.grid = this.grid2;
              this.stats2 = res.data.stats;
              this.stats = this.stats2;

              if (!res.data.hit) {
                setTimeout(() => {
                  this.grid = this.grid1;
                  this.stats = this.stats1;
                  this.currentPlayer = 0;
                  this.coordinates = "";
                  this.canStrike = true;
                }, 1000);
              } else {
                this.coordinates = "";
                this.canStrike = true;
              }
            }
          } else if (this.game.ai) {
            if (this.currentPlayer === 0) {
              this.grid1 = res.data.grid;
              this.stats1 = res.data.stats;
              this.stats = this.stats1;

              if (!res.data.hit) {
                setTimeout(() => {
                  this.currentPlayer = 1;
                  this.coordinates = "";
                  this.canStrike = true;
                  this.strike(null, null, 1);
                }, 1000);
              } else {
                this.coordinates = "";
                this.canStrike = true;
              }
            } else {
              this.grid2 = res.data.grid;
              this.timeout = setTimeout(() => {
                this.i++;
                this.coordinates = "";
                this.canStrike = true;
                this.strike(null, null, 1);
                /*if (!res.data.hit) {
                  this.currentPlayer = 0;
                  this.coordinates = "";
                  this.canStrike = true;
                } else {
                  this.coordinates = "";
                  this.canStrike = true;
                  this.strike(null, null, 1);
                }*/
              }, 1000);
            }
            this.grid = this.grid1;
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
#ai-container {
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
#stats-container {
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
  height: 24px;
}
.cell {
  line-height: 24px;
  font-size: 18px;
  font-family: Courier;
  display: inline-block;
  width: 24px;
  aspect-ratio: 1/1;
  text-align: center;
  border: solid 1px gray;
  margin-top: -1px;
  margin-left: -1px;
  overflow: hidden;

  a {
    display: block;
    cursor: pointer;
    width: 24px;
    aspect-ratio: 1/1;
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