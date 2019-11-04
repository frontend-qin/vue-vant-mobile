<template>
  <div>
    <h2>Svg图标使用演示</h2>
    <ul>
      <li v-for="svg in svgs" :key="svg" class="van-hairline--bottom">
        <svg-icon :iconClass="svg" class="svg"></svg-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import svgs from "./svgs";
export default {
  data() {
    return {
      svgs
    };
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  li {
    text-align: center;
    width: 50%;
    box-sizing: border-box;
    padding: 15px;
  }
}
.svg {
  font-size: 30px;
  color: #666;
}
</style>
