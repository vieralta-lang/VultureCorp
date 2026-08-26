<script setup lang="ts">
const placeholders = Array.from({ length: 6 }, (_, i) => i + 1)
</script>

<template>
  <section id="resultados" class="py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">Resultados</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Evolução de quem confiou no processo
        </h2>
        <p class="mt-4 text-zinc-400">
          Galeria de evolução dos alunos. Fotos ilustrativas — em breve substituídas por casos reais.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        <div
          v-for="item in placeholders"
          :key="item"
          class="group aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950"
        >
          <div class="flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-600 transition-transform duration-300 group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span class="text-xs">Foto em breve</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
