import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

// 路由配置
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    // webpackChunkName: 'home' 方便打包后调试，不加它，默认被打包成1.vue 等等，使用它则用 home 别名代替
    component: () => import(/* webpackChunkName: 'home' */'@/views/home/index.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */'@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login/index.vue')
  },
  {
    path: '/advert',
    name: 'advert',
    component: () => import(/* webpackChunkName: 'advert' */'@/views/advert/index.vue')
  },
  {
    path: '/advert-space',
    name: 'advert-space',
    component: () => import(/* webpackChunkName: 'advert-space' */'@/views/advert-space/index.vue')
  },
  {
    path: '/course',
    name: 'course',
    component: () => import(/* webpackChunkName: 'course' */'@/views/course/index.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: 'menu' */'@/views/menu/index.vue')
  },
  {
    path: '/resource',
    name: 'resource',
    component: () => import(/* webpackChunkName: 'resource' */'@/views/resource/index.vue')
  },
  {
    path: '/role',
    name: 'role',
    component: () => import(/* webpackChunkName: 'role' */'@/views/role/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: 'user' */'@/views/user/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
