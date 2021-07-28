<template>
  <div id="calculator">
    <div class="container">
      <div class="main">
        <div class="screen">{{ display }}</div>
        <div class="keypad">
          <div @click="clearAll()" class="key special CA">CA</div>
          <div @click="clear()" class="key special C">C</div>
          <div @click="backspace()" class="key special back">
            <i class="fas fa-backspace"></i>
          </div>
          <div @click="appendChar('7')" class="key seven">7</div>
          <div @click="appendChar('8')" class="key eight">8</div>
          <div @click="appendChar('9')" class="key nine">9</div>
          <div @click="appendChar('4')" class="key four">4</div>
          <div @click="appendChar('5')" class="key five">5</div>
          <div @click="appendChar('6')" class="key six">6</div>
          <div @click="appendChar('1')" class="key one">1</div>
          <div @click="appendChar('2')" class="key two">2</div>
          <div @click="appendChar('3')" class="key three">3</div>
          <div @click="invertResult()" class="key special invert">
            <i class="fas fa-minus"></i> / <i class="fas fa-plus"></i>
          </div>
          <div @click="appendChar('0')" class="key zero">0</div>
          <div @click="appendComma()" class="key special comma">,</div>
          <div @click="setOperation('div')" class="key special divide">
            <i class="fas fa-divide"></i>
          </div>
          <div @click="setOperation('mul')" class="key special multiply">
            <i class="fas fa-times"></i>
          </div>
          <div @click="setOperation('sub')" class="key special minus">
            <i class="fas fa-minus"></i>
          </div>
          <div @click="setOperation('add')" class="key special plus">
            <i class="fas fa-plus"></i>
          </div>
          <div @click="calculate()" class="key special equal">
            <i class="fas fa-equals"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button @click="test('calculate')">Alternate result</button>
</template>

<script>
export default {
  data() {
    return {
      keymap: {
        Enter: { function: "calculate", args: null },
        NumpadEnter: { function: "calculate", args: null },
        KeyM: { function: "appendComma", args: null },
        NumpadDecimal: { function: "appendComma", args: null },
        Numpad0: { function: "appendChar", args: "0" },
        Numpad1: { function: "appendChar", args: "1" },
        Numpad2: { function: "appendChar", args: "2" },
        Numpad3: { function: "appendChar", args: "3" },
        Numpad4: { function: "appendChar", args: "4" },
        Numpad5: { function: "appendChar", args: "5" },
        Numpad6: { function: "appendChar", args: "6" },
        Numpad7: { function: "appendChar", args: "7" },
        Numpad8: { function: "appendChar", args: "8" },
        Numpad9: { function: "appendChar", args: "9" },
        NumpadAdd: { function: "setOperation", args: "add" },
        NumpadSubtract: { function: "setOperation", args: "sub" },
        NumpadMultiply: { function: "setOperation", args: "mul" },
        NumpadDivide: { function: "setOperation", args: "div" },
      },
      result: 0,
      typing: true,
      left: "",
      right: "0",
      operation: "",
      symbol: "",
    };
  },
  methods: {
    press(evt) {
      console.log("pressed");
      console.log(evt.code);
    },
    backspace() {
      if (this.right.length > 0)
        this.right = this.right.substr(0, this.right.length - 1);
      this.result =
        (this.left !== "" ? `${this.left} ${this.symbol} ` : "") + this.right;
    },
    clear() {
      if (this.right === "") this.clearAll();
      else {
        this.right = "0";
      }
      this.result =
        (this.left !== "" ? `${this.left} ${this.symbol} ` : "") + this.right;
    },
    clearAll() {
      this.result = 0;
      this.typing = true;
      this.left = "";
      this.right = "0";
      this.operation = "";
      this.symbol = "";
    },
    appendChar(val) {
      if (this.typing) {
        if (this.right.length < 8) {
          if (this.right.indexOf(".") !== -1) {
            if (this.right.split(".")[1].length < 3) {
              this.right += val;
            }
          } else {
            this.right += val;
          }
        }
      } else {
        this.typing = true;
        if (this.symbol === "") this.left = "";
        this.right = val;
      }

      if (this.right.indexOf(".") !== -1) {
        while (
          this.right.length > 1 &&
          this.right[0] === "0" &&
          this.right[1] === "0"
        ) {
          this.right = this.right.substr(1);
        }
      } else {
        while (this.right.length > 1 && this.right[0] === "0") {
          this.right = this.right.substr(1);
        }
      }
      this.result =
        (this.left !== "" ? `${this.left} ${this.symbol} ` : "") + this.right;
    },
    appendComma() {
      if (this.typing) {
        if (this.right.length < 8) {
          if (this.right.indexOf(".") === -1) {
            this.right += ".";
          }
        }
      }
      this.result =
        (this.left !== "" ? `${this.left} ${this.symbol} ` : "") + this.right;
    },
    setOperation(op) {
      this.operation = op;

      if (this.left === "") {
        this.left = this.right;
        this.right = "";
      }
      if (this.left !== "") {
        switch (this.operation) {
          case "add":
            this.symbol = "+";
            break;

          case "sub":
            this.symbol = "-";
            break;

          case "mul":
            this.symbol = "x";
            break;

          case "div":
            this.symbol = "/";
            break;

          default:
            console.error(
              `Unexpected error: unhandled operation code: ${this.operation}`
            );
            break;
        }

        this.result = `${this.left} ${this.symbol} `;
      }
    },
    invertResult() {
      if (this.symbol === "") {
        this.result *= -1;
        this.left = this.result;
        this.right = "";
      }
    },
    calculate() {
      if (this.symbol !== "") {
        switch (this.operation) {
          case "add":
            this.result =
              parseFloat(this.left, 10) + parseFloat(this.right, 10);
            break;

          case "sub":
            this.result =
              parseFloat(this.left, 10) - parseFloat(this.right, 10);
            break;

          case "mul":
            this.result =
              parseFloat(this.left, 10) * parseFloat(this.right, 10);
            break;

          case "div":
            this.result =
              parseFloat(this.left, 10) / parseFloat(this.right, 10);
            break;

          default:
            this.result = "Error";
            console.error(
              `Unexpected error: unhandled operation code: ${this.operation}`
            );
            break;
        }

        this.typing = false;
        this.left = this.result;
        this.right = "";
        this.operation = "";
        this.symbol = "";
      }
    },
  },
  computed: {
    display() {
      return this.result;
    },
  },
  mounted() {
    window.addEventListener("keypress", (e) => {
      if (this.keymap[e.code] !== undefined) {
        this[this.keymap[e.code].function](this.keymap[e.code].args);
      }
    });
  },
};
</script>

