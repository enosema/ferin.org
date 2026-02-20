<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Risk Management</h1>
      <p class="page-lead">
        FERIN is fundamentally a risk management framework for authoritative
        information. Every feature—versioning, actions, statuses, governance—
        exists to manage information risks. This topic is outside the scope of
        ISO 19135 but is essential for register owners to understand.
      </p>
    </header>

    <section class="content-section">
      <h2>Why Information Registers Exist</h2>
      <p>
        An information register exists <strong>for risk management</strong>.
        Organizations create registers because they need to manage risks related
        to information:
      </p>

      <div class="info-risks-grid">
        <div class="info-risk">
          <h4>Persistence</h4>
          <p>Risk of information loss, broken references, unavailable history</p>
        </div>
        <div class="info-risk">
          <h4>Accuracy</h4>
          <p>Risk of wrong decisions based on incorrect data</p>
        </div>
        <div class="info-risk">
          <h4>Authority</h4>
          <p>Risk of using wrong or untrusted sources</p>
        </div>
        <div class="info-risk">
          <h4>Timeliness</h4>
          <p>Risk of using outdated or stale information</p>
        </div>
      </div>

      <p>
        FERIN provides the framework to address these risks systematically.
        The register owner's job is to understand which risks matter most for
        their context and apply appropriate controls.
      </p>
    </section>

    <section class="content-section">
      <h2>FERIN Features as Risk Controls</h2>
      <p>
        Every FERIN capability serves a risk management purpose. Understanding
        this connection helps you apply the right level of rigor:
      </p>

      <table class="risk-controls-table">
        <thead>
          <tr>
            <th>FERIN Feature</th>
            <th>Risk It Manages</th>
            <th>How It Works</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><router-link to="/build/versioning">Versioning</router-link></td>
            <td>Change risk, history loss, broken references</td>
            <td>Preserves all versions; changes create new versions rather than overwriting</td>
          </tr>
          <tr>
            <td><router-link to="/build/actions">Actions</router-link></td>
            <td>Incorrect, outdated, or obsolete information</td>
            <td>Controlled operations: Invalidate, Supersede, Retire, etc.</td>
          </tr>
          <tr>
            <td><router-link to="/reference/statuses">Statuses</router-link></td>
            <td>User confusion about reliability</td>
            <td>Clear signals: Valid, Invalid, Deprecated, Retired</td>
          </tr>
          <tr>
            <td><router-link to="/build/governance">Governance</router-link></td>
            <td>Fraud, error, bias, inconsistency</td>
            <td>Role separation, review processes, appeal mechanisms</td>
          </tr>
          <tr>
            <td><router-link to="/learn/commitments">Commitments</router-link></td>
            <td>Unclear expectations, trust erosion</td>
            <td>Explicit promises about availability, accuracy, persistence</td>
          </tr>
          <tr>
            <td><router-link to="/build/identifier-design">Identifiers</router-link></td>
            <td>Broken references, lost citations</td>
            <td>Persistent, unique identifiers that don't change</td>
          </tr>
          <tr>
            <td><router-link to="/build/register-specification">Specification</router-link></td>
            <td>Undocumented decisions, scope creep</td>
            <td>Formal documentation of scope, policies, commitments</td>
          </tr>
        </tbody>
      </table>

      <div class="key-insight">
        <strong>Key insight:</strong> FERIN doesn't just "have" risk management
        features—FERIN IS a risk management framework. The question is not
        whether to manage risk, but how much rigor to apply based on your
        specific risk profile.
      </div>
    </section>

    <section class="content-section">
      <h2>Risk Determines Configuration</h2>
      <p>
        Understanding your risk profile determines how you configure FERIN:
      </p>

      <div class="risk-determines">
        <div class="determines-item">
          <div class="determines-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
          </div>
          <h3>Commitments</h3>
          <p>
            What you promise to users—availability, accuracy, response times—
            depends on your risk level.
            <router-link to="/learn/commitments">See Commitments</router-link>
          </p>
        </div>

        <div class="determines-item">
          <div class="determines-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </div>
          <h3>Change Thresholds</h3>
          <p>
            What counts as a "substantive" change requiring a new version
            depends on your risk profile.
            <router-link to="/build/versioning">See Versioning</router-link>
          </p>
        </div>

        <div class="determines-item">
          <div class="determines-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>Governance Rigor</h3>
          <p>
            How many roles, how much separation, how formal the processes—all
            scale with risk.
            <router-link to="/build/governance">See Governance</router-link>
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Risk Management Frameworks</h2>
      <p>
        Risk management is a well-studied discipline. While FERIN does not
        mandate a specific framework, register owners should be aware of
        established approaches:
      </p>

      <div class="frameworks-grid">
        <div class="framework">
          <h4>ISO 31000</h4>
          <p>
            <strong>Risk Management — Guidelines</strong><br>
            The International Standard for risk management principles and
            processes. Provides a framework applicable to any organization.
          </p>
        </div>

        <div class="framework">
          <h4>NIST RMF</h4>
          <p>
            <strong>Risk Management Framework</strong><br>
            US government approach particularly relevant for information
            systems and security-focused registers.
          </p>
        </div>

        <div class="framework">
          <h4>COBIT</h4>
          <p>
            <strong>Control Objectives for Information Technologies</strong><br>
            Framework for IT governance and management, useful for
            technology-focused registers.
          </p>
        </div>
      </div>

      <div class="note-box">
        <strong>Note:</strong> FERIN does not prescribe which risk management
        framework to use. The register owner should select an approach
        appropriate for their context and document it in the
        <router-link to="/build/register-specification">Register Specification</router-link>.
      </div>
    </section>

    <section class="content-section">
      <h2>Risk Aspects</h2>
      <p>
        A register may face multiple types of risk simultaneously. Consider
        which aspects are relevant to your register:
      </p>

      <div class="aspects-grid">
        <div class="aspect">
          <h4>Quality (ISO 9001)</h4>
          <p>Data accuracy, consistency, fitness for purpose</p>
        </div>

        <div class="aspect">
          <h4>Information Security (ISO 27001)</h4>
          <p>Confidentiality, integrity, availability of data</p>
        </div>

        <div class="aspect">
          <h4>Privacy (ISO 27701)</h4>
          <p>Personal data protection, consent management</p>
        </div>

        <div class="aspect">
          <h4>Business Continuity (ISO 22301)</h4>
          <p>Availability during disruptions, disaster recovery</p>
        </div>

        <div class="aspect">
          <h4>Financial</h4>
          <p>Cost of errors, liability, compliance penalties</p>
        </div>

        <div class="aspect">
          <h4>Regulatory</h4>
          <p>Legal compliance, mandatory reporting, audit requirements</p>
        </div>

        <div class="aspect">
          <h4>Reputational</h4>
          <p>Trust, credibility, stakeholder confidence</p>
        </div>

        <div class="aspect">
          <h4>Environmental (ISO 14001)</h4>
          <p>Environmental impact, sustainability considerations</p>
        </div>
      </div>

      <p>
        A single register may need to consider multiple aspects. For example,
        a healthcare code list registry might have quality, security, privacy,
        and regulatory aspects all relevant to its risk profile.
      </p>
    </section>

    <section class="content-section">
      <h2>Risk = Impact × Possibility</h2>

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
      <h2>Risk Determines Commitments</h2>
      <p>
        Your register's <router-link to="/learn/commitments">commitments</router-link>
        are contractual promises to users and stakeholders. The appropriate
        commitments depend on your risk level:
      </p>

      <table class="commitments-table">
        <thead>
          <tr>
            <th>Commitment</th>
            <th>Low Risk</th>
            <th>Medium Risk</th>
            <th>High Risk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Availability</td>
            <td>Best effort</td>
            <td>Documented uptime</td>
            <td>SLA with penalties</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td>No guarantees</td>
            <td>Peer reviewed</td>
            <td>Formal validation, audit trail</td>
          </tr>
          <tr>
            <td>Response time</td>
            <td>As resources allow</td>
            <td>Documented timeframe</td>
            <td>Binding response periods</td>
          </tr>
          <tr>
            <td>Change notice</td>
            <td>None required</td>
            <td>Notification period</td>
            <td>Formal review period, stakeholder input</td>
          </tr>
          <tr>
            <td>Appeal process</td>
            <td>Not required</td>
            <td>Documented process</td>
            <td>Formal process with timeline</td>
          </tr>
          <tr>
            <td>History retention</td>
            <td>Current version only</td>
            <td>Version history</td>
            <td>Permanent archive, audit trail</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Risk Determines Change Thresholds</h2>
      <p>
        The distinction between <router-link to="/build/versioning">substantive
        and non-substantive changes</router-link>—which determines when a new
        version is required—depends on your risk profile:
      </p>

      <table class="thresholds-table">
        <thead>
          <tr>
            <th>Change Type</th>
            <th>Low Risk Threshold</th>
            <th>High Risk Threshold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Definition change</td>
            <td>Only major meaning changes are substantive</td>
            <td>Any clarification is substantive</td>
          </tr>
          <tr>
            <td>Typo fix</td>
            <td>Never substantive</td>
            <td>Substantive if it changes interpretation</td>
          </tr>
          <tr>
            <td>Format change</td>
            <td>Never substantive</td>
            <td>Substantive if affects systems</td>
          </tr>
          <tr>
            <td>Status change</td>
            <td>Version if impacts users</td>
            <td>Always version</td>
          </tr>
          <tr>
            <td>Relation change</td>
            <td>Version if structural</td>
            <td>Always version</td>
          </tr>
        </tbody>
      </table>

      <div class="key-insight">
        <strong>Key principle:</strong> High-risk registers have a lower
        threshold for what constitutes a "substantive" change. What might be
        a minor correction in a personal reference list could require a full
        governance review in a safety-critical registry.
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
            <p class="risk-commitments">
              <strong>Commitments:</strong> Minimal—best effort availability, no formal guarantees
            </p>
            <p class="risk-changes">
              <strong>Change threshold:</strong> Only major meaning changes require versions
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
            <p class="risk-commitments">
              <strong>Commitments:</strong> Moderate—documented availability, peer review, notification periods
            </p>
            <p class="risk-changes">
              <strong>Change threshold:</strong> Definition changes and status changes require versions
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
            <p class="risk-commitments">
              <strong>Commitments:</strong> Extensive—SLAs, formal validation, stakeholder review, binding timelines
            </p>
            <p class="risk-changes">
              <strong>Change threshold:</strong> Any meaningful change requires version and review
            </p>
            <p class="risk-documentation">
              <strong>Documentation:</strong> Comprehensive specification, audit requirements, stakeholder communication plan
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Documenting Your Risk Profile</h2>
      <p>
        Your risk profile should be documented in your
        <router-link to="/build/register-specification">Register Specification</router-link>.
        This documentation serves as a contract with users and a guide for
        governance decisions.
      </p>

      <h3>What to Document</h3>
      <div class="documentation-checklist">
        <div class="checklist-item">
          <h4>1. Risk Assessment</h4>
          <ul>
            <li>Identified risks (what could go wrong?)</li>
            <li>Risk aspects considered (quality, security, privacy, etc.)</li>
            <li>Impact assessment (who is affected, how severely?)</li>
            <li>Likelihood assessment (how probable is each risk?)</li>
          </ul>
        </div>

        <div class="checklist-item">
          <h4>2. Risk Framework</h4>
          <ul>
            <li>Which risk management framework(s) are used</li>
            <li>How risks are evaluated and prioritized</li>
            <li>Risk tolerance thresholds (what is acceptable?)</li>
          </ul>
        </div>

        <div class="checklist-item">
          <h4>3. Mitigation Strategies</h4>
          <ul>
            <li>How each identified risk is addressed</li>
            <li>Governance controls in place</li>
            <li>Monitoring and review processes</li>
          </ul>
        </div>

        <div class="checklist-item">
          <h4>4. Derived Decisions</h4>
          <ul>
            <li>Commitments made (based on risk level)</li>
            <li>Substantive change threshold (based on risk level)</li>
            <li>Governance structure (based on risk level)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Decision Questions</h2>
      <p>Use these questions to help determine your risk level:</p>

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

        <div class="question">
          <h4>4. What risk aspects apply?</h4>
          <ul class="answer-scale">
            <li><span class="answer">None specifically</span> → Low</li>
            <li><span class="answer">1-2 aspects (quality, etc.)</span> → Medium</li>
            <li><span class="answer">Multiple aspects (security, privacy, regulatory)</span> → High</li>
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
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/versioning">Versioning</router-link>
          - Managing change risk through versions
        </li>
        <li>
          <router-link to="/build/actions">Actions</router-link>
          - Controlled operations for risk mitigation
        </li>
        <li>
          <router-link to="/reference/statuses">Statuses</router-link>
          - Risk signals to users
        </li>
        <li>
          <router-link to="/learn/commitments">Commitments</router-link>
          - What you promise users (scales with risk)
        </li>
        <li>
          <router-link to="/build/governance">Governance Model</router-link>
          - Roles and processes (rigor depends on risk)
        </li>
        <li>
          <router-link to="/build/register-specification">Register Specification</router-link>
          - Documenting your risk profile
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

