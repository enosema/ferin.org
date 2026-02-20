<script setup>
/**
 * ScopeSection - Scope form section
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderTextarea from '@/components/builder/fields/BuilderTextarea.vue'
import BuilderArray from '@/components/builder/fields/BuilderArray.vue'

const { specification, updateField, addArrayItem, removeArrayItem, updateArrayItem } = useRegisterSpecification()

function handleUpdate(field, value) {
  updateField('scope', field, value)
}

function addTargetUser() {
  const users = [...(specification.scope?.targetUsers || []), '']
  updateField('scope', 'targetUsers', users)
}

function updateTargetUser(index, value) {
  const users = [...(specification.scope?.targetUsers || [])]
  users[index] = value
  updateField('scope', 'targetUsers', users)
}

function removeTargetUser(index) {
  const users = [...(specification.scope?.targetUsers || [])]
  users.splice(index, 1)
  updateField('scope', 'targetUsers', users)
}
</script>

<template>
  <div class="section-form">
    <BuilderTextarea
      :model-value="specification.scope?.purpose"
      label="Purpose"
      placeholder="Describe the overall purpose and intent of this register..."
      hint="What is the main goal of this register? What problem does it solve?"
      required
      :rows="4"
      @update:model-value="handleUpdate('purpose', $event)"
    />

    <BuilderTextarea
      :model-value="specification.scope?.contentIncluded"
      label="Content Included"
      placeholder="Describe what types of content are included in this register..."
      hint="What items, concepts, or data will be managed in this register?"
      :rows="4"
      @update:model-value="handleUpdate('contentIncluded', $event)"
    />

    <BuilderTextarea
      :model-value="specification.scope?.contentExcluded"
      label="Content Excluded"
      placeholder="Describe what is explicitly excluded from this register..."
      hint="What items or content are NOT part of this register?"
      :rows="3"
      @update:model-value="handleUpdate('contentExcluded', $event)"
    />

    <!-- Target Users -->
    <div class="field-wrapper">
      <label class="field-label">Target Users</label>
      <p class="field-hint">Categories of users this register serves</p>

      <div class="items-list">
        <div
          v-for="(user, index) in specification.scope?.targetUsers || []"
          :key="index"
          class="item-row"
        >
          <input
            :value="user"
            type="text"
            class="item-input"
            placeholder="e.g., Standards developers"
            @input="updateTargetUser(index, $event.target.value)"
          />
          <button
            type="button"
            class="remove-btn"
            @click="removeTargetUser(index)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <button type="button" class="add-btn" @click="addTargetUser">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Add Target User
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
