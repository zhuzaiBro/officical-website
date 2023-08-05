<template>
    <div class="NFT-card-container" :class="{ mobileWel: !isPC }">
      <div class="top"></div>
      <div class="content">
        <div class="right">
          
          <div
            class="picture-item"
            v-for="(item, index) in cardList"
            :key="index"
          >
            <img :src="item.imgUrl" alt="" />
          </div>
        </div>
        <div class="left">
          <h2>艺术家合作</h2>
          <h1>秋葵炒香菜企划</h1>
          <p>
            IMP+是第一个LITTLEIMP+Artist PFP协
            作项目，包含‘133个生成钓八FT。放励任
            何艺术家与艺术创作爱好者通过以LITTLEINP
            幻媒介表达自我，传达自我认知的方式参与
            进天。每一枚仑作t,主理委员会都将会为 以铸逅专属能来更好的化它的价值。
          </p>
          <div class="detail">
            <p>看合集详情</p>
            <Icon type="arrowRight" size="2" />
          </div>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  </template>
  
  <script  setup>
  import Icon from "../../../components/Icon/index.vue";
  const props = defineProps({
    isPC: {
      type: Boolean,
      default: true,
    },
    cardList: {
      type: Array,
      default: () => [],
    } ,
  });
  </script>
  
  <style lang="less" scoped>
  .NFT-card-container {
    width: 100%;
    height: 100vh;
    padding: 10rem 15rem;
    background: #fff;
    position: relative;
    color: #e6b5db;
    &.mobileWel {
      padding: 20rem 2rem;
      .content {
        flex-direction: column;
        .left {
          width: 90vw;
          height: 90vw;
          margin-top: 3.2rem;
          text-align: center;
        }
        .right {
          width: 100%;
          .picture-item {
            width: 10rem;
            height: 10rem;
            margin: 1rem;
          }
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
        width: 40%;
        margin: auto 0;
        line-height: 2;
        p {
          white-space: normal;
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
          h2 {
            font-size: 2rem;
          }
        }
      }
      .right {
        height: 90%;
        width: 50%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        .picture-item {
          width: 12rem;
          height: 12rem;
          border-radius: 1rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
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