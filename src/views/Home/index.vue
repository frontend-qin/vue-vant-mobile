<template>
  <div class="wrapper">首页</div>
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
