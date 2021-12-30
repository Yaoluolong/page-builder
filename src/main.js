import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入自定义样式
import './style/animation.scss'
// 引入自定义图标
import '@/assets/icons'

const app = createApp(App)
app.use(store).use(router).use(ElementPlus)

/* 自动化引入global组件 */
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/global',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /index.(vue|js)$/
)
requireComponent.keys().forEach((fileName) => {
  // 获取组件配置
  const component = requireComponent(fileName).default
  const componentName = component.name
  // 全局注册组件
  app.component(componentName, component)
})

app.mount('#app')
