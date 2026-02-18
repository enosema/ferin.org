<template>
  <article class="content-page migration-page">
    <nav class="breadcrumb">
      <router-link to="/implement/migration">Migration Guide</router-link>
      <span class="separator">/</span>
      <span class="current">Implementation Checklist</span>
    </nav>

    <header class="page-header">
      <h1>Implementation Checklist</h1>
      <p class="page-lead">
        A comprehensive checklist for migrating to ISO 19135:2026,
        organized by phase with effort estimates.
      </p>
    </header>

    <section class="content-section">
      <h2>Phase 1: Planning</h2>
      <div class="checklist-phase">
        <div class="checklist-item" v-for="item in planningItems" :key="item.id">
          <input type="checkbox" :id="item.id" v-model="item.checked" />
          <label :for="item.id">
            <span class="item-text">{{ item.text }}</span>
            <span :class="['item-effort', item.effort]">{{ item.effortLabel }}</span>
          </label>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Phase 2: Data Model</h2>
      <div class="checklist-phase">
        <div class="checklist-item" v-for="item in dataModelItems" :key="item.id">
          <input type="checkbox" :id="item.id" v-model="item.checked" />
          <label :for="item.id">
            <span class="item-text">{{ item.text }}</span>
            <span :class="['item-effort', item.effort]">{{ item.effortLabel }}</span>
          </label>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Phase 3: Governance</h2>
      <div class="checklist-phase">
        <div class="checklist-item" v-for="item in governanceItems" :key="item.id">
          <input type="checkbox" :id="item.id" v-model="item.checked" />
          <label :for="item.id">
            <span class="item-text">{{ item.text }}</span>
            <span :class="['item-effort', item.effort]">{{ item.effortLabel }}</span>
          </label>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Phase 4: Implementation</h2>
      <div class="checklist-phase">
        <div class="checklist-item" v-for="item in implementationItems" :key="item.id">
          <input type="checkbox" :id="item.id" v-model="item.checked" />
          <label :for="item.id">
            <span class="item-text">{{ item.text }}</span>
            <span :class="['item-effort', item.effort]">{{ item.effortLabel }}</span>
          </label>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Phase 5: Validation</h2>
      <div class="checklist-phase">
        <div class="checklist-item" v-for="item in validationItems" :key="item.id">
          <input type="checkbox" :id="item.id" v-model="item.checked" />
          <label :for="item.id">
            <span class="item-text">{{ item.text }}</span>
            <span :class="['item-effort', item.effort]">{{ item.effortLabel }}</span>
          </label>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Progress Summary</h2>
      <div class="progress-summary">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <div class="progress-stats">
          <span>{{ completedCount }} of {{ totalCount }} items completed</span>
          <span class="percentage">{{ progressPercentage }}%</span>
        </div>
      </div>
    </section>

    <nav class="page-nav">
      <router-link to="/implement/migration/paths" class="nav-prev">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Migration Paths</span>
      </router-link>
      <router-link to="/implement/migration/faq" class="nav-next">
        <span class="nav-label">Next</span>
        <span class="nav-title">FAQ &amp; Common Pitfalls</span>
      </router-link>
    </nav>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'

const planningItems = ref([
  { id: 'p1', text: 'Read paradigm shifts documentation', checked: false, effort: 'small', effortLabel: '1-2h' },
  { id: 'p2', text: 'Complete terminology mapping review', checked: false, effort: 'small', effortLabel: '1-2h' },
  { id: 'p3', text: 'Determine target register type', checked: false, effort: 'small', effortLabel: '2-4h' },
  { id: 'p4', text: 'Inventory current statuses and count items', checked: false, effort: 'medium', effortLabel: '4-8h' },
  { id: 'p5', text: 'Handle pending "submitted" items', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'p6', text: 'Select migration path', checked: false, effort: 'small', effortLabel: '1h' },
  { id: 'p7', text: 'Create project timeline', checked: false, effort: 'small', effortLabel: '2-4h' },
  { id: 'p8', text: 'Identify stakeholders and communicate plan', checked: false, effort: 'medium', effortLabel: '4-8h' }
])

