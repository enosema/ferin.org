<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Technology Implementation Guide</h1>
      <p class="page-lead">
        FERIN is technology-neutral. ISO 19135 deliberately does not prescribe
        implementation technology. This guide explains what capabilities matter
        for compliance, and the gap between basic database technology and a
        FERIN-compliant register.
      </p>
    </header>

    <section class="content-section">
      <h2>The Two-Plane Model and Technology</h2>
      <p>
        FERIN's <router-link to="/understand/core-concepts">two-plane model</router-link>
        separates concerns that technology must support:
      </p>

      <div class="plane-model">
        <div class="plane concept-plane">
          <h3>Concept Plane</h3>
          <p class="plane-description">
            The semantic layer where concepts evolve and relate to each other.
          </p>
          <div class="plane-elements">
            <div class="element">
              <h4>Concepts</h4>
              <p>Abstract ideas that can exist in any concept system (a graph of concepts)</p>
            </div>
            <div class="element">
              <h4>Concept Versions</h4>
              <p>Specific realizations of concepts at points in time</p>
            </div>
            <div class="element">
              <h4>Concept Relationships</h4>
              <p>Connections between concepts (generalization, part-whole, etc.)</p>
            </div>
            <div class="element">
              <h4>Concept Version Relationships</h4>
              <p>Connections between versions (supersedes, has-part, etc.)</p>
            </div>
          </div>
        </div>

        <div class="plane content-plane">
          <h3>Content Plane</h3>
          <p class="plane-description">
            The data layer where concepts are realized as instances.
          </p>
          <div class="plane-elements">
            <div class="element">
              <h4>Register Item Classes</h4>
              <p>Data schemas defining the structure of register items</p>
            </div>
            <div class="element">
              <h4>Register Items</h4>
              <p>Data instances - the actual content of the register</p>
            </div>
            <div class="element">
              <h4>Changes</h4>
              <p>Records of all modifications to register content</p>
            </div>
          </div>
        </div>
      </div>

      <div class="key-relationship">
        <h4>Key Relationship</h4>
        <p>
          Each <strong>concept version</strong> is backed by a <strong>register item</strong>
          (data instance) in a particular <strong>register item class</strong> (data schema).
          This separation enables:
        </p>
        <ul>
          <li>Concepts to evolve without breaking existing data</li>
          <li>Multiple register item classes for different representations</li>
          <li>Schema evolution independent of concept evolution</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>The Implementation Gap</h2>
      <p>
        There is a significant gap between basic database technology and a
        FERIN-compliant register. A database provides storage and query capabilities,
        but FERIN requires:
      </p>

      <div class="gap-diagram">
        <div class="gap-layer database">
          <h4>Database Layer</h4>
          <ul>
            <li>CRUD operations</li>
            <li>Query language</li>
            <li>Transaction support</li>
            <li>Indexing</li>
          </ul>
        </div>
        <div class="gap-arrow">
          <span class="gap-size">Significant Gap</span>
        </div>
        <div class="gap-layer ferin">
          <h4>FERIN Layer</h4>
          <ul>
            <li>Two-plane model (concept + content)</li>
            <li>Identifier schemes (object + functional)</li>
            <li>Status management (validity, publication, etc.)</li>
            <li>Action semantics (add, invalidate, supersede, etc.)</li>
            <li>Complete change history</li>
            <li>Governance processes</li>
            <li>Commitment fulfillment</li>
          </ul>
        </div>
      </div>

      <p>
        This is why implementing FERIN requires more than choosing a database.
        You need a register system that implements FERIN semantics on top of
        whatever storage technology you choose.
      </p>
    </section>

    <section class="content-section">
      <h2>Capabilities Required for Compliance</h2>
      <p>
        Technology choice doesn't determine FERIN compliance. These capabilities do:
      </p>

      <div class="capabilities-grid">
        <div class="capability">
          <h4>Persistent Identifiers</h4>
          <p>
            Both object identifiers (non-redirectable) and functional identifiers
            (redirectable, hierarchical) must be supported. See
            <router-link to="/implement/identifier-design">Identifier Design</router-link>.
          </p>
        </div>

        <div class="capability">
          <h4>Status Tracking</h4>
          <p>
            Must store and query validity (valid/invalid), publication
            (published/unpublished/draft), and other status dimensions. See
            <router-link to="/reference/statuses">Statuses</router-link>.
          </p>
        </div>

        <div class="capability">
          <h4>Change History</h4>
          <p>
            Every change recorded with timestamp, actor, rationale. Must support
            point-in-time reconstruction. See
            <router-link to="/implement/temporal-data">Temporal Data</router-link>.
          </p>
        </div>

        <div class="capability">
          <h4>Action Semantics</h4>
          <p>
            Must implement FERIN actions: add, add-version, invalidate, supersede,
            retire, etc. Each action has specific semantics. See
            <router-link to="/implement/actions">Actions Reference</router-link>.
          </p>
        </div>

        <div class="capability">
          <h4>Relation Support</h4>
          <p>
            Must support concept relations, concept version relations, and content
            relations. See <router-link to="/reference/relations">Relations</router-link>.
          </p>
        </div>

        <div class="capability">
          <h4>Schema Evolution</h4>
          <p>
            Register item classes (schemas) must evolve independently of register
            items (instances). See
            <router-link to="/implement/schema-evolution">Schema Evolution</router-link>.
          </p>
        </div>

        <div class="capability">
          <h4>Temporal Queries</h4>
          <p>
            Must answer "what was true at time T?" for any point in the register's
            history. See <router-link to="/implement/temporal-data">Temporal Data</router-link>.
          </p>
        </div>

        <div class="capability">
          <h4>Commitment Fulfillment</h4>
          <p>
            Must meet stated access, persistence, and transparency promises.
            See <router-link to="/understand/commitments">Commitments</router-link>.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>FERIN Concept Mapping</h2>
      <p>
        When evaluating technology, consider how it maps to FERIN concepts:
      </p>

      <div class="concept-mapping">
        <table>
          <thead>
            <tr>
              <th>FERIN Concept</th>
              <th>What to Evaluate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Concept</strong></td>
              <td>
                How will you represent abstract ideas that evolve over time?
                Can you track concept relationships (generalization, part-whole)?
              </td>
            </tr>
            <tr>
              <td><strong>Concept Version</strong></td>
              <td>
                How will you represent specific realizations at points in time?
                Can you track version relationships (supersedes, has-part)?
              </td>
            </tr>
            <tr>
              <td><strong>Register Item Class</strong></td>
              <td>
                How will you define and version data schemas?
                Can schemas evolve independently of instances?
              </td>
            </tr>
            <tr>
              <td><strong>Register Item</strong></td>
              <td>
                How will you store data instances?
                Can items be linked to concept versions?
              </td>
            </tr>
            <tr>
              <td><strong>Relations</strong></td>
              <td>
                Can you represent typed relationships with temporal constraints?
                Can you traverse relationships efficiently?
              </td>
            </tr>
            <tr>
              <td><strong>Change Records</strong></td>
              <td>
                Can you capture complete change history with all required metadata?
                Can you replay history for point-in-time reconstruction?
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>Known FERIN Implementations</h2>
      <p>
        Two register systems are known to implement FERIN concepts:
      </p>

      <div class="implementations">
        <div class="implementation">
          <h3>Paneron</h3>
          <p class="implementation-url">
            <a href="https://www.paneron.org" target="_blank" rel="noopener">
              www.paneron.org
            </a>
          </p>
          <p class="implementation-vendor">Developed by Ribose</p>
          <p class="implementation-description">
            A structured data management platform designed for standards organizations
            and registries. Implements FERIN concepts including the two-plane model,
            versioning, and governance workflows.
          </p>
        </div>

        <div class="implementation">
          <h3>R3gistry</h3>
          <p class="implementation-url">
            <a href="https://inspire.ec.europa.eu/registry" target="_blank" rel="noopener">
              INSPIRE EU Registry
            </a>
          </p>
          <p class="implementation-vendor">European Commission INSPIRE</p>
          <p class="implementation-description">
            The reference registry for the INSPIRE Directive, managing code lists,
            registers, and spatial data themes. Implements ISO 19135 register concepts
            for European spatial data infrastructure.
          </p>
        </div>
      </div>

      <p>
        These implementations demonstrate that FERIN compliance is achievable
        with different technology stacks, provided the fundamental capabilities
        are implemented correctly.
      </p>
    </section>

    <section class="content-section">
      <h2>Build vs Buy</h2>
      <p>
        When deciding whether to build a custom register or adopt an existing
        solution, consider:
      </p>

      <div class="decision-factors">
        <div class="factor">
          <h4>Build Custom If...</h4>
          <ul>
            <li>You have specific integration requirements</li>
            <li>Your governance model is unique</li>
            <li>You need full control over the technology stack</li>
            <li>You have resources for long-term maintenance</li>
          </ul>
        </div>

        <div class="factor">
          <h4>Adopt Existing If...</h4>
          <ul>
            <li>Your needs match existing solutions</li>
            <li>You want faster time to deployment</li>
            <li>You prefer supported software</li>
            <li>Your governance model is standard</li>
          </ul>
        </div>
      </div>

      <div class="warning">
        <h4>Important Consideration</h4>
        <p>
          Building a FERIN-compliant register requires significant effort to
          implement all required capabilities correctly. The gap between basic
          database operations and FERIN semantics should not be underestimated.
        </p>
      </div>
    </section>

    <section class="content-section">
      <h2>What ISO 19135 Does Not Require</h2>
      <p>
        ISO 19135 is deliberately technology-neutral. It does not require:
      </p>

      <ul class="not-required">
        <li>Any specific database technology (SQL, NoSQL, graph, etc.)</li>
        <li>Any specific query language (SQL, SPARQL, Cypher, etc.)</li>
        <li>Any specific API style (REST, GraphQL, gRPC, etc.)</li>
        <li>Any specific serialization format (JSON, XML, RDF, etc.)</li>
        <li>Any specific hosting model (cloud, on-premise, hybrid)</li>
      </ul>

      <p>
        These are implementation choices that should be made based on your
        specific requirements, existing infrastructure, and team expertise.
      </p>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/understand/core-concepts">Core Concepts</router-link>
          - The concept plane and content plane model
        </li>
        <li>
          <router-link to="/implement/identifier-design">Identifier Design</router-link>
          - Object and functional identifier schemes
        </li>
        <li>
          <router-link to="/implement/schema-evolution">Schema Evolution</router-link>
          - Versioning register item classes
        </li>
        <li>
          <router-link to="/implement/temporal-data">Temporal Data</router-link>
          - Point-in-time queries and complete history
        </li>
        <li>
          <router-link to="/implement/getting-started">Getting Started</router-link>
          - Implementation guide
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

