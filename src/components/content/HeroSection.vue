<template>
  <section class="hero" :style="heroStyle">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  background: {
    type: String,
    default: 'gradient'
  }
})

const heroStyle = computed(() => {
  if (props.background.startsWith('http') || props.background.startsWith('/')) {
    return {
      backgroundImage: `url(${props.background})`
    }
  }
  return {}
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) var(--spacing-lg);
  background: linear-gradient(
    135deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 50%,
    var(--color-accent-dark) 100%
  );
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: center;
  color: var(--color-text-inverse);
}

.hero-content :deep(h1) {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-inverse);
  margin-bottom: var(--spacing-lg);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-content :deep(p) {
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-xl);
}

.hero-content :deep(.hero-actions) {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    min-height: 300px;
    padding: var(--spacing-2xl) var(--spacing-md);
  }

  .hero-content :deep(h1) {
    font-size: var(--font-size-3xl);
  }

  .hero-content :deep(p) {
    font-size: var(--font-size-lg);
  }
}
</style>
