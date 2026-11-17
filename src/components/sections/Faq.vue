<script setup lang="ts">
import { ref } from 'vue'
import pricingPdf from '../../assets/downloads/TNP Planos de Acompanhamento.pdf (6).pdf'
import { getWhatsappLink, siteConfig, trackWhatsappContact } from '../../config/site'

type Segment = string | { strong: string }

interface QA {
  question: string
  answer: Segment[][]
  download?: boolean
}

const faqs: QA[] = [
  {
    question: 'Como funciona o acompanhamento TNP?',
    answer: [
      [{ strong: 'Você recebe um planejamento pensado para seus objetivos e sua realidade.' }, ' O acompanhamento combina orientação nutricional e Treinamento Personalizado, com suporte durante o processo.'],
    ],
  },
  {
    question: 'Para quem é o acompanhamento?',
    answer: [
      [{ strong: 'Para iniciantes, pessoas fisicamente ativas e atletas.' }, ' O planejamento considera seu momento, seus objetivos e a rotina que você consegue manter.'],
    ],
  },
  {
    question: 'O planejamento é personalizado para mim?',
    answer: [
      [{ strong: 'Sim.' }, ' Ele é elaborado de acordo com seus objetivos, sua realidade e as informações compartilhadas no atendimento.'],
    ],
  },
  {
    question: 'Posso escolher entre Nutrição e Treinamento Personalizado?',
    answer: [
      [{ strong: 'Sim, você pode contratar os serviços separadamente.' }, ' Escolha acompanhamento nutricional, Treinamento Personalizado ou a combinação dos dois, conforme o que procura.'],
    ],
  },
  {
    question: 'Em quanto tempo recebo meu planejamento?',
    answer: [
      [{ strong: 'O planejamento é entregue no primeiro atendimento.' }, ' Assim, você já pode conhecer as orientações e saber como começar.'],
    ],
  },
  {
    question: 'Sou iniciante, serve para mim?',
    answer: [
      [{ strong: 'Sim.' }, ' O planejamento é desenvolvido considerando sua capacidade atual e seus objetivos — você não precisa ter experiência prévia.'],
    ],
  },
  {
    question: 'É só para academia?',
    answer: [
      [{ strong: 'Não.' }, ' O treinamento pode ser adaptado ao ambiente e aos equipamentos disponíveis para você.'],
    ],
  },
  {
    question: 'Como funciona o suporte durante o acompanhamento?',
    answer: [
      [{ strong: 'Você conta com suporte durante o acompanhamento.' }, ' Se algo não se encaixar na sua rotina, pode conversar com a equipe para avaliar o planejamento.'],
    ],
  },
  {
    question: 'Com que frequência meu planejamento pode ser ajustado?',
    answer: [
      [{ strong: 'A frequência exata dos ajustes deve ser confirmada com a equipe.' }, ' Se algo não se encaixar na sua rotina, converse com a equipe para avaliar uma revisão do planejamento.'],
    ],
  },
  {
    question: 'A TNP atende crianças e adolescentes?',
    answer: [
      [{ strong: 'Sim, por meio do TNP Kids.' }, ' O atendimento ao público infantil e adolescente considera a participação dos responsáveis no acompanhamento.'],
    ],
  },
  {
    question: 'O atendimento é totalmente online?',
    answer: [
      [{ strong: 'Sim, o atendimento é digital.' }, ' Você recebe seu planejamento e suporte online, sem precisar se deslocar.'],
    ],
  },
  {
    question: 'Quais são os preços?',
    answer: [
      [{ strong: 'O investimento varia conforme o plano escolhido.' }, ' Consulte as opções disponíveis no PDF de planos ou fale com a equipe para entender qual se encaixa melhor para você.'],
    ],
    download: true,
  },
  {
    question: 'Como funciona o pagamento?',
    answer: [
      [{ strong: 'O pagamento é feito online.' }, ' As formas aceitas incluem cartão de crédito, transferência bancária, Pix e boleto.'],
    ],
  },
  {
    question: 'Aceitam pagamento com Bitcoin?',
    answer: [
      [{ strong: 'Sim, aceitamos Bitcoin.' }, ' A disponibilidade segue a condição comercial vigente; confirme os detalhes com a equipe.'],
    ],
  },
  {
    question: 'Posso cancelar meu acompanhamento?',
    answer: [
      [{ strong: 'Sim, você pode cancelar a qualquer momento, sem complicações.' }, ' Confirme com a equipe se há alguma orientação específica para o seu plano.'],
    ],
  },
  {
    question: 'Como faço para começar?',
    answer: [
      [{ strong: 'Fale com a equipe TNP.' }, ' Vamos entender seus objetivos e ajudar você a conhecer as opções de acompanhamento.'],
    ],
  },
]

