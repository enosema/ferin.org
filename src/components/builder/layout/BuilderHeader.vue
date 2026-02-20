<script setup>
/**
 * BuilderHeader - Header component for the builder
 *
 * Displays:
 * - Specification title
 * - Progress indicator
 * - Action buttons (Save, Export, New)
 */
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    default: 'Untitled Register Specification'
  },
  progress: {
    type: Number,
    default: 0
  },
  isDirty: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['save', 'export', 'new'])

const router = useRouter()

// Format progress for display
const progressDisplay = computed(() => Math.round(props.progress))

// Export dropdown state
const showExportMenu = ref(false)

// Export options
const exportOptions = [
  { format: 'json', label: 'JSON', icon: 'code' },
  { format: 'asciidoc', label: 'AsciiDoc (Metanorma)', icon: 'file-text' },
  { format: 'markdown', label: 'Markdown', icon: 'edit' }
]

import { ref } from 'vue'
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'

const { downloadExport } = useRegisterSpecification()

function handleExport(format) {
  downloadExport(format)
  showExportMenu.value = false
}
</script>

<template>
  <header class="builder-header">
    <!-- Left: Back button and title -->
    <div class="header-left">
      <button class="back-button" @click="router.push('/builder')" title="Back to Builder Home">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div class="title-section">
        <h1 class="specification-title">{{ title }}</h1>
        <span v-if="isDirty" class="dirty-indicator">Unsaved changes</span>
      </div>
    </div>

    <!-- Center: Progress -->
    <div class="header-center">
      <div class="progress-indicator">
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
        <span class="progress-text">{{ progressDisplay }}% Complete</span>
      </div>
    </div>

    <!-- Right: Actions -->
    <div class="header-right">
      <button class="action-button secondary" @click="$emit('new')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>New</span>
      </button>

      <button class="action-button primary" @click="$emit('save')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Save</span>
      </button>

      <div class="export-dropdown">
        <button
          class="action-button"
          @click="showExportMenu = !showExportMenu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Export</span>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div v-if="showExportMenu" class="export-menu">
          <button
            v-for="option in exportOptions"
            :key="option.format"
            class="export-option"
            @click="handleExport(option.format)"
          >
            {{ option.label }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.builder-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Left section */
.header-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex: 1;
  min-width: 0;
}

.back-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background: transparent;
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.back-button:hover {
  background: var(--color-glass-dark);
  border-color: var(--color-accent);
}

.back-button svg {
  width: 20px;
  height: 20px;
  color: var(--color-text);
}

.title-section {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-sm);
  min-width: 0;
}

.specification-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dirty-indicator {
  font-size: var(--font-size-xs);
  color: var(--color-warning);
  white-space: nowrap;
}

/* Center section */
.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.progress-indicator {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.progress-bar {
  width: 120px;
  height: 6px;
  background: var(--color-border);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), var(--color-success));
  border-radius: var(--radius-full);
  transition: width var(--transition-normal);
}

.progress-text {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  white-space: nowrap;
}

/* Right section */
.header-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex: 1;
  justify-content: flex-end;
}

.action-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.action-button:hover {
  background: var(--color-glass-dark);
  border-color: var(--color-accent);
}

.action-button svg {
  width: 16px;
  height: 16px;
}

.action-button .chevron {
  width: 14px;
  height: 14px;
  margin-left: var(--spacing-xs);
}

.action-button.primary {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-text-inverse);
}

.action-button.primary:hover {
  background: var(--color-accent-dark, var(--color-accent));
  filter: brightness(1.1);
}

/* Export dropdown */
.export-dropdown {
  position: relative;
}

.export-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: var(--spacing-xs);
  padding: var(--spacing-xs);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  z-index: 10;
  min-width: 180px;
}

.export-option {
  display: block;
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  text-align: left;
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background var(--transition-fast);
}

.export-option:hover {
  background: var(--color-glass-dark);
}

/* Responsive */
@media (max-width: 768px) {
  .builder-header {
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .header-center {
    display: none;
  }

  .action-button span {
    display: none;
  }

  .action-button {
    padding: var(--spacing-sm);
  }
}
</style>
