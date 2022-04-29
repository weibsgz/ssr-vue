
// import home from '@/views/home/index.vue'
// import mine from '@/views/mine/index.vue'
// import login from '@/views/login/index.vue'
import {createRouter,createWebHistory,createMemoryHistory} from 'vue-router'

const home = ()=> import('@/views/home/homeIndex.vue')
const mine = ()=> import('@/views/mine/mineIndex.vue')
const login = ()=> import('@/views/login/loginIndex.vue')
const roomDetail = () => import('@/views/detail/roomIndex.vue')
const record = () => import('@/views/record/recordIndex.vue')


const routes = [
    {
        path:'/home',
        name:'home',
        component:home,
        meta:{
            title:'',
            keepAlive:false
        }
    },
    {
        path:'/mine',
        name:'mine',
        component:mine,
        meta:{
            title:'',
            keepAlive:false
        }
    },
   {
       path:'/login',
       name:'login',
       component:login,
       meta:{
           title:'',
           KeepAlive:false
       }
   } ,
   {
    path: '/roomDetail/:id',
    name: 'roomDetail',
    component: roomDetail,
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/record',
    name: 'record',
    component: record,
    meta: {
      title: '',
      keepAlive: false
    }
  }
    
]



export function createSSRRouter() {
    return createRouter({
        //服务端渲染需要改成这个方法 createMemoryHistory
        history:import.meta.env.SSR ? createMemoryHistory() : createWebHistory(), 
        routes
    })
}