<template v-on:update="update">
  <div class="mb-1-rem">
    <div class="h3--container">
      <h3 class="h3">
        <span class="h3__content"> Question #{{ q.questionNumber }} </span>
      </h3>
    </div>
    <Countdown
      :startOn="true"
      :callback="callback"
      :running="running"
      :key="question"
    />
  </div>
  <p class="mb-1-rem">
    <i :class="`fas fa-signal ${q.difficulty}`"></i>{{ difficulty }}
  </p>
  <p v-html="q.question"></p>
  <div :class="`answers-frame-${q.answers.length}`">
    <div v-for="answer of q.answers" :key="answer">
      <input
        :disabled="!canRespond"
        class="mr-4 mb-4 quiz-answer-btn"
        type="radio"
        :id="`answer_${answer.id}`"
        :name="q.questionNumber"
        :value="answer.id"
        @click="answerQuestion($event)"
      />
      <label
        v-if="answerId === answer.id"
        class="quiz-answer-label"
        :style="`color: ${getStyle('color', validAnswer, answer.id)};
          background: ${getStyle('background', validAnswer, answer.id)};
          border: solid 6px ${getStyle('border', validAnswer, answer.id)}`"
        :for="`answer_${answer.id}`"
      >
        <span v-html="answer.label"></span>
      </label>
      <label
        v-else-if="validAnswer === answer.id"
        class="quiz-answer-label"
        :style="`color: ${getStyle('color', validAnswer, answer.id)};
          background: ${getStyle('background', validAnswer, answer.id)};
          border: solid 6px ${getStyle('border', validAnswer, answer.id)}`"
        :for="`answer_${answer.id}`"
      >
        <span v-html="answer.label"></span>
      </label>
      <label
        v-else
        class="quiz-answer-label"
        :style="`color: ${getStyle('color', null, null)};
          background: ${getStyle('background', null, null)};
          border: solid 6px ${getStyle('border', null, null)}`"
        :for="`answer_${answer.id}`"
      >
        <span v-html="answer.label"></span>
      </label>
    </div>
  </div>
  <p v-if="validAnswer !== null" class="mt-1-rem"><slot></slot></p>
</template>

<script>
import * as Strings from "@/utils/strings";
import Countdown from "@/components/Countdown";

export default {
  props: {
    question: Object,
    validAnswer: String,
    answerId: String,
  },
  components: {
    Countdown: Countdown,
  },
  emits: ["answer"],
  data() {
    return {
      callback: {
        func: this.answerQuestion,
        args: this.$event,
      },
      style: {
        color: {
          null: "gray",
          correct: "green",
          incorrect: "red",
        },
        border: {
          null: "silver",
          correct: "green",
          incorrect: "red",
        },
        background: {
          null: "#f0f0f0",
          correct: "#a0ffa0",
          incorrect: "#ffa0a0",
        },
      },
      q: {
        id: "",
        questionNumber: 0,
        question: "",
        answers: [],
      },
      canRespond: true,
      running: true,
      ci: 0,
    };
  },
  methods: {
    getStyle(name, validAnswer, answerId) {
      if (validAnswer === null) return this.style[name]["null"];
      else if (validAnswer === answerId) return this.style[name]["correct"];
      else return this.style[name]["incorrect"];
    },
    answerQuestion(evt) {
      if (this.canRespond) {
        this.$emit("answer", {
          question: this.q.id,
          answer: evt ? evt.target.value : null,
        });
        this.canRespond = false;
        this.running = false;
      }
    },
    init() {
      this.q = this.$props.question;
      this.canRespond = true;
      this.running = true;
    },
  },
  computed: {
    difficulty() {
      return Strings.capitalize(this.q.difficulty);
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    question() {
      this.init();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../css/variables.scss";

input + label {
  cursor: pointer;
}
.easy {
  color: green;
  display: inline-block;
  width: 8px;
  margin-right: 16px;
  overflow: hidden;
}
.medium {
  color: orange;
  display: inline-block;
  width: 16px;
  margin-right: 8px;
  overflow: hidden;
}
.hard {
  color: red;
  display: inline-block;
  width: 20px;
  margin-right: 4px;
  overflow: hidden;
}

.answers-frame-2 {
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2rem;
  grid-template-areas: ". .";
}

.answers-frame-4 {
  margin: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem 2rem;
  grid-template-areas:
    ". ."
    ". .";
}

.quiz-answer-btn {
  display: none;
}

.quiz-answer-label {
  display: table;
  border-radius: 10px;
  padding: 0 1rem;

  span {
    height: 7rem;
    aspect-ratio: 16/9;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-weight: bold;
  }
}

#countdown {
  position: relative;
  margin: auto;
  height: 100px;
  width: 100px;
  text-align: center;
}

#countdown-number {
  color: $blue;
  display: inline-block;
  line-height: 100px;
  font-weight: bold;
}

svg {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  transform: rotateY(-180deg) rotateZ(-90deg);
}

#background-circle {
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-width: 10px;
  stroke: #eee;
  fill: none;
}

#countdown-circle {
  stroke-dashoffset: 0px;
  stroke-linecap: round;
  stroke-width: 10px;
  fill: none;
}

.h3--container {
  text-align: center;
}
</style>