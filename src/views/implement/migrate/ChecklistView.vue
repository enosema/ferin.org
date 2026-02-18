<template>
  <article class="content-page">
    <header class="page-header">
      <div class="breadcrumb">
        <router-link to="/implement/migrate">Migration Guide</router-link>
        <span class="separator">/</span>
        <span>Full Checklist</span>
      </div>
      <h1>Migration Checklist</h1>
      <p class="page-lead">
        A comprehensive checklist for migrating from ISO 19135-1:2015 to ISO 19135:2026.
      </p>
    </header>

    <section class="content-section summary">
      <h2>Summary</h2>
      <p>
        You've reached the checklist. The <strong>two essential things</strong> you must do:
      </p>
      <ol class="essential">
        <li>Define your register specification (with commitments)</li>
        <li>Document your concept model (concepts, versions, relations, classes)</li>
      </ol>
      <p>
        Everything else is either optional or can be mapped from your existing implementation.
      </p>
    </section>

    <section class="content-section">
      <h2>Phase 1: Documentation</h2>

      <div class="checklist-group">
        <h3>Register Specification</h3>
        <ul class="checklist">
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Purpose and scope</strong>
              <p>Document what your register contains and why</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Roles and responsibilities</strong>
              <p>Define Owner, Manager, Control Body, Proposers</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Governance processes</strong>
              <p>Document proposal, approval, and appeal workflows</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Commitments declaration</strong>
              <p>Declare access, persistence, and transparency levels</p>
              <router-link to="/implement/migrate/register-specification">See how →</router-link>
            </div>
          </li>
        </ul>
      </div>

      <div class="checklist-group">
        <h3>Concept Model</h3>
        <ul class="checklist">
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Define concept types</strong>
              <p>List the types of concepts your register manages</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Document versioning scheme</strong>
              <p>How are concept versions identified?</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Define allowed relations</strong>
              <p>Which concept relations are allowed?</p>
              <router-link to="/implement/migrate/concepts">See how →</router-link>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Document register item classes</strong>
              <p>Link content types to concept definitions</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Phase 2: Data Migration</h2>

      <div class="checklist-group">
        <h3>Status Mapping</h3>
        <ul class="checklist">
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Map status values to dimensions</strong>
              <p>Convert valid/invalid/retired/superseded to validity + publication</p>
              <router-link to="/implement/migrate/statuses">See mapping →</router-link>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Handle "submitted" items</strong>
              <p>These become proposals, not register items</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Add supersession relations</strong>
              <p>For superseded items, add relation to successor</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="checklist-group">
        <h3>Identifier Strategy</h3>
        <ul class="checklist">
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Existing identifiers → Object identifiers</strong>
              <p>Your current IDs become non-redirectable object IDs</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>(Optional) Add functional identifiers</strong>
              <p>Create redirectable IDs for key concepts</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="checklist-group">
        <h3>Two-Plane Structure</h3>
        <ul class="checklist">
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Create concepts from existing items</strong>
              <p>Each register item becomes a concept with one version</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Link content to concept versions</strong>
              <p>Register items link to their concept versions</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Phase 3: Governance Updates</h2>

      <div class="checklist-group">
        <h3>Terminology Updates</h3>
        <ul class="checklist">
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Update role names in documentation</strong>
              <p>Submitting Organization → Proposer, Registry Manager → System Manager</p>
              <router-link to="/implement/migrate/terminology">See all changes →</router-link>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Update process documentation</strong>
              <p>Replace "technical standard" with "register specification"</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="checklist-group">
        <h3>Process Updates</h3>
        <ul class="checklist">
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Update proposal workflow</strong>
              <p>Remove "submitted" status; approved items go directly to valid</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Document time limits</strong>
              <p>Specify decision and appeal timeframes</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Phase 4: Validation</h2>

      <div class="checklist-group">
        <h3>Testing</h3>
        <ul class="checklist">
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Test status queries</strong>
              <p>Verify validity and publication dimensions work correctly</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Test relations</strong>
              <p>Verify supersession chains resolve correctly</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Test identifiers</strong>
              <p>Verify object and functional identifiers resolve</p>
            </div>
          </li>
          <li :class="{ done: false }">
            <span class="checkbox">☐</span>
            <div class="item">
              <strong>Run conformance tests</strong>
              <p>Verify against 2026 abstract test suite</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Effort Summary by Register Type</h2>

      <div class="effort-summary">
        <div class="effort-row">
          <div class="effort-type">Core → Content Register</div>
          <div class="effort-time low">1-2 days</div>
        </div>
        <div class="effort-row">
          <div class="effort-type">Extended → Governed Content Register</div>
          <div class="effort-time medium">3-5 days</div>
        </div>
        <div class="effort-row">
          <div class="effort-type">Hierarchical → Governed Concept Register</div>
          <div class="effort-time medium">5-10 days</div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Need Help?</h2>
      <p>
        If you have questions about migration, reach out to the FERIN community
        or consult the full ISO 19135:2026 standard for detailed requirements.
      </p>
      <div class="resources">
        <a href="https://www.iso.org/standard/87753.html" target="_blank" rel="noopener noreferrer" class="resource-link">
          Purchase ISO 19135:2026 →
        </a>
        <router-link to="/reference/faq" class="resource-link">
          Frequently Asked Questions →
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

.content-section.summary {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, var(--color-surface) 100%);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.content-section h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
}

.essential {
  margin: var(--spacing-lg) 0;
  padding-left: var(--spacing-xl);
}

.essential li {
  margin-bottom: var(--spacing-md);
  font-weight: var(--font-weight-medium);
}

.checklist-group {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-xl);
  overflow: hidden;
}

.checklist-group h3 {
  background: var(--color-background);
  padding: var(--spacing-md) var(--spacing-lg);
  margin: 0;
  font-size: var(--font-size-base);
  border-bottom: 1px solid var(--color-border);
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.checklist li {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.checklist li:last-child {
  border-bottom: none;
}

.checklist li.done {
  background: rgba(34, 197, 94, 0.05);
}

.checkbox {
  font-size: var(--font-size-xl);
  width: 24px;
  flex-shrink: 0;
}

.checklist .item {
  flex: 1;
}

.checklist .item strong {
  display: block;
  margin-bottom: var(--spacing-xs);
}

.checklist .item p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.checklist .item a {
  display: inline-block;
  margin-top: var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  text-decoration: none;
}

.checklist .item a:hover {
  text-decoration: underline;
}

.effort-summary {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.effort-row {
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: 1px solid var(--color-border);
}

.effort-row:last-child {
  border-bottom: none;
}

.effort-type {
  font-weight: var(--font-weight-medium);
}

.effort-time {
  font-weight: var(--font-weight-semibold);
}

.effort-time.low {
  color: #16a34a;
}

.effort-time.medium {
  color: #ca8a04;
}

.effort-time.high {
  color: #dc2626;
}

.resources {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  margin-top: var(--spacing-lg);
}

.resource-link {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-accent);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-fast);
}

.resource-link:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
}
</style>
