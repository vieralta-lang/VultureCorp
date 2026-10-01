<script setup lang="ts">
interface Pillar {
  label: string
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    label: '01',
    title: 'Treino que não é no escuro',
    description: 'Planejamento exato para o seu nível e objetivo, sem listas genéricas. O plano muda quando a sua capacidade muda.',
  },
  {
    label: '02',
    title: 'Nutrição para a vida real',
    description: 'A dieta perfeita no papel não serve se não funcionar na segunda-feira. Calculamos o que você precisa, com o que você gosta.',
  },
  {
    label: '03',
    title: 'Acompanhamento que destrava',
    description: 'Dúvida não pode virar desculpa. Acesso direto à equipe para ajustes rápidos na rota.',
  },
]
</script>

<template>
  <section id="metodo" class="py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          O problema não é esforço.
          <span class="block text-accent">É falta de direção.</span>
        </h2>
        <div class="mt-6 space-y-3 text-zinc-400">
          <p>Você pesquisa, tenta e, quando a rotina aperta, improvisa e desiste. A TNP elimina esse ciclo com um processo focado em execução:</p>
        </div>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <div
          v-for="pillar in pillars"
          :key="pillar.label"
          class="pillar rounded-2xl border border-white/10 bg-zinc-900/40 p-8"
        >
          <p class="text-xs font-semibold tracking-widest text-accent uppercase">{{ pillar.label }}</p>
          <h3 class="mt-4 font-heading text-lg font-bold text-white">{{ pillar.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">{{ pillar.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pillar {
  transition: border-color 180ms ease, background-color 180ms ease;
}

.pillar:hover {
  border-color: color-mix(in srgb, var(--color-accent) 35%, transparent);
}

.method-link {
  display: table;
  margin: 2.5rem auto 0;
  color: var(--color-accent);
  font-size: 0.875rem;
  font-weight: 700;
}
</style>
