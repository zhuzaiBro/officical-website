import { computed, onMounted, ref } from "vue"; // 处理鼠标移动，图片跟着一起动
/**
 * 
 * 
 */
export const useMouse = () => {
    let mouseInfoX = ref(0);
    let mouseInfoy = ref(0);
    let rect = null;
    let imgContainer,
        center,
        containerSize = {
            height: null,
            width: null,
        };
    let moveSizeLeft = computed(() => {
        // if (!containerSize.width) return;
        return -Math.floor(mouseInfoX.value / 10);
    });
    let moveSizeTop = computed(() => {
        // if (!containerSize.width) return;
        return -Math.floor(mouseInfoy.value / 10);
    });
    // 鼠标进入时
    const handleMousemove = (e) => {
        rect = imgContainer.getClientRects();
        mouseInfoX.value = e.clientX - rect[0].left;
        mouseInfoy.value = e.clientY - rect[0].top;
    };
    const handleMouseLeave = () => {
        mouseInfoX.value = center.x;
        mouseInfoy.value = center.y;
    };
    onMounted(() => {
        imgContainer = document.getElementById("rotation-img-container"); // 得到容器的dom，然后获取宽高
        containerSize.height = Math.floor(imgContainer.getClientRects()[0].height);
        containerSize.width = Math.floor(imgContainer.getClientRects()[0].width);
        // 求出中心点坐标，用于处理鼠标离开页面和初始化
        center = {
            x: Math.floor(containerSize.width / 2),
            y: Math.floor(containerSize.height / 2),
        };
        mouseInfoX.value = center.x;
        mouseInfoy.value = center.y;
    });

    return {
        mouseInfoX,
        mouseInfoy,
        moveSizeLeft,
        moveSizeTop
    }
}