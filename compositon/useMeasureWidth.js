import { ref, onMounted, watch } from 'vue';

export default function useMeasureWidth() {

    let clientWidth = ref(1200);
    let isPC = true;
    watch(clientWidth, () => {
        isPC = clientWidth.value >= 996;
    })

    onMounted(() => {
        clientWidth.value = window.innerWidth;
    })
    return { isPC, clientWidth };
}