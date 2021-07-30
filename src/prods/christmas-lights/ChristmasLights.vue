<template>
  <div id="xmas">
    <ul>
      <li
        v-for="light of lights"
        :key="light"
        class="light"
        :style="`left: ${light.position.x}px; top: ${light.position.y}px; background: ${light.color}; opacity: ${light.light}; box-shadow: 0px 0px ${light.radius}px ${light.glow}px ${light.color}; width: ${light.width}px`"
        @click="light.changeColor"
      ></li>
    </ul>
  </div>
  <div id="panel">
    <div>
      <Button @click="paused ? animate() : pause()" class="mr-1-rem">
        <i v-if="paused" class="fas fa-play"></i>
        <i v-else class="fas fa-pause"></i>
      </Button>
      <label
        >Speed:
        <input
          type="range"
          v-model="velocity"
          @change="animate()"
          min="1"
          max="300"
          step="1"
        />
        {{ velocity }}
      </label>
      <label
        >Number of rows:
        <input
          class="ml-1-rem"
          type="range"
          v-model="rows"
          @change="init()"
          min="1"
          max="7"
          step="1"
        />
        {{ rows }}
      </label>
    </div>
    <div id="colorPicker" style="display: none" class="mt-2-rem">
      <h3 class="h3">
        <span class="h3__content">Light parameters</span>
      </h3>
      <br />
      <label>
        Light color:
        <input
          type="color"
          class="ml-1-rem"
          v-model="picker"
          @change="changeColor"
        />
      </label>
      <br />
      <label>
        Light width:
        <input
          type="range"
          v-model="width"
          @change="changeWidth()"
          min="10"
          max="100"
          step="1"
        />
      </label>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";
export default {
  components: {
    Button: Button,
  },
  data() {
    return {
      lights: [],
      colors: ["#ff0000", "#00ff00", "#5050ff", "#ffff00"],
      velocity: 50,
      picker: "",
      paused: false,
      width: 30,
      rows: 1,
    };
  },
  methods: {
    pause() {
      for (const light of this.lights) {
        if (undefined !== light.interval) clearInterval(light.interval);
      }
      this.paused = true;
    },
    animate() {
      for (const light of this.lights) {
        if (undefined !== light.interval) clearInterval(light.interval);
        let way = light.way;
        light.interval = setInterval(() => {
          way = light.light >= 1 ? -1 : light.light < 0 ? 1 : way;
          light.light += light.step * way;
        }, 1000 / this.velocity);
      }
      this.paused = false;
    },
    randomNumber() {
      return Math.floor(Math.random() * 16).toString(16);
    },
    randomColor() {
      let color = "#";

      for (let i = 0; i < 6; i++) {
        color += this.randomNumber();
      }

      return color;
    },
    changeColor() {
      this.lightToChange.color = this.picker;
      this.picker = null;
      document.getElementById("colorPicker").style.display = "none";
    },
    changeWidth() {
      this.lightToChange.width = this.width;
      this.lightToChange.radius = this.width * 1.1;
      this.lightToChange.glow = this.width / 5;
    },
    init() {
      this.lights = [];
      for (let j = 0; j < this.rows; j++) {
        for (let i = 0; i < 10; i++) {
          this.lights.push({
            color: this.colors[i % 4],
            light: 0.5,
            way: i % 2 === 1 ? 1 : -1,
            step: 0.03,
            velocity: 50,
            width: this.width,
            radius: this.width * 1.1,
            glow: this.width / 5,
            position: {
              x: i * this.width + 20,
              y: j * this.width + 20,
            },
            changeColor: () => {
              document.getElementById("colorPicker").style.display =
                "inline-block";
              this.lightToChange = this.lights[i];
              this.picker = this.lights[i].color;
            },
          });
        }
      }
      this.animate();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped lang="scss">
#xmas {
  margin: -1rem;
  margin-bottom: 1rem;
  background: black;
  padding: 1rem;
  width: 100%;
  aspect-ratio: 2.5;
  position: relative;
}

ul {
  list-style: none;

  li {
    display: inline-block;
    margin-right: 20px;
  }
}

.light {
  margin: 10px;
  position: absolute;
  aspect-ratio: 1/1;
  border-radius: 100%;
  cursor: pointer;
}
</style>