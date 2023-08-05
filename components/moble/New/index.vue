<template>
    <div class="new-container" @click="gotLink(props.showdata.link)">
        <div class="banner">
            <!-- <img :src="props.showdata.banner" alt=""> -->
            <!-- <div class="opacity"></div> -->
            <div class="container" :style="`background: url('${props.showdata.banner}')`"></div>
            <div class="opacity">
            <div class="text">
                <div class="title">
                    {{props.showdata.title}}
                </div>
                <div class="content">
                    {{getTime(props.showdata.updatedAt)}}
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    showdata:{
        type:Object
    }
})
  const getTime=(time)=>{
    const newtime=time.split('T')
    return newtime[0]
  }
  const gotLink=(link)=>{
   window.open(link)
 }
</script>

<style lang="less" scoped>
.new-container{
    height: 80vw;
    width: 100%;
    border-bottom: 4vw solid rgb(232, 232, 232);
    
    .banner{
    height: 100%;
    width: 100%;
    img{
        height: 100%;
        width: 100%; 
        object-fit:contain; 
    }
    .container{
        margin:0 2vw;
        height: 60vw;
        width: 95vw;
        object-fit: cover;
        background-size:cover !important;
        background-position:center center !important;
        border-radius: 4vw;
        top:0;
    }
    .opacity{
        height: 50%;
        width: 100%;
        z-index: 1;
    bottom:50%;
    position: relative;
    background-image: linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.8),rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.95), rgb(255, 255, 255));                                                                     
    }
    .text{
        padding:10vw 5vw;
        top:10vw;
        position: relative;
        width:99vw;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
    .title{
        font-size: 6vw;
        font-weight: 600;
        width: fit-content;
        word-wrap: normal;
        text-overflow: ellipsis;
        display: contents;
    }
    .content{
        margin-top:10vw;
        font-size: 4vw;
        font-weight: 600;
        color:rgb(110, 110, 110)
    }
    }
}
</style>