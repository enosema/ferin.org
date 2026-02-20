<script setup>
/**
 * NormativeReferencesSection - Normative references form section
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderArray from '@/components/builder/fields/BuilderArray.vue'

const { specification, updateField } = useRegisterSpecification()

const itemFields = [
  { key: 'identifier', type: 'text', label: 'Identifier', placeholder: 'e.g., ISO 19135:2025' },
  { key: 'title', type: 'text', label: 'Title', placeholder: 'Full title of the standard' },
  { key: 'url', type: 'url', label: 'URL', placeholder: 'https://...' }
]

function handleUpdate(value) {
  updateField('normativeReferences', '', value)
}
</script>

<template>
  <div class="section-form">
    <BuilderArray
      :model-value="specification.normativeReferences"
      label="Normative References"
      item-label="Reference"
      :item-fields="itemFields"
      hint="Standards and documents that must be followed. These are mandatory for implementation."
      @update:model-value="handleUpdate"
    />
  </div>
</template>

<style scoped>
.section-form {
  max-width: 800px;
}
</style>
