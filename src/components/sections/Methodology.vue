<script setup lang="ts">
interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Avaliação',
    description: 'Conte seus objetivos, rotina e características.',
  },
  {
    number: '02',
    title: 'Personalização',
    description: 'Seu treino e plano nutricional são estruturados.',
  },
  {
    number: '03',
    title: 'Execução',
    description: 'Siga seu planejamento dentro da sua rotina.',
  },
  {
    number: '04',
    title: 'Evolução',
    description: 'Acompanhe seus resultados e ajuste sua estratégia.',
  },
]
</script>

<template>
  <section id="metodo" class="border-y border-white/5 bg-zinc-900/30 py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">Como funciona</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Um processo claro para evoluir
        </h2>
        <p class="mt-4 text-zinc-400">
          Você começa pela avaliação; o método cuida da personalização, execução e evolução.
        </p>
      </div>

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          class="method-step relative rounded-2xl border border-white/10 bg-zinc-950 p-8"
          :class="{ 'lg:border-accent/30': index === steps.length - 1 }"
        >
          <span class="font-heading text-5xl font-extrabold text-white/10">{{ step.number }}</span>
          <h3 class="mt-4 font-heading text-xl font-bold text-white">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.method-step {
  transition: border-color 180ms ease;
}
</style>
