import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../components/pages/HomePage.vue'),
    },
    {
      path: '/profissionais',
      component: () => import('../components/pages/ProfessionalsPage.vue'),
    },
  ],
})

export default router