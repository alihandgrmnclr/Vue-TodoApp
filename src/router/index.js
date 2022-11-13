import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlannedView from '../views/PlannedView.vue'
import DailyView from '../views/DailyView.vue'
import ImportantView from '../views/ImportantView.vue'
import MarketView from '../views/MarketView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/planned',
      name: 'planned',
      component: PlannedView
    },
    {
      path: '/daily',
      name: 'daily',
      component: DailyView
    },
    {
      path: '/market',
      name: 'market',
      component: MarketView
    },
    {
      path: '/important',
      name: 'important',
      component: ImportantView
    },
  ]
})

export default router
