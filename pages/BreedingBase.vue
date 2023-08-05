<template>
  <div class="HeaderPage Page">
    <img src="../assets/MCN_BreedBase.jpg" alt="" />
    <div class="HeaderText">养殖基地</div>
  </div>
  <div class="SecondPage Page">
    <div class="ProductImg">
      <div class="Img-containter">
        <img src="../assets/chicken_Base.png" alt="" />
        <div class="shadow"></div>
      </div>
    </div>
    <div class="discription">
      <div class="lineUp">
        <div class="underline"></div>
        <p class="title">吃的好</p>
        <p class="text">拒绝激素、拒绝笼养、健康成长</p>
      </div>
      <div class="lineDown">
        <div class="underline"></div>
        <p class="title">住的好</p>
        <p class="text">林间放养大空间，同时农场设置有专门的鸡舍</p>
      </div>
      <div class="lineUp">
        <div class="underline"></div>
        <p class="title">出身好</p>
        <p class="text">喵克斯农场精选每一只鸡、做到每只鸡都是原生态优良品种</p>
      </div>
      <div class="lineDown">
        <div class="underline"></div>
        <p class="title">心情好</p>
        <p class="text">自由奔跑自主觅食，解放天性</p>
      </div>
    </div>
  </div>
  <div class="ThirdPage Page">
      <img src="../assets/MCN_BreedBase2.jpg" alt="" class="imgOne" />
      <img src="../assets/MCN_BreedBase3.png" alt="" class="imgTwo" />
    </div>
    <div class="ForthPage Page">
      <div class="baseDescription">
        <div class="title">原生态农场</div>
        <div class="pragrah">
          鸡饲料精准投放
          <img src="../assets/mission.png" alt="">
        </div>
        <div class="pragrah">
          进行24小时监控鸡的实时动态和健康状态
          <img src="../assets/mission.png" alt="">
        </div>
        <div class="pragrah">
          有机喂养食用五谷原生态环境
          <img src="../assets/mission.png" alt="">
        </div>
      </div>
      <img src="../assets/MCN_BreedBase4.jpg" alt="" class="imgFour" />
    </div>
</template>
<script setup>
import titleControl from "../utils/titleControler";
onMounted(()=>{
  titleControl.setRouteTitle("养殖基地 | 喵馋农");
})
</script>
<style scoped lang="less">
.Page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.HeaderPage {
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .HeaderText {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 3rem;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.SecondPage{
  width: 100vw;
  display: flex;
  align-items: center;
  justify-items: center;
  .discription {
    flex: 0 0 50vw;
  }
  .ProductImg {
    flex: 0 0 50vw;
    .Img-containter {
      position: relative;
      float: right;
      top: 2vw;
    }
    img {
      transition: 0.7s;
      width: 35vw;
      height: 35vw;
      position: relative;
      right: 3vw;
      z-index: 1;
      top: 2vw;
    }
    .shadow {
      background: #e5f4e7;
      height: 6vw;
      width: 25vw;
      border-radius: 50%;
      position: relative;
      left: 3vw;
      top: -3vw;
    }
  }
  .discription {
    position: relative;
    top: 3vw;
    .underline {
      background: #00990f;
      height: 5px;
      width: 5rem;
      border-radius: 2rem;
      position: relative;
      top: 2rem;
    }
    .title {
      font-weight: 600;
      font-size: 1.4rem;
      letter-spacing: 0.3rem;
    }
    .text {
      margin-top: 0.5rem;
      white-space: normal;
      letter-spacing: 0.2rem;
      line-height: 1.5rem;
    }
    .lineUp {
      background: url(../assets/MCN_BaseLine.png) no-repeat;
      width: 38vw;
      height: 5vw;
      background-size: auto 5vw;
      margin: 4vw 0;
      padding-left: 15vw;
    }
    .lineDown {
      background: url(../assets/MCN_BaseLine2.png) no-repeat;
      width: 38vw;
      height: 5vw;
      background-size: auto 5vw;
      margin: 4vw 0;
      padding-left: 15vw;
    }
  }
}
.ThirdPage {
  height: 90vh !important;
  .imgOne {
    flex: 0 0 30vw;
    overflow: hidden;
    width:40vw;
    object-fit: cover;
    
  }
  .imgTwo{
    flex :0 0 70vw;
    height: 90vh;
    right:5vw;
    position: relative;
    border-top-left-radius: 3vw;
    overflow: hidden;
    object-fit: cover;
  }
}
.ForthPage{
  height: 90vh !important;
    display: flex;
    width: 100vw;
    .baseDescription{
      flex:0 0 50vw;
      text-align: end;
      padding:13rem 3.5rem 0 0;
      .title{
        font-size: 2.2rem;
        color: #00990f;
        font-weight: bold;
        margin:2.5rem 0 5.5rem;
      }
      .pragrah{
        font-size: 1.5rem;
        color: #000;
        font-weight: bold;
        margin:3.5rem 1rem;
        img{
          position: relative;
          top:0.5rem;
          left:0.5rem;
          width:1.5rem;
          height: 2rem;
          
        }
      }
    }
    .imgFour{
      flex:0 0 50vw;
      object-fit: cover;
    }
  }
</style>