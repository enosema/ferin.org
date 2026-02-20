<script setup>
/**
 * BuilderTabs - Tab navigation for the builder
 *
 * Three tabs:
 * - Builder: Step-by-step form interface
 * - JSON: Raw JSON editor
 * - Preview: Rendered output preview
 */
const props = defineProps({
  modelValue: {
    type: String,
    default: 'builder'
  }
})

const emit = defineEmits(['update:modelValue'])

const tabs = [
  { id: 'builder', label: 'Builder', icon: 'edit' },
  { id: 'json', label: 'JSON', icon: 'code' },
  { id: 'preview', label: 'Preview', icon: 'eye' }
]
</script>

<template>
  <div class="builder-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="tab-button"
      :class="{ active: modelValue === tab.id }"
      @click="emit('update:modelValue', tab.id)"
    >
      <!-- Builder icon -->
      <svg v-if="tab.icon === 'edit'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <!-- JSON icon -->
      <svg v-else-if="tab.icon === 'code'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <!-- Preview icon -->
      <svg v-else-if="tab.icon === 'eye'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <span>{{ tab.label }}</span>
    </button>
  </div>
</template>

<style scoped>
.builder-tabs {
  display: flex;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-xl);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.tab-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-light);
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tab-button:hover {
  background: var(--color-glass-dark);
  color: var(--color-text);
}

.tab-button.active {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}

.tab-button svg {
  width: 16px;
  height: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .builder-tabs {
    padding: var(--spacing-sm) var(--spacing-md);
    justify-content: center;
  }

  .tab-button span {
    display: none;
  }

  .tab-button {
    padding: var(--spacing-sm);
  }
}
</style>
