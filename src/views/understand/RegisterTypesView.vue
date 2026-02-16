<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Register Types</h1>
      <p class="page-lead">
        FERIN defines five register types based on capabilities. Choose the
        type that matches your needs—no more, no less.
      </p>
    </header>

    <section class="content-section">
      <h2>Capability-Based Conformance</h2>
      <p>
        Unlike the 2015 edition's hierarchical model (Core → Extended → Hierarchical),
        the 2025 edition uses <strong>capability-based conformance</strong>:
      </p>
      <ul>
        <li>Each register type provides specific capabilities</li>
        <li>You claim conformance to the type(s) you implement</li>
        <li>Types can be combined based on needs</li>
        <li>There's no "highest" level—just the right fit</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>The Five Register Types</h2>

      <div class="types-grid">
        <div class="type-card">
          <div class="type-header">
            <span class="type-number">1</span>
            <h3>Content Register</h3>
          </div>
          <p class="type-tagline">Basic register with content management</p>

          <h4>Capabilities</h4>
          <ul>
            <li>Store and retrieve register items</li>
            <li>Assign and manage identifiers</li>
            <li>Track basic status (valid/invalid, published/unpublished)</li>
            <li>Support required actions (add, invalidate, supersede)</li>
          </ul>

          <h4>Best For</h4>
          <p>
            Simple code lists, reference data, and lookup tables where governance
            is minimal and content doesn't change frequently.
          </p>

          <div class="example">
            <strong>Example:</strong> A country codes register with ISO 3166
            alpha-2 codes.
          </div>
        </div>

        <div class="type-card">
          <div class="type-header">
            <span class="type-number">2</span>
            <h3>Concept Register</h3>
          </div>
          <p class="type-tagline">Content + concept plane modeling</p>

          <h4>Capabilities (extends Content)</h4>
          <ul>
            <li>Model concepts and concept versions</li>
            <li>Link register items to concepts</li>
            <li>Track concept definitions and their evolution</li>
            <li>Support concept relations (specialization, etc.)</li>
          </ul>

          <h4>Best For</h4>
          <p>
            Registers where the meaning of items matters as much as the data,
            or where definitions evolve over time.
          </p>

          <div class="example">
            <strong>Example:</strong> A scientific terminology register where
            definitions are refined as understanding improves.
          </div>
        </div>

        <div class="type-card">
          <div class="type-header">
            <span class="type-number">3</span>
            <h3>Governed Content Register</h3>
          </div>
          <p class="type-tagline">Content + formal governance</p>

          <h4>Capabilities (extends Content)</h4>
          <ul>
            <li>Formal proposal and approval workflows</li>
            <li>Role-based access control</li>
            <li>Audit trails for all changes</li>
            <li>Appeal process for disputed decisions</li>
          </ul>

          <h4>Best For</h4>
          <p>
            Registers that require accountability, transparency, or regulatory
            compliance—where you need to prove who approved what and when.
          </p>

          <div class="example">
            <strong>Example:</strong> A regulatory code list that must demonstrate
            compliance with governance requirements.
          </div>
        </div>

        <div class="type-card">
          <div class="type-header">
            <span class="type-number">4</span>
            <h3>Governed Concept Register</h3>
          </div>
          <p class="type-tagline">Concept + governance capabilities</p>

          <h4>Capabilities (extends Concept)</h4>
          <ul>
            <li>All Concept Register capabilities</li>
            <li>Formal governance for concepts and content</li>
            <li>Approval workflows for concept changes</li>
            <li>Concept-level audit trails</li>
          </ul>

          <h4>Best For</h4>
          <p>
            Enterprise terminology or taxonomy management where both meaning
            and content require formal governance.
          </p>

          <div class="example">
            <strong>Example:</strong> An enterprise data dictionary with governed
            business term definitions.
          </div>
        </div>

        <div class="type-card featured">
          <div class="type-header">
            <span class="type-number">5</span>
            <h3>Complete Concept Register (CCR)</h3>
          </div>
          <p class="type-tagline">All capabilities: concept + governance + commitments</p>

          <h4>Capabilities (extends all)</h4>
          <ul>
            <li>All Governed Concept Register capabilities</li>
            <li>Full commitment implementation</li>
            <li>Access commitments (metadata, content, historic)</li>
            <li>Persistence commitments (identifier, content, historic)</li>
            <li>Transparency commitments (full visibility)</li>
          </ul>

          <h4>Best For</h4>
          <p>
            National or international reference registers, standards bodies,
            and any register that serves as a definitive, citable source.
          </p>

          <div class="example">
            <strong>Example:</strong> The Register of Units of Measure (RUM),
            serving as the authoritative source for unit definitions.
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Choosing a Register Type</h2>
      <p>
        Use this decision tree to select the right type:
      </p>

      <div class="decision-tree">
        <div class="decision-node">
          <div class="question">Do you need to track concept definitions separately from content?</div>
          <div class="branches">
            <div class="branch">
              <span class="answer">Yes</span>
              <span class="result">→ You need Concept capability</span>
            </div>
            <div class="branch">
              <span class="answer">No</span>
              <span class="result">→ Content capability is sufficient</span>
            </div>
          </div>
        </div>

        <div class="decision-node">
          <div class="question">Do you need formal governance (proposals, approvals, appeals)?</div>
          <div class="branches">
            <div class="branch">
              <span class="answer">Yes</span>
              <span class="result">→ You need Governance capability</span>
            </div>
            <div class="branch">
              <span class="answer">No</span>
              <span class="result">→ Basic management is sufficient</span>
            </div>
          </div>
        </div>

        <div class="decision-node">
          <div class="question">Will external users rely on this register as a definitive source?</div>
          <div class="branches">
            <div class="branch">
              <span class="answer">Yes</span>
              <span class="result">→ Consider CCR for full commitments</span>
            </div>
            <div class="branch">
              <span class="answer">No</span>
              <span class="result">→ Lower commitment levels are fine</span>
            </div>
          </div>
        </div>
      </div>

      <h3>Quick Selection Table</h3>
      <table class="selection-table">
        <thead>
          <tr>
            <th>Use Case</th>
            <th>Recommended Type</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Internal code list</td>
            <td>Content Register</td>
            <td>Simple needs, no external users</td>
          </tr>
          <tr>
            <td>Product taxonomy</td>
            <td>Concept Register</td>
            <td>Definitions matter, governance optional</td>
          </tr>
          <tr>
            <td>Regulatory compliance data</td>
            <td>Governed Content Register</td>
            <td>Audit trail critical</td>
          </tr>
          <tr>
            <td>Enterprise data governance</td>
            <td>Governed Concept Register</td>
            <td>Both meaning and process matter</td>
          </tr>
          <tr>
            <td>National/international standard</td>
            <td>CCR</td>
            <td>Full trust and persistence required</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Can I Mix Types?</h2>
      <p>
        The capability model is designed to be combinable:
      </p>
      <ul>
        <li>
          <strong>Yes:</strong> You can implement capabilities from multiple types
          if your use case requires it
        </li>
        <li>
          <strong>Claim carefully:</strong> Only claim conformance to types whose
          full capability set you implement
        </li>
        <li>
          <strong>Document deviations:</strong> If you implement partial capabilities,
          document what's included and excluded
        </li>
      </ul>

      <div class="warning-box">
        <strong>Note:</strong> While capabilities can be combined, the five types
        represent tested patterns. Deviating from them may increase complexity
        and reduce interoperability.
      </div>
    </section>

    <section class="content-section">
      <h2>Conformance Testing</h2>
      <p>
        How do you verify conformance when requirements are capability-based?
      </p>

      <h3>Testing Approach</h3>
      <ol>
        <li>
          <strong>Identify claimed type(s)</strong>: What conformance class(es)
          does your register claim?
        </li>
        <li>
          <strong>Map to capabilities</strong>: Each type has required capabilities
        </li>
        <li>
          <strong>Test each capability</strong>: Verify the capability is implemented
          and functional
        </li>
        <li>
          <strong>Document evidence</strong>: Provide examples, screenshots, or
          API demonstrations
        </li>
      </ol>

      <h3>Self-Assessment Checklist</h3>
      <div class="checklist">
        <div class="checklist-section">
          <h4>Content Register</h4>
          <ul>
            <li>☐ Can add new register items</li>
            <li>☐ Can assign unique identifiers</li>
            <li>☐ Can invalidate items</li>
            <li>☐ Can supersede items</li>
            <li>☐ Can track valid/invalid status</li>
            <li>☐ Can track published/unpublished status</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Concept Register</h4>
          <ul>
            <li>☐ Can define concepts</li>
            <li>☐ Can version concept definitions</li>
            <li>☐ Can link items to concepts</li>
            <li>☐ Can define concept relations</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Governance</h4>
          <ul>
            <li>☐ Can submit proposals</li>
            <li>☐ Can review and approve/reject proposals</li>
            <li>☐ Can assign roles</li>
            <li>☐ Can appeal decisions</li>
            <li>☐ Maintains audit trail</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/implement/getting-started">Getting Started</router-link>
          - Begin implementing your register
        </li>
        <li>
          <router-link to="/reference/commitments">Commitments</router-link>
          - Understanding access, persistence, and transparency
        </li>
        <li>
          <router-link to="/reference/samples">Samples</router-link>
          - Complete register specification examples
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

.types-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.type-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.type-card.featured {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, var(--color-surface) 100%);
}

.type-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.type-number {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-bold);
  border-radius: 50%;
}

.type-card.featured .type-number {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
}

.type-header h3 {
  margin: 0;
  font-size: var(--font-size-xl);
}

.type-tagline {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
}

.type-card h4 {
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  margin: var(--spacing-md) 0 var(--spacing-sm);
}

.type-card ul {
  font-size: var(--font-size-sm);
}

.type-card p {
  font-size: var(--font-size-sm);
}

.example {
  background: rgba(13, 148, 136, 0.1);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-md);
  margin-top: var(--spacing-md);
  font-size: var(--font-size-sm);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.decision-tree {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.decision-node {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.question {
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-md);
}

.branches {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.branch {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--font-size-sm);
}

.answer {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-accent);
  color: var(--color-text-inverse);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-medium);
}

.result {
  color: var(--color-text-light);
}

.selection-table {
  margin: var(--spacing-lg) 0;
}

.warning-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.checklist {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.checklist-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.checklist-section h4 {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-sm);
}

.checklist-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-xs);
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
  .checklist {
    grid-template-columns: 1fr;
  }
}
</style>
