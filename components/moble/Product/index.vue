<template>
  <div class="MBslide-container">
    <div class="MBleft MBaside">
      <i @click="GotoNext(1)" class="iconfont icon-zuojiantou"></i>
    </div>
    <div class="MBcenter">
      <div ref="germchitRef" class="MBslide">
        <img
          src="../../../assets/loading.gif"
          alt=""
          v-show="props.showData.length == 0"
          style="left: 36vw; width: 10vw; height: 10vw; position: relative"
        />
        <span
          class="MBitem"
          v-for="(item, index) in props.showData"
          :key="item.id"
        >
          <img :src="item.image" alt="" />
          <div class="MBtext">{{ item.storeName }}</div>
        </span>
      </div>
    </div>
    <div class="MBright MBaside">
      <i @click="GotoNext(-1)" class="iconfont icon-youjiantou"></i>
    </div>
  </div>
</template>
<script setup>
import { ElMessage } from "element-plus";
import Logo from "../../../assets/MCN_nav.png";
const props = defineProps({
  showData: {
    type: Array,
    defalut: () => [],
  },
  title: {
    type: String,
  },
});
const germchitRef = ref(null);
const { showData } = toRefs(props);
const curIndex = ref(0);
const messageFlag = ref(0);
let timer = reactive(null);
const autoPlay = (minDuration, maxDuration) => {
  const randomTime = minDuration + Math.floor(Math.random() * (maxDuration - minDuration));
  console.log(99999999, randomTime);
  let flag=1;
  timer = setInterval(() => {
    
    if(-curIndex.value ==showData.value.length - 1||-curIndex.value ==0){
       flag==1?flag=-1:flag=1
    }
    GotoNext(flag)
  }, randomTime);
};
onMounted(() => {
  clearInterval(timer);
  autoPlay(5000, 30000);
});
const GotoNext = (number) => {
  console.log(7777777777, -curIndex.value, showData.value.length - 1);
  curIndex.value = curIndex.value + number;
  if (curIndex.value > 0) {
    if (messageFlag.value !== 0) {
      return;
    }
    curIndex.value = 0;
    messageFlag.value = 1;
    ElMessage({
      dangerouslyUseHTMLString: true,
      message:
        '<div style="transform:translate(-50%,0);opacity:1;position:absolute;top:10vh;"><img style="height:7rem;margin:auto;display:block;" src="https://cdn.discosoul.com.cn/farm-130939706307cb14aaa87848e887c9c766bf666213.png"/><p style="color:#000;font-weight:600;">亲！不能再往前啦(≧▽≦)</p></div>',
      icon: "",
      duration: 2000,
    });
    setTimeout(() => {
      messageFlag.value = 0;
    }, 2000);
  } else if (-curIndex.value > showData.value.length - 1) {
    if (messageFlag.value !== 0) {
      return;
    }
    curIndex.value = -showData.value.length + 1;
    messageFlag.value = 2;
    ElMessage({
      dangerouslyUseHTMLString: true,
      message:
        '<div style="transform:translate(-50%,0);opacity:1;position:absolute;top:10vh;"><img style="height:7rem;margin:auto;display:block;" src="https://cdn.discosoul.com.cn/farm-130939706307cb14aaa87848e887c9c766bf666213.png"/><p style="color:#000;font-weight:600;">亲！不能再往前啦(≧▽≦)</p></div>',
      icon: "",
      duration: 2000,
    });
    setTimeout(() => {
      messageFlag.value = 0;
    }, 2000);
  } else {
    germchitRef.value.style.marginLeft = curIndex.value * 80 + "vw";
  }
};
</script>
<style lang="less" >
.MBslide {
  transition: 1s;
}
.MBslide-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.MBslide-container .MBaside {
  width: 8vw;
  flex: 0 0 10vw;
  text-align: center;
  animation: jump-up 3s infinite;
  i {
    font-size: 5vh;
    color: rgba(0, 0, 0, 0.2);
  }
}
.MBslide-container .MBleft {
}
.MBslide-container .MBcenter {
  flex: 1 1 80vw;
  width: 80vw;
  overflow: hidden;
  scrollbar-width: none;
  .MBitem {
    overflow: hidden;
    border: solid 1vw #00990f;
    display: inline-block;
    border-radius: 1.5rem;
    margin: 2rem 9vw;
    width: fit-content;
  }
  img {
    object-fit: cover;
    width: 60vw;
    height: 60vw;
  }
  .MBtext {
    text-align: center;
    margin: 2.5vw 0;
    font-weight: 600;
    letter-spacing: 0.1rem;
    width: 60vw;
    font-size: 4vw;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.MBslide-container .MBright {
}
.el-message--info {
  background: #0000;
  border: #0000;
}
.el-message-icon--info {
  opacity: 0;
}
</style>