<template>
  <div class="pagefoot-container">
    <NuxtLink to="/moble" class="link">
      <div>首页</div>
    </NuxtLink>
    <NuxtLink to="/moble/product" class="link">
      <div>产品中心</div>
    </NuxtLink>
    <NuxtLink to="/moble/BreedingBase" class="link">
      <div>养殖基地</div>
    </NuxtLink>
    <NuxtLink to="/moble/news" class="link">
      <div>新闻活动</div>
    </NuxtLink>
    <NuxtLink to="/moble/join" class="link">
      <div>加入我们</div>
    </NuxtLink>
    <div class="contact">
        <!-- <i class="iconfont icon-weixin icon"></i>
        <i class="iconfont icon-weixin icon"></i>
        <i class="iconfont icon-weixin icon"></i> -->
        
          <div class="icon-wrap" v-for="(item,index) in SocalMedalData" :key="item.id">
              <div style="left: 40%" class="qrcode-wrap" :style="{opacity:item.qrcode==''?0:1}">
                <img 
                  :src="item.qrcode"
                  alt=""
                  class="qrcode"
                />
              </div>
              <div class="icon-container">
                  <img class="icon" :src="item.logo" />
              <p>{{item.name}}</p>
              </div>
              
            </div>

       
    </div>
    <div class="CompanyInfo">
            <p>
            <span>{{`${companyData.companyInfo} 版权所有 `}} </span>

          </p>
          <p>
           <span>{{` 增值电信业务经营许可证:${companyData.issu}   `}}</span>
            <span>{{`浙公安备网:${companyData.icp} `}} </span>
             </p>
          </div>
  </div>
</template>
<script setup>
import {IS_DEVELOPMENT} from"../../../api/request.js"
const companyData=ref(null)
const SocalMedalData=ref(null)
companyData.value=companyInfo().value
SocalMedalData.value=SocalMedal().value;
</script>
<style scoped lang="less">
 .CompanyInfo{
        margin-top:2vw;
        line-height: 2.5rem;
        text-align: center;
      }
.pagefoot-container {
  display: flex;
  flex-flow: column;
}
.link{
    margin:0 12vw;
  padding:4vw 0 4vw 0;
  border-bottom: 0.5vw solid #eee;

}
.contact{
    border-bottom: 0.5vw solid #eee;
    display:flex;
    margin:10vw 10vw 0vw;
    align-items:center;
    justify-items: center;
    justify-content: center;
    
}


      .icon{
            margin:2vw 0.5vw 1vw;
            height: 10vw;
            width: 10vw;
            border-radius: 0.6vw;
            }
      .icon-wrap {
          position: relative;
          padding: 0 2vw ;
           top: -2vw;
           .icon-container{
               display: flex;
               flex-direction: column;
               justify-items: center;
               align-items: center;
           }
           p{
             line-height: 3rem;
             text-align: center;
             width:7rem;
             
           }
          &:hover .qrcode-wrap {
            transform: translate(-40%,-80%) scaleY(1);
          }
          .qrcode-wrap {
            transition: 0.3s;
            position: absolute;
            bottom: 0rem;
            left: 50%;
            padding: 1rem;
            background: #f5f5f5;
            transform: translateX(-50%) scaleY(0);
            width: 10rem;
            height: 10rem;
            border-radius: 1rem;
            transform-origin: bottom;
            
            img {
              width: 100%3;
              height: 100%;
            }
            &::after {
              content: "";
              display: block;
              background-color: #f5f5f5;
              width: 0.6rem;
              height: 0.6rem;
              position: absolute;
              left: 50%;
              transform: translateX(-50%) rotate(45deg);
            }
          }
        }
    
</style>
