<script setup>
/**
 * BuilderSelect - Dropdown select for the builder forms
 */
import { ref, computed } from 'vue'

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
    default: () => `select-${Math.random().toString(36).substr(2, 9)}`
  },
  options: {
    type: Array,
    default: () => []
    // Array of { value, label } objects
  },
  placeholder: {
    type: String,
    default: 'Select an option'
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
  },
  searchable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const searchQuery = ref('')
const selectRef = ref(null)

// Filtered options for search
const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) {
    return props.options
  }
  const query = searchQuery.value.toLowerCase()
  return props.options.filter(opt =>
    opt.label?.toLowerCase().includes(query) ||
    String(opt.value).toLowerCase().includes(query)
  )
})

// Selected option label
const selectedLabel = computed(() => {
  const selected = props.options.find(opt => opt.value === props.modelValue)
  return selected?.label || props.placeholder
})

function handleSelect(value) {
  emit('update:modelValue', value)
  isOpen.value = false
  searchQuery.value = ''
}

function toggleDropdown() {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
    if (isOpen.value && props.searchable) {
      // Focus search input when opened
      setTimeout(() => {
        selectRef.value?.querySelector('.search-input')?.focus()
      }, 0)
    }
  }
}

function closeDropdown() {
  isOpen.value = false
  searchQuery.value = ''
}
</script>

<template>
  <div
    ref="selectRef"
    class="builder-field"
    :class="{ 'has-error': error, 'is-open': isOpen }"
    v-click-outside="closeDropdown"
  >
    <label :for="id" class="field-label">
      {{ label }}
      <span v-if="required" class="required-marker" title="Required">*</span>
    </label>

    <div class="select-wrapper">
      <button
        :id="id"
        type="button"
        class="select-trigger"
        :disabled="disabled"
        @click="toggleDropdown"
      >
        <span :class="{ 'placeholder': !modelValue }">{{ selectedLabel }}</span>
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <transition name="dropdown">
        <div v-if="isOpen" class="select-dropdown">
          <!-- Search input -->
          <div v-if="searchable" class="search-wrapper">
            <input
              v-model="searchQuery"
              type="text"
              class="search-input"
              placeholder="Search..."
            />
          </div>

          <!-- Options list -->
          <div class="options-list">
            <button
              v-for="option in filteredOptions"
              :key="option.value"
              type="button"
              class="option-item"
              :class="{ 'selected': option.value === modelValue }"
              @click="handleSelect(option.value)"
            >
              {{ option.label }}
              <svg v-if="option.value === modelValue" class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <div v-if="filteredOptions.length === 0" class="no-results">
              No options found
            </div>
          </div>
        </div>
      </transition>
    </div>

    <transition name="shake">
      <span v-if="error" class="field-error">{{ error }}</span>
    </transition>

    <p v-if="hint && !error" class="field-hint">{{ hint }}</p>
  </div>
</template>

<script>
// Click outside directive
export default {
  directives: {
    'click-outside': {
      mounted(el, binding) {
        el._clickOutside = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value()
          }
        }
        document.addEventListener('click', el._clickOutside)
      },
      unmounted(el) {
        document.removeEventListener('click', el._clickOutside)
      }
    }
  }
}
</script>

<style scoped>
.builder-field {
  margin-bottom: var(--spacing-lg);
  position: relative;
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

.select-wrapper {
  position: relative;
}

.select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-base);
  font-family: var(--font-sans);
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  text-align: left;
}

.select-trigger:hover {
  border-color: var(--color-accent);
}

.select-trigger:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15);
}

.select-trigger:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.is-open .select-trigger {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.15);
}

.placeholder {
  color: var(--color-text-light);
  opacity: 0.6;
}

.chevron {
  width: 16px;
  height: 16px;
  color: var(--color-text-light);
  transition: transform var(--transition-fast);
}

.is-open .chevron {
  transform: rotate(180deg);
}

/* Dropdown */
.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: var(--spacing-xs);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  z-index: 10;
  max-height: 250px;
  overflow: hidden;
}

.search-wrapper {
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
}

.search-input {
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-glass);
  color: var(--color-text);
}

.search-input:focus {
  outline: none;
  border-color: var(--color-accent);
}

.options-list {
  overflow-y: auto;
  max-height: 200px;
}

.option-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  text-align: left;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.option-item:hover {
  background: var(--color-glass-dark);
}

.option-item.selected {
  background: rgba(34, 211, 238, 0.1);
  color: var(--color-accent);
}

.check-icon {
  width: 14px;
  height: 14px;
  color: var(--color-accent);
}

.no-results {
  padding: var(--spacing-md);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
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

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
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
[data-theme="dark"] .select-trigger,
[data-theme="dark"] .select-dropdown {
  background: rgba(255, 255, 255, 0.05);
}
</style>
