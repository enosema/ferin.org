<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Schema Evolution and Lazy Migration</h1>
      <p class="page-lead">
        The ability to version schemas independently of data, migrate lazily
        when needed, and maintain multiple schema versions simultaneously.
        This is the major innovation that distinguishes FERIN from traditional
        data management approaches.
      </p>
    </header>

    <section class="content-section">
      <h2>The Traditional Problem</h2>
      <p>
        In traditional data management, schema changes force immediate data
        migration. This creates friction, risk, and often prevents organizations
        from evolving their data structures.
      </p>

      <div class="comparison">
        <div class="comparison-item traditional">
          <h3>Traditional: Big Bang Migration</h3>
          <div class="flow-diagram">
            <div class="flow-step">
              <span class="step-label">Schema v1</span>
            </div>
            <div class="flow-arrow">
              <span class="arrow-text">Migration Required</span>
            </div>
            <div class="flow-step">
              <span class="step-label">Schema v2</span>
            </div>
          </div>
          <ul class="consequences">
            <li>Must touch every row immediately</li>
            <li>Downtime or complex migration procedures</li>
            <li>Risk of data loss or corruption</li>
            <li>Blocks schema evolution - changes become expensive</li>
            <li>All-or-nothing proposition</li>
          </ul>
        </div>

        <div class="comparison-item ferin">
          <h3>FERIN: Lazy Migration</h3>
          <div class="flow-diagram">
            <div class="flow-step">
              <span class="step-label">Schema v1</span>
              <span class="step-note">Data @ v1</span>
            </div>
            <div class="flow-arrow optional">
              <span class="arrow-text">Optional</span>
            </div>
            <div class="flow-step">
              <span class="step-label">Schema v2</span>
              <span class="step-note">Data @ v2</span>
            </div>
          </div>
          <ul class="consequences">
            <li>Data remains valid at its current schema version</li>
            <li>Migrate only when needed</li>
            <li>Multiple schema versions coexist</li>
            <li>Consumers choose when to upgrade</li>
            <li>Schema evolution becomes routine, not exceptional</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Concept vs. Concept Version</h2>
      <p>
        Understanding the distinction between concepts and concept versions is
        fundamental to schema evolution in FERIN. This two-level structure
        enables meaning to evolve while maintaining referential integrity.
      </p>

      <div class="concept-model">
        <div class="model-diagram">
          <div class="concept-plane">
            <h4>Concept Plane (Meaning)</h4>
            <div class="concept-entity">
              <div class="concept-header">
                <span class="concept-type">Concept</span>
                <span class="concept-name">"Meter"</span>
              </div>
              <p class="concept-description">
                An abstract idea - the SI unit of length. The concept represents
                "what we mean" independent of how we define it at any point in time.
              </p>
              <div class="concept-versions">
                <div class="version-item">
                  <span class="version-label">Version 1 (1889)</span>
                  <span class="version-definition">Length of the prototype bar</span>
                </div>
                <div class="version-item">
                  <span class="version-label">Version 2 (1960)</span>
                  <span class="version-definition">Wavelength of krypton-86</span>
                </div>
                <div class="version-item current">
                  <span class="version-label">Version 3 (1983)</span>
                  <span class="version-definition">Distance light travels in 1/299,792,458 second</span>
                </div>
              </div>
            </div>
          </div>
          <div class="content-plane">
            <h4>Content Plane (Data)</h4>
            <div class="register-items">
              <div class="item-entity">
                <span class="item-id">urn:si:units:meter</span>
                <span class="item-symbol">m</span>
                <span class="item-status">valid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>When to Create a New Concept Version</h3>
      <p>
        Create a new <strong>version</strong> of an existing concept when:
      </p>
      <ul>
        <li>The definition is clarified but the meaning remains fundamentally the same</li>
        <li>Precision or detail is added without changing what the concept represents</li>
        <li>Editorial improvements are made to the definition text</li>
        <li>Additional context or examples are provided</li>
      </ul>

      <h3>When to Create a New Concept</h3>
      <p>
        Create a <strong>new concept</strong> (with a new identifier) when:
      </p>
      <ul>
        <li>The fundamental meaning has changed</li>
        <li>The scope or domain of application has shifted</li>
        <li>The same term now refers to something different</li>
        <li>You need to track both old and new meanings simultaneously</li>
      </ul>

      <div class="decision-box">
        <h4>The Test</h4>
        <p>
          <strong>Would existing references to this concept become confusing or
          misleading after this change?</strong>
        </p>
        <ul>
          <li>If <strong>no</strong>: Create a new version of the existing concept</li>
          <li>If <strong>yes</strong>: Create a new concept with a supersession relation</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>The Provider-Consumer Contract Model</h2>
      <p>
        FERIN implements a contract model between data providers and consumers,
        not a strict enforcement model. This is fundamental to enabling lazy
        migration.
      </p>

      <div class="contract-model">
        <div class="party provider">
          <h3>Register (Provider)</h3>
          <h4>Provides</h4>
          <ul>
            <li><strong>Schemas</strong> - Contracts that define data structure</li>
            <li><strong>Schema-ed data</strong> - Instances conforming to schemas</li>
            <li><strong>Version negotiation</strong> - Multiple schema versions available</li>
            <li><strong>Sunset notices</strong> - Timeline for deprecation</li>
          </ul>
        </div>

        <div class="contract-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          <span class="contract-label">Contract</span>
        </div>

        <div class="party consumer">
          <h3>Consumer</h3>
          <h4>Receives</h4>
          <ul>
            <li><strong>Stability</strong> - Data remains queryable at known schema</li>
            <li><strong>Predictability</strong> - Know when versions will sunset</li>
            <li><strong>Control</strong> - Choose when to upgrade</li>
            <li><strong>Compatibility</strong> - Multiple versions coexist</li>
          </ul>
        </div>
      </div>

      <div class="analogy-box">
        <h4>Analogy: API Versioning for Data</h4>
        <p>
          This is similar to REST API versioning, but applied to data schemas:
        </p>
        <table class="analogy-table">
          <thead>
            <tr>
              <th>API Versioning</th>
              <th>FERIN Schema Versioning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>/api/v1/items</code></td>
              <td><code>/items?schemaVersion=1</code></td>
            </tr>
            <tr>
              <td><code>/api/v2/items</code></td>
              <td><code>/items?schemaVersion=2</code></td>
            </tr>
            <tr>
              <td>Old versions deprecated on timeline</td>
              <td>Old schemas deprecated on timeline</td>
            </tr>
            <tr>
              <td>Consumers choose upgrade timing</td>
              <td>Consumers choose migration timing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>Implementation Strategies</h2>

      <div class="strategies">
        <div class="strategy">
          <h3>Version Column Pattern</h3>
          <p>Store schema version as a field on each record.</p>
          <div class="code-example">
            <pre><code>-- Single table with version tracking
