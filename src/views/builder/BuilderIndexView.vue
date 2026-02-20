<script setup>
/**
 * BuilderIndexView - Landing page for the Register Specification Builder
 *
 * Provides options to:
 * - Create a new specification
 * - Load an existing specification from JSON
 * - View help/documentation
 */
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'

const router = useRouter()
const { resetSpecification, loadSpecification } = useRegisterSpecification()

const isLoading = ref(false)
const error = ref(null)
const fileInputRef = ref(null)

// Create new specification
function handleCreateNew() {
  resetSpecification()
  router.push('/builder/new')
}

// Trigger file input
function handleLoadFile() {
  fileInputRef.value?.click()
}

// Handle file selection
async function handleFileChange(event) {
  const file = event.target.files?.[0]
  if (!file) return

  isLoading.value = true
  error.value = null

  try {
    const text = await file.text()
    const result = loadSpecification(text)

    if (result.success) {
      router.push('/builder/new')
    } else {
      error.value = result.error
    }
  } catch (e) {
    error.value = 'Failed to read file. Please ensure it is a valid JSON file.'
  } finally {
    isLoading.value = false
    // Reset file input
    if (fileInputRef.value) {
      fileInputRef.value.value = ''
    }
  }
}

// Sample specification
function handleLoadSample() {
  // Will load sample later
  router.push('/builder/new')
}
</script>

<template>
  <div class="builder-index">
    <div class="builder-index-content">
      <!-- Hero section -->
      <div class="hero-section">
        <div class="hero-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h1 class="hero-title">Register Specification Builder</h1>
        <p class="hero-description">
          Create ISO 19135 compliant register specifications with our interactive builder.
          Design your register's governance, content requirements, and conventions step by step.
        </p>
      </div>

      <!-- Action cards -->
      <div class="action-cards">
        <!-- Create New -->
        <button class="action-card primary" @click="handleCreateNew">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>Create New Specification</h3>
            <p>Start with a blank specification and build your register configuration step by step.</p>
          </div>
          <div class="card-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </button>

        <!-- Load Existing -->
        <button class="action-card" @click="handleLoadFile" :disabled="isLoading">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>Load Existing Specification</h3>
            <p>Import a previously saved JSON file to continue editing your specification.</p>
          </div>
          <div class="card-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </button>

        <!-- Hidden file input -->
        <input
          ref="fileInputRef"
          type="file"
          accept=".json"
          style="display: none"
          @change="handleFileChange"
        />

        <!-- Load Sample -->
        <button class="action-card" @click="handleLoadSample">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>Load Sample Specification</h3>
            <p>Explore a complete example based on the RUM (Units of Measure) register.</p>
          </div>
          <div class="card-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </button>
      </div>

      <!-- Error message -->
      <div v-if="error" class="error-message">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{ error }}</span>
      </div>

      <!-- Features list -->
      <div class="features-section">
        <h2>What You Can Build</h2>
        <div class="features-grid">
          <div class="feature-item">
            <h4>Define Scope</h4>
            <p>Specify the purpose and boundaries of your register</p>
          </div>
          <div class="feature-item">
            <h4>Assign Roles</h4>
            <p>Configure the six ISO 19135 roles and responsibilities</p>
          </div>
          <div class="feature-item">
            <h4>Set Conventions</h4>
            <p>Define identifier and versioning schemes</p>
          </div>
          <div class="feature-item">
            <h4>Document Processes</h4>
            <p>Describe governance, approval, and content management</p>
          </div>
          <div class="feature-item">
            <h4>Export</h4>
            <p>Generate Metanorma AsciiDoc or Markdown output</p>
          </div>
          <div class="feature-item">
            <h4>Save & Resume</h4>
            <p>Save your work as JSON and continue later</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.builder-index {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl);
  background: var(--color-background);
}

.builder-index-content {
  max-width: 800px;
  width: 100%;
}

/* Hero */
.hero-section {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.hero-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, var(--color-accent), var(--color-primary));
  margin-bottom: var(--spacing-lg);
}

.hero-icon svg {
  width: 40px;
  height: 40px;
  color: white;
}

.hero-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Action cards */
.action-cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.action-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-normal);
  text-align: left;
  width: 100%;
}

.action-card:hover {
  border-color: var(--color-accent);
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.action-card:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.action-card.primary {
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1));
  border-color: var(--color-accent);
}

.action-card.primary:hover {
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(59, 130, 246, 0.2));
}

.card-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--color-glass-dark);
}

.card-icon svg {
  width: 24px;
  height: 24px;
  color: var(--color-accent);
}

.action-card.primary .card-icon {
  background: var(--color-accent);
}

.action-card.primary .card-icon svg {
  color: white;
}

.card-content {
  flex: 1;
}

.card-content h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.card-content p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.card-arrow {
  flex-shrink: 0;
  color: var(--color-text-light);
  transition: transform var(--transition-fast);
}

.action-card:hover .card-arrow {
  transform: translateX(4px);
  color: var(--color-accent);
}

.card-arrow svg {
  width: 20px;
  height: 20px;
}

/* Error message */
.error-message {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: var(--radius-md);
  color: var(--color-error);
  margin-bottom: var(--spacing-xl);
}

.error-message svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

/* Features */
.features-section {
  text-align: center;
}

.features-section h2 {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.feature-item {
  padding: var(--spacing-md);
  background: var(--color-glass);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.feature-item h4 {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.feature-item p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .builder-index {
    padding: var(--spacing-lg);
  }

  .hero-title {
    font-size: var(--font-size-2xl);
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

/* Dark mode */
[data-theme="dark"] .action-card {
  background: rgba(255, 255, 255, 0.05);
}

[data-theme="dark"] .feature-item {
  background: rgba(255, 255, 255, 0.03);
}
</style>
