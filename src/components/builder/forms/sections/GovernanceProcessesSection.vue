<script setup>
/**
 * GovernanceProcessesSection - Governance processes form section
 *
 * Required processes: Proposal, Approval, Content Management
 * Optional process: Appeal
 */
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import BuilderInput from '@/components/builder/fields/BuilderInput.vue'
import BuilderTextarea from '@/components/builder/fields/BuilderTextarea.vue'

const { specification, updateField } = useRegisterSpecification()

function handleUpdate(process, field, value) {
  updateField('governanceProcesses', `${process}.${field}`, value)
}

function addArrayItem(process, field) {
  const current = specification.governanceProcesses?.[process]?.[field] || []
  handleUpdate(process, field, [...current, { label: '', url: '' }])
}

function updateArrayItem(process, field, index, key, value) {
  const current = [...(specification.governanceProcesses?.[process]?.[field] || [])]
  current[index] = { ...current[index], [key]: value }
  handleUpdate(process, field, current)
}

function removeArrayItem(process, field, index) {
  const current = [...(specification.governanceProcesses?.[process]?.[field] || [])]
  current.splice(index, 1)
  handleUpdate(process, field, current)
}

function addCriteria() {
  const current = specification.governanceProcesses?.approvalProcess?.criteria || []
  handleUpdate('approvalProcess', 'criteria', [...current, ''])
}

function updateCriteria(index, value) {
  const current = [...(specification.governanceProcesses?.approvalProcess?.criteria || [])]
  current[index] = value
  handleUpdate('approvalProcess', 'criteria', current)
}

function removeCriteria(index) {
  const current = [...(specification.governanceProcesses?.approvalProcess?.criteria || [])]
  current.splice(index, 1)
  handleUpdate('approvalProcess', 'criteria', current)
}
</script>