.info-risks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.info-risk {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(30, 58, 95, 0.1) 100%);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
}

.info-risk h4 {
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
  font-size: var(--font-size-base);
}

.info-risk p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.risk-controls-table {
  margin: var(--spacing-lg) 0;
}

.risk-controls-table th:first-child,
.risk-controls-table td:first-child {
  text-align: left;
  font-weight: var(--font-weight-medium);
}

.risk-controls-table td {
  font-size: var(--font-size-sm);
  vertical-align: top;
}

.risk-determines {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.determines-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
}

.determines-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(30, 58, 95, 0.1) 100%);
  border-radius: var(--radius-lg);
  margin: 0 auto var(--spacing-md);
  color: var(--color-accent);
}

.determines-item h3 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
}

.determines-item p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.determines-item a {
  font-size: var(--font-size-xs);
}

.frameworks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.framework {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.framework h4 {
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.framework p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.note-box {
  background: rgba(13, 148, 136, 0.05);
  border: 1px solid rgba(13, 148, 136, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.aspects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.aspect {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  text-align: center;
}

.aspect h4 {
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
}

.aspect p {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
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

.commitments-table,
.thresholds-table,
.roles-table {
  margin: var(--spacing-lg) 0;
}

.commitments-table th:first-child,
.thresholds-table th:first-child,
.roles-table th:first-child {
  text-align: left;
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

.documentation-checklist {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.checklist-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.checklist-item h4 {
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.checklist-item ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.checklist-item li {
  margin-bottom: var(--spacing-xs);
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
  .info-risks-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .risk-determines {
    grid-template-columns: 1fr;
  }

  .frameworks-grid {
    grid-template-columns: 1fr;
  }

  .aspects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .factors-grid {
    grid-template-columns: 1fr;
  }

  .documentation-checklist {
    grid-template-columns: 1fr;
  }
}
</style>
