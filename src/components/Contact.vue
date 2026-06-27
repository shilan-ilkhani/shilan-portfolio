<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import { contact } from '../data/portfolio'

const { el, visible } = useScrollReveal()

const links = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>`,
  },
  {
    label: 'GitHub',
    value: `github.com/${contact.github}`,
    href: `https://github.com/${contact.github}`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>`,
  },
  {
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.14 6.14l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>`,
  },
]
</script>

<template>
  <section
    id="contact"
    ref="el"
    :class="[
      'max-w-5xl mx-auto py-24 px-6 transition-all duration-700',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
  >
    <p class="text-xs font-medium text-blue-400 uppercase tracking-widest mb-2">
      Get in touch
    </p>
    <h2 class="text-3xl font-bold text-white mb-4">Contact</h2>
    <p class="text-gray-400 text-base mb-10 max-w-md">
      I'm open to new opportunities. Feel free to reach out via email or GitHub.
    </p>

    <div class="grid sm:grid-cols-3 gap-4">
      <a
        v-for="(item, i) in links"
        :key="item.label"
        :href="item.href"
        target="_blank"
        rel="noopener noreferrer"
        :style="{ transitionDelay: `${i * 100}ms` }"
        :class="[
          'group flex items-center gap-4 bg-slate-900 border border-white/5 rounded-2xl p-5',
          'hover:border-blue-500/30 hover:-translate-y-1',
          'transition-all duration-300 no-underline',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        ]"
      >
        <div
          class="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400
                 flex items-center justify-center flex-shrink-0
                 group-hover:bg-blue-500/20 transition-colors duration-200"
          v-html="item.icon"
        />
        <div class="min-w-0">
          <p class="text-xs text-gray-500 mb-0.5">{{ item.label }}</p>
          <p class="text-sm font-medium text-white truncate">{{ item.value }}</p>
        </div>
      </a>
    </div>

    <!-- Footer note -->
    <p class="text-center text-xs text-gray-700 mt-20">
      Built with Vue.js & Tailwind CSS · {{ new Date().getFullYear() }}
    </p>
  </section>
</template>