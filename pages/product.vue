<template>
  <div class="HeaderPage Page">
    <img src="../assets/CMN_ProductHeader.jpg" alt="" />
    <div class="HeaderText">产品中心</div>
  </div>
  <div class="HotGoodsPage">
    <div class="title">种苗</div>
      <ProductPageSlide :title="ZhongMiao" :showData="HotGoods"/>  
  </div>
  <div class="HotGoodsPage" style="background-color: #E5F4E7;">
    <div class="title">生鲜</div>
      <ProductPageSlide :title="ShengXian" :showData="FreshData"/>
  </div>
  <div class="HotGoodsPage">
    <div class="title">蛋卡</div>
      <ProductPageSlide :title="Danka"  :showData="FreshData"/>
  </div>
</template>
<script setup>
import titleControl from "../utils/titleControler";
import ProductPageSlide from "../components/ProductPage/Slide/index.vue";
const loading = ref(true);
const HotGoods = ref([]);
const showData = ref({});
const germchitRef = ref(null);
var timer = reactive(null);
const FreshData=ref([]);
const CardData=ref([]);
onMounted(async () => {
  //现在种苗的信息是后台设置的热品商品的信息——2
  HotGoods.value = goodResult().value.list;
  //现在生鲜的信息是后台设置的精品商品的信息——1
  FreshData.value = FreshResult().value.list;
  //蛋卡
  CardData.value = CardResult().value.list;
  showData.value.data = HotGoods.value.slice(0, 4);
  showData.value.total = HotGoods.value.length;
  showData.value.index = 0;
  titleControl.setRouteTitle("产品中心 | 喵馋农");
  loading.value = false;
});
const GotoNext = (name, type) => {
  if (type == "left" && showData.value.index > 0) {
    showData.value.index--;
  } else if (
    type == "right" &&
    showData.value.index + 4 < showData.value.total
  ) {
    showData.value.index++;
  }
  showData.value.data = HotGoods.value.slice(
    showData.value.index,
    showData.value.index + 4
  );
};



</script>
<style scoped lang="less">
.Page {
  width: 100%;
  height: 100vh;
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
.HotGoodsPage {
  height: fit-content;
  width: 100vw;
  padding-top: 4vh;
  .title {
    width: 100vw;
    text-align: center;
    color: #00990f;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 4vh 0;
  }
  .GoodsShow {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .aside {
    flex: 0 0 8vw;
    text-align: center;
    animation: jump-up 3s infinite;
    i {
      font-size: 5vh;
      color: rgba(0, 0, 0, 0.2);
    }
  }
  .left {
  }
  .center {
    flex: 1 1 80vw;

    width: 84vw;
    .item {
      overflow: hidden;
      border: solid 0.3rem #00990f;
      display: inline-block;
      border-radius: 1.5rem;
      margin: 2rem 2.3vw;
      width: fit-content;
    }
    img {
      object-fit: cover;
      width: 16vw;
      height: 16vw;
    }
    .text {
      text-align: center;
      margin: 2.5vw 0;
      font-weight: 600;
      letter-spacing: 0.1rem;
    }
  }
  .right {
  }
}
</style>