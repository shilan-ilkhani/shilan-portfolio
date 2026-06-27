<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import { education } from '../data/portfolio'

const { el, visible } = useScrollReveal()
</script>

<template>
  <section
    id="education"
    ref="el"
    :class="[
      'max-w-5xl mx-auto py-24 px-6 transition-all duration-700',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
  >
    <p class="text-xs font-medium text-blue-400 uppercase tracking-widest mb-2">
      Background
    </p>
    <h2 class="text-3xl font-bold text-white mb-10">Education</h2>

    <!-- Degree card -->
    <div class="bg-slate-900 border border-white/5 rounded-2xl p-6 flex gap-5 items-start mb-6">
      <div
        class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0"
      >
        <!-- graduation cap icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="#60a5fa" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      </div>

      <div>
        <h3 class="text-base font-semibold text-white">{{ education.degree }}</h3>
        <p class="text-sm text-gray-400 mt-1">{{ education.university }}</p>
        <p class="text-xs text-gray-600 mt-1">{{ education.years }}</p>
        <p class="text-sm text-blue-400 mt-2 font-medium">GPA {{ education.gpa }}</p>
      </div>
    </div>

    <!-- Certificates -->
    <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
      Certificates
    </h3>
    <div class="grid sm:grid-cols-3 gap-4">
      <div
        v-for="cert in education.certificates"
        :key="cert.name"
        class="bg-slate-900 border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors duration-200"
      >
        <p class="text-sm font-medium text-white">{{ cert.name }}</p>
        <p class="text-xs text-gray-500 mt-1">{{ cert.institute }}</p>
        <p class="text-xs text-blue-400 mt-1">{{ cert.date }}</p>
      </div>
    </div>
  </section>
</template>