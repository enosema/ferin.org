<script setup>
/**
 * CommitmentsSection - Register commitments form section
 *
 * Based on ISO 19135:2025 requirements for:
 * - Access commitments
 * - Persistence commitments
 * - Transparency commitments
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderInput from '@/components/builder/fields/BuilderInput.vue'
import BuilderTextarea from '@/components/builder/fields/BuilderTextarea.vue'

const { specification, updateField } = useRegisterSpecification()

function handleUpdate(category, field, value) {
  updateField('commitments', `${category}.${field}`, value)
}
</script>

<template>
  <div class="section-form">
    <p class="section-intro">
      Define the commitments your register makes regarding access, persistence, and transparency.
      These commitments are important for users to understand what they can expect from the register.
    </p>

    <!-- Access Commitments -->
    <div class="subsection">
      <h3 class="subsection-title">
        Access Commitments
        <span class="required-marker">*</span>
      </h3>
      <p class="subsection-hint">
        What commitments does the register make about accessibility?
      </p>

      <div class="commitment-card">
        <label class="checkbox-label prominent">
          <input
            :checked="specification.commitments?.access?.publiclyAccessible"
            type="checkbox"
            @change="handleUpdate('access', 'publiclyAccessible', $event.target.checked)"
          />
          <span>Register content is publicly accessible</span>
        </label>

        <BuilderInput
          :model-value="specification.commitments?.access?.accessMechanism"
          label="Access Mechanism"
          placeholder="e.g., Web interface, REST API, download"
          hint="How users can access the register content"
          @update:model-value="value => handleUpdate('access', 'accessMechanism', value)"
        />

        <BuilderTextarea
          :model-value="specification.commitments?.access?.accessConstraints"
          label="Access Constraints"
          placeholder="Describe any limitations on access (e.g., registration required, rate limits)"
          :rows="2"
          @update:model-value="value => handleUpdate('access', 'accessConstraints', value)"
        />
      </div>
    </div>

    <!-- Persistence Commitments -->
    <div class="subsection">
      <h3 class="subsection-title">
        Persistence Commitments
        <span class="required-marker">*</span>
      </h3>
      <p class="subsection-hint">
        What commitments does the register make about data persistence?
      </p>

      <div class="commitment-card">
        <BuilderTextarea
          :model-value="specification.commitments?.persistence?.identifierPersistence"
          label="Identifier Persistence"
          placeholder="e.g., Identifiers are permanent and will never be reassigned to different items"
          hint="Commitment regarding identifier stability"
          :rows="2"
          @update:model-value="value => handleUpdate('persistence', 'identifierPersistence', value)"
        />

        <BuilderTextarea
          :model-value="specification.commitments?.persistence?.contentPersistence"
          label="Content Persistence"
          placeholder="e.g., All versions of content are retained and remain accessible"
          hint="Commitment regarding content retention"
          :rows="2"
          @update:model-value="value => handleUpdate('persistence', 'contentPersistence', value)"
        />

        <BuilderTextarea
          :model-value="specification.commitments?.persistence?.historyRetention"
          label="History Retention"
          placeholder="e.g., Complete change history is maintained and accessible"
          hint="Commitment regarding change history"
          :rows="2"
          @update:model-value="value => handleUpdate('persistence', 'historyRetention', value)"
        />
      </div>
    </div>

    <!-- Transparency Commitments -->
    <div class="subsection">
      <h3 class="subsection-title">
        Transparency Commitments
        <span class="required-marker">*</span>
      </h3>
      <p class="subsection-hint">
        What commitments does the register make about transparency?
      </p>

      <div class="commitment-card">
        <label class="checkbox-label">
          <input
            :checked="specification.commitments?.transparency?.changeLogProvided"
            type="checkbox"
            @change="handleUpdate('transparency', 'changeLogProvided', $event.target.checked)"
          />
          <span>Change log is provided and accessible</span>
        </label>

        <label class="checkbox-label">
          <input
            :checked="specification.commitments?.transparency?.deliberationPublic"
            type="checkbox"
            @change="handleUpdate('transparency', 'deliberationPublic', $event.target.checked)"
          />
          <span>Control body deliberations are public</span>
        </label>

        <label class="checkbox-label">
          <input
            :checked="specification.commitments?.transparency?.appealProcessDocumented"
            type="checkbox"
            @change="handleUpdate('transparency', 'appealProcessDocumented', $event.target.checked)"
          />
          <span>Appeal process is documented and available</span>
        </label>
      </div>
    </div>
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

.subsection {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-accent);
}

.subsection-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin: 0 0 var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.required-marker {
  color: var(--color-error);
  font-size: var(--font-size-base);
}

.subsection-hint {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-md);
}

.commitment-card {
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
  font-size: var(--font-size-base);
  color: var(--color-text);
  cursor: pointer;
}

.checkbox-label.prominent {
  font-weight: var(--font-weight-semibold);
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--spacing-md);
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--color-accent);
}

/* Dark mode */
[data-theme="dark"] .commitment-card {
  background: rgba(255, 255, 255, 0.02);
}
</style>
