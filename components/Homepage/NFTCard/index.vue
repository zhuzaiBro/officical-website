<template>
    <div class="NFT-card-container" :class="{ mobileWel: !isPC }">
      <div class="top"></div>
      <div class="content">
        <div class="left">
          <h1 class="NFT">准入凭证NFT</h1>
          <p>安加入，必须持有LITTLEIMP小鬼系列E应NFT数字藏日。</p>
          <p>成员权限包括但不限于访问我们的私人社区、现场活动</p>
          <p>以及专为Soul D'sco成岚创硅的其他合作。</p>
  
          <div class="detail">
            <h3>凭证详情</h3>
            <Icon type="arrowRight" size="2" />
          </div>
        </div>
        <div class="right">
          <img src="../../../assets/logo.png"/>
          <h2 class="title">准入凭证NFT</h2>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import Icon from "../../../components/Icon/index.vue";
  const props = defineProps({
    isPC: {
      type: Boolean,
      default: true,
    },
  });
  </script>
  
  <style lang="less" scoped>
  .NFT-card-container {
    width: 100%;
    height: 100vh;
    padding: 10rem 15rem;
    background: linear-gradient(#0e0b16, #2b0f35, #0e0b16);
    position: relative;
    color: #e6b5db;
    &.mobileWel {
      padding: 20rem 2rem;
      .content {
        flex-direction: column-reverse;
        .left {
          margin-top: 12rem;
        }
        .right {
          height: 18rem;
        }
      }
    }
    .top {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 10rem;
      background-image: url("../../../assets/bg.png");
      background-size: 130px 120px;
      background-position: 0 30px;
    }
    .content {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      justify-content: space-around;
      .left {
        margin: auto 0;
  
        .NFT {
          margin: 1.2rem 0;
        }
        .detail {
          color: #f5f5f5;
          display: flex;
          margin: 1.2rem 0;
          font-size: 2rem;
          align-items: center;
          cursor: pointer;
          h3 {
            margin-right: 1rem;
          }
        }
      }
      .right {
        // height: 18rem;
        width: 30rem;
        border-radius: 1rem;
        overflow: hidden;
        padding: 2rem;
        border: 0.3rem solid #B5A3DC;
        background-color: #130C1B;
        box-shadow: 1px 1px 1px #130C1B;
        img {
          width: 100%;
          // height: 100%;
          // object-fit: cover;
        }
        .title {
          margin: 1rem;
          font-size: 1.6rem;
          text-align: center;
        }
      }
    }
    .bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 10rem;
      background-image: url("../../../assets/bg.png");
      background-size: 130px 120px;
      background-position: 0 30px;
    }
  }
  </style>