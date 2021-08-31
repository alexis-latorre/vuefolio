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
      :key="game.uuid"
      v-on:end="endGame"
    />
    <template v-else>
      <h1>Battleships</h1>
      <img style="max-width: 100%" src="@/assets/battleships.png" /><br />
    </template>
    <div v-if="null === game">
      <template v-if="null !== gameMode && 2 !== gameMode">
        <h4>{{ gameModeLabels[gameMode + versusMode] }} mode</h4>
        <TextInput
          label="Player's name"
          v-model="player1"
          v-on:update-value="changeValue('player1', $event)"
          :value="player1"
        />
        <TextInput
          v-if="gameMode === 1 && versusMode === 0"
          label="Second player's name"
          v-model="player2"
          v-on:update-value="changeValue('player2', $event)"
          :value="player2"
        />
        <Button class="ma-1-rem" @click="startGame"> Start </Button>
      </template>
      <template v-else-if="gameMode === 2">
        <Button
          class="ma-1-rem"
          @click="
            gameMode = 1;
            versusMode = 0;
          "
        >
          Hot seat
        </Button>
        <Button
          class="ma-1-rem"
          @click="
            gameMode = 1;
            versusMode = 1;
          "
        >
          AI
        </Button>
      </template>
      <template v-else>
        <Button class="ma-1-rem" @click="gameMode = 0"> Solo game </Button>
        <Button class="ma-1-rem" @click="gameMode = 2"> Versus game </Button>
      </template>
      <Button v-if="null !== gameMode" class="ma-1-rem" @click="reset">
        Back
      </Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button";
import TextInput from "@/components/atoms/input/TextInput";
import BattleshipsUI from "./BattleshipsUI";

export default {
  components: {
    Button: Button,
    TextInput: TextInput,
    BattleshipsUI: BattleshipsUI,
  },
  data() {
    return {
      url: `${this.$backendUrl}/battleships`,
      gameModeLabels: ["Solo", "Hot seat", "Versus AI"],
      game: null,
      loading: false,
      gameMode: null,
      versusMode: null,
      player1: "Player 1",
      player2: "Player 2",
    };
  },
  methods: {
    changeValue(target, value) {
      this[target] = value;
    },
    reset() {
      this.game = null;
      this.loading = false;
      this.gameMode = null;
      this.versusMode = null;
      this.player1 = "Player 1";
      this.player2 = "Player 2";
    },
    startGame() {
      this.game = null;
      this.loading = true;
      const payload = {
        nbPlayers: this.gameMode === 0 ? 1 : this.versusMode === 0 ? 2 : 1,
        versusAI: this.versusMode === 1,
      };
      this.axios.post(`${this.url}/start-game`, payload).then((res) => {
        this.game = res.data;
        this.game.ai = this.versusMode === 1;
        this.game.url = this.url;
        this.game.players = [{ name: this.player1, color: "blue" }];
        if (payload.nbPlayers === 2)
          this.game.players.push({ name: this.player2, color: "red" });
        else if (this.game.ai)
          this.game.players.push({ name: "Opponent", color: "red" });
        this.loading = false;
      });
    },
    endGame() {
      this.game.ended = true;
      this.gameMode = null;
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