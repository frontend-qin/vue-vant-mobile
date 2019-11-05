<template>
  <div class="wrapper">
    hello
    <svg-icon icon-class="vant-o"></svg-icon>
  </div>
</template>

<script>
import { asyncBanner } from "@/service/home";
export default {
  mounted() {
    asyncBanner().then(res => console.log(res));
  }
};
</script>

<style lang="scss" scoped></style>
