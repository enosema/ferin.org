<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Statuses</h1>
      <p class="page-lead">
        Complete reference for item and concept statuses: what they mean,
        how they're set, and which combinations are valid.
      </p>
    </header>

    <section class="content-section">
      <h2>Primary Statuses</h2>

      <div class="status-cards">
        <div class="status-card">
          <h3>Valid</h3>
          <p class="default">Default: <code>true</code></p>
          <p>Indicates the item is approved and appropriate for use.</p>
          <div class="status-details">
            <h4>Set By</h4>
            <p>Added as true on creation; set to false by Invalidation action</p>
            <h4>Effect When False</h4>
            <p>Item should not be used; may indicate error or withdrawal</p>
          </div>
        </div>

        <div class="status-card">
          <h3>Published</h3>
          <p class="default">Default: <code>true</code></p>
          <p>Indicates the item is visible to users.</p>
          <div class="status-details">
            <h4>Set By</h4>
            <p>Added as true on creation; set to false by Unpublish action</p>
            <h4>Effect When False</h4>
            <p>Item hidden from normal queries; still accessible with explicit reference</p>
          </div>
        </div>

        <div class="status-card">
          <h3>Superseded</h3>
          <p class="default">Default: <code>false</code></p>
          <p>Indicates the item has been replaced by a newer version.</p>
          <div class="status-details">
            <h4>Set By</h4>
            <p>Supersede action</p>
            <h4>Effect When True</h4>
            <p>Item is not current; link provided to superseding item</p>
          </div>
        </div>

        <div class="status-card">
          <h3>Redacted</h3>
          <p class="default">Default: <code>false</code></p>
          <p>Indicates content has been hidden or removed.</p>
          <div class="status-details">
            <h4>Set By</h4>
            <p>Redaction action</p>
            <h4>Effect When True</h4>
            <p>Content hidden/removed; metadata may still be visible</p>
          </div>
        </div>

        <div class="status-card">
          <h3>Deleted</h3>
          <p class="default">Default: <code>false</code></p>
          <p>Indicates the item has been permanently removed.</p>
          <div class="status-details">
            <h4>Set By</h4>
            <p>Deletion action</p>
            <h4>Effect When True</h4>
            <p>Item removed from register; use carefully as it breaks references</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Status Reference Table</h2>

      <table class="status-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Default</th>
            <th>When Set</th>
            <th>Who Sets</th>
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>valid</code></td>
            <td><code>true</code></td>
            <td>On creation; Invalidation</td>
            <td>Control Body</td>
            <td><code>false</code> = Don't use</td>
          </tr>
          <tr>
            <td><code>published</code></td>
            <td><code>true</code></td>
            <td>On creation; Unpublish</td>
            <td>Control Body</td>
            <td><code>false</code> = Hidden</td>
          </tr>
          <tr>
            <td><code>superseded</code></td>
            <td><code>false</code></td>
            <td>Supersede action</td>
            <td>Control Body</td>
            <td><code>true</code> = Replaced</td>
          </tr>
          <tr>
            <td><code>redacted</code></td>
            <td><code>false</code></td>
            <td>Redaction action</td>
            <td>Control Body</td>
            <td><code>true</code> = Content hidden</td>
          </tr>
          <tr>
            <td><code>deleted</code></td>
            <td><code>false</code></td>
            <td>Deletion action</td>
            <td>Control Body</td>
            <td><code>true</code> = Removed</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Valid Status Combinations</h2>

      <p>
        Not all status combinations make sense. Here's guidance:
      </p>

      <table class="combinations-table">
        <thead>
          <tr>
            <th>Combination</th>
            <th>Valid?</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr class="valid-combo">
            <td><code>valid=true, published=true</code></td>
            <td>Yes</td>
            <td>Normal active item</td>
          </tr>
          <tr class="valid-combo">
            <td><code>valid=true, published=false</code></td>
            <td>Yes</td>
            <td>Approved but not yet visible</td>
          </tr>
          <tr class="valid-combo">
            <td><code>valid=false, published=true</code></td>
            <td>Yes</td>
            <td>Invalid but still visible for reference</td>
          </tr>
          <tr class="valid-combo">
            <td><code>valid=false, published=false</code></td>
            <td>Yes</td>
            <td>Invalid and hidden</td>
          </tr>
          <tr class="valid-combo">
            <td><code>superseded=true, valid=true</code></td>
            <td>Yes</td>
            <td>Replaced but still valid (historical reference)</td>
          </tr>
          <tr class="invalid-combo">
            <td><code>deleted=true, valid=true</code></td>
            <td>No</td>
            <td>Deleted items should be invalid</td>
          </tr>
          <tr class="invalid-combo">
            <td><code>redacted=true, published=true</code></td>
            <td>Caution</td>
            <td>Redacted content shouldn't be visible</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Status Transitions</h2>

      <div class="transition-diagram">
        <pre class="diagram">
                              ┌──────────────┐
                              │   Created    │
                              │valid=true    │
                              │published=true│
                              └──────┬───────┘
                                     │
                 ┌───────────────────┼───────────────────┐
                 │                   │                   │
                 ▼                   ▼                   ▼
          ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
          │  Invalidate  │   │   Unpublish  │   │   Supersede  │
          │ valid=false  │   │published=false│   │superseded=true│
          └──────────────┘   └──────────────┘   └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │    Redact    │
                              │ redacted=true│
                              └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │    Delete    │
                              │ deleted=true │
                              └──────────────┘
        </pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Temporal Constraints</h2>
      <p>
        Some items have temporal validity—when they apply from and until:
      </p>

      <h3>Fields</h3>
      <ul>
        <li><code>validFrom</code>: When the item becomes applicable</li>
        <li><code>validUntil</code>: When the item ceases to be applicable</li>
      </ul>

      <h3>Implementation Guidance</h3>
      <ul>
        <li>Use ISO 8601 format for dates/times</li>
        <li>Allow open-ended ranges (no validUntil = still valid)</li>
        <li>Handle overlapping validity periods in queries</li>
        <li>Document timezone handling</li>
      </ul>

      <h3>Conflict Resolution</h3>
      <p>
        When multiple items have overlapping validity:
      </p>
      <ol>
        <li>Prefer more specific items over general</li>
        <li>Prefer later items if specificity is equal</li>
        <li>Flag conflicts for manual resolution</li>
      </ol>
    </section>

    <section class="content-section">
      <h2>Concept vs Item Status</h2>
      <p>
        Status can apply at both concept and item levels:
      </p>

      <table class="levels-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>When to Apply</th>
            <th>Propagation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Concept</td>
            <td>When the entire concept is being managed</td>
            <td>May propagate to all items realizing the concept</td>
          </tr>
          <tr>
            <td>Item</td>
            <td>When specific content is affected</td>
            <td>Does not affect concept status</td>
          </tr>
        </tbody>
      </table>

      <h3>Propagation Rules</h3>
      <ul>
        <li>Invalidating a concept typically invalidates all its items</li>
        <li>Invalidating an item does not affect the concept</li>
        <li>Document your propagation policy clearly</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/actions">Actions Reference</router-link>
          - Operations that change status
        </li>
        <li>
          <router-link to="/build/versioning">Versioning</router-link>
          - Version lifecycle
        </li>
        <li>
          <router-link to="/reference/conceptual-model">Conceptual Model</router-link>
          - Status in the model
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
</script>

