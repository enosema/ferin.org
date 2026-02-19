<template>
  <article class="content-page">
    <header class="page-header">
      <div class="breadcrumb">
        <router-link to="/build/migrate">Migration Guide</router-link>
        <span class="separator">/</span>
        <span>Governance Update</span>
      </div>
      <h1>Governance Update</h1>
      <p class="page-lead">
        Aligning your governance roles and processes with ISO 19135:2026.
      </p>
    </header>

    <section class="content-section">
      <h2>What Changed</h2>
      <p>
        The governance model in 2026 is largely compatible with 2015, but with
        some terminology and process changes. The good news: your existing
        governance structure likely needs minimal changes.
      </p>
    </section>

    <section class="content-section">
      <h2>Role Mapping</h2>

      <table class="roles-table">
        <thead>
          <tr>
            <th>2015 Role</th>
            <th>2026 Role</th>
            <th>Changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Register Owner</td>
            <td>Register Owner</td>
            <td class="none">No change</td>
          </tr>
          <tr>
            <td>Register Manager</td>
            <td>Register Manager</td>
            <td class="none">No change</td>
          </tr>
          <tr>
            <td>Control Body</td>
            <td>Control Body</td>
            <td class="none">No change</td>
          </tr>
          <tr>
            <td>Submitting Organization</td>
            <td>Proposer</td>
            <td class="rename">Renamed</td>
          </tr>
          <tr>
            <td>Registry Manager</td>
            <td>System Manager</td>
            <td class="rename">Renamed</td>
          </tr>
          <tr>
            <td>Register User</td>
            <td>User</td>
            <td class="rename">Renamed</td>
          </tr>
        </tbody>
      </table>

      <div class="callout">
        <h4>Minimal Impact</h4>
        <p>
          The roles and their responsibilities are essentially unchanged. Update
          terminology in your documentation, but your organizational structure
          remains valid.
        </p>
      </div>
    </section>

    <section class="content-section">
      <h2>Process Changes</h2>

      <div class="processes">
        <div class="process">
          <h3>Proposal Process</h3>
          <div class="comparison">
            <div class="before">
              <h4>2015</h4>
              <ul>
                <li>Submitting Organization submits proposal</li>
                <li>Register Manager reviews</li>
                <li>Control Body decides</li>
                <li>Item enters as "submitted" status</li>
              </ul>
            </div>
            <div class="after">
              <h4>2026</h4>
              <ul>
                <li>Proposer submits proposal</li>
                <li>Register Manager reviews</li>
                <li>Control Body decides</li>
                <li>Item added directly as valid/published</li>
              </ul>
            </div>
          </div>
          <div class="change-note">
            <strong>Key change:</strong> No "submitted" status in register. Proposals
            exist outside the register until approved.
          </div>
        </div>

        <div class="process">
          <h3>Appeal Process</h3>
          <div class="comparison">
            <div class="before">
              <h4>2015</h4>
              <ul>
                <li>Defined in normative clauses</li>
                <li>Specific time limits required</li>
                <li>Decision status: tentative → final</li>
              </ul>
            </div>
            <div class="after">
              <h4>2026</h4>
              <ul>
                <li>Defined in register specification</li>
                <li>Time limits determined by owner</li>
                <li>Process customizable per register</li>
              </ul>
            </div>
          </div>
          <div class="change-note">
            <strong>Key change:</strong> More flexibility. Document your appeal
            process in your register specification.
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Register Lifecycle</h2>
      <p>2026 explicitly defines three phases:</p>

      <div class="lifecycle">
        <div class="phase">
          <div class="phase-number">1</div>
          <div class="phase-content">
            <h3>Establishment</h3>
            <ul>
              <li>Define register specification</li>
              <li>Assign register owner</li>
              <li>Appoint register manager</li>
              <li>Set up register system</li>
            </ul>
          </div>
        </div>

        <div class="phase">
          <div class="phase-number">2</div>
          <div class="phase-content">
            <h3>Operation</h3>
            <ul>
              <li>Accept and process proposals</li>
              <li>Manage content lifecycle</li>
              <li>Publish updates</li>
              <li>Maintain commitments</li>
            </ul>
          </div>
        </div>

        <div class="phase">
          <div class="phase-number">3</div>
          <div class="phase-content">
            <h3>Decommission</h3>
            <ul>
              <li>Notify stakeholders</li>
              <li>Archive content</li>
              <li>Transfer or preserve data</li>
              <li>Redirect identifiers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>What to Update</h2>

      <div class="checklist-section">
        <h3>Documentation Updates</h3>
        <ul class="checklist">
          <li>
            <span class="check">☐</span>
            Rename "Submitting Organization" to "Proposer" in docs
          </li>
          <li>
            <span class="check">☐</span>
            Rename "Registry Manager" to "System Manager" in docs
          </li>
          <li>
            <span class="check">☐</span>
            Document your proposal process in register specification
          </li>
          <li>
            <span class="check">☐</span>
            Document your appeal process (if applicable)
          </li>
          <li>
            <span class="check">☐</span>
            Define time limits for decisions
          </li>
        </ul>
      </div>

      <div class="checklist-section">
        <h3>Process Updates</h3>
        <ul class="checklist">
          <li>
            <span class="check">☐</span>
            Update proposal submission forms to use new terminology
          </li>
          <li>
            <span class="check">☐</span>
            Remove "submitted" status from workflow
          </li>
          <li>
            <span class="check">☐</span>
            Approved items go directly to valid/published
          </li>
          <li>
            <span class="check">☐</span>
            Update any automated systems for status handling
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Next Steps</h2>
      <div class="next-steps-inline">
        <router-link to="/build/migrate/concepts" class="btn-primary">
          Document Concepts →
        </router-link>
        <router-link to="/build/migrate/checklist" class="btn-secondary">
          View Full Checklist
        </router-link>
      </div>
    </section>
  </article>
