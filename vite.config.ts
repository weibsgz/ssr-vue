import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')


const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // })
  ],
  resolve:{
    alias:{
      '@':resolve('src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variable.scss";@import "@/assets/scss/main.scss";`  //引入scss公共变量
      }
    }
  }

})
