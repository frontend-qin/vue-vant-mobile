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

```
- 登录 / 注销

```

## 开发

```bash
# 克隆项目
git clone https://github.com/frontend-qin/vue-vant-mobile.git

# 进入项目目录
cd vue-vant-mobile

# 安装依赖
npm i

```

浏览器访问 http://localhost:9538

## 接口

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
## question

1. svg图片不能自定义颜色?
> 把自己的svg图片源码中的 fill属性和值去掉就可以了