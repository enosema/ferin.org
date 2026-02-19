import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

export function useReadingProgress() {
  const updateProgress = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight

    if (docHeight > 0) {
      progress.value = (scrollTop / docHeight) * 100
    } else {
      progress.value = 0
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateProgress)
  })

  return {
    progress
  }
}
