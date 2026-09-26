<script setup lang="ts">
import personalPhoto from '../../assets/personal2.jpg'

const highlights = [
  'Dieta',
  'Treino',
  'Feedback rápido',
  'Atendimento 100% online',
]
</script>

<template>
  <section id="sobre" class="py-24 sm:py-32">
    <div class="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
      <div class="relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
        <div class="about-photo aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10">
          <img :src="personalPhoto" alt="Guilherme Posanski, especialista da TNP" loading="lazy" decoding="async"
            class="h-full w-full object-cover object-top" />
        </div>
      </div>

      <div class="lg:order-1">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">Quem somos</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ciência do treino. Precisão da tecnologia.
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-zinc-400">
          A Insatisfação que Mudou o Jogo
          O TNP Method nasceu da nossa recusa em aceitar o padrão do mercado e da vontade implacável de entregar algo
          radicalmente diferente. Para ditar as nossas próprias regras, construímos nossa tecnologia do zero. Nosso
          único objetivo: garantir velocidade real, direção exata e um acompanhamento lado a lado. Nós elevamos o nível
          porque temos paixão por esse jogo.
        </p>

        <ul class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          <li v-for="item in highlights" :key="item"
            class="flex items-center gap-2 border border-white/10 bg-zinc-900/40 px-3 py-3 text-xs font-medium text-zinc-200 sm:px-4 sm:text-sm">
            <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-photo {
  background: #18181b;
}
</style>
