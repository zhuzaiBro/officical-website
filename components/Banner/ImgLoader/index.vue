<template>
  <div
  >
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="" />
    <img
    
      @load="handleLoad"

      :src="src"
      alt=""
      :style="{   opacity: originOpacity, transition: `${duration}ms`  }"
    />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 500,
  },
});

let originLoaded = ref(false); //  原图是否加载完成
let everythingDone = ref(false); // 是否一切都尘埃落定了

let originOpacity = computed(() => (originLoaded.value ? 1 : 0));
const imgUrl = computed(() => src);

const handleLoad = () => {
  originLoaded.value = true;
  setTimeout(() => {
    everythingDone.value = true;
    // emit("load");
  }, props.duration);
};



</script>

<style scoped lang="less">

.image-loader-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  img {

    object-fit: cover;
  
  }

  .placeholder {
    filter: blur(2vw);
  }
}
.moveable{
  height: 110vh;
  width: 120vw;
  position: relative;
}
</style>
