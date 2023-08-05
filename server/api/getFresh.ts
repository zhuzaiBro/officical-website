import request from "../../api/request"
export default async(req: any, res: any) =>  {
    const data :any =await $fetch("https://www.discosoul.com.cn/api/mall/groom/list/1")
    return data
}