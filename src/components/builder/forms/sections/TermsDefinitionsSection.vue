<script setup>
/**
 * TermsDefinitionsSection - Terms and definitions form section
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderArray from '@/components/builder/fields/BuilderArray.vue'

const { specification, updateField } = useRegisterSpecification()

const itemFields = [
  { key: 'term', type: 'text', label: 'Term', placeholder: 'e.g., unit of measure' },
  { key: 'definition', type: 'textarea', label: 'Definition', placeholder: 'Define the term...' },
  { key: 'source', type: 'text', label: 'Source', placeholder: 'Optional: where this definition comes from' }
]

function handleUpdate(value) {
  updateField('termsAndDefinitions', '', value)
}
</script>

<template>
  <div class="section-form">
    <p class="section-intro">
      Add custom terms and definitions used in this specification. Standard terms from ISO 19135 are assumed.
    </p>

    <BuilderArray
      :model-value="specification.termsAndDefinitions"
      label="Terms and Definitions"
      item-label="Term"
      :item-fields="itemFields"
      hint="Define any custom terminology specific to this register."
      @update:model-value="handleUpdate"
    />
  </div>
</template>

<style scoped>
.section-form {
  max-width: 800px;
}

.section-intro {
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
}
</style>
