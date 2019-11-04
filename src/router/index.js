import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export const tabRoutes = [
  {
    path: "/home",
    component: () => import("@/views/Home/index.vue")
  },
  {
    path: "/list",
    component: () => import("@/views/List/index.vue")
  },
  {
    path: "/svg",
    component: () => import("@/views/Svg/index.vue")
  },
  {
    path: "/mine",
    component: () => import("@/views/Mine/index.vue")
  }
];

const routes = [
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "*",
    component: () => import("@/views/NoPage/index.vue")
  }
].concat(tabRoutes);

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
