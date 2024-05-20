import { createRouter, createWebHistory } from 'vue-router'

import MealDetailView from '@/views/MealDetailVue.vue'
import SearchMealView from '@/views/SearchMealVue.vue'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search-by-name',
      name: 'search-by-name',
      component: SearchMealView
    },
    {
      path: '/meal/:id',
      name: 'meal-detail',
      component: MealDetailView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
