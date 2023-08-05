<template>
  <div
    :id="curIndex && 'image-loader-container'"
    @mousemove="handleMousemove"
    @mouseleave="handleMouseLeave"
  >
    <img
      v-if="!everythingDone"
      class="placeholder moveable"
      :src="placeholder"
      alt=""
    />
    <img
      @load="handleLoad"
      class="moveable"
      :src="src"
      alt=""
      :style="{
        opacity: originOpacity,
        transition: `${duration}ms`,
        left: moveSizeLeft + 'px',
        top: moveSizeTop + 'px',
      }"
    />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 1000,
  },
  curIndex: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Number,
  },
});

let originLoaded = ref(false); //  原图是否加载完成
let everythingDone = ref(false); // 是否一切都尘埃落定了

let originOpacity = computed(() => (originLoaded.value ? 1 : 0));
const imgUrl = computed(() => src);

const handleLoad = () => {
  originLoaded.value = true;
  setTimeout(() => {
    everythingDone.value = true;
    // emit("load");
  }, props.duration);
};

let currentIndex = ref(0);
let mouseInfoX = ref(0);
let mouseInfoy = ref(0);
let rect = null;
let imgContainer,
  center,
  containerSize = {
    height: null,
    width: null,
  };
let moveSizeLeft = computed(() => {
  // if (!containerSize.width) return;
  return -Math.floor(mouseInfoX.value / 10);
});
let moveSizeTop = computed(() => {
  // if (!containerSize.width) return;
  return -Math.floor(mouseInfoy.value / 10);
});
const handleChange = (num) => {
  currentIndex.value += +num;
  console.log(currentIndex.value);
};
// 鼠标进入时
const handleMousemove = (e) => {
  if (props.curIndex) {
    rect = imgContainer.getClientRects();
    mouseInfoX.value =
      e.clientX - rect[0].left - rect[0].width * currentIndex.value;
    mouseInfoy.value = e.clientY - rect[0].top;
  }
};
const handleMouseLeave = () => {
  if (props.curIndex) {
    mouseInfoX.value = center.x;
    mouseInfoy.value = center.y;
  }
};
var curTimer = setInterval(() => {
  if (props.curIndex) {
    imgContainer = document.getElementById("image-loader-container"); // 得到容器的dom，然后获取宽高
    containerSize.height = Math.floor(imgContainer.getClientRects()[0].height);
    containerSize.width = Math.floor(imgContainer.getClientRects()[0].width);
    // 求出中心点坐标，用于处理鼠标离开页面和初始化
    center = {
      x: Math.floor(containerSize.width / 2),
      y: Math.floor(containerSize.height / 2),
    };
    mouseInfoX.value = center.x;
    mouseInfoy.value = center.y;
  }
}, 1000);

onUnmounted(() => {
  clearInterval(curTimer);
});
onMounted(() => {
  if (props.curIndex) {
    imgContainer = document.getElementById("image-loader-container"); // 得到容器的dom，然后获取宽高
    containerSize.height = Math.floor(imgContainer.getClientRects()[0].height);
    containerSize.width = Math.floor(imgContainer.getClientRects()[0].width);
    // 求出中心点坐标，用于处理鼠标离开页面和初始化
    center = {
      x: Math.floor(containerSize.width / 2),
      y: Math.floor(containerSize.height / 2),
    };
    mouseInfoX.value = center.x;
    mouseInfoy.value = center.y;
  }
});
</script>

<style scoped lang="less">
@import "../../../assets/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  img {
    object-fit: cover;
  }
}
img {
    object-fit: cover;
  }
.placeholder {
  // filter: blur(2vw);
  height: 110vh;
  width: 110vw;
  position: relative;
  transition: 1s;
  animation: load 1s;
}

.moveable {
  height: 110vh;
  width: 110vw;
  position: relative;
}
#false {
  .moveable {
    transition: 1s;
    left: 0 !important;
    top: 0 !important;
  }
}
@keyframes load {
  0% {
    filter: blur(2vw);
  }
  50% {
    filter: blur(1vw);
  }
  100% {
    filter: blur(0vw);
  }
}
</style>
