<script setup lang="ts">
interface QA {
  question: string
  answer: string
}

const faqs: QA[] = [
  {
    question: 'Preciso acertar 100% para ter resultado?',
    answer:
      'Não. O foco está em consistência e boa execução ao longo das semanas, não em perfeição artificial.',
  },
  {
    question: 'Posso adaptar treino ou alimentação?',
    answer:
      'Sim, desde que a adaptação preserve a lógica da estratégia. Por isso o contato e o suporte fazem parte do método.',
  },
  {
    question: 'O plano muda ao longo do acompanhamento?',
    answer:
      'Sim. O processo inclui leitura da resposta do aluno e ajustes quando isso fizer sentido para a estratégia.',
  },
  {
    question: 'E se minha rotina mudar?',
    answer:
      'Mudança de rotina faz parte da vida real. A estratégia pode ser reorganizada para continuar executável.',
  },
]
</script>

<template>
  <section id="faq" class="py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">FAQ</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          As dúvidas mais importantes antes de começar
        </h2>
        <p class="mt-4 text-zinc-400">
          Respostas objetivas para deixar a proposta clara e reduzir incertezas no início do
          acompanhamento.
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-3xl space-y-4">
        <div
          v-for="item in faqs"
          :key="item.question"
          class="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8"
        >
          <h3 class="font-heading text-base font-bold text-white sm:text-lg">{{ item.question }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
