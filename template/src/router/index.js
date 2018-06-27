import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = r => require.ensure([], () => r(require('../pages/home')), 'Home')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      title: 'Vue'
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

/**
 * 全局路由配置
 * 路由开始之前的操作
 */

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  document.querySelector('title').innerText = to.meta.title
  next()
})

export default router
