<template>
  <article class="content-page migration-page">
    <nav class="breadcrumb">
      <router-link to="/upgrade">Upgrade Guide</router-link>
      <span class="separator">/</span>
      <span class="current">Status Model Migration</span>
    </nav>

    <header class="page-header">
      <h1>Status Model Migration</h1>
      <p class="page-lead">
        The most complex data transformation: migrating from a single-status
        enumeration to normalized status dimensions.
      </p>
    </header>

    <div class="warning-box">
      <h3>Critical Migration Area</h3>
      <p>
        Status migration is often the most complex part of migrating to 2026.
        The fundamental model has changed from a single value to multiple
        independent dimensions. Plan this migration carefully.
      </p>
    </div>

    <section class="content-section">
      <h2>Understanding the Change</h2>

      <div class="comparison">
        <div class="before">
          <h3>2015: Single Status</h3>
          <p>Each register item had exactly one status from a fixed enumeration:</p>
          <div class="status-list">
            <div class="status-item">
              <span class="status submitted">submitted</span>
              <span>In review, not yet accepted</span>
            </div>
            <div class="status-item">
              <span class="status valid">valid</span>
              <span>Accepted and recommended</span>
            </div>
            <div class="status-item">
              <span class="status invalid">invalid</span>
              <span>Contains substantial error</span>
            </div>
            <div class="status-item">
              <span class="status retired">retired</span>
              <span>No longer recommended</span>
            </div>
            <div class="status-item">
              <span class="status superseded">superseded</span>
              <span>Replaced by newer item</span>
            </div>
          </div>
        </div>

        <div class="after">
          <h3>2026: Status Dimensions</h3>
          <p>Status is now composed of independent dimensions that can be combined:</p>
          <div class="dimension-list">
            <div class="dimension">
              <h4>Validity</h4>
              <span class="values">
                <code>valid</code> | <code>invalid</code>
              </span>
              <span class="meaning">Is the content suitable for use?</span>
            </div>
            <div class="dimension">
              <h4>Publication</h4>
              <span class="values">
                <code>published</code> | <code>unpublished</code>
              </span>
              <span class="meaning">Is the content visible?</span>
            </div>
            <div class="dimension">
              <h4>Redaction</h4>
              <span class="values">
                <code>redacted</code> | <code>not redacted</code>
              </span>
              <span class="meaning">Has content been hidden?</span>
            </div>
            <div class="dimension">
              <h4>Deletion</h4>
              <span class="values">
                <code>deleted</code> | <code>not deleted</code>
              </span>
              <span class="meaning">Has content been removed?</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Migration Mapping Table</h2>
      <p>
        Use this table to map your existing statuses to the new dimension model:
      </p>

      <table class="mapping-table">
        <thead>
          <tr>
            <th>2015 Status</th>
            <th>Validity</th>
            <th>Publication</th>
            <th>Redaction</th>
            <th>Supersession</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr class="row-special">
            <td><strong>submitted</strong></td>
            <td colspan="5">
              <em>No direct mapping</em> — proposals are separate from register items in 2026
            </td>
          </tr>
          <tr>
            <td><strong>valid</strong></td>
            <td><code>valid</code></td>
            <td><code>published</code></td>
            <td><code>not redacted</code></td>
            <td>none</td>
            <td>Standard active state</td>
          </tr>
          <tr>
            <td><strong>invalid</strong></td>
            <td><code>invalid</code></td>
            <td><code>published</code> or <code>unpublished</code></td>
            <td><code>not redacted</code></td>
            <td>none</td>
            <td>Publication depends on whether errors should be visible</td>
          </tr>
          <tr>
            <td><strong>retired</strong></td>
            <td><code>valid</code></td>
            <td><code>unpublished</code></td>
            <td><code>not redacted</code></td>
            <td>none</td>
            <td>Still valid, just hidden</td>
          </tr>
          <tr>
            <td><strong>superseded</strong></td>
            <td><code>valid</code></td>
            <td><code>published</code></td>
            <td><code>not redacted</code></td>
            <td>link to successor</td>
            <td>Still accessible for historical reference</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Handling "submitted" Status</h2>
      <p>
        The 2015 <code>submitted</code> status has no equivalent in 2026 because
        proposals and register items are now separate concepts.
      </p>

      <div class="migration-strategy">
        <h3>Migration Strategy</h3>
        <div class="strategies">
          <div class="strategy">
            <h4>Items in "submitted" state</h4>
            <p>These are proposals under review. Options:</p>
            <ul>
              <li><strong>Complete the review process first</strong> in your 2015 system, then migrate only decided items</li>
              <li><strong>Convert to proposals</strong> in your 2026 system and process them through the new proposal workflow</li>
              <li><strong>Archive</strong> and handle separately from the main migration</li>
            </ul>
          </div>
          <div class="strategy recommended">
            <h4>Recommended Approach</h4>
            <p>
              Before migration, complete or withdraw all pending submissions.
              Migrate only items with final statuses (valid, invalid, retired, superseded).
              This simplifies migration and ensures data integrity.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>New Combinations Possible</h2>
      <p>
        The dimension model enables status combinations that weren't possible in 2015:
      </p>

      <div class="combinations-grid">
        <div class="combination new">
          <h4>Superseded + Invalid</h4>
          <div class="dimensions">
            <span class="dim valid">valid: invalid</span>
            <span class="dim pub">publication: published</span>
            <span class="dim super">superseded: yes</span>
          </div>
          <p>An item was replaced AND the replacement was found to have errors.</p>
        </div>

        <div class="combination new">
          <h4>Invalid + Unpublished</h4>
          <div class="dimensions">
            <span class="dim valid">valid: invalid</span>
            <span class="dim pub">publication: unpublished</span>
          </div>
          <p>Invalid content that should also be hidden from users.</p>
        </div>

        <div class="combination new">
          <h4>Valid + Redacted</h4>
          <div class="dimensions">
            <span class="dim valid">valid: valid</span>
            <span class="dim pub">publication: published</span>
            <span class="dim redact">redacted: yes</span>
          </div>
          <p>Valid content with some sensitive parts hidden (e.g., legal reasons).</p>
        </div>

        <div class="combination new">
          <h4>Superseded + Retired</h4>
          <div class="dimensions">
            <span class="dim valid">valid: valid</span>
            <span class="dim pub">publication: unpublished</span>
            <span class="dim super">superseded: yes</span>
          </div>
          <p>Replaced AND hidden from normal view.</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Implementation Example</h2>
      <p>
        Here's how to implement the status dimension transformation:
      </p>

      <div class="code-example">
        <h4>Conceptual Mapping</h4>
        <pre><code>// 2015 structure
{
  "itemIdentifier": "EPSG:4326",
  "status": "valid"
}

