<template>
  <div class="mb-4-rem" v-html="grid"></div>
  <TextInput
    id="userInput"
    label="Which coordinates to strike? (x y)"
    v-model="coordinates"
    v-on:update-value="changeValue('coordinates', $event)"
  />
  <Button @click="strike()">Strike!</Button>
</template>

<script>
import TextInput from "@/components/atoms/input/TextInput";
import Button from "@/components/atoms/Button";

export default {
  components: {
    TextInput: TextInput,
    Button: Button,
  },
  data() {
    return {
      bgeGame: null,
      grid: null,
      coordinates: "",
    };
  },
  props: {
    game: Object,
  },
  methods: {
    changeValue(target, value) {
      this[target] = value;
    },
    init() {
      this.axios
        .get(`${this.bgeGame.url}/grid/${this.bgeGame.grid}`)
        .then((res) => {
          this.grid = res.data;
        });
    },
    strike() {
      const payload = {
        x: this.coordinates.split(" ")[0],
        y: this.coordinates.split(" ")[1],
      };
      this.axios
        .post(`${this.bgeGame.url}/shoot/${this.bgeGame.uuid}`, payload)
        .then((res) => {
          this.grid = res.data;
          this.coordinates = "";
        });
    },
  },
  mounted() {
    this.bgeGame = this.$props.game;
    this.init();
  },
};
</script>