const dataModelItems = ref([
  { id: 'd1', text: 'Design status dimension schema', checked: false, effort: 'medium', effortLabel: '4-8h' },
  { id: 'd2', text: 'Implement status dimension storage', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'd3', text: 'Create status migration script', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'd4', text: 'Test status migration on sample data', checked: false, effort: 'small', effortLabel: '2-4h' },
  { id: 'd5', text: 'Update version model (major/minor)', checked: false, effort: 'small', effortLabel: '4-8h' },
  { id: 'd6', text: 'Migrate identifier scheme if needed', checked: false, effort: 'medium', effortLabel: '4-8h' },
  { id: 'd7', text: 'Update relation model (predecessor → supersedes)', checked: false, effort: 'medium', effortLabel: '4-8h' },
  { id: 'd8', text: 'Implement Change objects', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'd9', text: 'For concept registers: Extract concepts from content', checked: false, effort: 'large', effortLabel: '1-2w' },
  { id: 'd10', text: 'For concept registers: Implement concept plane', checked: false, effort: 'large', effortLabel: '1-2w' }
])

const governanceItems = ref([
  { id: 'g1', text: 'Update role names in documentation', checked: false, effort: 'small', effortLabel: '2-4h' },
  { id: 'g2', text: 'Update role assignments if needed', checked: false, effort: 'small', effortLabel: '1-2h' },
  { id: 'g3', text: 'Define commitment levels', checked: false, effort: 'medium', effortLabel: '2-4h' },
  { id: 'g4', text: 'Create register specification document', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'g5', text: 'Update proposal process documentation', checked: false, effort: 'small', effortLabel: '2-4h' },
  { id: 'g6', text: 'Add establishment process', checked: false, effort: 'small', effortLabel: '2-4h' },
  { id: 'g7', text: 'Add decommission process', checked: false, effort: 'small', effortLabel: '2-4h' },
  { id: 'g8', text: 'Get register owner approval', checked: false, effort: 'small', effortLabel: '1-2h' }
])

const implementationItems = ref([
  { id: 'i1', text: 'Update database schema', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'i2', text: 'Update API endpoints', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'i3', text: 'Update UI components for new status model', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'i4', text: 'Remove XML schema dependencies if applicable', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'i5', text: 'Update user documentation', checked: false, effort: 'medium', effortLabel: '1d' },
  { id: 'i6', text: 'Update training materials', checked: false, effort: 'medium', effortLabel: '1d' },
  { id: 'i7', text: 'Run full data migration', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'i8', text: 'Verify data migration completeness', checked: false, effort: 'small', effortLabel: '4-8h' }
])

const validationItems = ref([
  { id: 'v1', text: 'Run conformance test suite', checked: false, effort: 'medium', effortLabel: '4-8h' },
  { id: 'v2', text: 'Test all status transitions', checked: false, effort: 'small', effortLabel: '2-4h' },
  { id: 'v3', text: 'Test governance workflows', checked: false, effort: 'small', effortLabel: '2-4h' },
  { id: 'v4', text: 'Validate historical data access', checked: false, effort: 'small', effortLabel: '2-4h' },
  { id: 'v5', text: 'User acceptance testing', checked: false, effort: 'medium', effortLabel: '1-2d' },
  { id: 'v6', text: 'Performance testing', checked: false, effort: 'small', effortLabel: '4-8h' },
  { id: 'v7', text: 'Document migration completion', checked: false, effort: 'small', effortLabel: '1-2h' },
  { id: 'v8', text: 'Communicate completion to stakeholders', checked: false, effort: 'small', effortLabel: '1-2h' }
])

const allItems = computed(() => [
  ...planningItems.value,
  ...dataModelItems.value,
  ...governanceItems.value,
  ...implementationItems.value,
  ...validationItems.value
])

const totalCount = computed(() => allItems.value.length)
const completedCount = computed(() => allItems.value.filter(i => i.checked).length)
const progressPercentage = computed(() => {
  if (totalCount.value === 0) return 0
  return Math.round((completedCount.value / totalCount.value) * 100)
})
</script>

<style scoped>
@import './migration-shared.css';

.checklist-phase {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.checklist-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}

.checklist-item:last-child {
  border-bottom: none;
}

.checklist-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin: var(--spacing-md);
  accent-color: var(--color-accent);
}

.checklist-item label {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 0;
  cursor: pointer;
}

.checklist-item input:checked + label .item-text {
  text-decoration: line-through;
  color: var(--color-text-light);
}

.item-text {
  font-size: var(--font-size-sm);
}

.item-effort {
  font-size: var(--font-size-xs);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
}

.item-effort.small {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
}

.item-effort.medium {
  background: rgba(234, 179, 8, 0.1);
  color: #ca8a04;
}

.item-effort.large {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.progress-summary {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.progress-bar {
  height: 20px;
  background: var(--color-background);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--spacing-md);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent) 0%, #22c55e 100%);
  border-radius: var(--radius-md);
  transition: width 0.3s ease;
}

.progress-stats {
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-sm);
}

.progress-stats .percentage {
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
}
</style>
