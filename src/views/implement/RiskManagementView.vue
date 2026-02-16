<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Risk Management</h1>
      <p class="page-lead">
        FERIN is designed to scale from simple personal registers to complex
        authoritative registries. The appropriate level of governance rigor
        depends on the risk profile of your register.
      </p>
    </header>

    <section class="content-section">
      <h2>What Is Register Risk?</h2>
      <p>
        Governance is not one-size-fits-all. A personal reference list needs
        different controls than a national safety-critical registry.
      </p>

      <div class="formula-box">
        <h3>Risk = Impact × Possibility</h3>
        <p>
          The appropriate governance level depends on both the potential impact
          of errors and the likelihood of problems occurring.
        </p>
      </div>

      <div class="factors-grid">
        <div class="factor-group">
          <h4>Impact Factors</h4>
          <ul>
            <li><strong>Who relies on this data?</strong> (internal team vs. industry vs. public)</li>
            <li><strong>What happens if data is wrong?</strong> (minor inconvenience vs. safety critical)</li>
            <li><strong>Is the register authoritative?</strong> (informative reference vs. legal requirement)</li>
            <li><strong>What is the scope of effect?</strong> (single project vs. organization vs. domain)</li>
          </ul>
        </div>

        <div class="factor-group">
          <h4>Possibility Factors</h4>
          <ul>
            <li><strong>How often do changes occur?</strong> (rare vs. frequent)</li>
            <li><strong>How complex is the content?</strong> (simple codes vs. complex definitions)</li>
            <li><strong>What is the source of proposals?</strong> (trusted internal vs. external public)</li>
            <li><strong>How mature are the validation rules?</strong> (well-defined vs. evolving)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Risk Levels</h2>

      <div class="risk-levels">
        <div class="risk-level low">
          <div class="risk-header">
            <span class="risk-badge">Low Risk</span>
            <h3>Informative, Limited Audience</h3>
          </div>
          <div class="risk-content">
            <p class="risk-characteristics">
              <strong>Characteristics:</strong> Informative, limited audience, easily corrected errors
            </p>
            <p class="risk-examples">
              <strong>Examples:</strong> Personal reference lists, internal project vocabularies, draft registries
            </p>
            <p class="risk-governance">
              <strong>Governance:</strong> Single person may hold all roles; automation acceptable
            </p>
            <p class="risk-documentation">
              <strong>Documentation:</strong> Minimal; change log sufficient
            </p>
          </div>
        </div>

        <div class="risk-level medium">
          <div class="risk-header">
            <span class="risk-badge">Medium Risk</span>
            <h3>Team or Organization Reliance</h3>
          </div>
          <div class="risk-content">
            <p class="risk-characteristics">
              <strong>Characteristics:</strong> Team/organization reliance, some external users, moderate correction cost
            </p>
            <p class="risk-examples">
              <strong>Examples:</strong> Department code lists, organization-wide taxonomies, partner reference data
            </p>
            <p class="risk-governance">
              <strong>Governance:</strong> Separate proposer and approver roles recommended; defined change process
            </p>
            <p class="risk-documentation">
              <strong>Documentation:</strong> Register specification, role assignments, escalation path
            </p>
          </div>
        </div>

        <div class="risk-level high">
          <div class="risk-header">
            <span class="risk-badge">High Risk</span>
            <h3>Authoritative, Public Reliance</h3>
          </div>
          <div class="risk-content">
            <p class="risk-characteristics">
              <strong>Characteristics:</strong> Authoritative, industry/public reliance, costly errors, legal/safety implications
            </p>
            <p class="risk-examples">
              <strong>Examples:</strong> National standards registries, safety-critical code lists, regulatory taxonomies
            </p>
            <p class="risk-governance">
              <strong>Governance:</strong> Full role separation; formal Control Body; appeal process essential
            </p>
            <p class="risk-documentation">
              <strong>Documentation:</strong> Comprehensive specification, audit requirements, stakeholder communication plan
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Deciding Your Governance Level</h2>

      <h3>Questions to Ask</h3>

      <div class="decision-questions">
        <div class="question">
          <h4>1. Who loses if this data is wrong?</h4>
          <ul class="answer-scale">
            <li><span class="answer">Just me</span> → Low</li>
            <li><span class="answer">My team</span> → Low-Medium</li>
            <li><span class="answer">My organization</span> → Medium</li>
            <li><span class="answer">Industry/public</span> → High</li>
          </ul>
        </div>

        <div class="question">
          <h4>2. How hard is it to fix an error?</h4>
          <ul class="answer-scale">
            <li><span class="answer">Immediate, no consequences</span> → Low</li>
            <li><span class="answer">Requires communication but limited impact</span> → Medium</li>
            <li><span class="answer">Requires recall, legal notice, safety alert</span> → High</li>
          </ul>
        </div>

        <div class="question">
          <h4>3. Is this register authoritative?</h4>
          <ul class="answer-scale">
            <li><span class="answer">No, it's one reference among many</span> → Low</li>
            <li><span class="answer">It's the primary reference for some users</span> → Medium</li>
            <li><span class="answer">It's THE official source</span> → High</li>
          </ul>
        </div>
      </div>

      <h3>Decision Matrix</h3>
      <table class="decision-table">
        <thead>
          <tr>
            <th>If Your Register Is...</th>
            <th>Then Consider...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Informative, personal</td>
            <td>Minimal governance; automation; single role</td>
          </tr>
          <tr>
            <td>Informative, shared</td>
            <td>Basic governance; documented roles; change tracking</td>
          </tr>
          <tr>
            <td>Authoritative, internal</td>
            <td>Standard governance; role separation; appeal process</td>
          </tr>
          <tr>
            <td>Authoritative, public</td>
            <td>Full governance; independent Control Body; formal processes</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Risk Mitigation Strategies</h2>

      <div class="mitigation-strategies">
        <div class="strategy low-strategy">
          <h3>For Low Risk</h3>
          <ul>
            <li>Version control / change history</li>
            <li>Simple documentation</li>
            <li>Backup and recovery</li>
          </ul>
        </div>

        <div class="strategy medium-strategy">
          <h3>For Medium Risk</h3>
          <p class="strategy-note">All low-risk strategies, plus:</p>
          <ul>
            <li>Defined change process</li>
            <li>Peer review before publication</li>
            <li>Stakeholder notification</li>
          </ul>
        </div>

        <div class="strategy high-strategy">
          <h3>For High Risk</h3>
          <p class="strategy-note">All medium-risk strategies, plus:</p>
          <ul>
            <li>Independent Control Body</li>
            <li>Formal appeal process</li>
            <li>Audit trail with signatures</li>
            <li>Stakeholder review periods</li>
            <li>Rollback procedures</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Governance Roles by Risk Level</h2>
      <p>
        The appropriateness of combining roles depends on your risk level.
        What would be unacceptable for a high-risk registry may be perfectly
        appropriate for a low-risk personal register.
      </p>

      <table class="roles-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Low Risk</th>
            <th>Medium Risk</th>
            <th>High Risk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Owner</td>
            <td>Optional</td>
            <td>Required</td>
            <td>Required</td>
          </tr>
          <tr>
            <td>Manager</td>
            <td>Can be Owner</td>
            <td>Separate from Owner</td>
            <td>Separate from Owner</td>
          </tr>
          <tr>
            <td>Control Body</td>
            <td>Can be Manager</td>
            <td>Separate from Manager</td>
            <td>Independent committee</td>
          </tr>
          <tr>
            <td>System Manager</td>
            <td>Can be anyone</td>
            <td>Should be technical</td>
            <td>Should be separate</td>
          </tr>
        </tbody>
      </table>

      <div class="key-insight">
        <strong>Key principle:</strong> Governance rigor should match risk level.
        Over-governing a low-risk register wastes resources; under-governing a
        high-risk register invites failure.
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/implement/governance">Governance Model</router-link>
          - Roles and processes
        </li>
        <li>
          <router-link to="/implement/register-specification">Register Specification</router-link>
          - Documenting your register
        </li>
        <li>
          <router-link to="/implement/actions">Actions Reference</router-link>
          - Managing content changes
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

