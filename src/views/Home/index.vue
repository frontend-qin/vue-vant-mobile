<template>
  <div class="wrapper">
    hello
    <svg-icon icon-class="vant-o"></svg-icon>
  </div>
</template>

<script>
import { asyncBanner, asyncCan } from "@/service/home";
export default {
  mounted() {
    asyncBanner();
    asyncCan();
  }
};
</script>

<style lang="scss" scoped></style>
