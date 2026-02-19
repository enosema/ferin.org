import { ref, onMounted, onUnmounted } from 'vue'

const shortcuts = ref({
  '/': 'Open search',
  'k': 'Open search (alternative)',
  'j': 'Scroll down',
  'k': 'Scroll up',
  'gg': 'Go to top',
  'G': 'Go to bottom',
  '?': 'Show keyboard shortcuts',
  'Escape': 'Close modal / Cancel'
})

const isModalOpen = ref(false)

export function useKeyboard(handlers = {}) {
  const handleKeydown = (e) => {
    // Don't trigger shortcuts when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return
    }

    const key = e.key

    // Check for Cmd/Ctrl + K for search
    if ((e.metaKey || e.ctrlKey) && key === 'k') {
      e.preventDefault()
      if (handlers['cmd+k'] || handlers['ctrl+k']) {
        ;(handlers['cmd+k'] || handlers['ctrl+k'])()
      }
      return
    }

    // Don't trigger other shortcuts with modifier keys
    if (e.ctrlKey || e.metaKey || e.altKey) {
      return
    }

    // Handle specific shortcuts
    if (key === '/' && handlers['/']) {
      e.preventDefault()
      handlers['/']()
      return
    }

    if (key === '?' && handlers['?']) {
      e.preventDefault()
      handlers['?']()
      return
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  return {
    shortcuts,
    isModalOpen
  }
}

export function useKeyboardShortcuts(handlers = {}) {
  const handleKeydown = (e) => {
    // Don't trigger shortcuts when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return
    }

    const key = e.key

    // Escape closes modals
    if (key === 'Escape' && isModalOpen.value) {
      e.preventDefault()
      isModalOpen.value = false
      return
    }

    // Don't trigger shortcuts with modifier keys
    if (e.ctrlKey || e.metaKey || e.altKey) {
      return
    }

    // ? to show shortcuts (must be shifted)
    if (key === '?' && e.shiftKey) {
      e.preventDefault()
      if (handlers.onHelp) {
        handlers.onHelp()
      }
      return
    }

    // gg - go to top
    if (key === 'g' && !e.repeat) {
      const timeout = setTimeout(() => {
        // If another g is pressed, go to top
      }, 200)
      return
    }

    switch (key) {
      case '/':
        e.preventDefault()
        if (handlers.onSearch) handlers.onSearch()
        break
      case 'k':
        if (e.shiftKey) {
          e.preventDefault()
          if (handlers.onSearch) handlers.onSearch()
        } else {
          e.preventDefault()
          if (handlers.onUp) handlers.onUp()
        }
        break
      case 'j':
        e.preventDefault()
        if (handlers.onDown) handlers.onDown()
        break
      case 'g':
        // First g pressed - wait for second
        break
      case 'G':
        e.preventDefault()
        if (handlers.onBottom) handlers.onBottom()
        break
    }
  }

  const handleKeyup = (e) => {
    // gg - go to top (two g presses)
    if (e.key === 'g' && !e.shiftKey) {
      e.preventDefault()
      if (handlers.onTop) handlers.onTop()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('keyup', handleKeyup)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('keyup', handleKeyup)
  })

  return {
    shortcuts,
    isModalOpen
  }
}
