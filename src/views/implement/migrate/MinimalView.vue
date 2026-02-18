<template>
  <article class="content-page">
    <header class="page-header">
      <div class="breadcrumb">
        <router-link to="/implement/migrate">Migration Guide</router-link>
        <span class="separator">/</span>
        <span>Minimal Migration</span>
      </div>
      <h1>Minimal Migration</h1>
      <p class="page-lead">
        What's the absolute minimum work required to be compliant?
      </p>
    </header>

    <section class="content-section highlight">
      <h2>The Two Things You Must Do</h2>

      <div class="must-do-grid">
        <div class="must-do-card">
          <div class="card-number">1</div>
          <h3>Define Your Register Specification</h3>
          <p>
            Create a document that defines your register's purpose, scope, governance,
            and commitments. This replaces the 2015 "technical standard" concept.
          </p>
          <router-link to="/implement/migrate/register-specification" class="card-link">
            How to do this →
          </router-link>
        </div>

        <div class="must-do-card">
          <div class="card-number">2</div>
          <h3>Document Your Concept Model</h3>
          <p>
            Define your concepts, concept versions, allowed relations, register item
            classes, and governance procedures. This is the new two-plane architecture.
          </p>
          <router-link to="/implement/migrate/concepts" class="card-link">
            How to do this →
          </router-link>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>What This Means in Practice</h2>

      <h3>1. Register Specification</h3>
      <p>Your register specification must include:</p>
      <ul class="checklist">
        <li>
          <span class="check">☐</span>
          <strong>Purpose and scope</strong> — What does your register contain and why?
        </li>
        <li>
          <span class="check">☐</span>
          <strong>Roles and responsibilities</strong> — Who owns, manages, and proposes changes?
        </li>
        <li>
          <span class="check">☐</span>
          <strong>Governance processes</strong> — How are proposals handled, approved, appealed?
        </li>
        <li>
          <span class="check">☐</span>
          <strong>Commitments</strong> — What promises do you make about access and persistence?
        </li>
        <li>
          <span class="check">☐</span>
          <strong>Concept organization</strong> — How are your concepts structured?
        </li>
        <li>
          <span class="check">☐</span>
          <strong>Data requirements</strong> — What content must register items contain?
        </li>
      </ul>

      <h3>2. Concept Model Documentation</h3>
      <p>You must document:</p>
      <ul class="checklist">
        <li>
          <span class="check">☐</span>
          <strong>Concepts</strong> — What concepts does your register manage?
        </li>
        <li>
          <span class="check">☐</span>
          <strong>Concept versions</strong> — How are concept versions identified?
        </li>
        <li>
          <span class="check">☐</span>
          <strong>Allowed relations</strong> — What relationships can concepts have?
        </li>
        <li>
          <span class="check">☐</span>
          <strong>Register item classes</strong> — What types of content items exist?
        </li>
        <li>
          <span class="check">☐</span>
          <strong>Governance procedures</strong> — How are changes processed?
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>What You Can Keep As-Is</h2>

      <div class="good-news">
        <h3>✓ No Changes Required</h3>
        <p>These aspects of your 2015 register can remain unchanged:</p>
        <ul>
          <li><strong>Existing identifiers</strong> — They become object identifiers</li>
          <li><strong>Content data</strong> — Your register item data structure</li>
          <li><strong>Governance roles</strong> — Owner, Manager, Control Body remain</li>
          <li><strong>Status values</strong> — Can be mapped to new dimensions</li>
          <li><strong>Change history</strong> — Existing history is preserved</li>
          <li><strong>Technology stack</strong> — No XML schema required</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Status Mapping (Quick Reference)</h2>
      <p>
        Your existing 2015 status values map to the new 2026 dimensions:
      </p>

      <table class="status-table">
        <thead>
          <tr>
            <th>2015 Status</th>
            <th>2026 Validity</th>
            <th>2026 Publication</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>valid</code></td>
            <td><span class="status valid">valid</span></td>
            <td><span class="status published">published</span></td>
          </tr>
          <tr>
            <td><code>invalid</code></td>
            <td><span class="status invalid">invalid</span></td>
            <td><span class="status published">published</span></td>
          </tr>
          <tr>
            <td><code>retired</code></td>
            <td><span class="status valid">valid</span></td>
            <td><span class="status unpublished">unpublished</span></td>
          </tr>
          <tr>
            <td><code>superseded</code></td>
            <td><span class="status valid">valid</span></td>
            <td><span class="status published">published</span></td>
          </tr>
          <tr class="note">
            <td><code>submitted</code></td>
            <td colspan="2">
              <em>No equivalent</em> — proposals exist outside the register
            </td>
          </tr>
        </tbody>
      </table>

      <div class="callout info">
        <h4>Superseded Items</h4>
        <p>
          In 2026, superseded items are identified by their <strong>relation</strong>
          to a successor, not by status alone. Add a "supersedes" relation when
          migrating superseded items.
        </p>
      </div>
    </section>

    <section class="content-section">
      <h2>Migration Effort by Register Type</h2>

      <div class="effort-cards">
        <div class="effort-card low">
          <div class="effort-header">
            <span class="effort-label">Low Effort</span>
            <h3>Core → Content Register</h3>
          </div>
          <p>If you only used 2015 Core conformance:</p>
          <ul>
            <li>Create register specification document</li>
            <li>Document your concept model</li>
            <li>Map status values to dimensions</li>
          </ul>
          <p class="time">Estimated: 1-2 days</p>
        </div>

        <div class="effort-card medium">
          <div class="effort-header">
            <span class="effort-label">Medium Effort</span>
            <h3>Extended → Governed Content Register</h3>
          </div>
          <p>If you used 2015 Extended conformance:</p>
          <ul>
            <li>All of the above, plus:</li>
            <li>Define commitments (access, persistence, transparency)</li>
            <li>Document governance processes</li>
            <li>Verify proposal handling procedures</li>
          </ul>
          <p class="time">Estimated: 3-5 days</p>
        </div>

        <div class="effort-card medium">
          <div class="effort-header">
            <span class="effort-label">Medium Effort</span>
            <h3>Hierarchical → Governed Concept Register</h3>
          </div>
          <p>If you used 2015 Hierarchical conformance:</p>
          <ul>
            <li>All of the above, plus:</li>
            <li>Define concept hierarchy relations</li>
            <li>Document subregister relationships</li>
            <li>Update composite register topology</li>
          </ul>
          <p class="time">Estimated: 5-10 days</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Ready to Start?</h2>
      <div class="next-steps-inline">
        <router-link to="/implement/migrate/register-specification" class="btn-primary">
          Step 1: Register Specification →
        </router-link>
        <router-link to="/implement/migrate/checklist" class="btn-secondary">
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

