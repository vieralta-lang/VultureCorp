<template>
  <article class="delivery-card">
    <div class="delivery-card__icon" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path :d="icon" />
      </svg>
    </div>
    <p class="delivery-card__number">{{ number }}</p>
    <h3 class="delivery-card__title">{{ title }}</h3>
    <p class="delivery-card__description">{{ description }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
  icon: string
}>()
</script>

<style scoped>
.delivery-card {
  min-height: 16rem;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 1rem;
  background: #09090b;
  padding: 2rem;
  transition: border-color 180ms ease, transform 180ms ease;
}

.delivery-card:hover {
  border-color: color-mix(in srgb, var(--color-accent) 40%, transparent);
  transform: translateY(-3px);
}

.delivery-card__icon {
  display: flex;
  width: 4rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  margin-left: -0.5rem;
  border-radius: 0.875rem;
  background: color-mix(in srgb, var(--color-accent) 13%, transparent);
  color: var(--color-accent);
}

.delivery-card__icon svg {
  width: 1.75rem;
  height: 1.75rem;
}

.delivery-card__number {
  margin-top: 1rem;
  color: var(--color-accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.delivery-card__title {
  margin-top: 0.4rem;
  color: white;
  font-family: var(--font-heading);
  font-size: 1.125rem;
  font-weight: 700;
}

.delivery-card__description {
  margin-top: 0.55rem;
  color: #a1a1aa;
  font-size: 0.875rem;
  line-height: 1.6;
}
</style>
