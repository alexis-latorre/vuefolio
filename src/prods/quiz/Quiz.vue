<template>
  <template v-if="questions.length === 0">
    <SelectInput
      class="mb-1-rem"
      id="category"
      label="Select your quiz category"
      :options="categories"
      width="500"
      v-on:update-value="changeValue('currentCategory', $event)"
    />
    <SelectInput
      class="mb-1-rem"
      id="difficulty"
      label="Select your quiz difficulty"
      :options="difficulties"
      width="500"
      v-on:update-value="changeValue('currentDifficulty', $event)"
    />
    <NumberInput
      class="mt-2-rem"
      id="nbQuestions"
      label="Select how many questions you want (between 1 and 100)"
      :value="amount.toString()"
      :min="1"
      :max="100"
      width="500"
      @update-value="changeValue('amount', $event)"
    />
    <Button @click="start">Start quiz</Button>
  </template>
  <template v-else-if="!ended">
    <p>
      <Button :action="true" leftIcon="fas fa-running" :click="goHome">
        Return to menu
      </Button>
    </p>
    <p class="fs-xl my-2-rem">Score: {{ score }}</p>
    <QuizPage
      :question="currentQuestion"
      v-on:answer="answer"
      :validAnswer="validAnswer"
      :answerId="answerId"
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
    <p>
      Check your score.
      <span v-if="maxScore - score === 0">
        Awesome, you did perfect on this one!
      </span>
      <span v-else-if="score / maxScore > 0.74">
        Good job, you are pretty smart.
      </span>
      <span v-else-if="score / maxScore > 0.49">
        Maybe you can do better next time.
      </span>
      <span v-else-if="score / maxScore > 0.09">
        Keep practicing, you've a long way to beat the quiz.
      </span>
      <span v-else>
        What happened? Try to change the difficulty to improve your good
        answers.
      </span>
    </p>
    <table class="stats">
      <tr>
        <th>Question</th>
        <th>Given answer</th>
        <th>Correct answer</th>
        <th>Question points</th>
      </tr>
      <tr
        v-for="(line, i) of stats"
        :key="line.question"
        :class="`${line.answerGiven !== line.correctAnswer ? 'in' : ''}correct`"
      >
        <td v-html="'#' + (i + 1) + ': ' + line.question"></td>
        <td v-html="line.answerGiven"></td>
        <td v-html="line.correctAnswer"></td>
        <td>{{ line.points }}</td>
      </tr>
      <tr>
        <td colspan="2"></td>
        <th>Total</th>
        <th>{{ score }} / {{ maxScore }}</th>
      </tr>
    </table>
    <Button @click="reset"> Go back to menu </Button>
  </template>
</template>

<script>
import Button from "@/components/atoms/Button";
import SelectInput from "@/components/atoms/input/SelectInput";
import NumberInput from "@/components/atoms/input/NumberInput";
import QuizPage from "./QuizPage";

