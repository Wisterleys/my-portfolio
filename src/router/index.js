import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Carreira from '../views/Carreira.vue'
import Portfolio from '../views/Portfolio.vue'
import Contato from '../views/Contato.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/sobre',
    component: Sobre
  },
  {
    path: '/carreira',
    component: Carreira
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/contato',
    component: Contato
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
