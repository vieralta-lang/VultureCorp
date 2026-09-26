<script setup lang="ts">
interface QA {
  question: string
  answer: string
}

const faqs: QA[] = [
  {
    question: 'Em quanto tempo recebo meu treino e minha dieta?',
    answer:
      'No primeiro atendimento. Você faz a consultoria inicial e sai com tudo pronto para executar. Nada de esperar de 3 a 7 dias úteis.',
  },
  {
    question: 'Como funciona o acompanhamento de perto?',
    answer:
      'Você tem um canal direto de alta disponibilidade para tirar dúvidas, receber orientação, manter a execução e contar com incentivo contínuo.',
  },
  {
    question: 'Sou iniciante. A consultoria serve para mim?',
    answer:
      'Sim. O treino e a dieta são adaptados ao seu nível atual. É sobre ser melhor do que você foi ontem, com orientação passo a passo.',
  },
  {
    question: 'O treino é só para academia?',
    answer:
      'Nosso foco e especialidade são a musculação para uma transformação corporal sólida e mais performance.',
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
          A mente que não tem dúvidas, executa.
        </h2>
        <p class="mt-5 max-w-sm leading-relaxed text-zinc-400">
          Direto ao ponto. Tire suas dúvidas e entre no jogo com confiança.
        </p>
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
          <p class="faq-answer ml-[3.25rem] max-w-xl pb-6 pr-2 text-sm leading-relaxed text-zinc-400 sm:ml-[4.25rem] sm:pb-7">{{ item.answer }}</p>
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
