<script setup lang="ts">
interface Pillar {
  label: string
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    label: 'Essência',
    title: 'Método com direção',
    description:
      'Treino, nutrição e acompanhamento trabalham dentro de uma mesma estratégia, com decisões conectadas ao objetivo.',
  },
  {
    label: 'Foco',
    title: 'Aplicação no mundo real',
    description:
      'O processo precisa funcionar na rotina do aluno — inclusive quando a semana não sai como planejado.',
  },
  {
    label: 'Entrega',
    title: 'Acompanhamento contínuo',
    description:
      'Execução, feedback e ajustes fazem parte da estrutura. O trabalho não termina quando o plano é enviado.',
  },
  {
    label: 'Princípio',
    title: 'Consistência antes do extremo',
    description:
      'O objetivo é construir uma estratégia que possa ser executada com qualidade e sustentada ao longo do tempo.',
  },
]
</script>

<template>
  <section id="tnp" class="py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">A TNP</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Uma assessoria construída para dar direção.
        </h2>
        <p class="mt-4 text-zinc-400">
          Mais do que receber um treino e uma estratégia alimentar, o aluno entra em um processo
          organizado para executar, acompanhar e ajustar.
        </p>
      </div>

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="pillar in pillars"
          :key="pillar.label"
          class="rounded-2xl border border-white/10 bg-zinc-900/40 p-8"
        >
          <p class="text-xs font-semibold tracking-widest text-accent uppercase">{{ pillar.label }}</p>
          <h3 class="mt-4 font-heading text-lg font-bold text-white">{{ pillar.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">{{ pillar.description }}</p>
        </div>
      </div>

      <p class="mx-auto mt-16 max-w-2xl text-center font-heading text-2xl font-bold text-white sm:text-3xl">
        A TNP existe para reduzir o <span class="text-accent">improviso</span>.
      </p>
    </div>
  </section>
</template>
