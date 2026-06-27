<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { el, visible } = useScrollReveal()

const info = [
  { label: 'Experience',     value: '3 years' },
  { label: 'Specialization', value: 'Vue.js · ERP' },
  { label: 'Education',      value: 'B.Sc. Computer Engineering' },
  { label: 'Languages',      value: 'Persian · Kurdish · English' },
  { label: 'Location',       value: 'Tehran, Iran' },
  { label: 'Availability',   value: 'Full-time · Part-time' },
]
</script>

<template>
  <section
    id="about"
    ref="el"
    :class="[
      'max-w-5xl mx-auto py-24 px-6 transition-all duration-700',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
  >
    <p class="text-xs font-medium text-blue-400 uppercase tracking-widest mb-2">
      Who I am
    </p>
    <h2 class="text-3xl font-bold text-white mb-10">About me</h2>

    <div class="grid md:grid-cols-2 gap-8 items-start">

      <div class="space-y-4 text-gray-400 leading-relaxed text-base">
        <p>
          I'm a Frontend Developer based in Tehran, focused on
          <span class="text-white">Vue.js</span> and
          <span class="text-white">ERP systems</span>.
          I have hands-on experience building reusable components,
          connecting REST APIs and working with SQL databases.
        </p>
        <p>
          I enjoy making complex enterprise interfaces feel clean and intuitive.
          Quick to learn, committed to delivering maintainable code that scales.
        </p>
        <p>Open to full-time or part-time opportunities.</p>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="item in info"
          :key="item.label"
          class="bg-slate-900 border border-white/5 rounded-xl p-4"
        >
          <p class="text-xs text-gray-500 mb-1">{{ item.label }}</p>
          <p class="text-sm font-medium text-white">{{ item.value }}</p>
        </div>
      </div>

    </div>
  </section>
</template>