// 2026 structure (migrated)
{
  "itemIdentifier": "EPSG:4326",
  "status": {
    "validity": "valid",
    "publication": "published",
    "redaction": "not redacted",
    "deletion": "not deleted"
  },
  "supersession": null
}</code></pre>
      </div>

      <div class="code-example">
        <h4>Superseded Item</h4>
        <pre><code>// 2015 structure
{
  "itemIdentifier": "EPSG:4322",
  "status": "superseded",
  "successor": "EPSG:4326"
}

// 2026 structure (migrated)
{
  "itemIdentifier": "EPSG:4322",
  "status": {
    "validity": "valid",
    "publication": "published",
    "redaction": "not redacted",
    "deletion": "not deleted"
  },
  "supersession": {
    "supersededBy": ["EPSG:4326"],
    "dateSuperseded": "2024-01-15"
  }
}</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Migration Checklist</h2>
      <div class="checklist-box">
        <ol class="migration-steps">
          <li>
            <strong>Inventory current statuses</strong>
            <p>Count items in each status category to understand scope</p>
          </li>
          <li>
            <strong>Handle "submitted" items</strong>
            <p>Complete, convert to proposals, or archive pending submissions</p>
          </li>
          <li>
            <strong>Design dimension schema</strong>
            <p>Define how status dimensions will be stored in your system</p>
          </li>
          <li>
            <strong>Create migration script</strong>
            <p>Implement the mapping logic with validation</p>
          </li>
          <li>
            <strong>Test with sample data</strong>
            <p>Verify all status combinations migrate correctly</p>
          </li>
          <li>
            <strong>Update UI components</strong>
            <p>Modify displays to work with dimension model</p>
          </li>
          <li>
            <strong>Update API responses</strong>
            <p>Ensure API consumers receive correct status information</p>
          </li>
          <li>
            <strong>Run full migration</strong>
            <p>Execute migration with rollback capability</p>
          </li>
          <li>
            <strong>Verify counts match</strong>
            <p>Confirm all items migrated with correct status</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="content-section">
      <h2>Common Pitfalls</h2>
      <div class="pitfalls">
        <div class="pitfall">
          <h4>Assuming retired = invalid</h4>
          <p>
            <strong>Wrong:</strong> Mapping retired items to validity=invalid
          </p>
          <p>
            <strong>Correct:</strong> Retired items are still <em>valid</em>,
            just <em>unpublished</em>. They're not recommended for new use but
            aren't erroneous.
          </p>
        </div>
        <div class="pitfall">
          <h4>Forgetting supersession is now a relation</h4>
          <p>
            <strong>Wrong:</strong> Trying to encode supersession in status dimensions
          </p>
          <p>
            <strong>Correct:</strong> Supersession is a separate relation between
            items, not a status dimension.
          </p>
        </div>
        <div class="pitfall">
          <h4>Not planning for new combinations</h4>
          <p>
            <strong>Wrong:</strong> Designing only for 2015-equivalent combinations
          </p>
          <p>
            <strong>Correct:</strong> Your implementation should support all
            valid combinations, even if you don't use them initially.
          </p>
        </div>
      </div>
    </section>

    <nav class="page-nav">
      <router-link to="/upgrade/conformance" class="nav-prev">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Conformance Migration</span>
      </router-link>
      <router-link to="/upgrade/data-model" class="nav-next">
        <span class="nav-label">Next</span>
        <span class="nav-title">Data Model Migration</span>
      </router-link>
    </nav>
  </article>
