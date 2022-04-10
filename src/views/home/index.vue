<script setup lang="ts">
import {ref} from 'vue'
// import { ElConfigProvider } from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import en from 'element-plus/es/locale/lang/en'
// import {fetchRoomList,fetchElephant} from '@/api/index'
// import i18n from '@/language/i18n'
// import indexDB from '@/utils/indexDB'
// const {t} = useI18n()
// console.log(t)



// const {locale:localeLan} = useI18n()

// console.log(i18n.global.locale)

// const getRoomList = ()=>{
//    fetchRoomList().then(res=>{
//       console.log('真实接口',res)
//    })
// }
// getRoomList()

// const locale = ref(zhCn)

const value2 = ''
// let clickNum = ref(0);
// const changeLan = ()=>{
//    let count = clickNum.value % 2
//    clickNum.value++
//    locale.value = count ? zhCn : en
//    i18n.global.locale = count ? 'zh' :'en'
// }
//数据库相关操作
// const airDB = new indexDB('airDB')
// airDB.openStore('elephant','id',['nose','ear'])  //打开控制台  application中就有了indexDB

// //增加 修改
// const addDB = (storeName)=>{
 
//    airDB.updateItem(storeName,{
//       // id:2,   //修改哪项 直接添加个id属性就行 
//       nose:'55m',
//       ear:'很打打5'
//    })
// }


// const deleteDB = (storeName:string,key:number | string) => {
//    airDB.deleteItem(storeName,key)
// }

// const getList = (storeName:string) =>{
//    airDB.getList(storeName)
// }

// const getItem = (storeName:string,key:number | string) => {
//    airDB.getItem(storeName,key)
// }

//mock接口
// const getElephantStore = ()=>{
//    fetchElephant().then(res => {
//       console.log('mock接口',res)
//    })
// }

// getElephantStore()

</script>

<template>
   <div>
  <!-- el-config-provider只适用ELEMENT的组件 -->
  <!-- <el-config-provider :locale="locale"> -->
     <!-- 两种方式切换语言（一种$i18n,一种 i18n.global.locale） -->
      <!-- <select v-model="$i18n.locale">
         <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
      </select>

      <div>{{ $t('message.home')}}123 <button @click = "changeLan()">切换语言</button></div> -->
      <!-- <div class="text">{{ $t('message.home')}}</div> -->
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="Pick a day"   
      />
      <!-- <el-button @click="addDB('elephant')">新增/修改indeDB数据</el-button>
      <el-button @click="deleteDB('elephant',2)">删除数据</el-button>
      <el-button @click="getList('elephant')">查询所有数据</el-button>
      <el-button @click="getItem('elephant',3)">查询某一条数据</el-button> -->
   <!-- </el-config-provider> -->
   </div>
</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss"

</style>
