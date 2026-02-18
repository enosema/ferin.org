<template>
  <article class="content-page migration-page">
    <nav class="breadcrumb">
      <router-link to="/implement/migration">Migration Guide</router-link>
      <span class="separator">/</span>
      <span class="current">Conformance Migration</span>
    </nav>

    <header class="page-header">
      <h1>Conformance Migration</h1>
      <p class="page-lead">
        How to map your ISO 19135-1:2015 conformance class to an
        ISO 19135:2026 register type.
      </p>
    </header>

    <section class="content-section">
      <h2>The Fundamental Shift</h2>
      <p>
        The 2026 edition replaces the three hierarchical conformance classes with
        five capability-based register types. This provides more flexibility but
        requires understanding the new model.
      </p>

      <div class="comparison-visual">
        <div class="old-model">
          <h3>2015: Hierarchical Classes</h3>
          <div class="hierarchy">
            <div class="level">
              <span class="level-name">Core</span>
              <span class="level-desc">Minimum requirements</span>
            </div>
            <div class="arrow">↑ extends</div>
            <div class="level">
              <span class="level-name">Extended</span>
              <span class="level-desc">Full governance, localization</span>
            </div>
            <div class="arrow">↑ extends</div>
            <div class="level">
              <span class="level-name">Hierarchical</span>
              <span class="level-desc">Parent-child registers</span>
            </div>
          </div>
        </div>

        <div class="new-model">
          <h3>2026: Capability-Based Types</h3>
          <div class="capabilities">
            <div class="base-type">Content Register</div>
            <div class="branches">
              <div class="branch">
                <div class="addon concept">+ Concept Plane</div>
                <div class="result">Concept Register</div>
              </div>
              <div class="branch">
                <div class="addon governance">+ Governance</div>
                <div class="result">Governed Content Register</div>
              </div>
              <div class="branch">
                <div class="addon both">+ Both</div>
                <div class="result">Governed Concept Register</div>
                <div class="addon advanced">+ Advanced</div>
                <div class="result ccr">Comprehensive Concept Register</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Mapping Table</h2>
      <table class="mapping-table">
        <thead>
          <tr>
            <th>2015 Class</th>
            <th>2026 Type</th>
            <th>Capabilities Required</th>
            <th>Effort</th>
          </tr>
        </thead>
        <tbody>
          <tr class="row-simple">
            <td>
              <strong>Core</strong>
              <br><small>Basic register functionality</small>
            </td>
            <td>
              <strong>Content Register</strong>
              <br><code>/req/content-register</code>
            </td>
            <td>
              <ul>
                <li>Content management</li>
                <li>Basic status model</li>
                <li>Identifier management</li>
              </ul>
            </td>
            <td><span class="effort low">Low</span></td>
          </tr>
          <tr class="row-standard">
            <td>
              <strong>Extended</strong>
              <br><small>Full governance, proposal management</small>
            </td>
            <td>
              <strong>Governed Content Register</strong>
              <br><code>/req/governance</code>
            </td>
            <td>
              <ul>
                <li>All Content Register capabilities</li>
                <li>Governance processes</li>
                <li>Commitments declaration</li>
                <li>Register specification</li>
              </ul>
            </td>
            <td><span class="effort medium">Medium</span></td>
          </tr>
          <tr class="row-complex">
            <td>
              <strong>Hierarchical</strong>
              <br><small>Principal register or subregister</small>
            </td>
            <td>
              <strong>Governed Concept Register</strong>
              <em>or</em>
              <strong>CCR</strong>
              <br><code>/req/concept-register</code> + <code>/req/governance</code>
            </td>
            <td>
              <ul>
                <li>All Governed Content capabilities</li>
                <li>Concept plane management</li>
                <li>Concept relations</li>
                <li>For CCR: Inheritance, composition</li>
              </ul>
            </td>
            <td><span class="effort high">High</span></td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Decision Guide</h2>
      <p>
        Use this decision tree to determine your target register type:
      </p>

      <div class="decision-tree">
        <div class="decision-node root">
          <div class="question">What was your 2015 conformance class?</div>
          <div class="branches">
            <div class="branch">
              <div class="answer">Core</div>
              <div class="outcome">
                <strong>→ Content Register</strong>
                <p>Simplest migration path. Focus on status model and terminology updates.</p>
              </div>
            </div>
            <div class="branch">
              <div class="answer">Extended</div>
              <div class="outcome">
                <strong>→ Governed Content Register</strong>
                <p>Direct equivalent. Add commitments declaration and update governance model.</p>
              </div>
            </div>
            <div class="branch">
              <div class="answer">Hierarchical</div>
              <div class="sub-question">
                <span>Do you need explicit concept management?</span>
                <div class="sub-branches">
                  <div class="sub-branch">
                    <span class="answer">Yes</span>
                    <div class="outcome">
                      <strong>→ Governed Concept Register</strong>
                      <p>Implement concept plane with governance.</p>
                    </div>
                  </div>
                  <div class="sub-branch">
                    <span class="answer">No</span>
                    <div class="outcome">
                      <strong>→ Governed Content Register</strong>
                      <p>Concepts remain implicit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Capability Requirements</h2>
      <p>
        Each register type has specific capability requirements. Here's what you need to implement:
      </p>

      <div class="requirements-grid">
        <div class="requirement-card">
          <h4>Content Register</h4>
          <ul class="reqs">
            <li class="required">Register item management</li>
            <li class="required">Object identifiers</li>
            <li class="required">Basic versioning</li>
            <li class="required">Status dimensions (validity, publication)</li>
            <li class="optional">Functional identifiers</li>
            <li class="optional">Change history</li>
          </ul>
        </div>

        <div class="requirement-card">
          <h4>Governed Content Register</h4>
          <ul class="reqs">
            <li class="inherited">All Content Register requirements</li>
            <li class="required">Governance roles</li>
            <li class="required">Proposal process</li>
            <li class="required">Approval process</li>
            <li class="required">Register specification</li>
            <li class="required">Commitments declaration</li>
          </ul>
        </div>

        <div class="requirement-card">
          <h4>Concept Register</h4>
          <ul class="reqs">
            <li class="inherited">All Content Register requirements</li>
            <li class="required">Concept management</li>
            <li class="required">Concept versions</li>
            <li class="required">Concept-status linking</li>
            <li class="required">Basic relations (supersedes)</li>
            <li class="optional">Advanced relations</li>
          </ul>
        </div>

        <div class="requirement-card">
          <h4>Governed Concept Register</h4>
          <ul class="reqs">
            <li class="inherited">All Concept Register requirements</li>
            <li class="inherited">All Governance requirements</li>
            <li class="required">Governed concepts</li>
            <li class="required">Concept proposal process</li>
          </ul>
        </div>

        <div class="requirement-card ccr">
          <h4>Comprehensive Concept Register</h4>
          <ul class="reqs">
            <li class="inherited">All Governed Concept requirements</li>
            <li class="required">Concept inheritance</li>
            <li class="required">Partitive concepts</li>
            <li class="required">Concept domains</li>
            <li class="required">Concept composition</li>
            <li class="required">Definition migration</li>
          </ul>
        </div>
      </div>

      <div class="legend">
        <span class="legend-item"><span class="required"></span> Required</span>
        <span class="legend-item"><span class="optional"></span> Optional</span>
        <span class="legend-item"><span class="inherited"></span> Inherited</span>
      </div>
    </section>

    <section class="content-section">
      <h2>Testing Implications</h2>
      <p>
        The 2026 edition has a modular abstract test suite. You only need to pass
        tests for your declared register type.
      </p>

      <table class="test-table">
        <thead>
          <tr>
            <th>Register Type</th>
            <th>Test Suites Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content Register</td>
            <td><code>/conf/content-register</code></td>
          </tr>
          <tr>
            <td>Concept Register</td>
            <td><code>/conf/content-register</code>, <code>/conf/concept-register</code></td>
          </tr>
          <tr>
            <td>Governed Content Register</td>
            <td><code>/conf/content-register</code>, <code>/conf/governance</code></td>
          </tr>
          <tr>
            <td>Governed Concept Register</td>
            <td><code>/conf/content-register</code>, <code>/conf/concept-register</code>, <code>/conf/governance</code></td>
          </tr>
          <tr>
            <td>CCR</td>
            <td>All above + <code>/conf/advanced-concepts</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <nav class="page-nav">
      <router-link to="/implement/migration/terminology" class="nav-prev">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Terminology Mapping</span>
      </router-link>
      <router-link to="/implement/migration/status-model" class="nav-next">
        <span class="nav-label">Next</span>
        <span class="nav-title">Status Model Migration</span>
      </router-link>
    </nav>
  </article>
