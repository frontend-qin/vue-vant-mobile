<template>
  <div id="app">
    <div class="container">
      <transition :name="move">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
    <div class="footer">
      <van-tabbar
        v-model="active"
        active-color="#f00"
        inactive-color="#2F4056"
        v-show="isShow"
      >
        <van-tabbar-item
          :icon="tabItem.icon"
          v-for="tabItem in tabList"
          :key="tabItem.path"
          :to="tabItem.path"
          :name="tabItem.path"
          >{{ tabItem.title }}</van-tabbar-item
        >
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["tabList"]),
    isShow() {
      const { path } = this.$route;
      return this.tabList.some(item => item.path === path);
    }
  },
  watch: {
    // 监控路由属性的变化
    $route: {
      handler(to, from) {
        if (to && from) {
          //  点右边的按钮,页面从 右边进, 点左边的按钮从左边进
          if (to.meta.index > from.meta.index) {
            this.move = "slide-left";
          } else {
            this.move = "slide-right";
          }
        }
        // 处理页面刷新后, 默认选中的图表不再当前路由
        this.active = to.path;
      },
      //   -初始化,就先执行一次
      immediate: true
    }
  },
  data() {
    return {
      active: "/home",
      move: "slide-left"
    };
  }
};
</script>
<style lang="scss" scoped>
html,
body,
#app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  overflow: scroll;
}

.footer {
  background: #f2f2f2;
}
// 路由切换动画
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s linear;
}

.slide-left-enter-active,
.slide-right-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.slide-right-enter {
  transform: translate(-100%);
}

.slide-right-leave-to {
  transform: translate(100%);
}

.slide-left-enter {
  transform: translate(100%);
}

.slide-left-leave-to {
  transform: translate(-100%);
}
</style>
