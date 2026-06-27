<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const activeSection = ref('hero')

const sections = ['about', 'skills', 'experience', 'projects', 'contact']

function onScroll() {
  scrolled.value = window.scrollY > 20

  // highlight the nav link matching the current section in view
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      return
    }
  }
  activeSection.value = 'hero'
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      scrolled
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">

      <!-- Logo -->
      <a
        href="#"
        class="text-xl font-semibold text-white tracking-tight hover:text-blue-400 transition-colors"
      >
        Shilan<span class="text-blue-400">.</span>
      </a>

      <!-- Nav links -->
      <ul class="flex items-center gap-6">
        <li v-for="item in sections" :key="item">
          <a
            :href="`#${item}`"
            :class="[
              'text-sm capitalize transition-colors duration-200',
              activeSection === item
                ? 'text-blue-400'
                : 'text-gray-400 hover:text-white',
            ]"
          >
            {{ item }}
          </a>
        </li>
      </ul>

    </div>
  </nav>
</template>