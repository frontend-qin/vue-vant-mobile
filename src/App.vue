<template>
  <div id="app">
    <div class="container">
      <transition name="van-slide-right">
        <router-view />
      </transition>
    </div>
    <van-tabbar v-model="active" active-color="#f00" inactive-color="#2F4056">
      <van-tabbar-item
        :icon="tabItem.icon"
        v-for="tabItem in tabList"
        :key="tabItem.path"
        :to="tabItem.path"
        >{{ tabItem.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tabList"])
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="less" scoped>
#app {
  display: flex;
  flex-direction: column;
  .container {
    flex: 1;
    padding-bottom: 55px;
  }
}
</style>
