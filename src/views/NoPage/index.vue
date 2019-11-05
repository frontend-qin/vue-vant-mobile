<template>
  <div class="nopage">
    <div class="nopage-404" />
    <div class="nppage-btn">
      <van-button type="primary" @click="goHome">回首页</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.nopage {
  display: flex;
  margin-top: 20%;
  flex-direction: column;
  align-items: center;
  .nopage-404 {
    width: 100%;
    height: 240px;
    background-image: url("./../../assets/image/404.gif");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .nppage-btn {
    margin-top: 20px;
  }
}
</style>
