<script setup lang="ts">
import personalPhoto from '../assets/personal1.jpeg'
import { getWhatsappLink, siteConfig } from '../config/site'
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44">
    <!-- decorative glow -->
    <div class="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />

    <div class="container-page relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
      <div class="flex flex-col items-start">
        <span class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent uppercase">
          Treino • Nutrição • Performance
        </span>

        <h1 class="font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          TRANSFORME SEU CORPO.
          <span class="text-accent">ELEVE SUA PERFORMANCE.</span>
        </h1>

        <p class="mt-6 max-w-lg text-lg text-zinc-400">
          Treino estruturado. Estratégia alimentar aplicável. Acompanhamento com ajustes reais
          ao longo da rotina.
        </p>

        <div class="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a
            :href="getWhatsappLink()"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-center text-sm font-bold tracking-wide text-white uppercase transition-transform hover:scale-105 active:scale-95"
          >
            Começar minha transformação
          </a>
          <a
            href="#servicos"
            class="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-center text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-white/5"
          >
            Ver serviços
          </a>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
          <img :src="personalPhoto" alt="Guilherme Posanski, especialista da TNP" class="h-full w-full object-cover" />
        </div>
        <div class="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-zinc-900/90 px-6 py-4 backdrop-blur sm:block">
          <p class="font-heading text-2xl font-extrabold text-accent">100%</p>
          <p class="text-xs text-zinc-400">Acompanhamento online</p>
        </div>
      </div>
    </div>
  </section>
</template>
