<template>
  <section id="para-quem" class="border-y border-white/5 bg-zinc-900/30 py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Para quem é a TNP?
        </h2>
        <p class="mt-4 text-lg text-zinc-400">
          Para quem decidiu levar o processo a sério:
        </p>
      </div>
      <ul class="audience-list">
        <li v-for="item in audience" :key="item">
          <span>→</span>{{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const audience = [
  'Pessoa que busca acompanhamento nutricional e treinamento integrado.',
  'Pessoa que quer resultados consistentes e acompanhamento contínuo.',
  'Pessoa que busca orientação profissional e personalizada.',
  'Pessoa que deseja acompanhamento online e flexível.',
]
</script>

<style scoped>
.audience-list { display: grid; gap: 0.75rem; max-width: 48rem; margin: 3rem auto 0; }
.audience-list li { display: flex; align-items: center; gap: 1rem; border-bottom: 1px solid rgb(255 255 255 / 10%); padding: 1rem 0; color: #e4e4e7; font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; }
.audience-list span { color: var(--color-accent); }
</style>
