<script setup>
/**
 * OutputPreview - Preview rendered output
 *
 * Features:
 * - Format switcher (AsciiDoc/Markdown)
 * - Preview content
 * - Download button
 */
import { computed } from 'vue'
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'

const props = defineProps({
  format: {
    type: String,
    default: 'asciidoc'
  }
})

const emit = defineEmits(['update:format'])

const { specification, exportDocument, downloadExport } = useRegisterSpecification()

// Preview content
const previewContent = computed(() => {
  try {
    return exportDocument(props.format)
  } catch (e) {
    return `Error generating preview: ${e.message}`
  }
})

// Format options
const formatOptions = [
  { value: 'asciidoc', label: 'AsciiDoc (Metanorma)' },
  { value: 'markdown', label: 'Markdown' }
]

// Handle format change
function handleFormatChange(event) {
  emit('update:format', event.target.value)
}

// Handle download
function handleDownload() {
  downloadExport(props.format)
}

// Copy to clipboard
async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(previewContent.value)
  } catch (e) {
    console.error('Failed to copy:', e)
  }
}
</script>

<template>
  <div class="output-preview">
    <!-- Toolbar -->
    <div class="preview-toolbar">
      <div class="toolbar-left">
        <label class="format-label">Output Format:</label>
        <select
          :value="format"
          class="format-select"
          @change="handleFormatChange"
        >
          <option
            v-for="option in formatOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>

      <div class="toolbar-right">
        <button
          type="button"
          class="toolbar-button"
          @click="copyToClipboard"
          title="Copy to clipboard"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Copy
        </button>

        <button
          type="button"
          class="toolbar-button primary"
          @click="handleDownload"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Download
        </button>
      </div>
    </div>

    <!-- Preview content -->
    <div class="preview-content">
      <pre class="preview-code"><code>{{ previewContent }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.output-preview {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--color-background);
}

.preview-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.toolbar-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.format-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.format-select {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
}

.format-select:focus {
  outline: none;
  border-color: var(--color-accent);
}

.toolbar-right {
  display: flex;
  gap: var(--spacing-sm);
}

.toolbar-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.toolbar-button:hover {
  background: var(--color-glass-dark);
  border-color: var(--color-accent);
}

.toolbar-button.primary {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-text-inverse);
}

.toolbar-button svg {
  width: 16px;
  height: 16px;
}

.preview-content {
  flex: 1;
  overflow: auto;
}

.preview-code {
  height: 100%;
  margin: 0;
  padding: var(--spacing-lg);
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  color: var(--color-text);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
}

.preview-code code {
  font-family: inherit;
}

/* Responsive */
@media (max-width: 768px) {
  .preview-toolbar {
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: stretch;
  }

  .toolbar-left,
  .toolbar-right {
    justify-content: center;
  }
}

/* Dark mode */
[data-theme="dark"] .preview-toolbar {
  background: rgba(0, 0, 0, 0.2);
}
</style>
