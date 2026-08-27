<script setup lang="ts">
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
        <div
          v-for="item in items"
          :key="item.label"
          class="delivery-item rounded-2xl border border-white/10 bg-zinc-950 p-8"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path :d="item.icon" />
            </svg>
          </div>
          <p class="mt-4 text-xs font-semibold tracking-widest text-accent uppercase">{{ item.label }}</p>
          <h3 class="mt-1 font-heading text-lg font-bold text-white">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.delivery-item {
  transition: border-color 180ms ease, background-color 180ms ease;
}
</style>
