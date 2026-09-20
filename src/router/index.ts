import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// O RouteRecordRaw garante o tipagem correta das rotas no TypeScript
const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     // Componente carregado direto (opcional para a página inicial)
//     component: () => import('../components/Home.vue'),
//   },
//   {
//     path: '/treino',
//     name: 'Treino',
//     // Lazy loading: o arquivo só é baixado quando o usuário acessa essa rota
//     component: () => import('../components/Treino.vue'),
//   },
//   {
//     path: '/admin',
//     name: 'Admin',
//     component: () => import('../components/Admin.vue'),
//   }
];

const router = createRouter({
  // createWebHistory faz rotas limpas (ex: /treino em vez de /#/treino)
  history: createWebHistory(),
  routes,
});

export default router;