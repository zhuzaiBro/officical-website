<template>
    <i class="iconfont" :class="kind" :style="{ fontSize: size + 'rem' }"></i>
  </template>
  
 
  <script lang="ts" setup>
  import { computed } from "vue";
  
  const props = defineProps({
    type: {
      type: String,
      required: true,
      default: "arrowDown"
    },
    size: {
      type: String,
      default: 2,
    },
  });
  const map = {
    arrowDown: "icon-sanjiaodown",
    weixin: "icon-weixin",
    shop: "icon-gouwu1",
    join: "icon-hezuohuoban",
    about: "icon-guanyu",
    show: "icon-jifenshangcheng",
    comment: "icon-pinglun",
    empty: "icon-konghezi",
    arrowRight: "icon-youjiantou",
    weibo: "icon-weibo",
    home: "icon-shouye1",
    equal: "icon-gongping_gongzheng",
    woshou: "icon-hands",
    color: "icon-zhuti_tiaosepan_o",
    earth: "icon-diqiu",
  };
  const kind = computed(() => {return eval(`map.${props.type}`) });
  </script>
  
  <style scoped>
  @import "//at.alicdn.com/t/font_3278969_i8r08n6mbg.css";
  .iconfont {
    color: inherit;
  }
  </style>