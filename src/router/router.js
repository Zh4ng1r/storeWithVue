import Main from '@/pages/Main.vue';
import ProductList from '@/components/ProductList.vue';
import PostIdPage from '@/pages/PostIdPage.vue'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/productList',
    component: ProductList,
  },
  {
    path: '/productList/:id',
    component: PostIdPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
