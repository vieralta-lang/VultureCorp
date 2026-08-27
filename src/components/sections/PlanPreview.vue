<template>
  <section id="plano" class="py-24 sm:py-32">
    <div class="container-page grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
      <div>
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">Seu plano</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Visualize sua estratégia em um só lugar.
        </h2>
        <p class="mt-5 max-w-lg text-lg leading-relaxed text-zinc-400">
          Você acompanha o que importa para executar bem: metas nutricionais, treino, refeições e
          evolução do processo.
        </p>
        <a :href="getWhatsappLink()" target="_blank" rel="noopener noreferrer" class="plan-cta">
          Começar minha avaliação →
        </a>
      </div>

      <div class="plan-shell" aria-label="Exemplo de painel do plano personalizado">
        <div class="plan-topbar">
          <span class="font-heading font-extrabold text-white">TNP <span class="text-accent">METHOD</span></span>
          <span>Plano pessoal</span>
        </div>
        <div class="plan-content">
          <div class="plan-summary">
            <p>Objetivo</p>
            <h3>Hipertrofia</h3>
            <span>Semana 12</span>
          </div>
          <div class="plan-macros">
            <div v-for="macro in macros" :key="macro.label" class="macro-card">
              <span>{{ macro.label }}</span>
              <strong>{{ macro.value }}</strong>
            </div>
          </div>
          <div class="plan-row">
            <div class="plan-card">
              <span>Treino de hoje</span>
              <strong>Superior A</strong>
              <p>6 exercícios · 58 min</p>
            </div>
            <div class="plan-card">
              <span>Próxima refeição</span>
              <strong>Almoço</strong>
              <p>Frango, arroz e legumes</p>
            </div>
          </div>
          <div class="progress-card">
            <div><span>Evolução</span><strong>+ 8,0 kg</strong></div>
            <div class="progress-track"><span /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getWhatsappLink } from '../../config/site'

const macros = [
  { label: 'Calorias', value: '2.840 kcal' },
  { label: 'Proteínas', value: '185 g' },
  { label: 'Carboidratos', value: '325 g' },
  { label: 'Gorduras', value: '78 g' },
]
</script>

<style scoped>
.plan-cta {
  display: inline-flex;
  margin-top: 2rem;
  border-radius: 9999px;
  background: var(--color-accent);
  padding: 1rem 1.75rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: transform 180ms ease;
}

.plan-cta:hover { transform: scale(1.05); }
.plan-cta:active { transform: scale(0.95); }

.plan-shell { overflow: hidden; border: 1px solid rgb(255 255 255 / 12%); border-radius: 1.25rem; background: #18181b; box-shadow: 0 20px 60px rgb(0 0 0 / 35%); }
.plan-topbar { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgb(255 255 255 / 8%); padding: 1rem 1.25rem; color: #a1a1aa; font-size: 0.75rem; }
.plan-content { padding: 1.25rem; }
.plan-summary { border-radius: 1rem; background: linear-gradient(130deg, rgb(139 92 246 / 28%), rgb(24 24 27)); padding: 1.25rem; }
.plan-summary p, .plan-card span, .progress-card span, .macro-card span { color: #a1a1aa; font-size: 0.75rem; }
.plan-summary h3 { margin-top: 0.35rem; color: white; font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; }
.plan-summary > span { display: inline-block; margin-top: 0.75rem; color: var(--color-accent); font-size: 0.75rem; font-weight: 700; }
.plan-macros { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.625rem; margin-top: 0.625rem; }
.macro-card, .plan-card, .progress-card { border: 1px solid rgb(255 255 255 / 8%); border-radius: 0.75rem; background: #09090b; padding: 0.875rem; }
.macro-card strong, .plan-card strong, .progress-card strong { display: block; margin-top: 0.35rem; color: white; font-size: 0.875rem; }
.plan-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.625rem; margin-top: 0.625rem; }
.plan-card p { margin-top: 0.45rem; color: #71717a; font-size: 0.7rem; }
.progress-card { margin-top: 0.625rem; }
.progress-card > div:first-child { display: flex; justify-content: space-between; align-items: center; }
.progress-card strong { margin: 0; color: var(--color-accent); }
.progress-track { height: 0.4rem; overflow: hidden; margin-top: 0.75rem; border-radius: 9999px; background: #3f3f46; }
.progress-track span { display: block; width: 72%; height: 100%; border-radius: inherit; background: var(--color-accent); }
</style>
