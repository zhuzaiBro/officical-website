<template>
  <div class="loading-container">
    <h3>拼命加载ing。。。</h3>
    <img class="loading-img" src="../../assets/loading.gif" alt="" />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.loading-container {
  width: 80vw;
  margin: 0 auto;
  background-color: rgba(240, 240, 240, 0.4);
  height: 80vh;
  border-radius: 2rem;
  position: relative;
  .loading-img {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
  h3 {
    color: #202020;
    left: 50%;
    transform: translateX((-50%));
    position: absolute;
    top: 30%;
    font-size: 2.3rem;
  }
}
</style>