<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import { projects } from '../data/portfolio'

const { el, visible } = useScrollReveal()
</script>

<template>
  <section
    id="projects"
    ref="el"
    :class="[
      'max-w-5xl mx-auto py-24 px-6 transition-all duration-700',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
  >
    <p class="text-xs font-medium text-blue-400 uppercase tracking-widest mb-2">
      What I've built
    </p>
    <h2 class="text-3xl font-bold text-white mb-10">Projects</h2>

    <div class="grid md:grid-cols-2 gap-6">
      <div
        v-for="(project, i) in projects"
        :key="project.title"
        :style="{ transitionDelay: `${i * 150}ms` }"
        :class="[
          'group flex flex-col gap-4 bg-slate-900 border border-white/5 rounded-2xl p-6',
          'hover:border-blue-500/30 transition-all duration-300',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        ]"
      >
        <!-- Title row -->
        <div class="flex justify-between items-start">
          <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-blue-400 transition-colors duration-200"
            :aria-label="`Open ${project.title}`"
          >
            <!-- external link icon (inline svg keeps it lightweight) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <!-- Description -->
        <p class="text-gray-400 text-sm leading-relaxed flex-1">
          {{ project.description }}
        </p>

        <!-- Tech chips -->
        <div class="flex flex-wrap gap-2 mt-auto">
          <span
            v-for="tag in project.tech"
            :key="tag"
            class="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            {{ tag }}
          </span>
        </div>

      </div>
    </div>
  </section>
</template>