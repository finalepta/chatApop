import { createRouter, createWebHistory } from "vue-router";
import GreetPage from "../views/GreetPage.vue";
import ChatPage from "../views/ChatPage.vue";
import CreateView from "../views/CreateView.vue";
import { useUserStore } from "../stores/userStore";

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
    {
      path: "/create",
      name: "create",
      component: CreateView,
    },
    {
      path: "/join",
      name: "join",
      component: CreateView,
    },
  ],
});

// router.beforeEach((to, from, next) => {});

export default router;