.plane-model {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.plane {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
}

.concept-plane {
  border-color: rgba(13, 148, 136, 0.3);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, var(--color-surface) 100%);
}

.content-plane {
  border-color: rgba(99, 102, 241, 0.3);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, var(--color-surface) 100%);
}

.plane h3 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-lg);
}

.concept-plane h3 {
  color: var(--color-accent);
}

.content-plane h3 {
  color: #6366f1;
}

.plane-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-md);
}

.plane-elements {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.element {
  background: var(--color-background);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) var(--spacing-md);
}

.element h4 {
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
}

.element p {
  margin: 0;
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.key-relationship {
  background: rgba(13, 148, 136, 0.05);
  border: 1px solid rgba(13, 148, 136, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.key-relationship h4 {
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.key-relationship ul {
  margin: var(--spacing-sm) 0 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.gap-diagram {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin: var(--spacing-xl) 0;
}

.gap-layer {
  flex: 1;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.gap-layer h4 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
}

.gap-layer ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.gap-layer li {
  margin-bottom: var(--spacing-xs);
}

.database {
  border-color: var(--color-border);
}

.ferin {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, var(--color-surface) 100%);
}

.ferin h4 {
  color: var(--color-accent);
}

.gap-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.gap-arrow::before {
  content: "→";
  font-size: var(--font-size-2xl);
  color: var(--color-accent);
}

.gap-size {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent);
  white-space: nowrap;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.capability {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.capability h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
  color: var(--color-accent);
}

.capability p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.capability a {
  color: var(--color-accent);
}

.concept-mapping {
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.concept-mapping table {
  width: 100%;
  border-collapse: collapse;
}

.concept-mapping th,
.concept-mapping td {
  padding: var(--spacing-md);
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--color-border);
}

.concept-mapping th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
}

.concept-mapping td:first-child {
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}

.implementations {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.implementation {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
}

.implementation h3 {
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-lg);
}

.implementation-url {
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-sm);
}

.implementation-url a {
  color: var(--color-accent);
}

.implementation-vendor {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  font-style: italic;
}

.implementation-description {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
}

.decision-factors {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.factor {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.factor h4 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
  color: var(--color-accent);
}

.factor ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.factor li {
  margin-bottom: var(--spacing-xs);
}

.warning {
  background: rgba(245, 158, 11, 0.05);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.warning h4 {
  margin: 0 0 var(--spacing-sm);
  color: #f59e0b;
}

.warning p {
  margin: 0;
  font-size: var(--font-size-sm);
}

.not-required {
  margin: var(--spacing-md) 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.not-required li {
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
  .plane-model {
    grid-template-columns: 1fr;
  }

  .gap-diagram {
    flex-direction: column;
  }

  .gap-arrow::before {
    content: "↓";
  }

  .capabilities-grid {
    grid-template-columns: 1fr;
  }

  .implementations {
    grid-template-columns: 1fr;
  }

  .decision-factors {
    grid-template-columns: 1fr;
  }
}
</style>
