/**
 * Register Specification State Management Composable
 *
 * Singleton pattern for managing specification state across the builder application.
 * Provides reactive state, validation, and export functionality.
 */

import { ref, readonly, computed, watch } from 'vue'
import { createDefaultSpecification } from '@/builder/defaults/defaultSpecification.js'
import { exportToJson, exportToAsciiDoc, exportToMarkdown } from '@/builder/export/index.js'

// Singleton state - shared across all component instances
const specification = ref(createDefaultSpecification())
const activeSection = ref(0)
const isDirty = ref(false)
const lastSaved = ref(null)
const validationErrors = ref(new Map())

/**
 * Calculate completion percentage for a section
 */
function calculateSectionCompletion(sectionKey, sectionData) {
  if (!sectionData) return 0

  // Helper to check if a string has actual content (not just whitespace)
  const hasContent = (str) => str && typeof str === 'string' && str.trim() !== ''

  // Helper to check if an array has items
  const hasItems = (arr) => Array.isArray(arr) && arr.length > 0

  // Helper to check if an object has any filled string values
  const hasFilledValues = (obj) => {
    if (!obj || typeof obj !== 'object') return false
    return Object.values(obj).some(v => {
      if (typeof v === 'string') return v.trim() !== ''
      if (Array.isArray(v)) return v.length > 0
      if (typeof v === 'object' && v !== null) return hasFilledValues(v)
      return false
    })
  }

  switch (sectionKey) {
    case 'documentMetadata':
      // Requires title to be filled
      return hasContent(sectionData.title) ? 100 : 0

    case 'scope':
      // Requires purpose to be filled
      return hasContent(sectionData.purpose) ? 100 : 0

    case 'normativeReferences':
      // Requires at least one reference
      return hasItems(sectionData) ? 100 : 0

    case 'termsAndDefinitions':
      // Optional - check if any terms defined
      return hasItems(sectionData) ? 100 : 0

    case 'conventions':
      // Requires identifier format and versioning scheme to be specified
      if (!sectionData.identifierScheme || !sectionData.versioningScheme) return 0
      const hasIdFormat = hasContent(sectionData.identifierScheme.format)
      const hasVersioning = hasContent(sectionData.versioningScheme.scheme) || hasContent(sectionData.versioningScheme.format)
      if (hasIdFormat && hasVersioning) return 100
      if (hasIdFormat || hasVersioning) return 50
      return 0

    case 'audienceAndAccessibility':
      // Required - check if any audience specified
      return hasItems(sectionData.targetAudience) || hasContent(sectionData.accessibilityRequirements) ? 100 : 0

    case 'rolesAndResponsibilities':
      // Requires at least one entity and one role assignment
      if (!sectionData.entities || !sectionData.roleAssignments) return 0
      const hasEntities = hasItems(sectionData.entities)
      const hasAssignments = hasItems(sectionData.roleAssignments)
      if (hasEntities && hasAssignments) return 100
      if (hasEntities || hasAssignments) return 50
      return 0

    case 'commitments':
      // Requires at least some commitment info
      if (!sectionData.access || !sectionData.persistence || !sectionData.transparency) return 0
      const hasAccess = hasContent(sectionData.access.accessMechanism) || sectionData.access.publiclyAccessible
      const hasPersistence = hasContent(sectionData.persistence.identifierPersistence) || hasContent(sectionData.persistence.contentPersistence)
      const hasTransparency = sectionData.transparency.changeLogProvided || sectionData.transparency.appealProcessDocumented
      const commitmentCount = [hasAccess, hasPersistence, hasTransparency].filter(Boolean).length
      return Math.round((commitmentCount / 3) * 100)

    case 'governanceProcesses':
      // Requires descriptions for proposal, approval, and content management
      if (!sectionData.proposalProcess || !sectionData.approvalProcess || !sectionData.contentManagement) return 0
      const hasProposal = hasContent(sectionData.proposalProcess.description)
      const hasApproval = hasContent(sectionData.approvalProcess.description)
      const hasContentMgmt = hasContent(sectionData.contentManagement.description)
      const filled = [hasProposal, hasApproval, hasContentMgmt].filter(Boolean).length
      return Math.round((filled / 3) * 100)

    case 'contentRequirements':
      // Requires at least concepts, statuses, or actions to be configured
      const hasConcepts = hasItems(sectionData.concepts)
      const hasStatuses = hasItems(sectionData.statuses?.validityStatuses) || hasItems(sectionData.statuses?.publicationStatuses)
      const hasActions = hasItems(sectionData.actions)
      if (hasConcepts && hasStatuses && hasActions) return 100
      const filledCount = [hasConcepts, hasStatuses, hasActions].filter(Boolean).length
      return Math.round((filledCount / 3) * 100)

    case 'otherInformation':
      // Optional - check if contact info provided
      return hasContent(sectionData.accessLocation) || hasFilledValues(sectionData.contact) ? 100 : 0

    case 'bibliography':
      // Optional - check if any entries
      return hasItems(sectionData) ? 100 : 0

    case 'conformanceClaims':
      // Optional - check if any claims made
      return hasItems(sectionData.registerTypes) ? 100 : 0

    default:
      return 0
  }
}

