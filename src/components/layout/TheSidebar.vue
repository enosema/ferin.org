<template>
  <aside class="sidebar">
    <nav class="sidebar-nav">
      <div v-for="section in sections" :key="section.title" class="sidebar-section">
        <h3 class="sidebar-title">{{ section.title }}</h3>
        <ul class="sidebar-list">
          <li v-for="item in section.items" :key="item.path">
            <router-link
              :to="item.path"
              class="sidebar-link"
              :class="{ 'sidebar-link-active': isActive(item.path) }"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  section: {
    type: String,
    required: true
  }
})

const route = useRoute()

const isActive = (path) => {
  return route.path === path
}

const sidebarContent = {
  about: {
    title: 'About',
    items: [
      { path: '/about/what-is-ferin', label: 'What is FERIN?' },
      { path: '/about/history', label: 'History' },
      { path: '/about/iso-19135', label: 'Relationship to ISO 19135' }
    ]
  },
  learn: {
    title: 'Learn',
    items: [
      { path: '/learn/core-concepts', label: 'Core Concepts' },
      { path: '/learn/principles', label: 'Principles' },
      { path: '/learn/framework', label: 'Framework Overview' },
      { path: '/learn/register-types', label: 'Register Types' },
      { path: '/learn/governance', label: 'Governance' }
    ]
  },
  build: {
    title: 'Build',
    items: [
      { path: '/build/getting-started', label: 'Getting Started' },
      { path: '/build/identifier-design', label: 'Identifier Design' },
      { path: '/build/versioning', label: 'Versioning' },
      { path: '/build/actions', label: 'Actions Reference' },
      { path: '/build/register-specification', label: 'Register Specification' },
      { path: '/build/migration', label: 'Migration' }
    ]
  },
  reference: {
    title: 'Reference',
    items: [
      { path: '/reference/glossary', label: 'Glossary' },
      { path: '/reference/conceptual-model', label: 'Conceptual Model' },
      { path: '/reference/commitments', label: 'Commitments' },
      { path: '/reference/statuses', label: 'Statuses' },
      { path: '/reference/relations', label: 'Relations' },
      { path: '/reference/anti-patterns', label: 'Anti-patterns' },
      { path: '/reference/faq', label: 'FAQ' },
      { path: '/reference/samples', label: 'Samples' }
    ]
  }
}

const sections = computed(() => {
  const content = sidebarContent[props.section]
  return content ? [content] : []
})
</script>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  flex-shrink: 0;
  padding: var(--spacing-xl) var(--spacing-lg);
  position: sticky;
  top: calc(var(--header-height) + var(--spacing-xl));
  height: fit-content;
  max-height: calc(100vh - var(--header-height) - var(--spacing-2xl));
  overflow-y: auto;
}

.sidebar-section {
  margin-bottom: var(--spacing-xl);
}

.sidebar-title {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  padding: 0 var(--spacing-md);
}

.sidebar-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.sidebar-link {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--font-size-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.sidebar-link:hover {
  background: var(--color-glass-dark);
  color: var(--color-accent);
}

.sidebar-link-active {
  background: var(--color-accent);
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-medium);
}

.sidebar-link-active:hover {
  background: var(--color-accent-dark);
  color: var(--color-text-inverse);
}

@media (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}
</style>
