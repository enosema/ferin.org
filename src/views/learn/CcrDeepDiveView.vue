<template>
  <article class="content-page">
    <header class="page-header">
      <h1>CCR Deep Dive</h1>
      <p class="page-lead">
        The Complete Concept Register is FERIN's most capable register type.
        Learn when to use it and how to implement its advanced features.
      </p>
    </header>

    <section class="content-section">
      <h2>What Makes CCR Special</h2>
      <p>
        The Complete Concept Register (CCR) combines all FERIN capabilities:
        content management, concept modeling, formal governance, and full
        commitments. It's designed for registers that serve as authoritative
        sources for communities, industries, or nations.
      </p>

      <div class="capability-stack">
        <div class="capability-layer layer-1">
          <h4>Content Management</h4>
          <p>Store, version, and status track register items</p>
        </div>
        <div class="capability-layer layer-2">
          <h4>Concept Modeling</h4>
          <p>Define, relate, and evolve concepts independently</p>
        </div>
        <div class="capability-layer layer-3">
          <h4>Formal Governance</h4>
          <p>Proposals, approvals, appeals, and audit trails</p>
        </div>
        <div class="capability-layer layer-4">
          <h4>Full Commitments</h4>
          <p>Access, persistence, and transparency guarantees</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>When to Choose CCR</h2>
      <p>
        CCR is powerful but requires significant investment. Choose CCR when:
      </p>

      <div class="decision-criteria">
        <div class="criterion yes">
          <h4>Use CCR</h4>
          <ul>
            <li>External communities depend on your register</li>
            <li>Definitions evolve and version history matters</li>
            <li>Regulatory or legal requirements apply</li>
            <li>Long-term persistence is critical</li>
            <li>You need to demonstrate transparent governance</li>
            <li>The register serves as a citable standard</li>
          </ul>
        </div>
        <div class="criterion no">
          <h4>Consider Alternatives</h4>
          <ul>
            <li>Internal use only with no external users</li>
            <li>Content is static or rarely changes</li>
            <li>No governance requirements</li>
            <li>Short-term or project-specific needs</li>
            <li>Resource constraints limit investment</li>
            <li>Simpler register types meet requirements</li>
          </ul>
        </div>
      </div>

      <h3>CCR in the Wild</h3>
      <p>CCR is typically used for:</p>
      <ul>
        <li>National and international standards registries</li>
        <li>Scientific terminology registries</li>
        <li>Industry code lists with legal standing</li>
        <li>Government reference data</li>
        <li>Academic discipline taxonomies</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>CCR-Specific Capabilities</h2>

      <h3>Concept Inheritance (Is-A)</h3>
      <p>
        Define hierarchical relationships where concepts specialize parent
        concepts.
      </p>
      <div class="feature-example">
        <pre><code>// Concept hierarchy example
Concept: "SI Unit of Length"
  └── is-a: "SI Base Unit"
       └── is-a: "Unit of Measure"

// Inheritance allows:
- Meter inherits properties from SI Base Unit
- Changes to parent propagate appropriately
- Queries can traverse hierarchies</code></pre>
      </div>

      <h3>Concept Composition (Has-Part)</h3>
      <p>
        Define part-whole relationships between concepts.
      </p>
      <div class="feature-example">
        <pre><code>// Composition example
Concept: "Address"
  ├── has-part: "Street Address"
  ├── has-part: "City"
  ├── has-part: "Postal Code"
  └── has-part: "Country"

// Composition enables:
- Complex concept construction
- Validation of component requirements
- Dependency tracking</code></pre>
      </div>

      <h3>Concept Domains</h3>
      <p>
        Define constrained value sets that concepts can reference.
      </p>
      <div class="feature-example">
        <pre><code>// Domain definition
Domain: "Unit Status"
  Values: ["current", "deprecated", "historical"]

// Usage in concept
Concept: "Meter"
  Status: constrained by "Unit Status" domain

// Domain benefits:
- Centralized value management
- Consistency across concepts
- Easy domain updates</code></pre>
      </div>

      <h3>Codeset Incorporation</h3>
      <p>
        Incorporate external code sets as concepts while maintaining linkage
        to the source.
      </p>
      <div class="feature-example">
        <pre><code>// Codeset incorporation
