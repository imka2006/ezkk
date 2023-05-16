import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/schedule',
      name: 'schedule',
      meta:  { layout:'sidebar' },
      component: () => import('../views/Schedule.vue'),
    },

  
  ],
})

export default router
