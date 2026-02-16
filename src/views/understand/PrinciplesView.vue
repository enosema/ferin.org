<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Principles</h1>
      <p class="page-lead">
        FERIN is guided by six core principles that ensure registers remain
        useful, trustworthy, and maintainable over time.
      </p>
    </header>

    <section class="content-section">
      <div class="principles-overview">
        <p>
          These principles are not just abstract ideals—they have concrete
          implications for how you design and operate your register.
        </p>
      </div>

      <div class="principles-list">
        <div class="principle">
          <div class="principle-number">1</div>
          <div class="principle-content">
            <h2>Persistent Identification</h2>
            <div class="principle-box">
              <h4>What the Standard Says</h4>
              <blockquote>
                Identifiers shall be unique, persistent, and consistently assigned.
              </blockquote>
            </div>

            <h3>The Interpretation</h3>
            <p>
              "Persistent" means more than "doesn't change"—it means the identifier
              remains resolvable and meaningful indefinitely. This requires:
            </p>
            <ul>
              <li>
                <strong>Organizational commitment</strong>: The identifier scheme
                must survive organizational changes
              </li>
              <li>
                <strong>Technical infrastructure</strong>: Resolution mechanisms
                must remain operational
              </li>
              <li>
                <strong>Semantic stability</strong>: What the identifier refers to
                must remain comprehensible
              </li>
            </ul>

            <h3>Practical Guidance</h3>
            <ul>
              <li>Choose identifier schemes with proven persistence (e.g., DOI, URN)</li>
              <li>Document the identifier policy in your register specification</li>
              <li>Never reuse identifiers, even after content is deleted</li>
              <li>Ensure identifiers are independent of any single technology vendor</li>
            </ul>

            <p>
              See <router-link to="/implement/identifier-design">Identifier Design</router-link>
              for detailed guidance.
          </p>
          </div>
        </div>

        <div class="principle">
          <div class="principle-number">2</div>
          <div class="principle-content">
            <h2>Evolution Support</h2>
            <div class="principle-box">
              <h4>What the Standard Says</h4>
              <blockquote>
                Content and requirements can change over time, and the register
                must support this evolution.
              </blockquote>
            </div>

            <h3>The Interpretation</h3>
            <p>
              Evolution is inevitable—but how do you handle it when existing
              content becomes non-conformant with new requirements?
            </p>

            <h3>Practical Guidance</h3>
            <table class="guidance-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>New optional fields added</td>
                  <td>Existing content remains valid; new fields are optional</td>
                </tr>
                <tr>
                  <td>New validation rules added</td>
                  <td>Apply to new content; grandfather existing content with clear marking</td>
                </tr>
                <tr>
                  <td>Breaking changes to structure</td>
                  <td>Version the specification; allow migration path</td>
                </tr>
                <tr>
                  <td>Deprecated fields removed</td>
                  <td>Provide notice period; create migration tooling</td>
                </tr>
              </tbody>
            </table>

            <div class="warning-box">
              <strong>Anti-Pattern:</strong> Don't make all existing content invalid
              when requirements change. This breaks references and defeats the
              persistence principle.
            </div>
          </div>
        </div>

        <div class="principle">
          <div class="principle-number">3</div>
          <div class="principle-content">
            <h2>Change History Retention</h2>
            <div class="principle-box">
              <h4>What the Standard Says</h4>
              <blockquote>
                History of changes and associated metadata shall be retained.
              </blockquote>
            </div>

            <h3>The Interpretation</h3>
            <p>
              "Retained" raises several practical questions:
            </p>
            <ul>
              <li><strong>How long?</strong> The standard doesn't specify retention periods</li>
              <li><strong>What metadata?</strong> Minimum is date, actor, action; but more is better</li>
              <li><strong>What about unmanaged content?</strong> Where's the boundary?</li>
            </ul>

            <h3>Practical Guidance</h3>
            <p>
              <strong>Minimum change metadata:</strong>
            </p>
            <ul>
              <li>Timestamp of change</li>
              <li>Actor (who made the change)</li>
              <li>Action type (add, modify, invalidate, etc.)</li>
              <li>Justification or rationale</li>
              <li>Before and after values</li>
            </ul>

            <p>
              <strong>Unmanaged content boundary:</strong> Content becomes "managed"
              when it is:
            </p>
            <ul>
              <li>Subject to governance approval</li>
              <li>Exposed to external users</li>
              <li>Referenced by other systems</li>
            </ul>
          </div>
        </div>

        <div class="principle">
          <div class="principle-number">4</div>
          <div class="principle-content">
            <h2>Integrity Protection</h2>
            <div class="principle-box">
              <h4>What the Standard Says</h4>
              <blockquote>
                Content integrity shall be governed through defined processes.
              </blockquote>
            </div>

            <h3>The Interpretation</h3>
            <p>
              Integrity protection means:
            </p>
            <ul>
              <li>Changes only happen through approved processes</li>
              <li>Appropriate role separation exists</li>
              <li>Audit trails are maintained</li>
              <li>Unauthorized modifications are prevented</li>
            </ul>

            <h3>Role Separation Guidance</h3>
            <p>
              The appropriate level of role separation depends on your register's
              <strong>risk level</strong>—not the size of your organization.
            </p>
            <table class="guidance-table">
              <thead>
                <tr>
                  <th>Risk Level</th>
                  <th>Role Separation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Low Risk</td>
                  <td>Single person may hold multiple roles; document clearly</td>
                </tr>
                <tr>
                  <td>Medium Risk</td>
                  <td>Separate proposers and approvers; defined change process</td>
                </tr>
                <tr>
                  <td>High Risk</td>
                  <td>Full separation; independent Control Body; formal appeal process</td>
                </tr>
              </tbody>
            </table>
            <p>
              See <router-link to="/understand/risk-management">Risk Management</router-link>
              for detailed guidance on assessing your register's risk level.
            </p>
          </div>
        </div>

        <div class="principle">
          <div class="principle-number">5</div>
          <div class="principle-content">
            <h2>Compliance with Commitments</h2>
            <div class="principle-box">
              <h4>What the Standard Says</h4>
              <blockquote>
                Registers shall meet their stated commitments for access,
                persistence, and transparency.
              </blockquote>
            </div>

            <h3>The Interpretation</h3>
            <p>
              Commitments are promises you make to users. The standard defines
              three categories:
            </p>
            <ul>
              <li><strong>Access commitments</strong>: What can users access?</li>
              <li><strong>Persistence commitments</strong>: What is preserved?</li>
              <li><strong>Transparency commitments</strong>: What is visible?</li>
            </ul>

            <h3>Choosing Commitment Levels</h3>
            <table class="guidance-table">
              <thead>
                <tr>
                  <th>Use Case</th>
                  <th>Recommended Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Public reference data</td>
                  <td>High access, high persistence, high transparency</td>
                </tr>
                <tr>
                  <td>Internal code lists</td>
                  <td>Moderate access, high persistence, moderate transparency</td>
                </tr>
                <tr>
                  <td>Sensitive reference data</td>
                  <td>Limited access, high persistence, limited transparency</td>
                </tr>
              </tbody>
            </table>

            <p>
              See <router-link to="/reference/commitments">Commitments</router-link>
              for detailed specifications.
            </p>
          </div>
        </div>

        <div class="principle">
          <div class="principle-number">6</div>
          <div class="principle-content">
            <h2>Technological Neutrality</h2>
            <div class="principle-box">
              <h4>What the Standard Says</h4>
              <blockquote>
                The framework shall not be tied to specific technologies or
                implementation approaches.
              </blockquote>
            </div>

            <h3>The Interpretation</h3>
            <p>
              This means FERIN can be implemented using:
            </p>
            <ul>
              <li>Any database technology (relational, document, graph)</li>
              <li>Any API style (REST, GraphQL, gRPC)</li>
              <li>Any hosting model (cloud, on-premise, hybrid)</li>
            </ul>

            <h3>Database Mapping Guidance</h3>
            <table class="guidance-table">
              <thead>
                <tr>
                  <th>FERIN Concept</th>
                  <th>Relational DB</th>
                  <th>Document DB</th>
                  <th>Graph DB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Concept</td>
                  <td>Table with versions FK</td>
                  <td>Document with embedded versions</td>
                  <td>Node with version edges</td>
                </tr>
                <tr>
                  <td>Register Item</td>
                  <td>Table with status columns</td>
                  <td>Document with status fields</td>
                  <td>Node with status properties</td>
                </tr>
                <tr>
                  <td>Relations</td>
                  <td>Junction tables</td>
                  <td>Reference arrays</td>
                  <td>Native edges</td>
                </tr>
                <tr>
                  <td>History</td>
                  <td>Audit tables or temporal tables</td>
                  <td>Embedded history arrays</td>
                  <td>Version nodes with edges</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Principles in Practice</h2>
      <p>
        These principles often trade off against each other. For example:
      </p>
      <ul>
        <li>
          <strong>Evolution vs. Persistence</strong>: How do you evolve content
          while keeping identifiers persistent?
        </li>
        <li>
          <strong>Transparency vs. Efficiency</strong>: How much history is
          enough vs. too much overhead?
        </li>
        <li>
          <strong>Integrity vs. Flexibility</strong>: How strict should governance
          be without blocking necessary changes?
        </li>
      </ul>
      <p>
        The key is to document your decisions in your register specification
        and apply them consistently.
      </p>
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

.content-section > h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-accent);
}

.principles-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.principle {
  display: flex;
  gap: var(--spacing-lg);
}

.principle-number {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  color: var(--color-text-inverse);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  border-radius: 50%;
}

.principle-content {
  flex: 1;
}

.principle-content h2 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  padding: 0;
  border: none;
}

.principle-content h3 {
  font-size: var(--font-size-lg);
  margin: var(--spacing-lg) 0 var(--spacing-sm);
}

.principle-box {
  background: rgba(13, 148, 136, 0.05);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.principle-box h4 {
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
}

.principle-box blockquote {
  font-size: var(--font-size-base);
  font-style: italic;
  color: var(--color-text);
  margin: 0;
}

.guidance-table {
  margin: var(--spacing-md) 0;
}

.warning-box {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.warning-box strong {
  color: var(--color-error);
}

@media (max-width: 640px) {
  .principle {
    flex-direction: column;
  }

  .principle-number {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-lg);
  }
}
</style>