Incorporated Codeset: "ISO 3166-1 Country Codes"
  Source: https://iso.org/3166-1
  Incorporation Date: 2025-01-15

// Each country code becomes a concept:
Concept: "United States Country Code"
  Source: ISO 3166-1
  Code: "US"
  Incorporated: true
  Local Extensions: allowed</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Implementation Checklist</h2>
      <p>
        Key implementation requirements for CCR:
      </p>

      <div class="implementation-checklist">
        <div class="checklist-phase">
          <h4>1. Foundation</h4>
          <ul>
            <li>☐ Register specification published</li>
            <li>☐ Identifier scheme designed for persistence</li>
            <li>☐ Namespace strategy defined</li>
            <li>☐ Versioning policy documented</li>
          </ul>
        </div>
        <div class="checklist-phase">
          <h4>2. Content Management</h4>
          <ul>
            <li>☐ Item CRUD operations implemented</li>
            <li>☐ Status tracking (valid/invalid, published/unpublished)</li>
            <li>☐ Version history maintained</li>
            <li>☐ Supersession relationships tracked</li>
          </ul>
        </div>
        <div class="checklist-phase">
          <h4>3. Concept Modeling</h4>
          <ul>
            <li>☐ Concept definition and versioning</li>
            <li>☐ Concept-item linking</li>
            <li>☐ Inheritance relationships</li>
            <li>☐ Composition relationships</li>
            <li>☐ Domain definitions and enforcement</li>
          </ul>
        </div>
        <div class="checklist-phase">
          <h4>4. Governance</h4>
          <ul>
            <li>☐ Roles assigned (Owner, Manager, Control Body)</li>
            <li>☐ Proposal workflow implemented</li>
            <li>☐ Decision recording with rationale</li>
            <li>☐ Appeal process defined</li>
            <li>☐ Complete audit trail</li>
          </ul>
        </div>
        <div class="checklist-phase">
          <h4>5. Commitments</h4>
          <ul>
            <li>☐ Access commitments documented and implemented</li>
            <li>☐ Persistence guarantees stated</li>
            <li>☐ Succession plan (if applicable)</li>
            <li>☐ Transparency mechanisms in place</li>
          </ul>
        </div>
        <div class="checklist-phase">
          <h4>6. Operations</h4>
          <ul>
            <li>☐ Public API or interface available</li>
            <li>☐ Documentation for users</li>
            <li>☐ Change notification mechanism</li>
            <li>☐ Support channels defined</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Performance Considerations</h2>
      <p>
        CCR's comprehensive capabilities have performance implications:
      </p>

      <h3>Concept Queries</h3>
      <ul>
        <li>
          <strong>Hierarchy traversal:</strong> Inheritance queries may require
          multiple database lookups. Consider caching hierarchies.
        </li>
        <li>
          <strong>Composition resolution:</strong> Assembling composite concepts
          can be expensive. Pre-compute when possible.
        </li>
        <li>
          <strong>Version navigation:</strong> Concept version history can grow
          large. Implement pagination and archiving.
        </li>
      </ul>

      <h3>Governance Overhead</h3>
      <ul>
        <li>
          <strong>Audit trails:</strong> Every action generates audit records.
          Plan storage accordingly.
        </li>
        <li>
          <strong>Proposal processing:</strong> Complex proposals may require
          significant review time. Set expectations.
        </li>
      </ul>

      <div class="performance-tips">
        <h4>Optimization Strategies</h4>
        <ul>
          <li>Cache frequently accessed concept hierarchies</li>
          <li>Implement lazy loading for deep compositions</li>
          <li>Archive old versions to separate storage</li>
          <li>Use read replicas for query-heavy workloads</li>
          <li>Index frequently queried concept attributes</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Migration to CCR</h2>
      <p>
        If you're upgrading an existing register to CCR, consider:
      </p>

      <div class="migration-path">
        <div class="migration-step">
          <h4>From Content Register</h4>
          <p>Add concept modeling + governance + commitments</p>
          <ul>
            <li>Create concept layer for existing items</li>
            <li>Establish governance processes</li>
            <li>Document and implement commitments</li>
          </ul>
        </div>
        <div class="migration-step">
          <h4>From Concept Register</h4>
          <p>Add governance + commitments</p>
          <ul>
            <li>Add governance layer around existing concepts</li>
            <li>Retroactively document existing changes</li>
            <li>Implement commitment guarantees</li>
          </ul>
        </div>
        <div class="migration-step">
          <h4>From Governed Register</h4>
          <p>Add concept modeling + commitments</p>
          <ul>
            <li>Add concept modeling to governed content</li>
            <li>Extend governance to cover concepts</li>
            <li>Implement full commitments</li>
          </ul>
        </div>
      </div>

      <div class="warning-box">
        <strong>Migration Note:</strong> When migrating, you may need to
        retroactively create concept definitions for existing items. Consider
        whether to backfill full history or start fresh with a baseline.
      </div>
    </section>

    <section class="content-section">
      <h2>CCR Example: RUM</h2>
      <p>
        The Register of Units of Measure (RUM) is the canonical CCR example:
      </p>

      <div class="example-summary">
        <table class="summary-table">
          <tbody>
            <tr>
              <th>Register Type</th>
              <td>Complete Concept Register (CCR)</td>
            </tr>
            <tr>
              <th>Content</th>
              <td>SI units, derived units, prefixes, traditional units</td>
            </tr>
            <tr>
              <th>Concept Features</th>
              <td>Inheritance (is-a), composition, domains</td>
            </tr>
            <tr>
              <th>Governance</th>
              <td>ISO/TC 211 with formal proposal process</td>
            </tr>
            <tr>
              <th>Commitments</th>
              <td>Full access, persistence, and transparency</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        See the complete
        <router-link to="/reference/samples">RUM specification</router-link>
        for details.
      </p>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/learn/register-types">Register Types</router-link>
          - All five types and their capabilities
        </li>
        <li>
          <router-link to="/reference/samples">Sample Registers</router-link>
          - Complete CCR specification example
        </li>
        <li>
          <router-link to="/build/governance">Governance</router-link>
          - Implementing formal governance
        </li>
        <li>
          <router-link to="/learn/commitments">Commitments</router-link>
          - Access, persistence, and transparency
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

