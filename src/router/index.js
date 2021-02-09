import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../views/layout/index.vue";

export const defaultRoutes = [
  {
    path: "/",
    name: "Home",
    redirect: '/login',
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: import("../views/register/index.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: import("../views/register/index.vue")
  },
  {
    path: "/forget",
    name: "Forget",
    component: import("../views/forget/index.vue")
  },
  {
    path: "/index",
    name: "Index",
    component: Layout
  },
  {
    path: "/news",
    name: "News",
    component: Layout
  }
];

// export const perRoutes = [
//
// ]
// defaultRoutes.concat(perRoutes)
const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRoutes
});
export default router;
