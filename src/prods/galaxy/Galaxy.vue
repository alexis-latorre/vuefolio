<template>
  <NumberInput
    id="nbStars"
    label="Number of stars"
    :value="nbStars"
    @update-value="changeValue('nbStars', $event)"
  />
  <TextInput
    id="import"
    :value="importString"
    @update-value="changeValue('importString', $event)"
    width="500"
  >
    <template v-slot:append>
      <Button class="ml-2-rem" @click="galaxyImport">Import Galaxy</Button>
    </template></TextInput
  >
  <Button @click="generate">Generate new Galaxy</Button>
  <Button class="ml-2-rem" @click="galaxyExport">Export Galaxy</Button>
  <div id="galaxy">
    <ul>
      <li
        v-for="star of stars"
        :key="star"
        class="star"
        :style="`left: ${star.position.x}%; top: ${star.position.y}%; width: ${star.width}px; background: ${star.color}; opacity: ${star.light}; box-shadow: 0px 0px ${star.radius}px ${star.glow}px ${star.color};`"
      ></li>
    </ul>
  </div>
  <div id="export" style="display: none" contenteditable="true">
    {{ exportJson }}
  </div>
</template>

<script>
import NumberInput from "@/components/atoms/input/NumberInput";
import TextInput from "@/components/atoms/input/TextInput";
import Button from "@/components/atoms/Button";
export default {
  components: {
    NumberInput: NumberInput,
    Button: Button,
    TextInput: TextInput,
  },
  data() {
    return {
      stars: [],
      nbStars: 100,
      exportJson: null,
      importString: "",
    };
  },
  methods: {
    changeValue(target, value) {
      this[target] = value;
    },
    animate() {
      for (const star of this.stars) {
        let way = star.way;
        setInterval(() => {
          way = star.light >= 1 ? -1 : star.light < 0.8 ? 1 : way;
          star.light += star.step * way;
        }, star.velocity);
      }
    },
    randomNumber() {
      return Math.floor(Math.random() * 2 + 14).toString(16);
    },
    randomColor() {
      let color = "#";

      for (let i = 0; i < 6; i++) {
        color += this.randomNumber();
      }

      return color;
    },
    round(val, precision) {
      precision = Math.pow(10, precision);
      return Math.round(val * precision) / precision;
    },
    generate() {
      this.stars = [];
      for (let i = 0; i < this.nbStars; i++) {
        const width = Math.ceil(Math.random() * 6 + 3);
        const radius = Math.ceil(width * 7.5);
        const glow = Math.ceil(radius / 8);
        this.stars.push({
          color: this.randomColor(),
          light: this.round(Math.random() + 0.6, 2),
          way: Math.random() > 0.5 ? 1 : -1,
          step: this.round(0.01 * Math.random() + 0.02, 6),
          velocity: this.round(Math.random() * 3, 5),
          width: width,
          radius: radius,
          glow: glow,
          position: {
            x: this.round(Math.random() * 96 + 2, 2),
            y: this.round(Math.random() * 96 + 2, 2),
          },
        });
      }
      this.exportJson = JSON.stringify(this.stars);
      this.animate();
    },
    galaxyImport() {
      if (this.importString.length > 0) {
        try {
          this.stars = JSON.parse(this.importString);
          this.animate();
        } catch (e) {
          console.error("Invalid Galaxy string");
        }
      }
    },
    galaxyExport() {
      const sel = document.querySelector("#export");
      sel.style.display = "block";
      sel.focus();
      document.execCommand("selectAll");
      document.execCommand("copy");
      document.getSelection().removeAllRanges();
      sel.style.display = "none";
    },
  },
  mounted() {
    this.generate();
  },
};
</script>

<style scoped lang="scss">
#galaxy {
  margin: -1rem;
  margin-top: 1rem;
  background: black;
  padding: 1rem;
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
}

ul {
  list-style: none;

  li {
    display: inline-block;
    margin-right: 20px;
  }
}

.star {
  position: absolute;
  aspect-ratio: 1/1;
  border-radius: 100%;
  margin: 10px;
}
</style>