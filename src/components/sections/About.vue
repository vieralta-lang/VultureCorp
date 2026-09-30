<script setup lang="ts">
import personalPhoto from '../../assets/personal2.jpg'

const highlights = [
  'Treino',
  'Nutrição',
  'Feedback',
  'Tecnologia',
  'Acompanhamento',
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
          A TNP nasceu porque não queríamos fazer mais uma consultoria igual.
        </h2>
        <div class="mt-6 space-y-4 text-lg leading-relaxed text-zinc-400">
          <p>O mercado já está cheio de PDFs, planilhas e promessas.</p>
          <p>Nós queríamos construir um processo diferente.</p>
          <p>
            Por isso, além da metodologia de treino e nutrição, construímos nossa própria tecnologia para organizar o
            atendimento, acelerar a criação dos planos e aproximar o profissional do aluno.
          </p>
        </div>

        <p class="mt-8 border-l-2 border-accent pl-4 font-heading text-xl leading-snug font-bold text-white">
          Tecnologia para ganhar velocidade.<br />
          Método para ganhar direção.<br />
          Acompanhamento para manter a execução.
        </p>

        <p class="mt-8 text-sm font-medium text-zinc-300">A TNP une:</p>
        <ul class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          <li v-for="item in highlights" :key="item"
            class="flex items-center gap-2 border border-white/10 bg-zinc-900/40 px-3 py-3 text-xs font-medium text-zinc-200 sm:px-4 sm:text-sm">
            <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {{ item }}
          </li>
        </ul>
        <p class="mt-4 text-sm text-zinc-400">Tudo dentro de um único processo.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-photo {
  background: #18181b;
}
</style>
