<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Why Do I Need a Register?</h1>
      <p class="page-lead">
        Understanding when a FERIN register is the right solution - and when
        simpler alternatives suffice. A register is not just storage; it is
        governed, versioned, persistent reference data with commitments.
      </p>
    </header>

    <section class="content-section">
      <h2>What Makes a Register Different</h2>
      <p>
        A FERIN register provides a unique combination of capabilities that
        no other data management pattern offers together. Understanding these
        differences helps you choose the right tool for your needs.
      </p>

      <div class="value-stack">
        <div class="stack-item">
          <div class="stack-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            </svg>
          </div>
          <h3>Persistence</h3>
          <p>"This identifier will always resolve"</p>
        </div>
        <div class="stack-plus">+</div>
        <div class="stack-item">
          <div class="stack-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3v18"></path>
              <path d="M8 8l4-4 4 4"></path>
              <path d="M8 16l4 4 4-4"></path>
            </svg>
          </div>
          <h3>Evolution</h3>
          <p>"Content can change, history retained"</p>
        </div>
        <div class="stack-plus">+</div>
        <div class="stack-item">
          <div class="stack-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </div>
          <h3>Governance</h3>
          <p>"Changes happen through defined process"</p>
        </div>
        <div class="stack-plus">+</div>
        <div class="stack-item">
          <div class="stack-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
          </div>
          <h3>Commitments</h3>
          <p>"We state our promises explicitly"</p>
        </div>
        <div class="stack-equals">=</div>
        <div class="stack-result">
          <h3>Trust</h3>
          <p>"I can rely on this for my work"</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Comparison with Alternatives</h2>

      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Persistence</th>
              <th>Versioning</th>
              <th>Governance</th>
              <th>History</th>
              <th>Status</th>
              <th>Commitments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>File</strong> (CSV, JSON, XML)</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
            </tr>
            <tr>
              <td><strong>Database</strong></td>
              <td class="yes">Yes</td>
              <td class="partial">Custom</td>
              <td class="no">No</td>
              <td class="partial">Custom</td>
              <td class="no">No</td>
              <td class="no">No</td>
            </tr>
            <tr>
              <td><strong>Dataset</strong></td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
            </tr>
            <tr>
              <td><strong>Git Repository</strong></td>
              <td class="yes">Yes</td>
              <td class="yes">Yes</td>
              <td class="partial">Limited</td>
              <td class="yes">Yes</td>
              <td class="no">No</td>
              <td class="no">No</td>
            </tr>
            <tr>
              <td><strong>Data Catalog</strong></td>
              <td class="yes">Yes</td>
              <td class="no">No</td>
              <td class="partial">Limited</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
            </tr>
            <tr>
              <td><strong>API</strong></td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
              <td class="no">No</td>
            </tr>
            <tr class="ferin-row">
              <td><strong>FERIN Register</strong></td>
              <td class="yes">Yes</td>
              <td class="yes">Yes</td>
              <td class="yes">Yes</td>
              <td class="yes">Yes</td>
              <td class="yes">Yes</td>
              <td class="yes">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Detailed Comparisons</h3>

      <div class="comparisons">
        <div class="comparison-item">
          <h4>File (CSV, JSON, XML)</h4>
          <p class="comparison-summary">
            Static data storage with no built-in governance or versioning.
          </p>
          <ul>
            <li><strong>Missing:</strong> No versioning, no governance, no change history, no identifier stability</li>
            <li><strong>Use when:</strong> Data is truly static, single consumer, no audit requirements</li>
            <li><strong>Don't use when:</strong> Others depend on the data, changes occur, history matters</li>
          </ul>
        </div>

        <div class="comparison-item">
          <h4>Database (SQL, NoSQL)</h4>
          <p class="comparison-summary">
            Mutable storage with optional versioning through custom implementation.
          </p>
          <ul>
            <li><strong>Missing:</strong> No governance framework, no defined roles, no status model, no commitments</li>
            <li><strong>Use when:</strong> Application data storage, transactional systems, simple CRUD</li>
            <li><strong>Don't use when:</strong> Publishing reference data for external consumers, regulatory compliance</li>
          </ul>
        </div>

        <div class="comparison-item">
          <h4>Git Repository</h4>
          <p class="comparison-summary">
            Version control designed for code, not reference data.
          </p>
          <ul>
            <li><strong>Missing:</strong> No status model, no governance roles, no persistence commitments, poor support for large binary data</li>
            <li><strong>Use when:</strong> Small code-like reference files, developer-focused data, internal use</li>
            <li><strong>Don't use when:</strong> Non-technical stakeholders, API access needed, status tracking required</li>
          </ul>
        </div>

        <div class="comparison-item">
          <h4>API (REST, GraphQL)</h4>
          <p class="comparison-summary">
            Delivery mechanism, not a managed data store.
          </p>
          <ul>
            <li><strong>Missing:</strong> No storage, no versioning, no governance, no history, no commitments</li>
            <li><strong>Use when:</strong> Exposing existing data, application integration</li>
            <li><strong>Don't use when:</strong> You need the data store, not just the delivery layer</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Decision Framework</h2>
      <p>
        Use this framework to determine whether a FERIN register is appropriate
        for your use case.
      </p>

      <div class="decision-framework">
        <div class="decision-yes">
          <h3>You Need a Register If...</h3>
          <ul>
            <li>Others (people or systems) depend on your reference data</li>
            <li>You need to say "X meant Y at time T" for any past point</li>
            <li>Identifiers must remain stable even as meanings evolve</li>
            <li>Regulatory compliance requires audit trails</li>
            <li>You are publishing normative content (standards, regulations)</li>
            <li>Data schemas need to evolve independently of data</li>
            <li>You need to track lineage across splits and merges</li>
            <li>Cross-organizational data sharing with governance requirements</li>
            <li>You need to make explicit promises about access and persistence</li>
          </ul>
        </div>

        <div class="decision-no">
          <h3>You May Not Need a Register If...</h3>
          <ul>
            <li>Data is truly static and will never change</li>
            <li>Only you consume the data</li>
            <li>No historical queries are ever needed</li>
            <li>Simple audit timestamps in a database suffice</li>
            <li>Governance overhead outweighs benefits</li>
            <li>Data volume is small and changes are rare</li>
          </ul>
        </div>
      </div>

      <div class="decision-test">
        <h3>The Trust Test</h3>
        <p>
          Ask yourself: <strong>"Would a consumer trust this data enough to
          build their system on it?"</strong>
        </p>
        <ul>
          <li>If trust requires persistence guarantees → You need a register</li>
          <li>If trust requires knowing what changed and when → You need a register</li>
          <li>If trust requires knowing who approved changes → You need a register</li>
          <li>If trust is based on "I maintain this, trust me" → A simpler solution may suffice</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Common Use Cases</h2>

      <div class="use-cases">
        <div class="use-case">
          <h4>Standards and Code Lists</h4>
          <p>Country codes, currency codes, unit of measure, industry classifications</p>
          <span class="risk-tag high-risk">Typically High Risk</span>
        </div>
        <div class="use-case">
          <h4>Regulatory Registries</h4>
          <p>Compliance codes, regulatory frameworks, legal references</p>
          <span class="risk-tag high-risk">High Risk</span>
        </div>
        <div class="use-case">
          <h4>Organizational Taxonomies</h4>
          <p>Department structures, product categories, skill classifications</p>
          <span class="risk-tag medium-risk">Medium Risk</span>
        </div>
        <div class="use-case">
          <h4>Identifier Systems</h4>
          <p>DOI, ORCID, ISBN, custom identifier registries</p>
          <span class="risk-tag high-risk">High Risk</span>
        </div>
        <div class="use-case">
          <h4>Scientific Reference Data</h4>
          <p>Measurement units, chemical compounds, species classifications</p>
          <span class="risk-tag medium-risk">Medium-High Risk</span>
        </div>
        <div class="use-case">
          <h4>Internal Reference Lists</h4>
          <p>Project codes, internal vocabularies, team configurations</p>
          <span class="risk-tag low-risk">Low-Medium Risk</span>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/about/what-is-ferin">What is FERIN?</router-link>
          - Introduction to the framework
        </li>
        <li>
          <router-link to="/learn/risk-management">Risk Management</router-link>
          - Assess your register's risk level
        </li>
        <li>
          <router-link to="/build/getting-started">Getting Started</router-link>
          - Implementation guide
        </li>
        <li>
          <router-link to="/learn/register-types">Register Types</router-link>
          - Choose the right conformance level
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

