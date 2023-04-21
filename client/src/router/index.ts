import { createRouter, createWebHistory } from "vue-router";
import ChatPage from "../views/ChatPage.vue";
import CreateView from "../views/CreateView.vue";
import NotFound from "../components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: CreateView,
    },
    {
      path: "/room/:id",
      name: "chat",
      component: ChatPage,
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

router.beforeEach((to, from, next) => {
  const token = !!localStorage.getItem("token");
  if (to.name === "chat" && !token) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
