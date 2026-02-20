<script setup>
/**
 * ContentRequirementsSection - Content requirements form section
 *
 * Based on ISO 19135:2025 RUM sample specification structure:
 * - Content repositories
 * - Concepts and their definitions
 * - Statuses (validity and publication)
 * - Relations
 * - Actions
 * - Temporal applicability
 * - Provenance
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderTextarea from '@/components/builder/fields/BuilderTextarea.vue'
import BuilderInput from '@/components/builder/fields/BuilderInput.vue'

const { specification, updateField } = useRegisterSpecification()

// Helper for updating nested fields
function handleUpdate(field, value) {
  updateField('contentRequirements', field, value)
}

// === Repositories ===
function addRepository() {
  const current = specification.contentRequirements?.repositories || []
  handleUpdate('repositories', [...current, {
    name: '',
    type: 'proposal-inputs',
    description: '',
    accessLevel: 'private'
  }])
}

function updateRepository(index, field, value) {
  const current = [...(specification.contentRequirements?.repositories || [])]
  current[index] = { ...current[index], [field]: value }
  handleUpdate('repositories', current)
}

function removeRepository(index) {
  const current = [...(specification.contentRequirements?.repositories || [])]
  current.splice(index, 1)
  handleUpdate('repositories', current)
}

// === Concepts ===
function addConcept() {
  const current = specification.contentRequirements?.concepts || []
  handleUpdate('concepts', [...current, {
    name: '',
    identifier: '',
    description: '',
    attributes: []
  }])
}

function updateConcept(index, field, value) {
  const current = [...(specification.contentRequirements?.concepts || [])]
  current[index] = { ...current[index], [field]: value }
  handleUpdate('concepts', current)
}

function removeConcept(index) {
  const current = [...(specification.contentRequirements?.concepts || [])]
  current.splice(index, 1)
  handleUpdate('concepts', current)
}

function addConceptAttribute(conceptIndex) {
  const concepts = [...(specification.contentRequirements?.concepts || [])]
  const attributes = [...(concepts[conceptIndex].attributes || [])]
  attributes.push({ name: '', type: 'string', description: '', required: false })
  concepts[conceptIndex] = { ...concepts[conceptIndex], attributes }
  handleUpdate('concepts', concepts)
}

function updateConceptAttribute(conceptIndex, attrIndex, field, value) {
  const concepts = [...(specification.contentRequirements?.concepts || [])]
  const attributes = [...(concepts[conceptIndex].attributes || [])]
  attributes[attrIndex] = { ...attributes[attrIndex], [field]: value }
  concepts[conceptIndex] = { ...concepts[conceptIndex], attributes }
  handleUpdate('concepts', concepts)
}

function removeConceptAttribute(conceptIndex, attrIndex) {
  const concepts = [...(specification.contentRequirements?.concepts || [])]
  const attributes = [...(concepts[conceptIndex].attributes || [])]
  attributes.splice(attrIndex, 1)
  concepts[conceptIndex] = { ...concepts[conceptIndex], attributes }
  handleUpdate('concepts', concepts)
}

// === Statuses ===
function addStatus(type) {
  const current = specification.contentRequirements?.statuses?.[type] || []
  handleUpdate(`statuses.${type}`, [...current, { name: '', description: '' }])
}

function updateStatus(type, index, field, value) {
  const current = [...(specification.contentRequirements?.statuses?.[type] || [])]
  current[index] = { ...current[index], [field]: value }
  handleUpdate(`statuses.${type}`, current)
}

function removeStatus(type, index) {
  const current = [...(specification.contentRequirements?.statuses?.[type] || [])]
  current.splice(index, 1)
  handleUpdate(`statuses.${type}`, current)
}

// === Actions ===
function addAction() {
  const current = specification.contentRequirements?.actions || []
  handleUpdate('actions', [...current, { name: '', description: '' }])
}

function updateAction(index, field, value) {
  const current = [...(specification.contentRequirements?.actions || [])]
  current[index] = { ...current[index], [field]: value }
  handleUpdate('actions', current)
}

function removeAction(index) {
  const current = [...(specification.contentRequirements?.actions || [])]
  current.splice(index, 1)
  handleUpdate('actions', current)
}

// === Relations ===
function addRelation() {
  const current = specification.contentRequirements?.relations || []
  handleUpdate('relations', [...current, { name: '', description: '', sourceType: '', targetType: '' }])
}

function updateRelation(index, field, value) {
  const current = [...(specification.contentRequirements?.relations || [])]
  current[index] = { ...current[index], [field]: value }
  handleUpdate('relations', current)
}

function removeRelation(index) {
  const current = [...(specification.contentRequirements?.relations || [])]
  current.splice(index, 1)
  handleUpdate('relations', current)
}

const repositoryTypes = [
  { value: 'proposal-inputs', label: 'Proposal Inputs' },
  { value: 'proposal-deliberations', label: 'Proposal Deliberations' },
  { value: 'published-information', label: 'Published Information' }
]

const accessLevels = [
  { value: 'private', label: 'Private' },
  { value: 'restricted', label: 'Restricted' },
  { value: 'public', label: 'Public (Read-only)' }
]

const attributeTypes = [
  { value: 'string', label: 'String' },
  { value: 'identifier', label: 'Identifier' },
  { value: 'boolean', label: 'Boolean' },
  { value: 'uri', label: 'URI' },
  { value: 'date', label: 'Date' },
  { value: 'integer', label: 'Integer' },
  { value: 'free-text', label: 'Free Text' }
]
</script>

<template>
  <div class="section-form">
    <p class="section-intro">
      Define the content structure and requirements for your register, including repositories,
      concepts, statuses, actions, and relations.
    </p>

    <!-- Content Repositories -->
    <div class="subsection">
      <div class="subsection-header">
        <div>
          <h3 class="subsection-title">Content Repositories</h3>
          <p class="subsection-hint">
            Define the data repositories used for register governance (proposal inputs, deliberations, published info).
          </p>
        </div>
        <button type="button" class="add-btn" @click="addRepository">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Add Repository
        </button>
      </div>

      <div class="items-grid">
        <div
          v-for="(repo, index) in specification.contentRequirements?.repositories || []"
          :key="index"
          class="item-card"
        >
          <div class="item-header">
            <input
              :value="repo.name"
              type="text"
              class="item-title-input"
              placeholder="Repository name"
              @input="updateRepository(index, 'name', $event.target.value)"
            />
            <button type="button" class="remove-btn small" @click="removeRepository(index)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <div class="item-body">
            <div class="form-row">
              <div class="form-field">
                <label class="field-label">Type</label>
                <select
                  :value="repo.type"
                  class="field-select"
                  @change="updateRepository(index, 'type', $event.target.value)"
                >
                  <option v-for="t in repositoryTypes" :key="t.value" :value="t.value">{{ t.label }}</option>
                </select>
              </div>
              <div class="form-field">
                <label class="field-label">Access Level</label>
                <select
                  :value="repo.accessLevel"
                  class="field-select"
                  @change="updateRepository(index, 'accessLevel', $event.target.value)"
                >
                  <option v-for="a in accessLevels" :key="a.value" :value="a.value">{{ a.label }}</option>
                </select>
              </div>
            </div>
            <div class="form-field">
              <label class="field-label">Description</label>
              <textarea
                :value="repo.description"
                class="field-textarea"
                rows="2"
                placeholder="Describe the purpose of this repository..."
                @input="updateRepository(index, 'description', $event.target.value)"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div v-if="(specification.contentRequirements?.repositories || []).length === 0" class="empty-hint">
        No repositories defined yet. Click "Add Repository" to get started.
      </div>
    </div>

    <!-- Concepts -->
    <div class="subsection">
      <div class="subsection-header">
        <div>
          <h3 class="subsection-title">Concepts</h3>
          <p class="subsection-hint">
            Define the concepts (types of items) managed in your register. Each concept has attributes.
          </p>
        </div>
        <button type="button" class="add-btn" @click="addConcept">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Add Concept
        </button>
      </div>

      <div class="concepts-list">
        <div
          v-for="(concept, cIndex) in specification.contentRequirements?.concepts || []"
          :key="cIndex"
          class="concept-card"
        >
          <div class="concept-header">
            <input
              :value="concept.name"
              type="text"
              class="concept-name"
              placeholder="Concept name (e.g., Unit of Measure)"
              @input="updateConcept(cIndex, 'name', $event.target.value)"
            />
            <button type="button" class="remove-btn" @click="removeConcept(cIndex)" title="Remove concept">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <div class="concept-body">
            <div class="form-row">
              <BuilderInput
                :model-value="concept.identifier"
                label="Concept Identifier"
                placeholder="e.g., https://example.com/register/concepts/uom"
                @update:model-value="value => updateConcept(cIndex, 'identifier', value)"
              />
            </div>
            <BuilderTextarea
              :model-value="concept.description"
              label="Description"
              placeholder="Describe this concept and what it represents..."
              :rows="2"
              @update:model-value="value => updateConcept(cIndex, 'description', value)"
            />

            <!-- Concept Attributes -->
            <div class="attributes-section">
              <div class="attributes-header">
                <span class="attributes-label">Attributes</span>
                <button type="button" class="add-btn small" @click="addConceptAttribute(cIndex)">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Add Attribute
                </button>
              </div>

              <div class="attributes-list">
                <div
                  v-for="(attr, aIndex) in concept.attributes || []"
                  :key="aIndex"
                  class="attribute-row"
                >
                  <input
                    :value="attr.name"
                    type="text"
                    class="attr-name"
                    placeholder="Attribute name"
                    @input="updateConceptAttribute(cIndex, aIndex, 'name', $event.target.value)"
                  />
                  <select
                    :value="attr.type"
                    class="attr-type"
                    @change="updateConceptAttribute(cIndex, aIndex, 'type', $event.target.value)"
                  >
                    <option v-for="t in attributeTypes" :key="t.value" :value="t.value">{{ t.label }}</option>
                  </select>
                  <label class="attr-required">
                    <input
                      :checked="attr.required"
                      type="checkbox"
                      @change="updateConceptAttribute(cIndex, aIndex, 'required', $event.target.checked)"
                    />
                    Required
                  </label>
                  <button type="button" class="remove-btn small" @click="removeConceptAttribute(cIndex, aIndex)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="(specification.contentRequirements?.concepts || []).length === 0" class="empty-hint">
        No concepts defined yet. Click "Add Concept" to define what types of items your register manages.
      </div>
    </div>

    <!-- Statuses -->
    <div class="subsection">
      <h3 class="subsection-title">Statuses</h3>
      <p class="subsection-hint">
        Define the validity and publication statuses for items in your register.
      </p>

      <div class="statuses-grid">
        <!-- Validity Statuses -->
        <div class="status-group">
          <h4 class="status-group-title">Validity Statuses</h4>
          <p class="status-group-hint">Valid/Invalid - indicates whether content is suitable for use</p>

          <div class="items-list-compact">
            <div
              v-for="(status, index) in specification.contentRequirements?.statuses?.validityStatuses || []"
              :key="index"
              class="item-row-compact"
            >
              <input
                :value="status.name"
                type="text"
                class="item-input-sm"
                placeholder="Status name"
                @input="updateStatus('validityStatuses', index, 'name', $event.target.value)"
              />
              <input
                :value="status.description"
                type="text"
                class="item-input-wide"
                placeholder="Description"
                @input="updateStatus('validityStatuses', index, 'description', $event.target.value)"
              />
              <button type="button" class="remove-btn small" @click="removeStatus('validityStatuses', index)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <button type="button" class="add-btn small" @click="addStatus('validityStatuses')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Add Status
          </button>
        </div>

        <!-- Publication Statuses -->
        <div class="status-group">
          <h4 class="status-group-title">Publication Statuses</h4>
          <p class="status-group-hint">Published/Unpublished - indicates visibility and recommendation</p>

          <div class="items-list-compact">
            <div
              v-for="(status, index) in specification.contentRequirements?.statuses?.publicationStatuses || []"
              :key="index"
              class="item-row-compact"
            >
              <input
                :value="status.name"
                type="text"
                class="item-input-sm"
                placeholder="Status name"
                @input="updateStatus('publicationStatuses', index, 'name', $event.target.value)"
              />
              <input
                :value="status.description"
                type="text"
                class="item-input-wide"
                placeholder="Description"
                @input="updateStatus('publicationStatuses', index, 'description', $event.target.value)"
              />
              <button type="button" class="remove-btn small" @click="removeStatus('publicationStatuses', index)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <button type="button" class="add-btn small" @click="addStatus('publicationStatuses')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Add Status
          </button>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="subsection">
      <h3 class="subsection-title">Actions</h3>
      <p class="subsection-hint">
        Operations that can be performed on register items (e.g., Add, Modify, Unpublish).
      </p>

      <div class="items-list-compact">
        <div
          v-for="(action, index) in specification.contentRequirements?.actions || []"
          :key="index"
          class="item-row-compact"
        >
          <input
            :value="action.name"
            type="text"
            class="item-input-sm"
            placeholder="Action name"
            @input="updateAction(index, 'name', $event.target.value)"
          />
          <input
            :value="action.description"
            type="text"
            class="item-input-wide"
            placeholder="Description"
            @input="updateAction(index, 'description', $event.target.value)"
          />
          <button type="button" class="remove-btn small" @click="removeAction(index)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <button type="button" class="add-btn" @click="addAction">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Add Action
      </button>
    </div>

    <!-- Relations -->
    <div class="subsection">
      <h3 class="subsection-title">Relations</h3>
      <p class="subsection-hint">
        Types of relationships between register items (e.g., Superseded, Parent-Child).
      </p>

      <div class="items-list-compact">
        <div
          v-for="(relation, index) in specification.contentRequirements?.relations || []"
          :key="index"
          class="relation-row"
        >
          <input
            :value="relation.name"
            type="text"
            class="item-input-sm"
            placeholder="Relation name"
            @input="updateRelation(index, 'name', $event.target.value)"
          />
          <input
            :value="relation.description"
            type="text"
            class="item-input-wide"
            placeholder="Description"
            @input="updateRelation(index, 'description', $event.target.value)"
          />
          <button type="button" class="remove-btn small" @click="removeRelation(index)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <button type="button" class="add-btn" @click="addRelation">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Add Relation
      </button>
    </div>

    <!-- Temporal Applicability -->
    <div class="subsection">
      <h3 class="subsection-title">Temporal Applicability</h3>
      <p class="subsection-hint">
        Configure whether items can have time-based validity (applicable from/until/during).
      </p>

      <div class="temporal-options">
        <label class="checkbox-label">
          <input
            :checked="specification.conventions?.temporalApplicability?.supported"
            type="checkbox"
            @change="updateField('conventions.temporalApplicability.supported', $event.target.checked)"
          />
          <span>Support temporal applicability for items</span>
        </label>

        <div v-if="specification.conventions?.temporalApplicability?.supported" class="temporal-rules">
          <BuilderInput
            :model-value="specification.conventions?.temporalApplicability?.format"
            label="Date/Time Format"
            placeholder="e.g., ISO 8601"
            @update:model-value="value => updateField('conventions.temporalApplicability.format', value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-form {
  max-width: 1000px;
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
}

.subsection-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
}

.subsection-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin: 0 0 var(--spacing-xs);
}

.subsection-hint {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

/* Items lists */
.items-list-compact {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-sm);
}

