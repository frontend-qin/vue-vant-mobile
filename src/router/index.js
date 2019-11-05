import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export const tabRoutes = [
  {
    path: "/home",
    component: () => import("@/views/Home/index.vue"),
    meta: {
      index: 1
    }
  },
  {
    path: "/list",
    component: () => import("@/views/List/index.vue"),
    meta: {
      index: 2
    }
  },
  {
    path: "/svg",
    component: () => import("@/views/Svg/index.vue"),
    meta: {
      index: 3
    }
  },
  {
    path: "/mine",
    component: () => import("@/views/Mine/index.vue"),
    meta: {
      index: 4
    }
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
