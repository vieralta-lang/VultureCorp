<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { siteConfig } from './config/site'
import { defaultDescription } from './router'

const route = useRoute()
const title = computed(() => String(route.meta.title ?? 'TNP Method'))
const description = computed(() => String(route.meta.description ?? defaultDescription))
const canonicalUrl = computed(() => `${siteConfig.siteUrl}${route.path === '/' ? '/' : route.path}`)
const socialImage = `${siteConfig.siteUrl}/assets/logo-dSYQisCN.webp`

useHead({
  title,
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
  meta: [
    { name: 'description', content: description },
    { name: 'robots', content: 'index,follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: socialImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: canonicalUrl },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: socialImage },
  ],
})
</script>

<template>
  <RouterView />
</template>
