<template>
  <div class="login_container">
    <img src="https://img.yzcdn.cn/vant/logo.png" class="img" />
    <van-cell-group class="login_form">
      <van-field
        v-model="username"
        :label-width="50"
        left-icon="manager"
        label="账号"
        clearable
        :error="isUserError"
        placeholder="请输入用户名"
        @focus="focusHandle"
      />
      <van-field
        v-model="password"
        left-icon="lock"
        :label-width="50"
        :error="isPassError"
        clearable
        type="password"
        label="密码"
        placeholder="请输入密码"
        @focus="focusHandle"
      />
    </van-cell-group>
    <p class="login_register">
      <router-link to="/forget_pwd/忘记密码" class="go_register"
        >忘记密码</router-link
      >
    </p>
    <p class="login-no">
      还没有账号,去
      <router-link to="/register/注册" class="go_register">注册</router-link>
    </p>
    <van-button
      class="login_btn"
      type="primary"
      :loading="showLoading"
      loading-type="spinner"
      block
      :loading-text="message"
      @click="handleLogin"
      >登录</van-button
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      isUserError: false, // 账号为空时显示
      isPassError: false, // 密码为空时显示
      showLoading: false, // 是否加载loading
      message: "", // 按钮上的加载
      username: "123123", // 账号
      password: "12312313" // 密码
    };
  },
  beforeDestroy() {
    this.showLoading = false;
    this.message = "";
  },
  methods: {
    focusHandle() {
      this.isUserError = false;
      this.isPassError = false;
    },
    handleLogin() {
      const { username, password } = this;
      if (!username) {
        this.isUserError = true;
      } else if (!password) {
        this.isPassError = true;
      } else {
        this.showLoading = true;
        this.message = "登录中...";
        setTimeout(() => {
          this.$router.push("/home");
          this.showLoading = false;
        }, 1500);
      }
    }
  }
};
</script>

<style lang="scss">
.login_container {
  position: relative;
  padding: 5% 20px;
  display: flex;
  flex-direction: column;
  .img {
    width: 130px;
    height: 130px;
    margin: 30px auto;
  }
  .login-no {
    .go_register {
      color: #1989fa;
      font-size: 14px;
      &:first-child {
        margin-right: 10px;
      }
    }
  }
  .login_register {
    text-align: right;
    color: #555;
    font-size: 12px;
    .go_register {
      color: #1989fa;
      font-size: 14px;
    }
  }
  .login_btn {
    margin-top: 50px;
  }
  .login_zhe {
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    width: 100%;
    p:first-child {
      font-size: 14px;
    }
    p:nth-child(2) {
      color: #888;
    }
  }
}
</style>
