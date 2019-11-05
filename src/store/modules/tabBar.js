import tabRoutes from "@/router/tabRouter";
let paths = [];

tabRoutes.forEach(item => paths.push(item.path));

const [home, list, svg, mine] = paths;

const state = {
  tabList: [
    {
      title: "首页",
      path: home,
      icon: "wap-home"
    },
    {
      title: "列表",
      path: list,
      icon: "shop"
    },
    {
      title: "SVG",
      path: svg,
      icon: "shopping-cart"
    },
    {
      title: "我的",
      path: mine,
      icon: "manager"
    }
  ]
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
