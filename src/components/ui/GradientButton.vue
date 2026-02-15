<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="gradient-button"
    :class="[
      `gradient-button-${variant}`,
      `gradient-button-${size}`,
      { 'gradient-button-full': full }
    ]"
  >
    <span v-if="$slots.icon" class="button-icon">
      <slot name="icon"></slot>
    </span>
    <span class="button-content">
      <slot></slot>
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  full: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  }
})

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})
</script>

<style scoped>
.gradient-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-family: var(--font-sans);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
  border-radius: var(--radius-lg);
}

.button-content {
  display: flex;
  align-items: center;
}

.button-icon {
  display: flex;
  align-items: center;
}

/* Variants */
.gradient-button-primary {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  color: var(--color-text-inverse);
}

.gradient-button-primary:hover {
  background: linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-primary-light) 100%);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.gradient-button-secondary {
  background: var(--color-surface);
  color: var(--color-primary);
  border: 1px solid var(--color-border);
}

.gradient-button-secondary:hover {
  background: var(--color-background);
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.gradient-button-outline {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
}

.gradient-button-outline:hover {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}

/* Sizes */
.gradient-button-sm {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
}

.gradient-button-md {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-base);
}

.gradient-button-lg {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-lg);
}

.gradient-button-full {
  width: 100%;
}
</style>
