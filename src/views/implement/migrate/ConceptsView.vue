<template>
  <article class="content-page">
    <header class="page-header">
      <div class="breadcrumb">
        <router-link to="/implement/migrate">Migration Guide</router-link>
        <span class="separator">/</span>
        <span>Concepts & Relations</span>
      </div>
      <h1>Documenting Your Concept Model</h1>
      <p class="page-lead">
        Define your concepts, concept versions, allowed relations, and register item classes.
      </p>
    </header>

    <section class="content-section">
      <h2>The New Two-Plane Architecture</h2>
      <p>
        ISO 19135:2026 introduces a fundamental change: <strong>concepts</strong>
        (meaning) are now separate from <strong>content</strong> (data).
      </p>

      <div class="planes-diagram">
        <div class="plane concept">
          <h3>Concept Plane</h3>
          <p>What things <em>mean</em></p>
          <ul>
            <li>Concepts — Units of knowledge</li>
            <li>Concept versions — Snapshots over time</li>
            <li>Concept definitions — Schema-like concepts</li>
            <li>Realised concepts — Instance-like concepts</li>
          </ul>
        </div>
        <div class="plane content">
          <h3>Content Plane</h3>
          <p>What things <em>are</em> (data)</p>
          <ul>
            <li>Register item classes — Content schemas</li>
            <li>Register items — Actual data instances</li>
            <li>Changes — Modification records</li>
          </ul>
        </div>
      </div>

      <div class="callout">
        <h4>Why This Matters</h4>
        <p>
          Separating meaning from data allows concepts to evolve independently of
          content structure. A concept (like "WGS 84") can have multiple versions
          with different content representations, but the identifier and meaning
          remain stable.
        </p>
      </div>
    </section>

    <section class="content-section">
      <h2>Minimal Documentation Requirements</h2>

      <div class="requirement-list">
        <div class="requirement">
          <h3>1. Concepts</h3>
          <p>What concepts does your register manage?</p>
          <p>For each concept type, document:</p>
          <ul>
            <li>What it represents</li>
            <li>How it's identified</li>
            <li>What versions it can have</li>
          </ul>
          <div class="example">
            <strong>Example: CRS Register</strong>
            <p>Concepts: Geographic CRS, Projected CRS, Vertical CRS, Geodetic Datum, Ellipsoid, Coordinate System</p>
          </div>
        </div>

        <div class="requirement">
          <h3>2. Concept Versions</h3>
          <p>How are concept versions identified?</p>
          <ul>
            <li>Versioning scheme (semantic, date-based, sequential)</li>
            <li>When does a new version get created?</li>
            <li>How are versions linked to their concept?</li>
          </ul>
          <div class="example">
            <strong>Example</strong>
            <p>WGS 84 has versions: v1 (1984), v2 (1997), v3 (2001), v4 (2014)</p>
          </div>
        </div>

        <div class="requirement">
          <h3>3. Allowed Relations</h3>
          <p>What relationships can concepts have?</p>

          <table class="relations-table">
            <thead>
              <tr>
                <th>Relation</th>
                <th>Required</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>has concept</code></td>
                <td class="yes">Yes</td>
                <td>Current concept specializes the target</td>
              </tr>
              <tr>
                <td><code>instance of</code></td>
                <td class="yes">Yes</td>
                <td>Current concept is instance of target</td>
              </tr>
              <tr>
                <td><code>has definition</code></td>
                <td class="yes">Yes</td>
                <td>Current concept has target as its definition</td>
              </tr>
              <tr>
                <td><code>supersedes</code></td>
                <td class="yes">Yes</td>
                <td>Current concept replaces target</td>
              </tr>
              <tr>
                <td><code>inherits</code></td>
                <td class="no">Optional</td>
                <td>Current concept extends properties from target</td>
              </tr>
              <tr>
                <td><code>has part</code></td>
                <td class="no">Optional</td>
                <td>Target is part of current concept</td>
              </tr>
            </tbody>
          </table>

          <div class="from-2015">
            <strong>From 2015:</strong> Predecessor/successor relations map to "supersedes" relation.
          </div>
        </div>

        <div class="requirement">
          <h3>4. Register Item Classes</h3>
          <p>What types of content items exist?</p>
          <p>Each register item class is linked to a concept definition.</p>
          <div class="example">
            <strong>Example: CRS Register</strong>
            <ul>
              <li><code>GeographicCRS</code> → concept definition "Geographic CRS"</li>
              <li><code>ProjectedCRS</code> → concept definition "Projected CRS"</li>
              <li><code>Datum</code> → concept definition "Geodetic Datum"</li>
            </ul>
          </div>
        </div>

        <div class="requirement">
          <h3>5. Governance Procedures</h3>
          <p>How are concept and content changes processed?</p>
          <ul>
            <li>Who can propose new concepts?</li>
            <li>Who approves concept changes?</li>
            <li>What happens when a concept is superseded?</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Mapping Your Existing Data</h2>
      <p>
        Your existing 2015 register items become 2026 content with linked concepts:
      </p>

      <div class="mapping-diagram">
        <div class="mapping-col from">
          <h4>2015 Model</h4>
          <div class="item">
            <strong>Register Item</strong>
            <ul>
              <li>identifier</li>
              <li>name</li>
              <li>definition</li>
              <li>status</li>
              <li>content data...</li>
            </ul>
          </div>
        </div>
        <div class="mapping-arrow">→</div>
        <div class="mapping-col to">
          <h4>2026 Model</h4>
          <div class="item concept">
            <strong>Concept</strong>
            <ul>
              <li>identifier (functional)</li>
              <li>name</li>
              <li>definition</li>
            </ul>
          </div>
          <div class="item version">
            <strong>Concept Version</strong>
            <ul>
              <li>version identifier</li>
              <li>validity status</li>
              <li>publication status</li>
            </ul>
          </div>
          <div class="item content">
            <strong>Register Item</strong>
            <ul>
              <li>object identifier</li>
              <li>content data...</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="callout info">
        <h4>Migration Strategy</h4>
        <ol>
          <li>Each existing register item becomes a <strong>Concept</strong></li>
          <li>Current content becomes <strong>Concept Version 1</strong></li>
          <li>Existing identifier becomes the <strong>Functional Identifier</strong></li>
          <li>Assign new <strong>Object Identifiers</strong> to each version</li>
        </ol>
      </div>
    </section>

    <section class="content-section">
      <h2>Simple Concept Model Template</h2>
      <p>For a minimal migration, document your concept model like this:</p>

      <div class="template">
        <pre><code>Concept Model for [Register Name]
