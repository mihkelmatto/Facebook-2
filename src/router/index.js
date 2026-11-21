// router/index.js

import { createRouter, createWebHistory } from 'vue-router';


import HomeView from '@/views/HomeView.vue';
import AddPostView from '@/views/AddPostView.vue';
import LoginView from '@/views/LoginView.vue';
import SignupView from '@/views/SignupView.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: 'login'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: AddPostView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;