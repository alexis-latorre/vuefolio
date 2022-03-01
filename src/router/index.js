import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Draggable from "@/views/Draggable.vue";
import Todo from "@/views/Todo_1_1_0.vue";
import Tests from "@/views/Tests.vue";
import TestsOtherInstance from "@/views/TestsOtherInstance.vue";
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
import Battleships from "@/views/Battleships";
import Budget from "@/views/Budget";
import SVGGen from "@/views/SVGGen";
import Memory from "@/views/Memory";
import CSV2JSON from "@/views/tools/CSV2JSON";
import FileSystem from "@/views/FileSystem";
import GameOfLife from "@/views/GameOfLife";
import CSS from "@/views/CSS";
import Anagram from "@/views/Anagram";
import MyRH from "@/views/MyRH";
import Pokedex from "@/views/exercices/weekly-projects/Pokedex";
import Wordle from "@/views/exercices/weekly-projects/Wordle";

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
    path: "/svg",
    name: "SVGGen",
    component: SVGGen
  },
  {
    path: "/memory-game",
    name: "Memory",
    component: Memory
  },
  {
    path: "/csv2json",
    name: "CSV2JSON",
    component: CSV2JSON
  },
  {
    path: "/fs",
    name: "FileSystem",
    component: FileSystem
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: Quiz
  },
  {
    path: "/battleships",
    name: "Battleships",
    component: Battleships
  },
  {
    path: "/budget",
    name: "Budget",
    component: Budget
  },
  {
    path: "/lab",
    name: "Tests",
    component: Tests
  },
  {
    path: "/lab2",
    name: "Tests2",
    component: TestsOtherInstance
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
  },
  {
    path: "/gameoflife",
    name: "GameOfLife",
    component: GameOfLife
  },
  {
    path: "/css",
    name: "CSS",
    component: CSS
  },
  {
    path: "/anagram",
    name: "Anagram",
    component: Anagram
  },
  {
    path: "/myrh",
    name: "MyRH",
    component: MyRH
  },
  {
    path: "/pokedex",
    name: "Pokedex",
    component: Pokedex
  },
  {
    path: "/wordle",
    name: "Wordle",
    component: Wordle
  }
];

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes
});

export default router;