CREATE TABLE items (
  id UUID PRIMARY KEY,
  schema_version TEXT NOT NULL,
  content JSONB NOT NULL,
  status TEXT NOT NULL,
  valid_from TIMESTAMP,
  valid_until TIMESTAMP
);

-- Query specific schema version
SELECT * FROM items
WHERE schema_version = '1.0'
  AND status = 'valid';

-- Lazy migration: update one item at a time
UPDATE items SET
  schema_version = '2.0',
  content = jsonb_set(content, '{category}', '"default"')
WHERE id = ? AND schema_version = '1.0';</code></pre>
          </div>
        </div>

        <div class="strategy">
          <h3>Schema-per-Table Pattern</h3>
          <p>Maintain separate tables for each schema version.</p>
          <div class="code-example">
            <pre><code>-- Version 1 schema
CREATE TABLE items_v1 (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT
);

-- Version 2 schema (adds category)
CREATE TABLE items_v2 (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL  -- New required field
);

-- Query at version 1
SELECT * FROM items_v1 WHERE id = ?;

-- Migrate on-demand
INSERT INTO items_v2 (id, name, description, category)
SELECT id, name, description, 'default'
FROM items_v1 WHERE id = ?;</code></pre>
          </div>
        </div>

        <div class="strategy">
          <h3>Event Sourcing Pattern</h3>
          <p>Store schema changes as events, reconstruct state on demand.</p>
          <div class="code-example">
            <pre><code>// Schema change events
const events = [
  { type: 'schema_defined', version: '1.0',
    fields: ['name', 'description'] },
  { type: 'schema_defined', version: '2.0',
    fields: ['name', 'description', 'category'] },
  { type: 'item_created', id: '123',
    schemaVersion: '1.0', data: {...} },
  { type: 'item_migrated', id: '123',
    fromVersion: '1.0', toVersion: '2.0' }
];

