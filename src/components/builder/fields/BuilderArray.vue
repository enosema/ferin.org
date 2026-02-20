<script setup>
/**
 * BuilderArray - Dynamic array/list editor for the builder forms
 *
 * Supports adding, removing, and reordering items
 */
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  label: {
    type: String,
    required: true
  },
  itemLabel: {
    type: String,
    default: 'Item'
  },
  itemFields: {
    type: Array,
    default: () => []
    // Array of field definitions: { key, type, label, placeholder, options }
  },
  hint: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  maxItems: {
    type: Number,
    default: null
  },
  minItems: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:modelValue'])

const canAdd = computed(() => {
  return !props.maxItems || props.modelValue.length < props.maxItems
})

const canRemove = computed(() => {
  return props.modelValue.length > props.minItems
})

function addItem() {
  if (!canAdd.value) return

  const newItem = {}
  props.itemFields.forEach(field => {
    if (field.type === 'boolean') {
      newItem[field.key] = false
    } else if (field.type === 'array') {
      newItem[field.key] = []
    } else {
      newItem[field.key] = ''
    }
  })

  emit('update:modelValue', [...props.modelValue, newItem])
}

function removeItem(index) {
  if (!canRemove.value) return

  const newValue = [...props.modelValue]
  newValue.splice(index, 1)
  emit('update:modelValue', newValue)
}

function updateItem(index, fieldKey, value) {
  const newValue = [...props.modelValue]
  newValue[index] = { ...newValue[index], [fieldKey]: value }
  emit('update:modelValue', newValue)
}

function moveItem(index, direction) {
  const newIndex = direction === 'up' ? index - 1 : index + 1
  if (newIndex < 0 || newIndex >= props.modelValue.length) return

  const newValue = [...props.modelValue]
  const [item] = newValue.splice(index, 1)
  newValue.splice(newIndex, 0, item)
  emit('update:modelValue', newValue)
}
</script>

<template>
  <div class="builder-array">
    <div class="array-header">
      <label class="field-label">
        {{ label }}
        <span v-if="required" class="required-marker" title="Required">*</span>
      </label>
      <button
        type="button"
        class="add-button"
        :disabled="!canAdd"
        @click="addItem"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Add {{ itemLabel }}
      </button>
    </div>

    <p v-if="hint" class="field-hint">{{ hint }}</p>

    <!-- Items list -->
    <div class="items-list">
      <div
        v-for="(item, index) in modelValue"
        :key="index"
        class="array-item"
      >
        <div class="item-header">
          <span class="item-number">{{ index + 1 }}</span>
          <span class="item-title">{{ itemLabel }}</span>
          <div class="item-actions">
            <button
              type="button"
              class="action-btn"
              :disabled="index === 0"
              @click="moveItem(index, 'up')"
              title="Move up"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 15l7-7 7 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button
              type="button"
              class="action-btn"
              :disabled="index === modelValue.length - 1"
              @click="moveItem(index, 'down')"
              title="Move down"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button
              type="button"
              class="action-btn delete"
              :disabled="!canRemove"
              @click="removeItem(index)"
              title="Remove"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="item-content">
          <template v-for="field in itemFields" :key="field.key">
            <!-- Text input -->
            <div v-if="field.type === 'text'" class="item-field">
              <label class="item-field-label">{{ field.label }}</label>
              <input
                type="text"
                :value="item[field.key]"
                :placeholder="field.placeholder"
                class="item-field-input"
                @input="updateItem(index, field.key, $event.target.value)"
              />
            </div>

            <!-- Textarea -->
            <div v-else-if="field.type === 'textarea'" class="item-field full-width">
              <label class="item-field-label">{{ field.label }}</label>
              <textarea
                :value="item[field.key]"
                :placeholder="field.placeholder"
                rows="2"
                class="item-field-textarea"
                @input="updateItem(index, field.key, $event.target.value)"
              ></textarea>
            </div>

            <!-- Select -->
            <div v-else-if="field.type === 'select'" class="item-field">
              <label class="item-field-label">{{ field.label }}</label>
              <select
                :value="item[field.key]"
                class="item-field-select"
                @change="updateItem(index, field.key, $event.target.value)"
              >
                <option value="">Select...</option>
                <option
                  v-for="opt in field.options"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
            </div>

            <!-- URL input -->
            <div v-else-if="field.type === 'url'" class="item-field">
              <label class="item-field-label">{{ field.label }}</label>
              <input
                type="url"
                :value="item[field.key]"
                :placeholder="field.placeholder || 'https://...'"
                class="item-field-input"
                @input="updateItem(index, field.key, $event.target.value)"
              />
            </div>

            <!-- Default: text -->
            <div v-else class="item-field">
              <label class="item-field-label">{{ field.label }}</label>
              <input
                type="text"
                :value="item[field.key]"
                :placeholder="field.placeholder"
                class="item-field-input"
                @input="updateItem(index, field.key, $event.target.value)"
              />
            </div>
          </template>

          <!-- Default slot for custom content -->
          <slot
            name="item"
            :item="item"
            :index="index"
            :update="updateItem"
          ></slot>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="modelValue.length === 0" class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>No {{ itemLabel.toLowerCase() }}s added yet</p>
        <button type="button" class="add-button large" @click="addItem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Add your first {{ itemLabel.toLowerCase() }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.builder-array {
  margin-bottom: var(--spacing-lg);
}

.array-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.field-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
}

.required-marker {
  color: var(--color-error);
  margin-left: 2px;
}

.add-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.add-button:hover:not(:disabled) {
  background: rgba(34, 211, 238, 0.2);
  border-color: var(--color-accent);
}

.add-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.add-button svg {
  width: 14px;
  height: 14px;
}

.add-button.large {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
}

.add-button.large svg {
  width: 16px;
  height: 16px;
}

.field-hint {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

/* Items list */
.items-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.array-item {
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.item-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.item-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-light);
  background: var(--color-border);
  border-radius: var(--radius-full);
}

.item-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.item-actions {
  margin-left: auto;
  display: flex;
  gap: var(--spacing-xs);
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.action-btn:hover:not(:disabled) {
  background: var(--color-glass-dark);
  border-color: var(--color-accent);
}

.action-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.action-btn svg {
  width: 14px;
  height: 14px;
  color: var(--color-text-light);
}

.action-btn.delete:hover:not(:disabled) {
  border-color: var(--color-error);
}

.action-btn.delete:hover:not(:disabled) svg {
  color: var(--color-error);
}

.item-content {
  padding: var(--spacing-md);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm) var(--spacing-md);
}

.item-field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.item-field.full-width {
  grid-column: 1 / -1;
}

.item-field-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-light);
}

.item-field-input,
.item-field-textarea,
.item-field-select {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  font-family: var(--font-sans);
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.item-field-input:focus,
.item-field-textarea:focus,
.item-field-select:focus {
  outline: none;
  border-color: var(--color-accent);
}

.item-field-textarea {
  resize: vertical;
  min-height: 60px;
}

/* Empty state */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-xl);
  background: var(--color-glass);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-md);
  text-align: center;
}

.empty-state svg {
  width: 48px;
  height: 48px;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  opacity: 0.5;
}

.empty-state p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

/* Responsive */
@media (max-width: 768px) {
  .item-content {
    grid-template-columns: 1fr;
  }

  .array-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
}

/* Dark mode */
[data-theme="dark"] .array-item {
  background: rgba(255, 255, 255, 0.03);
}

[data-theme="dark"] .item-field-input,
[data-theme="dark"] .item-field-textarea,
[data-theme="dark"] .item-field-select {
  background: rgba(255, 255, 255, 0.05);
}
</style>
