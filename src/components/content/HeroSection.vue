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

html[data-theme="dark"] .hero {
  background: linear-gradient(
    135deg,
    #020617 0%,
    #0c1524 30%,
    #0f2847 60%,
    #164e63 100%
  );
  position: relative;
}

html[data-theme="dark"] .hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 40%);
  pointer-events: none;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
}

html[data-theme="dark"] .hero-overlay {
  background: transparent;
  backdrop-filter: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: center;
  color: #ffffff;
}

.hero-content :deep(h1) {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  color: #ffffff;
  margin-bottom: var(--spacing-lg);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

html[data-theme="dark"] .hero-content :deep(h1) {
  text-shadow: 0 0 40px rgba(34, 211, 238, 0.3), 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
}

.hero-content :deep(p) {
  font-size: var(--font-size-xl);
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: var(--spacing-xl);
}

.hero-content :deep(.hero-tagline) {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: #ffffff;
  margin-bottom: var(--spacing-sm);
  margin-top: calc(-1 * var(--spacing-lg));
}

html[data-theme="dark"] .hero-content :deep(.hero-tagline) {
  color: rgba(255, 255, 255, 0.95);
}

.hero-content :deep(.hero-description) {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: var(--spacing-xl);
}

html[data-theme="dark"] .hero-content :deep(.hero-description) {
  color: rgba(255, 255, 255, 0.8);
}

.hero-content :deep(.hero-actions) {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-content :deep(.hero-eyebrow) {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-md);
}

.hero-content :deep(.hero-title) {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
}

.hero-content :deep(.gradient-text) {
  background: linear-gradient(135deg, #22d3ee 0%, #5eead4 50%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

  .hero-content :deep(.hero-tagline) {
    font-size: var(--font-size-xl);
  }

  .hero-content :deep(.hero-description) {
    font-size: var(--font-size-base);
  }
}
</style>