</template>

<script setup>
</script>

<style scoped>
@import './migration-shared.css';

.comparison-visual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
}

.old-model,
.new-model {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.old-model {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.new-model {
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.old-model h3,
.new-model h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
  text-align: center;
}

.hierarchy {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.hierarchy .level {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: white;
  border-radius: var(--radius-md);
  text-align: center;
}

.hierarchy .level-name {
  display: block;
  font-weight: var(--font-weight-semibold);
}

.hierarchy .level-desc {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.hierarchy .arrow {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.capabilities {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.capabilities .base-type {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: white;
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-semibold);
  color: #16a34a;
}

.capabilities .branches {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
  width: 100%;
}

.capabilities .branch {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.capabilities .addon {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-medium);
}

.capabilities .addon.concept {
  background: rgba(99, 102, 241, 0.1);
  color: #4f46e5;
}

.capabilities .addon.governance {
  background: rgba(234, 179, 8, 0.1);
  color: #ca8a04;
}

.capabilities .addon.both {
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.1) 50%, rgba(234, 179, 8, 0.1) 50%);
  color: var(--color-primary);
}

.capabilities .addon.advanced {
  background: rgba(168, 85, 247, 0.1);
  color: #9333ea;
}

.capabilities .result {
  font-weight: var(--font-weight-medium);
  color: #16a34a;
}

.capabilities .result.ccr {
  color: #9333ea;
}

/* Mapping Table */
.mapping-table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--spacing-lg) 0;
}

.mapping-table th,
.mapping-table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
  vertical-align: top;
}

