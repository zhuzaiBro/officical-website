<template>
  <MobleBanner :BannerData="BannerData" />
  <div class="bg">
  <div class="product">
    <div class="vision"></div>
    <div class="text">
      <div class="vision-title">我们的愿景</div>
      <div class="version-content">打造健康无科技养鸡平台</div>
      <div class="version-content2">我们的价值观是：</div>
      <div class="version-content2">客户第一、诚信担当</div>
      
      <div class="version-content2">健康养鸡、合作共赢</div>
      

      <div class="version-content2">我们的使命：‘为用户养好鸡’</div>
      <p class="version-content2">我们的愿景：打造健康养鸡平台</p>
    </div>
  </div>
  <MobleSlide/>

  </div>
</template>
<script setup>
import MobleBanner from "../../components/moble/MBBanner/index.vue";
import MobleSlide from "../../components/moble/Slide/index.vue";
import titleControl from "../../utils/titleControler";
const BannerData = ref({
  autoDuration: 100000,
  duration: 500,
  height: 60,
  imgSrcs: [],
  width: 100,
});

onMounted(async () => {
  BannerData.value.imgSrcs = BannerInfo().value;
  titleControl.setRouteTitle("首页 | 喵馋农");
});
</script>
<style lang="less" scoped>
.bg{
  background: url(../../assets/MYN_HomeImg.png);
}
.product {
  height: 55vh;
  width: 100%;

  display: flex;
}
.vision {
  flex:0 0 36vh;
  margin: 5vh 0;
  height: 50vh;
  width: 36vh;
  background: url(../../assets/vision.png);
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;
  left: -17vh;
  position: relative;
  transform: rotateZ(10deg) scaleX(-1);
}
.text{
  position: absolute;
  right:3vh;
  width:50vw;
}
.vision-title{
  margin-top:12vh;
  font-weight: 600;
  font-size: 7vw;
  color:#034409;
  margin-bottom:4rem ;
}
.version-content{
  color:#fff;
  padding:0.5rem 1rem; 
  background: #afd9b4;
  font-size: 3.5vw;
  font-weight: 600;
  width: fit-content;
}
.version-content2{
  margin:2vw 0;
}
</style>