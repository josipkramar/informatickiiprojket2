import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/pretplatise',
    name: 'PretplatiSe',
    component: () => import('../views/PretplatiSe.vue')
  },
    {
    path: '/viseonama',
    name: 'ViseOnama',
    component: () => import('../views/ViseOnama.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
