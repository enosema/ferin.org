<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Framework Overview</h1>
      <p class="page-lead">
        FERIN is built on three pillars: Data, Governance, and Compliance.
        Understanding how these work together is key to effective implementation.
      </p>
    </header>

    <section class="content-section">
      <h2>The Three Pillars</h2>

      <div class="pillars-grid">
        <div class="pillar">
          <div class="pillar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
              <path d="M3 12A9 3 0 0 0 21 12"></path>
            </svg>
          </div>
          <h3>Data</h3>
          <p>
            How information is structured, stored, and accessed. Includes the
            concept plane, content plane, identifiers, and status model.
          </p>
          <ul>
            <li>Concepts and concept versions</li>
            <li>Register items and their attributes</li>
            <li>Relations between items</li>
            <li>Status tracking</li>
          </ul>
        </div>

        <div class="pillar">
          <div class="pillar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>Governance</h3>
          <p>
            Who can do what, and through what processes. Includes roles,
            responsibilities, and the actions that manage content.
          </p>
          <ul>
            <li>Role definitions and assignment</li>
            <li>Approval workflows</li>
            <li>Change management processes</li>
            <li>Dispute resolution</li>
          </ul>
        </div>

        <div class="pillar">
          <div class="pillar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <h3>Compliance</h3>
          <p>
            What commitments are made and how conformance is verified. Includes
            register specification and conformance claims.
          </p>
          <ul>
            <li>Access commitments</li>
            <li>Persistence commitments</li>
            <li>Transparency commitments</li>
            <li>Conformance verification</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Administrative vs Managed Information</h2>
      <p>
        FERIN distinguishes between two categories of information:
      </p>

      <div class="comparison-grid">
        <div class="comparison-card">
          <h3>Administrative Information</h3>
          <p>
            Metadata about the register itself—its configuration, governance
            structure, and operational parameters.
          </p>
          <h4>Examples:</h4>
          <ul>
            <li>Register title and description</li>
            <li>Owner and manager identities</li>
            <li>Register specification</li>
            <li>Conformance claims</li>
            <li>Operational status</li>
          </ul>
        </div>

        <div class="comparison-card">
          <h3>Managed Information</h3>
          <p>
            The actual content of the register—concepts, register items,
            and their attributes.
          </p>
          <h4>Examples:</h4>
          <ul>
            <li>Concept definitions</li>
            <li>Register item data</li>
            <li>Relations between items</li>
            <li>Change history</li>
            <li>Status information</li>
          </ul>
        </div>
      </div>

      <h3>The Boundary Question</h3>
      <p>
        The standard provides an abstract distinction, but in practice,
        where's the line?
      </p>
      <table class="boundary-table">
        <thead>
          <tr>
            <th>Information Type</th>
            <th>Category</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Register title</td>
            <td>Administrative</td>
            <td>Describes the register, not its content</td>
          </tr>
          <tr>
            <td>Item schema definition</td>
            <td>Administrative</td>
            <td>Defines structure, not content</td>
          </tr>
          <tr>
            <td>Individual item values</td>
            <td>Managed</td>
            <td>Actual register content</td>
          </tr>
          <tr>
            <td>Item change history</td>
            <td>Managed</td>
            <td>History of managed content</td>
          </tr>
          <tr>
            <td>Approval workflow config</td>
            <td>Administrative</td>
            <td>Governance configuration</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Register Specification</h2>
      <p>
        Every register must have a <strong>register specification</strong>—a
        document that defines:
      </p>

      <div class="spec-sections">
        <div class="spec-item">
          <h4>Scope and Purpose</h4>
          <p>What the register contains and why it exists</p>
        </div>
        <div class="spec-item">
          <h4>Identifier Scheme</h4>
          <p>How items are identified uniquely</p>
        </div>
        <div class="spec-item">
          <h4>Content Requirements</h4>
          <p>What attributes items must/can have</p>
        </div>
        <div class="spec-item">
          <h4>Governance Model</h4>
          <p>Roles, responsibilities, and processes</p>
        </div>
        <div class="spec-item">
          <h4>Commitments</h4>
          <p>Access, persistence, and transparency levels</p>
        </div>
        <div class="spec-item">
          <h4>Conformance Claims</h4>
          <p>Which FERIN capabilities are implemented</p>
        </div>
      </div>

      <h3>How Detailed Should It Be?</h3>
      <p>
        The standard requires a register specification but doesn't specify depth.
        Here's practical guidance:
      </p>
      <table class="depth-table">
        <thead>
          <tr>
            <th>Register Type</th>
            <th>Recommended Depth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simple content register</td>
            <td>Basic—scope, identifiers, minimal governance</td>
          </tr>
          <tr>
            <td>Governed register</td>
            <td>Moderate—full governance model, commitments</td>
          </tr>
          <tr>
            <td>CCR (full conformance)</td>
            <td>Comprehensive—all sections detailed</td>
          </tr>
        </tbody>
      </table>

      <p>
        See <router-link to="/build/register-specification">Register Specification</router-link>
        for a complete template and samples.
      </p>
    </section>

    <section class="content-section">
      <h2>Architecture Diagram</h2>
      <p>
        The FERIN framework architecture shows how concepts, content, and
        governance interact:
      </p>

      <div class="architecture-diagram">
        <pre class="diagram-code">
