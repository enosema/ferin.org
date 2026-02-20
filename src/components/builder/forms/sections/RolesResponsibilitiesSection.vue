<script setup>
/**
 * RolesResponsibilitiesSection - Roles and responsibilities form section
 *
 * Structure:
 * 1. Define entities (people/organizations) separately
 * 2. Assign entities to the 6 ISO 19135 standard roles
 * 3. Show warnings for role overlaps
 */
import { computed } from 'vue'
import { useRegisterSpecification } from '@/composables/useRegisterSpecification.js'
import { standardRoles, roleOverlapWarnings } from '@/builder/defaults/defaultSpecification.js'

const { specification, updateField } = useRegisterSpecification()

// Get entities and assignments from specification
const entities = computed(() => specification.rolesAndResponsibilities?.entities || [])
const roleAssignments = computed(() => specification.rolesAndResponsibilities?.roleAssignments || [])

// Generate unique ID
function generateId() {
  return 'entity-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)
}

// === Entity Management ===
function addEntity() {
  // Get current entities from the specification
  const currentEntities = specification.rolesAndResponsibilities?.entities || []
  const newEntities = [...currentEntities, {
    id: generateId(),
    name: '',
    type: 'organization',
    email: ''
  }]
  updateField('rolesAndResponsibilities', 'entities', newEntities)
}

function updateEntity(index, field, value) {
  const currentEntities = specification.rolesAndResponsibilities?.entities || []
  const newEntities = currentEntities.map((entity, i) => {
    if (i === index) {
      return { ...entity, [field]: value }
    }
    return entity
  })
  updateField('rolesAndResponsibilities', 'entities', newEntities)
}

function removeEntity(entityId) {
  // Remove entity
  const currentEntities = specification.rolesAndResponsibilities?.entities || []
  const newEntities = currentEntities.filter(e => e.id !== entityId)
  updateField('rolesAndResponsibilities', 'entities', newEntities)

  // Remove all assignments for this entity
  const currentAssignments = specification.rolesAndResponsibilities?.roleAssignments || []
  const newAssignments = currentAssignments.filter(a => a.entityId !== entityId)
  updateField('rolesAndResponsibilities', 'roleAssignments', newAssignments)
}

// === Role Assignment ===
function isEntityAssignedToRole(entityId, roleKey) {
  return roleAssignments.value.some(a => a.entityId === entityId && a.roleKey === roleKey)
}

function toggleRoleAssignment(entityId, roleKey) {
  const current = [...roleAssignments.value]
  const existingIndex = current.findIndex(a => a.entityId === entityId && a.roleKey === roleKey)

  if (existingIndex === -1) {
    // Add assignment
    current.push({ entityId, roleKey })
  } else {
    // Remove assignment
    current.splice(existingIndex, 1)
  }

  updateField('rolesAndResponsibilities', 'roleAssignments', current)
}

// === Role Overlap Detection ===
function getEntityRoles(entityId) {
  return roleAssignments.value
    .filter(a => a.entityId === entityId)
    .map(a => a.roleKey)
}

function getRoleOverlapWarnings(entityId) {
  const assignedRoles = getEntityRoles(entityId)
  const warnings = []

  for (const [combo, message] of Object.entries(roleOverlapWarnings)) {
    const [role1, role2] = combo.split('+')
    if (assignedRoles.includes(role1) && assignedRoles.includes(role2)) {
      warnings.push({ roles: [role1, role2], message })
    }
  }

  return warnings
}

// Get entity by ID
function getEntityById(entityId) {
  return entities.value.find(e => e.id === entityId)
}

