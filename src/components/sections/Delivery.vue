<script setup lang="ts">
interface Item {
  title: string
}

const items: Item[] = [
  { title: 'Ataque imediato' },
  { title: 'Suporte rápido' },
  { title: 'Treino e nutrição' },
  { title: 'Mentalidade inabalável' },
  { title: 'Tecnologia própria' },
]
</script>

<template>
  <section class="ticker-section border-y border-white/10 bg-zinc-950 py-5 sm:py-6">
    <ul class="sr-only">
      <li v-for="item in items" :key="item.title">{{ item.title }}</li>
    </ul>

    <div class="ticker-viewport" aria-hidden="true">
      <div class="ticker-track">
        <div
          v-for="copy in 2"
          :key="copy"
          class="ticker-group"
          :class="{ 'ticker-group--duplicate': copy === 2 }"
        >
          <span v-for="item in items" :key="`${copy}-${item.title}`" class="ticker-item">
            {{ item.title }}
            <span class="ticker-star">✦</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ticker-viewport {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}

.ticker-track {
  display: flex;
  width: max-content;
  animation: ticker-scroll 28s linear infinite;
  will-change: transform;
}

.ticker-group {
  display: flex;
  flex: none;
  align-items: center;
  gap: 2.75rem;
  padding-right: 2.75rem;
}

.ticker-item {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 2.75rem;
  color: #a1a1aa;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  white-space: nowrap;
}

.ticker-star {
  color: var(--color-accent);
  font-size: 0.9rem;
}

@keyframes ticker-scroll {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ticker-viewport {
    overflow-x: auto;
  }

  .ticker-track {
    animation: none;
  }

  .ticker-group--duplicate {
    display: none;
  }
}
</style>

