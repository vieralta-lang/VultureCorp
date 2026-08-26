<script setup lang="ts">
const highlights = [
  'Personal Trainer',
  'Treinador',
  'Graduando em Nutrição',
  'Atendimento 100% online',
]
</script>

<template>
  <section id="sobre" class="py-24 sm:py-32">
    <div class="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
      <div class="relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
        <div class="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950">
          <div class="flex h-full w-full flex-col items-center justify-center gap-3 text-zinc-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
            </svg>
            <span class="px-6 text-center text-sm">Foto do treinador aqui</span>
          </div>
        </div>
      </div>

      <div class="lg:order-1">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">Sobre</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          TNP Method
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-zinc-400">
          A TNP existe para reduzir o improviso. Aumentar a clareza sobre o que fazer, por que
          fazer e quando ajustar é o que transforma um plano em um processo de verdade —
          conduzido por um profissional Personal Trainer, treinador e graduando em Nutrição.
        </p>

        <ul class="mt-8 grid grid-cols-2 gap-4">
          <li
            v-for="item in highlights"
            :key="item"
            class="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/40 px-4 py-3 text-sm font-medium text-zinc-200"
          >
            <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
