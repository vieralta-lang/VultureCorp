<script setup lang="ts">
import { getWhatsappLink, siteConfig } from '../config/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/5 py-12">
    <div class="container-page flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <div>
        <p class="font-heading text-lg font-extrabold text-white">
          {{ siteConfig.name }}
        </p>
        <p class="text-sm text-zinc-500">Assessoria Esportiva</p>
      </div>

      <div class="flex items-center gap-6">
        <a
          :href="siteConfig.instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          :title="siteConfig.instagramUrl"
          class="flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
          </svg>
          {{ siteConfig.instagramHandle }}
        </a>
        <a
          :href="getWhatsappLink()"
          target="_blank"
          rel="noopener noreferrer"
          :title="siteConfig.whatsappDisplay"
          class="flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.26 4.87L2 22l5.31-1.39a9.9 9.9 0 004.73 1.2h.01c5.5 0 9.96-4.46 9.96-9.96C22 6.46 17.54 2 12.04 2zm0 18.2h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.15.83.84-3.07-.2-.31a8.24 8.24 0 01-1.26-4.37c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 012.42 5.83c0 4.55-3.71 8.25-8.24 8.25zm4.52-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
          </svg>
          WhatsApp
        </a>
      </div>

      <p class="text-xs text-zinc-600">
        © {{ year }} {{ siteConfig.name }}. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>
