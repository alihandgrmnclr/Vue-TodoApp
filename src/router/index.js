import { createRouter, createWebHistory } from 'vue-router'
import PlannedView from '../views/PlannedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PlannedView
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('../views/DailyView.vue')
    },
    {
      path: '/market',
      name: 'market',
      component: () => import('../views/MarketView.vue')
    },
    {
      path: '/important',
      name: 'important',
      component: () => import('../views/ImportantView.vue')
    },
  ]
})

export default router
