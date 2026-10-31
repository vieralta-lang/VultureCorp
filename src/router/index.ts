import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'

export const defaultDescription = 'Transforme seu corpo com direção com o método de acompanhamento 100% online TNP. Treino e nutrição customizados para você executar com estratégia.'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    // Carregado de forma eager (não lazy) por ser a rota inicial: evita um hop extra na cadeia de requisições críticas (CSS/JS separados)
    component: HomePage,
    meta: {
      title: 'TNP Method | Consultoria Esportiva 100% Online de Elite',
      description: defaultDescription,
    },
  },
  {
    path: '/profissionais',
    component: () => import('../components/pages/ProfessionalsPage.vue'),
    meta: {
      title: 'TNP para Profissionais | Treino e Nutrição',
      description: 'Organize seus atendimentos, crie planos personalizados e entregue uma experiência mais profissional aos seus clientes com o sistema TNP.',
    },
  },
]