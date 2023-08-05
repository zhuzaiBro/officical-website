<template>
    <div class="footer-container">
      <div class="content-container">
        <img v-if="isPC" class="logo" src="../../assets/CMN_Logo.png" alt="" />
        <div class="center">
          <div class="link">
            <NuxtLink to="/" class="linkItem" >首页</NuxtLink>
            <span>|</span>
            <NuxtLink to="/product" class="linkItem">产品中心</NuxtLink>
            <span>|</span>
            <NuxtLink to="/BreedingBase" class="linkItem">养殖基地</NuxtLink>
            <span>|</span>
            <NuxtLink to="/news" class="linkItem">新闻活动</NuxtLink>
            <span>|</span>
            <NuxtLink to="/join" class="linkItem">加入我们</NuxtLink>
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
        <div class="SocialMedia">
          <div class="icon-wrap" v-for="(item,index) in SocalMedalData" :key="item.id">
              <div style="left: 40%" class="qrcode-wrap" :style="{opacity:item.qrcode==''?0:1}">
                <img 
                  :src="item.qrcode"
                  alt=""
                  class="qrcode"
                />
              </div>
              <img class="icon" :src="item.logo" />
              <p>{{item.name}}</p>
            </div>

        </div>
      
      </div>
    </div>
  </template>
  
  <script  setup>
  import Icon from "../Icon/index.vue";
  let props = defineProps({
    isPC: {
      type: Boolean,
      default: true,
    },
  });
  const companyData=ref(null)
  const SocalMedalData=ref(null)
  const { data: result } = await useAsyncData( 
  () => $fetch('https://discosoul.com.cn/offical/setting', {
    method: 'get',
  })
);
const { data: result2 } = await useAsyncData( 
  () => $fetch('https://discosoul.com.cn/offical/third', {
    method: 'get',
  })
);

// SocalMedal().value=init.SocalMedalData;
companyData.value=companyInfo().value
SocalMedalData.value=SocalMedal().value;

  </script>


<style lang="less" scoped>
.footer-container {
  width: 100vw;
  height: 22rem;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;

  .content-container {
    width: 80vw;
    display: flex;
    color: #000000;
    .logo {
      width: 17rem;
      height: 17rem;
      flex-grow: 0;
      margin: auto 1rem;
      padding: 1rem;
      border-radius: 0.3rem;
    }
    .center{
      margin-top:5rem;
      flex:1 1 20vw;
      display: flex;
      flex-direction: column;
      color: #000000;
      .link{
        align-items: center;
        justify-content: center;
        flex-direction: row;
        display: flex;
        .linkItem{
          padding:1vw;
        }
        span{
          padding:1vw 0.5vw;
          color:#000000;
        }
      }
      .CompanyInfo{
        margin-top:2rem;
        line-height: 2.5rem;
        text-align: center;
      }
    }
    .SocialMedia{
      padding-left:3rem;
      display: flex;
      justify-items:center;
      .icon{
            margin:0 0.5rem;
            height: 7rem;
            width: 7rem;
            border-radius: 0.6vw;
            }
      .icon-wrap {
          position: relative;
          padding: 0 1vw ;
           top: -2vw;
           p{
             line-height: 3rem;
             text-align: center;
             width:7rem;
             
           }
          &:hover .qrcode-wrap {
            transform: translateX(-50%) scaleY(1);
          }
          .qrcode-wrap {
            transition: 0.3s;
            position: relative;
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
    }
    
    .content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .icon-row {
        margin: 1rem 0;
        margin-top: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1rem 8rem;
        .icon-wrap {
          position: relative;
          &:hover .qrcode-wrap {
            transform: translateX(-50%) scaleY(1);
          }
          .qrcode-wrap {
            transition: 0.3s;
            position: absolute;
            bottom: 5rem;
            left: 50%;
            padding: 1rem;
            background: #f5f5f5;
            transform: translateX(-50%) scaleY(0);
            width: 10rem;
            height: 10rem;
            border-radius: 1rem;
            transform-origin: bottom;
            img {
              width: 100%;
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
              bottom: -0.3rem;
            }
          }
        }
        .weibo {
          margin-left: -1.2rem;
        }
        i {
          &:hover {
            color: #f5f5f5;
          }
        }
        .bigreverse {
          border-radius: 1rem;
          width: 3rem;
          height: 3rem;
        }
      }
      .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          margin: 1.2rem 0;
        }
      }
    }
  }
}
</style>