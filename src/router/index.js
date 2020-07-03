import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connection from '../views/Connection.vue';
import Admin from '../views/Admin.vue';
import Coach from '../views/Coach.vue';
import Member from '../views/Member.vue';
import store from '@/store/index';
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
    component: Admin,
    meta: { needAuth: true }
  },
  {
    path: '/coach',
    name: 'Coach',
    component: Coach,
    meta: { needAuth: true }
  },
  {
    path: '/member',
    name: 'Member',
    component: Member,
    meta: { needAuth: true }
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
});

router.beforeEach((to, from, next) => {
	const userInStore = store.state.users.user;
	const isAuthenticated = userInStore !== null ? true : false;
	const isProtected = to.matched.some((route) => route.meta.needAuth);

	if (!isAuthenticated && isProtected) {
		next({ name: 'Connection' });
	} else {
		next();
	}
});

export default router
