<script setup lang="ts">
interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Treino estruturado',
    description: 'Planejamento voltado para seu objetivo e seu nível atual.',
  },
  {
    number: '02',
    title: 'Nutrição personalizada',
    description: 'Uma estratégia alimentar construída considerando sua rotina, objetivo e necessidades.',
  },
  {
    number: '03',
    title: 'Suporte próximo',
    description: 'Orientação para você não ficar travado quando surgir uma dúvida.',
  },
  {
    number: '04',
    title: 'Acompanhamento da evolução',
    description: 'Decisões baseadas no que está acontecendo com você — não em um modelo pronto.',
  },
  {
    number: '05',
    title: 'Tecnologia própria',
    description: 'Desenvolvemos nossas próprias ferramentas para tornar o processo mais rápido, organizado e preciso.',
  },
]
</script>

<template>
  <section id="metodo" class="border-y border-white/5 bg-zinc-900/30 py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Não é só um plano.
          <span class="block text-accent">É um sistema de acompanhamento.</span>
        </h2>
      </div>

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
