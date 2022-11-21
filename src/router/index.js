import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PlannedView from '../views/PlannedView.vue'
import DailyView from '../views/DailyView.vue'
import ImportantView from '../views/ImportantView.vue'
import MarketView from '../views/MarketView.vue'
import ResetView from '../views/ResetView.vue'
import { useAuthStore } from "../stores/use-auth"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/reset',
      name: 'reset',
      component: ResetView
    },
    {
      path: '/planned',
      name: 'planned',
      meta:{
        user: true
      },
      component: PlannedView
    },
    {
      path: '/daily',
      name: 'daily',
      meta:{
        user: true
      },
      component: DailyView
    },
    {
      path: '/market',
      name: 'market',
      meta:{
        user: true
      },
      component: MarketView
    },
    {
      path: '/important',
      name: 'important',
      meta:{
        user: true
      },
      component: ImportantView
    },
  ]
});


router.beforeEach(async(to,from,next) => {
  const authStore = useAuthStore();
  if (!authStore.isLoggedIn && to.name !== "login" && to.name !== "register" && to.name !=="home" && to.name !=="reset") next({ name: 'login' });
  next();

})

export default router
