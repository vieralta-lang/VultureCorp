import { createRouter, createWebHistory } from 'vue-router'
import { siteConfig } from '../config/site'
import HomePage from '../components/pages/HomePage.vue'

const defaultDescription = 'Transforme seu corpo com direção com o método de acompanhamento 100% online TNP. Treino e nutrição customizados para você executar com estratégia.'

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
  ],
})

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(url: string) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', url)
}

router.afterEach((to) => {
  const title = String(to.meta.title ?? 'TNP Method')
  const description = String(to.meta.description ?? defaultDescription)
  const canonicalUrl = `${siteConfig.siteUrl}${to.path === '/' ? '/' : to.path}`

  document.title = title
  setMeta('name', 'description', description)
  setMeta('name', 'robots', 'index,follow')
  setMeta('property', 'og:url', canonicalUrl)
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:image', `${siteConfig.siteUrl}/assets/logo-dSYQisCN.webp`)
  setMeta('name', 'twitter:url', canonicalUrl)
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', `${siteConfig.siteUrl}/assets/logo-dSYQisCN.webp`)
  setCanonical(canonicalUrl)
})

export default router