.breadcrumb a:hover {
  text-decoration: underline;
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

.content-section.highlight {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, var(--color-surface) 100%);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.content-section h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
}

.content-section h3 {
  font-size: var(--font-size-lg);
  margin: var(--spacing-xl) 0 var(--spacing-md);
  color: var(--color-primary);
}

.must-do-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.must-do-card {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  position: relative;
}

.card-number {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  color: white;
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  border-radius: 50%;
}

.must-do-card h3 {
  margin: 0 0 var(--spacing-md);
  padding-right: 60px;
  font-size: var(--font-size-lg);
}

.must-do-card p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.card-link {
  display: inline-flex;
  align-items: center;
  color: var(--color-accent);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
}

.card-link:hover {
  text-decoration: underline;
}

.checklist {
  list-style: none;
  padding: 0;
}

.checklist li {
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.checklist .check {
  font-size: var(--font-size-lg);
  flex-shrink: 0;
}

.checklist strong {
  color: var(--color-primary);
}

.good-news {
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.good-news h3 {
  color: #16a34a;
  margin: 0 0 var(--spacing-md);
}

.good-news ul {
  margin: 0;
}

.good-news li {
  margin-bottom: var(--spacing-sm);
}

.status-table {
  width: 100%;
  margin: var(--spacing-lg) 0;
}

.status-table th,
.status-table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.status-table th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
}

.status-table code {
  background: var(--color-background);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}

.status {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.status.valid {
  background: rgba(34, 197, 94, 0.15);
  color: #16a34a;
}

.status.invalid {
  background: rgba(239, 68, 68, 0.15);
  color: #dc2626;
}

.status.published {
  background: rgba(59, 130, 246, 0.15);
  color: #2563eb;
}

.status.unpublished {
  background: rgba(107, 114, 128, 0.15);
  color: #4b5563;
}

.status-table tr.note {
  background: rgba(234, 179, 8, 0.05);
}

.status-table tr.note td {
  font-style: italic;
  color: var(--color-text-light);
}

.callout {
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.callout.info {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.callout h4 {
  margin: 0 0 var(--spacing-sm);
}

.callout p {
  margin: 0;
}

.effort-cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.effort-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.effort-card.low {
  border-left: 4px solid #16a34a;
}

.effort-card.medium {
  border-left: 4px solid #ca8a04;
}

.effort-card.high {
  border-left: 4px solid #dc2626;
}

.effort-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.effort-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
}

.effort-card.low .effort-label {
  background: rgba(34, 197, 94, 0.15);
  color: #16a34a;
}

.effort-card.medium .effort-label {
  background: rgba(234, 179, 8, 0.15);
  color: #ca8a04;
}

.effort-header h3 {
  margin: 0;
  font-size: var(--font-size-lg);
}

.effort-card ul {
  margin: var(--spacing-md) 0;
  padding-left: var(--spacing-xl);
}

.effort-card li {
  margin-bottom: var(--spacing-xs);
}

.effort-card .time {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
  margin-top: var(--spacing-md);
  margin-bottom: 0;
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
</style>
