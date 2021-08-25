<template>
  <div v-if="loading" id="loading-screen">
    <div id="background"></div>
    <div id="icon"></div>
    <p>Loading game</p>
  </div>
  <div id="splash-screen" v-else>
    <BattleshipsUI
      v-if="null !== game"
      id="game"
      :game="game"
      :key="game"
      v-on:end="endGame"
    />
    <template v-else>
      <h1>Battleships</h1>
      <img style="max-width: 100%" src="@/assets/battleships.png" /><br />
    </template>
    <Button v-if="null === game || game.ended" @click="startGame"
      >Start a new game</Button
    >
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";
import BattleshipsUI from "./BattleshipsUI";

export default {
  components: {
    Button: Button,
    BattleshipsUI: BattleshipsUI,
  },
  data() {
    return {
      url: "https://1l74f.sse.codesandbox.io/battleships",
      game: null,
      loading: false,
    };
  },
  methods: {
    startGame() {
      this.game = null;
      this.loading = true;
      this.axios.get(`${this.url}/start-game`).then((res) => {
        this.game = res.data;
        this.game.url = this.url;
        this.loading = false;
      });
    },
    endGame() {
      this.game.ended = true;
    },
  },
};
</script>

<style scoped lang="scss">
#loading-screen {
  margin: auto;
  display: block;
  aspect-ratio: 1/1;
  position: relative;
  text-align: center;
  width: 120px;

  #background::before {
    position: absolute;
    top: 0;
    left: 0;
    color: silver;
    content: "\f21a";
    font-family: "Font Awesome 5 Free";
    font-size: 96px;
    font-weight: bold;
  }

  #icon {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    animation: loading 3s infinite linear;
    overflow-x: hidden;

    &::before {
      color: green;
      content: "\f21a";
      font-family: "Font Awesome 5 Free";
      font-size: 96px;
      font-weight: bold;
    }
  }

  p {
    position: absolute;
    text-align: center;
    top: 120px;
    width: 120px;
  }

  @keyframes loading {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
}

#splash-screen {
  text-align: center;
}
</style>