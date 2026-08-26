<script setup lang="ts">
import { getWhatsappLink } from '../config/site'
</script>

<template>
  <a
    :href="getWhatsappLink()"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    class="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-zinc-950 shadow-lg shadow-accent/30 transition-transform hover:scale-110 active:scale-95 sm:right-8 sm:bottom-8"
  >
    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
    <svg xmlns="http://www.w3.org/2000/svg" class="relative h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.26 4.87L2 22l5.31-1.39a9.9 9.9 0 004.73 1.2h.01c5.5 0 9.96-4.46 9.96-9.96C22 6.46 17.54 2 12.04 2zm0 18.2h-.01a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.15.83.84-3.07-.2-.31a8.24 8.24 0 01-1.26-4.37c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 012.42 5.83c0 4.55-3.71 8.25-8.24 8.25zm4.52-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
    </svg>
  </a>
</template>
