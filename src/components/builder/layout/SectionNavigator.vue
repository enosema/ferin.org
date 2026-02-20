<script setup>
/**
 * SectionNavigator - Left sidebar with section navigation
 *
 * Features:
 * - Section list with completion indicators
 * - Active section highlighting
 * - Progress bar
 */
import { computed } from 'vue'

const props = defineProps({
  sections: {
    type: Array,
    required: true
  },
  activeSection: {
    type: Number,
    default: 0
  },
  completion: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['select'])

// Overall progress
const overallProgress = computed(() => {
  const values = Object.values(props.completion)
  if (values.length === 0) return 0
  return Math.round(values.reduce((sum, v) => sum + v, 0) / values.length)
})
</script>

<template>
  <nav class="section-navigator">
    <!-- Section list -->
    <div class="section-list">
      <button
        v-for="(section, index) in sections"
        :key="section.id"
        class="section-item"
        :class="{
          active: index === activeSection,
          completed: completion[section.key] >= 100,
          'has-progress': completion[section.key] > 0 && completion[section.key] < 100
        }"
        @click="emit('select', index)"
      >
        <!-- Status indicator -->
        <span class="section-indicator">
          <svg
            v-if="completion[section.key] >= 100"
            class="check-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          >
            <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span v-else class="section-number">{{ index + 1 }}</span>
        </span>

        <!-- Section info -->
        <div class="section-info">
          <span class="section-label">{{ section.title }}</span>
          <span v-if="section.required" class="required-badge">Required</span>
        </div>

        <!-- Progress indicator -->
        <div
          v-if="completion[section.key] > 0 && completion[section.key] < 100"
          class="section-progress"
        >
          <div
            class="section-progress-fill"
            :style="{ width: `${completion[section.key]}%` }"
          ></div>
        </div>
      </button>
    </div>

    <!-- Overall progress -->
    <div class="overall-progress">
      <div class="progress-header">
        <span class="progress-label">Overall Progress</span>
        <span class="progress-value">{{ overallProgress }}%</span>
      </div>
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: `${overallProgress}%` }"
        ></div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.section-navigator {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-right: 1px solid var(--color-border);
  height: 100%;
  overflow: hidden;
}

.section-list {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md);
}

.section-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-xs);
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: left;
}

.section-item:hover {
  background: var(--color-glass-dark);
}

.section-item.active {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}

.section-item.active .section-label {
  color: var(--color-text-inverse);
}

.section-item.active .required-badge {
  background: rgba(255, 255, 255, 0.2);
  color: var(--color-text-inverse);
}

.section-item.completed .section-indicator {
  background: var(--color-success);
  color: white;
}

.section-item.has-progress .section-indicator {
  border: 2px solid var(--color-accent);
}

.section-indicator {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: var(--radius-full);
  background: var(--color-border);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-light);
  transition: all var(--transition-fast);
}

.section-item.active .section-indicator {
  background: rgba(255, 255, 255, 0.2);
  color: var(--color-text-inverse);
}

.check-icon {
  width: 14px;
  height: 14px;
}

.section-number {
  font-size: var(--font-size-xs);
}

.section-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.section-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  line-height: 1.3;
}

.required-badge {
  display: inline-block;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
  background: rgba(34, 211, 238, 0.1);
  padding: 1px 6px;
  border-radius: var(--radius-sm);
}

.section-progress {
  position: absolute;
  bottom: 0;
  left: var(--spacing-md);
  right: var(--spacing-md);
  height: 2px;
  background: var(--color-border);
  border-radius: var(--radius-full);
}

.section-progress-fill {
  height: 100%;
  background: var(--color-accent);
  border-radius: var(--radius-full);
  transition: width var(--transition-normal);
}

/* Overall progress */
.overall-progress {
  padding: var(--spacing-md);
  border-top: 1px solid var(--color-border);
  background: var(--color-glass);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-xs);
}

.progress-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.progress-value {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent);
}

.progress-bar {
  height: 4px;
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

/* Responsive */
@media (max-width: 768px) {
  .section-navigator {
    display: none;
  }
}

/* Dark mode */
[data-theme="dark"] .section-item:hover {
  background: rgba(255, 255, 255, 0.05);
}
</style>
