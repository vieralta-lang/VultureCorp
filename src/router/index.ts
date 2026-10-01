import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // Carregado de forma eager (não lazy) por ser a rota inicial: evita um hop extra na cadeia de requisições críticas (CSS/JS separados)
      component: HomePage,
    },
    {
      path: '/profissionais',
      component: () => import('../components/pages/ProfessionalsPage.vue'),
    },
  ],
})

export default router