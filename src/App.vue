<template>
    <div class="snap-y snap-mandatory h-screen overflow-y-scroll">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
    <MobileWarning />
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import MobileWarning from './components/MobileWarning.vue'
</script>
