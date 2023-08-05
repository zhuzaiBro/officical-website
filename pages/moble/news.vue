
<template>
  <div class="news-container">
    <!-- <img src="../../assets/MCN_NewsImg1.jpg" alt="" class="newImg"> -->
    <!-- v-if="(lastest.id!=item.id)" -->
    <div class="title">新闻活动</div>
    <div class="new">
      <div class="content">
            <div class="tag">最新</div>
            <div class="newtitle">{{lastest.title}}</div>
            <div class="time">{{getTime(lastest.updatedAt)}}</div>
          </div>
        <div class="text">
         
          <div class="black"></div>
      </div>
        <div class="img">
          <img :src="lastest.banner" alt="" class="myimg">
        </div>
    </div>
    <div class="title" style="font-size:6vw;">往期新闻</div>
    <MobleNew v-for="(item,index) in showData" :showdata="item" :key="item.id"  />
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
    <div class="banner" @click="gotLink('http://www.zhuzaibrother.cn/')">
      <img src="../../assets/MCN_NewsFotter2.png" alt="" class="myimg">
    </div>
  </div>
</template>
  
  <script setup>
  import newImg from "../../assets/MCN_NewsImg1.jpg";
import titleControl from "../../utils/titleControler";
import MobleNew from"../../components/moble/New/index.vue"
let allData = ref({ data: [], total: 0 });
const showData = ref([]);
const currentPage = ref(1);
const lastest=ref({})
onMounted(async () => {
  allData.value.data = getNews().value;
  allData.value.total = allData.value.data.length;
  showData.value = allData.value.data.slice(1, 7);
  lastest.value=allData.value.data[0];
  titleControl.setRouteTitle("新闻活动 | 喵馋农");
  console.log(99999999999,lastest.value)
});
const handleCurrentChange = (page) => {
  showData.value = allData.value.data.slice(page * 6 - 5, page * 6 + 1);
};
const gotLink = (link) => {
  window.open(link);
};
const getTime=(time='2022')=>{
    const newtime=time.split('T')
    return newtime[0]
  }
</script>
  
  <style lang="less" scoped>
.news-container {
  .new{
    display: flex;
    width:96vw;
    height:20vh;
    overflow: hidden;
    background: #193d2d;
    margin:0 2vw 7vw;
    border-radius: 1vw;;
    .text{
      flex:0 0 40vw;
      width:45vw;
      top:-7vh;
      left:4vw;
      position: relative;
      height:29vh;
      transform: rotateZ(10deg);
      background: #193d2d;
      overflow: hidden;
      
      .black{
        border-radius: 0;
        width:50vw;
        height:8vw;
        background: #fff;
        position: absolute;
        bottom:0;
        transform: rotateZ(-10deg);
      }
    }
    .content{
       padding:3vh 0 0 4vh;
        position: absolute;
        z-index:2;
        color:#fff;
        .tag{
          padding:0.5vw 1vw;
          background: rgb(219, 117, 117);
          width: fit-content;
          border-radius: 1vw;
          display: block;
        }
        .newtitle{
          margin-top:3vh;
          font-size: 5vw;
          font-weight: 600;
        }
        .time{
          margin-top:2vw;
        }

      }
    .img{
      flex:0 0 60vw;
      width:60vw;
      background: #fff;
      
      img{
        margin-top:4vw;
        width:70vw;
        height:20vh;
        object-fit: cover;
      }
    }
  }
  .banner{
    padding-top:10vw;
    width:100%;
    img{
      object-fit: contain;
      width:100%;
    }
  }
  .newImg{
    width:100%;
    object-fit: contain;
   padding:10vw 0;
  }
  .title{
    font-size:8vw;
    font-weight: 600;
    color:#043b09;
    padding:7vw 5vw 10vw 5vw;
    width: fit-content;
  }
  .pagination {
    left: 50%;
    position: relative;
    transform: translate(-50%, 0);
    width: fit-content;
    margin-top: 3vw;
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