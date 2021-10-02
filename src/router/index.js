import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !store.state.userData) {
    next({ name: "Login" });
  } else next();
});

export default router;
