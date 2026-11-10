// router/index.js

import { createRouter, createWebHistory } from 'vue-router';


import HomeView from '@/views/HomeView.vue';
import AddPost from '@/views/AddPost.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: AddPost
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;