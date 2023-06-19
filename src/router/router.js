import Main from '@/pages/Main.vue';
import ProductList from '@/components/ProductList.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/productList',
    component: ProductList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
