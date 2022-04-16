import { createApp,createSSRApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import ElementPlus,{ElMessage} from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from './language/i18n'

import airbnb from './db' // 引入数据库和对象仓库



router.beforeEach((to, from, next) => {
  airbnb.airbnbDB.openStore({
    ...airbnb.languageObjectStore,
    ...airbnb.userObjectStore
  }).then((res: any) => {
    console.log('初始化所有对象仓库', res)
    next()
  })
})



const app = createApp(App)
app.config.globalProperties.$message = ElMessage
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')


// //用于创建服务端渲染的函数
// function createApp() {
//   const app = createSSRApp(APP)
// }
