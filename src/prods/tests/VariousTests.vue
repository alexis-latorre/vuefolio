<!-- Don't mind this file, it's my sandbox -->
<template>
  <p>Your score: {{ score }}</p>
  <table class="stats">
    <tr>
      <th>Question</th>
      <th>Answer given</th>
      <th>Correct answer</th>
      <th>Question points</th>
    </tr>
    <tr
      v-for="line of stats"
      :key="line.question"
      :class="`${line.answerGiven !== line.correctAnswer ? 'in' : ''}correct`"
    >
      <td v-html="line.question"></td>
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
</template>

<script>
export default {
  data() {
    return {
      score: 10,
      maxScore: 15,
      stats: [
        {
          question:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta, nisl a scelerisque pulvinar, mi felis tincidunt orci, non ultrices quam ipsum ac libero.",
          answerGiven: "Answer 1",
          correctAnswer: "Answer 2",
          points: 3,
        },
        {
          question: "Short question.",
          answerGiven: "Answer 1",
          correctAnswer: "Answer 1",
          points: 3,
        },
        {
          question:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta, nisl a scelerisque pulvinar, mi felis tincidunt orci, non ultrices quam ipsum ac libero.",
          answerGiven: "Answer 1",
          correctAnswer: "Answer 1",
          points: 3,
        },
        {
          question: "Short question.",
          answerGiven: "Answer 1",
          correctAnswer: "Answer 2",
          points: 3,
        },
        {
          question:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta, nisl a scelerisque pulvinar, mi felis tincidunt orci, non ultrices quam ipsum ac libero.",
          answerGiven: "Answer 1",
          correctAnswer: "Answer 1",
          points: 3,
        },
      ],
    };
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
    }
    *:nth-last-child(1) {
      border-bottom-right-radius: $radius;
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