<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="search-modal"
      @click.self="close"
      @keydown="handleKeydown"
    >
      <div class="search-container">
        <div class="search-input-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref="searchInput"
            v-model="query"
            type="text"
            class="search-input"
            placeholder="Search documentation..."
            @input="search"
          />
        </div>

        <div class="search-results" v-if="results.length > 0">
          <router-link
            v-for="(result, index) in results"
            :key="result.path"
            :to="result.path"
            class="search-result"
            :class="{ selected: index === selectedIndex }"
            @click="close"
          >
            <h4>{{ result.title }}</h4>
            <p>{{ result.description }}</p>
          </router-link>
        </div>

        <div class="search-no-results" v-else-if="query && !results.length">
          <p>No results found for "{{ query }}"</p>
        </div>

        <div class="search-footer">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> to navigate
          </span>
          <span>
            <kbd>Enter</kbd> to select
          </span>
          <span>
            <kbd>Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const query = ref('')
const results = ref([])
const selectedIndex = ref(0)
const searchInput = ref(null)

// Site content index for search
const searchIndex = [
  // About
  { path: '/about/what-is-ferin', title: 'What is FERIN?', description: 'Introduction to the FERIN framework for information registration', section: 'About' },
  { path: '/about/why-registers', title: 'Why Registers?', description: 'Understanding the value and purpose of information registers', section: 'About' },
  { path: '/about/history', title: 'History', description: 'The evolution of FERIN from ISO 19135:2005 to ISO 19135:2026', section: 'About' },
  { path: '/about/iso-19135', title: 'ISO 19135', description: 'Relationship between ferin.org and ISO 19135:2026 standard', section: 'About' },
  // Learn
  { path: '/learn/core-concepts', title: 'Core Concepts', description: 'The two planes: concept plane and content plane in FERIN', section: 'Learn' },
  { path: '/learn/principles', title: 'Principles', description: 'Foundational principles guiding FERIN design', section: 'Learn' },
  { path: '/learn/framework', title: 'Framework Overview', description: 'Complete overview of the FERIN framework architecture', section: 'Learn' },
  { path: '/learn/register-types', title: 'Register Types', description: 'Five conformance classes: Content, Concept, Governed, GCR, CCR', section: 'Learn' },
  { path: '/learn/commitments', title: 'Commitments', description: 'Access, persistence, and transparency commitments', section: 'Learn' },
  { path: '/learn/ccr-deep-dive', title: 'CCR Deep Dive', description: 'Complete Concept Register implementation details', section: 'Learn' },
  { path: '/learn/advanced-concepts', title: 'Advanced Concepts', description: 'Inheritance, composition, domains, and codeset incorporation', section: 'Learn' },
  // Build
  { path: '/build/getting-started', title: 'Getting Started', description: 'Quick start guide for implementing FERIN registers', section: 'Build' },
  { path: '/build/identifier-design', title: 'Identifier Design', description: 'Designing persistent object and functional identifiers', section: 'Build' },
  { path: '/build/versioning', title: 'Versioning', description: 'Managing versions and substantive vs non-substantive changes', section: 'Build' },
  { path: '/build/actions', title: 'Actions', description: 'Register actions: add, change, invalidate, supersede', section: 'Build' },
  { path: '/build/register-specification', title: 'Register Specification', description: 'Writing register specification documents', section: 'Build' },
  { path: '/build/governance', title: 'Governance', description: 'Governance roles, processes, and control body', section: 'Build' },
  { path: '/build/api-design', title: 'API Design', description: 'REST and GraphQL API patterns for registers', section: 'Build' },
  { path: '/build/security', title: 'Security', description: 'Authentication, authorization, and data protection', section: 'Build' },
  { path: '/build/operations', title: 'Operations', description: 'Monitoring, backup, and maintenance procedures', section: 'Build' },
  { path: '/build/performance', title: 'Performance', description: 'Database optimization, caching, and scaling', section: 'Build' },
  { path: '/build/destructive-actions', title: 'Destructive Actions', description: 'Redaction, tombstoning, and purging content', section: 'Build' },
  // Upgrade
  { path: '/upgrade', title: 'Upgrade Guide', description: 'Migrate from ISO 19135-1:2015 to FERIN', section: 'Upgrade' },
  { path: '/upgrade/paradigm-shifts', title: 'Paradigm Shifts', description: 'Four fundamental changes in the 2026 edition', section: 'Upgrade' },
  { path: '/upgrade/terminology', title: 'Terminology Mapping', description: 'Terms renamed, new, and deprecated', section: 'Upgrade' },
  { path: '/upgrade/conformance', title: 'Conformance Migration', description: 'Mapping 2015 classes to 2026 register types', section: 'Upgrade' },
  { path: '/upgrade/status-model', title: 'Status Model Migration', description: 'Single-status to normalized status dimensions', section: 'Upgrade' },
  { path: '/upgrade/paths', title: 'Migration Paths', description: 'Four migration paths based on register type', section: 'Upgrade' },
  // Reference
  { path: '/reference/glossary', title: 'Glossary', description: 'Definitions of FERIN terminology', section: 'Reference' },
  { path: '/reference/conceptual-model', title: 'Conceptual Model', description: 'UML model of registers, concepts, and items', section: 'Reference' },
  { path: '/reference/statuses', title: 'Statuses', description: 'Status values and transition rules', section: 'Reference' },
  { path: '/reference/relations', title: 'Relations', description: 'Relationship types between entities', section: 'Reference' },
  { path: '/reference/anti-patterns', title: 'Anti-patterns', description: 'Common mistakes and how to avoid them', section: 'Reference' },
  { path: '/reference/faq', title: 'FAQ', description: 'Frequently asked questions', section: 'Reference' },
  { path: '/reference/samples', title: 'Sample Registers', description: 'Complete example: RUM register specification', section: 'Reference' },
  { path: '/reference/conformance', title: 'Conformance Guide', description: 'Verify compliance with FERIN requirements', section: 'Reference' },
  { path: '/reference/case-studies', title: 'Case Studies', description: 'Real-world FERIN implementations', section: 'Reference' },
  { path: '/reference/specification-templates', title: 'Specification Templates', description: 'Templates for register specifications', section: 'Reference' }
]

const search = () => {
  if (!query.value.trim()) {
    results.value = []
    return
  }

  const q = query.value.toLowerCase()
  results.value = searchIndex.filter(item => {
    return item.title.toLowerCase().includes(q) ||
           item.description.toLowerCase().includes(q) ||
           item.section.toLowerCase().includes(q)
  }).slice(0, 10)
  selectedIndex.value = 0
}

const handleKeydown = (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = Math.min(selectedIndex.value + 1, results.value.length - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
  } else if (e.key === 'Enter' && results.value.length > 0) {
    const result = results.value[selectedIndex.value]
    if (result) {
      window.location.href = result.path
      close()
    }
  } else if (e.key === 'Escape') {
    close()
  }
}

const close = () => {
  query.value = ''
  results.value = []
  selectedIndex.value = 0
  emit('close')
}

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    nextTick(() => {
      searchInput.value?.focus()
    })
  }
})
</script>