export default {
  components: {
    Button: Button,
    QuizPage: QuizPage,
    SelectInput: SelectInput,
    NumberInput: NumberInput,
  },
  data() {
    return {
      uuid: "",
      amount: 10,
      currentCategory: "any",
      categories: [
        { value: "any", text: "Any Category" },
        { value: "9", text: "General Knowledge" },
        { value: "10", text: "Entertainment: Books" },
        { value: "11", text: "Entertainment: Film" },
        { value: "12", text: "Entertainment: Music" },
        { value: "13", text: "Entertainment: Musicals & Theatres" },
        { value: "14", text: "Entertainment: Television" },
        { value: "15", text: "Entertainment: Video Games" },
        { value: "16", text: "Entertainment: Board Games" },
        { value: "17", text: "Science & Nature" },
        { value: "18", text: "Science: Computers" },
        { value: "19", text: "Science: Mathematics" },
        { value: "20", text: "Mythology" },
        { value: "21", text: "Sports" },
        { value: "22", text: "Geography" },
        { value: "23", text: "History" },
        { value: "24", text: "Politics" },
        { value: "25", text: "Art" },
        { value: "26", text: "Celebrities" },
        { value: "27", text: "Animals" },
        { value: "28", text: "Vehicles" },
        { value: "29", text: "Entertainment: Comics" },
        { value: "30", text: "Science: Gadgets" },
        { value: "31", text: "Entertainment: Japanese Anime & Manga" },
        { value: "32", text: "Entertainment: Cartoon & Animations" },
      ],
      currentDifficulty: "any",
      difficulties: [
        { value: "any", text: "Any Difficulty" },
        { value: "easy", text: "Easy" },
        { value: "medium", text: "Medium" },
        { value: "hard", text: "Hard" },
      ],
      questions: [],
      currentQuestion: null,
      score: 0,
      maxScore: 0,
      url: `${this.$backendUrl}/quiz/`,
      validAnswer: null,
      ended: false,
      answerId: null,
      stats: [],
    };
  },
  methods: {
    changeValue(target, value) {
      this[target] = value;
    },
    goHome() {
      if (window.confirm("Do you really want to leave the quiz?")) {
        this.reset();
      }
    },
    reset() {
      this.questions = [];
      this.currentQuestion = null;
      this.score = 0;
      this.maxScore = 0;
      this.stats = [];
      this.validAnswer = null;
      this.ended = false;
    },
    start() {
      if (this.amount < 1 || this.amount > 100) {
        this.amount = 10;
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
          const points =
            3 *
            Math.pow(
              this.difficulties
                .flatMap((it) => {
                  return it.text.toLowerCase();
                })
                .indexOf(this.currentQuestion.difficulty),
              2
            );
          this.maxScore += points;
          const answerGiven = this.currentQuestion.answers.filter((it) => {
            return obj.answer === it.id;
          });
          this.stats.push({
            question: this.currentQuestion.question,
            answerGiven: answerGiven.length > 0 ? answerGiven[0].label : "",
            correctAnswer: this.currentQuestion.answers.filter((it) => {
              return answer.answer === it.id;
            })[0].label,
            points: points,
          });

          if (answer.validAnswer) {
            this.score += points;
          }
          this.validAnswer = answer.answer;
          this.answerId = obj.answer;
        })
        .catch((e) => {
          console.error(e);
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

<style lang="scss" scoped>
@import "../../css/variables.scss";

.stats {
  margin-top: 1rem;
  $radius: 0.5em;
  $correct: green;
  $incorrect: red;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 1rem;

  th {
    font-size: 0.9rem;
    padding: 0.8em;
  }

  td {
    font-size: 0.8rem;
    padding: 0.6em;
  }

  th,
  td {
    text-align: left;
    vertical-align: middle;
    border-left: solid 1px $purple;
    border-top: solid 1px $purple;

    &:last-child {
      text-align: center;
      border-right: solid 1px $purple;
    }
  }

  .correct td {
    color: $correct;
    background: lighten($correct, 70%);
  }

  .incorrect td {
    color: $incorrect;
    background: lighten($incorrect, 40%);
  }

  tr:first-child {
    background: #fafafa;
    *:first-child {
      border-top-left-radius: $radius;
    }
    *:nth-last-child(1) {
      border-top-right-radius: $radius;
    }
  }

  tr:last-child {
    *:first-child {
      border: none;
    }
  }

  tr:nth-last-child(1) {
    * {
      border-bottom: solid 1px $purple;
      border-top: none;
    }
    *:nth-child(2) {
      border-bottom-left-radius: $radius;
      background: #fafafa;
    }
    *:nth-last-child(1) {
      border-bottom-right-radius: $radius;
      background: #fafafa;
    }
  }

  tr:nth-last-child(2) {
    * {
      border-bottom: solid 1px $purple;
    }

    *:first-child {
      border-bottom-left-radius: $radius;
    }
  }
}
</style>