<template>
    <ul
      class="rotation-img-container"
      :style="{
        width: imgList.length * 100 + '%',
        marginLeft: -80 * currentIndex + 'vw',
      }"
    >
      <li
        v-for="item in imgList"
        :key="item.id"
        id="rotation-img-container"
        @mousemove="handleMousemove"
        @mouseleave="handleMouseLeave"
      >
        <div
          :style="{ left: moveSizeLeft + 'px', top: moveSizeTop + 'px' }"
          class="img-container"
        >
          <ImgLoader
            :src="
              item.imgUrl
                ? item.imgUrl
                : 'http://www.nkymblog.top/static/upload/2021-12-23-19-22-56-369-df5e3.jpeg'
            "
            placeholder="http://www.zhuzaibrother.cn/static/upload/2022-3-9-21-34-10-899-18e01.png"
            :duration="500"
          />
        </div>
      </li>
    </ul>
    <!-- 左右箭头 -->
    <div class="direction" :style="{ width: 80 + 'vw' }">
      <div
        class="arrow left"
        v-show="currentIndex !== 0"
        @click="handleChange(-1)"
      >
        &lt;
      </div>
      <div
        class="arrow right"
        v-show="currentIndex !== imgList.length - 1"
        @click="handleChange(1)"
      >
        &gt;
      </div>
    </div>
  
    <!-- 页数显示器 -->
    <ul class="iterator">
      <li
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in imgList"
        :key="item.id"
        class="dot"
      ></li>
    </ul>
  </template>
  
  <script setup >
  import ImgLoader from "../ImgLoader/index.vue";
  import { useMouse } from "../../compositon/useMouse";
  import { computed, onMounted, ref } from "vue";
  const props = defineProps({
    imgList: {
      type: Array,
      default: () => [],
    },
  });
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
    rect = imgContainer.getClientRects();
    mouseInfoX.value =
      e.clientX - rect[0].left - rect[0].width * currentIndex.value;
    mouseInfoy.value = e.clientY - rect[0].top;
  };
  const handleMouseLeave = () => {
    mouseInfoX.value = center.x;
    mouseInfoy.value = center.y;
  };
//   onMounted(() => {
//     imgContainer = document.getElementById("rotation-img-container"); // 得到容器的dom，然后获取宽高
//     containerSize.height = Math.floor(imgContainer.getClientRects()[0].height);
//     containerSize.width = Math.floor(imgContainer.getClientRects()[0].width);
//     // 求出中心点坐标，用于处理鼠标离开页面和初始化
//     center = {
//       x: Math.floor(containerSize.width / 2),
//       y: Math.floor(containerSize.height / 2),
//     };
//     mouseInfoX.value = center.x;
//     mouseInfoy.value = center.y;
//   });
  </script>
  
  <style lang="less" scoped>
  .rotation-img-container {
    // width: 100%;
    transition: 0.4s;
    height: 100%;
    position: relative;
    display: flex;
    li {
      flex-grow: 0;
      position: relative;
      overflow: hidden;
      .img-container {
        width: 110%;
        height: 110%;
        position: absolute;
        left: 0;
        top: 0;
        transition: 0.3s;
      }
      width: 100%;
      height: 100%;
    }
  }
  .direction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    display: flex;
    justify-content: space-between;
    height: 38px;
    line-height: 38px;
    .arrow {
      cursor: pointer;
      height: 100%;
      width: 3rem;
      background-color: rgba(254, 186, 10, 0.3);
      text-align: center;
      font-size: 26px;
      position: absolute;
      &.left {
        left: 0;
        border-radius: 0 19px 19px 0;
      }
      &.right {
        right: 0;
        border-radius: 19px 0 0 19px;
      }
    }
  }
  .iterator {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    background: rgba(0, 0, 0, 0.3);
    transform: translateX(-50%);
    height: 2rem;
    padding: 0.4rem 0;
    border-radius: 1rem;
    .dot {
      float: left;
      margin: 0 1rem;
      width: 1.2rem;
      height: 1.2rem;
      background: #fff;
      border-radius: 50%;
      &.active {
        background-color: #ff6770;
      }
    }
  }
  </style>