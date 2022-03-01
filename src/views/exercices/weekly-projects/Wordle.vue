<template>
  <a id="reset" class="square" @click="init"><i class="fas fa-redo"></i></a>
  <p class="message">
    &nbsp;
    <template v-if="win === true"
      >Bravo ! Gagné en {{ turn + 1 }} tour{{ turn > 0 ? "s" : "" }}
    </template>
    <template v-else-if="win === false"
      >Perdu ! Le mot a trouvé était {{ word }}</template
    >
  </p>
  <div v-if="results !== null" class="container">
    <div class="grid">
      <template v-for="y of 6" :key="y">
        <div
          v-for="x of 5"
          :key="x"
          :class="`square result square${y}_${x} ${
            results[y - 1][x - 1].state
          }`"
        >
          {{ results[y - 1][x - 1].key }}
        </div>
      </template>
    </div>
    <div class="input">
      <input
        :onload="focus"
        ref="input"
        :class="`${invalid ? 'invalid' : ''}`"
        type="text"
        v-model="input"
        maxlength="5"
        @keyup.enter="validKeys(input)"
      />
      <p>&nbsp;<template v-if="invalid">Invalid input</template></p>
    </div>
    <div class="keyboard">
      <div class="row" v-for="(keys, i) of keyboard" :key="i">
        <div :class="`square ${key.state}`" v-for="(key, j) of keys" :key="j">
          {{ key.key }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wordsJS from "./words.json";

export default {
  data() {
    return {
      keyboard: null,
      input: null,
      word: null,
      results: null,
      invalid: false,
      turn: 0,
      words: null,
      maxGuess: 6,
      win: null,
      correctLetters: null,
    };
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    initKey(keys) {
      return keys.split("").map((k) => {
        return { key: k, state: null };
      });
    },
    updateKey(k, state) {
      this.keyboard.forEach((row) => {
        row.forEach((key) => {
          if (k === key.key)
            key.state = state !== "incorrect" ? "correct" : "used";
        });
      });
    },
    pushResult(k, i, state) {
      const square = this.results[this.turn][i];
      square.key = k;
      square.state = state;
      this.updateKey(k, state);
    },
    validKeys(str) {
      if (this.win !== null) return;
      this.invalid = false;
      if (str.length !== 5 || !this.words.includes(str.toUpperCase())) {
        this.invalid = true;
        return;
      }
      str
        .toUpperCase()
        .split("")
        .forEach((k, i) => {
          if (!this.word.includes(k)) this.pushResult(k, i, "incorrect");
          else if (this.word[i] === k) {
            this.pushResult(k, i, "correct");
            this.correctLetters.push(i);
          } else {
            this.pushResult(k, i, "misplaced");
          }
        });
      this.input = "";
      if (str.toUpperCase() === this.word.toUpperCase()) {
        this.win = true;
        return;
      }
      this.turn++;

      if (this.turn === this.maxGuess) this.win = false;
    },
    init() {
      this.correctLetters = [];
      this.turn = 0;
      this.win = null;
      this.word = this.words[Math.floor(Math.random() * this.words.length)];
      this.results = [];

      this.keyboard.forEach((row) => {
        row.forEach((key) => {
          key.state = null;
        });
      });

      for (let i = 0; i < 6; i++) {
        const line = [];
        for (let j = 0; j < 5; j++) {
          line.push({ key: "", state: null });
        }
        this.results.push(line);
      }
    },
  },
  mounted() {
    this.keyboard = "AZERTYUIOP#QSDFGHJKLM#WXCVBN".split("#").map(this.initKey);
    this.words = wordsJS[5].fr.split("#");

    this.init();
  },
};
</script>

<style lang="scss" scoped>
$square-size: 48px;
$light-gray: #f0f0f0;
$gray: silver;
$dark-gray: #888;

.container {
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 270px;
  margin: auto;

  .square1_1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .square1_2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .square1_3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .square1_4 {
    grid-area: 1 / 4 / 2 / 5;
  }
  .square1_5 {
    grid-area: 1 / 5 / 2 / 6;
  }
  .square2_1 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .square2_2 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .square2_3 {
    grid-area: 2 / 3 / 3 / 4;
  }
  .square2_4 {
    grid-area: 2 / 4 / 3 / 5;
  }
  .square2_5 {
    grid-area: 2 / 5 / 3 / 6;
  }
  .square3_1 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .square3_2 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .square3_3 {
    grid-area: 3 / 3 / 4 / 4;
  }
  .square3_4 {
    grid-area: 3 / 4 / 4 / 5;
  }
  .square3_5 {
    grid-area: 3 / 5 / 4 / 6;
  }
  .square4_1 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .square4_2 {
    grid-area: 4 / 2 / 5 / 3;
  }
  .square4_3 {
    grid-area: 4 / 3 / 5 / 4;
  }
  .square4_4 {
    grid-area: 4 / 4 / 5 / 5;
  }
  .square4_5 {
    grid-area: 4 / 5 / 5 / 6;
  }
  .square5_1 {
    grid-area: 5 / 1 / 6 / 2;
  }
  .square5_2 {
    grid-area: 5 / 2 / 6 / 3;
  }
  .square5_3 {
    grid-area: 5 / 3 / 6 / 4;
  }
  .square5_4 {
    grid-area: 5 / 4 / 6 / 5;
  }
  .square5_5 {
    grid-area: 5 / 5 / 6 / 6;
  }
  .square6_1 {
    grid-area: 6 / 1 / 7 / 2;
  }
  .square6_2 {
    grid-area: 6 / 2 / 7 / 3;
  }
  .square6_3 {
    grid-area: 6 / 3 / 7 / 4;
  }
  .square6_4 {
    grid-area: 6 / 4 / 7 / 5;
  }
  .square6_5 {
    grid-area: 6 / 5 / 7 / 6;
  }
}

input {
  border: solid 1px $light-gray;
  background: $light-gray;
  line-height: $square-size;
  width: 40%;
  border-radius: 0.5em;
  margin-bottom: 6px;
  margin-right: 6px;
  padding-left: 1em;
  padding-right: 1em;
  font-size: $square-size / 2;
  color: $dark-gray;
  text-align: center;

  &:focus {
    outline: solid 1px $gray;
  }
}

.square {
  background: $light-gray;
  display: inline-block;
  width: $square-size;
  aspect-ratio: 1 / 1;
  line-height: $square-size;
  text-align: center;
  border-radius: 0.5em;
  margin-bottom: 6px;
  margin-right: 6px;
}

.result {
  font-weight: bold;
}

.correct {
  background: #05810b;
  color: white;
}

.incorrect {
  background: $dark-gray;
  color: white;
}

.used {
  background: $dark-gray;
  font-weight: bold;
  color: white;
}

.misplaced {
  background: #ffed49;
  color: $dark-gray;
}

.invalid {
  border: solid 1px red;
}

.input {
  margin: 1em;
}

.message {
  text-align: center;
  margin-bottom: 0.5em;
}

#reset {
  cursor: pointer;

  &:hover {
    background: $gray;
  }

  &:active {
    background: $dark-gray;
  }
}
</style>