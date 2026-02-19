<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="shortcuts-modal"
      @click.self="close"
    >
      <div class="shortcuts-content">
        <h2>Keyboard Shortcuts</h2>
        <div
          v-for="(description, key) in shortcutsList"
          :key="key"
          class="shortcut-row"
        >
          <span>{{ description }}</span>
          <div class="shortcut-key">
            <kbd v-for="k in key.split('+')" :key="k">{{ k }}</kbd>
          </div>
        </div>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--color-text-light);">
          Press <kbd>Esc</kbd> to close
        </p>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const shortcutsList = {
  '/': 'Open search',
  'Cmd/Ctrl + K': 'Open search',
  'j': 'Scroll down',
  'k': 'Scroll up',
  'gg': 'Go to top',
  'G': 'Go to bottom',
  '?': 'Show shortcuts'
}

const close = () => {
  emit('close')
}
</script>
