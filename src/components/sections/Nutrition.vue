<template>
  <section id="nutricao" class="border-y border-white/5 bg-zinc-900/30 py-24 sm:py-32">
    <div class="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
      <div>
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">Nutrição</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Nutrição personalizada para o seu objetivo.
        </h2>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
          Seu plano alimentar é estruturado para funcionar na sua rotina e respeitar o que o seu
          corpo precisa para avançar.
        </p>
      </div>

      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <div v-for="item in considerations" :key="item" class="nutrition-item">
          <span class="h-2 w-2 shrink-0 rounded-full bg-accent" />
          {{ item }}
        </div>
      </div>

      <div class="nutrition-reference lg:col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
        <p>Base nutricional baseada na <strong>Tabela Brasileira de Composição de Alimentos (TACO)</strong>.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const considerations = [
  'Objetivo',
  'Rotina',
  'Necessidades individuais',
  'Composição dos alimentos',
]
</script>

<style scoped>
.nutrition-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 0.75rem;
  background: rgb(24 24 27 / 40%);
  padding: 1rem 1.25rem;
  color: #e4e4e7;
  font-size: 0.875rem;
  font-weight: 600;
}

.nutrition-reference {
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  border: 1px solid color-mix(in srgb, var(--color-accent) 35%, transparent);
  border-radius: 1rem;
  background: color-mix(in srgb, var(--color-accent) 8%, transparent);
  padding: 1.25rem;
  color: #d4d4d8;
  line-height: 1.5;
}

.nutrition-reference strong {
  color: white;
}
</style>
