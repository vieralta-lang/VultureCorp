<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  photo: string
  depoimento: string
  mediaType?: 'image' | 'video'
}>()

const isVideo = computed(
  () => props.mediaType === 'video' || (!props.mediaType && /\.(webm|mp4|ogg|mov)(\?.*)?$/i.test(props.photo)),
)
</script>

<template>
  <article class="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-4 sm:p-5">
    <div class="aspect-[3/4] w-full shrink-0 overflow-hidden
         rounded-2xl border border-white/10
         bg-zinc-950 p-2">
      <video v-if="isVideo" :src="photo" :aria-label="`Vídeo de ${name}`" controls playsinline preload="metadata" class="h-full w-full rounded-2xl object-scale-down"></video>
      <img v-else :src="photo" :alt="`Foto de ${name}`" loading="lazy" decoding="async" class="h-full w-full rounded-xl object-cover" />
    </div>
    <div class="flex flex-1 flex-col px-2 pt-6 pb-2 sm:px-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 shrink-0 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.17 6A5.17 5.17 0 002 11.17V18h6.83v-6.83H4.83c0-1.29 1.05-2.34 2.34-2.34V6zm10 0A5.17 5.17 0 0112 11.17V18h6.83v-6.83h-4A2.34 2.34 0 0117.17 6V6z" />
      </svg>
      <p class="mt-2 flex-1 font-heading text-[1.1rem] leading-snug font-bold text-white">
        {{ depoimento }}
      </p>
      <p class="mt-4 border-t border-white/10 pt-4 text-sm font-semibold tracking-wide text-accent uppercase">
        {{ name }}
      </p>
    </div>
  </article>
</template>
