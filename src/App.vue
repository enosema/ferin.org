<template>
  <div class="app">
    <!-- Print-only header elements -->
    <div class="print-header-left">FERIN: Standard for Information Registration</div>
    <div class="print-header-right">{{ pageTitle }}</div>
    <div class="print-footer-left">ferin.org</div>
    <div class="print-footer-right"></div>

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
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import SearchModal from '@/components/ui/SearchModal.vue'
import ShortcutsModal from '@/components/ui/ShortcutsModal.vue'
import { useGlobalSeo } from '@/composables/useSeo.js'
import { useTheme } from '@/composables/useTheme.js'
import { useKeyboard } from '@/composables/useKeyboard.js'

const route = useRoute()

// Page title for print header - extracted from actual page h1
const currentPath = computed(() => route.path)
const pageTitle = ref('FERIN')

// Extract page title from the actual h1 element on the page (client-side only)
const updatePageTitle = () => {
  if (typeof document === 'undefined') return
  nextTick(() => {
    setTimeout(() => {
      const h1 = document.querySelector('main h1')
      if (h1) {
        pageTitle.value = h1.textContent?.trim() || 'FERIN'
      }
    }, 100)
  })
}

// Watch for route changes to update page title (client-side only)
onMounted(() => {
  updatePageTitle()

  // Watch for page title updates
  watch(() => route.path, updatePageTitle)

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
  }, { immediate: true })
})

// Initialize global SEO
useGlobalSeo()

// Initialize theme
const { initTheme } = useTheme()
initTheme()

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

/* Print header/footer elements - hidden on screen */
.print-header-left,
.print-header-right,
.print-footer-left,
.print-footer-right {
  display: none;
}

@media print {
  .print-header-left,
  .print-header-right,
  .print-footer-left,
  .print-footer-right {
    display: block;
  }
}
</style>
