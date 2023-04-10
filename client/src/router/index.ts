import { createRouter, createWebHistory } from "vue-router";
import GreetPage from "../views/GreetPage.vue";
import ChatPage from "../views/ChatPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: GreetPage,
    },
    {
      path: "/room/:id",
      name: "chat",
      component: ChatPage,
    },
  ],
});

export default router;
