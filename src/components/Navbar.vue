<script setup lang="ts">
import { ref } from 'vue'
import logo from '../assets/logo.jpeg'
import { getWhatsappLink, siteConfig } from '../config/site'

const isOpen = ref(false)

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Método', href: '#metodo' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
    <nav class="container-page flex h-16 items-center justify-between sm:h-20">
      <a
        href="#top"
        class="flex items-center"
        @click="closeMenu"
      >
        <span class="block h-12 w-12 overflow-hidden rounded-full sm:h-14 sm:w-14">
          <img :src="logo" alt="TNP Method" class="h-full w-full scale-[1.8] object-cover object-top" />
        </span>
      </a>

      <ul class="hidden items-center gap-8 lg:flex">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a
        :href="getWhatsappLink()"
        target="_blank"
        rel="noopener noreferrer"
        :title="siteConfig.whatsappDisplay"
        class="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 lg:inline-block"
      >
        Começar agora
      </a>

      <button
        type="button"
        aria-label="Abrir menu"
        class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
        @click="isOpen = !isOpen"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="border-t border-white/5 bg-zinc-950 px-6 pb-6 lg:hidden">
        <ul class="flex flex-col gap-1 pt-4">
          <li v-for="link in links" :key="link.href">
            <a
              :href="link.href"
              class="block rounded-lg px-3 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <a
          :href="getWhatsappLink()"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 block rounded-full bg-accent px-5 py-3.5 text-center text-sm font-bold text-white"
          @click="closeMenu"
        >
          Começar agora
        </a>
      </div>
    </Transition>
  </header>
</template>
