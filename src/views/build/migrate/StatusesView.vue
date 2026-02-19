<template>
  <article class="content-page">
    <header class="page-header">
      <div class="breadcrumb">
        <router-link to="/build/migrate">Migration Guide</router-link>
        <span class="separator">/</span>
        <span>Status Mapping</span>
      </div>
      <h1>Status Model Migration</h1>
      <p class="page-lead">
        Mapping your 2015 status values to the new 2026 dimension-based approach.
      </p>
    </header>

    <section class="content-section">
      <h2>What Changed</h2>
      <p>
        In ISO 19135-1:2015, each register item had a <strong>single status</strong>
        from an enumeration: <code>submitted</code>, <code>valid</code>, <code>invalid</code>,
        <code>retired</code>, or <code>superseded</code>.
      </p>
      <p>
        In ISO 19135:2026, status is represented as <strong>independent dimensions</strong>
        that can be combined. This provides more flexibility but requires migration.
      </p>
    </section>

    <section class="content-section">
      <h2>Status Dimensions in 2026</h2>

      <div class="dimensions">
        <div class="dimension">
          <h3>Validity</h3>
          <p>Is the concept version suitable for use?</p>
          <div class="values">
            <span class="value valid">valid</span>
            <span class="value invalid">invalid</span>
          </div>
        </div>

        <div class="dimension">
          <h3>Publication</h3>
          <p>Is the concept version visible to users?</p>
          <div class="values">
            <span class="value published">published</span>
            <span class="value unpublished">unpublished</span>
          </div>
        </div>

        <div class="dimension optional">
          <h3>Redaction <span class="opt">(Optional)</span></h3>
          <p>Has content been hidden but not removed?</p>
          <div class="values">
            <span class="value">not redacted</span>
            <span class="value redacted">redacted</span>
          </div>
        </div>

        <div class="dimension optional">
          <h3>Deletion <span class="opt">(Optional)</span></h3>
          <p>Has the concept version been logically removed?</p>
          <div class="values">
            <span class="value">not deleted</span>
            <span class="value deleted">deleted</span>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Migration Mapping</h2>

      <table class="mapping-table">
        <thead>
          <tr>
            <th>2015 Status</th>
            <th>2026 Validity</th>
            <th>2026 Publication</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="old">submitted</code></td>
            <td colspan="3" class="na">
              <strong>No equivalent</strong> — proposals exist outside the register until approved
            </td>
          </tr>
          <tr>
            <td><code class="old">valid</code></td>
            <td><span class="status valid">valid</span></td>
            <td><span class="status published">published</span></td>
            <td>No change needed</td>
          </tr>
          <tr>
            <td><code class="old">invalid</code></td>
            <td><span class="status invalid">invalid</span></td>
            <td><span class="status published">published</span></td>
            <td>Usually kept visible for transparency</td>
          </tr>
          <tr>
            <td><code class="old">retired</code></td>
            <td><span class="status valid">valid</span></td>
            <td><span class="status unpublished">unpublished</span></td>
            <td>Content still valid, just not recommended</td>
          </tr>
          <tr>
            <td><code class="old">superseded</code></td>
            <td><span class="status valid">valid</span></td>
            <td><span class="status published">published</span></td>
            <td>Add <code>supersedes</code> relation to successor</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Special Cases</h2>

      <div class="cases">
        <div class="case">
          <h3>Items Currently "submitted"</h3>
          <p>
            In 2015, "submitted" items were in the register but pending approval.
            In 2026, proposals exist <strong>outside</strong> the register until approved.
          </p>
          <div class="solution">
            <strong>Solution:</strong> These become proposals in the proposal management
            system, not register items. When approved, they're added directly as
            <code>valid + published</code>.
          </div>
        </div>

        <div class="case">
          <h3>Superseded Items</h3>
          <p>
            In 2026, supersession is primarily a <strong>relation</strong>, not a status.
          </p>
          <div class="solution">
            <strong>Solution:</strong> Keep the item as <code>valid + published</code> but
            add a <code>supersedes</code> relation pointing to its successor. Users can
            then follow the relation chain.
          </div>
        </div>

        <div class="case">
          <h3>Retired but Still Valid</h3>
          <p>
            Some retired items may still be technically correct but no longer recommended.
          </p>
          <div class="solution">
            <strong>Solution:</strong> <code>valid + unpublished</code> — the content is
            correct but not actively promoted. Users can still find it if needed.
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Implementation Code Example</h2>
      <p>How to map statuses in your migration script:</p>

      <div class="code-example">
        <pre><code>// Status mapping from 2015 to 2026