// Get initials for avatar
function getInitials(name) {
  if (!name) return '?'
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

// Entity type options
const entityTypes = [
  { value: 'person', label: 'Person' },
  { value: 'organization', label: 'Organization' },
  { value: 'team', label: 'Team/Committee' }
]
</script>

<template>
  <div class="section-form">
    <!-- Standard Roles Reference -->
    <div class="subsection">
      <h3 class="subsection-title">ISO 19135 Standard Roles</h3>
      <p class="subsection-hint">
        These are the six standard roles defined by ISO 19135. Add entities below and assign them to one or more roles.
      </p>

      <div class="roles-reference">
        <div
          v-for="role in standardRoles"
          :key="role.key"
          class="role-ref-card"
        >
          <div class="role-ref-icon">{{ role.icon }}</div>
          <div class="role-ref-info">
            <h4 class="role-ref-title">{{ role.title }}</h4>
            <p class="role-ref-desc">{{ role.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Entity Definitions -->
    <div class="subsection">
      <div class="subsection-header">
        <div>
          <h3 class="subsection-title">
            Entities
            <span class="required-marker">*</span>
          </h3>
          <p class="subsection-hint">
            Define the people, organizations, or teams that will be assigned to roles.
          </p>
        </div>
        <button type="button" class="add-btn" @click="addEntity">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Add Entity
        </button>
      </div>

      <div class="entities-list">
        <div
          v-for="(entity, index) in entities"
          :key="entity.id"
          class="entity-card"
        >
          <!-- Entity Header -->
          <div class="entity-header">
            <div class="entity-avatar">
              {{ getInitials(entity.name) }}
            </div>
            <input
              :value="entity.name"
              type="text"
              class="entity-name-input"
              placeholder="Entity name (person, organization, or team)"
              @input="updateEntity(index, 'name', $event.target.value)"
            />
            <button type="button" class="remove-btn" @click="removeEntity(entity.id)" title="Remove entity">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <!-- Entity Details -->
          <div class="entity-details">
            <div class="detail-row">
              <div class="detail-field">
                <label class="field-label">Type</label>
                <select
                  :value="entity.type"
                  class="field-select"
                  @change="updateEntity(index, 'type', $event.target.value)"
                >
                  <option v-for="t in entityTypes" :key="t.value" :value="t.value">{{ t.label }}</option>
                </select>
              </div>
              <div class="detail-field">
                <label class="field-label">Email</label>
                <input
                  :value="entity.email"
                  type="email"
                  class="field-input"
                  placeholder="contact@example.com"
                  @input="updateEntity(index, 'email', $event.target.value)"
                />
              </div>
            </div>
          </div>

          <!-- Role Assignments for this entity -->
          <div class="role-assignments">
            <label class="field-label">Assign Roles</label>
            <div class="role-buttons">
              <button
                v-for="role in standardRoles"
                :key="role.key"
                type="button"
                :class="['role-btn', { active: isEntityAssignedToRole(entity.id, role.key) }]"
                :title="role.description"
                @click="toggleRoleAssignment(entity.id, role.key)"
              >
                <span class="role-btn-icon">{{ role.icon }}</span>
                <span class="role-btn-text">{{ role.title }}</span>
                <svg v-if="isEntityAssignedToRole(entity.id, role.key)" class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

            <!-- Overlap Warnings -->
            <div v-if="getRoleOverlapWarnings(entity.id).length > 0" class="overlap-warnings">
              <div
                v-for="(warning, wIndex) in getRoleOverlapWarnings(entity.id)"
                :key="wIndex"
                class="warning-item"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ warning.message }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="entities.length === 0" class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>No entities defined yet</p>
        <button type="button" class="add-btn large" @click="addEntity">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 4v16m8-8H4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Add your first entity
        </button>
      </div>
    </div>

    <!-- Role Assignment Summary -->
    <div v-if="entities.length > 0" class="subsection">
      <h3 class="subsection-title">Role Assignment Summary</h3>
      <div class="assignment-summary">
        <div
          v-for="role in standardRoles"
          :key="role.key"
          class="summary-row"
        >
          <div class="summary-role">
            <span class="summary-icon">{{ role.icon }}</span>
            <span class="summary-title">{{ role.title }}</span>
          </div>
          <div class="summary-entities">
            <template v-if="roleAssignments.filter(a => a.roleKey === role.key).length > 0">
              <span
                v-for="assignment in roleAssignments.filter(a => a.roleKey === role.key)"
                :key="assignment.entityId"
                class="entity-tag"
              >
                {{ getEntityById(assignment.entityId)?.name || 'Unknown' }}
              </span>
            </template>
            <span v-else class="unassigned">Not assigned</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-form {
  max-width: 1000px;
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
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.required-marker {
  color: var(--color-error);
}

.subsection-hint {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

/* Roles Reference */
.roles-reference {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm);
}

.role-ref-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.role-ref-icon {
  font-size: 1.5rem;
}

.role-ref-info {
  flex: 1;
}

.role-ref-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin: 0;
}

.role-ref-desc {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
}

/* Entities */
.entities-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.entity-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.entity-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.entity-avatar {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.entity-name-input {
  flex: 1;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  background: transparent;
  border: none;
  outline: none;
}

.entity-name-input::placeholder {
  font-weight: var(--font-weight-normal);
  color: var(--color-text-light);
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
  width: 16px;
  height: 16px;
  color: var(--color-text-light);
}

.remove-btn:hover svg {
  color: var(--color-error);
}

.entity-details {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
}

.detail-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.detail-field {
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

.field-input,
.field-select {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.field-input:focus,
.field-select:focus {
  outline: none;
  border-color: var(--color-accent);
}

/* Role Assignments */
.role-assignments {
  padding: var(--spacing-md);
}

.role-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.role-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.role-btn:hover {
  border-color: var(--color-accent);
  background: rgba(34, 211, 238, 0.05);
}

.role-btn.active {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-text-inverse);
}

.role-btn-icon {
  font-size: var(--font-size-sm);
}

.role-btn-text {
  white-space: nowrap;
}

.check-icon {
  width: 12px;
  height: 12px;
  margin-left: 2px;
}

/* Overlap Warnings */
.overlap-warnings {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
}

.warning-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  background: rgba(217, 119, 6, 0.1);
  border: 1px solid rgba(217, 119, 6, 0.3);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  color: var(--color-warning);
  margin-bottom: var(--spacing-xs);
}

.warning-item:last-child {
  margin-bottom: 0;
}

.warning-item svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Assignment Summary */
.assignment-summary {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.summary-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.summary-role {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  width: 160px;
  flex-shrink: 0;
}

.summary-icon {
  font-size: 1.25rem;
}

.summary-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.summary-entities {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.entity-tag {
  padding: 2px var(--spacing-sm);
  font-size: var(--font-size-xs);
  background: var(--color-accent);
  color: var(--color-text-inverse);
  border-radius: var(--radius-sm);
}

.unassigned {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  font-style: italic;
}

/* Add Button */
.add-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
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

.add-btn.large {
  padding: var(--spacing-sm) var(--spacing-lg);
}

/* Empty State */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-xl);
  background: var(--color-surface);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-md);
  text-align: center;
}

.empty-state svg {
  width: 48px;
  height: 48px;
  color: var(--color-text-light);
  opacity: 0.5;
  margin-bottom: var(--spacing-md);
}

.empty-state p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-md);
}

/* Responsive */
@media (max-width: 768px) {
  .roles-reference {
    grid-template-columns: 1fr;
  }

  .detail-row {
    grid-template-columns: 1fr;
  }

  .subsection-header {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .role-btn-text {
    display: none;
  }

  .summary-role {
    width: 120px;
  }

  .summary-title {
    display: none;
  }
}

/* Dark mode */
[data-theme="dark"] .entity-card,
[data-theme="dark"] .role-ref-card,
[data-theme="dark"] .summary-row {
  background: rgba(255, 255, 255, 0.02);
}
</style>
