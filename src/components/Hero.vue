<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => {
  // tiny delay so the transition always plays on first load
  setTimeout(() => (visible.value = true), 50)
})
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center text-center px-6"
  >
    <div
      :class="[
        'flex flex-col items-center gap-5 transition-all duration-700',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ]"
    >
      <!-- Badge -->
      <span
        class="text-xs font-medium px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 tracking-wide"
      >
        Available for work · Tehran, Iran
      </span>

      <!-- Name -->
      <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight">
        Shilan Ilkhani Zadeh
      </h1>

      <!-- Title -->
      <h2 class="text-2xl md:text-3xl font-medium text-blue-400">
        Frontend Developer
      </h2>

      <!-- Bio -->
      <p class="text-gray-400 text-base max-w-lg leading-relaxed">
        Specializing in Vue.js, JavaScript and ERP systems.
        I build clean, reusable components and scalable interfaces
        with 3 years of professional experience.
      </p>

      <!-- Tech pills -->
      <div class="flex flex-wrap justify-center gap-2 mt-1">
        <span
          v-for="tag in ['Vue.js', 'JavaScript', 'Tailwind', 'Laravel', 'SQL Server']"
          :key="tag"
          class="text-xs px-3 py-1 rounded-full bg-slate-800 text-gray-300 border border-white/5"
        >
          {{ tag }}
        </span>
      </div>

      <!-- CTA buttons -->
      <div class="flex gap-3 mt-3">
        <a
          href="#projects"
          class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors duration-200"
        >
          View projects
        </a>
        <a
          href="#contact"
          class="px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
        >
          Get in touch
        </a>
      </div>

      <!-- Scroll hint -->
      <div class="mt-10 flex flex-col items-center gap-2 text-gray-600 text-xs">
        <span>scroll</span>
        <div class="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </div>
  </section>
</template>