.item-row-compact {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}

.item-input-sm {
  width: 140px;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.item-input-wide {
  flex: 1;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.item-input-sm:focus,
.item-input-wide:focus {
  outline: none;
  border-color: var(--color-accent);
}

/* Repository cards */
.items-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.item-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.item-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.item-title-input {
  flex: 1;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  background: transparent;
  border: none;
  outline: none;
}

.item-body {
  padding: var(--spacing-md);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.field-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
}

.field-select,
.field-textarea {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.field-textarea {
  resize: vertical;
  min-height: 60px;
}

.field-select:focus,
.field-textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

/* Concept cards */
.concepts-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.concept-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.concept-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.concept-name {
  flex: 1;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  background: transparent;
  border: none;
  outline: none;
}

.concept-body {
  padding: var(--spacing-md);
}

/* Attributes */
.attributes-section {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}

.attributes-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.attributes-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
}

.attributes-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.attribute-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-xs);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.attr-name {
  flex: 1;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.attr-type {
  width: 100px;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.attr-required {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  white-space: nowrap;
}

/* Statuses grid */
.statuses-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.status-group {
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.status-group-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin: 0 0 var(--spacing-xs);
}

.status-group-hint {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-md);
}

/* Temporal options */
.temporal-options {
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--color-accent);
}

.temporal-rules {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}

/* Buttons */
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
  width: 14px;
  height: 14px;
}

.add-btn.small {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-xs);
}

.remove-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.remove-btn:hover {
  background: rgba(220, 38, 38, 0.1);
  border-color: var(--color-error);
}

.remove-btn svg {
  width: 14px;
  height: 14px;
  color: var(--color-text-light);
}

.remove-btn:hover svg {
  color: var(--color-error);
}

.remove-btn.small {
  width: 28px;
  height: 28px;
}

.empty-hint {
  padding: var(--spacing-lg);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  background: var(--color-surface);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-sm);
}

/* Responsive */
@media (max-width: 900px) {
  .items-grid,
  .statuses-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  .subsection-header {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .item-row-compact {
    flex-wrap: wrap;
  }

  .item-input-sm {
    width: 100%;
  }

  .attribute-row {
    flex-wrap: wrap;
  }

  .attr-name {
    width: 100%;
  }

  .attr-type {
    flex: 1;
  }
}
</style>
