<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Governance</h1>
      <p class="page-lead">
        Governance defines who can do what, through what processes. Effective
        governance ensures integrity while enabling necessary changes.
      </p>
    </header>

    <section class="content-section">
      <h2>Register Lifecycle</h2>
      <p>
        A register progresses through three main phases:
      </p>

      <div class="lifecycle-phases">
        <div class="phase">
          <div class="phase-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14"></path>
              <path d="M5 12h14"></path>
            </svg>
          </div>
          <h3>Establishment</h3>
          <p>Creating the register and its governance framework</p>
          <ul>
            <li>Define scope and purpose</li>
            <li>Create register specification</li>
            <li>Assign initial roles</li>
            <li>Set up technical infrastructure</li>
            <li>Initial population (if applicable)</li>
          </ul>
        </div>

        <div class="phase">
          <div class="phase-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            </svg>
          </div>
          <h3>Operation</h3>
          <p>Ongoing management and evolution of content</p>
          <ul>
            <li>Process proposals</li>
            <li>Approve or reject changes</li>
            <li>Maintain content quality</li>
            <li>Handle appeals</li>
            <li>Monitor conformance</li>
          </ul>
        </div>

        <div class="phase">
          <div class="phase-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </div>
          <h3>Decommission</h3>
          <p>Orderly retirement of the register</p>
          <ul>
            <li>Communicate decommission plan</li>
            <li>Archive content</li>
            <li>Retire identifiers appropriately</li>
            <li>Document successor (if any)</li>
            <li>Maintain archival access</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section" id="roles">
      <h2>Roles</h2>
      <p>
        FERIN defines six roles, each with specific responsibilities:
      </p>

      <div class="roles-grid">
        <div class="role-card">
          <h3>Register Owner</h3>
          <p class="role-summary">Accountable for the register's existence and direction</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Define register scope and purpose</li>
            <li>Approve register specification</li>
            <li>Assign Register Manager</li>
            <li>Make final decisions on disputes</li>
            <li>Authorize decommission</li>
          </ul>
          <h4>Typical Assignment</h4>
          <p>Senior stakeholder, organization head, or standards body</p>
        </div>

        <div class="role-card">
          <h3>Register Manager</h3>
          <p class="role-summary">Operational management of the register</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Day-to-day register operations</li>
            <li>Coordinate proposal processing</li>
            <li>Maintain register documentation</li>
            <li>Report to Register Owner</li>
            <li>Manage user communications</li>
          </ul>
          <h4>Typical Assignment</h4>
          <p>Program manager, data governance lead, or standards administrator</p>
        </div>

        <div class="role-card">
          <h3>Control Body</h3>
          <p class="role-summary">Decision-making authority for content changes</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Review and decide on proposals</li>
            <li>Ensure changes meet criteria</li>
            <li>Document decisions and rationale</li>
            <li>Handle escalated issues</li>
          </ul>
          <h4>Typical Assignment</h4>
          <p>Committee, panel of experts, or designated authority</p>
        </div>

        <div class="role-card">
          <h3>System Manager</h3>
          <p class="role-summary">Technical operation of the register system</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Maintain technical infrastructure</li>
            <li>Ensure availability and performance</li>
            <li>Implement approved changes</li>
            <li>Manage backups and recovery</li>
          </ul>
          <h4>Typical Assignment</h4>
          <p>IT operations, DevOps team, or platform administrator</p>
        </div>

        <div class="role-card">
          <h3>Proposer</h3>
          <p class="role-summary">Submits requests for changes to the register</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Prepare complete proposals</li>
            <li>Provide justification and evidence</li>
            <li>Respond to clarification requests</li>
            <li>Accept or appeal decisions</li>
          </ul>
          <h4>Typical Assignment</h4>
          <p>Any authorized stakeholder, domain expert, or external contributor</p>
        </div>

        <div class="role-card">
          <h3>User</h3>
          <p class="role-summary">Consumes register content</p>
          <h4>Responsibilities</h4>
          <ul>
            <li>Use content according to terms</li>
            <li>Report issues or errors</li>
            <li>Stay informed of changes</li>
            <li>Provide feedback</li>
          </ul>
          <h4>Typical Assignment</h4>
          <p>Anyone who accesses register content</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Multi-Role Entities</h2>
      <p>
        A common question: <strong>Can one person or organization hold multiple roles?</strong>
      </p>

      <div class="risk-link-box">
        <p>
          The answer depends on your register's <strong>risk level</strong>.
          A low-risk informative register has different requirements than a
          high-risk authoritative registry.
        </p>
        <router-link to="/learn/risk-management" class="risk-link">
          See Risk Management for guidance on assessing your register's risk level →
        </router-link>
      </div>

      <h3>Role Combinations by Risk Level</h3>

      <div class="risk-levels-grid">
        <div class="risk-level-card">
          <h4>Low Risk Registers</h4>
          <p class="risk-context">Personal, informative, easily corrected</p>
          <ul>
            <li>Single person may hold multiple or all roles</li>
            <li>Document who holds what roles</li>
            <li>Maintain basic audit trail</li>
            <li>Consider automation for governance steps</li>
          </ul>
        </div>

        <div class="risk-level-card">
          <h4>Medium Risk Registers</h4>
          <p class="risk-context">Team reliance, some external users</p>
          <ul>
            <li>Separate proposer and approver roles</li>
            <li>Owner and Manager may overlap</li>
            <li>Defined change process required</li>
            <li>Documented escalation path</li>
          </ul>
        </div>

        <div class="risk-level-card">
          <h4>High Risk Registers</h4>
          <p class="risk-context">Authoritative, public reliance, costly errors</p>
          <ul>
            <li>Separate Manager and Control Body</li>
            <li>Independent Control Body recommended</li>
            <li>Formal appeal process with impartial Owner</li>
            <li>Full audit trail with signatures</li>
          </ul>
        </div>
      </div>

      <h3>The Key Principle</h3>
      <div class="key-principle">
        <p>
          <strong>Governance rigor should match risk level.</strong>
        </p>
        <p>
          Over-governing a low-risk register wastes resources and creates
          unnecessary bureaucracy. Under-governing a high-risk register
          invites errors, disputes, and potential harm.
        </p>
      </div>

      <h3>Small Organization Guidance</h3>
      <p>
        If your organization is too small to fill all roles with different people,
        assess your risk level first:
      </p>
      <ul>
        <li>
          <strong>Low risk:</strong> One person can hold multiple roles with
          proper documentation
        </li>
        <li>
          <strong>Medium risk:</strong> Aim for at least separation between
          proposers and approvers; consider external help for appeals
        </li>
        <li>
          <strong>High risk:</strong> Find external parties for Control Body
          role; the governance integrity is worth the coordination cost
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Processes</h2>

      <h3>Proposal Process</h3>
      <div class="process-flow">
        <div class="process-step">
          <span class="step-number">1</span>
          <div class="step-content">
            <h4>Submit</h4>
            <p>Proposer submits a proposal with required information</p>
          </div>
        </div>
        <div class="process-step">
          <span class="step-number">2</span>
          <div class="step-content">
            <h4>Validate</h4>
            <p>Manager checks completeness and eligibility</p>
          </div>
        </div>
        <div class="process-step">
          <span class="step-number">3</span>
          <div class="step-content">
            <h4>Review</h4>
            <p>Control Body evaluates the proposal</p>
          </div>
        </div>
        <div class="process-step">
          <span class="step-number">4</span>
          <div class="step-content">
            <h4>Decide</h4>
            <p>Control Body approves, rejects, or requests changes</p>
          </div>
        </div>
        <div class="process-step">
          <span class="step-number">5</span>
          <div class="step-content">
            <h4>Implement</h4>
            <p>Approved changes are applied to the register</p>
          </div>
        </div>
        <div class="process-step">
          <span class="step-number">6</span>
          <div class="step-content">
            <h4>Communicate</h4>
            <p>Proposer and users are notified of the outcome</p>
          </div>
        </div>
      </div>

      <h3>Appeal Process</h3>
      <p>
        When a proposal is rejected, proposers may appeal:
      </p>
      <ol>
        <li>Proposer submits appeal with additional justification</li>
        <li>Appeal is reviewed by a higher authority (typically Owner)</li>
        <li>Decision is final or can be escalated to external arbitration</li>
      </ol>
    </section>

    <section class="content-section">
      <h2>Governance Documentation</h2>
      <p>
        Effective governance requires clear documentation. Your register
        specification should include:
      </p>

      <div class="documentation-checklist">
        <div class="checklist-item">
          <h4>Role Assignments</h4>
          <p>Who holds each role, with contact information and term limits</p>
        </div>
        <div class="checklist-item">
          <h4>Proposal Requirements</h4>
          <p>What information must a proposal include to be considered complete</p>
        </div>
        <div class="checklist-item">
          <h4>Review Criteria</h4>
          <p>What criteria does the Control Body use to evaluate proposals</p>
        </div>
        <div class="checklist-item">
          <h4>Decision Timeline</h4>
          <p>Expected timeframes for each stage of the process</p>
        </div>
        <div class="checklist-item">
          <h4>Appeal Procedure</h4>
          <p>How to appeal a decision and what the appeal process looks like</p>
        </div>
        <div class="checklist-item">
          <h4>Communication Plan</h4>
          <p>How changes are communicated to users</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Decommissioning</h2>
      <p>
        The standard provides limited guidance on decommissioning. Here's a
        practical checklist:
      </p>

      <div class="decommission-checklist">
        <h3>Pre-Decommission</h3>
        <ul>
          <li>☐ Identify successor register (if any)</li>
          <li>☐ Notify all known users</li>
          <li>☐ Set decommission date with adequate notice</li>
          <li>☐ Stop accepting new proposals</li>
        </ul>

        <h3>At Decommission</h3>
        <ul>
          <li>☐ Export full content snapshot</li>
          <li>☐ Document final state of all items</li>
          <li>☐ Archive governance records</li>
          <li>☐ Update identifier resolution (if applicable)</li>
        </ul>

        <h3>Post-Decommission</h3>
        <ul>
          <li>☐ Maintain archival access (per commitments)</li>
          <li>☐ Redirect queries to successor (if applicable)</li>
          <li>☐ Document decommission in register history</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Common Anti-Patterns</h2>
      <div class="anti-patterns">
        <div class="anti-pattern">
          <h4>Role Confusion</h4>
          <p>
            <strong>Problem:</strong> One person holds incompatible roles
            (e.g., proposes and approves their own changes).
          </p>
          <p>
            <strong>Consequence:</strong> Lack of accountability, potential for abuse.
          </p>
        </div>
        <div class="anti-pattern">
          <h4>Governance Bypass</h4>
          <p>
            <strong>Problem:</strong> Urgent changes skip the proposal process.
          </p>
          <p>
            <strong>Consequence:</strong> Erosion of governance integrity.
          </p>
          <p>
            <strong>Better:</strong> Define an expedited process for emergencies.
          </p>
        </div>
        <div class="anti-pattern">
          <h4>Decision Black Hole</h4>
          <p>
            <strong>Problem:</strong> Proposals disappear without response.
          </p>
          <p>
            <strong>Consequence:</strong> Loss of trust, frustrated proposers.
          </p>
          <p>
            <strong>Better:</strong> Set and communicate decision timelines.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/learn/risk-management">Risk Management</router-link>
          - Match governance rigor to your register's risk level
        </li>
        <li>
          <router-link to="/learn/framework">Framework Overview</router-link>
          - Data, Governance, and Compliance pillars
        </li>
        <li>
          <router-link to="/build/actions">Actions Reference</router-link>
          - Operations for managing content
        </li>
        <li>
          <router-link to="/build/register-specification">Register Specification</router-link>
          - Documenting your governance model
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

