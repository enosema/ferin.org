<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Destructive Actions</h1>
      <p class="page-lead">
        Handling irreversible operations in FERIN registers: redaction,
        deletion, and content removal with appropriate safeguards.
      </p>
    </header>

    <section class="content-section">
      <h2>Understanding Destructive Actions</h2>
      <p>
        FERIN is designed for persistence and traceability. However, some
        situations require removing or hiding content. This guide covers
        how to handle these cases properly.
      </p>

      <div class="warning-banner">
        <strong>Warning:</strong> Destructive actions can have legal,
        regulatory, and operational consequences. Always consult with
        legal and compliance teams before implementing or executing
        destructive operations.
      </div>

      <h3>Types of Destructive Actions</h3>
      <table class="action-types">
        <thead>
          <tr>
            <th>Action</th>
            <th>Visibility</th>
            <th>Reversibility</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Invalidation</td>
            <td>Item visible, marked invalid</td>
            <td>Fully reversible</td>
            <td>Item no longer appropriate for use</td>
          </tr>
          <tr>
            <td>Redaction</td>
            <td>Content hidden, record exists</td>
            <td>Partially reversible</td>
            <td>Remove sensitive content</td>
          </tr>
          <tr>
            <td>Tombstoning</td>
            <td>Placeholder only</td>
            <td>Irreversible</td>
            <td>Complete removal</td>
          </tr>
          <tr>
            <td>Purging</td>
            <td>Completely removed</td>
            <td>Irreversible</td>
            <td>Legal/GDPR requirements</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Invalidation vs Deletion</h2>
      <p>
        FERIN's preferred approach is invalidation, not deletion. Invalidated
        items remain in the register with their history preserved.
      </p>

      <h3>When to Invalidate</h3>
      <ul>
        <li>Item contains errors that cannot be corrected</li>
        <li>Item was created based on incorrect information</li>
        <li>Item is superseded by a new item</li>
        <li>Item is no longer relevant or appropriate</li>
      </ul>

      <h3>When Deletion May Be Required</h3>
      <ul>
        <li>Legal order requires removal</li>
        <li>GDPR right to erasure applies</li>
        <li>Sensitive data exposed in content</li>
        <li>Copyright or licensing violation</li>
      </ul>

      <div class="comparison">
        <div class="option">
          <h4>Invalidation</h4>
          <ul>
            <li>✓ History preserved</li>
            <li>✓ References remain valid</li>
            <li>✓ Fully auditable</li>
            <li>✓ Reversible if needed</li>
            <li>✓ Aligns with FERIN principles</li>
          </ul>
        </div>
        <div class="option">
          <h4>Deletion</h4>
          <ul>
            <li>✗ History lost</li>
            <li>✗ References break</li>
            <li>✗ Audit trail incomplete</li>
            <li>✗ Irreversible</li>
            <li>✗ Requires special handling</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Redaction</h2>
      <p>
        Redaction removes specific content while preserving the record and
        its identifier. Use redaction when you need to hide content without
        breaking references.
      </p>

      <h3>Redaction Process</h3>
      <ol>
        <li>Identify content requiring redaction</li>
        <li>Create proposal (if governed) with justification</li>
        <li>Obtain approval from appropriate authority</li>
        <li>Replace content with redaction marker</li>
        <li>Preserve redaction metadata</li>
        <li>Update search indexes</li>
      </ol>

      <h3>Redaction Record</h3>
      <div class="redaction-example">
        <pre><code>{
  "id": "urn:example:item:abc123",
  "content": {
    "name": "Example Item",
    "description": "[REDACTED - Privacy concern - 2024-03-15]",
    "status": "valid"
  },
  "redactions": [
    {
      "date": "2024-03-15",
      "field": "description",
      "reason": "Privacy concern",
      "approvedBy": "Control Body",
      "proposalId": "prop-789"
    }
  ]
}</code></pre>
      </div>

      <h3>What to Redact</h3>
      <ul>
        <li>Personal identifying information (PII)</li>
        <li>Confidential business information</li>
        <li>Security-sensitive details</li>
        <li>Legally protected content</li>
      </ul>

      <div class="note-box">
        <strong>Search Considerations:</strong> Redacted content should be
        removed from search indexes. Consider whether to show redacted items
        in search results at all.
      </div>
    </section>

    <section class="content-section">
      <h2>Tombstoning</h2>
      <p>
        Tombstoning replaces an item with a minimal placeholder, preserving
        the identifier but removing all content. This is more aggressive than
        redaction but less than purging.
      </p>

      <h3>Tombstone Record</h3>
      <div class="tombstone-example">
        <pre><code>{
  "id": "urn:example:item:abc123",
  "status": "removed",
  "tombstone": {
    "date": "2024-03-15",
    "reason": "Legal order #12345",
    "removedBy": "Register Manager",
    "approvalRef": "legal-order-12345"
  },
  "content": null,
  "versions": []
}</code></pre>
      </div>

      <h3>When to Use Tombstoning</h3>
      <ul>
        <li>Court order requires removal</li>
        <li>Severe content violation</li>
        <li>Security vulnerability in content</li>
        <li>Complete content removal required</li>
      </ul>

      <h3>Tombstone vs Purge</h3>
      <table class="tombstone-purge">
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Tombstone</th>
            <th>Purge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Identifier exists</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Record of removal</td>
            <td>Yes</td>
            <td>No (or separate log)</td>
          </tr>
          <tr>
            <td>References work</td>
            <td>Yes (returns tombstone)</td>
            <td>No (404 error)</td>
          </tr>
          <tr>
            <td>History retained</td>
            <td>No</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Purging</h2>
      <p>
        Purging completely removes an item and its history. This is the most
        destructive action and should be extremely rare.
      </p>

      <h3>When Purging Is Necessary</h3>
      <ul>
        <li>GDPR right to erasure with no exceptions</li>
        <li>Court order explicitly requiring destruction</li>
        <li>Illegal content that must be completely removed</li>
      </ul>

      <h3>Purging Process</h3>
      <ol>
        <li>Obtain legal/compliance approval</li>
        <li>Document justification thoroughly</li>
        <li>Identify all copies and backups</li>
        <li>Remove from primary database</li>
        <li>Remove from backups (or mark for exclusion)</li>
        <li>Remove from search indexes</li>
        <li>Remove from caches</li>
        <li>Update any foreign key references</li>
        <li>Create purge audit record (separate from register)</li>
      </ol>

      <div class="warning-box">
        <strong>Backup Challenge:</strong> Purged data may still exist in
        backups. Define a backup retention policy that aligns with purge
        requirements, or implement encryption that allows selective destruction.
      </div>

      <h3>Purge Audit Log</h3>
      <p>
        Maintain a separate, immutable log of all purges:
      </p>
      <div class="purge-log-example">
        <pre><code>{
  "purgeId": "purge-2024-0001",
  "date": "2024-03-15T14:30:00Z",
  "itemId": "urn:example:item:abc123",
  "reason": "GDPR right to erasure request #789",
  "approvedBy": "Data Protection Officer",
  "executedBy": "Register Manager",
  "systemsPurged": [
    "primary-database",
    "search-index",
    "cache-layer"
  ],
  "backupsAffected": [
    "daily-backup-2024-03-14",
    "weekly-backup-2024-03-10"
  ],
  "legalBasis": "GDPR Article 17"
}</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>GDPR Considerations</h2>
      <p>
        The General Data Protection Regulation (GDPR) requires specific
        handling of personal data, including the right to erasure.
      </p>

      <h3>Right to Erasure (Article 17)</h3>
      <p>
        Individuals have the right to request deletion of their personal data
        when:
      </p>
      <ul>
        <li>Data is no longer necessary for original purpose</li>
        <li>Consent is withdrawn</li>
        <li>Data was unlawfully processed</li>
        <li>Legal obligation requires erasure</li>
      </ul>

      <h3>Exceptions</h3>
      <p>
        Erasure may not be required when data is needed for:
      </p>
      <ul>
        <li>Freedom of expression and information</li>
        <li>Compliance with legal obligation</li>
        <li>Public health purposes</li>
        <li>Archiving in the public interest</li>
        <li>Establishment, exercise, or defense of legal claims</li>
      </ul>

      <h3>Register-Specific Considerations</h3>
      <div class="gdpr-checklist">
        <div class="checklist-item">
          <h4>Identify Personal Data</h4>
          <p>Know which items contain personal data and what data they contain.</p>
        </div>
        <div class="checklist-item">
          <h4>Data Minimization</h4>
          <p>Only collect personal data necessary for register purpose.</p>
        </div>
        <div class="checklist-item">
          <h4>Retention Policy</h4>
          <p>Define how long personal data is kept and why.</p>
        </div>
        <div class="checklist-item">
          <h4>Erasure Procedure</h4>
          <p>Have a documented process for handling erasure requests.</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Safeguards</h2>
      <p>
        Implement these safeguards for destructive actions:
      </p>

      <h3>Technical Safeguards</h3>
      <ul>
        <li>
          <strong>Role-based access:</strong> Only specific roles can execute
          destructive actions
        </li>
        <li>
          <strong>Approval workflow:</strong> Require second-person approval
          for destructive actions
        </li>
        <li>
          <strong>Soft delete first:</strong> Mark for deletion, purge later
          after confirmation
        </li>
        <li>
          <strong>Audit everything:</strong> Log all destructive actions
          immutably
        </li>
        <li>
          <strong>Backup verification:</strong> Confirm backups are
          appropriately handled
        </li>
      </ul>

      <h3>Process Safeguards</h3>
      <ul>
        <li>
          <strong>Legal review:</strong> Require legal/compliance sign-off
          for purges
        </li>
        <li>
          <strong>Waiting period:</strong> Implement delay between request
          and execution
        </li>
        <li>
          <strong>Notification:</strong> Notify relevant parties before
          destructive actions
        </li>
        <li>
          <strong>Documentation:</strong> Require thorough justification
          documentation
        </li>
        <li>
          <strong>Regular review:</strong> Periodically review destructive
          action logs
        </li>
      </ul>

      <h3>Implementation Checklist</h3>
      <div class="safeguard-checklist">
        <div class="checklist-section">
          <h4>Before Destructive Action</h4>
          <ul>
            <li>☐ Justification documented</li>
            <li>☐ Legal/compliance approval obtained</li>
            <li>☐ Alternative approaches considered</li>
            <li>☐ Impact on references assessed</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>During Execution</h4>
          <ul>
            <li>☐ Authorized user executes</li>
            <li>☐ All copies identified</li>
            <li>☐ Audit log created</li>
            <li>☐ Search indexes updated</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>After Execution</h4>
          <ul>
            <li>☐ Verification of removal</li>
            <li>☐ Backup handling confirmed</li>
            <li>☐ Stakeholders notified</li>
            <li>☐ Documentation complete</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/security">Security</router-link>
          - Data protection and access control
        </li>
        <li>
          <router-link to="/build/operations">Operations</router-link>
          - Backup and recovery procedures
        </li>
        <li>
          <router-link to="/build/actions">Actions</router-link>
          - Standard register actions
        </li>
        <li>
          <router-link to="/build/governance">Governance</router-link>
          - Approval workflows
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

.warning-banner {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.action-types,
.tombstone-purge {
  margin: var(--spacing-lg) 0;
}

.comparison {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.option {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.option:last-child {
  background: rgba(239, 68, 68, 0.05);
  border-color: rgba(239, 68, 68, 0.2);
}

.option h4 {
  margin-bottom: var(--spacing-md);
}

.option ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-sm);
}

.option li {
  padding: var(--spacing-xs) 0;
}

.redaction-example,
.tombstone-example,
.purge-log-example {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
  overflow-x: auto;
}

.redaction-example pre,
.tombstone-example pre,
.purge-log-example pre {
  background: none;
  margin: 0;
  padding: 0;
}

.redaction-example code,
.tombstone-example code,
.purge-log-example code {
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
}

.note-box {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.warning-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.gdpr-checklist {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.checklist-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.checklist-item h4 {
  margin-bottom: var(--spacing-sm);
}

.checklist-item p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.safeguard-checklist {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.checklist-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.checklist-section h4 {
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
}

.checklist-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-sm);
}

.checklist-section li {
  padding: var(--spacing-xs) 0;
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
  .comparison,
  .gdpr-checklist,
  .safeguard-checklist {
    grid-template-columns: 1fr;
  }
}
</style>
