<template>
  <div id="topNav" class="topNav" >
    <div class="nav-container">
      <!-- logo -->
      <NuxtLink class="link" to="/">
        <div class="img-wrap" @click="emit('click', 10)">
          <img
            :style="{ width: '100%', height: '100%' }"
            src="../../assets/CMN_logo.jpg"
            alt=""
          />
        </div>
      </NuxtLink>
    <!-- 垫片 -->
      <div class="block"></div>
      <!-- 右边的信息栏 -->
      <div class="right" >
        <NuxtLink
          active-class="selected"
          to="/"
          class="link"
          exact-active-class="qwq"
        >
          <div class="nav-item">
            <div class="little-imp">
              <img src="../../assets/MCN_nav.png" alt="" />
            </div>
            <!-- <Icon type="home" size="2.2" /> -->
            <span> 首页</span>
          </div></NuxtLink
        >

        <NuxtLink
          active-class="selected"
          class="link"
          to="/product"
          exact-active-class="qwq"
          ><div class="nav-item">
            <div class="little-imp">
              <img src="../../assets/MCN_nav.png" alt="" />
            </div>
            <!-- <Icon type="shop" size="2" /> -->
            <span> 产品中心</span>
          </div></NuxtLink
        >

        <NuxtLink
          class="link"
          to="/BreedingBase"
          active-class="selected"
          exact-active-class="qwq"
          ><div class="nav-item">
            <div class="little-imp">
              <img src="../../assets/MCN_nav.png" alt="" />
            </div>
            <!-- <Icon type="show" size="2.2" /> -->
            <span> 养殖基地</span>
          </div></NuxtLink
        >

        <NuxtLink
          class="link"
          to="/news"
          active-class="selected"
          exact-active-class="qwq"
          ><div class="nav-item">
            <div class="little-imp">
              <img src="../../assets/MCN_nav.png" alt="" />
            </div>
            <!-- <Icon type="join" size="2" /> -->
            <span> 新闻活动</span>
          </div></NuxtLink
        >
        <NuxtLink class="link" to="/join" active-class="selected"
          ><div class="nav-item">
            <div class="little-imp">
              <img src="../../assets/MCN_nav.png" alt="" />
            </div>
            <!-- <Icon type="comment" size="2" /> -->
            <span> 加入我们</span>
          </div></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "../../components/Icon/index.vue";
import { onMounted, ref, watchEffect } from "vue";

</script>

<style lang="less" scoped>
@import "../../assets/styles/mixin.less";
@import "../../assets/styles/var.less";
.topNav {
  &.mobile {
    display: flex;
    justify-content: center;
  }
  background-image:linear-gradient(#000,rgba(0,0,0,0));
  padding: 0 10vw;
  height: 9rem;
  width: 100vw;
  position: fixed;
  z-index: 10;
}
.nav-container {
  margin: 0 auto;
  line-height: 6rem;
  justify-content: space-between;
  display: flex;
  height: 100%;
  font-size: 1.5rem;
  .block{
    flex:0 0 30vw;
  }
  .right {
    justify-content: space-around;
    height: 100%;
    padding: 0 !important;
    line-height: 6rem;
    display: flex;
    color: #ffffff;
    position: relative;

    .link {
      position: relative;
      font-size:1rem ;
      padding:0 1rem;
      transition: 0.3s;
      :active{
        font-size:1.5rem ;
        transition: 0.3s;
        color:rgb(182, 219, 182)
      }
      &.selected {
        // background-color: @base-color;
        border-radius: 0.8rem 0.8rem 0 0;
        transition: 0.3s;
        transform: translateY(-1rem);
        color: #ffffff;

        .nav-item {
         
          .little-imp {
            top: -2.8rem;
            
          }
        }

        &::before {
          content: "";
          display: block;
          position: absolute;
          height: 0.2rem;
          width: 90%;
          border-radius: 0.15rem;
          background: #ffffff;
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          // border-top: 0.2rem solid #c3afbf;
        }
      }
    }

    .nav-item {
      
      .little-imp {
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        transition: 0.3s;
        top: -6.8rem;
        
        // top: 0;
        width: 5rem;
        height: 3rem;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      // position: relative;
      font-weight: 500;
      padding: 0 1.2rem;
      transition: 0.3s;
      &:hover {
        // border-radius: 0.8rem 0.8rem 0 0;
        // background-color: rgba(231, 72, 81, 0.8);
        color: #fff;
      }
      .sub {
        width: 100%;
        left: 0;
        top: 6rem;
        position: absolute;
        transform: scaleY(0);
        transform-origin: top;
        transition: 0.3s;
      }
    }
  }
  .img-wrap {
    height: 3.5rem;
    width: 8rem;
    position: relative;
    :hover{
          width: 9rem !important;
        height: 4rem !important;
        transition: 1s;
      }
    img {
      .self-fill();
      border-radius: 0.5rem;
    }
    cursor: pointer;
  }
  a {
    color: inherit;
    display: block;
    text-decoration: none;
  }
}
</style>