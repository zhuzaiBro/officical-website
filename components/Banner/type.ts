import { ref } from 'vue'
export interface BannerData {
    imgSrcs: Array<string>,
    width: number,
    height: number,
    autoDuration: number,
    duration: number,
}
export interface SwitchData {
    imgSrcs: Array<string>
    width: number,
    height: number,
    duration:number,
}
export class InitBannerData {
    bannerData: BannerData = {
        imgSrcs: [], width: 100,  height: 15,  autoDuration: 2000,  duration: 500,
    }
  
}
export class InitSwitchData {
    switchData: SwitchData = {
        imgSrcs: [],
        width:0,
        height:0,
        duration:0,
    }
}
