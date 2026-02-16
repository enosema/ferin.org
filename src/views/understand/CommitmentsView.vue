<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Commitments</h1>
      <p class="page-lead">
        What a register promises to provide: access, persistence, and
        transparency. These commitments define the trustworthiness of a register.
      </p>
    </header>

    <section class="content-section">
      <h2>Commitments Scale with Risk</h2>
      <p>
        The commitments a register makes to its users are not fixed—they
        depend on the register's <router-link to="/implement/risk-management">risk
        profile</router-link>. A low-risk personal register may offer minimal
        commitments, while a high-risk authoritative registry must provide
        extensive guarantees.
      </p>

      <div class="risk-commitments-summary">
        <div class="risk-commitment low">
          <h4>Low Risk Registers</h4>
          <p>Minimal commitments: best effort availability, no formal guarantees, limited history</p>
        </div>
        <div class="risk-commitment medium">
          <h4>Medium Risk Registers</h4>
          <p>Moderate commitments: documented availability, peer review, notification periods</p>
        </div>
        <div class="risk-commitment high">
          <h4>High Risk Registers</h4>
          <p>Extensive commitments: SLAs, formal validation, stakeholder review, binding timelines</p>
        </div>
      </div>

      <p>
        When defining your commitments, consider who relies on your data and
        what happens if those commitments are not met. Document your commitments
        in your <router-link to="/implement/register-specification">Register Specification</router-link>
        as a contract with your users.
      </p>
    </section>

    <section class="content-section">
      <h2>Commitment Categories</h2>
      <p>
        FERIN defines three categories of commitments:
      </p>

      <div class="commitment-grid">
        <div class="commitment-card">
          <div class="commitment-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3>Access</h3>
          <p>What users can retrieve from the register</p>
        </div>

        <div class="commitment-card">
          <div class="commitment-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            </svg>
          </div>
          <h3>Persistence</h3>
          <p>What is preserved over time</p>
        </div>

        <div class="commitment-card">
          <div class="commitment-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h3>Transparency</h3>
          <p>What is visible to users</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Access Commitments</h2>

      <table class="commitments-table">
        <thead>
          <tr>
            <th>Commitment</th>
            <th>Description</th>
            <th>Levels</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Metadata Access</td>
            <td>Can users access item metadata (identifiers, dates, status)?</td>
            <td>
              <span class="level low">Low</span>: Internal only
              <span class="level medium">Medium</span>: Registered users
              <span class="level high">High</span>: Public
            </td>
          </tr>
          <tr>
            <td>Content Access</td>
            <td>Can users access the actual content of items?</td>
            <td>
              <span class="level low">Low</span>: Summary only
              <span class="level medium">Medium</span>: Full content with restrictions
              <span class="level high">High</span>: Full content publicly
            </td>
          </tr>
          <tr>
            <td>Historic Access</td>
            <td>Can users access previous versions and change history?</td>
            <td>
              <span class="level low">Low</span>: Current only
              <span class="level medium">Medium</span>: Limited history
              <span class="level high">High</span>: Full history
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Persistence Commitments</h2>

      <table class="commitments-table">
        <thead>
          <tr>
            <th>Commitment</th>
            <th>Description</th>
            <th>Levels</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Identifier Persistence</td>
            <td>Will identifiers remain resolvable?</td>
            <td>
              <span class="level low">Low</span>: Best effort
              <span class="level medium">Medium</span>: Guaranteed for defined period
              <span class="level high">High</span>: Indefinite guarantee with succession plan
            </td>
          </tr>
          <tr>
            <td>Content Persistence</td>
            <td>Will content be preserved?</td>
            <td>
              <span class="level low">Low</span>: Current version only
              <span class="level medium">Medium</span>: Versions preserved
              <span class="level high">High</span>: Full audit trail
            </td>
          </tr>
          <tr>
            <td>Historic Persistence</td>
            <td>Will change history be preserved?</td>
            <td>
              <span class="level low">Low</span>: Minimal metadata
              <span class="level medium">Medium</span>: Change summaries
              <span class="level high">High</span>: Complete change records
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Transparency Commitments</h2>

      <table class="commitments-table">
        <thead>
          <tr>
            <th>Commitment</th>
            <th>Description</th>
            <th>Levels</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Metadata Transparency</td>
            <td>Is governance metadata visible?</td>
            <td>
              <span class="level low">Low</span>: Basic info
              <span class="level medium">Medium</span>: Roles and dates
              <span class="level high">High</span>: Full provenance
            </td>
          </tr>
          <tr>
            <td>Content Transparency</td>
            <td>Is the content's source and derivation visible?</td>
            <td>
              <span class="level low">Low</span>: Content only
              <span class="level medium">Medium</span>: Source indicated
              <span class="level high">High</span>: Full derivation chain
            </td>
          </tr>
          <tr>
            <td>Historic Transparency</td>
            <td>Is the change process visible?</td>
            <td>
              <span class="level low">Low</span>: Final results only
              <span class="level medium">Medium</span>: Change summaries
              <span class="level high">High</span>: Full change records with rationale
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Choosing Commitment Levels</h2>

      <h3>Decision Matrix</h3>
      <table class="decision-matrix">
        <thead>
          <tr>
            <th>Use Case</th>
            <th>Access</th>
            <th>Persistence</th>
            <th>Transparency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Internal code list</td>
            <td>Medium</td>
            <td>Low</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Partner-shared reference data</td>
            <td>Medium</td>
            <td>Medium</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Public API reference</td>
            <td>High</td>
            <td>Medium</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Regulatory compliance</td>
            <td>Medium</td>
            <td>High</td>
            <td>High</td>
          </tr>
          <tr>
            <td>National/international standard</td>
            <td>High</td>
            <td>High</td>
            <td>High</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Append-Only Registers</h2>
      <p>
        High persistence commitment often implies an append-only model:
      </p>

      <h3>Append-Only Views</h3>
      <div class="append-only-diagram">
        <pre class="diagram">
