<template>
  <div class="dots">
     
    <span @click="handleDots(index)" v-for="(item,index) in BannerData.imgSrcs" :class="{'active':curIndex==index}">
    </span>
  </div>
</template>

<script>
export default {
    props:{
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
setup(props,ctx){
    const handleDots=(index)=>{
    ctx.emit("handleDot",index)
    }
    return{
        ...props,
        handleDots
    }
}
}
</script>

<style>
.dots{
    position: absolute;
    padding:1rem 1.5rem;
    /* background-color:rgba(0, 0, 0, .2); */
    border-radius: 8px;
    left:50%;
    bottom: 3vw;
    transform: translateX(-50%);
    display: flex;
}
.dots span{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    margin:0.8rem;
    cursor: pointer;
    background-color: #fff;
}
.dots span.active{
  background: #0000;
  border:rgb(255, 255, 255) solid  0.1rem;
  width: 1.3rem;
  height: 1.3rem;
  transition: 0.5s;
  top:-0.2rem;
  position: relative;
}
.dots span:hover{
  background: #0000;
  border:rgb(255, 255, 255) solid  0.1rem;
  width: 1.3rem;
  height: 1.3rem;
  transition: 0.7s;
  top:-0.2rem;
  position: relative;
}
</style>