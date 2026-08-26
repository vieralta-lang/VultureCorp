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
          class="text-sm font-medium text-zinc-400 transition-colors hover:text-accent"
        >
          Instagram
        </a>
        <a
          :href="getWhatsappLink()"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-zinc-400 transition-colors hover:text-accent"
        >
          WhatsApp
        </a>
      </div>

      <p class="text-xs text-zinc-600">
        © {{ year }} {{ siteConfig.name }}. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>
