import { createRouter, createWebHistory } from 'vue-router'
// 需要即时加载的页面在这引入
import Home from '@/views/home/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/builder',
    name: 'Builder',
    component: () => require('@/views/builder/index')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