</template>

<script setup>
</script>

<style scoped>
.content-page {
  max-width: 900px;
  margin: 0 auto;
}

.breadcrumb {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.breadcrumb a {
  color: var(--color-accent);
  text-decoration: none;
}

.breadcrumb .separator {
  margin: 0 var(--spacing-xs);
}

.page-header {
  margin-bottom: var(--spacing-2xl);
}

.page-lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
}

.content-section {
  margin-bottom: var(--spacing-2xl);
}

.content-section h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
}

.roles-table {
  width: 100%;
  margin: var(--spacing-lg) 0;
  border-collapse: collapse;
}

.roles-table th,
.roles-table td {
  padding: var(--spacing-md);
  text-align: left;
  border: 1px solid var(--color-border);
}

.roles-table th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
}

.roles-table td.none {
  color: #16a34a;
}

.roles-table td.rename {
  background: rgba(234, 179, 8, 0.1);
  color: #ca8a04;
}

.callout {
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.callout h4 {
  margin: 0 0 var(--spacing-sm);
  color: #16a34a;
}

.callout p {
  margin: 0;
}

.processes {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.process {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.process h3 {
  margin: 0 0 var(--spacing-lg);
  font-size: var(--font-size-lg);
  color: var(--color-primary);
}

.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
}

.comparison h4 {
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-md);
}

.comparison ul {
  margin: 0;
  padding-left: var(--spacing-xl);
}

.comparison li {
  margin-bottom: var(--spacing-xs);
}

.before {
  background: rgba(107, 114, 128, 0.05);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}

.after {
  background: rgba(34, 197, 94, 0.05);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}

.change-note {
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
}

.change-note strong {
  color: #2563eb;
}

.lifecycle {
  display: flex;
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.phase {
  flex: 1;
  display: flex;
  gap: var(--spacing-md);
}

.phase-number {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  color: white;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  border-radius: 50%;
  flex-shrink: 0;
}

.phase-content {
  flex: 1;
}

.phase-content h3 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
}

.phase-content ul {
  margin: 0;
  padding-left: var(--spacing-xl);
  font-size: var(--font-size-sm);
}

.phase-content li {
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-light);
}

.checklist-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
}

.checklist-section h3 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.checklist li {
  padding: var(--spacing-md);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.checklist .check {
  font-size: var(--font-size-lg);
}

.next-steps-inline {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  color: var(--color-text-inverse);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: transparent;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.btn-secondary:hover {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}

@media (max-width: 768px) {
  .comparison {
    grid-template-columns: 1fr;
  }

  .lifecycle {
    flex-direction: column;
  }
}
</style>
