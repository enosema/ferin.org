<template>
  <a
    v-if="organization"
    :href="organization.url"
    target="_blank"
    rel="noopener noreferrer"
    class="org-link"
    :class="[`org-type-${organization.type}`, { 'with-icon': showIcon && organization.icon }]"
    :title="organization.full_name || organization.name"
  >
    <img
      v-if="showIcon && organization.icon"
      :src="organization.icon"
      :alt="organization.name"
      class="org-icon"
    />
    <span class="org-name">{{ displayText }}</span>
    <svg
      v-if="showExternalIcon"
      class="external-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  </a>
  <span v-else class="org-link org-missing">{{ fallbackText }}</span>
</template>

<script setup>
import { computed } from 'vue'
import { getCachedOrganizations, findOrganizationByName } from '@/composables/useOrganizations'

const props = defineProps({
  // Organization key (e.g., 'iso', 'ogc', 'ribose')
  orgKey: {
    type: String,
    default: null
  },
  // Organization name to look up (alternative to orgKey)
  orgName: {
    type: String,
    default: null
  },
  // Custom display text (overrides organization name)
  text: {
    type: String,
    default: null
  },
  // Show organization icon if available
  showIcon: {
    type: Boolean,
    default: false
  },
  // Show external link icon
  showExternalIcon: {
    type: Boolean,
    default: false
  }
})

const organization = computed(() => {
  // Use cached data (preloaded during SSG build)
  const organizations = getCachedOrganizations() || {}

  if (props.orgKey) {
    return organizations[props.orgKey] || null
  }
  if (props.orgName) {
    return findOrganizationByName(props.orgName, organizations)
  }
  return null
})

const displayText = computed(() => {
  return props.text || organization.value?.name || ''
})

const fallbackText = computed(() => {
  return props.text || props.orgName || props.orgKey || ''
})
</script>

<style scoped>
.org-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.org-link:hover {
  color: var(--color-accent-light);
  text-decoration: underline;
}

.org-link.with-icon {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(13, 148, 136, 0.08);
  border-radius: var(--radius-sm);
}

.org-link.with-icon:hover {
  background: rgba(13, 148, 136, 0.12);
  text-decoration: none;
}

.org-icon {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}

.org-name {
  white-space: nowrap;
}

.external-icon {
  width: 12px;
  height: 12px;
  opacity: 0.6;
  flex-shrink: 0;
}

.org-link:hover .external-icon {
  opacity: 1;
}

.org-missing {
  color: var(--color-text-light);
  cursor: default;
}

/* Type-specific styling */
.org-type-standards_body {
  font-weight: var(--font-weight-medium);
}

.org-type-foundation {
  font-weight: var(--font-weight-medium);
}
</style>
