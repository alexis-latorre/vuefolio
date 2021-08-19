<template v-on:update="update">
  <p>
    <i :class="`fas fa-signal ${q.difficulty}`"></i>
    {{ difficulty }}
  </p>
  <h3 class="h3">
    <span class="h3__content"> Question #{{ q.questionNumber }}</span>
  </h3>
  <div class="mb-1-rem">
    <p>{{ Math.round(timer) }}</p>
    <hr
      :style="
        'border: none; border-bottom: solid 4px ' +
        ((timer / this.timeLimit) * 100 >= 30
          ? 'green'
          : (timer / this.timeLimit) * 100 >= 10
          ? 'orange'
          : 'red') +
        '; width: ' +
        (timer / this.timeLimit) * 100 +
        '%'
      "
    />
  </div>
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
        class="quiz-answer-label"
        :style="`color: ${getStyle('color', validAnswer, answer.id)};
          background: ${getStyle('background', validAnswer, answer.id)};
          border: solid 6px ${getStyle('border', validAnswer, answer.id)}`"
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

export default {
  props: {
    question: Object,
    validAnswer: String,
    timeLimit: Number,
  },
  emits: ["answer"],
  data() {
    return {
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
      timer: 0,
      interval: null,
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
        this.$emit("answer", { question: this.q.id, answer: evt.target.value });
        this.canRespond = false;
        clearInterval(this.interval);
      }
    },
    init() {
      this.q = this.$props.question;
      this.canRespond = true;
      this.timer = this.$props.timeLimit;
      this.interval = setInterval(() => {
        this.timer -= 0.01;
        if (this.timer <= 0) {
          this.timer = 0;
          this.canRespond = false;
          clearInterval(this.interval);
          this.$emit("answer", { question: this.q.id, answer: null });
        }
      }, 10);
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
input + label {
  cursor: pointer;
}
.easy {
  color: green;
  display: inline-block;
  width: 8px;
  margin-right: 12px;
  overflow: hidden;
}
.medium {
  color: orange;
  display: inline-block;
  width: 16px;
  margin-right: 4px;
  overflow: hidden;
}
.hard {
  color: red;
  display: inline-block;
  width: 20px;
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
</style>