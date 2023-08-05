import axios from "axios";
/**
 * 判断是否为生产环境
 * 生产环境为true时：访问的是 域名+/oweb/+具体地址 
 * 如https://www.discosoul.com.cn/oweb/banner?belong=indexBanner
 */
 export const IS_DEVELOPMENT=process.env.NODE_ENV=='development';





const ins = axios.create({
    baseURL:'',

}); 
ins.interceptors.response.use(function(resp) {
    if (resp.data.code !== 0) {
        return null;
    }
    return resp.data.data;
});
export default ins;

