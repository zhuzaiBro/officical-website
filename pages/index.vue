<template>
  <div class="hello-welcome" >
      <img src="../assets/loading.gif" alt="" v-show="loading" style="position: absolute; left:50vw;top:50vh;transform: translate(-50%,-50%);">
      <Banner :BannerData="BannerData"/>
  </div>
  <div class="PageTwo">
    <!-- <img src="../assets/MYN_HomeImg.png" alt=""> -->
    <div class="left">
      <div class="mission">
        <span style="top: 40%;">使命</span>
        <span style="top: 55%;width:fit-content;font-weight: 400;">只为用户养好鸡</span>
      </div>
    </div>
    <div class="center">
      <div class="vision">
        <span style="top: 40%;">愿景</span>
        <span style="top: 55%;width:fit-content;">打造用户信赖的健康无科技的养鸡平台</span>
      </div>
    </div>
    <div class="right">
      <div class="mission">
        <span style="top: 40%;">价值观</span>
        <span style="top: 55%;width:fit-content;font-weight: 400;">
          <p>客户第一、诚信担当</p>
          <p>健康养鸡、合作共赢</p></span>
      </div>
    </div>
  </div>
  <HomepageProduct/>
  <!-- <HomepageNFTCard  /> -->

  <!-- <HomepageNineBlocks :cardList="/*cardList*/[]" :isPC="isPC" /> -->


</template>

<script setup>

import HomepageProduct from "../components/Homepage/Product/index.vue";
import titleControl from "../utils/titleControler";
import Banner from "../components/Banner/index.vue"
import {IS_DEVELOPMENT} from"../api/request.js"
import { useSeoMeta,  } from "@unhead/vue";
const props = defineProps({
  
});
useSeoMeta({
  title: '馋喵农',
  ogTitle: '馋喵农',
  description: '馋喵农',
  ogDescription: '馋喵农',
  ogImage: 'https://example.com/image.png',
  twitterCard: '馋喵农',
})
// useHead({
//   title: '馋喵农',
//   meta: [
//     { name: 'keyword', content: '绿色好吃看得见.' }
//   ],
//   bodyAttrs: {
//     class: '馋喵农'
//   },
//   script: [ { children: 'console.log(\'Hello 小喵农\')' } ]
// })
const loading=ref(true)
const BannerData=ref({
  autoDuration: 10000,
  duration: 500,
height: 100,
imgSrcs:[] ,
width: 100
})

  onMounted(async()=>{
    BannerData.value.imgSrcs=BannerInfo().value;
    loading.value=false
    titleControl.setRouteTitle("首页 | 喵馋农");
  })
</script>

<style lang="less" scoped>
@keyframes level-move{
    0%{
      transform: translateY(5%);
    }
    50%{
      transform: translateY(-5%);
    }
    100%{
      transform: translateY(5%);
    }
  }
.PageTwo{
  width:100vw;
  height: 100vh;
  background:url(../assets/MYN_HomeImg.png);
  position: relative;
  background-repeat: round;
  display:flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  .left{
    .mission{
      left:17vw;
      position: relative;
      
    }
  }
  .right{
    .mission{
      left:11vw;
      position: relative;
    }
  }
  .mission{
    background:url(../assets/mission.png);
    height:16vw;
      width: 12vw;
      background-repeat: round;
     
    span{
     
        font-size: 14px;
        font-weight: 600;
        color:#fff;
        left:50%;
        position: absolute;
        transform: translate(-50%, -50%);
        overflow: hidden;
      }
  }
  .center{
    flex:0 0 280px;
    .vision{
      animation: level-move 3s infinite;
      height:400px;
      width: 280px;
      background:url(../assets/vision.png);
      background-repeat: round;
      span{
        font-size: 14px;
        font-weight: 600;
        color:#fff;
        left:50%;
        position: absolute;
        transform: translate(-50%, -50%);
        overflow: hidden;
      }
    }
  }
  .left{
    flex:1 1 20vw;
  }
  .right{
    flex:1 1 20vw;
  }
}
.hello-welcome {
  width: 100%;
  color: #e6b5db;
  height: 100vh;
  background: linear-gradient(#ffffff, #ecfbe5, #e3f4e8);
  line-height: 2.5;
  position: relative;
  &.mobileWel {
    padding: 20rem 2rem;
    .wel {
      margin-top: 5rem;
    }
    .dance-imp {
      height: 40%;
    }
  }
  .soul-disco {
    display: flex;
    img {
      width: 20rem;
      height: 5rem;
      margin-right: 2rem;
    }
  }
  h2 {
    // white-space: normal;
    font-size: 2.5rem;
    font-weight: 500;
    &.desc {
      font-size: 2rem;
      white-space: normal;
    }
  }
  .learn-more {
    display: flex;
    align-items: center;
    i {
      margin: auto 2rem;
    }
    &:hover {
      background-color: #ff6770;
    }
  }
  .dance-imp {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    img {
      margin-left: 10%;
      width: 90%;
      height: 100%;
   
    }
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 12rem;
    width: 100%;
    background-image: url("../assets/bg.png");
    background-size: 130px 120px;
    background-position: 0 30px;
  }
}
@import "../assets/styles/var.less";
.home-container {
  background: #0e0b16;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem 15rem;

  .info-container {
    color: #202020;
    margin-top: 3rem;
    border-radius: 1rem;
    width: 80vw;
    // padding: 2rem 0;
    // background-color: rgb(254, 186, 10);
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
    text-align: center;
    .title-container {
      margin: 2.4rem 0;
      height: 10rem;
      h1 {
        color: #202020;
        font-weight: normal;
      }
    }
    .info-content {
      display: grid;
      justify-items: center;

      grid-template-columns: repeat(2, 1fr);
      position: relative;
      &.flex-4 {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .pc-info-item {
        margin: 1rem;
        width: 24rem;
        height: 24rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        &.info-item {
          width: 35vw;
          height: 18rem;
        }
      }
      .text {
        white-space: normal;
        padding: 1.6rem;
      }
    }
  }
}
</style>