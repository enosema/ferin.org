<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li v-for="(crumb, index) in crumbs" :key="crumb.path" class="breadcrumb-item">
        <span v-if="index < crumbs.length - 1">
          <router-link :to="crumb.path" class="breadcrumb-link">
            {{ crumb.label }}
          </router-link>
          <span class="breadcrumb-separator" aria-hidden="true">/</span>
        </span>
        <span v-else class="breadcrumb-current" aria-current="page">
          {{ crumb.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const routeLabels = {
  // Main sections
  'about': 'About',
  'learn': 'Learn',
  'build': 'Build',
  'upgrade': 'Upgrade',
  'reference': 'Reference',
  'news': 'News',

  // About pages
  'what-is-ferin': 'What is FERIN?',
  'why-registers': 'Why Registers?',
  'history': 'History',
  'iso-19135': 'Relationship to ISO 19135',

  // Learn pages
  'core-concepts': 'Core Concepts',
  'principles': 'Principles',
  'framework': 'Framework Overview',
  'register-types': 'Register Types',
  'composite-registers': 'Composite Registers',
  'commitments': 'Commitments',
  'ccr-deep-dive': 'CCR Deep Dive',
  'advanced-concepts': 'Advanced Concepts',

  // Build pages
  'getting-started': 'Getting Started',
  'identifier-design': 'Identifier Design',
  'versioning': 'Versioning',
  'actions': 'Actions',
  'register-specification': 'Register Specification',
  'governance': 'Governance',
  'technology-choices': 'Technology Choices',
  'integration-patterns': 'Integration Patterns',
  'risk-management': 'Risk Management',
  'schema-evolution': 'Schema Evolution',
  'temporal-data': 'Temporal Data',
  'semantic-interoperability': 'Semantic Interoperability',
  'api-design': 'API Design',
  'security': 'Security',
  'operations': 'Operations',
  'performance': 'Performance',
  'destructive-actions': 'Destructive Actions',
  'migration': 'Migration',

  // Upgrade pages
  'paradigm-shifts': 'Paradigm Shifts',
  'terminology': 'Terminology',
  'conformance': 'Conformance',
  'status-model': 'Status Model',
  'data-model': 'Data Model',
  'paths': 'Migration Paths',
  'checklist': 'Checklist',

  // Reference pages
  'glossary': 'Glossary',
  'conceptual-model': 'Conceptual Model',
  'statuses': 'Statuses',
  'relations': 'Relations',
  'anti-patterns': 'Anti-patterns',
  'faq': 'FAQ',
  'samples': 'Samples',
  'case-studies': 'Case Studies',
  'specification-templates': 'Specification Templates',
  'conformance': 'Conformance Guide'
}

const crumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean)
  const result = [{ path: '/', label: 'Home' }]

  let currentPath = ''
  for (const segment of paths) {
    currentPath += `/${segment}`
    const label = routeLabels[segment] || segment
    result.push({ path: currentPath, label })
  }

  return result
})
</script>

<style scoped>
.breadcrumbs {
  padding: var(--spacing-md) 0;
  margin-bottom: var(--spacing-lg);
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  gap: 0;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  color: var(--color-text-light);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}

.breadcrumb-link:hover {
  color: var(--color-accent);
}

.breadcrumb-separator {
  color: var(--color-text-light);
  margin: 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.breadcrumb-current {
  color: var(--color-text);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

@media (max-width: 640px) {
  .breadcrumbs {
    display: none;
  }
}
</style>
