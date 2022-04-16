### indexDB

1. 创建数据库

建 utils/indexDB.ts

2. 简易使用

```
import indexDB from '@/utils/indexDB'

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

//获取所有数据
// const getList = (storeName:string) =>{
//    airDB.getList(storeName)
// }


//获取某一条数据
// const getItem = (storeName:string,key:number | string) => {
//    airDB.getItem(storeName,key)
// }



<el-button @click="addDB('elephant')">新增/修改indeDB数据</el-button>
<el-button @click="deleteDB('elephant',2)">删除数据</el-button>
<el-button @click="getList('elephant')">查询所有数据</el-button>
<el-button @click="getItem('elephant',3)">查询某一条数据</el-button> 

```

### SSR

1. client-entry.ts 客户端入口文件

之前的main.ts页面的入口功能要引入中去  main.ts是一些服务端和客户端共用的逻辑