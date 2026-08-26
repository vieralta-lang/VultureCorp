<script setup lang="ts">
interface Service {
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    title: 'Treino Personalizado',
    description: 'Programas de treino sob medida para o seu objetivo, rotina e nível de condicionamento.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Consultoria de Nutrição',
    description: 'Orientação nutricional alinhada à sua rotina, preferências e metas de performance.',
    icon: 'M12 3v18M5 8c0-2.8 3.1-5 7-5s7 2.2 7 5-3.1 5-7 5-7-2.2-7-5z',
  },
  {
    title: 'Plano Alimentar',
    description: 'Cardápio estruturado e prático, pensado para se encaixar no seu dia a dia.',
    icon: 'M4 4h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4V4zM8 12v8M16 12v8',
  },
  {
    title: 'Suplementação',
    description: 'Orientações sobre uso estratégico de suplementos para potencializar resultados.',
    icon: 'M12 2l3 3-3 3-3-3 3-3zM4 14a4 4 0 014-4h8a4 4 0 014 4v2a4 4 0 01-4 4H8a4 4 0 01-4-4v-2z',
  },
  {
    title: 'Acompanhamento de Evolução',
    description: 'Monitoramento contínuo de medidas, fotos e desempenho para acompanhar seu progresso.',
    icon: 'M3 3v18h18M7 15l4-4 3 3 5-6',
  },
  {
    title: 'Ajustes de Treino e Estratégia',
    description: 'Revisões periódicas do plano para manter a evolução constante e evitar estagnação.',
    icon: 'M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-5.7l1.4-1.4M4.9 19.1l1.4-1.4M19.1 19.1l-1.4-1.4M4.9 4.9l1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z',
  },
  {
    title: 'Orientação sobre Hormonização',
    description: 'Direcionamento responsável dentro dos limites profissionais e legais, sempre priorizando saúde e segurança.',
    icon: 'M12 22s8-4.5 8-11.3V5l-8-3-8 3v5.7C4 17.5 12 22 12 22z',
  },
]
</script>

<template>
  <section id="servicos" class="py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">Serviços</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Tudo o que você precisa para evoluir
        </h2>
        <p class="mt-4 text-zinc-400">
          Um acompanhamento completo, do treino ao prato, para garantir consistência e resultado.
        </p>
      </div>

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.title"
          class="group rounded-2xl border border-white/10 bg-zinc-900/40 p-8 transition-colors hover:border-accent/40 hover:bg-zinc-900"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path :d="service.icon" />
            </svg>
          </div>
          <h3 class="mt-6 font-heading text-lg font-bold text-white">{{ service.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-zinc-400">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
