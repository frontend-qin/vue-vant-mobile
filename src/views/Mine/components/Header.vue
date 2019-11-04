<template>
  <div class="header">
    <van-image
      round
      class="avator"
      width="1.5rem"
      height="1.5rem"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="user_infor">
      <p>HouEasy</p>
      <p>账户:$1920</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 200px;
  background-color: #eee;
  display: flex;
  align-items: center;
  .avator {
    margin-left: 10%;
  }
  .user_infor {
    flex: 1;
    padding: 0 15px;
    color: #fb7b04;
  }
}
</style>
