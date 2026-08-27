<script setup lang="ts">
import DeliveryCard from '../ui/DeliveryCard.vue'

interface Item {
  label: string
  title: string
  description: string
  icon: string
}

const items: Item[] = [
  {
    label: '01',
    title: 'Avaliação',
    description: 'Análise do objetivo, rotina e perfil para definir o ponto de partida.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    label: '02',
    title: 'Treino personalizado',
    description:
      'Planejamento estruturado de acordo com o seu objetivo e contexto.',
    icon: 'M12 3v18M5 8c0-2.8 3.1-5 7-5s7 2.2 7 5-3.1 5-7 5-7-2.2-7-5z',
  },
  {
    label: '03',
    title: 'Plano nutricional',
    description:
      'Alimentação personalizada utilizando dados nutricionais de referência.',
    icon: 'M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.26 4.87L2 22l5.31-1.39a9.9 9.9 0 004.73 1.2h.01c5.5 0 9.96-4.46 9.96-9.96C22 6.46 17.54 2 12.04 2z',
  },
  {
    label: '04',
    title: 'Acompanhamento',
    description:
      'Monitoramento da evolução e ajustes sempre que a estratégia pedir.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]
</script>

<template>
  <section class="border-y border-white/5 bg-zinc-900/30 py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">TNP Method</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          O que você recebe
        </h2>
        <p class="mt-4 text-zinc-400">
          Tudo o que você precisa para sair do plano genérico e seguir uma estratégia própria.
        </p>
      </div>

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DeliveryCard
          v-for="item in items"
          :key="item.label"
          :number="item.label"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        />
      </div>
    </div>
  </section>
</template>

