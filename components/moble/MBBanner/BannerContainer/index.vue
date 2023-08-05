<template>
  <div ref="myImg" class="Banner-container" :style="{ width: BannerData.imgSrcs.length * 100 + 'vw' }">
    <ImgLoader
      class="myImg"
      v-for="(item, index) in BannerData.imgSrcs"
      :src="item.url"
      :placeholder="item.url"
      :curIndex="curIndex==index"
      :active="curIndex"
      :style="{
        width: BannerData.width + 'vw',
        height: BannerData.height + 'vh',
      }"
    />
  </div>

</template>

<script>
import { defineComponent, onMounted, onUpdated, reactive, ref,onUnmounted } from "vue";
import ImgLoader from"../../../ImgLoader/index.vue"
export default {
  components:[ImgLoader],
  props: {
    BannerData: {
      type: Object,
      defalut: () => {
        {
        }
      },
    },
    curIndex: {
      type: Number,
      defalut: 0,
    },
  },
  setup(props, ext) {
    const myImg = ref(null);
    var timer = reactive(null);
    const switchData = reactive({
      dis: 0,
      totalDis: 0,
      targetMarginLeft: 0,
      currentMarginLeft: 0,
      times: 0,
      tick: 16,
    });

    onUpdated(() => {
      switchData.currentMarginLeft = parseFloat(getComputedStyle(myImg.value).marginLeft);
      switchData.times = Math.ceil(props.BannerData.duration / switchData.tick);
      switchData.targetMarginLeft=-parseFloat(getComputedStyle(myImg.value.firstElementChild).width)*props.curIndex
      switchData.totalDis =switchData.targetMarginLeft - switchData.currentMarginLeft;
      switchData.dis = switchData.totalDis / switchData.times;
      var curIndex=0;
      clearInterval(timer)
      timer=setInterval(()=>{
        curIndex++;
        switchData.currentMarginLeft+=switchData.dis
        myImg.value.style.marginLeft= `${switchData.currentMarginLeft }px`;
        if(curIndex>switchData.times){
          clearInterval(timer)
          myImg.value.style.marginLeft= `${switchData.targetMarginLeft }px`;
          clearInterval(timer)
        }
      },switchData.tick)
    });
    onUnmounted(()=>{
      clearInterval(timer)
    })

    const handleSwitch = () => {};
    return {
      ...props,
      myImg,
      handleSwitch,
    };
  },
};
</script>

<style scoped>
.banner-container{
  margin-left:0px;
  z-index:-888;
}
.myImg {
  float: left;
}

</style>