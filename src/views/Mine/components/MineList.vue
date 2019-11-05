<template>
  <div class="mine-list">
    <van-cell
      is-link
      v-for="item in list"
      :key="item"
      @click="clickHandle(item)"
    >
      <template slot="title">
        <svg-icon icon-class="vant-o" class="icon" />
        <span class="custom-title">{{ item }}</span>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["足迹", "时间", "良品铺", "银行卡", "退出"]
    };
  },
  methods: {
    clickHandle(a) {
      a === "退出" && this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.mine-list {
  margin: 10px 0;
  .icon {
    color: rgb(47, 64, 86);
  }
  .custom-title {
    margin-left: 5px;
  }
}
</style>