/**
 * Main composable for register specification management
 */
export function useRegisterSpecification() {
  // Watch for changes and mark dirty
  watch(specification, () => {
    if (!isDirty.value) {
      isDirty.value = true
    }
  }, { deep: true })

  // Computed: Overall progress
  const overallProgress = computed(() => {
    const sectionKeys = [
      'documentMetadata',
      'scope',
      'normativeReferences',
      'termsAndDefinitions',
      'conventions',
      'audienceAndAccessibility',
      'rolesAndResponsibilities',
      'commitments',
      'governanceProcesses',
      'contentRequirements',
      'otherInformation',
      'bibliography'
    ]

    let totalCompletion = 0
    for (const key of sectionKeys) {
      totalCompletion += calculateSectionCompletion(key, specification.value[key])
    }

    return Math.round(totalCompletion / sectionKeys.length)
  })

  // Computed: Section completion map
  const sectionCompletion = computed(() => {
    const completion = {}
    const sectionKeys = [
      'documentMetadata',
      'scope',
      'normativeReferences',
      'termsAndDefinitions',
      'conventions',
      'audienceAndAccessibility',
      'rolesAndResponsibilities',
      'commitments',
      'governanceProcesses',
      'contentRequirements',
      'otherInformation',
      'bibliography',
      'conformanceClaims'
    ]

    for (const key of sectionKeys) {
      completion[key] = calculateSectionCompletion(key, specification.value[key])
    }

    return completion
  })

  // Computed: Has validation errors
  const hasErrors = computed(() => validationErrors.value.size > 0)

  // Computed: Get current section data
  const currentSectionData = computed(() => {
    const sectionKeys = [
      'documentMetadata',
      'scope',
      'normativeReferences',
      'termsAndDefinitions',
      'conventions',
      'audienceAndAccessibility',
      'rolesAndResponsibilities',
      'governanceProcesses',
      'contentRequirements',
      'otherInformation',
      'bibliography',
      'conformanceClaims'
    ]
    const key = sectionKeys[activeSection.value]
    return {
      key,
      data: specification.value[key]
    }
  })

  // Methods

  /**
   * Update a section with new data
   */
  function updateSection(sectionKey, data) {
    specification.value[sectionKey] = {
      ...specification.value[sectionKey],
      ...data
    }
  }

  /**
   * Update a single field within a section
   */
  function updateField(sectionKey, fieldKey, value) {
    if (!specification.value[sectionKey]) {
      specification.value[sectionKey] = {}
    }

    // Handle empty fieldKey - direct assignment to section
    if (!fieldKey || fieldKey === '') {
      specification.value[sectionKey] = value
      return
    }

    // Handle nested paths (e.g., 'conventions.identifierScheme.format')
    if (fieldKey.includes('.')) {
      const parts = fieldKey.split('.')
      let current = specification.value[sectionKey]
      for (let i = 0; i < parts.length - 1; i++) {
        if (!current[parts[i]]) {
          current[parts[i]] = {}
        }
        current = current[parts[i]]
      }
      current[parts[parts.length - 1]] = value
    } else {
      specification.value[sectionKey][fieldKey] = value
    }
  }

  /**
   * Add item to an array section
   */
  function addArrayItem(sectionKey, item) {
    if (!Array.isArray(specification.value[sectionKey])) {
      specification.value[sectionKey] = []
    }
    specification.value[sectionKey].push(item)
  }

  /**
   * Remove item from an array section
   */
  function removeArrayItem(sectionKey, index) {
    if (Array.isArray(specification.value[sectionKey])) {
      specification.value[sectionKey].splice(index, 1)
    }
  }

  /**
   * Update item in an array section
   */
  function updateArrayItem(sectionKey, index, item) {
    if (Array.isArray(specification.value[sectionKey]) && specification.value[sectionKey][index] !== undefined) {
      specification.value[sectionKey][index] = item
    }
  }

  /**
   * Reset specification to defaults
   */
  function resetSpecification() {
    specification.value = createDefaultSpecification()
    validationErrors.value.clear()
    isDirty.value = false
    activeSection.value = 0
    lastSaved.value = null
  }

  /**
   * Load specification from JSON string
   */
  function loadSpecification(jsonString) {
    try {
      const parsed = JSON.parse(jsonString)
      specification.value = parsed
      isDirty.value = false
      lastSaved.value = new Date()
      return { success: true }
    } catch (error) {
      console.error('Failed to load specification:', error)
      return { success: false, error: error.message }
    }
  }

  /**
   * Save specification to file (triggers download)
   */
  function saveToFile() {
    const json = JSON.stringify(specification.value, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const filename = specification.value.documentMetadata?.abbreviation
      ? `${specification.value.documentMetadata.abbreviation.toLowerCase()}-specification.json`
      : 'register-specification.json'

    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    isDirty.value = false
    lastSaved.value = new Date()
  }

  /**
   * Export specification to specified format
   */
  function exportDocument(format) {
    switch (format) {
      case 'json':
        return exportToJson(specification.value)
      case 'asciidoc':
        return exportToAsciiDoc(specification.value)
      case 'markdown':
        return exportToMarkdown(specification.value)
      default:
        throw new Error(`Unknown export format: ${format}`)
    }
  }

  /**
   * Download exported document
   */
  function downloadExport(format) {
    const content = exportDocument(format)
    const mimeTypes = {
      json: 'application/json',
      asciidoc: 'text/plain',
      markdown: 'text/markdown'
    }
    const extensions = {
      json: 'json',
      asciidoc: 'adoc',
      markdown: 'md'
    }

    const blob = new Blob([content], { type: mimeTypes[format] })
    const url = URL.createObjectURL(blob)

    const baseName = specification.value.documentMetadata?.abbreviation
      ? specification.value.documentMetadata.abbreviation.toLowerCase()
      : 'register-specification'

    const filename = `${baseName}-specification.${extensions[format]}`

    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  /**
   * Go to next section
   */
  function nextSection() {
    if (activeSection.value < 11) {
      activeSection.value++
    }
  }

  /**
   * Go to previous section
   */
  function previousSection() {
    if (activeSection.value > 0) {
      activeSection.value--
    }
  }

  /**
   * Go to specific section
   */
  function goToSection(index) {
    if (index >= 0 && index <= 11) {
      activeSection.value = index
    }
  }

  return {
    // State (readonly to prevent direct mutation)
    specification: readonly(specification),
    activeSection: readonly(activeSection),
    isDirty: readonly(isDirty),
    lastSaved: readonly(lastSaved),
    validationErrors: readonly(validationErrors),

    // Computed
    overallProgress,
    sectionCompletion,
    hasErrors,
    currentSectionData,

    // Methods
    updateSection,
    updateField,
    addArrayItem,
    removeArrayItem,
    updateArrayItem,
    resetSpecification,
    loadSpecification,
    saveToFile,
    exportDocument,
    downloadExport,
    nextSection,
    previousSection,
    goToSection
  }
}

export default useRegisterSpecification
