<p align="center">
  <img width="320" src="https://img.yzcdn.cn/vant/logo.png">
</p>
<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
</p>

简体中文

## 简介

> 本模板非集成方案, 只是做底层的一套基本配置,包括以下内容

```
1. 路由
2. axios 封装(请求拦截, 响应拦截, 页面切换取消ajax请求),请求加载loading
3. 移动端适配
4. px 自动转 rem
5. svg渲染组件
6. 页面渲染前空白处理
7. 服务器接口环境配置
8. 路由切换动画(闪屏问题处理)
9. 包体积chunk优化

```

## 目录

```bash
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets                静态资源
│   ├── components            组件
│   ├── icons                 svg图标
│   ├── plugins               vant按需加载的组件
│   ├── router                路由
│   ├── service               接口
│   ├── store                 vx
│   ├── styles                css
│   ├── utils                 公共方法
│   ├── views                 视图单页
│   ├── App.vue               根组件
│   └── main.js               入口
├── .env.development          开发接口
├── .env.production           生产接口
├── babel.config.js
├── package.json
├── postcss.config.js
├── README.md
└── vue.config.js
```

## 开发

```bash
# 克隆项目
git clone https://github.com/frontend-qin/vue-vant-mobile.git

# 进入项目目录
cd vue-vant-mobile

# 安装依赖
npm i

# 启动
npm start
```

浏览器访问 http://localhost:9538

## svg 使用

> 直接去阿里巴巴图标库,找到自己需要的图片下载 svg 格式
> 如果需要改颜色, 请打开 svg 图片源码, 删除源码中的 fill 属性

## vuex 使用

> 只需要在 store 下的 modules 里写对应文件的 state, muation ,action 就行,
> 触发动作,需要用你的 "文件名/你的方法名" 作为 type 来触发

## 例子

假如 modules 里有个 app.js 文件, 需要触发点击加的操作

app.js

```javascript
const state = {
  num: 1
}
const mutations = {
  add(state, payload) {
    state.num += payload
  }
}
const actions = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
```

> 如上, 那你调用的时候就需要下边这样触发

type 的格式为: 文件名/方法名

```javascript
store.commit("app/add", 10)
```

## 接口

> 本模板默认配置的 "/api" 代理, 如果不需要代理的,直接去掉 vue.config.js 的 proxy 和它对应的值全部删除掉,
> 接着在 utils 文件夹下,把下边的代码放开,关闭另一个代理的
> 配置代理的部署线上服务的时候,记得配置 ngiux 的代理接口转发,否则拿不到数据

```javascript
// 如果不配置代理,就用这个
baseURL: process.env.VUE_APP_BASE_URL,
```

演示页面由于没有做代理转发,所以请求不到数据

```bash

# 配置开发接口地址
修改 .env.development 中 VUE_APP_BASE_URL = "测试服务接口地址"

# 配置开发接口地址
修改 .env.development 中 VUE_APP_BASE_URL = "正式服务接口地址"

```

## 发布包

```bash

# 构建测试环境
npm run devbuild

# 构建生产环境
npm run build

# 构建页面预览
npm run preview

```
## 插件
<ul>
   <li><a href="https://ustbhuangyi.github.io/better-scroll/doc/zh-hans">滚动插件 better-scroll</a></li>
   <li><a href="https://github.com/amfe/lib-flexible">移动端适配amfe-flexible</a></li>
   <li><a href="https://github.com/ftlabs/fastclick">移动端适配300毫秒延迟 fastclick</a></li>
   <li><a href="https://github.com/necolas/normalize.css">reset css</a></li>
   <li><a href="https://github.com/cuth/postcss-pxtorem">px自动转rem</a></li>
   <li><a href="https://youzan.github.io/vant">Vant-UI</a></li>
</ul>







