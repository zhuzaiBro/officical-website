<template>
  <div class="HeaderPage Page">
    <img src="../assets/MCN_NewsImg1.jpg" alt="" />
    <div class="HeaderText">新闻中心</div>
  </div>
  <div class="NewsPage">
    <div class="newsMain">
      <img src="../assets/loading.gif" alt="" v-show="loading" style="left:30vw;width:10vw;height:10vw;position: relative;">
       
      <div class="item" v-for="(item,index) in showData" :key="item.id" @click="gotLink(item.link)">
        <img :src="item.banner" alt="">
        <div class="text">55
          <p class="content">{{item.title}}</p>
          <p class="time">{{getTime(item.updatedAt)}}</p>
        </div>
      </div>
    </div>
   
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next, jumper, total'"
        :total="allData.total"
        :page-size="6"
        v-model="currentPage"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
  <div class="FooterPage Page" @click="gotLink('http://www.zhuzaibrother.cn/')">
    <img src="../assets/MCN_NewsFotter.png" alt="" />
  </div>
</template>
<script setup>
import titleControl from "../utils/titleControler";
import { onMounted, ref } from "vue";
import {IS_DEVELOPMENT} from"../api/request.js"
const loading=ref(true)
let allData = ref({data:[],total:0});
const showData=ref([])
const currentPage=ref(1)
 onMounted(async()=>{ 
    // const res= await useFetch( `${IS_DEVELOPMENT?'api':'oweb'}/article/admin`)
    allData.value.data=getNews().value;
    allData.value.total=allData.value.data.length
    showData.value=allData.value.data.slice(0,6);
    titleControl.setRouteTitle("新闻活动 | 喵馋农");
    loading.value=false
  })
  const getTime=(time)=>{
    const newtime=time.split('T')
    return newtime[0]
  }
  const handleCurrentChange=(page)=>{
    showData.value=allData.value.data.slice(page*6-5,page*6+1)
  }
 const gotLink=(link)=>{
   window.open(link)
 }
</script>
<style scoped lang="less">
.Page {
  width: 100%;
  height: 100vh;
}
.FooterPage{
  margin-top: 15vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .HeaderText {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 3rem;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.HeaderPage {
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .HeaderText {
    color: #fff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 3rem;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.NewsPage{
  width: 90vw;
  height: fit-content;
  margin:auto;
 .newsMain{
  display: grid;
  grid-template-columns: repeat(3,30vw);
  justify-items: center;
  align-items: start;
  .item{
    cursor: pointer;
    background: #00990F;
    overflow: hidden;
    border-radius: 1.5rem;
    margin:2rem 0;
    width:25vw;
  }
  img{
    object-fit: cover;
    width:25vw;
    height:25vw;
  }
  .text{
    background: #00990F;
    color:#fff;;
    padding:1rem 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1vw;
    .content{
      overflow: hidden;
    text-overflow: ellipsis;
      font-weight: 500;
      line-height: 2rem;
      text-align: start;
    }
    .time{
      font-weight: 500;
      text-align: end;
    }
  }
 }
 .pagination{
   position: absolute;
   left:50%;
   transform: translate(-50%,0);
  margin-top:2.5rem;
 }
}

:deep(.el-pagination.is-background .el-pager li.is-active){
  background: #00990F;
}
:deep(.el-pagination .el-pager li:focus-visible){
  outline:solid 1px #00990F;
}
:deep(.el-pagination .el-pager li:hover){
  color:#00990F;
}
:deep(.el-input__wrapper.is-focus){
  box-shadow: 0 0 0 1px #00990F inset;
}
:deep(.el-pagination__editor.el-input){
  width:35px;
}
</style>