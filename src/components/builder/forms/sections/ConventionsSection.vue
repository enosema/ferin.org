<script setup>
/**
 * ConventionsSection - Identifier and versioning conventions form section
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderInput from '@/components/builder/fields/BuilderInput.vue'
import BuilderTextarea from '@/components/builder/fields/BuilderTextarea.vue'
import BuilderSelect from '@/components/builder/fields/BuilderSelect.vue'

const { specification, updateField } = useRegisterSpecification()

const versioningOptions = [
  { value: 'semantic', label: 'Semantic (major.minor.patch)' },
  { value: 'date-based', label: 'Date-based' },
  { value: 'sequential', label: 'Sequential' },
  { value: 'custom', label: 'Custom' }
]

function handleUpdate(section, field, value) {
  updateField('conventions', `${section}.${field}`, value)
}
</script>

<template>
  <div class="section-form">
    <!-- Identifier Scheme -->
    <div class="subsection">
      <h3 class="subsection-title">Identifier Scheme</h3>

      <BuilderInput
        :model-value="specification.conventions?.identifierScheme?.format"
        label="Identifier Format"
        placeholder="e.g., urn:example:register:{type}:{id}"
        hint="Pattern or format for identifiers"
        @update:model-value="handleUpdate('identifierScheme', 'format', $event)"
      />

      <BuilderTextarea
        :model-value="specification.conventions?.identifierScheme?.assignmentRules"
        label="Assignment Rules"
        placeholder="Describe how identifiers are assigned..."
        hint="Rules for identifier assignment"
        :rows="3"
        @update:model-value="handleUpdate('identifierScheme', 'assignmentRules', $event)"
      />

      <BuilderInput
        :model-value="specification.conventions?.identifierScheme?.persistencePolicy"
        label="Persistence Policy"
        placeholder="e.g., Identifiers are persistent and never reassigned"
        hint="Policy on identifier persistence"
        @update:model-value="handleUpdate('identifierScheme', 'persistencePolicy', $event)"
      />
    </div>

    <!-- Versioning Scheme -->
    <div class="subsection">
      <h3 class="subsection-title">Versioning Scheme</h3>

      <BuilderSelect
        :model-value="specification.conventions?.versioningScheme?.scheme"
        label="Scheme Type"
        :options="versioningOptions"
        hint="How versions are managed"
        @update:model-value="handleUpdate('versioningScheme', 'scheme', $event)"
      />

      <BuilderTextarea
        :model-value="specification.conventions?.versioningScheme?.majorChangeCriteria"
        label="Major Change Criteria"
        placeholder="What constitutes a major (breaking) change..."
        hint="Changes that require a major version bump"
        :rows="3"
        @update:model-value="handleUpdate('versioningScheme', 'majorChangeCriteria', $event)"
      />

      <BuilderTextarea
        :model-value="specification.conventions?.versioningScheme?.minorChangeCriteria"
        label="Minor Change Criteria"
        placeholder="What constitutes a minor (non-breaking) change..."
        hint="Changes that require a minor version bump"
        :rows="3"
        @update:model-value="handleUpdate('versioningScheme', 'minorChangeCriteria', $event)"
      />

      <BuilderInput
        :model-value="specification.conventions?.versioningScheme?.compatibilityPolicy"
        label="Compatibility Policy"
        placeholder="Policy for maintaining backward compatibility..."
        @update:model-value="handleUpdate('versioningScheme', 'compatibilityPolicy', $event)"
      />
    </div>

    <!-- Temporal Applicability -->
    <div class="subsection">
      <h3 class="subsection-title">Temporal Applicability</h3>

      <BuilderInput
        :model-value="specification.conventions?.temporalApplicability?.format"
        label="Date/Time Format"
        placeholder="e.g., ISO 8601"
        hint="Format for time-based validity"
        @update:model-value="handleUpdate('temporalApplicability', 'format', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.section-form {
  max-width: 800px;
}

.subsection {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.subsection-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin: 0 0 var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
}
</style>
