import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connection from '../views/Connection.vue';
import Admin from '../views/Admin.vue';
import Coach from '../views/Coach.vue';
import Member from '../views/Member.vue';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/connection',
    name: 'Connection',
    component: Connection
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/coach',
    name: 'Coach',
    component: Coach
  },
  {
    path: '/member',
    name: 'Member',
    component: Member
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
