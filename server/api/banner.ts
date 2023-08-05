import request from "../../api/request"
export default async(req: any, res: any) =>  {
    const data =await request.get("https://discosoul.com.cn/offical/banner",{
        params:{
            belong:'indexBanner'
        }
    });
    return data
}