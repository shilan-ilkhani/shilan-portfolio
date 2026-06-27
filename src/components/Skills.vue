<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import { skills } from '../data/portfolio'

const { el, visible } = useScrollReveal()

// dot color by level
const dotColor = {
  advanced:     'bg-blue-400',
  intermediate: 'bg-gray-500',
  beginner:     'bg-gray-700',
}
</script>

<template>
  <section
    id="skills"
    ref="el"
    :class="[
      'max-w-5xl mx-auto py-24 px-6 transition-all duration-700',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
  >
    <p class="text-xs font-medium text-blue-400 uppercase tracking-widest mb-2">
      Tech stack
    </p>
    <h2 class="text-3xl font-bold text-white mb-4">Skills</h2>

    <!-- Legend -->
    <div class="flex gap-5 mb-8">
      <div v-for="level in ['advanced', 'intermediate', 'beginner']" :key="level"
        class="flex items-center gap-2 text-xs text-gray-500"
      >
        <span :class="['w-2 h-2 rounded-full', dotColor[level]]" />
        {{ level }}
      </div>
    </div>

    <!-- Skill tags -->
    <div class="flex flex-wrap gap-3">
      <div
        v-for="(skill, i) in skills"
        :key="skill.name"
        :style="{ transitionDelay: `${i * 40}ms` }"
        :class="[
          'flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm',
          'bg-slate-900 border-white/5 text-gray-300',
          'hover:border-blue-500/40 hover:-translate-y-0.5',
          'transition-all duration-200 cursor-default',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        ]"
      >
        <span :class="['w-2 h-2 rounded-full flex-shrink-0', dotColor[skill.level]]" />
        {{ skill.name }}
      </div>
    </div>
  </section>
</template>