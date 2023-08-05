// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({


    publicRuntimeConfig: {
      BASE_URL: process.env.BASE_URL,
    },
    privateRuntimeConfig: {
      API_SECRET: process.env.API_SECRET,
    },

    
  // modules: [
  //     '@nuxtjs/aixos'
  // ],
  // vite: {
  //     server: {
  //         proxy: {
  //             '/api': {
  //                 target: 'https://discosoul.com.cn/offical/',  //这里是接口地址
  //                 changeOrigin: true
  //             }
  //         }
  //     }
  // }
  // modules
  // modules: [["./node_modules/@nuxtjs/axios", { proxyHeaders: true}]],
  //   publicRuntimeConfig: {
  //     axios: {
  //       baseURL:
  //         'https://discosoul.com.cn/offical'
  //     },
  //   },

})
