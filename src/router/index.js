import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/views/Landing.vue';
import OAuth from '@/views/OAuth.vue';
import Policy from '@/views/Policy.vue';
import Polityka from '@/views/Polityka.vue';
import Login from '@/views/Login.vue';
import AppView from '@/views/AppView.vue';
import Support from '@/views/Support.vue';
import NewUnit from '@/views/NewUnit.vue';
import UpdateUnit from '@/views/UpdateUnit.vue';
import Unit from '@/views/Unit.vue';
import Flashcards from '@/views/Flashcards.vue';
import NewSet from '@/views/NewSet.vue';
import UpdateSet from '@/views/UpdateSet.vue';
import FlashcardSet from '@/views/FlashcardSet.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/policy',
    name: 'Privacy Policy',
    component: Policy,
  },
  {
    path: '/polityka',
    name: 'Polityka Prywatności',
    component: Polityka,
  },
  {
    path: '/OAuth',
    name: 'OAuth Info',
    component: OAuth,
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
    path: '/support',
    name: 'Support',
    component: Support,
    meta: {
      title: 'Support',
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
    path: '/update-unit/:id',
    name: 'Update Unit',
    component: UpdateUnit,
    meta: {
      title: 'Update Unit',
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
  {
    path: '/flashcards',
    name: 'Flashcards',
    component: Flashcards,
    meta: {
      title: 'Flashcards',
      requiresAuth: true,
    },
  },
  {
    path: '/new-set',
    name: 'New Set',
    component: NewSet,
    meta: {
      title: 'New Set',
      requiresAuth: true,
    },
  },
  {
    path: '/update-set/:id',
    name: 'Update Flashcard Set',
    component: UpdateSet,
    meta: {
      title: 'Update Flashcard Set',
      requiresAuth: true,
    },
  },
  {
    path: '/flashcard-set/:id',
    name: 'Flashcard Set',
    component: FlashcardSet,
    meta: {
      title: 'Flashcard Set',
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
