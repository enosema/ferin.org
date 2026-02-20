<script setup>
/**
 * OtherInformationSection - Other information form section
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderInput from '@/components/builder/fields/BuilderInput.vue'
import BuilderTextarea from '@/components/builder/fields/BuilderTextarea.vue'

const { specification, updateField } = useRegisterSpecification()

function handleUpdate(field, value) {
  updateField('otherInformation', field, value)
}

function handleContactUpdate(field, value) {
  updateField('otherInformation', `contact.${field}`, value)
}
</script>

<template>
  <div class="section-form">
    <BuilderInput
      :model-value="specification.otherInformation?.operator"
      label="Operator"
      placeholder="e.g., RUM Committee"
      hint="Organization that operates the register"
      @update:model-value="handleUpdate('operator', $event)"
    />

    <!-- Contact Information -->
    <div class="subsection">
      <h3 class="subsection-title">Contact Information</h3>

      <BuilderInput
        :model-value="specification.otherInformation?.contact?.name"
        label="Contact Name"
        placeholder="Name or title"
        @update:model-value="handleContactUpdate('name', $event)"
      />

      <div class="form-row">
        <BuilderInput
          :model-value="specification.otherInformation?.contact?.email"
          label="Email"
          type="email"
          placeholder="contact@example.com"
          @update:model-value="handleContactUpdate('email', $event)"
        />

        <BuilderInput
          :model-value="specification.otherInformation?.contact?.phone"
          label="Phone"
          type="tel"
          placeholder="+1 234 567 8900"
          @update:model-value="handleContactUpdate('phone', $event)"
        />
      </div>

      <BuilderInput
        :model-value="specification.otherInformation?.contact?.address"
        label="Address"
        placeholder="Full address"
        @update:model-value="handleContactUpdate('address', $event)"
      />
    </div>

    <BuilderInput
      :model-value="specification.otherInformation?.accessLocation"
      label="Access Location (URL)"
      type="url"
      placeholder="https://www.example.com/register"
      hint="URL where the register can be accessed"
      @update:model-value="handleUpdate('accessLocation', $event)"
    />

    <BuilderTextarea
      :model-value="specification.otherInformation?.additionalInformation"
      label="Additional Information"
      placeholder="Any other relevant information about the register..."
      :rows="4"
      @update:model-value="handleUpdate('additionalInformation', $event)"
    />
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