.lifecycle-phases {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.phase {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.phase-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(30, 58, 95, 0.1) 100%);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
}

.phase h3 {
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-sm);
}

.phase p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.phase ul {
  font-size: var(--font-size-sm);
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.role-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.role-card h3 {
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-xs);
  color: var(--color-accent);
}

.role-summary {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
  margin-bottom: var(--spacing-md);
}

.role-card h4 {
  font-size: var(--font-size-sm);
  margin: var(--spacing-md) 0 var(--spacing-xs);
}

.role-card ul {
  font-size: var(--font-size-sm);
}

.role-card p {
  font-size: var(--font-size-sm);
}

.combinations-table {
  margin: var(--spacing-md) 0;
}

.combinations-table tr.acceptable td:first-child {
  color: var(--color-success);
}

.combinations-table tr.caution td:first-child {
  color: var(--color-warning);
}

.combinations-table tr.unacceptable td:first-child {
  color: var(--color-error);
}

.risk-link-box {
  background: rgba(13, 148, 136, 0.05);
  border: 1px solid rgba(13, 148, 136, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.risk-link-box p {
  margin: 0 0 var(--spacing-sm);
}

.risk-link {
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
  text-decoration: none;
}

.risk-link:hover {
  text-decoration: underline;
}

.risk-levels-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.risk-level-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.risk-level-card h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-xs);
  color: var(--color-accent);
}

