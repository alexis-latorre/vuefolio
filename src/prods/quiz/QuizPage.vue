<template v-on:update="update">
  <p>{{ q.difficulty }}</p>
  <h3 class="h3">
    <span class="h3__content">Question #{{ q.questionNumber }}</span>
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
  <template v-for="answer of q.answers" :key="answer">
    <br />
    <input
      :disabled="!canRespond"
      class="mr-4 mb-4"
      type="radio"
      :id="`answer_${answer.id}`"
      :name="q.questionNumber"
      :value="answer.id"
      @click="answerQuestion($event)"
    />
    <label
      :style="
        'color: ' +
        (validAnswer === null
          ? 'black'
          : validAnswer === answer.id
          ? 'green'
          : 'red')
      "
      v-html="answer.label"
      :for="`answer_${answer.id}`"
    ></label>
  </template>
  <p v-if="validAnswer !== null" class="mt-1-rem"><slot></slot></p>
</template>

<script>
export default {
  props: {
    question: Object,
    validAnswer: String,
    timeLimit: Number,
  },
  emits: ["answer"],
  data() {
    return {
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

<style scoped>
input + label {
  cursor: pointer;
}
</style>