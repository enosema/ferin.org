<script setup>
/**
 * FormBuilder - Container for section form components
 *
 * Renders the appropriate form section based on active section
 */
import { computed } from 'vue'

// Section components
import DocumentMetadataSection from './sections/DocumentMetadataSection.vue'
import ScopeSection from './sections/ScopeSection.vue'
import NormativeReferencesSection from './sections/NormativeReferencesSection.vue'
import TermsDefinitionsSection from './sections/TermsDefinitionsSection.vue'
import ConventionsSection from './sections/ConventionsSection.vue'
import AudienceAccessibilitySection from './sections/AudienceAccessibilitySection.vue'
import RolesResponsibilitiesSection from './sections/RolesResponsibilitiesSection.vue'
import CommitmentsSection from './sections/CommitmentsSection.vue'
import GovernanceProcessesSection from './sections/GovernanceProcessesSection.vue'
import ContentRequirementsSection from './sections/ContentRequirementsSection.vue'
import OtherInformationSection from './sections/OtherInformationSection.vue'
import BibliographySection from './sections/BibliographySection.vue'

const props = defineProps({
  section: {
    type: Object,
    required: true
  },
  sectionIndex: {
    type: Number,
    required: true
  },
  totalSections: {
    type: Number,
    default: 12
  }
})

const emit = defineEmits(['previous', 'next'])

// Map section keys to components
const sectionComponents = {
  documentMetadata: DocumentMetadataSection,
  scope: ScopeSection,
  normativeReferences: NormativeReferencesSection,
  termsAndDefinitions: TermsDefinitionsSection,
  conventions: ConventionsSection,
  audienceAndAccessibility: AudienceAccessibilitySection,
  rolesAndResponsibilities: RolesResponsibilitiesSection,
  commitments: CommitmentsSection,
  governanceProcesses: GovernanceProcessesSection,
  contentRequirements: ContentRequirementsSection,
  otherInformation: OtherInformationSection,
  bibliography: BibliographySection
}

const currentComponent = computed(() => {
  return sectionComponents[props.section?.key] || null
})

// Calculate max section index (0-indexed)
const maxSectionIndex = computed(() => props.totalSections - 1)
</script>

<template>
  <div class="form-builder">
    <div class="form-header">
      <h2 class="form-title">{{ section?.title }}</h2>
      <p v-if="section?.description" class="form-description">
        {{ section.description }}
      </p>
    </div>

    <div class="form-content">
      <component :is="currentComponent" v-if="currentComponent" />

      <div v-else class="no-section">
        <p>Section not found</p>
      </div>
    </div>

    <!-- Navigation buttons -->
    <div class="form-navigation">
      <button
        v-if="sectionIndex > 0"
        type="button"
        class="nav-button prev"
        @click="emit('previous')"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 19l-7-7 7-7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Previous
      </button>

      <div class="spacer"></div>

      <button
        v-if="sectionIndex < maxSectionIndex"
        type="button"
        class="nav-button next"
        @click="emit('next')"
      >
        Next
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.form-builder {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: var(--color-background);
}

.form-header {
  padding: var(--spacing-xl);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-surface);
}

.form-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin: 0 0 var(--spacing-xs);
}

.form-description {
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  margin: 0;
}

.form-content {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-xl);
}

.no-section {
  padding: var(--spacing-xl);
  text-align: center;
  color: var(--color-text-light);
}

/* Navigation */
.form-navigation {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-xl);
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
}

.spacer {
  flex: 1;
}

.nav-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.nav-button:hover {
  background: var(--color-glass-dark);
  border-color: var(--color-accent);
}

.nav-button svg {
  width: 16px;
  height: 16px;
}

.nav-button.next {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-text-inverse);
}

.nav-button.next:hover {
  filter: brightness(1.1);
}

/* Responsive */
@media (max-width: 768px) {
  .form-header {
    padding: var(--spacing-lg);
  }

  .form-content {
    padding: var(--spacing-lg);
  }

  .form-title {
    font-size: var(--font-size-xl);
  }
}

/* Dark mode */
[data-theme="dark"] .form-header,
[data-theme="dark"] .form-navigation {
  background: rgba(0, 0, 0, 0.2);
}
</style>
