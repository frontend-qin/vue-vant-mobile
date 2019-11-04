import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

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
    path: "/home",
    component: () => import("@/views/Home/index.vue")
  },
  {
    path: "/shop_list",
    component: () => import("@/views/ShopList/index.vue")
  },
  {
    path: "/shop_car",
    component: () => import("@/views/ShopCar/index.vue")
  },
  {
    path: "/mine",
    component: () => import("@/views/Mine/index.vue")
  },
  {
    path: "*",
    component: () => import("@/views/NoPage/index.vue")
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
