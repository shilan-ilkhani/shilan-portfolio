import { ref, onMounted, onUnmounted } from 'vue'

/**
 * useScrollReveal
 *
 * Returns a template ref `el` and a boolean `visible`.
 * Set `ref="el"` on your section element — `visible` flips to true
 * once the element enters the viewport, triggering your enter animation.
 *
 * Usage:
 *   const { el, visible } = useScrollReveal()
 */
export function useScrollReveal(threshold = 0.15) {
  const el = ref(null)
  const visible = ref(false)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.disconnect() // only animate once
        }
      },
      { threshold }
    )

    if (el.value) observer.observe(el.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { el, visible }
}