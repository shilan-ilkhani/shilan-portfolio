<script setup>
import Navbar    from './components/Navbar.vue'
import Hero      from './components/Hero.vue'
import About     from './components/About.vue'
import Skills    from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects  from './components/Projects.vue'
import Education from './components/Education.vue'
import Contact   from './components/Contact.vue'
</script>

<template>
    <div class="bg-slate-950 text-white min-h-screen">
        <Navbar />

        <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
        </main>
    </div>
</template>