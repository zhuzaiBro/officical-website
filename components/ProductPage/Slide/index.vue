<template>
  <div class="slide-container">
    <div class="left aside">
      <i
        @click="GotoNext(1)"
        class="iconfont icon-shangyiyehoutuifanhui-yuankuang"
      ></i>
    </div>
    <div class="center">
      <div ref="germchitRef" class="slide">
        <img
          src="../../../assets/loading.gif"
          alt=""
          v-show="props.showData.length==0"
          style="left: 36vw; width: 10vw; height: 10vw; position: relative"
        />
        <span
          class="item"
          v-for="(item, index) in props.showData"
          :key="item.id"
        >
          <img :src="item.image" alt="" />
          <div class="text">{{ item.storeName }}</div>
        </span>
      </div>
    </div>
    <div class="right aside">
      <i
        @click="GotoNext(-1)"
        class="iconfont icon-xiayiyeqianjinchakangengduo-yuankuang"
      ></i>
    </div>
  </div>
</template>
<script setup>
import {ElMessage} from 'element-plus'
import Logo from "../../../assets/MCN_nav.png"
const props = defineProps({
  showData: {
    type: Array,
    defalut: () => [],
  },
});
const germchitRef = ref(null);
const { showData } = toRefs(props);
console.log(999997, props, showData.value);
const curIndex = ref(0);
const GotoNext = (number) => {
    curIndex.value = curIndex.value + number;
    if(curIndex.value >0){
        curIndex.value = 0;
        ElMessage({
            dangerouslyUseHTMLString:true,
            message:'<div style="transform:translate(-50%,0);opacity:1;position:absolute;top:10vh;"><img style="height:7rem;margin:auto;display:block;" src="https://cdn.discosoul.com.cn/farm-130939706307cb14aaa87848e887c9c766bf666213.png"/><p style="color:#000;font-weight:600;">亲！不能再往前啦(≧▽≦)</p></div>',
            icon:'',
            duration:2000,
        })
    }else if(-curIndex.value>showData.value.length-4){
        curIndex.value=showData.value.length
        ElMessage({
            dangerouslyUseHTMLString:true,
            message:'<div style="transform:translate(-50%,0);opacity:1;position:absolute;top:10vh;"><img style="height:7rem;margin:auto;display:block;" src="https://cdn.discosoul.com.cn/farm-130939706307cb14aaa87848e887c9c766bf666213.png"/><p style="color:#000;font-weight:600;">亲！不能再往前啦(≧▽≦)</p></div>',
            icon:'',
            duration:2000,
        })
    }else{
         germchitRef.value.style.marginLeft = curIndex.value * 20 + "vw";
    }
  
  console.log(curIndex.value, showData.value.length,germchitRef.value.style.marginLeft, 777799);
};
</script>
<style lang="less" >
.slide {
  transition: 1s;
}
.slide-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.slide-container .aside {
  width: 8vw;
  flex: 0 0 10vw;
  text-align: center;
  animation: jump-up 3s infinite;
  i {
    font-size: 5vh;
    color: rgba(0, 0, 0, 0.2);
  }
 
}
.slide-container .left {
}
.slide-container .center {
  flex: 1 1 80vw;
  width: 80vw;
  overflow: hidden;
  scrollbar-width: none;
  .item {
    overflow: hidden;
    border: solid 0.3vw #00990f;
    display: inline-block;
    border-radius: 1.5rem;
    margin: 2rem 2.2vw;
    width: fit-content;
  }
  img {
    object-fit: cover;
    width: 15vw;
    height: 15vw;
  }
  .text {
    text-align: center;
    margin: 2.5vw 0;
    font-weight: 600;
    letter-spacing: 0.1rem;
    width: 15vw;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.slide-container .right {
}
.el-message--info{
    background: #0000;
    border:#0000
}
.el-message-icon--info{
    opacity: 0;
}
</style>