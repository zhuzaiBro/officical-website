<template>
  <div class="product-container">
    <div class="banner">
      <img src="../../assets/CMN_ProductHeader.jpg" alt="" class="myimg">
      <div class="title">产品中心</div>
    </div>
     <div class="GoodsPage">
    <div class="Goodtitle">种苗</div>
      <MobleProduct :showData="HotGoods"/>  
  </div>
  <div class="GoodsPage" style="background-color: #E5F4E7;">
    <div class="Goodtitle">种苗</div>
      <MobleProduct :showData="FreshData"/>  
  </div>
  <div class="GoodsPage">
    <div class="Goodtitle">种苗</div>
      <MobleProduct :showData="CardData"/>  
  </div>
  </div>
</template>
<script setup>
import ProductImg from "../../assets/CMN_ProductHeader.jpg"
import titleControl from "../../utils/titleControler";
import MobleProduct from "../../components/moble/Product/index.vue"
const loading = ref(true);
const HotGoods = ref([]);
const showData = ref({});
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
});
</script>
<style lang="less" scoped>
.product-container{
    width: 100%;
  .banner{
  height: 55vh;
  width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
  img{
    height: 55vh;
    width: 100%;
    object-fit: cover;
    content:'产品中心'
  }
  .title{
        z-index: 1;
    position: absolute;
    left: 50%;
    color: #fff;
    font-weight: 600;
    font-size: 8vw;
    transform: translate(-50%,0);
    letter-spacing: 1.5rem;
  }
  }
  .GoodsPage{
    padding:10vw 0;
    .Goodtitle{
      text-align: center;
      font-size: 5vw;
      font-weight: 600;
      padding: 0 0 5vw;
    }
  }
}
</style>