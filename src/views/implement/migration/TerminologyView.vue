<template>
  <article class="content-page migration-page">
    <nav class="breadcrumb">
      <router-link to="/implement/migration">Migration Guide</router-link>
      <span class="separator">/</span>
      <span class="current">Terminology Mapping</span>
    </nav>

    <header class="page-header">
      <h1>Terminology Mapping</h1>
      <p class="page-lead">
        Complete mapping of terms between ISO 19135-1:2015 and ISO 19135:2026,
        including renamed terms, new concepts, and deprecated terminology.
      </p>
    </header>

    <section class="content-section">
      <h2>Renamed Terms</h2>
      <p>
        These terms have been renamed but represent the same or similar concepts.
        Update your documentation and user interfaces accordingly.
      </p>

      <table class="term-table">
        <thead>
          <tr>
            <th>2015 Term</th>
            <th>2026 Term</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Register item series</code></td>
            <td><code>Concept</code></td>
            <td>Fundamental shift: series now have explicit concept representation</td>
          </tr>
          <tr>
            <td><code>Technical standard</code></td>
            <td><code>Register specification</code></td>
            <td>Broader scope, not limited to technical content</td>
          </tr>
          <tr>
            <td><code>Registry</code></td>
            <td><code>Register system</code> (preferred)</td>
            <td>"Registry" still admitted but "register system" preferred</td>
          </tr>
          <tr>
            <td><code>RE_Register</code></td>
            <td><code>Register</code></td>
            <td>Simplified naming without RE_ prefix in conceptual model</td>
          </tr>
          <tr>
            <td><code>RE_RegisterItem</code></td>
            <td><code>Register item</code></td>
            <td>Same concept, simplified naming</td>
          </tr>
          <tr>
            <td><code>RE_ItemStatus</code></td>
            <td><code>Status dimensions</code></td>
            <td>Fundamentally changed—see Status Model Migration</td>
          </tr>
          <tr>
            <td><code>deprecated</code></td>
            <td><em>removed</em></td>
            <td>Term completely removed; use "invalid" instead</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>New Terms in 2026</h2>
      <p>
        These terms are new in the 2026 edition and represent concepts that
        didn't exist or weren't explicitly defined in 2015.
      </p>

      <div class="terms-grid">
        <div class="term-card">
          <h4>Two-Plane Architecture</h4>
          <dl>
            <dt>Concept plane</dt>
            <dd>Layer for organizing concepts, their versions, statuses, and relations</dd>

            <dt>Content plane</dt>
            <dd>Layer where register items and their changes are stored</dd>
          </dl>
        </div>

        <div class="term-card">
          <h4>Concept Types</h4>
          <dl>
            <dt>Concept</dt>
            <dd>Unit of knowledge created by unique combination of characteristics</dd>

            <dt>Concept version</dt>
            <dd>Representation of a concept at a particular point in time</dd>

            <dt>Concept definition</dt>
            <dd>Concept that describes information requirements and properties</dd>

            <dt>Realised concept</dt>
            <dd>Instance of a concept materialized into concrete information</dd>

            <dt>General concept</dt>
            <dd>Concept corresponding to potentially unlimited number of objects</dd>
          </dl>
        </div>

        <div class="term-card">
          <h4>Identifiers</h4>
          <dl>
            <dt>Object identifier</dt>
            <dd>Non-redirectable identifier permanently assigned to specific object</dd>

            <dt>Functional identifier</dt>
            <dd>Redirectable identifier that always reflects original intent</dd>
          </dl>
        </div>

        <div class="term-card">
          <h4>Content Types</h4>
          <dl>
            <dt>Managed content</dt>
            <dd>Information in a register item that is governed by the register</dd>

            <dt>Unmanaged content</dt>
            <dd>Information associated with register item NOT governed by register</dd>
          </dl>
        </div>

        <div class="term-card">
          <h4>Governance</h4>
          <dl>
            <dt>Commitments</dt>
            <dd>Set of promises made by a register to its users</dd>

            <dt>Register specification</dt>
            <dd>Document describing register purpose, scope, governance, and commitments</dd>
          </dl>
        </div>

        <div class="term-card">
          <h4>Register Types</h4>
          <dl>
            <dt>Content register</dt>
            <dd>Basic register type with content management capabilities</dd>

            <dt>Concept register</dt>
            <dd>Register with concept plane capabilities</dd>

            <dt>Governed content register</dt>
            <dd>Content register with governance capabilities</dd>

            <dt>Governed concept register</dt>
            <dd>Concept register with governance capabilities</dd>

            <dt>Comprehensive concept register</dt>
            <dd>Full-featured register with all capabilities</dd>
          </dl>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Removed Terms</h2>
      <p>
        These terms from 2015 have been removed in 2026 and should no longer be used.
      </p>

      <table class="term-table removed">
        <thead>
          <tr>
            <th>Removed Term</th>
            <th>Reason</th>
            <th>Replacement / Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>submitted</code> status</td>
            <td>Conceptual change</td>
            <td>Proposals are now separate from register items; an item doesn't exist until approved</td>
          </tr>
          <tr>
            <td><code>deprecated</code></td>
            <td>Terminology cleanup</td>
            <td>Use <code>invalid</code> for content that is no longer suitable</td>
          </tr>
          <tr>
            <td>XML schema</td>
            <td>Technology neutrality</td>
            <td>No normative schema; any encoding technology is acceptable</td>
          </tr>
          <tr>
            <td><code>grg:</code> XML namespace</td>
            <td>Technology neutrality</td>
            <td>Implementation-specific; no longer defined by standard</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Changed Meanings</h2>
      <p>
        These terms exist in both editions but their meaning or scope has changed.
      </p>

      <table class="term-table changed">
        <thead>
          <tr>
            <th>Term</th>
            <th>2015 Meaning</th>
            <th>2026 Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Status</strong></td>
            <td>Single enumerated value from a fixed set (submitted, valid, invalid, retired, superseded)</td>
            <td>Multiple independent dimensions (validity, publication, redaction, deletion) that can be combined</td>
          </tr>
          <tr>
            <td><strong>Version</strong></td>
            <td>Simple version attribute on register</td>
            <td>Multi-layer version model supporting major/minor/patch with semantic versioning options</td>
          </tr>
          <tr>
            <td><strong>Relations</strong></td>
            <td>Predecessor/successor between items only</td>
            <td>Rich relation model with 10+ relation types between concepts and versions</td>
          </tr>
          <tr>
            <td><strong>Identifier</strong></td>
            <td>Single identifier per item</td>
            <td>Object identifier (required) + functional identifier (optional)</td>
          </tr>
          <tr>
            <td><strong>Governance</strong></td>
            <td>Defined roles and processes</td>
            <td>Defined roles, processes, AND commitments framework</td>
          </tr>
          <tr>
            <td><strong>Conformance</strong></td>
            <td>Three hierarchical classes (Core, Extended, Hierarchical)</td>
            <td>Five capability-based register types with modular requirements</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Quick Reference: Role Names</h2>
      <p>
        Role names remain largely the same but some responsibilities have shifted.
      </p>

      <table class="term-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>2015</th>
            <th>2026</th>
            <th>Changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Register Owner</td>
            <td>✓</td>
            <td>✓</td>
            <td>Now defines commitments</td>
          </tr>
          <tr>
            <td>Register Manager</td>
            <td>✓</td>
            <td>✓</td>
            <td>Broader responsibilities for commitments</td>
          </tr>
          <tr>
            <td>Control Body</td>
            <td>✓</td>
            <td>✓</td>
            <td>Mostly unchanged</td>
          </tr>
          <tr>
            <td>Submitting Organization</td>
            <td>✓</td>
            <td>→ Proposer</td>
            <td>Renamed to "Proposer"; same function</td>
          </tr>
          <tr>
            <td>Registry Manager</td>
            <td>✓</td>
            <td>→ System Manager</td>
            <td>Renamed to "System Manager"</td>
          </tr>
          <tr>
            <td>Register User</td>
            <td>✓</td>
            <td>✓</td>
            <td>Unchanged</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Implementation Checklist</h2>
      <div class="checklist-box">
        <ul class="checklist">
          <li>☐ Update all references to "register item series" → "concept"</li>
          <li>☐ Update all references to "technical standard" → "register specification"</li>
          <li>☐ Update "submitting organization" → "proposer" in documentation</li>
          <li>☐ Update "registry manager" → "system manager" in documentation</li>
          <li>☐ Remove all uses of "submitted" status</li>
          <li>☐ Replace "deprecated" with "invalid" where used</li>
          <li>☐ Add new terminology to glossary (concept plane, content plane, commitments, etc.)</li>
          <li>☐ Update user-facing documentation with new register type names</li>
          <li>☐ Update training materials with new terminology</li>
          <li>☐ Review API documentation for terminology changes</li>
        </ul>
      </div>
    </section>

    <nav class="page-nav">
      <router-link to="/implement/migration/paradigm-shifts" class="nav-prev">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Paradigm Shifts</span>
      </router-link>
      <router-link to="/implement/migration/conformance" class="nav-next">
        <span class="nav-label">Next</span>
        <span class="nav-title">Conformance Migration</span>
      </router-link>
    </nav>
  </article>
</template>

<script setup>
</script>

<style scoped>
@import './migration-shared.css';

.terms-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.term-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.term-card h4 {
  font-size: var(--font-size-base);
  color: var(--color-accent);
  margin: 0 0 var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
}

.term-card dl {
  margin: 0;
}

.term-card dt {
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  margin-top: var(--spacing-sm);
}

.term-card dt:first-child {
  margin-top: 0;
}

.term-card dd {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: var(--spacing-xs) 0 0;
}

.term-table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.term-table th,
.term-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.term-table th {
  background: var(--color-background);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}

.term-table code {
  background: var(--color-background);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
}

.term-table.removed td:first-child code {
  text-decoration: line-through;
  color: #dc2626;
}

.term-table.changed td:nth-child(2),
.term-table.changed td:nth-child(3) {
  font-size: var(--font-size-xs);
  vertical-align: top;
}

.checklist-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
}

.checklist li {
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border);
  font-size: var(--font-size-sm);
}

.checklist li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .terms-grid {
    grid-template-columns: 1fr;
  }
}
</style>
