<template>
  <Layout>
    <template #top v-if="isPC == true">
      <NavBar :style="{ paddingTop: '3rem' }" :isPC="isPC" />
      <!-- 垫片 -->
    </template>
    <template #main>
      <div class="loading" v-if="loading"></div>
      <!-- <div :style="{ height: '6rem' }"></div> -->
      <NuxtPage :isPC="isPC"></NuxtPage>
      <!-- <router-view :isPC="isPC" /> <PageFoot :isPC="isPC" /> -->
      <PageFoot v-if="isPC" />
    </template>
  </Layout>
</template>

<script setup>
import NavBar from "./components/NavBar/index.vue";
import Layout from "./layouts/index.vue";
import PageFoot from "./components/PageFoot/index.vue";
import init from "./api/initialize";
let isPC = ref("no");
const loading = ref(true);
const router = useRouter();
onMounted(() => {
  loading.value = true;
  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    // 当前设备是移动设备
    router.push("/moble");
    isPC.value = false;
  } else {
    router.push("/");
    isPC.value = true;
  }
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

const { data: SocalMedalData } = await useAsyncData(() =>
  $fetch("https://discosoul.com.cn/offical/third", {  method: "get"})
);
SocalMedal().value = SocalMedalData.value.data;

const { data: companyInfoData } = await useAsyncData(() =>
  $fetch("https://discosoul.com.cn/offical/setting", { method: "get" })
);
companyInfo().value = companyInfoData.value.data;

const { data: BannerData } = await useAsyncData(() =>
  $fetch("https://discosoul.com.cn/offical/banner?belong=indexBanner", {   method: "get" })
);
BannerInfo().value = BannerData.value.data;

const { data: newsData } = await useAsyncData(() =>
  $fetch("https://discosoul.com.cn/offical/article/admin", {   method: "get" })
);
getNews().value=newsData.value.data
console.log(newsData.value,111111111111111);

const { data: goodResultData } = await useAsyncData(() =>
  $fetch("https://www.discosoul.com.cn/shop/mall/groom/list/2", {   method: "get" })
);
goodResult().value=goodResultData.value.data

const { data: FreshResultData } = await useAsyncData(() =>
  $fetch("https://www.discosoul.com.cn/shop/mall/groom/list/1", {   method: "get" })
);
FreshResult().value=FreshResultData.value.data

const { data: CardResultData } = await useAsyncData(() =>
  $fetch("https://www.discosoul.com.cn/shop/mall/groom/list/1", {   method: "get" })
);
CardResult().value=CardResultData.value.data

</script>
<style  >
@import "./index.css";
@import "element-plus/dist/index.css";
@import "//at.alicdn.com/t/c/font_3787784_ulpuxp3000f.css";
.loading {
  background: #fff;
  position: fixed;
  width: 99vw;
  height: 100vh;
  left: 0;
  top: 0;
  animation: appload 3s forwards;

  z-index: 99;
}
@keyframes appload {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.7;
  }
}
</style>