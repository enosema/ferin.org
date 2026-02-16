<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Actions Reference</h1>
      <p class="page-lead">
        Operations for managing content in a register: adding, changing,
        invalidating, superseding, and more.
      </p>
    </header>

    <section class="content-section">
      <h2>Required Actions</h2>
      <p>
        All FERIN-compliant registers must support these core actions:
      </p>

      <div class="actions-grid">
        <div class="action-card">
          <h3>Add Concept</h3>
          <p class="action-summary">Create a new concept in the register</p>
          <h4>When to Use</h4>
          <p>When introducing a new abstract idea or category that doesn't exist in the register.</p>
          <h4>Required Information</h4>
          <ul>
            <li>Concept identifier</li>
            <li>Initial definition</li>
            <li>Proposer and justification</li>
          </ul>
          <h4>Effect</h4>
          <ul>
            <li>Creates concept with status "valid"</li>
            <li>Creates initial concept version</li>
            <li>Records change object</li>
          </ul>
        </div>

        <div class="action-card">
          <h3>Add Concept Version</h3>
          <p class="action-summary">Create a new version of an existing concept</p>
          <h4>When to Use</h4>
          <p>When a concept's definition needs to change significantly.</p>
          <h4>Required Information</h4>
          <ul>
            <li>Reference to existing concept</li>
            <li>New definition</li>
            <li>Justification for version</li>
          </ul>
          <h4>Effect</h4>
          <ul>
            <li>Creates new concept version</li>
            <li>Previous version remains accessible</li>
            <li>May mark previous as superseded</li>
          </ul>
        </div>

        <div class="action-card">
          <h3>Invalidate</h3>
          <p class="action-summary">Mark content as no longer valid for use</p>
          <h4>When to Use</h4>
          <p>When content is erroneous, withdrawn, or should no longer be used.</p>
          <h4>Required Information</h4>
          <ul>
            <li>Reference to item to invalidate</li>
            <li>Reason for invalidation</li>
            <li>Effective date</li>
          </ul>
          <h4>Effect</h4>
          <ul>
            <li>Sets valid status to false</li>
            <li>Content remains accessible for history</li>
            <li>Users should stop using this content</li>
          </ul>
        </div>

        <div class="action-card">
          <h3>Unpublish</h3>
          <p class="action-summary">Remove content from public visibility</p>
          <h4>When to Use</h4>
          <p>When content should no longer be visible to users but remains in the register.</p>
          <h4>Required Information</h4>
          <ul>
            <li>Reference to item to unpublish</li>
            <li>Reason for unpublishing</li>
          </ul>
          <h4>Effect</h4>
          <ul>
            <li>Sets published status to false</li>
            <li>Content hidden from normal queries</li>
            <li>Still accessible with explicit reference</li>
          </ul>
        </div>

        <div class="action-card">
          <h3>Supersede</h3>
          <p class="action-summary">Replace content with a newer version</p>
          <h4>When to Use</h4>
          <p>When new content replaces old content, and references should migrate.</p>
          <h4>Required Information</h4>
          <ul>
            <li>Reference to superseded item</li>
            <li>Reference to superseding item</li>
            <li>Justification for supersession</li>
          </ul>
          <h4>Effect</h4>
          <ul>
            <li>Creates supersession relation</li>
            <li>Old item marked as superseded</li>
            <li>Users can follow chain to current</li>
          </ul>
        </div>

        <div class="action-card">
          <h3>Changes</h3>
          <p class="action-summary">Modify content attributes</p>
          <h4>When to Use</h4>
          <p>When updating content without creating a new version (non-substantive changes).</p>
          <h4>Required Information</h4>
          <ul>
            <li>Reference to item to modify</li>
            <li>Attributes to change</li>
            <li>New values</li>
          </ul>
          <h4>Effect</h4>
          <ul>
            <li>Updates specified attributes</li>
            <li>Records change in history</li>
            <li>Identifier unchanged</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Optional Actions</h2>
      <p>
        Additional actions that registers may support:
      </p>

      <div class="optional-actions">
        <div class="optional-action">
          <h4>Redaction</h4>
          <p>Hide or remove sensitive content while preserving structure.</p>
          <p><strong>Implementation note:</strong> Soft delete (hide) vs hard delete (remove) vs access control.</p>
        </div>

        <div class="optional-action">
          <h4>Deletion</h4>
          <p>Permanently remove content from the register.</p>
          <p><strong>Caution:</strong> Breaks references; use sparingly.</p>
        </div>

        <div class="optional-action">
          <h4>Migration</h4>
          <p>Move content between registers or register structures.</p>
          <p><strong>Use case:</strong> Consolidation, splitting, or schema migration.</p>
        </div>

        <div class="optional-action">
          <h4>Domains</h4>
          <p>Define or modify domain constraints on content.</p>
          <p><strong>Use case:</strong> Constrained value sets, enumerated types.</p>
        </div>

        <div class="optional-action">
          <h4>Composition</h4>
          <p>Manage relationships between composite and component items.</p>
          <p><strong>Use case:</strong> Assemblies, bundles, hierarchical content.</p>
        </div>

        <div class="optional-action">
          <h4>Inheritance</h4>
          <p>Define inheritance relationships between items.</p>
          <p><strong>Use case:</strong> Type hierarchies, property inheritance.</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Action Decision Matrix</h2>
      <p>
        Which action should you use?
      </p>

      <table class="decision-matrix">
        <thead>
          <tr>
            <th>Situation</th>
            <th>Action</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Adding entirely new concept</td>
            <td>Add Concept</td>
            <td>Creates concept and initial version</td>
          </tr>
          <tr>
            <td>Refining definition significantly</td>
            <td>Add Concept Version</td>
            <td>Preserves history</td>
          </tr>
          <tr>
            <td>Fixing typo in description</td>
            <td>Changes</td>
            <td>Non-substantive, no new version needed</td>
          </tr>
          <tr>
            <td>Content has errors</td>
            <td>Invalidate</td>
            <td>Mark as unusable</td>
          </tr>
          <tr>
            <td>Replacing with better version</td>
            <td>Supersede</td>
            <td>Links old to new</td>
          </tr>
          <tr>
            <td>Content no longer appropriate</td>
            <td>Unpublish</td>
            <td>Hide from view</td>
          </tr>
          <tr>
            <td>Content contains sensitive data</td>
            <td>Redaction</td>
            <td>Remove specific data</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Emergency Changes</h2>
      <p>
        Sometimes changes need to happen fast (security vulnerabilities, critical errors).
      </p>

      <h3>Expedited Process</h3>
      <ol>
        <li>
          <strong>Identify urgency:</strong> Document why normal process can't be followed
        </li>
        <li>
          <strong>Emergency approval:</strong> Get expedited approval from authorized role
        </li>
        <li>
          <strong>Apply change:</strong> Execute the action
        </li>
        <li>
          <strong>Retroactive review:</strong> Submit for normal review after the fact
        </li>
        <li>
          <strong>Document:</strong> Record the emergency nature in change metadata
        </li>
      </ol>

      <div class="warning-box">
        <strong>Caution:</strong> Emergency processes should be rare. If used frequently,
        your normal process is too slow. Also, emergency changes should still be
        documented and reviewed—just after the fact.
      </div>
    </section>

    <section class="content-section">
      <h2>Rollback Considerations</h2>
      <p>
        FERIN doesn't explicitly define rollback. Here's practical guidance:
      </p>

      <h3>Approaches</h3>
      <table class="rollback-table">
        <thead>
          <tr>
            <th>Approach</th>
            <th>How It Works</th>
            <th>Pros/Cons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Supersede chain</td>
            <td>Supersede with previous version</td>
            <td>Preserves history; may confuse users</td>
          </tr>
          <tr>
            <td>Invalidate + re-add</td>
            <td>Invalidate wrong content, add correct</td>
            <td>Clear; loses direct link to original</td>
          </tr>
          <tr>
            <td>True rollback</td>
            <td>Revert to previous state</td>
            <td>Simple; may hide that error occurred</td>
          </tr>
        </tbody>
      </table>

      <h3>Recommendation</h3>
      <p>
        For most cases, use <strong>supersede</strong> to create a new version that
        restores previous content. This preserves history and shows what happened.
      </p>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/reference/statuses">Statuses</router-link>
          - Complete status reference
        </li>
        <li>
          <router-link to="/implement/versioning">Versioning</router-link>
          - When to create new versions
        </li>
        <li>
          <router-link to="/implement/governance">Governance</router-link>
          - Who can perform actions
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

.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.action-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.action-card h3 {
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-xs);
  color: var(--color-accent);
}

.action-summary {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
  margin-bottom: var(--spacing-md);
}

.action-card h4 {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  margin: var(--spacing-md) 0 var(--spacing-xs);
}

.action-card ul {
  font-size: var(--font-size-sm);
}

.optional-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.optional-action {
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.optional-action h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-xs);
}

.optional-action p {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
}

.decision-matrix,
.rollback-table {
  margin: var(--spacing-md) 0;
}

.warning-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
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

@media (max-width: 768px) {
  .actions-grid,
  .optional-actions {
    grid-template-columns: 1fr;
  }
}
</style>
