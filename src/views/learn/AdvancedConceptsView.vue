<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Advanced Concept Management</h1>
      <p class="page-lead">
        Deep dive into FERIN's concept modeling capabilities: inheritance,
        composition, domains, and codeset incorporation.
      </p>
    </header>

    <section class="content-section">
      <h2>Concept Plane Overview</h2>
      <p>
        FERIN's concept plane separates meaning from representation. Concepts
        define what things mean, while register items represent concrete
        instances with specific content.
      </p>

      <div class="concept-diagram">
        <pre><code>┌─────────────────────────────────────────────────────────┐
│                     Concept Plane                        │
│                                                          │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐         │
│   │ Concept  │───▶│ Concept  │───▶│ Concept  │         │
│   │ Version 1│    │ Version 2│    │ Version 3│         │
│   └──────────┘    └──────────┘    └──────────┘         │
│         │              │              │                 │
│         ▼              ▼              ▼                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐         │
│   │  Item    │    │  Item    │    │  Item    │         │
│   │ Version 1│    │ Version 2│    │ Version 3│         │
│   └──────────┘    └──────────┘    └──────────┘         │
│                                                          │
└─────────────────────────────────────────────────────────┘</code></pre>
      </div>

      <p>
        This separation enables:
      </p>
      <ul>
        <li>Definitions to evolve without changing item identifiers</li>
        <li>Items to be linked to stable concepts</li>
        <li>Concept relationships independent of item content</li>
        <li>Richer semantic modeling than simple key-value pairs</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Concept Definition Lifecycle</h2>
      <p>
        Concepts have their own lifecycle, parallel to but distinct from
        register items.
      </p>

      <h3>Creating Concepts</h3>
      <div class="lifecycle-step">
        <pre><code>// Concept definition
{
  "conceptId": "urn:example:concept:meter",
  "currentDefinition": "The metre is the length of the path travelled by light in vacuum during a time interval of 1/299 792 458 of a second.",
  "versions": [
    {
      "version": 1,
      "definition": "The metre is the length equal to 1,650,763.73 wavelengths...",
      "date": "1960-10-14",
      "changeReason": "Initial definition based on krypton-86"
    },
    {
      "version": 2,
      "definition": "The metre is the length of the path travelled by light...",
      "date": "1983-10-20",
      "changeReason": "Refined definition based on speed of light"
    }
  ]
}</code></pre>
      </div>

      <h3>When to Version Concepts</h3>
      <p>
        Create a new concept version when:
      </p>
      <ul>
        <li>The definition changes in a way that affects meaning</li>
        <li>Clarifications significantly alter interpretation</li>
        <li>Scientific understanding evolves</li>
        <li>Regulatory requirements change the definition</li>
      </ul>

      <div class="note-box">
        <strong>Note:</strong> Minor editorial changes (typo fixes, formatting)
        typically don't require versioning if they don't change meaning.
      </div>
    </section>

    <section class="content-section">
      <h2>Concept Inheritance (Is-A)</h2>
      <p>
        Inheritance defines "is-a" relationships where a concept specializes
        its parent.
      </p>

      <h3>Inheritance Semantics</h3>
      <div class="inheritance-example">
        <pre><code>// Inheritance hierarchy
SI Base Unit
  └── is-a ──▶ Unit of Measure

Length Unit
  ├── is-a ──▶ SI Base Unit
  └── is-a ──▶ Unit of Measure

Meter
  └── is-a ──▶ Length Unit

// What this means:
// - Meter IS A Length Unit
// - Length Unit IS A Unit of Measure
// - Properties flow down the hierarchy
// - Queries can traverse up or down</code></pre>
      </div>

      <h3>Implementation Considerations</h3>
      <ul>
        <li>
          <strong>Single vs Multiple Inheritance:</strong> FERIN supports
          multiple inheritance (a concept can have multiple parents)
        </li>
        <li>
          <strong>Depth:</strong> Limit hierarchy depth for performance
          (recommend max 5-7 levels)
        </li>
        <li>
          <strong>Cycles:</strong> Detect and prevent circular inheritance
        </li>
        <li>
          <strong>Versioning:</strong> Inheritance relationships can change
          over time; track when relationships were added/removed
        </li>
      </ul>

      <h3>Querying Hierarchies</h3>
      <div class="query-patterns">
        <div class="pattern">
          <h4>Find All Specializations</h4>
          <pre><code>GET /api/v1/concepts/{id}/descendants</code></pre>
          <p>Returns all concepts that inherit from this concept.</p>
        </div>
        <div class="pattern">
          <h4>Find All Generalizations</h4>
          <pre><code>GET /api/v1/concepts/{id}/ancestors</code></pre>
          <p>Returns all concepts this concept inherits from.</p>
        </div>
        <div class="pattern">
          <h4>Find Siblings</h4>
          <pre><code>GET /api/v1/concepts/{id}/siblings</code></pre>
          <p>Returns concepts sharing the same parent.</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Concept Composition (Has-Part)</h2>
      <p>
        Composition defines "has-part" relationships for complex concepts.
      </p>

      <h3>Composition Semantics</h3>
      <div class="composition-example">
        <pre><code>// Composition structure
