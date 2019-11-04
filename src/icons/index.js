import Vue from "vue";
import SvgIcon from "@/components/SvgIcon"; // svg component

const req = require.context("./svg", false, /\.svg$/);

const requireAll = requireContext => requireContext.keys().map(requireContext);

requireAll(req);

// 注册全局组件
Vue.component("svg-icon", SvgIcon);