<style scoped lang="scss">
@import "../../css/variables.scss";

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: "main";
  min-height: 600px;
  height: 100%;
  background: #fafafa;
}

.main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.4fr 1.6fr;
  gap: 6px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "screen"
    "keypad";
  grid-area: main;
  border: solid 1px silver;
}

.screen {
  grid-area: screen;
  border: solid 1px silver;
  background: #f5fff0;
  margin: 4px;
  text-align: right;
  line-height: 3rem;
  font-size: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  font-style: italic;
}

.keypad {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "CA C back divide"
    "seven eight nine multiply"
    "four five six minus"
    "one two three plus"
    "invert zero comma equal";
  grid-area: keypad;

  text-align: center;

  .key {
    border: solid 1px #eee;
    color: lighten($blue, 20%);
    font-weight: bold;
    line-height: 1rem;
    margin: 4px;
    padding-top: 20%;
    cursor: pointer;
    $background: #faffff;
    background: $background;
    &:hover {
      background: darken($background, 2%);
    }
    &:active {
      background: darken($background, 5%);
    }
  }
  .special {
    $background: #fafafa;
    background: $background;
    &:hover {
      background: darken($background, 2%);
    }
    &:active {
      background: darken($background, 5%);
    }
  }
}

.CA {
  grid-area: CA;
}

.C {
  grid-area: C;
}

.seven {
  grid-area: seven;
}

.eight {
  grid-area: eight;
}

.nine {
  grid-area: nine;
}

.four {
  grid-area: four;
}

.five {
  grid-area: five;
}

.six {
  grid-area: six;
}

.one {
  grid-area: one;
}

.two {
  grid-area: two;
}

.three {
  grid-area: three;
}

.invert {
  grid-area: invert;
}

.zero {
  grid-area: zero;
}

.comma {
  grid-area: comma;
}

.back {
  grid-area: back;
}

.divide {
  grid-area: divide;
}

.multiply {
  grid-area: multiply;
}

.minus {
  grid-area: minus;
}

.plus {
  grid-area: plus;
}

.equal {
  grid-area: equal;
}
</style>