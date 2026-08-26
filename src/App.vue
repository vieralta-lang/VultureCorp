<script setup lang="ts">
import About from './components/About.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import Methodology from './components/Methodology.vue'
import Navbar from './components/Navbar.vue'
import Results from './components/Results.vue'
import Services from './components/Services.vue'
import WhatsappFloatButton from './components/WhatsappFloatButton.vue'
</script>

<template>
  <Navbar />
  <main class="overflow-x-hidden">
    <Hero />
    <Services />
    <Methodology />
    <Results />
    <About />
    <CTA />
  </main>
  <Footer />
  <WhatsappFloatButton />
</template>
