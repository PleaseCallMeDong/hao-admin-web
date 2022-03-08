import {createApp} from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

// 修改后的主题样式必须放在最后面
import '../theme/index.css'

const app = createApp(App)

let relyOnList = [ElementPlus, router]

relyOnList.forEach((item) => {
    app.use(item)
})
app.mount('#app')
