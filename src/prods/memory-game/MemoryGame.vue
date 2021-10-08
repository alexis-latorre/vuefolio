<template>
  <div id="game">
    <div id="container">
      <template v-for="y in 4" :key="y">
        <div
          :id="`card_${x - 1}_${y - 1}`"
          class="card"
          v-for="x in 5"
          :key="x"
          @click="flip(x - 1, y - 1)"
          oncontextmenu="return false"
          :class="
            selected.indexOf(`${x - 1}_${y - 1}`) !== -1
              ? 'selected'
              : 'not-selected'
          "
        >
          {{ x }},{{ y }}
        </div>
      </template>
    </div>
    <div v-if="win" id="win">
      <div id="text">
        <i class="fas fa-trophy"></i>
        <br />
        You win!
        <br />
        <Button
          class="mt-3-rem"
          @click="
            reset();
            win = false;
          "
        >
          New game
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";

export default {
  components: {
    Button,
  },
  data() {
    return {
      cards: [],
      selected: [],
      canSelect: true,
      found: [],
      win: false,
    };
  },
  methods: {
    flip(x, y) {
      if (this.canSelect) {
        const key = `${x}_${y}`;
        if (
          this.selected.flatMap((it) => it.k).indexOf(key) === -1 &&
          this.found.indexOf(key) === -1
        ) {
          const img = document.getElementById(`img_${key}`);
          img.style.display = "block";
          this.selected.push({ k: key, src: img.src });
        }

        if (this.selected.length === 2) {
          this.canSelect = false;
          if (this.selected[0].src !== this.selected[1].src) {
            setTimeout(() => {
              let img = document.getElementById(`img_${this.selected[0].k}`);
              img.style.display = "none";
              img = document.getElementById(`img_${this.selected[1].k}`);
              img.style.display = "none";
              this.selected = [];
              this.canSelect = true;
            }, 1000);
          } else {
            this.found.push(this.selected[0].k);
            this.found.push(this.selected[1].k);
            this.selected = [];
            this.canSelect = true;
          }
        }
        if (this.found.length === this.cards.length) this.win = true;
      }
    },
    reset() {
      this.cards = [];
      this.found = [];

      for (let i = 0; i < 10; i++) {
        const img = new Image(100, 100);
        const img2 = new Image(100, 100);
        const seed = Math.floor(Math.random() * 9999);
        img.src = `https://picsum.photos/seed/${seed}/500`;
        img.style.borderRadius = "0.5rem";
        img.style.display = "none";
        img.style.width = "100%";
        img.style.height = "100%";
        img2.src = `https://picsum.photos/seed/${seed}/500`;
        img2.style.borderRadius = "0.5rem";
        img2.style.display = "none";
        img2.style.width = "100%";
        img2.style.height = "100%";
        this.cards.push(img);
        this.cards.push(img2);
      }
      this.cards = this.cards.sort((a, b) => 0.5 - Math.random());

      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 5; x++) {
          const card = document.getElementById(`card_${x}_${y}`);
          card.innerHTML = "";
          const img = this.cards[y * 5 + x];
          img.id = `img_${x}_${y}`;
          card.append(img);
        }
      }
    },
  },
  mounted() {
    this.reset();
  },
};
</script>

<style scoped lang="scss">
#game {
  position: relative;
  width: calc(100% - 2rem);
  aspect-ratio: 6/5;
}
#container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: gray;
  padding: 1rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 1em 1em;
  grid-template-areas:
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . .";
}
#win {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: calc(100% + 2rem);
  height: calc(100% + 0.5rem);
  background: #62d862b6;
  border-radius: 0.5rem;
  text-align: center;

  #text {
    position: absolute;
    top: calc(50% - 7rem);
    left: 0;
    height: 3rem;
    width: 100%;
    text-align: center;
    line-height: 3rem;
    font-size: 5rem;
    font-weight: bold;
  }
}
.card {
  aspect-ratio: 1/1;
  background: #8bdeff;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
}

.selected {
  background: white;
}
</style>