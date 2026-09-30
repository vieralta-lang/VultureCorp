<template>
  <section id="treino" class="py-24 sm:py-32">
    <div class="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
      <div>
        <p class="text-sm font-semibold tracking-widest text-accent uppercase">Treino</p>
        <h2 class="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Pare de treinar apenas para “não faltar”.
        </h2>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
          Treino precisa ter propósito.
        </p>
        <p class="mt-4 max-w-xl leading-relaxed text-zinc-400">
          Estruturamos sua musculação de acordo com seu nível, objetivo e realidade para que cada sessão tenha uma
          razão de existir.
        </p>
      </div>

      <ul class="training-statements">
        <li>Menos improviso.</li>
        <li>Mais intenção.</li>
        <li>Mais consistência.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.training-statements {
  border-left: 2px solid var(--color-accent);
  padding-left: 1.5rem;
}

.training-statements li {
  color: white;
  font-family: var(--font-heading);
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 800;
  line-height: 1.15;
  text-transform: uppercase;
}

.training-statements li + li {
  margin-top: 0.5rem;
}

.training-statements li:last-child {
  color: var(--color-accent);
}
</style>
