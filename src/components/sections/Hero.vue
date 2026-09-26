<script setup lang="ts">
import personalPhoto from '../../assets/personal1.jpeg'
import { getWhatsappLink, trackWhatsappContact } from '../../config/site'
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44">
    <div class="container-page relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
      <div class="flex flex-col items-start">
        <span class="mb-6 inline-flex items-center gap-2 border-l-2 border-accent pl-3 text-xs font-bold tracking-[0.18em] text-accent uppercase">
          Training · Nutrition · Performance
        </span>

        <h1 class="max-w-xl font-heading text-5xl leading-[0.94] font-extrabold uppercase text-purple-500 sm:text-6xl lg:text-7xl">
          Transforme seu corpo e sua mente.
        </h1>

        <h1 class="max-w-xl font-heading text-5xl leading-[0.94] font-extrabold uppercase text-white sm:text-6xl lg:text-7xl">
          Construa seu melhor eu.
        </h1>

        <p class="mt-6 max-w-lg text-base leading-relaxed text-zinc-300 sm:text-lg">
          Sem dias de espera, sem desculpas. Seu treino de musculação e sua dieta saem prontos no primeiro atendimento. Acompanhamento próximo, suporte rápido e uma equipe que tem paixão pelo jogo.
        </p>

        <div class="mt-10 flex w-full sm:w-auto">
          <a
            :href="getWhatsappLink()"
            @click="trackWhatsappContact"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-cta inline-flex min-h-14 items-center justify-center bg-accent px-7 py-4 text-center text-sm font-extrabold tracking-wide text-zinc-950 uppercase sm:px-8"
          >
            Estou pronto para entrar no jogo
          </a>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
          <img :src="personalPhoto" alt="Guilherme Posanski, especialista da TNP" fetchpriority="high" class="h-full w-full object-cover" />
        </div>
        <div class="absolute -bottom-6 -left-6 hidden border border-accent/40 bg-zinc-950 px-6 py-4 sm:block">
          <p class="font-heading text-2xl font-extrabold text-accent">100%</p>
          <p class="text-xs text-zinc-400">Acompanhamento online</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-cta {
  transition: transform 180ms ease, background-color 180ms ease;
}

.hero-cta:hover {
  transform: scale(1.05);
}

.hero-cta:active {
  transform: scale(0.95);
}
</style>
