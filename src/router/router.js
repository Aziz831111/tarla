import { createRouter, createWebHistory } from 'vue-router';

import AppHome from '../components/AppHome.vue';
import AppCatalog from '../components/AppCatalog.vue';
import AppWrapForCart from '../components/AppWrapForCart.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppHome,
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: AppCatalog,
  },
  {
    path: '/cart',
    name: 'cart',
    component: AppWrapForCart,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
