<template>
  <article class="content-page migration-page">
    <nav class="breadcrumb">
      <router-link to="/implement/migration">Migration Guide</router-link>
      <span class="separator">/</span>
      <span class="current">Data Model Migration</span>
    </nav>

    <header class="page-header">
      <h1>Data Model Migration</h1>
      <p class="page-lead">
        Migrating identifiers, versions, relations, and change tracking
        to the FERIN framework.
      </p>
    </header>

    <section class="content-section">
      <h2>Identifier Migration</h2>
      <p>
        The 2026 edition introduces two types of identifiers while maintaining
        backward compatibility with existing identifier patterns.
      </p>

      <div class="identifier-types">
        <div class="id-type">
          <h3>Object Identifier</h3>
          <span class="badge required">Required</span>
          <p>
            A non-redirectable identifier permanently assigned to a specific object.
            This is what your existing identifiers become.
          </p>
          <ul>
            <li>Never changes once assigned</li>
            <li>Directly maps to your current identifiers</li>
            <li>Example: <code>urn:ogc:def:crs:EPSG::4326</code></li>
          </ul>
        </div>

        <div class="id-type">
          <h3>Functional Identifier</h3>
          <span class="badge optional">Optional</span>
          <p>
            A redirectable identifier that always reflects the original intent.
            Useful for stable external references.
          </p>
          <ul>
            <li>Can be redirected to different targets</li>
            <li>Enables semantic stability across changes</li>
            <li>Example: <code>/crs/wgs84</code> → redirects to current version</li>
          </ul>
        </div>
      </div>

      <div class="migration-box">
        <h4>Migration Strategy</h4>
        <ol>
          <li>
            <strong>Preserve existing identifiers</strong> as object identifiers
            <p>Your current identifier scheme works as-is for object identifiers.</p>
          </li>
          <li>
            <strong>Evaluate functional identifier need</strong>
            <p>Consider adding functional identifiers if you need stable external references that survive content changes.</p>
          </li>
          <li>
            <strong>Update documentation</strong>
            <p>Document your identifier scheme clearly in the register specification.</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="content-section">
      <h2>Version Model Migration</h2>
      <p>
        The 2026 edition requires minimum two-layer versioning (major/minor).
        Your existing version model may need adaptation.
      </p>

      <div class="version-comparison">
        <div class="version-model before">
          <h3>2015 Version Model</h3>
          <div class="model-diagram">
            <div class="version-item">
              <span class="attr">version</span>
              <span class="type">CharacterString</span>
              <span class="mult">0..1</span>
            </div>
            <div class="version-item">
              <span class="attr">dateOfLastChange</span>
              <span class="type">Date</span>
              <span class="mult">0..1</span>
            </div>
          </div>
        </div>

        <div class="version-model after">
          <h3>2026 Version Model</h3>
          <div class="model-diagram">
            <div class="version-item">
              <span class="attr">majorVersion</span>
              <span class="type">CharacterString</span>
              <span class="mult">1</span>
            </div>
            <div class="version-item">
              <span class="attr">minorVersion</span>
              <span class="type">CharacterString</span>
              <span class="mult">0..1</span>
            </div>
            <div class="version-item optional">
              <span class="attr">patchVersion</span>
              <span class="type">CharacterString</span>
              <span class="mult">0..1</span>
            </div>
            <div class="version-item">
              <span class="attr">dateOfLastChange</span>
              <span class="type">DateTime</span>
              <span class="mult">1</span>
            </div>
          </div>
        </div>
      </div>

      <div class="version-strategies">
        <h3>Migration Strategies</h3>
        <div class="strategy-grid">
          <div class="strategy">
            <h4>Semantic Versioning</h4>
            <code>1.2.3</code>
            <p>Use major.minor.patch for fine-grained version tracking.</p>
          </div>
          <div class="strategy">
            <h4>Date-Based Versioning</h4>
            <code>2026.02.15</code>
            <p>Use year.month for temporal version identification.</p>
          </div>
          <div class="strategy">
            <h4>Sequential Versioning</h4>
            <code>1.0 → 2.0</code>
            <p>Simple sequential major versions with optional minor.</p>
          </div>
        </div>
      </div>

      <div class="migration-box">
        <h4>Version Migration Steps</h4>
        <ol>
          <li>Parse existing version strings to determine structure</li>
          <li>Define mapping rules (e.g., "v1" → major=1, minor=null)</li>
          <li>Apply mapping consistently across all items</li>
          <li>Ensure dateOfLastChange is populated for all items</li>
        </ol>
      </div>
    </section>

    <section class="content-section">
      <h2>Relations Migration</h2>
      <p>
        The 2026 edition significantly expands the relations model. Your existing
        predecessor/successor relationships map to the new model.
      </p>

      <table class="relations-table">
        <thead>
          <tr>
            <th>2015 Relation</th>
            <th>2026 Relation</th>
            <th>Type</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>predecessor</strong></td>
            <td><code>supersedes</code></td>
            <td>Concept version → Concept version</td>
            <td>Current item supersedes the predecessor</td>
          </tr>
          <tr>
            <td><strong>successor</strong></td>
            <td><code>superseded by</code></td>
            <td>Concept version → Concept version</td>
            <td>Current item is superseded by the successor</td>
          </tr>
          <tr class="new">
            <td><em>new</em></td>
            <td><code>inherits</code></td>
            <td>Concept → Concept</td>
            <td>Property inheritance between concepts</td>
          </tr>
          <tr class="new">
            <td><em>new</em></td>
            <td><code>has part</code></td>
            <td>Concept → Concept</td>
            <td>Partitive relationship</td>
          </tr>
          <tr class="new">
            <td><em>new</em></td>
            <td><code>has version</code></td>
            <td>Concept → Concept version</td>
            <td>Links concept to its versions</td>
          </tr>
        </tbody>
      </table>

      <div class="migration-box">
        <h4>Relation Migration Checklist</h4>
        <ul>
          <li>☐ Inventory all existing predecessor/successor links</li>
          <li>☐ Map to supersedes/superseded-by relations</li>
          <li>☐ Evaluate need for new relation types (inheritance, partitive)</li>
          <li>☐ Update relation storage schema</li>
          <li>☐ Test relation queries work correctly</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Change Tracking Migration</h2>
      <p>
        The 2026 edition formalizes change tracking with explicit Change objects.
        Your existing change history can be migrated to this model.
      </p>

      <div class="change-model">
        <h3>2026 Change Object</h3>
        <pre><code>{
  "changeId": "chg-001",
  "changeType": "substantive",
  "dateTime": "2025-01-15T10:30:00Z",
  "description": "Updated definition to clarify scope",
  "affectedItems": ["EPSG:4326"],
  "proposal": {
    "proposalId": "prop-2024-42",
    "proposer": "OGC"
  }
}</code></pre>
      </div>

      <div class="migration-box">
        <h4>Change History Migration</h4>
        <p>If your 2015 system tracked changes (from Extended conformance):</p>
        <ol>
          <li>Extract all change records with timestamps</li>
          <li>Create Change objects linking to affected items</li>
          <li>Link changes to proposals if available</li>
          <li>Preserve chronological ordering</li>
        </ol>
        <p>If you didn't track changes formally:</p>
        <ol>
          <li>Create a single "migration" change record</li>
          <li>Document that pre-migration history is not available</li>
          <li>Begin tracking changes going forward</li>
        </ol>
      </div>
    </section>

    <nav class="page-nav">
      <router-link to="/implement/migration/status-model" class="nav-prev">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Status Model Migration</span>
      </router-link>
      <router-link to="/implement/migration/governance" class="nav-next">
        <span class="nav-label">Next</span>
        <span class="nav-title">Governance Migration</span>
      </router-link>
    </nav>
  </article>
