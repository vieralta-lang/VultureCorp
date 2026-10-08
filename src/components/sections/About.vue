<script setup lang="ts">
</script>

<template>
  <section id="sobre" class="py-24 sm:py-32">
    <div class="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
      <div class="relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
        <div class="about-photo aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10">
          <img src="/personal2.jpg" alt="Guilherme Posanski, especialista da TNP" loading="lazy" decoding="async"
            class="h-full w-full object-cover object-top" />
        </div>
      </div>

      <div class="lg:order-1">
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">Quem somos</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Construímos nossa própria tecnologia para não ser só mais uma consultoria.
        </h2>
        <div class="mt-6 space-y-4 text-lg leading-relaxed text-zinc-400">
          <p>
            Desenvolvemos um software próprio, do zero, para organizar o seu atendimento, gerar os planos com velocidade e manter o profissional sempre próximo do aluno.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-photo {
  background: #18181b;
}
</style>
