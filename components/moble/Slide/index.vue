<template>
  <div class="slide_container">
      <div class="title">
          {{data.title}}
      </div>
    <div class="slide">
      <img :src="allData[1].ProductImg" class="img1 box"/>
      <img :src="allData[2].ProductImg" class="img2 box"/>
      <img :src="allData[0].ProductImg" class="img3 box"/>
    </div>
    <div class="content">
        {{data.description}}
    </div>
  </div>
</template>
<script setup>
import chicken from "../../../assets/chicken_PNG2143.png";
import card from"../../../assets/card.png"
import fresh from"../../../assets/fresh.png"
var data = ref({
  id: 1,
  name:'种苗',
  ProductImg: chicken,
  title: "喵克斯农场散养鸡",
  description:
    "优选品质·健康体制·品相优良·骨架肥大原生态优良品种，正宗纯种优质鸡苗，专属农场饲养，无抗生素，无激素，长大后成鸡3-4斤左右，安全滋补，肉质紧实。",
});
var allData = ref([
  {
    id: 1,
    name:'种苗',
    ProductImg: chicken,
    title: "喵克斯农场散养鸡",
    description:
      "优选品质·健康体制·品相优良·骨架肥大 原生态优良品种，正宗纯种优质鸡苗，专属农场饲养，无抗生素，无激素，长大后成鸡3-4斤左右，安全滋补，肉质紧实。",
  },
  {
    id: 2,
    name:'生鲜',
    ProductImg: fresh,
    title: "喵克斯农场生鲜",
    description:
      "优选品质·农场种植·新鲜美味·原生态 原生态优良品种，节水滴灌，不用大水浸灌，自然生长不用生长调节剂，无激素，无化肥，无农药，原生态健康蔬菜。",
  },
  {
    id: 3,
    name:'蛋卡',
    ProductImg: card,
    title: "喵克斯农场蛋卡",
    description:
      "月卡·季卡·年卡· 不同的蛋卡可兑换相应鸡蛋数量，选用农场专属散养蛋，正宗原生态营养更丰富，新鲜鸡蛋，现捡现发，自然鲜美，无污染"
    },
]);
var timer=reactive(null);
var count=reactive(-1)
 const autoSlide=()=>{
    timer=setInterval(()=>{
        count=count+1
        if(count>=3){
            count=0;
        };
        data.value=allData.value[count];
     
    },10000)
 }
onMounted(()=>{
    count=count+1;
    autoSlide()
})
onUnmounted(()=>{

})
</script>

<style scoped lang="less">
.slide_container {
  width: 100%;
  height: 60vh;
  .content{
    width: 80vw;
    white-space: normal;
    left:50%;
    transform: translate(-50%,0);
    position: relative;
    line-height: 2.5rem;;
    font-size: 1.5rem;
    top:-10vw;
  }
  .title{
      font-size: 6vw;
      font-weight: 600;
      position: absolute;
      left:50%;
    transform: translate(-50%,0);
    margin-top:15vw;
  }
  .slide {
    height: 40vh;
    display: inline-block;
    .box {
      display: inherit;
    }
    .img1{
         position: absolute; 
         object-fit: contain;
         transform: translate(-50%,0);
         z-index: 1; 
        height:25vw;
        width:30vw;
        left:20%;
        margin-top:33.5vw;
        animation: slide-right 30s infinite;
    }
    .img2{
        height:35vw;
        width:42vw;
        position: absolute;
        left:50%;
        transform: translate(-50%,0);
        margin-top:30vw;
        object-fit: contain;
        z-index: 3;
        animation: slide-center 30s infinite;
    }
    .img3{
        height:25vw;
        width:30vw;
        position: absolute;
        left:80%;
        transform: translate(-50%,0);
        margin-top:33.5vw;
        object-fit: contain;
        z-index: 2;
        animation: slide-left 30s infinite;
    }
  }
}
@keyframes slide-right {
    0%{
        height:25vw;
        width:30vw;
        left:20%;
        margin-top:33.5vw;
        z-index: 1
    }
    10%{
        height:25vw;
        width:30vw;
        left:80%;
        margin-top:33.5vw;
        z-index: 2
    }
    33.3%{
        height:25vw;
        width:30vw;
        left:80%;
        margin-top:33.5vw;
        z-index: 2

    }
    43.3%{
        height:35vw;
        width:42vw;
        left:50%;
        margin-top:30vw;
        z-index: 3
    }
    66.6%{
        height:35vw;
        width:42vw;
        left:50%;
        margin-top:30vw;
        z-index: 3
    }
    76.6%{
        height:25vw;
        width:30vw;
        left:20%;
        margin-top:33.5vw;
        z-index: 1
    }
    100%{
        height:25vw;
        width:30vw;
        left:20%;
        margin-top:33.5vw;
        z-index: 1
    }
}
@keyframes slide-left {
    66.6%{
        height:25vw;
        width:30vw;
        left:20%;
        margin-top:33.5vw;
        z-index: 1
    }
    76.6%{
        height:25vw;
        width:30vw;
        left:80%;
        margin-top:33.5vw;
        z-index: 2
    }
    100%{
        height:25vw;
        width:30vw;
        left:80%;
        margin-top:33.5vw;
        z-index: 2
    }
    0%{
        height:25vw;
        width:30vw;
        left:80%;
        margin-top:33.5vw;
        z-index: 2
    }
    10%{
        height:35vw;
        width:42vw;
        left:50%;
        margin-top:30vw;
        z-index: 3
    }
    33.3%{
        height:32vw;
        width:40vw;
        left:50%;
        margin-top:30vw;
        z-index: 3
    }
    43.3%{
        height:25vw;
        width:30vw;
        left:20%;
        margin-top:33.5vw;
        z-index: 1
    }
}
@keyframes slide-center {
    33.3%{
        height:25vw;
        width:30vw;
        left:20%;
        margin-top:33.5vw;
        z-index: 1
    }
    43.3%{
        height:25vw;
        width:30vw;
        left:80%;
        margin-top:33.5vw;
        z-index: 2
    }
    66.6%{
        height:25vw;
        width:30vw;
        left:80%;
        margin-top:33.5vw;
        z-index: 2
    }
    76.6%{
        height:35vw;
        width:42vw;
        left:50%;
        margin-top:30vw;
        z-index: 3
    }
    100%{
        height:35vw;
        width:42vw;
        left:50%;
        margin-top:30vw;
        z-index: 3
    }
    0%{
        height:35vw;
        width:42vw;
        left:50%;
        margin-top:30vw;
        z-index: 3
    }
    10%{
        height:25vw;
        width:30vw;
        left:20%;
        margin-top:33.5vw;
        z-index:1
    }
}
</style>