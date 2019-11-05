import Vue from "vue";
import VueRouter from "vue-router";
// import hooks from "./hooks";
import tabRoutes from "./tabRouter";
import store from "@/store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue"),
    meta: {
      index: 0
    }
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

router.beforeEach((to, from, next) => {
  store.commit("ajax/clear"); // 取消请求
  next();
});

export default router;
