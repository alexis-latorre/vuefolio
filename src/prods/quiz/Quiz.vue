<template>
  <template v-if="questions.length === 0">
    <p>
      Select your quiz category
      <select v-model="currentCategory">
        <option
          v-for="category of categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.label }}
        </option>
      </select>
    </p>
    <p>
      Select your quiz difficulty
      <select v-model="currentDifficulty">
        <option
          v-for="difficulty of difficulties"
          :key="difficulty.id"
          :value="difficulty.id"
        >
          {{ difficulty.label }}
        </option>
      </select>
    </p>
    <p>
      Select how many questions you want
      <input type="number" v-model="amount" />
    </p>
    <p>
      Select the time you want to answer (between 5 and 30 seconds)
      <input type="number" v-model="timer" min="5" max="30" step="1" />
    </p>
    <Button @click="start">Start quiz</Button>
  </template>
  <template v-else-if="!ended">
    <p>
      <Button :action="true" leftIcon="fas fa-running" :click="reset">
        Return to menu
      </Button>
    </p>
    <p class="fs-xl my-2-rem">Score: {{ score }}</p>
    <QuizPage
      :question="currentQuestion"
      v-on:answer="answer"
      :validAnswer="validAnswer"
      :timeLimit="timer"
    >
      <Button
        v-if="questions.length === currentQuestion.questionNumber"
        @click="ended = true"
        >End quiz</Button
      >
      <Button v-else @click="nextQuestion">Next question</Button>
    </QuizPage>
  </template>
  <template v-else>
    <p>Your score: {{ score }}</p>
    <Button @click="reset"> Go back to menu </Button>
  </template>
</template>

<script>
import Button from "@/components/atoms/Button";
import QuizPage from "./QuizPage";

export default {
  components: {
    Button: Button,
    QuizPage: QuizPage,
  },
  data() {
    return {
      uuid: "",
      amount: 10,
      timer: 15,
      currentCategory: "any",
      categories: [
        { id: "any", label: "Any Category" },
        { id: "9", label: "General Knowledge" },
        { id: "10", label: "Entertainment: Books" },
        { id: "11", label: "Entertainment: Film" },
        { id: "12", label: "Entertainment: Music" },
        { id: "13", label: "Entertainment: Musicals & Theatres" },
        { id: "14", label: "Entertainment: Television" },
        { id: "15", label: "Entertainment: Video Games" },
        { id: "16", label: "Entertainment: Board Games" },
        { id: "17", label: "Science & Nature" },
        { id: "18", label: "Science: Computers" },
        { id: "19", label: "Science: Mathematics" },
        { id: "20", label: "Mythology" },
        { id: "21", label: "Sports" },
        { id: "22", label: "Geography" },
        { id: "23", label: "History" },
        { id: "24", label: "Politics" },
        { id: "25", label: "Art" },
        { id: "26", label: "Celebrities" },
        { id: "27", label: "Animals" },
        { id: "28", label: "Vehicles" },
        { id: "29", label: "Entertainment: Comics" },
        { id: "30", label: "Science: Gadgets" },
        { id: "31", label: "Entertainment: Japanese Anime & Manga" },
        { id: "32", label: "Entertainment: Cartoon & Animations" },
      ],
      currentDifficulty: "any",
      difficulties: [
        { id: "any", label: "Any Difficulty" },
        { id: "easy", label: "Easy" },
        { id: "medium", label: "Medium" },
        { id: "hard", label: "Hard" },
      ],
      questions: [],
      currentQuestion: null,
      score: 0,
      url: "https://1l74f.sse.codesandbox.io/quiz/",
      validAnswer: null,
      ended: false,
    };
  },
  methods: {
    reset() {
      this.questions = [];
      this.currentQuestion = null;
      this.score = 0;
      this.validAnswer = null;
      this.ended = false;
    },
    start() {
      if (this.timer < 5 || this.timer > 30) {
        console.error("Invalid timer");
        return;
      }
      this.reset();
      const queries = [
        `amount=${this.amount}`,
        `category=${this.currentCategory}`,
        `difficulty=${this.currentDifficulty}`,
      ];

      this.axios.get(`${this.url}create?${queries.join("&")}`).then((uuid) => {
        this.uuid = uuid.data;
        this.axios.get(`${this.url}start/${this.uuid}`).then((response) => {
          let i = 1;
          this.questions = response.data.map((it) => {
            it.questionNumber = i;
            i++;
            return it;
          });
          this.currentQuestion = this.questions[0];
        });
      });
    },
    answer(obj) {
      this.axios
        .get(
          `${this.url}answer/${this.uuid}?question=${obj.question}&answer=${obj.answer}`
        )
        .then((res) => {
          const answer = res.data;

          if (answer.validAnswer) {
            this.score +=
              3 *
              Math.pow(
                this.difficulties
                  .flatMap((it) => {
                    return it.label.toLowerCase();
                  })
                  .indexOf(this.currentQuestion.difficulty),
                2
              );
          }
          this.validAnswer = answer.answer;
        });
    },
    nextQuestion() {
      this.validAnswer = null;

      if (this.questions.length > this.currentQuestion.questionNumber) {
        this.currentQuestion = this.questions[
          this.currentQuestion.questionNumber
        ];
      }
    },
  },
};
</script>