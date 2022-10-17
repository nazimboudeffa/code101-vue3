import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CoursesPage from '@/views/CoursesPage.vue';
import CoursePage from '@/views/CoursePage.vue';
import PricingPage from '@/views/PricingPage.vue';
import EditorPage from '@/views/EditorPage.vue';
import LoginPage from '@/views/LoginPage.vue';

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
    name: 'Course',
    path: '/course/:course',
    component: CoursePage
  },
  {
    name: 'Pricing',
    path: '/pricing',
    component: PricingPage
  },
  {
    name: 'Editor',
    path: '/editor',
    component: EditorPage
  },
  {
    name: 'Login',
    path: '/login',
    component: LoginPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;