<style scoped>
.content-page {
  max-width: 800px;
}

.page-header {
  margin-bottom: var(--spacing-2xl);
}

.page-lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
}

.content-section {
  margin-bottom: var(--spacing-2xl);
}

.content-section h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-accent);
}

.content-section h3 {
  font-size: var(--font-size-lg);
  margin: var(--spacing-lg) 0 var(--spacing-md);
}

.status-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.status-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.status-card h3 {
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-xs);
  color: var(--color-accent);
}

.status-card .default {
  font-size: var(--font-size-sm);
  font-family: var(--font-mono);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.status-card > p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
}

.status-details {
  background: var(--color-background);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.status-details h4 {
  font-size: var(--font-size-sm);
  margin: var(--spacing-sm) 0 var(--spacing-xs);
}

.status-details h4:first-child {
  margin-top: 0;
}

.status-details p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.status-table,
.combinations-table,
.levels-table {
  margin: var(--spacing-lg) 0;
}

.combinations-table tr.valid-combo td:nth-child(2) {
  color: var(--color-success);
}

.combinations-table tr.invalid-combo td:nth-child(2) {
  color: var(--color-error);
}

.transition-diagram {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.diagram {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  color: var(--color-text-inverse);
  margin: 0;
  white-space: pre;
  line-height: 1.4;
}

.next-steps {
  list-style: none;
  padding: 0;
}

.next-steps li {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.next-steps a {
  font-weight: var(--font-weight-medium);
}
</style>