.capability-stack {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin: var(--spacing-xl) 0;
  perspective: 1000px;
}

.capability-layer {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  color: white;
}

.capability-layer h4 {
  margin: 0 0 var(--spacing-xs);
}

.capability-layer p {
  margin: 0;
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

.layer-1 {
  background: linear-gradient(135deg, #64748b 0%, #475569 100%);
}

.layer-2 {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.layer-3 {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.layer-4 {
  background: linear-gradient(135deg, var(--color-accent) 0%, #0d9488 100%);
}

.decision-criteria {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.criterion {
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.criterion.yes {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.criterion.yes h4 {
  color: #16a34a;
}

.criterion.no {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.criterion.no h4 {
  color: #dc2626;
}

.criterion ul {
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
}

.feature-example {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0 var(--spacing-lg);
  overflow-x: auto;
}

.feature-example pre {
  background: none;
  margin: 0;
  padding: 0;
}

.feature-example code {
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
}

.implementation-checklist {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.checklist-phase {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.checklist-phase h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
}

.checklist-phase ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-sm);
}

.checklist-phase li {
  padding: var(--spacing-xs) 0;
}

.performance-tips {
  background: rgba(13, 148, 136, 0.1);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
}

.performance-tips h4 {
  margin-top: 0;
  color: var(--color-accent);
}

.migration-path {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.migration-step {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.migration-step h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
}

.migration-step p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.migration-step ul {
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
}

.warning-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.example-summary {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.summary-table th {
  width: 30%;
  text-align: left;
  vertical-align: top;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.summary-table td {
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
  .decision-criteria,
  .implementation-checklist,
  .migration-path {
    grid-template-columns: 1fr;
  }
}
</style>