<template>
  <div class="section-form">
    <p class="section-intro">
      Define the governance processes for your register. The Proposal, Approval, and Content Management
      processes are required by ISO 19135. The Appeal process is optional but recommended.
    </p>

    <!-- Required Processes -->
    <div class="process-group required">
      <h3 class="group-title">
        <span class="required-badge">Required</span>
        Core Governance Processes
      </h3>

      <!-- Proposal Process -->
      <div class="subsection">
        <h4 class="subsection-title">
          Proposal Process
          <span class="required-marker">*</span>
        </h4>
        <p class="subsection-hint">
          Defines how proposers submit changes to the register (additions, modifications, unpublishing).
        </p>

        <BuilderTextarea
          :model-value="specification.governanceProcesses?.proposalProcess?.description"
          label="Process Description"
          placeholder="Describe how proposals are submitted and processed. Include what forms are used, what information is required, and the submission workflow..."
          :rows="4"
          required
          @update:model-value="handleUpdate('proposalProcess', 'description', $event)"
        />

        <!-- Forms and URLs -->
        <div class="field-wrapper">
          <label class="field-label">Proposal Forms and URLs</label>
          <p class="field-hint">Links to proposal submission forms or systems</p>

          <div class="items-list">
            <div
              v-for="(form, index) in specification.governanceProcesses?.proposalProcess?.formsAndUrls || []"
              :key="index"
              class="item-row"
            >
              <input
                :value="form.label"
                type="text"
                class="item-input"
                placeholder="Form label (e.g., Online Proposal Form)"
                @input="updateArrayItem('proposalProcess', 'formsAndUrls', index, 'label', $event.target.value)"
              />
              <input
                :value="form.url"
                type="url"
                class="item-input"
                placeholder="https://..."
                @input="updateArrayItem('proposalProcess', 'formsAndUrls', index, 'url', $event.target.value)"
              />
              <button
                type="button"
                class="remove-btn"
                @click="removeArrayItem('proposalProcess', 'formsAndUrls', index)"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <button type="button" class="add-btn" @click="addArrayItem('proposalProcess', 'formsAndUrls')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Add Form URL
          </button>
        </div>
      </div>

      <!-- Approval Process -->
      <div class="subsection">
        <h4 class="subsection-title">
          Approval Process
          <span class="required-marker">*</span>
        </h4>
        <p class="subsection-hint">
          Defines how the control body reviews and decides on proposals.
        </p>

        <BuilderTextarea
          :model-value="specification.governanceProcesses?.approvalProcess?.description"
          label="Process Description"
          placeholder="Describe how proposals are reviewed and approved. Include the review workflow, who is involved, and how decisions are communicated..."
          :rows="4"
          required
          @update:model-value="handleUpdate('approvalProcess', 'description', $event)"
        />

        <!-- Approval Criteria -->
        <div class="field-wrapper">
          <label class="field-label">Approval Criteria</label>
          <p class="field-hint">Criteria used by the control body to evaluate proposals</p>

          <div class="items-list">
            <div
              v-for="(criterion, index) in specification.governanceProcesses?.approvalProcess?.criteria || []"
              :key="index"
              class="item-row"
            >
              <span class="item-number">{{ index + 1 }}</span>
              <input
                :value="criterion"
                type="text"
                class="item-input full"
                placeholder="e.g., Check if the proposer is legitimate and authorized"
                @input="updateCriteria(index, $event.target.value)"
              />
              <button
                type="button"
                class="remove-btn"
                @click="removeCriteria(index)"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <button type="button" class="add-btn" @click="addCriteria">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Add Criterion
          </button>
        </div>
      </div>

      <!-- Content Management -->
      <div class="subsection">
        <h4 class="subsection-title">
          Content Management Process
          <span class="required-marker">*</span>
        </h4>
        <p class="subsection-hint">
          Defines how the register manager publishes approved changes.
        </p>

        <BuilderTextarea
          :model-value="specification.governanceProcesses?.contentManagement?.description"
          label="Process Description"
          placeholder="Describe how approved changes are published to the register. Include versioning practices, publication schedule, and how changes are communicated to users..."
          :rows="4"
          required
          @update:model-value="handleUpdate('contentManagement', 'description', $event)"
        />
      </div>
    </div>

    <!-- Optional Processes -->
    <div class="process-group optional">
      <h3 class="group-title">
        <span class="optional-badge">Optional</span>
        Appeal Process
      </h3>

      <!-- Appeal Process -->
      <div class="subsection">
        <h4 class="subsection-title">Appeal Process</h4>
        <p class="subsection-hint">
          Provides a mechanism for proposers to appeal rejected proposals. While optional, having an
          appeal process improves transparency and fairness.
        </p>

        <BuilderTextarea
          :model-value="specification.governanceProcesses?.appealProcess?.description"
          label="Process Description"
          placeholder="Describe how decisions can be appealed. Include who can appeal, how appeals are submitted, how they are reviewed, and how appeal decisions are communicated..."
          :rows="3"
          @update:model-value="handleUpdate('appealProcess', 'description', $event)"
        />

        <BuilderInput
          :model-value="specification.governanceProcesses?.appealProcess?.timeframe"
          label="Appeal Timeframe"
          placeholder="e.g., Appeals must be submitted within 30 days of the decision"
          hint="How long do proposers have to submit an appeal?"
          @update:model-value="handleUpdate('appealProcess', 'timeframe', $event)"
        />
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

.process-group {
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-lg);
  background: var(--color-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.process-group.required {
  border-left: 3px solid var(--color-accent);
}

.process-group.optional {
  border-left: 3px solid var(--color-text-light);
}

.group-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin: 0 0 var(--spacing-lg);
}

.required-badge {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  padding: 2px 8px;
  background: var(--color-accent);
  color: var(--color-text-inverse);
  border-radius: var(--radius-sm);
}

.optional-badge {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  padding: 2px 8px;
  background: var(--color-border);
  color: var(--color-text);
  border-radius: var(--radius-sm);
}

.subsection {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.subsection:last-child {
  margin-bottom: 0;
}

.subsection-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
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

.field-wrapper {
  margin-bottom: var(--spacing-md);
}

.field-wrapper:last-child {
  margin-bottom: 0;
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
  align-items: center;
  gap: var(--spacing-sm);
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
  flex-shrink: 0;
}

.item-input {
  flex: 1;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.item-input.full {
  flex: 1;
}

.item-input:focus {
  outline: none;
  border-color: var(--color-accent);
}

.remove-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  flex-shrink: 0;
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
