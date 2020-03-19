import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect:'/login'
},{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/home',
  name: 'home',
  component: Home
}, {
  path: '/choose',
  name: 'choose'
}, {
  path: '/guidance',
  name: 'guidance',
  component: () => import('../views/healthGuidance.vue')
}, {
  path: '/ncpreport',
  name: 'ncpreport',
  component: () => import('../views/ncp.vue')
},{
  path: '/report',
  name: 'try',
  component: () => import('../views/try.vue')
}
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
