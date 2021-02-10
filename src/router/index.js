import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../views/layout/index.vue";

export const defaultRoutes = [
  {
    path: "/",
    name: "Home",
    redirect: '/login',
    hidden: true,
    meta: {
      name: '首页',
    },
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      name: '登录',
    },
    component: () => import("../views/login/index.vue")
  },
  {
    path: "/register",
    name: "Register",
    hidden: true,
    meta: {
      name: '注册',
    },
    component: import("../views/register/index.vue")
  },
  {
    path: "/forget",
    name: "Forget",
    hidden: true,
    meta: {
      name: '忘记密码',
    },
    component: import("../views/forget/index.vue")
  },
  {
    path: "/index",
    name: "Index",
    meta: {
      name: '首页',
    },
    redirect: '/roles',
    component: Layout
  },
  {
    path: "/adminIndex",
    name: "AdminIndex",
    component: Layout,
    meta: {
      name: '控制台首页'
    },
    children: [
      {
        path: "/roles",
        name: "Roles",
        meta: {
          name: '角色管理'
        },
        component: import("../views/admin/roles.vue")
      },
      {
        path: "/users",
        name: "Users",
        meta: {
          name: '用户管理'
        },
        component: import("../views/admin/users.vue")
      }
    ]
  },
  {
    path: "/news",
    name: "News",
    meta: {
      name: '信息管理'
    },
    component: Layout
  },
];

// export const perRoutes = [
//
// ]
const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRoutes
});
export default router;