Time ──────────────────────────────────────────►

                    ┌─────────┐
                    │ v1      │  Initial version
                    │ valid   │
                    └────┬────┘
                         │
                         ▼
                    ┌─────────┐
     ┌──────────────│ v2      │◄──────┐
     │              │ valid   │       │
     │              └─────────┘       │
     │                                │
     │ supersedes                supersedes
     │                                │
     ▼                                │
┌─────────┐                      ┌─────────┐
│ v1      │                      │ v3      │  Current
│superseded                      │ valid   │
└─────────┘                      └─────────┘

All versions remain accessible; current view shows only valid items.
        </pre>
      </div>

      <h3>Implementation</h3>
      <ul>
        <li><strong>Never delete:</strong> Mark as invalid/superseded instead</li>
        <li><strong>Immutable versions:</strong> Once created, versions don't change</li>
        <li><strong>Views:</strong> Provide views that filter to current, valid content</li>
        <li><strong>Audit:</strong> Every change creates an audit record</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Compliance Verification</h2>
      <p>
        How to verify that commitments are being met:
      </p>

      <h3>Verification Checklist</h3>
      <ul class="verification-list">
        <li>☐ Access levels documented and enforced</li>
        <li>☐ Persistence policies documented</li>
        <li>☐ Retention periods defined and monitored</li>
        <li>☐ Succession plan exists (for high persistence)</li>
        <li>☐ Change history accessible per commitment level</li>
        <li>☐ Regular audits of commitment compliance</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/implement/risk-management">Risk Management</router-link>
          - How risk level determines your commitments
        </li>
        <li>
          <router-link to="/implement/register-specification">Register Specification</router-link>
          - Documenting commitments
        </li>
        <li>
          <router-link to="/understand/register-types">Register Types</router-link>
          - CCR requires high commitments
        </li>
        <li>
          <router-link to="/understand/principles">Principles</router-link>
          - Compliance with commitments principle
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

.commitment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.commitment-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  text-align: center;
}

.commitment-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(30, 58, 95, 0.1) 100%);
  border-radius: 50%;
  color: var(--color-accent);
}

.commitment-card h3 {
  margin: 0 0 var(--spacing-sm);
}

.commitment-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.commitments-table td:last-child {
  font-size: var(--font-size-sm);
}

.level {
  display: inline-block;
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  margin-right: var(--spacing-sm);
}

.level.low {
  background: rgba(239, 68, 68, 0.1);
  color: var(--color-error);
}

.level.medium {
  background: rgba(245, 158, 11, 0.1);
  color: var(--color-warning);
}

.level.high {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
}

.decision-matrix {
  margin: var(--spacing-lg) 0;
}

.append-only-diagram {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.diagram {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  color: var(--color-text-inverse);
  margin: 0;
  white-space: pre;
  line-height: 1.4;
}

.verification-list {
  list-style: none;
  padding: 0;
}

.verification-list li {
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-xs);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
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
  .commitment-grid {
    grid-template-columns: 1fr;
  }

  .risk-commitments-summary {
    grid-template-columns: 1fr;
  }
}

.risk-commitments-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.risk-commitment {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.risk-commitment h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.risk-commitment p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.risk-commitment.low {
  border-left: 3px solid #22c55e;
}

.risk-commitment.low h4 {
  color: #16a34a;
}

.risk-commitment.medium {
  border-left: 3px solid #eab308;
}

.risk-commitment.medium h4 {
  color: #ca8a04;
}

.risk-commitment.high {
  border-left: 3px solid #ef4444;
}

.risk-commitment.high h4 {
  color: #dc2626;
}
</style>