const openItems = ref<boolean[]>(faqs.map((_, index) => index === 0))
</script>

<template>
  <section id="faq" class="border-y border-white/10 bg-zinc-900/30 py-20 sm:py-28">
    <div class="container-page">
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <header class="max-w-lg">
          <p class="flex items-center gap-3 text-sm font-bold tracking-[0.16em] text-accent uppercase">
            <span class="h-px w-8 bg-accent" aria-hidden="true" /> FAQ
          </p>
          <h2 class="mt-5 font-heading text-4xl leading-tight font-extrabold text-white sm:text-5xl">
            Tire suas dúvidas e encontre seu caminho.
          </h2>
          <p class="mt-5 max-w-md leading-relaxed text-zinc-400">
            Entenda como funciona o acompanhamento TNP e descubra a opção mais adequada aos seus objetivos.
          </p>
        </header>

        <div class="border-t border-white/15">
          <article
            v-for="(item, index) in faqs"
            :key="item.question"
            class="faq-item border-b border-white/15"
          >
            <h3>
              <button
                :id="`faq-question-${index}`"
                :aria-expanded="openItems[index]"
                :aria-controls="`faq-answer-${index}`"
                class="faq-question grid w-full cursor-pointer list-none grid-cols-[2.25rem_minmax(0,1fr)_2rem] items-center gap-3 py-5 text-left sm:gap-5 sm:py-6"
                @click="openItems[index] = !openItems[index]"
              >
                <span class="font-heading text-sm font-bold text-accent">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="font-heading text-lg leading-snug font-bold text-white sm:text-xl">{{ item.question }}</span>
                <span
                  class="faq-toggle flex h-8 w-8 items-center justify-center border border-white/15 text-xl font-light text-accent"
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>
            <Transition name="faq-answer">
              <div
                v-if="openItems[index]"
                :id="`faq-answer-${index}`"
                role="region"
                :aria-labelledby="`faq-question-${index}`"
                class="faq-answer grid"
              >
                <div class="min-h-0 overflow-hidden">
                  <div class="ml-[3.25rem] max-w-xl space-y-3 pb-6 pr-2 text-sm leading-relaxed text-zinc-400 sm:ml-[4.25rem] sm:pb-7">
                    <p v-for="(paragraph, pIndex) in item.answer" :key="pIndex">
                      <template v-for="(segment, sIndex) in paragraph" :key="sIndex">
                        <strong v-if="typeof segment === 'object'" class="font-semibold text-white">{{ segment.strong }}</strong>
                        <template v-else>{{ segment }}</template>
                      </template>
                    </p>
                    <a
                      v-if="item.download"
                      :href="pricingPdf"
                      download="TNP-Planos-de-Acompanhamento.pdf"
                      class="inline-flex items-center border border-accent px-4 py-2 font-heading text-sm font-bold text-accent transition-colors hover:bg-accent hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      Baixar PDF de planos
                    </a>
                  </div>
                </div>
              </div>
            </Transition>
          </article>
        </div>
      </div>

      <aside class="mt-14 border border-white/10 bg-zinc-950/60 p-6 sm:mt-20 sm:p-10">
        <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div class="max-w-2xl">
            <h3 class="font-heading text-2xl font-bold text-white sm:text-3xl">
              Ainda tem dúvidas sobre qual acompanhamento escolher?
            </h3>
            <p class="mt-3 leading-relaxed text-zinc-400">
              Nossa equipe está pronta para ajudar você a encontrar a melhor opção para seus objetivos.
            </p>
          </div>
          <a
            :href="getWhatsappLink()"
            @click.prevent="trackWhatsappContact(getWhatsappLink())"
            :title="siteConfig.whatsappDisplay"
            class="button-primary min-h-12 shrink-0 px-6 py-3 text-center text-sm tracking-wide"
          >
            Fale com a equipe TNP
          </a>
        </div>
      </aside>
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

.faq-question:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

.faq-toggle {
  transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease;
}

.faq-question[aria-expanded='true'] .faq-toggle {
  transform: rotate(45deg);
  border-color: var(--color-accent);
  background-color: color-mix(in srgb, var(--color-accent) 12%, transparent);
}

.faq-answer {
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows 220ms ease, opacity 180ms ease;
}

.faq-answer-enter-from,
.faq-answer-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .faq-toggle,
  .faq-answer {
    transition-duration: 0.01ms;
  }
}
</style>
