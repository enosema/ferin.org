<template>
  <article class="content-page migration-page">
    <nav class="breadcrumb">
      <router-link to="/implement/migration">Migration Guide</router-link>
      <span class="separator">/</span>
      <span class="current">Governance Migration</span>
    </nav>

    <header class="page-header">
      <h1>Governance Migration</h1>
      <p class="page-lead">
        Updates to roles, processes, and the new register specification requirements.
      </p>
    </header>

    <section class="content-section">
      <h2>Role Migration</h2>
      <p>
        The governance roles remain largely consistent but with some name changes
        and expanded responsibilities.
      </p>

      <table class="roles-table">
        <thead>
          <tr>
            <th>2015 Role</th>
            <th>2026 Role</th>
            <th>Responsibility Changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Register Owner</strong></td>
            <td><strong>Register Owner</strong></td>
            <td>
              <ul>
                <li>Now defines commitments</li>
                <li>Approves register specification</li>
                <li>Handles appeals (unchanged)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Register Manager</strong></td>
            <td><strong>Register Manager</strong></td>
            <td>
              <ul>
                <li>Ensures commitment compliance</li>
                <li>Manages register specification</li>
                <li>Process management (unchanged)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Control Body</strong></td>
            <td><strong>Control Body</strong></td>
            <td>
              <ul>
                <li>Decision-making authority (unchanged)</li>
                <li>May review concept changes</li>
              </ul>
            </td>
          </tr>
          <tr class="renamed">
            <td><strong>Submitting Organization</strong></td>
            <td><strong>Proposer</strong></td>
            <td>
              <ul>
                <li>Renamed for clarity</li>
                <li>Same responsibilities</li>
              </ul>
            </td>
          </tr>
          <tr class="renamed">
            <td><strong>Registry Manager</strong></td>
            <td><strong>System Manager</strong></td>
            <td>
              <ul>
                <li>Renamed for clarity</li>
                <li>Technical system management</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td><strong>Register User</strong></td>
            <td><strong>Register User</strong></td>
            <td>
              <ul>
                <li>Unchanged</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Process Changes</h2>

      <div class="process-comparison">
        <div class="process">
          <h3>2015 Processes</h3>
          <ul>
            <li>Proposal submission</li>
            <li>Control body review</li>
            <li>Appeal process</li>
            <li>Item status management</li>
            <li>Register publication</li>
          </ul>
        </div>

        <div class="process">
          <h3>2026 Processes</h3>
          <ul>
            <li>Establishment process (new)</li>
            <li>Proposal submission</li>
            <li>Control body review</li>
            <li>Appeal process</li>
            <li>Content management process</li>
            <li>Commitment compliance (new)</li>
            <li>Decommission process (new)</li>
          </ul>
        </div>
      </div>

      <div class="new-processes">
        <h3>New Processes to Implement</h3>
        <div class="process-cards">
          <div class="process-card">
            <h4>Establishment</h4>
            <p>Creating and formally establishing the register.</p>
            <ul>
              <li>Define register specification</li>
              <li>Appoint roles</li>
              <li>Declare commitments</li>
              <li>Initial content load</li>
            </ul>
          </div>
          <div class="process-card">
            <h4>Commitment Compliance</h4>
            <p>Ensuring declared commitments are met.</p>
            <ul>
              <li>Monitor persistence levels</li>
              <li>Verify access availability</li>
              <li>Track transparency requirements</li>
            </ul>
          </div>
          <div class="process-card">
            <h4>Decommission</h4>
            <p>Properly retiring a register.</p>
            <ul>
              <li>Notify stakeholders</li>
              <li>Archive content</li>
              <li>Redirect identifiers</li>
              <li>Document rationale</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Register Specification (New Requirement)</h2>
      <p>
        The 2026 edition requires a formal <strong>register specification</strong>
        document (previously called "technical standard"). This is a key new obligation.
      </p>

      <div class="spec-requirements">
        <h3>Required Content</h3>
        <div class="spec-grid">
          <div class="spec-item required">
            <h4>Purpose and Scope</h4>
            <p>What the register is for and its boundaries.</p>
          </div>
          <div class="spec-item required">
            <h4>Roles and Responsibilities</h4>
            <p>Who fills each role and their duties.</p>
          </div>
          <div class="spec-item required">
            <h4>Governance Processes</h4>
            <p>How proposals, approvals, and appeals work.</p>
          </div>
          <div class="spec-item required">
            <h4>Data Requirements</h4>
            <p>Schema and content requirements.</p>
          </div>
          <div class="spec-item required">
            <h4>Identifier Scheme</h4>
            <p>How identifiers are structured and assigned.</p>
          </div>
          <div class="spec-item new">
            <h4>Commitments</h4>
            <p>Declared access, persistence, and transparency levels.</p>
          </div>
          <div class="spec-item conditional">
            <h4>Concept Organization</h4>
            <p>How concepts are organized (for concept registers).</p>
          </div>
        </div>
      </div>

      <div class="migration-box">
        <h4>Creating Your Register Specification</h4>
        <ol>
          <li>
            <strong>Gather existing documentation</strong>
            <p>Collect your current technical standards, procedures, and policies.</p>
          </li>
          <li>
            <strong>Document commitments</strong>
            <p>Determine and declare your access, persistence, and transparency levels.</p>
          </li>
          <li>
            <strong>Update role assignments</strong>
            <p>Verify all roles are assigned with updated names.</p>
          </li>
          <li>
            <strong>Define processes</strong>
            <p>Document all governance processes including new ones.</p>
          </li>
          <li>
            <strong>Get approval</strong>
            <p>Register owner must approve the specification.</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="content-section">
      <h2>Commitments Declaration</h2>
      <p>
        A key new requirement is declaring your commitments to users. Choose
        levels you can realistically maintain.
      </p>

      <div class="commitments-matrix">
        <h3>Minimum Declarations</h3>
        <table class="commitments-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Minimum Level</th>
              <th>Your Declaration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access</td>
              <td>Level 1: Metadata access</td>
              <td>
                <select v-model="commitments.access">
                  <option value="">Select...</option>
                  <option value="1">Level 1: Metadata access</option>
                  <option value="2">Level 2: Content access</option>
                  <option value="3">Level 3: Historic access</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Persistence</td>
              <td>Level 1: Identifier persistence</td>
              <td>
                <select v-model="commitments.persistence">
                  <option value="">Select...</option>
                  <option value="1">Level 1: Identifier persistence</option>
                  <option value="2">Level 2: Metadata persistence</option>
                  <option value="3">Level 3: Content persistence</option>
                  <option value="4">Level 4: Append-only</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Transparency</td>
              <td>Optional</td>
              <td>
                <select v-model="commitments.transparency">
                  <option value="">None</option>
                  <option value="1">Level 1: Metadata transparency</option>
                  <option value="2">Level 2: Content transparency</option>
                  <option value="3">Level 3: Historic transparency</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>Migration Checklist</h2>
      <div class="checklist-box">
        <ul class="checklist">
          <li>☐ Update role names in documentation</li>
          <li>☐ Update role assignments if needed</li>
          <li>☐ Create register specification document</li>
          <li>☐ Define and document commitments</li>
          <li>☐ Update process documentation</li>
          <li>☐ Add establishment process (if new register)</li>
          <li>☐ Add decommission process</li>
          <li>☐ Update training materials</li>
          <li>☐ Notify stakeholders of changes</li>
        </ul>
      </div>
    </section>

    <nav class="page-nav">
      <router-link to="/implement/migration/data-model" class="nav-prev">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Data Model Migration</span>
      </router-link>
      <router-link to="/implement/migration/paths" class="nav-next">
        <span class="nav-label">Next</span>
        <span class="nav-title">Migration Paths</span>
      </router-link>
    </nav>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const commitments = ref({
  access: '',
  persistence: '',
  transparency: ''
})
</script>

