import axios from "axios";
import { Toast } from "vant";
import store from "@/store";
// 处理loading
const toast = () =>
  Toast.loading({
    duration: 0, // 持续展示 toast
    forbidClick: true,
    loadingType: "spinner",
    className: "loading-icon",
    message: "加载中..."
  });

const instance = axios.create({
  //   baseURL: process.env.VUE_APP_BASE_URL, // 如果不配置代理,就用这个
  baseURL: "/api", // 如果配置代理就用这个
  timeout: 3500
});

// 创建请求拦截
instance.interceptors.request.use(
  config => {
    toast();
    // 每次请求的时候 都拿到一个取消请求的方法
    const Cancel = axios.CancelToken; // 产生一个请求令牌
    config.headers["token"] = "token";
    config.cancelToken = new Cancel(c => store.commit("ajax/push", c));
    return config;
  },
  error => {
    Toast.clear();
    Promise.reject(error);
  }
);

// 创建响应拦截
instance.interceptors.response.use(
  response => {
    Toast.clear();
    // 统一处理所有的请求判断, 要求后台返回的数据格式{code:"", data:"",msg:""}
    const { code, data, msg } = response.data;
    // 根据code判断
    if (code === 200) {
      msg &&
        Toast({
          message: msg,
          duration: 5200
        });
      return data;
    }
  },
  error => {
    Toast.clear();
    Promise.reject(error);
  }
);

export default instance;
