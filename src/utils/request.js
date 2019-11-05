import axios from "axios";
import { Toast } from "vant";

const instance = axios.create({
  baseURL: "http://yapi.demo.qunar.com/mock/23750/api",
  timeout: 3500
});

// 创建请求拦截
instance.interceptors.request.use(
  config => {
    console.log(config);
    return config;
  },
  error => Promise.reject(error)
);

// 创建响应拦截
instance.interceptors.response.use(
  response => {
    // 统一处理所有的请求判断, 要求后台返回的数据格式{code:"", data:"",msg:""}
    const { code, data, msg } = response.data;
    // 根据code判断
    if (code === 200) {
      msg && Toast(msg);
      return data;
    }
  },
  error => Promise.reject(error)
);

export default instance;
