<script setup>
/**
 * BuilderInput - Text input field for the builder forms
 */
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'blur'])

const isFocused = ref(false)

function handleInput(event) {
  const value = props.type === 'number' ? parseFloat(event.target.value) : event.target.value
  emit('update:modelValue', value)
}

function handleBlur() {
  emit('blur')
  isFocused.value = false
}
</script>

<template>
  <div class="builder-field" :class="{ 'has-error': error, 'is-focused': isFocused }">
    <label :for="id" class="field-label">
      {{ label }}
      <span v-if="required" class="required-marker" title="Required">*</span>
    </label>

    <div class="field-input-wrapper">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="field-input"
        @input="handleInput"
        @focus="isFocused = true"
        @blur="handleBlur"
      />

      <transition name="shake">
        <span v-if="error" class="field-error">{{ error }}</span>
      </transition>
    </div>

    <p v-if="hint && !error" class="field-hint">{{ hint }}</p>
  </div>
</template>

<style scoped>
.builder-field {
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

.required-marker {
  color: var(--color-error);
  margin-left: 2px;
}

.field-input-wrapper {
  position: relative;
}

.field-input {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-base);
  font-family: var(--font-sans);
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.field-input::placeholder {
  color: var(--color-text-light);
  opacity: 0.6;
}

.field-input:hover {
  border-color: var(--color-accent);
}

.field-input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15);
}

.field-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.has-error .field-input {
  border-color: var(--color-error);
}

.has-error .field-input:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
}

.field-error {
  display: block;
  margin-top: var(--spacing-xs);
  font-size: var(--font-size-xs);
  color: var(--color-error);
}

.field-hint {
  margin-top: var(--spacing-xs);
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

/* Shake animation */
.shake-enter-active {
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* Dark mode */
[data-theme="dark"] .field-input {
  background: rgba(255, 255, 255, 0.05);
}
</style>
