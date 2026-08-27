<script setup lang="ts">
import consultingPhoto from '../../assets/consulting1.png'

const placeholders = Array.from({ length: 5 }, (_, i) => i + 1)
</script>

<template>
  <section id="resultados" class="py-24 sm:py-32">
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">Resultados</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Evolução de quem confiou no processo
        </h2>
        <p class="mt-4 text-zinc-400">
          Confira as experiências de alguns dos alunos da TNP.
        </p>
      </div>

      <div class="mt-16 grid gap-6 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 lg:grid-cols-2">
        <div class="aspect-[4/5] w-full overflow-hidden lg:aspect-auto">
          <img :src="consultingPhoto" alt="Aluno da TNP após a consultoria" class="h-full w-full object-cover" />
        </div>
        <div class="flex flex-col justify-center p-8 sm:p-12">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H4.83c0-1.29 1.05-2.34 2.34-2.34V6zm10 0A5.17 5.17 0 0012 11.17V18h6.83v-6.83h-4A2.34 2.34 0 0117.17 6V6z" />
          </svg>
          <p class="mt-4 font-heading text-xl leading-snug font-bold text-white sm:text-2xl">
            Comecei a consultoria em maio desse ano e até aqui já ganhei 8kg de massa magra, o
            Especialista Guilherme é fora da curva.
          </p>
          <p class="mt-6 text-sm font-semibold tracking-wide text-accent uppercase">
            Felipe Vieira — em acompanhamento desde maio
          </p>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
        <div
          v-for="item in placeholders"
          :key="item"
          class="result-placeholder group aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950"
        >
          <div class="flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span class="text-xs">Foto em breve</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.result-placeholder {
  transition: transform 300ms ease;
}

.result-placeholder:hover {
  transform: scale(1.05);
}
</style>
