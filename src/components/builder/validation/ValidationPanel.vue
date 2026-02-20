<script setup>
/**
 * ValidationPanel - Right sidebar showing validation status
 *
 * Features:
 * - Error/warning counts
 * - Section completion percentage
 * - List of validation issues
 */
import { computed } from 'vue'

const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  },
  completion: {
    type: Number,
    default: 0
  }
})

// Mock validation data - in real implementation this would come from validation composable
const errors = computed(() => [])
const warnings = computed(() => [])

const hasIssues = computed(() => errors.value.length > 0 || warnings.value.length > 0)
</script>

<template>
  <aside class="validation-panel">
    <!-- Validation summary -->
    <div class="validation-header">
      <h3>Validation</h3>
      <div class="validation-summary">
        <span class="error-count" :class="{ 'has-errors': errors.length }">
          {{ errors.length }} Error{{ errors.length !== 1 ? 's' : '' }}
        </span>
        <span class="warning-count">
          {{ warnings.length }} Warning{{ warnings.length !== 1 ? 's' : '' }}
        </span>
      </div>
    </div>

    <!-- Completion bar -->
    <div class="completion-section">
      <div class="completion-header">
        <span class="completion-label">Section Completion</span>
        <span class="completion-value">{{ completion }}%</span>
      </div>
      <div class="completion-bar">
        <div
          class="completion-fill"
          :style="{ width: `${completion}%` }"
        ></div>
      </div>
    </div>

    <!-- Issues list -->
    <div v-if="hasIssues" class="validation-issues">
      <div v-if="errors.length" class="issues-group errors">
        <h4>Errors</h4>
        <div
          v-for="(error, index) in errors"
          :key="index"
          class="validation-item error"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ error }}</span>
        </div>
      </div>

      <div v-if="warnings.length" class="issues-group warnings">
        <h4>Warnings</h4>
        <div
          v-for="(warning, index) in warnings"
          :key="index"
          class="validation-item warning"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ warning }}</span>
        </div>
      </div>
    </div>

    <!-- Success message -->
    <div v-else class="validation-success">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span v-if="completion >= 100">Section complete!</span>
      <span v-else>No validation issues</span>
    </div>

    <!-- Tips section -->
    <div class="tips-section">
      <h4>Tips</h4>
      <ul class="tips-list">
        <li>Required fields are marked with an asterisk (*)</li>
        <li>Use the JSON tab to view raw data</li>
        <li>Export to AsciiDoc for Metanorma processing</li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.validation-panel {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-left: 1px solid var(--color-border);
  height: 100%;
  overflow: hidden;
}

.validation-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.validation-header h3 {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin: 0 0 var(--spacing-sm);
}

.validation-summary {
  display: flex;
  gap: var(--spacing-md);
}

.error-count,
.warning-count {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.error-count.has-errors {
  color: var(--color-error);
  font-weight: var(--font-weight-medium);
}

/* Completion */
.completion-section {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.completion-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
}

.completion-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.completion-value {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent);
}

.completion-bar {
  height: 8px;
  background: var(--color-border);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.completion-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), var(--color-success));
  border-radius: var(--radius-full);
  transition: width var(--transition-normal);
}

/* Issues */
.validation-issues {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-lg);
}

.issues-group {
  margin-bottom: var(--spacing-lg);
}

.issues-group h4 {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-sm);
}

.validation-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
}

.validation-item.error {
  background: rgba(220, 38, 38, 0.1);
  color: var(--color-error);
}

.validation-item.warning {
  background: rgba(217, 119, 6, 0.1);
  color: var(--color-warning);
}

.validation-item svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Success */
.validation-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-xl);
  text-align: center;
}

.validation-success svg {
  width: 48px;
  height: 48px;
  color: var(--color-success);
  margin-bottom: var(--spacing-sm);
}

.validation-success span {
  font-size: var(--font-size-sm);
  color: var(--color-success);
  font-weight: var(--font-weight-medium);
}

/* Tips */
.tips-section {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  background: var(--color-glass);
}

.tips-section h4 {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-sm);
}

.tips-list {
  margin: 0;
  padding-left: var(--spacing-md);
}

.tips-list li {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xs);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 1199px) {
  .validation-panel {
    display: none;
  }
}

/* Dark mode */
[data-theme="dark"] .validation-panel {
  background: rgba(0, 0, 0, 0.2);
}
</style>
