//尝试将请求接口的代码切片，但是失败了
export default async function init (){
    console.log(222222);
      const { data: SocalMedalData } = await useAsyncData( 
        () => $fetch('https://discosoul.com.cn/offical/third', {
          method: 'get',
        })
      );
      console.log(222222, SocalMedalData);
      const { data: companyInfoData } = await useAsyncData( 
        () => $fetch('https://discosoul.com.cn/offical/third', {
          method: 'get',
        })
      );
      companyInfo().value=companyInfoData.value.data
      console.log(222222, SocalMedalData);
      SocalMedal().value=SocalMedalData.value.data
//     const data={}
// const { data: SocalMedalData } = await useAsyncData( 
//     () => $fetch('https://discosoul.com.cn/offical/third', {
//       method: 'get',
//     })
//   );
// data.SocalMedalData=SocalMedalData;
//  const { data: companyInfoData } = await useAsyncData( 
//     () => $fetch('https://discosoul.com.cn/offical/third', {
//       method: 'get',
//     })
//   );
//   data.companyInfoData=companyInfoData;
//   return data
}

// export default data;