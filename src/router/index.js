import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Draggable from "@/views/Draggable.vue";
import Todo from "@/views/Todo_1_0_0.vue";
import Tests from "@/views/Tests.vue";

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
    path: "/lab",
    name: "Tests",
    component: Tests
  }
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
