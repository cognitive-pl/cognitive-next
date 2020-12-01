import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/views/Landing.vue';
import Login from '@/views/Login.vue';
import AppView from '@/views/AppView.vue';
import NewUnit from '@/views/NewUnit.vue';
import Unit from '@/views/Unit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/app',
    name: 'App',
    component: AppView,
    meta: {
      title: 'App',
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
      login: true,
    },
  },
  {
    path: '/new-unit',
    name: 'New Unit',
    component: NewUnit,
    meta: {
      title: 'New Unit',
      requiresAuth: true,
    },
  },
  {
    path: '/unit/:id',
    name: 'Unit',
    component: Unit,
    meta: {
      title: 'Unit',
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
