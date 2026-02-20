<script setup>
/**
 * BibliographySection - Bibliography form section
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderArray from '@/components/builder/fields/BuilderArray.vue'

const { specification, updateField } = useRegisterSpecification()

const itemFields = [
  { key: 'identifier', type: 'text', label: 'Identifier', placeholder: 'e.g., RFC 3986' },
  { key: 'title', type: 'text', label: 'Title', placeholder: 'Title of the reference' },
  { key: 'url', type: 'url', label: 'URL', placeholder: 'https://...' }
]

function handleUpdate(value) {
  updateField('bibliography', '', value)
}
</script>

<template>
  <div class="section-form">
    <p class="section-intro">
      Add informative references that provide additional context but are not mandatory for implementation.
      These differ from normative references which are required.
    </p>

    <BuilderArray
      :model-value="specification.bibliography"
      label="Bibliographic Entries"
      item-label="Entry"
      :item-fields="itemFields"
      hint="Informative references for further reading"
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
