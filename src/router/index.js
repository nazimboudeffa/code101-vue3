import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CoursePage from '@/views/CoursePage.vue';
import PricePage from '@/views/PricePage.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage
  },
  {
    name: 'Course',
    path: '/course',
    component: CoursePage
  },
  {
    name: 'Price',
    path: '/price',
    component: PricePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;