.formula-box {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(30, 58, 95, 0.1) 100%);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
  text-align: center;
}

.formula-box h3 {
  font-size: var(--font-size-2xl);
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.formula-box p {
  margin: 0;
  color: var(--color-text-light);
}

.factors-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.factor-group {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.factor-group h4 {
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.factor-group ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.factor-group li {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.risk-levels {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.risk-level {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.risk-header {
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.risk-level.low .risk-header {
  background: rgba(34, 197, 94, 0.1);
  border-bottom: 2px solid rgba(34, 197, 94, 0.3);
}

.risk-level.medium .risk-header {
  background: rgba(234, 179, 8, 0.1);
  border-bottom: 2px solid rgba(234, 179, 8, 0.3);
}

.risk-level.high .risk-header {
  background: rgba(239, 68, 68, 0.1);
  border-bottom: 2px solid rgba(239, 68, 68, 0.3);
}

.risk-badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.risk-level.low .risk-badge {
  background: rgba(34, 197, 94, 0.2);
  color: #16a34a;
}

.risk-level.medium .risk-badge {
  background: rgba(234, 179, 8, 0.2);
  color: #ca8a04;
}

.risk-level.high .risk-badge {
  background: rgba(239, 68, 68, 0.2);
  color: #dc2626;
}

.risk-header h3 {
  margin: 0;
  font-size: var(--font-size-base);
}

.risk-content {
  padding: var(--spacing-lg);
}

.risk-content p {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.risk-content p:last-child {
  margin-bottom: 0;
}

.decision-questions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.question {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.question h4 {
  margin: 0 0 var(--spacing-md);
  color: var(--color-primary);
}

.answer-scale {
  list-style: none;
  padding: 0;
  margin: 0;
}

.answer-scale li {
  padding: var(--spacing-sm) 0;
  font-size: var(--font-size-sm);
}

.answer-scale .answer {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.decision-table {
  margin: var(--spacing-lg) 0;
}

.mitigation-strategies {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
}

.low-strategy h3 {
  color: #16a34a;
}

.medium-strategy h3 {
  color: #ca8a04;
}

.high-strategy h3 {
  color: #dc2626;
}

.strategy-note {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
  margin-bottom: var(--spacing-sm);
}

.strategy ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.strategy li {
  margin-bottom: var(--spacing-xs);
}

.roles-table {
  margin: var(--spacing-lg) 0;
}

.key-insight {
  background: rgba(13, 148, 136, 0.05);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-md);
  margin-top: var(--spacing-lg);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
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
  .factors-grid {
    grid-template-columns: 1fr;
  }

  .mitigation-strategies {
    grid-template-columns: 1fr;
  }
}
</style>