.risk-context {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  font-style: italic;
  margin-bottom: var(--spacing-md);
}

.risk-level-card ul {
  font-size: var(--font-size-sm);
  margin: 0;
  padding-left: var(--spacing-lg);
}

.risk-level-card li {
  margin-bottom: var(--spacing-xs);
}

.key-principle {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(30, 58, 95, 0.1) 100%);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.key-principle p {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
}

.key-principle p:last-child {
  margin-bottom: 0;
}

.process-flow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.process-step {
  display: flex;
  gap: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
}

.step-number {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-bold);
  border-radius: 50%;
  font-size: var(--font-size-sm);
}

.step-content h4 {
  font-size: var(--font-size-sm);
  margin: 0 0 var(--spacing-xs);
}

.step-content p {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
}

.documentation-checklist {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.checklist-item {
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.checklist-item h4 {
  font-size: var(--font-size-sm);
  margin: 0 0 var(--spacing-xs);
}

.checklist-item p {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
}

.decommission-checklist {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.decommission-checklist h3 {
  font-size: var(--font-size-base);
  margin-top: var(--spacing-md);
}

.decommission-checklist h3:first-child {
  margin-top: 0;
}

.decommission-checklist ul {
  font-size: var(--font-size-sm);
}

.anti-patterns {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.anti-pattern {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.anti-pattern h4 {
  font-size: var(--font-size-base);
  color: var(--color-error);
  margin: 0 0 var(--spacing-sm);
}

.anti-pattern p {
  font-size: var(--font-size-sm);
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
  .lifecycle-phases {
    grid-template-columns: 1fr;
  }

  .roles-grid {
    grid-template-columns: 1fr;
  }

  .process-flow {
    grid-template-columns: 1fr;
  }

  .documentation-checklist {
    grid-template-columns: 1fr;
  }

  .risk-levels-grid {
    grid-template-columns: 1fr;
  }
}
</style>
