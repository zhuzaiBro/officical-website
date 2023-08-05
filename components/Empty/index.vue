<template>
  <div class="empty-container">
    <Icon type="empty" size="12" />
    <p><span>暂无内容,敬请期待吧(●'◡'●)</span></p>
  </div>
</template>

<script setup>
import Icon from "../Icon/index.vue";
</script>

<style lang="less" scoped>
.empty-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    120deg,
    rgb(241, 204, 209),
    rgb(243, 183, 247),
    rgb(159, 178, 247),
    rgb(241, 204, 209),
    rgb(243, 183, 247),
    rgb(159, 178, 247)
  );
  background-size: 600%;
  animation: change 5s infinite;
  color: #202020;
}
</style>