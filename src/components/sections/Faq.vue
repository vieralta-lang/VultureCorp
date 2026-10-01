<script setup lang="ts">
type Segment = string | { strong: string }

interface QA {
  question: string
  answer: Segment[][]
}

const faqs: QA[] = [
  {
    question: 'Em quanto tempo recebo meu treino e dieta?',
    answer: [
      [{ strong: 'No primeiro atendimento.' }, ' Sem esperar dias para descobrir o que fazer.'],
    ],
  },
  {
    question: 'Posso escolher entre Nutrição e Treinamento Integrado?',
    answer: [
      [{ strong: 'Sim.' }, ' Você pode optar por receber apenas acompanhamento nutricional ou apenas treinamento integrado, conforme sua necessidade.'],
    ],
  },
  {
    question: 'E se eu tiver dúvidas na execução?',
    answer: [
      [{ strong: 'Você tem suporte direto.' }, ' Ajustamos o plano no meio do caminho se algo não encaixar.'],
    ],
  },
  {
    question: 'Sou iniciante, serve para mim?',
    answer: [
      [{ strong: 'Sim.' }, ' O planejamento é construído com base na sua capacidade atual de execução.'],
    ],
  },
  {
    question: 'É só para academia?',
    answer: [
      [{ strong: 'Não.' }, ' Adaptamos os treinos para o ambiente e os equipamentos que você tem disponíveis.'],
    ],
  },
  {
    question: 'Atende online?',
    answer: [
      [{ strong: 'Totalmente digital.' }, ' Você recebe seu plano e suporte diretamente pelo nosso sistema online, sem precisar se deslocar.'],
    ],
  },
  {
    question: 'Atendem só atletas?',
    answer: [
      [{ strong: 'Não.' }, ' Atendemos tanto atletas quanto pessoas comuns que buscam acompanhamento nutricional e treinamento integrado.'],
    ],
  }
]
</script>

<template>
  <section id="faq" class="border-y border-white/10 bg-zinc-900/30 py-20 sm:py-28">
    <div class="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <header class="max-w-lg">
        <p class="flex items-center gap-3 text-sm font-bold tracking-[0.16em] text-accent uppercase">
          <span class="h-px w-8 bg-accent" /> FAQ
        </p>
        <h2 class="mt-5 font-heading text-4xl leading-tight font-extrabold text-white sm:text-5xl">
          FAQ
        </h2>
      </header>

      <div class="border-t border-white/15">
        <details
          v-for="(item, index) in faqs"
          :key="item.question"
          :open="index === 0"
          class="faq-item border-b border-white/15"
        >
          <summary class="grid cursor-pointer list-none grid-cols-[2.25rem_minmax(0,1fr)_2rem] items-center gap-3 py-5 marker:hidden sm:gap-5 sm:py-6">
            <span class="font-heading text-sm font-bold text-accent">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="font-heading text-lg leading-snug font-bold text-white sm:text-xl">{{ item.question }}</span>
            <span class="faq-toggle flex h-8 w-8 items-center justify-center border border-white/15 text-xl font-light text-accent" aria-hidden="true">+</span>
          </summary>
          <div class="faq-answer ml-[3.25rem] max-w-xl space-y-3 pb-6 pr-2 text-sm leading-relaxed text-zinc-400 sm:ml-[4.25rem] sm:pb-7">
            <p v-for="(paragraph, pIndex) in item.answer" :key="pIndex">
              <template v-for="(segment, sIndex) in paragraph" :key="sIndex">
                <strong v-if="typeof segment === 'object'" class="font-semibold text-white">{{ segment.strong }}</strong>
                <template v-else>{{ segment }}</template>
              </template>
            </p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-item {
  transition: border-color 180ms ease;
}

.faq-item:hover {
  border-color: color-mix(in srgb, var(--color-accent) 55%, transparent);
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-toggle {
  transition: transform 180ms ease, background-color 180ms ease;
}

.faq-item[open] .faq-toggle {
  transform: rotate(45deg);
  border-color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);
}
</style>