Address
  ├── has-part ──▶ Street Address (required, 1)
  ├── has-part ──▶ City (required, 1)
  ├── has-part ──▶ State (optional, 0..1)
  ├── has-part ──▶ Postal Code (required, 1)
  └── has-part ──▶ Country (required, 1)

// What this means:
// - An Address IS COMPOSED OF these parts
// - Parts have cardinality (required/optional, min/max)
// - Parts can themselves be composed of parts</code></pre>
      </div>

      <h3>Cardinality</h3>
      <p>
        Specify how many of each part are allowed:
      </p>
      <table class="cardinality-table">
        <thead>
          <tr>
            <th>Notation</th>
            <th>Meaning</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Exactly one (required)</td>
            <td>Country</td>
          </tr>
          <tr>
            <td>0..1</td>
            <td>Zero or one (optional)</td>
            <td>State</td>
          </tr>
          <tr>
            <td>1..*</td>
            <td>One or more</td>
            <td>Phone Numbers</td>
          </tr>
          <tr>
            <td>0..*</td>
            <td>Zero or more</td>
            <td>Aliases</td>
          </tr>
          <tr>
            <td>n..m</td>
            <td>Between n and m</td>
            <td>2..3 Priorities</td>
          </tr>
        </tbody>
      </table>

      <h3>Composition Validation</h3>
      <p>
        Use composition definitions to validate data:
      </p>
      <ul>
        <li>Check that all required parts are present</li>
        <li>Verify part count is within cardinality bounds</li>
        <li>Validate part types match composition definition</li>
        <li>Navigate composition for queries and display</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Concept Domains</h2>
      <p>
        Domains define constrained value sets that concepts can reference.
      </p>

      <h3>Domain Definition</h3>
      <div class="domain-example">
        <pre><code>// Define a domain
{
  "domainId": "unit-status",
  "name": "Unit Status",
  "description": "Valid status values for units of measure",
  "values": [
    { "code": "current", "definition": "Currently valid for use" },
    { "code": "deprecated", "definition": "No longer recommended" },
    { "code": "historical", "definition": "Of historical interest only" }
  ],
  "governance": {
    "changePolicy": "Changes require Control Body approval"
  }
}</code></pre>
      </div>

      <h3>Using Domains in Concepts</h3>
      <div class="domain-usage">
        <pre><code>// Concept referencing a domain
{
  "conceptId": "meter",
  "definition": "...",
  "attributes": {
    "status": {
      "type": "domain",
      "domain": "unit-status",
      "value": "current"
    },
    "quantity": {
      "type": "domain",
      "domain": "physical-quantities",
      "value": "length"
    }
  }
}</code></pre>
      </div>

      <h3>Domain Benefits</h3>
      <ul>
        <li>
          <strong>Centralized management:</strong> Change values in one place
        </li>
        <li>
          <strong>Validation:</strong> Ensure concepts use only valid values
        </li>
        <li>
          <strong>Consistency:</strong> Same value set used across concepts
        </li>
        <li>
          <strong>Governance:</strong> Control domain changes independently
        </li>
      </ul>

      <h3>Extensible Domains</h3>
      <p>
        Some domains allow local extensions:
      </p>
      <div class="extensible-domain">
        <pre><code>// Base domain
Country Codes (ISO 3166-1)
  - US, GB, FR, DE, ...

