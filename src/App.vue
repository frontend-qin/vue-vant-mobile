<template>
  <div id="app">
    <div class="container" :style="deviceHeight">
      <transition name="van-slide-right">
        <div class="warp">
          <keep-alive>
            <router-view />
          </keep-alive>
        </div>
      </transition>
    </div>
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
</template>

<script>
import { mapGetters } from "vuex";
const { clientHeight } = document.documentElement;
export default {
  computed: {
    ...mapGetters(["tabList"]),
    isShow() {
      const { path } = this.$route;
      return this.tabList.some(item => item.path === path);
    }
  },
  watch: {
    $route(to) {
      this.active = to.path;
    }
  },
  data() {
    return {
      active: "/home",
      deviceHeight: {
        minHeight: clientHeight - 50 + "px"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  .warp {
    padding: 0 10px 50px 10px;
  }
}
</style>
