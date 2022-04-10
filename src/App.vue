<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
// import {h,getCurrentInstance} from 'vue'
// import {useRouter} from 'vue-router'

// const router = useRouter()
// const {proxy}:any = getCurrentInstance()

//$message挂在到全局了 因为没有this 所以用getCurrentInstance取
// proxy.$message({
//     message: h('p', null, [
//       h('span', null, 'Message can be '),
//       h('i', { style: 'color: teal' }, 'VNode'),
//     ]),
//   })
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
// import i18n from '@/language/i18n'
import { useI18n } from 'vue-i18n'
import headerCommon from '@/components/layout/headerCommon.vue'
import footerCommon from '@/components/layout/footerCommon.vue'

// console.log(i18n.global.locale)
const locale = ref(zhCn)
let clickNum = ref(0);
const { locale: localeLanguage } = useI18n()


const changeLan = (language:any)=>{
  //处理elment组件语言
  locale.value = language
  localeLanguage.value = language.name
  // //处理自定义语言
  // if(language.name === 'zh-cn') {
  //   i18n.global.locale = 'zh'
  // }
  // else if(language.name === 'en') {
  //   i18n.global.locale = 'en'
  // }
  
}

const route = useRoute()
const noHeaderFooter = ref(['/login'])


</script>

<template>
  <!-- el-config-provider只适用ELEMENT的组件 -->
  <el-config-provider :locale="locale">
  <!-- {{$route.fullPath}} -->
  <headerCommon @changeLan = "changeLan" v-show="noHeaderFooter.indexOf($route.fullPath) < 0" />
  <div class="container">
    <router-view></router-view>
  </div>
  <footerCommon v-show="noHeaderFooter.indexOf($route.fullPath) < 0" />
  </el-config-provider>
</template>

<style lang="scss">

</style>
