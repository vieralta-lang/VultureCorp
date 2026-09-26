<script setup lang="ts">
import { onMounted } from 'vue'
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
import About from './components/sections/About.vue'
import Audience from './components/sections/Audience.vue'
import CTA from './components/sections/CTA.vue'
import Delivery from './components/sections/Delivery.vue'
import Faq from './components/sections/Faq.vue'
import Hero from './components/sections/Hero.vue'
import Methodology from './components/sections/Methodology.vue'
import Nutrition from './components/sections/Nutrition.vue'
import PlanPreview from './components/sections/PlanPreview.vue'
import Results from './components/sections/Results.vue'
import Services from './components/sections/Services.vue'
import TnpEssence from './components/sections/TnpEssence.vue'
import WhatsappFloatButton from './components/ui/WhatsappFloatButton.vue'


onMounted(() => {
})
</script>

<template>
  <Navbar />
  <main class="overflow-x-hidden">
    <Hero />
    <TnpEssence />
    <Delivery />
    <!-- <Methodology /> -->
    <Nutrition />
    <!-- <PlanPreview /> -->
    <!-- <Services /> -->
    <Audience />
    <Results />
    <About />
    <Faq />
    <CTA />
  </main>
  <Footer />
  <WhatsappFloatButton />
</template>
