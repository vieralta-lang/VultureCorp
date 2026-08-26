<script setup lang="ts">
import About from './components/About.vue'
import CTA from './components/CTA.vue'
import Delivery from './components/Delivery.vue'
import Faq from './components/Faq.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import Methodology from './components/Methodology.vue'
import Navbar from './components/Navbar.vue'
import Results from './components/Results.vue'
import Services from './components/Services.vue'
import TnpEssence from './components/TnpEssence.vue'
import WhatsappFloatButton from './components/WhatsappFloatButton.vue'
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
