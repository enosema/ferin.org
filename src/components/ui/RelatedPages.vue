<template>
  <section class="related-pages" v-if="related.length > 0">
    <h3>See Also</h3>
    <div class="related-pages-grid">
      <router-link
        v-for="page in related"
        :key="page.path"
        :to="page.path"
        class="related-page-card"
      >
        <h4>{{ page.title }}</h4>
        <p>{{ page.description }}</p>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  currentPath: {
    type: String,
    required: true
  }
})

const route = useRoute()

// Build related pages from navigation structure
const allPages = {
  // About
  '/about/what-is-ferin': { title: 'What is FERIN?', description: 'Introduction to the framework', section: 'about' },
  '/about/why-registers': { title: 'Why Registers?', description: 'Value of information registers', section: 'about' },
  '/about/history': { title: 'History', description: 'Evolution from 2005 to 2026', section: 'about' },
  '/about/iso-19135': { title: 'ISO 19135', description: 'Standard relationship', section: 'about' },
  // Learn
  '/learn/core-concepts': { title: 'Core Concepts', description: 'Two planes of existence', section: 'learn' },
  '/learn/principles': { title: 'Principles', description: 'Foundational principles', section: 'learn' },
  '/learn/framework': { title: 'Framework', description: 'Architecture overview', section: 'learn' },
  '/learn/register-types': { title: 'Register Types', description: 'Five conformance classes', section: 'learn' },
  '/learn/commitments': { title: 'Commitments', description: 'Access and persistence', section: 'learn' },
  '/learn/ccr-deep-dive': { title: 'CCR Deep Dive', description: 'Complete Concept Registers', section: 'learn' },
  '/learn/advanced-concepts': { title: 'Advanced Concepts', description: 'Inheritance and composition', section: 'learn' },
  // Build
  '/build/getting-started': { title: 'Getting Started', description: 'Quick start guide', section: 'build' },
  '/build/identifier-design': { title: 'Identifiers', description: 'Persistent identifiers', section: 'build' },
  '/build/versioning': { title: 'Versioning', description: 'Version management', section: 'build' },
  '/build/actions': { title: 'Actions', description: 'Register operations', section: 'build' },
  '/build/register-specification': { title: 'Specification', description: 'Writing specifications', section: 'build' },
  '/build/governance': { title: 'Governance', description: 'Roles and processes', section: 'build' },
  '/build/api-design': { title: 'API Design', description: 'REST and GraphQL APIs', section: 'build' },
  '/build/security': { title: 'Security', description: 'Auth and protection', section: 'build' },
  '/build/operations': { title: 'Operations', description: 'Monitoring and backup', section: 'build' },
  '/build/performance': { title: 'Performance', description: 'Optimization guide', section: 'build' },
  '/build/destructive-actions': { title: 'Destructive Actions', description: 'Redaction and purging', section: 'build' },
  // Upgrade
  '/upgrade': { title: 'Upgrade Guide', description: 'Migration overview', section: 'upgrade' },
  '/upgrade/paradigm-shifts': { title: 'Paradigm Shifts', description: 'Key changes', section: 'upgrade' },
  '/upgrade/terminology': { title: 'Terminology', description: 'Term mapping', section: 'upgrade' },
  '/upgrade/conformance': { title: 'Conformance', description: 'Class migration', section: 'upgrade' },
  '/upgrade/status-model': { title: 'Status Model', description: 'Status migration', section: 'upgrade' },
  '/upgrade/paths': { title: 'Migration Paths', description: 'Detailed paths', section: 'upgrade' },
  // Reference
  '/reference/glossary': { title: 'Glossary', description: 'Term definitions', section: 'reference' },
  '/reference/conceptual-model': { title: 'Conceptual Model', description: 'UML model', section: 'reference' },
  '/reference/statuses': { title: 'Statuses', description: 'Status reference', section: 'reference' },
  '/reference/relations': { title: 'Relations', description: 'Relationship types', section: 'reference' },
  '/reference/anti-patterns': { title: 'Anti-patterns', description: 'Common mistakes', section: 'reference' },
  '/reference/faq': { title: 'FAQ', description: 'Questions answered', section: 'reference' },
  '/reference/samples': { title: 'Samples', description: 'Example registers', section: 'reference' },
  '/reference/conformance': { title: 'Conformance', description: 'Compliance guide', section: 'reference' },
  '/reference/case-studies': { title: 'Case Studies', description: 'Real examples', section: 'reference' },
  '/reference/specification-templates': { title: 'Templates', description: 'Specification templates', section: 'reference' }
}

const currentSection = computed(() => {
  const current = allPages[props.currentPath]
  return current?.section || ''
})

const related = computed(() => {
  if (!currentSection.value) return []

  return Object.entries(allPages)
    .filter(([path, page]) => {
      // Same section, different page, exclude current
      return page.section === currentSection.value &&
             path !== props.currentPath &&
             path !== '/upgrade' // Exclude upgrade index from related
    })
    .slice(0, 3)
    .map(([path, page]) => ({
      path,
      ...page
    }))
})
</script>
