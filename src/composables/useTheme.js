import { ref, watch, onMounted } from 'vue'

const theme = ref('light')

export function useTheme() {
  const setTheme = (newTheme) => {
    theme.value = newTheme
    document.documentElement.setAttribute('data-theme', newTheme)
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', newTheme)
    }
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  const initTheme = () => {
    if (typeof localStorage === 'undefined') {
      return
    }
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  watch(theme, (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
  })

  onMounted(() => {
    initTheme()
  })

  return {
    theme,
    setTheme,
    toggleTheme,
    initTheme
  }
}
