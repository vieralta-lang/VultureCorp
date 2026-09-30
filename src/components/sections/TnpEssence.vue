<script setup lang="ts">
interface Pillar {
  label: string
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    label: '01',
    title: 'Você não deveria treinar no escuro.',
    description: 'Seu treino precisa considerar seu nível, objetivo, rotina e evolução. Não entregamos uma lista de exercícios e desaparecemos.',
  },
  {
    label: '02',
    title: 'Dúvida não pode virar desculpa.',
    description: 'A execução acontece no mundo real. Por isso, quando surgir uma dúvida sobre treino ou alimentação, você tem acesso à equipe para receber orientação e continuar.',
  },
  {
    label: '03',
    title: 'O plano precisa acompanhar você.',
    description: 'Seu corpo muda. Sua rotina muda. Sua capacidade muda. O planejamento precisa acompanhar esse processo — e não ficar parado em um PDF.',
  },
]
</script>

<template>
  <section id="tnp" class="py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          O problema não é falta de esforço.
          <span class="block text-accent">É falta de direção.</span>
        </h2>
        <div class="mt-6 space-y-3 text-zinc-400">
          <p>Você treina. Tenta comer melhor. Pesquisa exercício, dieta, suplemento, técnica...</p>
          <p>Mas quando surge uma dúvida, você fica esperando.</p>
          <p>Quando o treino não encaixa, improvisa.</p>
          <p>Quando a dieta não funciona na rotina, abandona.</p>
        </div>
        <p class="mt-6 font-semibold text-white">A TNP existe para eliminar esse ciclo.</p>
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
