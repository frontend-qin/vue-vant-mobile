import asyncComponent from "@/utils/asyncLoad";
const tabRoutes = [
  {
    path: "/home",
    component: asyncComponent(() => import("@/views/Home/index.vue")),
    meta: {
      index: 1
    }
  },
  {
    path: "/list",
    //   高阶组件, 在网速慢的时候,页面加载不出来的时候,先展示一个loading
    component: asyncComponent(() => import("@/views/List/index.vue")),
    meta: {
      index: 2
    }
  },
  {
    path: "/svg",
    component: asyncComponent(() => import("@/views/Svg/index.vue")),
    meta: {
      index: 3
    }
  },
  {
    path: "/mine",
    component: asyncComponent(() => import("@/views/Mine/index.vue")),
    meta: {
      index: 4
    }
  }
];
export default tabRoutes;
