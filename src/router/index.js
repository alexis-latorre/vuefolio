import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Draggable from "@/views/Draggable.vue";
import Todo from "@/views/Todo_1_1_0.vue";
import Tests from "@/views/Tests.vue";
import SignUp from "@/views/user/SignUp.vue";
import LogIn from "@/views/user/Login.vue";
import Bin2dec from "@/views/exercices/beginner/Bin2dec.vue";
import BorderRadiusEditor from "@/views/exercices/beginner/BorderRadiusEditor.vue";
import Calculator from "@/views/exercices/beginner/Calculator";
import CauseEffect from "@/views/exercices/beginner/CauseEffect";
import ChristmasLights from "@/views/exercices/beginner/ChristmasLights";
import Galaxy from "@/views/Galaxy";
import Countdown from "@/views/exercices/beginner/Countdown";
import Quiz from "@/views/Quiz";

const routes = [
  {
    path: "/",
    name: "Home test",
    component: Home
  },
  {
    path: "/draggable",
    name: "Draggable",
    component: Draggable
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo
  },
  {
    path: "/bin2dec",
    name: "Bin2dec",
    component: Bin2dec
  },
  {
    path: "/border-radius",
    name: "BorderRadiusEditor",
    component: BorderRadiusEditor
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: Calculator
  },
  {
    path: "/cause-effect",
    name: "CauseEffect",
    component: CauseEffect
  },
  {
    path: "/galaxy",
    name: "Galaxy",
    component: Galaxy
  },
  {
    path: "/xmas",
    name: "ChristmasLights",
    component: ChristmasLights
  },
  {
    path: "/countdown",
    name: "Countdown",
    component: Countdown
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz
  },
  {
    path: "/lab",
    name: "Tests",
    component: Tests
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes
});

export default router;
