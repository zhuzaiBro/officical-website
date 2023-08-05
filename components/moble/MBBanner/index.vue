<template>
   <!-- :onmouseenter="stopSwitch" 
   :onmouseleave="autoSwitch" -->
  <div @touchmove="touchmove"
  @touchstart="touchstart"
   ref="BannerRef"
   class="banner-container" 
   :style="{width:BannerData.width+'vw',height:BannerData.height+'vh'}">
    <BannerContainer :BannerData='BannerData' :curIndex="curIndex"/>
    <!-- <SwitchAvator @changePage="handleEmit"/> -->
    <SwitchDots @handleDot="handleDot" :BannerData='BannerData' :curIndex="curIndex"/>
  </div>
</template>

<script lang="ts">
import {reactive,toRefs,ref, onUpdated} from 'vue';
import BannerContainer from"./BannerContainer/index.vue"
import SwitchAvator from"./SwitchAvator/index.vue"
import SwitchDots from"./SwitchDots/index.vue"
import {InitBannerData} from "./type"


export default {
  components:{
    BannerContainer,SwitchAvator,SwitchDots
  },
  props:{
    BannerData:{
      type:Object,
      default:()=>{{}},
    }
  },
  setup(props:any, ext:any) {
    const BannerRef=ref(null)
    const startX=ref(0)
    const startY=ref(0)
    var timer2=reactive(null as any)
    var timer=reactive(null as any)
    const state=reactive({ curIndex:0})


    const handleSwitch=(index:number)=>{
      if(index<0){
        index=props.BannerData.imgSrcs.length-1
      }else if(index>props.BannerData.imgSrcs.length-1){
        index=0
      }
      state.curIndex=index;
    }

    const autoSwitch=():void=>{
     console.log("开始轮播");
       timer =setInterval(()=>{
        state.curIndex++
        handleSwitch(state.curIndex)
      }, props.BannerData.autoDuration)
    }
    const stopSwitch=():void=>{
      console.log("结束轮播");
      clearInterval(timer)
    }
    onUpdated(()=>{

    })
    const touchstart=(e:any)=>{
       startX.value=e.touches[0].clientX;
      startY.value=e.touches[0].clientY;
    }
    const touchmove=(e:any)=>{
      clearInterval(timer2);
       timer2=setInterval(()=>{
        if((startX.value-e.touches[0].clientX)<=0){
        console.log("左滑");
        state.curIndex--
      }else{
        console.log("右滑");
        state.curIndex++
      }
      handleSwitch(state.curIndex)
      clearInterval(timer2)
      },20)
     
      
    }
    const handleEmit=(value:string)=>{
      value==='add'?state.curIndex++:state.curIndex--;
      handleSwitch(state.curIndex)
    }
    const handleDot=(value:number):void=>{

      handleSwitch(value)
    }
    autoSwitch()
  
    return {
      BannerData: props.BannerData,
      ...toRefs(state),
      handleSwitch,
      autoSwitch,
      stopSwitch,
      handleEmit,
      handleDot,
      touchmove,
      touchstart,
    };
  },
};
</script>

<style  scoped>
.banner-container{
  position: relative;
  box-sizing: border-box;
    overflow: hidden;
    border-radius: 0;
    margin: auto;
    
}

</style>