// Extended domain (local additions)
Country Codes (Extended)
  - extends: Country Codes (ISO 3166-1)
  - additions:
    - XX (Unknown)
    - ZZ (Not Applicable)</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Codeset Incorporation</h2>
      <p>
        Incorporate external code sets as concepts while maintaining linkage
        to source authority.
      </p>

      <h3>Incorporation Process</h3>
      <ol>
        <li>Identify source codeset and licensing terms</li>
        <li>Define incorporation scope (full, partial, with extensions)</li>
        <li>Create concepts for each code</li>
        <li>Link concepts to source codeset</li>
        <li>Define synchronization strategy</li>
      </ol>

      <h3>Incorporation Metadata</h3>
      <div class="incorporation-example">
        <pre><code>// Incorporated codeset reference
{
  "codesetId": "iso-3166-1",
  "source": {
    "name": "ISO 3166-1",
    "url": "https://www.iso.org/iso-3166-country-codes.html",
    "version": "2024-01",
    "license": "ISO copyright, requires license"
  },
  "incorporationDate": "2024-03-15",
  "scope": "alpha-2 codes only",
  "extensions": [
    { "code": "XX", "reason": "Internal: Unknown country" }
  ],
  "syncStrategy": "manual review on update"
}</code></pre>
      </div>

      <h3>Incorporated Concept Example</h3>
      <div class="incorporated-concept">
        <pre><code>{
  "conceptId": "country-US",
  "source": {
    "codeset": "iso-3166-1",
    "code": "US",
    "officialName": "United States of America"
  },
  "localDefinition": "United States of America including territories",
  "extensions": {
    "region": "North America"
  },
  "incorporated": true,
  "lastSync": "2024-03-15"
}</code></pre>
      </div>

      <h3>Synchronization Strategies</h3>
      <table class="sync-strategies">
        <thead>
          <tr>
            <th>Strategy</th>
            <th>When to Use</th>
            <th>Effort</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manual Review</td>
            <td>Critical registers, any change is significant</td>
            <td>High</td>
          </tr>
          <tr>
            <td>Automated with Approval</td>
            <td>Regular updates, changes need governance</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Automated</td>
            <td>Trusted source, low risk of breaking changes</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Snapshot</td>
            <td>Reference specific version, no updates</td>
            <td>None (after initial)</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Concept Relationships Summary</h2>
      <div class="relationships-summary">
        <table class="relationships-table">
          <thead>
            <tr>
              <th>Relationship</th>
              <th>Type</th>
              <th>Direction</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>is-a</td>
              <td>Inheritance</td>
              <td>Child → Parent</td>
              <td>Specialization hierarchies</td>
            </tr>
            <tr>
              <td>has-part</td>
              <td>Composition</td>
              <td>Whole → Part</td>
              <td>Complex concept structure</td>
            </tr>
            <tr>
              <td>supersedes</td>
              <td>Temporal</td>
              <td>New → Old</td>
              <td>Version replacement</td>
            </tr>
            <tr>
              <td>relates-to</td>
              <td>Association</td>
              <td>Either</td>
              <td>Custom relationships</td>
            </tr>
            <tr>
              <td>incorporated-from</td>
              <td>Provenance</td>
              <td>Local → Source</td>
              <td>External codeset linkage</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>Implementation Checklist</h2>
      <div class="impl-checklist">
        <div class="checklist-section">
          <h4>Basic Concepts</h4>
          <ul>
            <li>☐ Concept definition and storage</li>
            <li>☐ Concept versioning</li>
            <li>☐ Concept-to-item linking</li>
            <li>☐ Definition change tracking</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Relationships</h4>
          <ul>
            <li>☐ Inheritance (is-a) support</li>
            <li>☐ Composition (has-part) support</li>
            <li>☐ Custom relationship types</li>
            <li>☐ Relationship versioning</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Advanced Features</h4>
          <ul>
            <li>☐ Domain definitions</li>
            <li>☐ Domain validation</li>
            <li>☐ Codeset incorporation</li>
            <li>☐ Sync mechanisms</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Queries</h4>
          <ul>
            <li>☐ Hierarchy traversal</li>
            <li>☐ Composition navigation</li>
            <li>☐ Cross-concept queries</li>
            <li>☐ Version-aware queries</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/learn/ccr-deep-dive">CCR Deep Dive</router-link>
          - Complete Concept Register implementation
        </li>
        <li>
          <router-link to="/learn/register-types">Register Types</router-link>
          - Concept Register and Governed Concept Register
        </li>
        <li>
          <router-link to="/reference/conceptual-model">Conceptual Model</router-link>
          - Formal model definition
        </li>
        <li>
          <router-link to="/build/versioning">Versioning</router-link>
          - Managing versions in registers
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

.concept-diagram,
.lifecycle-step,
.inheritance-example,
.composition-example,
.domain-example,
.domain-usage,
.extensible-domain,
.incorporation-example,
.incorporated-concept {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
  overflow-x: auto;
}

.concept-diagram pre,
.lifecycle-step pre,
.inheritance-example pre,
.composition-example pre,
.domain-example pre,
.domain-usage pre,
.extensible-domain pre,
.incorporation-example pre,
.incorporated-concept pre {
  background: none;
  margin: 0;
  padding: 0;
}

.concept-diagram code,
.lifecycle-step code,
.inheritance-example code,
.composition-example code,
.domain-example code,
.domain-usage code,
.extensible-domain code,
.incorporation-example code,
.incorporated-concept code {
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

.query-patterns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.pattern {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.pattern h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
}

.pattern pre {
  background: var(--color-primary-dark);
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  margin: var(--spacing-sm) 0;
}

.pattern code {
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
}

.pattern p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.cardinality-table,
.sync-strategies,
.relationships-table {
  margin: var(--spacing-lg) 0;
}

.impl-checklist {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  .query-patterns,
  .impl-checklist {
    grid-template-columns: 1fr;
  }
}
</style>