// Reconstruct item at any schema version
function getItemAtVersion(id, targetVersion) {
  // Apply events up to target version
  // Return migrated state if migration exists
}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Migration Decision Framework</h2>
      <p>
        Not all data needs immediate migration. Consider these factors:
      </p>

      <table class="decision-table">
        <thead>
          <tr>
            <th>Factor</th>
            <th>Migrate Soon</th>
            <th>Can Wait</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data usage</td>
            <td>Frequently accessed</td>
            <td>Rarely queried</td>
          </tr>
          <tr>
            <td>Consumer requirements</td>
            <td>Consumer needs new fields</td>
            <td>Consumer still uses old schema</td>
          </tr>
          <tr>
            <td>Validation</td>
            <td>Old schema has issues</td>
            <td>Old schema still valid</td>
          </tr>
          <tr>
            <td>Sunset timeline</td>
            <td>Old schema deprecating soon</td>
            <td>No deprecation planned</td>
          </tr>
          <tr>
            <td>Volume</td>
            <td>Small dataset</td>
            <td>Large dataset, batch migration</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/temporal-data">Temporal Data and Complete History</router-link>
          - Point-in-time queries and historical reconstruction
        </li>
        <li>
          <router-link to="/build/semantic-interoperability">Semantic Interoperability</router-link>
          - Integration with RDF/SHACL for schema validation
        </li>
        <li>
          <router-link to="/build/technology-choices">Technology Implementation Guide</router-link>
          - Database-specific implementation patterns
        </li>
        <li>
          <router-link to="/build/core-concepts">Core Concepts</router-link>
          - Concept plane vs. content plane fundamentals
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

.content-section h4 {
  font-size: var(--font-size-base);
  margin: var(--spacing-md) 0 var(--spacing-sm);
}

.comparison {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.comparison-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
}

.comparison-item.traditional {
  border-left: 4px solid var(--color-error);
}

.comparison-item.ferin {
  border-left: 4px solid var(--color-success);
}

.comparison-item h3 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
}

.flow-diagram {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-background);
  border-radius: var(--radius-md);
}

.flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.step-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.step-note {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.flow-arrow {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-error);
}

.flow-arrow.optional {
  color: var(--color-success);
}

.arrow-text {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

.flow-arrow::before {
  content: '→';
  font-size: var(--font-size-lg);
}

.consequences {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.consequences li {
  margin-bottom: var(--spacing-xs);
}

.concept-model {
  margin: var(--spacing-xl) 0;
}

.model-diagram {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.concept-plane,
.content-plane {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.concept-plane {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(13, 148, 136, 0.05) 100%);
  border: 1px solid rgba(13, 148, 136, 0.3);
}

.content-plane {
  background: linear-gradient(135deg, rgba(30, 58, 95, 0.1) 0%, rgba(30, 58, 95, 0.05) 100%);
  border: 1px solid rgba(30, 58, 95, 0.3);
}

.concept-plane h4,
.content-plane h4 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.concept-entity {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.concept-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
}

.concept-type {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-accent);
  background: rgba(13, 148, 136, 0.1);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
}

.concept-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

.concept-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.concept-versions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.version-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-sm);
  background: var(--color-background);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}

.version-item.current {
  background: rgba(13, 148, 136, 0.1);
  border: 1px solid rgba(13, 148, 136, 0.2);
}

.version-label {
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}

.version-definition {
  color: var(--color-text-light);
  text-align: right;
}

.register-items {
  display: flex;
  gap: var(--spacing-md);
}

.item-entity {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  background: var(--color-surface);
  border-radius: var(--radius-md);
}

.item-id {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.item-symbol {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
}

.item-status {
  font-size: var(--font-size-xs);
  color: var(--color-success);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.decision-box {
  background: rgba(13, 148, 136, 0.05);
  border: 1px solid rgba(13, 148, 136, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.decision-box h4 {
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.decision-box p {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
}

.decision-box ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.contract-model {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.party {
  flex: 1;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.party h3 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
  color: var(--color-accent);
}

.party h4 {
  margin: var(--spacing-md) 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.party ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.party li {
  margin-bottom: var(--spacing-xs);
}

.contract-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  padding-top: var(--spacing-xl);
  color: var(--color-accent);
}

.contract-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.analogy-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.analogy-box h4 {
  margin: 0 0 var(--spacing-md);
}

.analogy-table {
  margin: 0;
}

.strategies {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.strategy {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.strategy h3 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
  color: var(--color-accent);
}

.strategy p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.code-example {
  background: var(--color-background);
  border-radius: var(--radius-md);
  overflow-x: auto;
}

.code-example pre {
  margin: 0;
  padding: var(--spacing-md);
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-relaxed);
}

.decision-table {
  margin: var(--spacing-lg) 0;
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
  .comparison {
    grid-template-columns: 1fr;
  }

  .contract-model {
    flex-direction: column;
  }

  .contract-arrow {
    flex-direction: row;
    padding: var(--spacing-md) 0;
    transform: rotate(90deg);
    align-self: center;
  }
}
</style>
