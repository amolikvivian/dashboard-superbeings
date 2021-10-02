import { createRouter, createWebHashHistory } from "vue-router";

import store from "@/store";
import routes from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !store.state.userData) {
    next({ name: "Login" });
  } else next();
});

export default router;
