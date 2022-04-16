<script setup lang="ts">
import { ref , defineEmits,getCurrentInstance} from 'vue'
import {useStore} from 'vuex'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { saveLanguageApi,fetchLanguageApi} from '@/api/layout'
import {useRouter} from 'vue-router'
import { useI18n } from 'vue-i18n'
import {IResultOr} from '@/api/interface'
import  { userLogoutApi } from '@/api/login'
const { t , locale: localeLanguage } = useI18n()
const router = useRouter()
const store = useStore()
const activeIndex = ref("orders")
const {proxy}:any = getCurrentInstance()

//Ts写法 见VUE3文档
const emit = defineEmits<{
  (e: 'changeLan', language: any): void
}>()


const handleSelect = (e:any)=>{
    console.log(e)
    if(e === 'zh') {
        // emit('changeLan',zhCn)        
        // saveLanguage('zh')
        store.dispatch('saveLanguage',zhCn)
        localeLanguage.value = e
    }
    else if(e ==='en') {
        // emit('changeLan',en)        
        // saveLanguage('en')
        store.dispatch('saveLanguage',en)
        localeLanguage.value = e
    }
    else if(e === 'login') {
        router.push('/login')
    }
    else if(e === 'logout') {
        userLogout()
    }
}


// function saveLanguage(language:any) {
//     saveLanguageApi(language).then(res=>{
//         let {success} = res
//         if(success) {
//             console.log('保存当前语言包成功')
//         }
//     })
// }

//获取当前从indexDB查询到的语言包,使页面显示当前的语言 （达到了每次加载页面会从indexDB取语言的目的）
function getLanguage() {
    fetchLanguageApi().then(res=>{
        let {success,result} = res
        const {name} = result 
        if(success) {
            if(name === 'zh') {
                emit('changeLan',zhCn)                
            }
            else if(name ==='en') {
                emit('changeLan',en)              
            }
           
            console.log('获取当前语言包成功！')
        }
    })
} 


//退出
function userLogout() {
    userLogoutApi().then((res:IResultOr)=>{
    const {success,message} = res
    if(success) {
      proxy.$message.success(message)
      router.push({name:'login'})
    //   localStorage.setItem('userStatus',0)
    store.commit("setUserStatus",0)
    }else {
      proxy.$message.error(message)
    }
  })
}


// getLanguage()

// const userStatus = localStorage.getItem('userStatus')

</script>

<template>
    <div class="header-common">
        
     
        <img class="logo" src="../../assets/images/layout/logo.png" alt="">
         <!-- <p style="margin-left:30px">
            {{store.state.count}}
         </p> -->
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="orders">{{ t('header.orders')}}</el-menu-item>
            <el-menu-item index="records">>{{ t('header.records')}}</el-menu-item>
            <el-sub-menu index="language">
                <template #title>>{{ t('header.language')}}</template>
                <el-menu-item index="zh">中文</el-menu-item>
                <el-menu-item index="en">EN</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="avatar" v-if="store.state.userStatus==1">
                <template #title>><img class="avatar" src="../../assets/images/layout/avatar.jpg" alt=""></template>
                <el-menu-item index="logout">退出</el-menu-item>
            </el-sub-menu>
             <el-menu-item index="login" v-else >
                {{ t("login.loginTab") }} / {{ t("login.signTab")}}
            </el-menu-item>  
        </el-menu>
    </div>
</template>

<style scoped lang="scss">
    @import "@/assets/scss/layout/headerCommon.scss"
</style>
