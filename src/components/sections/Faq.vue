<script setup lang="ts">
type Segment = string | { strong: string }

interface QA {
  question: string
  answer: Segment[][]
}

const faqs: QA[] = [
  {
    question: 'Em quanto tempo recebo meu treino e minha dieta?',
    answer: [
      [{ strong: 'No primeiro atendimento.' }],
      ['Depois da consultoria inicial, você recebe o planejamento necessário para começar a executar.'],
      ['Você não precisa esperar 3, 5 ou 7 dias para descobrir o que deveria estar fazendo.'],
    ],
  },
  {
    question: 'E se eu tiver uma dúvida durante o processo?',
    answer: [
      ['Você tem um canal direto com a equipe.'],
      ['A ideia é simples: ', { strong: 'dúvida não precisa virar interrupção.' }],
      ['Perguntou, recebeu orientação e voltou para a execução.'],
    ],
  },
  {
    question: 'Sou iniciante. A TNP é para mim?',
    answer: [
      ['Sim.'],
      ['Você não precisa chegar sabendo treinar.'],
      ['O planejamento é adaptado ao seu nível atual e evolui junto com você.'],
    ],
  },
  {
    question: 'O treino é apenas para academia?',
    answer: [
      ['Nosso foco é a musculação e a transformação corporal por meio de um planejamento estruturado.'],
      ['O programa é desenvolvido de acordo com seu objetivo e sua realidade de treino.'],
    ],
  },
  {
    question: 'Vocês atendem presencialmente?',
    answer: [
      ['Não.'],
      ['A TNP funciona ', { strong: '100% online' }, ', permitindo que você tenha acompanhamento independentemente de onde esteja.'],
    ],
  },
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
          Antes de começar, você provavelmente quer saber:
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
