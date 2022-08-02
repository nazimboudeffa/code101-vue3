import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CoursesPage from '@/views/CoursesPage.vue';
import PricePage from '@/views/PricePage.vue';
import EditorPage from '@/views/EditorPage.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomePage
  },
  {
    name: 'Courses',
    path: '/courses',
    component: CoursesPage
  },
  {
    name: 'Price',
    path: '/price',
    component: PricePage
  },
  {
    name: 'Editor',
    path: '/editor',
    component: EditorPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;