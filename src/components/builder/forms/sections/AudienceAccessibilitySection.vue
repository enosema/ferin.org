<script setup>
/**
 * AudienceAccessibilitySection - Audience and accessibility form section
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderInput from '@/components/builder/fields/BuilderInput.vue'
import BuilderTextarea from '@/components/builder/fields/BuilderTextarea.vue'
import BuilderSelect from '@/components/builder/fields/BuilderSelect.vue'

const { specification, updateField } = useRegisterSpecification()

const accessLevelOptions = [
  { value: 'public', label: 'Public' },
  { value: 'restricted', label: 'Restricted' },
  { value: 'private', label: 'Private' }
]

function handleUpdate(field, value) {
  updateField('audienceAndAccessibility', field, value)
}

function addTargetAudience() {
  const current = specification.audienceAndAccessibility?.targetAudience || []
  handleUpdate('targetAudience', [...current, ''])
}

function updateTargetAudience(index, value) {
  const current = [...(specification.audienceAndAccessibility?.targetAudience || [])]
  current[index] = value
  handleUpdate('targetAudience', current)
}

function removeTargetAudience(index) {
  const current = [...(specification.audienceAndAccessibility?.targetAudience || [])]
  current.splice(index, 1)
  handleUpdate('targetAudience', current)
}

function addLanguage() {
  const current = specification.audienceAndAccessibility?.languagesSupported || []
  handleUpdate('languagesSupported', [...current, ''])
}

function updateLanguage(index, value) {
  const current = [...(specification.audienceAndAccessibility?.languagesSupported || [])]
  current[index] = value
  handleUpdate('languagesSupported', current)
}

function removeLanguage(index) {
  const current = [...(specification.audienceAndAccessibility?.languagesSupported || [])]
  current.splice(index, 1)
  handleUpdate('languagesSupported', current)
}
</script>

<template>
  <div class="section-form">
    <!-- Target Audience -->
    <div class="field-wrapper">
      <label class="field-label">Target Audience</label>
      <p class="field-hint">Categories of intended users</p>

      <div class="items-list">
        <div
          v-for="(audience, index) in specification.audienceAndAccessibility?.targetAudience || []"
          :key="index"
          class="item-row"
        >
          <input
            :value="audience"
            type="text"
            class="item-input"
            placeholder="e.g., Standards developers"
            @input="updateTargetAudience(index, $event.target.value)"
          />
          <button
            type="button"
            class="remove-btn"
            @click="removeTargetAudience(index)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <button type="button" class="add-btn" @click="addTargetAudience">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Add Audience
      </button>
    </div>

    <BuilderSelect
      :model-value="specification.audienceAndAccessibility?.accessLevel"
      label="Access Level"
      :options="accessLevelOptions"
      hint="Who can access this register?"
      @update:model-value="handleUpdate('accessLevel', $event)"
    />

    <BuilderTextarea
      :model-value="specification.audienceAndAccessibility?.accessibilityRequirements"
      label="Accessibility Requirements"
      placeholder="e.g., Compliant with Section 508(c) for access impaired individuals"
      hint="Accessibility standards or guidelines followed"
      :rows="3"
      @update:model-value="handleUpdate('accessibilityRequirements', $event)"
    />

    <!-- Languages -->
    <div class="field-wrapper">
      <label class="field-label">Languages Supported</label>
      <p class="field-hint">Languages the register content is available in</p>

      <div class="items-list">
        <div
          v-for="(lang, index) in specification.audienceAndAccessibility?.languagesSupported || []"
          :key="index"
          class="item-row"
        >
          <input
            :value="lang"
            type="text"
            class="item-input"
            placeholder="e.g., en"
            @input="updateLanguage(index, $event.target.value)"
          />
          <button
            type="button"
            class="remove-btn"
            @click="removeLanguage(index)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <button type="button" class="add-btn" @click="addLanguage">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Add Language
      </button>
    </div>
  </div>
</template>

<style scoped>
.section-form {
  max-width: 800px;
}

.field-wrapper {
  margin-bottom: var(--spacing-lg);
}

.field-label {
  display: block;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xs);
}

.field-hint {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-sm);
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.item-row {
  display: flex;
  gap: var(--spacing-sm);
}

.item-input {
  flex: 1;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-base);
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.item-input:focus {
  outline: none;
  border-color: var(--color-accent);
}

.remove-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.remove-btn:hover {
  background: rgba(220, 38, 38, 0.1);
  border-color: var(--color-error);
}

.remove-btn svg {
  width: 16px;
  height: 16px;
  color: var(--color-error);
}

.add-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.add-btn:hover {
  background: rgba(34, 211, 238, 0.2);
  border-color: var(--color-accent);
}

.add-btn svg {
  width: 16px;
  height: 16px;
}
</style>
