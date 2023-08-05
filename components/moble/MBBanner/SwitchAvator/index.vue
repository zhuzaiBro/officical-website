<template>
  <div class="left-avator avator" @click="handlePage('delete')">&lt;</div>
  <div class="right-avator avator" @click="handlePage('add')">&gt;</div>
</template>

<script>

export default {
setup(props,ctx){
  const handlePage=(type)=>{
    console.log("子组件点击",type);
    ctx.emit('changePage',type)
  }
  
  return{
    handlePage,
  }
}
}
</script>

<style >
.avator{
  transition: 1s;
  position: absolute;
  cursor: pointer;
  top:50%;
  /* transform: translateY(-50%); */
  /* background: rgba(0,0,0,.1); */
  line-height: 7.5vw;
  padding:0 1.5vw;
  height: 8vw;
  opacity: 0;
animation: jump-up 3s infinite;
}
@keyframes jump-up{
    0%{
      transform: translateY(-25%);
    }
    50%{
      transform: translateY(-75%);
    }
    100%{
      transform: translateY(-25%);
    }
  }
.left-avator:hover{
  /* background: rgba(0,0,0,.3); */
}
.right-avator:hover{
  /* background: rgba(0,0,0,.3); */
}
.left-avator{
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
left:0;
font-size: 6rem;
color:rgb(225, 225, 225)
}
.right-avator{
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  right:0;
  font-size: 6rem;
color:rgb(225, 225, 225)
}
.banner-container:hover .avator{
  transition: 1s;
  opacity: 1;
}
</style>