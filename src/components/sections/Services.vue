<script setup lang="ts">
interface Plan {
  title: string
  period: string
  description: string
  features: string[]
  message: string
  recommended?: boolean
}

const plans: Plan[] = [
  {
    title: 'Elite Mamba',
    period: 'Mensal',
    description: 'O ponto de partida para quem quer testar o sangue frio.',
    features: [
      'Dieta e treino de musculação no primeiro atendimento',
      'Suporte de alta disponibilidade pelo WhatsApp',
      'Acompanhamento próximo e ajustes rápidos',
    ],
    message: 'Olá, TNP! Quero começar pelo plano Elite Mamba mensal.',
  },
  {
    title: 'Mamba Mentality',
    period: 'Trimestral',
    description: 'Para quem entendeu que a constância é o que muda o jogo.',
    features: [
      'Dieta e treino de musculação no primeiro atendimento',
      'Suporte VIP de alta disponibilidade',
      'Acompanhamento lado a lado e incentivo contínuo',
      'Renovação completa da periodização',
    ],
    message: 'Olá, TNP! Quero assumir o compromisso com o plano Mamba Mentality trimestral.',
    recommended: true,
  },
]

import { getWhatsappLink, trackWhatsappContact } from '../../config/site'
</script>

<template>
  <section id="planos" class="border-y border-white/10 bg-zinc-900/40 py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">O preço do sucesso</p>
        <h2 class="mt-3 font-heading text-4xl font-extrabold uppercase text-white sm:text-5xl">
          Escolha como entrar no jogo.
        </h2>
        <p class="mt-4 text-zinc-400">
          Dois caminhos, a mesma direção. Consulte o investimento direto com nossa equipe.
        </p>
      </div>

      <div class="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
        <article
          v-for="plan in plans"
          :key="plan.title"
          class="service-card relative flex flex-col border p-6 sm:p-8"
          :class="plan.recommended ? 'border-accent bg-zinc-950' : 'border-white/15 bg-zinc-950/60'"
        >
          <span v-if="plan.recommended" class="absolute right-0 top-0 bg-accent px-3 py-1 text-xs font-bold tracking-wider text-zinc-950 uppercase">
            Recomendado
          </span>
          <p class="text-xs font-bold tracking-[0.16em] text-accent uppercase">{{ plan.period }}</p>
          <h3 class="mt-3 font-heading text-3xl font-extrabold uppercase text-white">{{ plan.title }}</h3>
          <p class="mt-2 min-h-12 text-sm leading-relaxed text-zinc-400">{{ plan.description }}</p>
          <ul class="mt-6 flex-1 space-y-4 border-t border-white/10 pt-6">
            <li v-for="feature in plan.features" :key="feature" class="flex gap-3 text-sm leading-relaxed text-zinc-200">
              <span class="mt-0.5 text-accent" aria-hidden="true">+</span>
              {{ feature }}
            </li>
          </ul>
          <p class="mt-7 text-xs text-zinc-500">Investimento informado pelo WhatsApp</p>
          <a
            :href="getWhatsappLink(plan.message)"
            @click="trackWhatsappContact"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 inline-flex min-h-12 items-center justify-center px-5 py-3 text-center text-sm font-extrabold tracking-wide uppercase transition-colors"
            :class="plan.recommended ? 'bg-accent text-zinc-950 hover:bg-accent-dim' : 'border border-accent text-accent hover:bg-accent hover:text-zinc-950'"
          >
            {{ plan.recommended ? 'Assumir o compromisso' : 'Começar agora' }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  transition: background-color 180ms ease, border-color 180ms ease;
}

.service-card:hover {
  border-color: color-mix(in srgb, var(--color-accent) 70%, transparent);
}
</style>
