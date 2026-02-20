<script setup>
/**
 * BuilderView - Main Register Specification Builder Application
 *
 * Full-screen builder interface with three main areas:
 * - Left: Section navigator
 * - Center: Form content
 * - Right: Validation panel
 */
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import { sectionDefinitions } from '@/builder/schema/registerSpecificationSchema.js'

// Components
import BuilderHeader from '@/components/builder/layout/BuilderHeader.vue'
import BuilderTabs from '@/components/builder/layout/BuilderTabs.vue'
import SectionNavigator from '@/components/builder/layout/SectionNavigator.vue'
import FormBuilder from '@/components/builder/forms/FormBuilder.vue'
import JsonEditor from '@/components/builder/json/JsonEditor.vue'
import OutputPreview from '@/components/builder/preview/OutputPreview.vue'
import ValidationPanel from '@/components/builder/validation/ValidationPanel.vue'

// Router
const route = useRoute()
const router = useRouter()

// State management
const {
  specification,
  activeSection,
  isDirty,
  overallProgress,
  sectionCompletion,
  saveToFile,
  loadSpecification,
  resetSpecification,
  nextSection,
  previousSection,
  goToSection
} = useRegisterSpecification()

// Local state
const activeTab = ref('builder')
const previewFormat = ref('asciidoc')

// Computed
const currentSection = computed(() => sectionDefinitions[activeSection.value])
const totalSections = computed(() => sectionDefinitions.length)

// Handle file load
function handleFileLoad(jsonString) {
  const result = loadSpecification(jsonString)
  if (result.success) {
    // Successfully loaded
  } else {
    console.error('Failed to load file:', result.error)
  }
}

// Handle export
function handleExport(format) {
  // Export is handled by the composable's downloadExport method
}

// Handle new specification
function handleNew() {
  if (isDirty.value) {
    if (confirm('You have unsaved changes. Are you sure you want to create a new specification?')) {
      resetSpecification()
    }
  } else {
    resetSpecification()
  }
}

// Handle navigation
function handleNext() {
  nextSection()
}

function handlePrevious() {
  previousSection()
}

// Keyboard shortcuts
function handleKeydown(event) {
  // Ctrl/Cmd + S to save
  if ((event.ctrlKey || event.metaKey) && event.key === 's') {
    event.preventDefault()
    saveToFile()
  }
  // Ctrl/Cmd + E to export
  if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
    event.preventDefault()
    // Show export dialog or export to AsciiDoc
  }
  // Escape to go back
  if (event.key === 'Escape') {
    router.push('/builder')
  }
}

// Warn before leaving with unsaved changes
function handleBeforeUnload(event) {
  if (isDirty.value) {
    event.preventDefault()
    event.returnValue = ''
  }
}

// Lifecycle
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('beforeunload', handleBeforeUnload)

  // Check for loaded data from route query (after file load)
  // This would be set by the index view when loading a file
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>

<template>
  <div class="builder-view">
    <!-- Header with title, progress, and actions -->
    <BuilderHeader
      :title="specification.documentMetadata?.title || 'Untitled Register Specification'"
      :progress="overallProgress"
      :is-dirty="isDirty"
      @save="saveToFile"
      @export="handleExport"
      @new="handleNew"
    />

    <!-- Tab navigation -->
    <BuilderTabs v-model="activeTab" />

    <!-- Main content area -->
    <div class="builder-content">
      <!-- Builder tab -->
      <template v-if="activeTab === 'builder'">
        <SectionNavigator
          :sections="sectionDefinitions"
          :active-section="activeSection"
          :completion="sectionCompletion"
          @select="goToSection"
        />

        <FormBuilder
          :section="currentSection"
          :section-index="activeSection"
          :total-sections="totalSections"
          @next="handleNext"
          @previous="handlePrevious"
        />

        <ValidationPanel
          :section="currentSection"
          :completion="sectionCompletion[currentSection?.key] || 0"
        />
      </template>

      <!-- JSON tab - full width -->
      <JsonEditor
        v-else-if="activeTab === 'json'"
        class="full-width"
        @load="handleFileLoad"
      />

      <!-- Preview tab - full width -->
      <OutputPreview
        v-else-if="activeTab === 'preview'"
        class="full-width"
        v-model:format="previewFormat"
      />
    </div>
  </div>
</template>

<style scoped>
.builder-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-background);
}

.builder-content {
  flex: 1;
  display: grid;
  grid-template-columns: 240px 1fr 280px;
  gap: 0;
  overflow: hidden;
}

/* Full width for JSON and Preview tabs */
.builder-content :deep(.full-width) {
  grid-column: 1 / -1;
}

/* Tablet: Hide validation panel */
@media (max-width: 1199px) {
  .builder-content {
    grid-template-columns: 200px 1fr;
  }
}

/* Mobile: Hide section navigator */
@media (max-width: 768px) {
  .builder-content {
    grid-template-columns: 1fr;
  }
}
</style>
