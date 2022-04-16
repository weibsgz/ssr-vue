
import { getCurrentInstance } from 'vue'
import {useRouter} from 'vue-router'
import {IResultOr} from '@/api/interface'
import { userLoginApi , userSignApi} from '@/api/login'
import { useStore } from 'vuex'
interface IRuleForm {
    mobile:string,
    password:string
}


export default function useFormOperates(params:any) {
    const router = useRouter()
    const {proxy}:any = getCurrentInstance()
    const store = useStore()
    
    //注册
    function userSign(params:IRuleForm) {
        console.log('注册')
        userSignApi(params).then((res:IResultOr)=>{
        const {success,message} = res
        if(success) {
            proxy.$message.success(message)
        }else {
            proxy.$message.error(message)
        }
        })
    }
    
    
    //登录
    function userLogin(params:IRuleForm) {
        console.log('登录')
        userLoginApi(params).then((res:IResultOr)=>{
        const {success,message , result} = res
        if(success) {
            // localStorage.setItem('userStatus',result.status)
            store.commit('setUserStatus',result.status)
            proxy.$message.success(message)
            router.push({name:'home'})
        }else {
            proxy.$message.error(message)
        }
        })
    }

    return {
        userSign,
        userLogin
    }
  }
  
  