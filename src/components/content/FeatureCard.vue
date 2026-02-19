<template>
  <div class="feature-card glass-card-hoverable" @click="handleClick">
    <div v-if="icon" class="feature-icon">
      <component :is="icon" />
    </div>
    <div v-else-if="image" class="feature-image">
      <img :src="image" :alt="title" />
    </div>
    <h3 class="feature-title">{{ title }}</h3>
    <p class="feature-description">{{ description }}</p>
    <div v-if="to || href" class="feature-action">
      <span class="feature-link">
        {{ linkText }}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: [Object, Function],
    default: null
  },
  image: {
    type: String,
    default: null
  },
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  linkText: {
    type: String,
    default: 'Learn more'
  }
})

const router = useRouter()

const handleClick = () => {
  if (props.to) {
    router.push(props.to)
  } else if (props.href) {
    window.open(props.href, '_blank', 'noopener')
  }
}
</script>

<style scoped>
.feature-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: default;
}

[data-theme="dark"] .feature-card {
  background: #292524;
  border-color: #44403c;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
  border-color: var(--color-accent);
}

[data-theme="dark"] .feature-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  background: #3c352f;
}

.feature-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-accent) 0%, #0e7490 100%);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-lg);
  color: white;
}

.feature-image {
  width: 100%;
  height: 120px;
  margin-bottom: var(--spacing-lg);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.feature-description {
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

[data-theme="dark"] .feature-description {
  color: #a8a29e;
}

.feature-action {
  margin-top: var(--spacing-md);
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-accent);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.feature-card:hover .feature-link {
  gap: var(--spacing-sm);
}
</style>
