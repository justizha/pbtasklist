import { createRouter, createWebHistory } from "vue-router";

import Login from "./pages/auth/Login.vue";

const routes = [{ path: "/login", componet: Login }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
