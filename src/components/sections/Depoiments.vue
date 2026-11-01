<script setup lang="ts">
import DepoimentCard from '../ui/DepoimentCard.vue'
import maryPhoto from '../../assets/mary.webp'
import julianaPhoto from '../../assets/juliana.webp'
import felipePhoto from '../../assets/felipe.webp'

const depoiments = [
  {
    name: 'Juliana Cristina',
    photo: julianaPhoto,
    depoimento:
      'O que mais me chamou atenção foi a rapidez em responder às dúvidas sobre treinos, dieta e performance. Além da agilidade, as orientações são claras e mostram que a equipe realmente domina o assunto. Atendimento de qualidade que passa muita confiança!🚀💪  ',
  },
  {
    name: 'Felipe Vieira',
    photo: felipePhoto,
    depoimento:
      'Sou suspeito para falar, mas a equipe é incrível! Sempre atenciosos e profissionais, me ajudaram a alcançar meus objetivos de forma eficiente. meu desempenho no boxe melhorou significativamente.',
  },
  {
    name: 'Mary Bernstein',
    photo: maryPhoto,
    depoimento:
      'São uns queridos, muito prestativos e trabalhadores, estão sempre dispostos a ajudar. Me atenderam e no mesmo dia já montaram minha dieta e plano de treino.',
  },
]
</script>

<template>
  <section id="resultados" class="py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">Depoimentos</h2>
        <p class="mt-4 text-zinc-400">
          Confira o depoimento de quem confiou no processo.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <DepoimentCard
          v-for="(depoiment, index) in depoiments"
          :key="`${depoiment.name}-${index}`"
          v-bind="depoiment"
        />
      </div>
    </div>
  </section>
</template>
