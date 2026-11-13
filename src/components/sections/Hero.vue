<script setup lang="ts">
import { getWhatsappLink, trackWhatsappContact } from '../../config/site'
import personalPhoto from '../../assets/personal1.webp'
</script>

<template>
  <section id="top" class="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28 lg:pt-36">
    <div class="container-page relative grid items-center lg:items-start gap-14 lg:grid-cols-2 lg:gap-10">
      <div class="flex flex-col items-start">
        <span class="mb-8 inline-flex items-center gap-2 border-l-2 border-accent pl-3 text-xs font-bold tracking-[0.18em] text-accent uppercase">
          Training · Nutrition · Performance
        </span>

        <h1 class="max-w-xl font-heading text-5xl leading-[1.02] font-bold uppercase sm:text-6xl lg:text-7xl">
          <span class="block text-accent">Treino e nutrição</span>
          <span class="mt-2 block text-white">personalizados para a sua rotina.</span>
        </h1>

        <p class="mt-4 max-w-lg text-base leading-relaxed text-zinc-300 sm:text-lg">
          Acompanhamento online, orientação profissional e ajustes contínuos.
        </p>

        <div class="mt-12 flex w-full sm:w-auto">
          <a
            :href="getWhatsappLink()"
            @click.prevent="trackWhatsappContact(getWhatsappLink())"
            class="button-primary inline-flex min-h-14 px-7 py-4 text-center text-sm tracking-wide uppercase sm:px-8"
          >
            Quero saber mais
          </a>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
          <img :src="personalPhoto" alt="Guilherme Posanski, especialista da TNP" fetchpriority="high" class="h-full w-full object-cover object-top" />
        </div>

        <div class="absolute -bottom-5 left-0 hidden rounded-2xl border border-accent/30 bg-zinc-950/80 p-4 shadow-[0_18px_46px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:block">
          <div class="flex items-center gap-3">
            <span class="inline-flex h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_rgba(244,114,182,0.9)]"></span>
            <p class="font-heading text-xl font-black text-accent">100%</p>
          </div>
          <p class="mt-2 text-[10px] uppercase tracking-[0.22em] text-zinc-300">Online</p>
        </div>

        <!-- <div class="absolute -right-5 top-10 hidden rotate-3 animate-square-path rounded-2xl border border-white/10 bg-zinc-900/85 p-4 shadow-[0_18px_46px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:block">
          <span aria-hidden="true" class="absolute -left-3 -top-4 text-xl text-accent animate-ping">✦</span>
          <span aria-hidden="true" class="absolute -right-3 -top-5 text-lg text-white animate-pulse">✧</span>
          <span aria-hidden="true" class="absolute -bottom-4 left-3 text-lg text-accent animate-ping">✧</span>
          <span aria-hidden="true" class="absolute -bottom-3 -right-4 text-xl text-white animate-pulse">✦</span>
          <p class="font-heading text-base font-extrabold uppercase tracking-[0.14em] text-white">Ninguém tem o nosso preço.</p>
          <p class="mt-2 max-w-[180px] text-[16px] leading-relaxed text-zinc-300">
            O plano completo de treino e dieta mais barato do mercado está aqui. Quer o seu? Chama no zap! 🚀
          </p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes square-path {
  0%,
  100% {
    translate: 0 0;
  }
  25% {
    translate: 0 48px;
  }
  50% {
    translate: 48px 48px;
  }
  75% {
    translate: 48px 0;
  }
}

.animate-square-path {
  animation: square-path 8s linear infinite;
}
</style>
