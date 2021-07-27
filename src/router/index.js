import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Draggable from "@/views/Draggable.vue";
import Todo from "@/views/Todo_1_1_0.vue";
import Tests from "@/views/Tests.vue";
import SignUp from "@/views/user/SignUp.vue";
import LogIn from "@/views/user/Login.vue";
import Bin2dec from "@/views/exercices/beginner/Bin2dec.vue";
import BorderRadiusEditor from "@/views/exercices/beginner/BorderRadiusEditor.vue";

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
