<script setup lang="ts">
import Footer from './components/layout/Footer.vue'
import Navbar from './components/layout/Navbar.vue'
import About from './components/sections/About.vue'
import CTA from './components/sections/CTA.vue'
import Delivery from './components/sections/Delivery.vue'
import Faq from './components/sections/Faq.vue'
import Hero from './components/sections/Hero.vue'
import Methodology from './components/sections/Methodology.vue'
import Results from './components/sections/Results.vue'
import Services from './components/sections/Services.vue'
import TnpEssence from './components/sections/TnpEssence.vue'
import WhatsappFloatButton from './components/ui/WhatsappFloatButton.vue'
</script>

<template>
  <Navbar />
  <main class="overflow-x-hidden">
    <Hero />
    <TnpEssence />
    <Services />
    <Methodology />
    <Delivery />
    <Results />
    <About />
    <Faq />
    <CTA />
  </main>
  <Footer />
  <WhatsappFloatButton />
</template>