.mapping-table th {
  background: var(--color-background);
  font-weight: var(--font-weight-semibold);
}

.mapping-table td small {
  color: var(--color-text-light);
}

.mapping-table td code {
  font-size: var(--font-size-xs);
  background: var(--color-background);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
}

.mapping-table td ul {
  margin: 0;
  padding-left: var(--spacing-md);
  font-size: var(--font-size-sm);
}

.effort {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

.effort.low {
  background: rgba(34, 197, 94, 0.15);
  color: #16a34a;
}

.effort.medium {
  background: rgba(234, 179, 8, 0.15);
  color: #ca8a04;
}

.effort.high {
  background: rgba(239, 68, 68, 0.15);
  color: #dc2626;
}

/* Decision Tree */
.decision-tree {
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.decision-node .question {
  padding: var(--spacing-md);
  background: rgba(13, 148, 136, 0.1);
  border-radius: var(--radius-md);
  text-align: center;
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-lg);
}

.decision-node .branches {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.decision-node .branch {
  padding: var(--spacing-md);
  background: var(--color-background);
  border-radius: var(--radius-md);
}

.decision-node .answer {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-accent);
  color: white;
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-sm);
}

.decision-node .outcome {
  margin-top: var(--spacing-sm);
  padding-left: var(--spacing-md);
}

.decision-node .outcome strong {
  color: var(--color-accent);
}

.decision-node .outcome p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: var(--spacing-xs) 0 0;
}

.sub-question {
  margin-top: var(--spacing-sm);
  padding: var(--spacing-sm);
  background: var(--color-surface);
  border-radius: var(--radius-sm);
}

.sub-question > span {
  display: block;
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.sub-branches {
  display: flex;
  gap: var(--spacing-md);
}

.sub-branch {
  flex: 1;
  padding: var(--spacing-sm);
  background: var(--color-background);
  border-radius: var(--radius-sm);
}

/* Requirements Grid */
.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.requirement-card {
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.requirement-card.ccr {
  border-color: rgba(147, 51, 234, 0.3);
  background: rgba(147, 51, 234, 0.05);
}

.requirement-card h4 {
  font-size: var(--font-size-sm);
  margin: 0 0 var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
}

.requirement-card.ccr h4 {
  color: #9333ea;
}

.requirement-card .reqs {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-xs);
}

.requirement-card .reqs li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-md);
  position: relative;
}

.requirement-card .reqs li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.requirement-card .reqs li.required::before {
  background: #16a34a;
}

.requirement-card .reqs li.optional::before {
  background: #ca8a04;
}

.requirement-card .reqs li.inherited::before {
  background: #6366f1;
}

.legend {
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-md);
  font-size: var(--font-size-sm);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.legend-item span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.legend-item .required {
  background: #16a34a;
}

.legend-item .optional {
  background: #ca8a04;
}

.legend-item .inherited {
  background: #6366f1;
}

/* Test Table */
.test-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.test-table th,
.test-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.test-table th {
  background: var(--color-background);
  font-weight: var(--font-weight-semibold);
}

.test-table code {
  font-size: var(--font-size-xs);
  background: var(--color-background);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
}

@media (max-width: 768px) {
  .comparison-visual {
    grid-template-columns: 1fr;
  }

  .requirements-grid {
    grid-template-columns: 1fr;
  }

  .sub-branches {
    flex-direction: column;
  }
}
</style>