</template>

<script setup>
</script>

<style scoped>
@import './migration-shared.css';

.identifier-types {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.id-type {
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.id-type h3 {
  display: inline;
  font-size: var(--font-size-base);
  margin: 0;
}

.id-type .badge {
  display: inline-block;
  margin-left: var(--spacing-sm);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  vertical-align: middle;
}

.id-type .badge.required {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
}

.id-type .badge.optional {
  background: rgba(234, 179, 8, 0.1);
  color: #ca8a04;
}

.id-type ul {
  font-size: var(--font-size-sm);
  margin: var(--spacing-sm) 0 0;
}

.id-type code {
  background: var(--color-background);
  padding: 1px 4px;
  border-radius: 2px;
  font-size: var(--font-size-xs);
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

.migration-box ol,
.migration-box ul {
  margin: 0;
  padding-left: var(--spacing-md);
}

.migration-box li {
  margin-bottom: var(--spacing-sm);
}

.migration-box p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: var(--spacing-xs) 0 0;
}

.version-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.version-model {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.version-model.before {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.version-model.after {
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.version-model h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
}

.version-model.before h3 {
  color: #dc2626;
}

.version-model.after h3 {
  color: #16a34a;
}

.model-diagram {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.version-item {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  background: white;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}

.version-item.optional {
  border: 1px dashed var(--color-border);
}

.version-item .attr {
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
}

.version-item .type {
  font-family: monospace;
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.version-item .mult {
  font-size: var(--font-size-xs);
  color: var(--color-accent);
}

.version-strategies {
  margin: var(--spacing-lg) 0;
}

.version-strategies h3 {
  margin-bottom: var(--spacing-md);
}

.strategy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.strategy {
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  text-align: center;
}

.strategy h4 {
  font-size: var(--font-size-sm);
  margin: 0 0 var(--spacing-sm);
}

.strategy code {
  display: block;
  padding: var(--spacing-sm);
  background: var(--color-background);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-lg);
}

.strategy p {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
}

.relations-table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.relations-table th,
.relations-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.relations-table th {
  background: var(--color-background);
  font-weight: var(--font-weight-semibold);
}

.relations-table code {
  background: var(--color-background);
  padding: 1px 4px;
  border-radius: 2px;
  font-size: var(--font-size-xs);
}

.relations-table tr.new {
  background: rgba(99, 102, 241, 0.05);
}

.relations-table tr.new td:first-child {
  font-style: italic;
  color: var(--color-text-light);
}

.change-model {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  margin: var(--spacing-lg) 0;
  overflow: hidden;
}

.change-model h3 {
  font-size: var(--font-size-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  margin: 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.change-model pre {
  margin: 0;
  padding: var(--spacing-md);
  font-size: var(--font-size-sm);
  overflow-x: auto;
}

@media (max-width: 768px) {
  .identifier-types,
  .version-comparison {
    grid-template-columns: 1fr;
  }

  .strategy-grid {
    grid-template-columns: 1fr;
  }
}
</style>