const statusMapping = {
  'valid':    { validity: 'valid',    publication: 'published'   },
  'invalid':  { validity: 'invalid',  publication: 'published'   },
  'retired':  { validity: 'valid',    publication: 'unpublished' },
  'superseded': {
    validity: 'valid',
    publication: 'published',
    // Also add relation: supersedes -> successor
  },
  'submitted': null  // Not migrated - becomes a proposal
}

function migrateItem(oldItem) {
  if (oldItem.status === 'submitted') {
    // Create a proposal instead of a register item
    return createProposal(oldItem)
  }

  const mapping = statusMapping[oldItem.status]
  return {
    ...oldItem,
    validity: mapping.validity,
    publication: mapping.publication,
    status: undefined  // Remove old status field
  }
}</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>New Possibilities</h2>
      <p>The dimension-based approach enables new combinations:</p>

      <div class="possibilities">
        <div class="possibility">
          <h4>Invalid + Unpublished</h4>
          <p>Content with errors that should not be visible, but metadata retained</p>
        </div>
        <div class="possibility">
          <h4>Valid + Unpublished</h4>
          <p>Correct content not yet ready for publication (staging)</p>
        </div>
        <div class="possibility">
          <h4>Invalid + Published</h4>
          <p>Content with errors kept visible for transparency (errata noted)</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Next Steps</h2>
      <div class="next-steps-inline">
        <router-link to="/build/migrate/terminology" class="btn-primary">
          Terminology Changes →
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

.dimensions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.dimension {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.dimension.optional {
  opacity: 0.8;
}

.dimension h3 {
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-base);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.dimension .opt {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-normal);
  color: var(--color-text-light);
}

.dimension p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-md);
}

.dimension .values {
  display: flex;
  gap: var(--spacing-sm);
}

.value {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  background: var(--color-background);
  border: 1px solid var(--color-border);
}

.value.valid { background: rgba(34, 197, 94, 0.15); color: #16a34a; border-color: rgba(34, 197, 94, 0.3); }
.value.invalid { background: rgba(239, 68, 68, 0.15); color: #dc2626; border-color: rgba(239, 68, 68, 0.3); }
.value.published { background: rgba(59, 130, 246, 0.15); color: #2563eb; border-color: rgba(59, 130, 246, 0.3); }
.value.unpublished { background: rgba(107, 114, 128, 0.15); color: #4b5563; border-color: rgba(107, 114, 128, 0.3); }
.value.redacted { background: rgba(234, 179, 8, 0.15); color: #ca8a04; border-color: rgba(234, 179, 8, 0.3); }
.value.deleted { background: rgba(239, 68, 68, 0.15); color: #dc2626; border-color: rgba(239, 68, 68, 0.3); }

.mapping-table {
  width: 100%;
  margin: var(--spacing-lg) 0;
  border-collapse: collapse;
}

.mapping-table th,
.mapping-table td {
  padding: var(--spacing-md);
  text-align: left;
  border: 1px solid var(--color-border);
}

.mapping-table th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
}

.mapping-table .old {
  background: var(--color-background);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
}

.mapping-table .na {
  font-style: italic;
  color: var(--color-text-light);
  background: rgba(234, 179, 8, 0.05);
}

.status {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.status.valid { background: rgba(34, 197, 94, 0.15); color: #16a34a; }
.status.invalid { background: rgba(239, 68, 68, 0.15); color: #dc2626; }
.status.published { background: rgba(59, 130, 246, 0.15); color: #2563eb; }
.status.unpublished { background: rgba(107, 114, 128, 0.15); color: #4b5563; }

.cases {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.case {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.case h3 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
  color: var(--color-primary);
}

.case p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.case .solution {
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  font-size: var(--font-size-sm);
}

.case .solution strong {
  color: #16a34a;
}

.code-example {
  background: #1e293b;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin: var(--spacing-lg) 0;
}

.code-example pre {
  margin: 0;
  padding: var(--spacing-xl);
  color: #e2e8f0;
  font-size: var(--font-size-sm);
  line-height: 1.6;
  overflow-x: auto;
}

.code-example code {
  font-family: 'JetBrains Mono', monospace;
}

.possibilities {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.possibility {
  background: rgba(13, 148, 136, 0.08);
  border: 1px solid rgba(13, 148, 136, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.possibility h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
  color: var(--color-accent);
}

.possibility p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
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