<style scoped>
@import './migration-shared.css';

.roles-table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.roles-table th,
.roles-table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  vertical-align: top;
}

.roles-table th {
  background: var(--color-background);
  font-weight: var(--font-weight-semibold);
}

.roles-table td ul {
  margin: 0;
  padding-left: var(--spacing-md);
}

.roles-table tr.renamed td:first-child {
  text-decoration: line-through;
  color: var(--color-text-light);
}

.process-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.process {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.process:first-child {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.process:last-child {
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.process h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
}

.process ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.process li {
  margin-bottom: var(--spacing-xs);
}

.new-processes {
  margin: var(--spacing-xl) 0;
}

.process-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.process-card {
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.process-card h4 {
  font-size: var(--font-size-base);
  color: var(--color-accent);
  margin: 0 0 var(--spacing-sm);
}

.process-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-sm);
}

.process-card ul {
  margin: 0;
  padding-left: var(--spacing-md);
  font-size: var(--font-size-sm);
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.spec-item {
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.spec-item.required {
  border-left: 3px solid #16a34a;
}

.spec-item.new {
  border-left: 3px solid #4f46e5;
  background: rgba(99, 102, 241, 0.05);
}

.spec-item.conditional {
  border-left: 3px solid #ca8a04;
}

.spec-item h4 {
  font-size: var(--font-size-sm);
  margin: 0 0 var(--spacing-xs);
}

.spec-item p {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
}

.migration-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.migration-box h4 {
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.migration-box ol {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.migration-box li {
  margin-bottom: var(--spacing-sm);
}

.migration-box li p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: var(--spacing-xs) 0 0;
}

.commitments-matrix {
  margin: var(--spacing-lg) 0;
}

.commitments-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.commitments-table th,
.commitments-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.commitments-table th {
  background: var(--color-background);
  font-weight: var(--font-weight-semibold);
}

.commitments-table select {
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}

.checklist-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.checklist li {
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border);
  font-size: var(--font-size-sm);
}

.checklist li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .process-comparison {
    grid-template-columns: 1fr;
  }

  .process-cards {
    grid-template-columns: 1fr;
  }

  .spec-grid {
    grid-template-columns: 1fr;
  }
}
</style>
