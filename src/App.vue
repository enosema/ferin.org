<template>
  <div class="app">
    <ReadingProgress />
    <TheHeader @open-search="openSearch" />
    <main class="main-content">
      <router-view />
    </main>
    <TheFooter />
    <SearchModal :isOpen="searchOpen" @close="closeSearch" />
    <ShortcutsModal :isOpen="shortcutsOpen" @close="closeShortcuts" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ReadingProgress from '@/components/ui/ReadingProgress.vue'
import SearchModal from '@/components/ui/SearchModal.vue'
import ShortcutsModal from '@/components/ui/ShortcutsModal.vue'
import { useGlobalSeo } from '@/composables/useSeo.js'
import { useTheme } from '@/composables/useTheme.js'
import { useKeyboard } from '@/composables/useKeyboard.js'

const route = useRoute()

// Initialize global SEO
useGlobalSeo()

// Initialize theme
const { initTheme } = useTheme()
initTheme()

// Re-add copy buttons when route changes
watch(() => route.path, () => {
  setTimeout(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      if (!block.parentElement.querySelector('.copy-btn')) {
        const pre = block.parentElement
        pre.style.position = 'relative'

        const button = document.createElement('button')
        button.className = 'copy-btn'
        button.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span class="copy-text">Copy</span>
        `
        button.setAttribute('aria-label', 'Copy code to clipboard')
        button.setAttribute('type', 'button')

        button.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(block.textContent || '')
            button.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="copy-text">Copied!</span>
            `
            button.classList.add('copied')
            setTimeout(() => {
              button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span class="copy-text">Copy</span>
              `
              button.classList.remove('copied')
            }, 2000)
          } catch (err) {
            console.error('Failed to copy:', err)
          }
        })

        pre.appendChild(button)
      }
    })
  }, 100)
})

// Search modal state
const searchOpen = ref(false)

const openSearch = () => {
  searchOpen.value = true
}

const closeSearch = () => {
  searchOpen.value = false
}

// Shortcuts modal state
const shortcutsOpen = ref(false)

const openShortcuts = () => {
  shortcutsOpen.value = true
}

const closeShortcuts = () => {
  shortcutsOpen.value = false
}

// Keyboard shortcuts
useKeyboard({
  '/': openSearch,
  'cmd+k': openSearch,
  'ctrl+k': openSearch,
  '?': openShortcuts
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: var(--header-height, 80px);
}
</style>
