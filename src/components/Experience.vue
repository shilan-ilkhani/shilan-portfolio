<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import { experiences } from '../data/portfolio'

const { el, visible } = useScrollReveal()
</script>

<template>
  <section
    id="experience"
    ref="el"
    :class="[
      'max-w-5xl mx-auto py-24 px-6 transition-all duration-700',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
  >
    <p class="text-xs font-medium text-blue-400 uppercase tracking-widest mb-2">
      Where I've worked
    </p>
    <h2 class="text-3xl font-bold text-white mb-10">Experience</h2>

    <!-- Timeline -->
    <div class="relative pl-6">

      <!-- Vertical line -->
      <div class="absolute left-0 top-2 bottom-2 w-px bg-white/5" />

      <div
        v-for="(job, i) in experiences"
        :key="job.company"
        :style="{ transitionDelay: `${i * 150}ms` }"
        :class="[
          'relative mb-8 last:mb-0 transition-all duration-700',
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4',
        ]"
      >
        <!-- Timeline dot -->
        <span
          class="absolute -left-[1.375rem] top-5 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-slate-950 ring-4 ring-blue-500/10"
        />

        <!-- Card -->
        <div class="bg-slate-900 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors duration-200">

          <div class="flex flex-wrap justify-between items-start gap-3 mb-3">
            <div>
              <h3 class="text-lg font-semibold text-white">{{ job.role }}</h3>
              <p class="text-blue-400 text-sm mt-0.5">
                {{ job.company }} · {{ job.location }}
              </p>
            </div>
            <span
              class="text-xs px-3 py-1 rounded-full bg-slate-800 border border-white/5 text-gray-400 whitespace-nowrap"
            >
              {{ job.date }}
            </span>
          </div>

          <ul class="space-y-2 mt-4">
            <li
              v-for="item in job.items"
              :key="item"
              class="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
            >
              <span class="text-blue-500 mt-0.5 flex-shrink-0">→</span>
              {{ item }}
            </li>
          </ul>

        </div>
      </div>
    </div>
  </section>
</template>