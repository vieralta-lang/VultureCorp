<script setup lang="ts">
import { onMounted } from 'vue'
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
import About from './components/sections/About.vue'
import Audience from './components/sections/Audience.vue'
import CTA from './components/sections/CTA.vue'
import Delivery from './components/sections/Delivery.vue'
import Hero from './components/sections/Hero.vue'
import Methodology from './components/sections/Methodology.vue'
import Nutrition from './components/sections/Nutrition.vue'
import PlanPreview from './components/sections/PlanPreview.vue'
import Results from './components/sections/Results.vue'
import TnpEssence from './components/sections/TnpEssence.vue'
import WhatsappFloatButton from './components/ui/WhatsappFloatButton.vue'

console.log("[App.vue - Setup]: Script setup do componente raiz App.vue inicializado.")

onMounted(() => {
  console.log("[App.vue - Mounted]: Componente raiz App.vue montado com sucesso no DOM!")
})
</script>

<template>
  <Navbar />
  <main class="overflow-x-hidden">
    <Hero />
    <TnpEssence />
    <Nutrition />
    <Delivery />
    <PlanPreview />
    <Methodology />
    <Audience />
    <Results />
    <About />
    <CTA />
  </main>
  <Footer />
  <WhatsappFloatButton />
</template>
