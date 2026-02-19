<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Migration</h1>
      <p class="page-lead">
        Strategies for migrating existing content into a FERIN-compliant register,
        including bulk import and transitioning from earlier editions.
      </p>
    </header>

    <section class="content-section">
      <h2>Migration Scenarios</h2>
      <p>
        Common scenarios requiring migration:
      </p>
      <ul>
        <li><strong>Bulk import:</strong> Loading existing data into a new register</li>
        <li><strong>2015 edition migration:</strong> Updating to 2025 edition conformance</li>
        <li><strong>Legacy system migration:</strong> Moving from spreadsheets, databases, or other systems</li>
        <li><strong>Register consolidation:</strong> Merging multiple registers into one</li>
        <li><strong>Schema migration:</strong> Changing content structure</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Bulk Import Checklist</h2>
      <p>
        Key questions to answer before bulk importing:
      </p>

      <div class="checklist-section">
        <h3>Governance Questions</h3>
        <ul class="checklist">
          <li>☐ Should bulk import bypass normal governance approval?</li>
          <li>☐ Who has authority to approve the bulk import?</li>
          <li>☐ Should imported content be immediately published?</li>
          <li>☐ What metadata should be recorded for imported items?</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h3>Identifier Questions</h3>
        <ul class="checklist">
          <li>☐ Will existing identifiers be preserved or new ones assigned?</li>
          <li>☐ If preserving, do existing identifiers meet persistence requirements?</li>
          <li>☐ How will identifier collisions be handled?</li>
          <li>☐ Should functional identifiers also be assigned?</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h3>History Questions</h3>
        <ul class="checklist">
          <li>☐ Should change objects be created for imported content?</li>
          <li>☐ Should import history be preserved separately?</li>
          <li>☐ How should the "original" source be documented?</li>
          <li>☐ What timestamp should imported content have?</li>
        </ul>
      </div>

      <div class="checklist-section">
        <h3>Validation Questions</h3>
        <ul class="checklist">
          <li>☐ Does all content meet the new schema requirements?</li>
          <li>☐ How will validation errors be handled?</li>
          <li>☐ Should invalid content be rejected or imported with warnings?</li>
          <li>☐ What reports are needed for audit purposes?</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>From ISO 19135:2015 Edition</h2>
      <p>
        Key differences when migrating from the 2015 edition:
      </p>

      <h3>Conformance Class Mapping</h3>
      <table class="mapping-table">
        <thead>
          <tr>
            <th>2015 Class</th>
            <th>2025 Type(s)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Core</td>
            <td>Content Register</td>
            <td>Basic content management</td>
          </tr>
          <tr>
            <td>Extended</td>
            <td>Concept Register or Governed Content Register</td>
            <td>Depending on which extended features were used</td>
          </tr>
          <tr>
            <td>Hierarchical</td>
            <td>Governed Concept Register or CCR</td>
            <td>Concept hierarchy capabilities</td>
          </tr>
        </tbody>
      </table>

      <h3>Key Changes to Address</h3>
      <ul>
        <li>
          <strong>Concept plane:</strong> 2015 registers may need to retroactively
          define concepts for existing content
        </li>
        <li>
          <strong>Commitments:</strong> New requirement—must define access, persistence,
          and transparency commitments
        </li>
        <li>
          <strong>Status model:</strong> Refined status handling; verify current
          implementation aligns
        </li>
        <li>
          <strong>Actions:</strong> Some action definitions refined; verify
          processes align
        </li>
      </ul>

      <h3>Migration Steps</h3>
      <ol>
        <li>Update register specification to 2025 format</li>
        <li>Define concept plane for existing content (if applicable)</li>
        <li>Document commitments</li>
        <li>Verify status model alignment</li>
        <li>Update conformance claims</li>
        <li>Test with 2025 conformance tests</li>
      </ol>
    </section>

    <section class="content-section">
      <h2>From Legacy Systems</h2>
      <p>
        Migrating from spreadsheets, databases, or other systems:
      </p>

      <h3>Common Legacy Patterns</h3>
      <div class="patterns">
        <div class="pattern">
          <h4>Spreadsheets</h4>
          <ul>
            <li>Extract with clear column mapping</li>
            <li>Handle inconsistent formatting</li>
            <li>Assign new identifiers</li>
            <li>Document source in metadata</li>
          </ul>
        </div>

        <div class="pattern">
          <h4>Relational Databases</h4>
          <ul>
            <li>Map tables to register items</li>
            <li>Preserve or migrate foreign key relationships</li>
            <li>Handle existing identifiers carefully</li>
            <li>Extract change history if available</li>
          </ul>
        </div>

        <div class="pattern">
          <h4>Custom Applications</h4>
          <ul>
            <li>Document existing data model</li>
            <li>Map to FERIN conceptual model</li>
            <li>Identify gaps in existing data</li>
            <li>Plan for missing FERIN requirements</li>
          </ul>
        </div>
      </div>

      <h3>Migration Process</h3>
      <ol>
        <li>
          <strong>Analyze source:</strong> Understand current data model, quality, gaps
        </li>
        <li>
          <strong>Define mapping:</strong> Map source fields to FERIN attributes
        </li>
        <li>
          <strong>Clean data:</strong> Fix quality issues before migration
        </li>
        <li>
          <strong>Transform:</strong> Apply mapping rules to create FERIN-compliant content
        </li>
        <li>
          <strong>Validate:</strong> Check transformed content against requirements
        </li>
        <li>
          <strong>Load:</strong> Import into register, handling governance appropriately
        </li>
        <li>
          <strong>Verify:</strong> Confirm migration success with sampling
        </li>
      </ol>
    </section>

    <section class="content-section">
      <h2>Handling Special Cases</h2>

      <h3>Duplicate Content</h3>
      <p>
        If source has duplicates:
      </p>
      <ul>
        <li>Identify duplicates before migration</li>
        <li>Define merge/dedupe strategy</li>
        <li>Document which items were merged</li>
        <li>Consider creating "see also" relations</li>
      </ul>

      <h3>Missing Required Fields</h3>
      <p>
        If source lacks required FERIN fields:
      </p>
      <ul>
        <li>Determine if field can be derived</li>
        <li>Use sensible defaults where appropriate</li>
        <li>Mark content as incomplete if critical fields missing</li>
        <li>Plan post-migration enrichment</li>
      </ul>

      <h3>Orphan References</h3>
      <p>
        If source has references to non-existent items:
      </p>
      <ul>
        <li>Identify orphans before migration</li>
        <li>Create stub items if references should be preserved</li>
        <li>Remove references if they're erroneous</li>
        <li>Document orphan handling in migration report</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Migration Anti-Patterns</h2>

      <div class="anti-patterns">
        <div class="anti-pattern">
          <h4>Big Bang Migration</h4>
          <p>
            Attempting to migrate everything at once without testing.
          </p>
          <p><strong>Better:</strong> Migrate in batches, test each batch, rollback if needed.</p>
        </div>

        <div class="anti-pattern">
          <h4>Preserving Everything</h4>
          <p>
            Including low-quality or irrelevant content just because it existed.
          </p>
          <p><strong>Better:</strong> Use migration as opportunity to clean up.</p>
        </div>

        <div class="anti-pattern">
          <h4>Ignoring Governance</h4>
          <p>
            Bulk loading without any approval or documentation.
          </p>
          <p><strong>Better:</strong> At minimum, get formal approval for the bulk import and document it.</p>
        </div>

        <div class="anti-pattern">
          <h4>No Rollback Plan</h4>
          <p>
            Migrating without ability to undo.
          </p>
          <p><strong>Better:</strong> Keep source available, plan rollback strategy, test it.</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Post-Migration Tasks</h2>
      <ul>
        <li>Verify content counts match expectations</li>
        <li>Test key use cases with migrated content</li>
        <li>Update documentation</li>
        <li>Communicate changes to users</li>
        <li>Retire or archive old system</li>
        <li>Document lessons learned</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/getting-started">Getting Started</router-link>
          - Implementation guide
        </li>
        <li>
          <router-link to="/build/register-specification">Register Specification</router-link>
          - Documenting your register
        </li>
        <li>
          <router-link to="/about/history">History</router-link>
          - Edition differences
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

.checklist-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.checklist-section h3 {
  margin-top: 0;
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-base);
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.checklist li {
  padding: var(--spacing-sm) 0;
  font-size: var(--font-size-sm);
  border-bottom: 1px solid var(--color-border);
}

.checklist li:last-child {
  border-bottom: none;
}

.mapping-table {
  margin: var(--spacing-md) 0;
}

.patterns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.pattern {
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.pattern h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-sm);
}

.pattern ul {
  font-size: var(--font-size-sm);
}

.anti-patterns {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.anti-pattern {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.anti-pattern h4 {
  font-size: var(--font-size-base);
  color: var(--color-error);
  margin: 0 0 var(--spacing-sm);
}

.anti-pattern p {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
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
  .patterns {
    grid-template-columns: 1fr;
  }
}
</style>
