<script setup>
/**
 * JsonEditor - JSON view/edit tab
 *
 * Features:
 * - View raw JSON
 * - Edit JSON directly
 * - Load JSON file
 */
import { ref, computed, watch } from 'vue'
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'

const emit = defineEmits(['load'])

const {
  specification,
  loadSpecification
} = useRegisterSpecification()

// Local JSON string for editing
const jsonString = ref('')
const isEditing = ref(false)
const parseError = ref(null)

// Sync from specification to local string
watch(specification, (newVal) => {
  if (!isEditing.value) {
    jsonString.value = JSON.stringify(newVal, null, 2)
  }
}, { immediate: true, deep: true })

// Format JSON
function formatJson() {
  try {
    const parsed = JSON.parse(jsonString.value)
    jsonString.value = JSON.stringify(parsed, null, 2)
    parseError.value = null
  } catch (e) {
    parseError.value = 'Invalid JSON: ' + e.message
  }
}

// Start editing
function startEditing() {
  isEditing.value = true
}

// Cancel editing
function cancelEditing() {
  jsonString.value = JSON.stringify(specification.value, null, 2)
  isEditing.value = false
  parseError.value = null
}

// Save changes
function saveChanges() {
  const result = loadSpecification(jsonString.value)
  if (result.success) {
    isEditing.value = false
    parseError.value = null
  } else {
    parseError.value = result.error
  }
}

// Handle file load
const fileInputRef = ref(null)

function triggerFileLoad() {
  fileInputRef.value?.click()
}

async function handleFileChange(event) {
  const file = event.target.files?.[0]
  if (!file) return

  try {
    const text = await file.text()
    const result = loadSpecification(text)
    if (result.success) {
      parseError.value = null
    } else {
      parseError.value = result.error
    }
  } catch (e) {
    parseError.value = 'Failed to read file'
  }

  // Reset file input
  if (fileInputRef.value) {
    fileInputRef.value.value = ''
  }
}

// Copy to clipboard
async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(jsonString.value)
  } catch (e) {
    console.error('Failed to copy:', e)
  }
}
</script>

<template>
  <div class="json-editor">
    <!-- Toolbar -->
    <div class="json-toolbar">
      <div class="toolbar-left">
        <button
          v-if="!isEditing"
          type="button"
          class="toolbar-button"
          @click="startEditing"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Edit
        </button>

        <button
          v-if="isEditing"
          type="button"
          class="toolbar-button primary"
          @click="saveChanges"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Save
        </button>

        <button
          v-if="isEditing"
          type="button"
          class="toolbar-button"
          @click="cancelEditing"
        >
          Cancel
        </button>
      </div>

      <div class="toolbar-right">
        <button
          type="button"
          class="toolbar-button"
          @click="formatJson"
          title="Format JSON"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h16m-7 6h7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Format
        </button>

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
          class="toolbar-button"
          @click="triggerFileLoad"
          title="Load from file"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Load
        </button>

        <input
          ref="fileInputRef"
          type="file"
          accept=".json"
          style="display: none"
          @change="handleFileChange"
        />
      </div>
    </div>

    <!-- Error message -->
    <div v-if="parseError" class="error-banner">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      {{ parseError }}
    </div>

    <!-- JSON content -->
    <div class="json-content">
      <textarea
        v-if="isEditing"
        v-model="jsonString"
        class="json-textarea"
        spellcheck="false"
      ></textarea>

      <pre v-else class="json-preview"><code>{{ jsonString }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.json-editor {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--color-background);
}

.json-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.toolbar-left,
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

.error-banner {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background: rgba(220, 38, 38, 0.1);
  border-bottom: 1px solid rgba(220, 38, 38, 0.3);
  color: var(--color-error);
  font-size: var(--font-size-sm);
}

.error-banner svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.json-content {
  flex: 1;
  overflow: hidden;
}

.json-textarea {
  width: 100%;
  height: 100%;
  padding: var(--spacing-lg);
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  color: var(--color-text);
  background: transparent;
  border: none;
  resize: none;
}

.json-textarea:focus {
  outline: none;
}

.json-preview {
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

.json-preview code {
  font-family: inherit;
}

/* Dark mode */
[data-theme="dark"] .json-toolbar {
  background: rgba(0, 0, 0, 0.2);
}
</style>