==================================

1. Concept Types
   - [Type A]: [description]
   - [Type B]: [description]

2. Versioning Scheme
   - [semantic/date-based/sequential]
   - New version created when: [criteria]

3. Allowed Relations
   Required:
   - has concept: [when used]
   - instance of: [when used]
   - has definition: [when used]
   - supersedes: [when used]

   Optional (if applicable):
   - inherits: [when used]
   - has part: [when used]

4. Register Item Classes
   - [Class A]: links to concept definition [Type A]
   - [Class B]: links to concept definition [Type B]

5. Status Values
   - Validity: valid / invalid
   - Publication: published / unpublished

6. Governance
   - New concepts proposed by: [role]
   - Approved by: [role]
   - Supersession process: [description]</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Next Steps</h2>
      <div class="next-steps-inline">
        <router-link to="/implement/migrate/statuses" class="btn-primary">
          Status Mapping →
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

.planes-diagram {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
}

.plane {
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.plane.concept {
  border-color: var(--color-accent);
}

.plane.content {
  border-color: var(--color-primary);
}

.plane h3 {
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-lg);
}

.plane > p {
  color: var(--color-text-light);
  font-style: italic;
  margin-bottom: var(--spacing-md);
}

.plane ul {
  margin: 0;
  padding-left: var(--spacing-xl);
}

.plane li {
  margin-bottom: var(--spacing-xs);
}

.callout {
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.callout {
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.callout.info {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.callout h4 {
  margin: 0 0 var(--spacing-md);
}

.callout ol {
  margin: 0;
  padding-left: var(--spacing-xl);
}

.callout li {
  margin-bottom: var(--spacing-xs);
}

.requirement-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.requirement {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.requirement h3 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-lg);
  color: var(--color-accent);
}

.requirement > p {
  color: var(--color-text-light);
}

.requirement ul {
  margin: var(--spacing-md) 0;
  padding-left: var(--spacing-xl);
}

.example {
  background: var(--color-background);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.example strong {
  display: block;
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xs);
}

.example p,
.example ul {
  margin: 0;
}

.example ul {
  padding-left: var(--spacing-xl);
  margin-top: var(--spacing-sm);
}

.from-2015 {
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin-top: var(--spacing-md);
  font-size: var(--font-size-sm);
}

.from-2015 strong {
  color: #16a34a;
}

.relations-table {
  width: 100%;
  margin: var(--spacing-md) 0;
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
  font-size: var(--font-size-sm);
}

.relations-table code {
  background: var(--color-background);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}

.relations-table .yes {
  color: #16a34a;
  font-weight: var(--font-weight-medium);
}

.relations-table .no {
  color: var(--color-text-light);
}

.mapping-diagram {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-xl);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
}

.mapping-col {
  flex: 1;
}

.mapping-col h4 {
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-md);
}

.mapping-arrow {
  font-size: var(--font-size-2xl);
  color: var(--color-accent);
  padding-top: var(--spacing-xl);
}

.mapping-col .item {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.mapping-col .item strong {
  display: block;
  margin-bottom: var(--spacing-xs);
  color: var(--color-primary);
}

.mapping-col .item ul {
  margin: 0;
  padding-left: var(--spacing-xl);
  font-size: var(--font-size-sm);
}

.mapping-col .item.concept {
  border-color: var(--color-accent);
}

.mapping-col .item.version {
  border-color: #ca8a04;
}

.mapping-col .item.content {
  border-color: var(--color-primary);
}

.template {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.template pre {
  margin: 0;
  padding: var(--spacing-xl);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  overflow-x: auto;
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

@media (max-width: 768px) {
  .planes-diagram {
    grid-template-columns: 1fr;
  }

  .mapping-diagram {
    flex-direction: column;
  }

  .mapping-arrow {
    transform: rotate(90deg);
    align-self: center;
    padding: 0;
  }
}
</style>