.value-stack {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-xl);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, rgba(30, 58, 95, 0.05) 100%);
  border-radius: var(--radius-xl);
}

.stack-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 100px;
}

.stack-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-sm);
  color: var(--color-accent);
}

.stack-item h3 {
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-sm);
}

.stack-item p {
  margin: 0;
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.stack-plus,
.stack-equals {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
}

.stack-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-md);
  background: var(--color-accent);
  color: var(--color-text-inverse);
  border-radius: var(--radius-lg);
}

.stack-result h3 {
  margin: 0;
  font-size: var(--font-size-base);
  color: var(--color-text-inverse);
}

.stack-result p {
  margin: var(--spacing-xs) 0 0;
  font-size: var(--font-size-sm);
  opacity: 0.9;
}

.comparison-table {
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.comparison-table th,
.comparison-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: center;
  border-bottom: 1px solid var(--color-border);
}

.comparison-table th:first-child,
.comparison-table td:first-child {
  text-align: left;
}

.comparison-table th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-xs);
}

.comparison-table .yes {
  color: var(--color-success);
  font-weight: var(--font-weight-medium);
}

.comparison-table .partial {
  color: var(--color-warning);
  font-size: var(--font-size-xs);
}

.comparison-table .no {
  color: var(--color-text-light);
}

.comparison-table .ferin-row {
  background: rgba(13, 148, 136, 0.05);
}

.comparison-table .ferin-row td:first-child {
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent);
}

.comparisons {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.comparison-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.comparison-item h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
  color: var(--color-primary);
}

.comparison-summary {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
}

.comparison-item ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.comparison-item li {
  margin-bottom: var(--spacing-xs);
}

.decision-framework {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.decision-yes,
.decision-no {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.decision-yes {
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.decision-no {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.decision-yes h3 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
  color: #16a34a;
}

.decision-no h3 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
  color: #dc2626;
}

.decision-framework ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.decision-framework li {
  margin-bottom: var(--spacing-xs);
}

.decision-test {
  background: var(--color-surface);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.decision-test h3 {
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.decision-test > p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
}

.decision-test ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.decision-test li {
  margin-bottom: var(--spacing-xs);
}

.use-cases {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.use-case {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.use-case h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
}

.use-case p {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.risk-tag {
  display: inline-block;
  font-size: var(--font-size-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-medium);
}

.risk-tag.high-risk {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.risk-tag.medium-risk {
  background: rgba(234, 179, 8, 0.1);
  color: #ca8a04;
}

.risk-tag.low-risk {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
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
  .value-stack {
    flex-direction: column;
  }

  .stack-plus,
  .stack-equals {
    transform: rotate(90deg);
  }

  .decision-framework {
    grid-template-columns: 1fr;
  }

  .use-cases {
    grid-template-columns: 1fr;
  }
}
</style>
