import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: () => import(/* webpackChunkName: "thanks" */ '../views/SpecialThanks.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
