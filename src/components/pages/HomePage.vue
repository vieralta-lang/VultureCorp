<script setup lang="ts">
import Footer from '../layout/Footer.vue'
import Navbar from '../layout/Navbar.vue'
import About from '../sections/About.vue'
import Audience from '../sections/Audience.vue'
import CTA from '../sections/CTA.vue'
import Delivery from '../sections/Delivery.vue'
import Faq from '../sections/Faq.vue'
import Hero from '../sections/Hero.vue'
// import Results from '../sections/Results.vue'
// import TnpEssence from '../sections/TnpEssence.vue'
import WhatsappFloatButton from '../ui/WhatsappFloatButton.vue'
</script>

<template>
  <Navbar />
  <main class="overflow-x-hidden">
    <Hero />
    <!-- <TnpEssence /> -->
    <Audience />
    <Delivery />
    <About />
    <Faq />
    <!-- <Results /> -->
    <CTA />
  </main>
  <Footer />
  <WhatsappFloatButton />
</template>