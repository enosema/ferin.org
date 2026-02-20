<template>
  <div class="section-view">
    <div class="container">
      <TheBreadcrumbs />

      <!-- Mobile section navigation -->
      <nav class="mobile-section-nav">
        <button class="mobile-nav-toggle" @click="mobileNavOpen = !mobileNavOpen">
          <span>{{ currentSectionTitle }}</span>
          <svg :class="{ 'rotated': mobileNavOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
        <ul v-if="mobileNavOpen" class="mobile-nav-list">
          <li v-for="item in sectionItems" :key="item.path">
            <router-link :to="item.path" @click="mobileNavOpen = false">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="content-layout">
        <TheSidebar section="reference" />
        <div class="content-wrapper">
          <main class="content-main">
            <router-view />
          </main>
          <RelatedPages :currentPath="currentPath" />
        </div>
        <TableOfContents contentSelector=".content-page" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import TheBreadcrumbs from '@/components/layout/TheBreadcrumbs.vue'
import TheSidebar from '@/components/layout/TheSidebar.vue'
import TableOfContents from '@/components/ui/TableOfContents.vue'
import RelatedPages from '@/components/ui/RelatedPages.vue'

const route = useRoute()
const mobileNavOpen = ref(false)

const currentPath = computed(() => route.path)

const sectionItems = [
  { path: '/reference/glossary', label: 'Glossary' },
  { path: '/reference/conceptual-model', label: 'Conceptual Model' },
  { path: '/reference/statuses', label: 'Statuses' },
  { path: '/reference/relations', label: 'Relations' },
  { path: '/reference/anti-patterns', label: 'Anti-patterns' },
  { path: '/reference/faq', label: 'FAQ' },
  { path: '/reference/samples', label: 'Sample Registers' },
  { path: '/reference/conformance', label: 'Conformance Guide' },
  { path: '/reference/case-studies', label: 'Case Studies' },
  { path: '/reference/specification-templates', label: 'Specification Templates' }
]

const currentSectionTitle = computed(() => {
  const item = sectionItems.find(i => i.path === route.path)
  return item ? item.label : 'Reference'
})
</script>

<style scoped>
.section-view {
  padding: var(--spacing-xl) 0 var(--spacing-3xl);
  min-height: calc(100vh - var(--header-height));
}

.container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.content-layout {
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr 200px;
  gap: var(--spacing-2xl);
}

.content-wrapper {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.content-main {
  flex: 1;
}

/* Mobile section navigation */
.mobile-section-nav {
  display: none;
  margin-bottom: var(--spacing-lg);
}

.mobile-nav-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  cursor: pointer;
}

.mobile-nav-toggle svg {
  width: 20px;
  height: 20px;
  transition: transform var(--transition-fast);
}

.mobile-nav-toggle svg.rotated {
  transform: rotate(180deg);
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: var(--spacing-sm) 0 0;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.mobile-nav-list li {
  border-bottom: 1px solid var(--color-border);
}

.mobile-nav-list li:last-child {
  border-bottom: none;
}

.mobile-nav-list a {
  display: block;
  padding: var(--spacing-md);
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: background var(--transition-fast);
}

.mobile-nav-list a:hover,
.mobile-nav-list a.router-link-active {
  background: var(--color-glass-dark);
  color: var(--color-accent);
}

@media (max-width: 1200px) {
  .content-layout {
    grid-template-columns: var(--sidebar-width) 1fr;
  }

  .content-layout > .toc {
    display: none;
  }
}

@media (max-width: 1024px) {
  .mobile-section-nav {
    display: block;
  }

  .content-layout {
    display: flex;
    flex-direction: column;
  }
}
</style>
