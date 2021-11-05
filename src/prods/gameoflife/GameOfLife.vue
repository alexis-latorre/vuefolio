<template>
  <p>
    Name: <input type="text" v-model="name" /><button @click="save">Save</button
    ><button @click="load">Load</button>
  </p>
  <p>
    <button @click="animate">
      <template v-if="interval === null">Play</template>
      <template v-else>Pause</template>
    </button>
    <button @click="reset">Reset</button>
    Current cycle: {{ cycle }}
  </p>
  <div
    @mousedown="draw = true"
    @mouseup="draw = false"
    class="frame"
    v-if="cells.length > 0"
  >
    <div class="row" v-for="x in height" :key="x">
      <div
        class="cell"
        :style="`background: ${cells[x - 1][y - 1] ? randomColor() : ''}`"
        v-for="y in width"
        :key="y"
        @click="toggle(x - 1, y - 1)"
        @mouseover="
          if (draw) {
            toggle(x - 1, y - 1);
          }
        "
      ></div>
    </div>
  </div>
</template>

<script>
import { db, auth } from "@/firebase";

export default {
  data() {
    return {
      width: 40,
      height: 40,
      cells: [],
      interval: null,
      cycle: 0,
      name: "",
      initialState: null,
    };
  },
  methods: {
    reset() {
      this.cycle = 0;
      clearInterval(this.interval);
      this.interval = null;
      this.cells = [];

      for (let y = 0; y < this.width; y++) {
        const cells = [];
        for (let x = 0; x < this.height; x++) {
          cells.push(false);
        }
        this.cells.push(cells);
      }
    },
    randomColor() {
      return `#ff${Math.ceil(Math.random() * 128 + 32).toString(16)}${Math.ceil(
        Math.random() * 128 + 32
      ).toString(16)}`;
    },
    getSurrounding(x, y) {
      const N = y > 0;
      const W = x > 0;
      const E = x < this.width - 1;
      const S = y < this.height - 1;
      const surrounding = [];

      if (N && W) surrounding.push({ x: x - 1, y: y - 1 });
      if (N) surrounding.push({ x: x, y: y - 1 });
      if (N && E) surrounding.push({ x: x + 1, y: y - 1 });
      if (E) surrounding.push({ x: x + 1, y: y });
      if (S && E) surrounding.push({ x: x + 1, y: y + 1 });
      if (S) surrounding.push({ x: x, y: y + 1 });
      if (S && W) surrounding.push({ x: x - 1, y: y + 1 });
      if (W) surrounding.push({ x: x - 1, y: y });

      return surrounding;
    },
    toggle(x, y) {
      if (this.cells && this.cells[x]) this.cells[x][y] = !this.cells[x][y];
    },
    animate() {
      if (null !== this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      } else {
        if (this.cycle === 0) this.initialState = this.cells;
        this.interval = setInterval(() => {
          this.live();
        }, 100);
      }
    },
    live() {
      const evolution = [];
      this.cells.forEach((row) => {
        const cells = [];
        row.forEach((cell) => {
          cells.push(cell);
        });
        evolution.push(cells);
      });

      this.cells.forEach((row, y) => {
        row.forEach((cell, x) => {
          const s = this.getSurrounding(x, y).filter(
            (a) => this.cells[a.x][a.y] === true
          ).length;
          if (this.cells[x][y] && s !== 2 && s !== 3) evolution[x][y] = false;
          else if (!this.cells[x][y] && s === 3) evolution[x][y] = true;
        });
      });
      this.cells = evolution;
      this.cycle++;
    },
    save() {
      let str = "";
      this.cells.forEach((row) => {
        str += "#";
        row.forEach((cell) => {
          str += cell ? "1" : "0";
        });
      });
      const obj = {};
      obj[this.name] = str.substring(1);
      db.collection("gol")
        .doc("sets")
        .set(obj, { merge: true })
        .then((it) => {
          console.log("saved");
        });
    },
    load() {
      db.collection("gol")
        .doc("sets")
        .get()
        .then((doc) => {
          const rows = doc.data()[this.name];
          if (!rows) console.error("This pattern doesn't exist");
          else {
            this.reset();
            const evolution = [];
            rows.split("#").forEach((row) => {
              const cells = [];
              row.match(/./g).forEach((cell) => {
                cells.push(cell === "1");
              });
              evolution.push(cells);
            });
            this.cells = evolution;
          }
        });
    },
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = undefined;
      }
    });
    this.reset();
  },
};
</script>

<style lang="scss" scoped>
$width: calc(2% - 2px);

.frame {
  border-left: solid 1px #fafafa;
  border-top: solid 1px #fafafa;
}
.row {
  line-height: $width;
}
.cell {
  display: inline-block;
  width: $width;
  aspect-ratio: 1/1;
  border-right: solid 1px #fafafa;
  border-bottom: solid 1px #fafafa;
}
</style>