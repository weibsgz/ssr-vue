//登录表单相关hooks
import { ref, reactive,getCurrentInstance } from 'vue'

export default function useFormProperties() {

    const {proxy}:any = getCurrentInstance()
    const activeName = ref('login')
    
    let loginText = ref(t('login.loginBtn'))
    const ruleFormRef = ref(null)
    
    const ruleForm:IRuleForm = reactive({
        mobile: '',
        password: ''
    })

    const rules = reactive({
        mobile: [
          {
            required: true,
            min: 11,
            max: 11,
            message: t('login.placeMobile'),
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: t('login.placePass'),
            trigger: 'blur'
          }
        ]
      })

    return {
        proxy,
        activeName,
        loginText,
        ruleFormRef,
        ruleForm,
        rules
    }

}


