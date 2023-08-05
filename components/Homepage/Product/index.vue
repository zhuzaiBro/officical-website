<template>
  <div class="Product-container">
    <div class="ProductImg">
      <div class="Img-containter">
        <img :src="data.ProductImg" alt="" />
        <div class="shadow"></div>
      </div>
    </div>
    <div class="description">
      <div class="description-container">
        <div class="title">
          {{ data.title }}
        </div>
        <div class="text">
          <p>{{ data.description }}</p>
        </div>
        <div class="button">
          <div class="btn">立即查看</div>
        </div>
      </div>
    </div>
    <div class="ProductChoose">
      <div class="ProductChoose-container">
          <div class="ChooseItem select" @click="changeProduct(item.name)" :class="data.name==item.name?'selected':''"  v-for="(item,index) in allData" :key="index">
            {{item.name}}
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import chicken from "../../../assets/chicken_PNG2143.png";
import card from"../../../assets/card.png"
import fresh from"../../../assets/fresh.png"
import { ref } from "vue";

const data = ref({
  id: 1,
  name:'种苗',
  ProductImg: chicken,
  title: "喵克斯农场散养鸡",
  description:
    "优选品质·健康体制·品相优良·骨架肥大原生态优良品种，正宗纯种优质鸡苗，专属农场饲养，无抗生素，无激素，长大后成鸡3-4斤左右，安全滋补，肉质紧实。",
});
const changeProduct=(name)=>{
    data.value=allData.value.filter(item=>item.name==name)[0]
    console.log(data.value,name);
}

const allData = ref([
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
      "优选品质·健康体制·品相优良·骨架肥大原生态优良品种，正宗纯种优质鸡苗，专属农场饲养，无抗生素，无激素，长大后成鸡3-4斤左右，安全滋补，肉质紧实。",
  },
]);
</script>
<style scoped lang="less">
.Product-container {
  height: 68vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-items: center;
  .ProductImg {
    flex: 0 0 30vw;
    .Img-containter {
      position: relative;
      float: right;
      top: 2vw;
    }
    img {
        transition: 0.7s;
      width: 17vw;
      height: 20vw;
      position: relative;
      top: 6vw;
      object-fit:contain;
    }
    .shadow {
      background: #e5f4e7;
      height: 5vw;
      width: 17vw;
      border-radius: 50%;
    }
  }
  .description {
    flex: 1 1 20vw;
    .description-container {
      position: relative;
      left: 35vw;
      transform: translateX(-50%);
      top: 2vw;
    }
    .title {
        transition: 0.7s;
      font-weight: 600;
      font-size: 2rem;
      margin-bottom: 3vw;
      letter-spacing: 0.3rem;
    }
    .text {
      line-height: 2.6rem;
      letter-spacing: 0.3rem;
      width: 40vw;
      max-width: 600px;
      font-size: 1.4rem;
      white-space: normal;
      p{
        transition: 0.7s;
        white-space: normal;
      }
    }
    .button {
      font-size: 1.4rem;
      letter-spacing: 0.3rem;
      font-weight: 600;
      color: #00990f;
      margin-top: 3vw;
      .btn {
        border: solid #00990f;
        width: fit-content;
        padding: 0.3vw 1vw;
        border-radius: 1.5vw;
      }
    }
  }
  .ProductChoose {

    flex: 0 0 17vw;
    .ProductChoose-container{
        transition: 0s;
        border-right: solid #00990f;
        width: fit-content;
        padding:4rem 1rem 4rem 0;
        top: 2vw;
        position: relative;
    }
    .selected{
      
        background: green;
        font-weight: 600;
        letter-spacing: 0.3rem;
        padding:0.5rem 2rem 0.8rem 2.5rem;
        width:fit-content !important;
        border-radius: 1.5vw;
        color:#fff;
        font-size: 1.5rem !important;
        margin:3rem 0 !important;
        left: 0 !important;
    }
    .select{
        cursor: pointer;
        transition: 0.5s;
        position: relative;
        margin:3rem 0;
        font-size: 1rem;
        left:5rem;
        width: 8.2rem;
    }
  }
}
</style>