┌─────────────────────────────────────────────────────────────────┐
│                        REGISTER                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐         ┌──────────────────┐              │
│  │  CONCEPT PLANE   │         │  CONTENT PLANE   │              │
│  │                  │         │                  │              │
│  │  ┌────────────┐  │         │  ┌────────────┐  │              │
│  │  │  Concept   │◄─┼─────────┼──│ Register   │  │              │
│  │  │            │  │  realizes│  │   Item     │  │              │
│  │  └─────┬──────┘  │         │  └────────────┘  │              │
│  │        │         │         │                  │              │
│  │  ┌─────▼──────┐  │         │  ┌────────────┐  │              │
│  │  │  Concept   │  │         │  │  Status    │  │              │
│  │  │  Version   │  │         │  │  (valid,   │  │              │
│  │  │            │  │         │  │published...)│  │              │
│  │  └────────────┘  │         │  └────────────┘  │              │
│  └──────────────────┘         └──────────────────┘              │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                         GOVERNANCE                               │
│                                                                  │
│  Owner ──► Manager ──► Control Body ──► Proposers ──► Users     │
│                                                                  │
│  [Propose] ──► [Review] ──► [Approve/Reject] ──► [Publish]      │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                        COMMITMENTS                               │
│                                                                  │
│  Access ◄──► Persistence ◄──► Transparency                      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
        </pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/learn/register-types">Register Types</router-link>
          - Understanding conformance classes
        </li>
        <li>
          <router-link to="/learn/governance">Governance</router-link>
          - Roles, processes, and lifecycle
        </li>
        <li>
          <router-link to="/reference/commitments">Commitments</router-link>
          - Detailed commitment specifications
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

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.pillar {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.pillar-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(30, 58, 95, 0.1) 100%);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
}

.pillar h3 {
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-sm);
}

.pillar p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.pillar ul {
  font-size: var(--font-size-sm);
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.comparison-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.comparison-card h3 {
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.comparison-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.comparison-card h4 {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
}

.boundary-table,
.depth-table {
  margin: var(--spacing-md) 0;
}

.spec-sections {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.spec-item {
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.spec-item h4 {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
}

.spec-item p {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
}

.architecture-diagram {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.diagram-code {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  color: var(--color-text-inverse);
  margin: 0;
  white-space: pre;
  line-height: 1.4;
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
  .pillars-grid {
    grid-template-columns: 1fr;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .spec-sections {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .spec-sections {
    grid-template-columns: 1fr;
  }
}
</style>
