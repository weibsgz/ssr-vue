import { createStore } from 'vuex'
import { saveLanguageApi,fetchLanguageApi} from '@/api/layout'
export const store = createStore({
    state:{
        count:1,
        locale:null,  //语言包
        userStatus:0,  //登录状态
    },
    mutations:{
        setCount(state,payload) {
            state.count += payload
            return state.count
        },
        setLanguage(state,payload) {
            state.locale = payload
            return state.locale
        },
        setUserStatus(state,payload) {
            state.userStatus = payload
            return state.locale
        }
    },
    actions:{
        fetchCount({commit,state},payload) {
            setTimeout(()=>{
                commit('setCount',payload)
            },3000)
        },
        saveLanguage({commit,state},language:any) {
            saveLanguageApi(language.name).then(res=>{
                let {success} = res
                if(success) {
                    commit('setLanguage',language)
                    console.log('保存当前语言包成功')
                }
            })
        }
        
    }
})