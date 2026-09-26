<script setup lang="ts">
interface Pillar {
  label: string
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    label: '01',
    title: 'O problema não é você.',
    description: 'É pagar por uma consultoria e esperar dias por um PDF genérico, sem direção quando surge uma dúvida no meio do treino.',
  },
  {
    label: '02',
    title: 'A motivação não espera.',
    description: 'Quando o suporte demora 24 horas, a dúvida vira pausa, a motivação esfria e o resultado fica para depois.',
  },
  {
    label: '03',
    title: 'Nós não aceitamos descaso.',
    description: 'Se você está disposto a fazer o trabalho duro, merece uma equipe na trincheira com você, com direção e acompanhamento de perto.',
  },
]
</script>

<template>
  <section id="tnp" class="py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">A mediocridade do mercado fitness</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          O sistema te abandona. O TNP Method não.
        </h2>
        <p class="mt-4 text-zinc-400">
          Alta disponibilidade, obsessão pelo processo e excelência no básico. Nós não vendemos atalhos: entregamos direção exata para você executar.
        </p>
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
