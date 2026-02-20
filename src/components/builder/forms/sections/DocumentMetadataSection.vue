<script setup>
/**
 * DocumentMetadataSection - Document metadata form section
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderInput from '@/components/builder/fields/BuilderInput.vue'
import BuilderSelect from '@/components/builder/fields/BuilderSelect.vue'

const { specification, updateField } = useRegisterSpecification()

const statusOptions = [
  { value: 'draft', label: 'Draft' },
  { value: 'final', label: 'Final' },
  { value: 'superseded', label: 'Superseded' },
  { value: 'withdrawn', label: 'Withdrawn' }
]

function handleUpdate(field, value) {
  updateField('documentMetadata', field, value)
}
</script>

<template>
  <div class="section-form">
    <BuilderInput
      :model-value="specification.documentMetadata?.title"
      label="Specification Title"
      placeholder="e.g., Register of Units of Measure Specification"
      hint="Full title of this register specification document"
      required
      @update:model-value="handleUpdate('title', $event)"
    />

    <div class="form-row">
      <BuilderInput
        :model-value="specification.documentMetadata?.abbreviation"
        label="Abbreviation"
        placeholder="e.g., RUM"
        hint="Short name or acronym"
        @update:model-value="handleUpdate('abbreviation', $event)"
      />

      <BuilderInput
        :model-value="specification.documentMetadata?.version"
        label="Version"
        placeholder="1.0.0"
        hint="Specification version (major.minor.patch)"
        @update:model-value="handleUpdate('version', $event)"
      />
    </div>

    <BuilderInput
      :model-value="specification.documentMetadata?.identifier"
      label="Document Identifier"
      placeholder="e.g., urn:example:reg-spec:rum:1.0.0"
      hint="Unique identifier for this specification"
      @update:model-value="handleUpdate('identifier', $event)"
    />

    <div class="form-row">
      <BuilderInput
        :model-value="specification.documentMetadata?.date"
        label="Document Date"
        type="date"
        @update:model-value="handleUpdate('date', $event)"
      />

      <BuilderSelect
        :model-value="specification.documentMetadata?.status"
        label="Document Status"
        :options="statusOptions"
        @update:model-value="handleUpdate('status', $event)"
      />
    </div>

    <BuilderInput
      :model-value="specification.documentMetadata?.organization"
      label="Responsible Organization"
      placeholder="e.g., RUM Committee"
      hint="Organization responsible for this specification"
      @update:model-value="handleUpdate('organization', $event)"
    />
  </div>
</template>

<style scoped>
.section-form {
  max-width: 800px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