</template>

<script setup>
</script>

<style scoped>
@import './migration-shared.css';

.warning-box {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.warning-box h3 {
  color: #dc2626;
  margin: 0 0 var(--spacing-sm);
}

.warning-box p {
  margin: 0;
  color: var(--color-text);
}

.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  margin: var(--spacing-lg) 0;
}

.comparison h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
}

.before {
  padding: var(--spacing-lg);
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-lg);
}

.before h3 {
  color: #dc2626;
}

.after {
  padding: var(--spacing-lg);
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: var(--radius-lg);
}

.after h3 {
  color: #16a34a;
}

.status-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}

.status-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.status {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-family: monospace;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

.status.submitted {
  background: rgba(99, 102, 241, 0.1);
  color: #4f46e5;
}

.status.valid {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
}

.status.invalid {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.status.retired {
  background: rgba(107, 114, 128, 0.1);
  color: #6b7280;
}

.status.superseded {
  background: rgba(234, 179, 8, 0.1);
  color: #ca8a04;
}

.dimension-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.dimension {
  padding: var(--spacing-sm);
  background: white;
  border-radius: var(--radius-md);
}

.dimension h4 {
  font-size: var(--font-size-sm);
  margin: 0 0 var(--spacing-xs);
  color: var(--color-primary);
}

.dimension .values {
  display: block;
  font-size: var(--font-size-xs);
  margin-bottom: var(--spacing-xs);
}

.dimension .values code {
  background: rgba(13, 148, 136, 0.1);
  padding: 1px 4px;
  border-radius: 2px;
  color: var(--color-accent);
}

.dimension .meaning {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

/* Mapping Table */
.mapping-table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.mapping-table th,
.mapping-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.mapping-table th {
  background: var(--color-background);
  font-weight: var(--font-weight-semibold);
}

.mapping-table td code {
  background: var(--color-background);
  padding: 1px 4px;
  border-radius: 2px;
  font-size: var(--font-size-xs);
}

.mapping-table .row-special {
  background: rgba(99, 102, 241, 0.05);
}

.mapping-table .row-special td {
  text-align: center;
  font-style: italic;
  color: var(--color-text-light);
}

/* Migration Strategy */
.migration-strategy {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.migration-strategy h3 {
  margin: 0 0 var(--spacing-md);
}

.strategies {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.strategy {
  padding: var(--spacing-md);
  background: var(--color-background);
  border-radius: var(--radius-md);
}

.strategy.recommended {
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.strategy h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-sm);
}

.strategy.recommended h4 {
  color: #16a34a;
}

.strategy p,
.strategy ul {
  font-size: var(--font-size-sm);
  margin: 0;
}

.strategy ul {
  padding-left: var(--spacing-md);
  margin-top: var(--spacing-sm);
}

.strategy li {
  margin-bottom: var(--spacing-xs);
}

/* Combinations Grid */
.combinations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.combination {
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.combination.new {
  border-color: rgba(99, 102, 241, 0.3);
}

.combination h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-sm);
}

.combination.new h4::before {
  content: 'NEW';
  font-size: var(--font-size-xs);
  background: rgba(99, 102, 241, 0.1);
  color: #4f46e5;
  padding: 1px 6px;
  border-radius: var(--radius-sm);
  margin-right: var(--spacing-xs);
}

.combination .dimensions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-sm);
}

.combination .dim {
  font-size: var(--font-size-xs);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  background: var(--color-background);
}

.combination p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

/* Code Example */
.code-example {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  margin: var(--spacing-lg) 0;
  overflow: hidden;
}

.code-example h4 {
  font-size: var(--font-size-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  margin: 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.code-example pre {
  margin: 0;
  padding: var(--spacing-md);
  font-size: var(--font-size-sm);
  overflow-x: auto;
}

.code-example code {
  font-family: 'JetBrains Mono', monospace;
}

/* Checklist */
.checklist-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.migration-steps {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.migration-steps li {
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-sm);
}

.migration-steps li strong {
  display: block;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.migration-steps li p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

/* Pitfalls */
.pitfalls {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.pitfall {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.pitfall h4 {
  color: #dc2626;
  margin: 0 0 var(--spacing-sm);
}

.pitfall p {
  font-size: var(--font-size-sm);
  margin: var(--spacing-xs) 0;
}

.pitfall p strong {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .comparison {
    grid-template-columns: 1fr;
  }

  .strategies {
    grid-template-columns: 1fr;
  }

  .combinations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
