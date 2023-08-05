<template>
  <div class="page">
    <div class="top">
      <div class="title">
        <img src="../assets/CMN_Logo.png" alt="">
        {{diaplaynone}}
      </div>
    <div class="menu" @click="changeMenu()"> <i class="iconfont"  :class="showMenu?' icon-zhankai':'   icon-cuowuguanbiquxiao',animation=='disappear'?'disappear':'appear'"></i></div>
      </div>
  </div>
  <!-- 垫片 -->
  <div class="dianpian"></div>
 <div class="menuItem"  @click="cancel()" :style="displaynone?'display:none':''" :class="!MenuExpand?'disappearMenu':'appearMenu'">
    <NuxtLink
      to="/moble"
      class="link"
      :class="!MenuExpand?'disappear':'appear'"
    :style="displaynone?'display:none;animation-duration:0.6s':'animation-duration:1s'"
      active-class="selected"
      exact-active-class="qwq"
      @click="cancel()"
    >
    <div>首页</div>
    </NuxtLink>
    <NuxtLink
      to="/moble/product"
      :class="!MenuExpand?'disappear':'appear'"
      :style="displaynone?'display:none;animation-duration:0.7s':'animation-duration:0.9s'"
      class="link"
      active-class="selected"
      exact-active-class="qwq"
      @click="cancel()"
    >
    <div>产品中心</div>
    </NuxtLink>
    <NuxtLink
    :class="!MenuExpand?'disappear':'appear'"
     :style="displaynone?'display:none':''"
     style="animation-duration:0.8s"
      to="/moble/BreedingBase"
      class="link"
      active-class="selected"
      exact-active-class="qwq"
      @click="cancel()"
    >
    <div>养殖基地</div>
    </NuxtLink>
    <NuxtLink
    :class="!MenuExpand?'disappear':'appear'"
    :style="displaynone?'display:none;animation-duration:0.9s':'animation-duration:0.7s'"
      to="/moble/news"
      class="link"
      active-class="selected"
      exact-active-class="qwq"
      @click="cancel()"
    >
    <div>新闻活动</div>
    </NuxtLink>
    <NuxtLink
    :class="!MenuExpand?'disappear':'appear'"
     :style="displaynone?'display:none;animation-duration:1s':'animation-duration:0.6s'"
      to="/moble/join"
      class="link"
      active-class="selected"
      exact-active-class="qwq"
      @click="cancel()"
    >
      <div>加入我们</div>
    </NuxtLink>
 
  </div>
    <NuxtPage/>
   <MoblePageFoot/>
</template>
<script setup>
import MoblePageFoot from "../components/moble/PageFoot/index.vue"
const showMenu=ref(true)
const MenuExpand=ref(false)
const animation=ref('')
const displaynone=ref(true)
watchEffect(()=>{
  if(MenuExpand.value){
    displaynone.value=false
  }
  if(displaynone.value){
    setTimeout(() => {
      MenuExpand.value
    },2000)
  }
})
const cancel=()=>{
  MenuExpand.value=false
  showMenu.value=true
  setTimeout(()=>{displaynone.value=true },1000)
}

const changeMenu=()=>{
  MenuExpand.value=!MenuExpand.value
  if(MenuExpand.value){displaynone.value=false}
    animation.value="disappear"
  if(!showMenu.value&&!MenuExpand.value){
    setTimeout(()=>{
      if(!showMenu.value&&!MenuExpand.value)displaynone.value=true
      },1000)
  }else{
    displaynone.value=false
  }
  setTimeout(()=>{ 
    showMenu.value=!showMenu.value;
    animation.value="appear"
  },300)
}
</script>
<style scoped lang="less">
.dianpian{
  height:9.5vh;
  width:100%;
}
.page{
  position:fixed;
  background-color:#fff;
  width:100%;
  
  z-index: 99;
}
.top{
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:9.5vh;
  width:100%;
  z-index: 999;
}
.title{
  flex:1 1 90vw;
  img{
    height:9vh;
    width:9vh;
    left:48%;
    position: relative;
  }
}
.menu{
  flex : 0 0 10vw;
 i{
   transition: 2s !important;
  font-weight: 600;
  font-size: 7vw;
  
 }
}
.appear{
  animation:1s appear forwards
}
.disappear{

  animation:0.3s disappear forwards
}
@keyframes appear {
  0%{
    opacity: 0;
    display: none;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

@keyframes disappear{
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 0;
  }
}
.disappearMenu{
  animation:1.1s disappearMenu forwards
}
.appearMenu{
  animation:1.1s appearMenu forwards
}
@keyframes disappearMenu {
  0%{
    height:91vh;
  }

  100%{
    height:0;
  }
}
@keyframes appearMenu {
  0%{
    height:0;
  }

  100%{
    height:91vh
  }
}
.menuItem{
  display: flex;
  flex-direction: column;
  height:0vh;
  position: fixed;
  width:100%;
  top:9vh;
  background: #fff;
  opacity: 0.9;
  z-index: 998;
}
.link{
  font-size: 4vw;
  font-weight: 600;
  :hover{
    color:#00990f
  }
}
.link div{
  margin:0 12vw;
  padding:4vw 0 4vw 0;
  border-bottom: 0.5vw solid #eee;
}
.link:hover{
  color:#00990f;
  background-color:#effef1
}
.qwq{
  color:#00990f;
  background-color:#effef1;
  border-bottom:0px!important;
}

</style>