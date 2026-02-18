<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Getting Started</h1>
      <p class="page-lead">
        A practical guide to planning and implementing a FERIN-compliant register.
      </p>
    </header>

    <section class="content-section">
      <h2>Quick Start Overview</h2>
      <p>
        Building a FERIN-compliant register involves six key steps:
      </p>

      <div class="steps-overview">
        <div class="step">
          <span class="step-number">1</span>
          <div class="step-content">
            <h3>Define Scope and Purpose</h3>
            <p>What will your register contain, and why?</p>
          </div>
        </div>
        <div class="step">
          <span class="step-number">2</span>
          <div class="step-content">
            <h3>Choose Register Type</h3>
            <p>Which capabilities do you need?</p>
          </div>
        </div>
        <div class="step">
          <span class="step-number">3</span>
          <div class="step-content">
            <h3>Design Identifier Scheme</h3>
            <p>How will items be uniquely identified?</p>
          </div>
        </div>
        <div class="step">
          <span class="step-number">4</span>
          <div class="step-content">
            <h3>Establish Governance</h3>
            <p>Who manages, approves, and uses the register?</p>
          </div>
        </div>
        <div class="step">
          <span class="step-number">5</span>
          <div class="step-content">
            <h3>Create Specification</h3>
            <p>Document all decisions in a register specification</p>
          </div>
        </div>
        <div class="step">
          <span class="step-number">6</span>
          <div class="step-content">
            <h3>Implement and Populate</h3>
            <p>Build or configure the system, add initial content</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Step 1: Define Scope and Purpose</h2>
      <p>
        Before anything else, clearly define what your register will contain and why.
      </p>

      <h3>Questions to Answer</h3>
      <ul>
        <li><strong>Domain:</strong> What subject area does the register cover?</li>
        <li><strong>Content:</strong> What specific items will be included?</li>
        <li><strong>Boundaries:</strong> What is explicitly out of scope?</li>
        <li><strong>Users:</strong> Who will use this register?</li>
        <li><strong>Use cases:</strong> What problems does it solve?</li>
      </ul>

      <div class="example-box">
        <h4>Example: Country Codes Register</h4>
        <ul>
          <li><strong>Domain:</strong> Geographic identifiers</li>
          <li><strong>Content:</strong> ISO 3166-1 country codes and names</li>
          <li><strong>Boundaries:</strong> Subdivisions (ISO 3166-2) not included</li>
          <li><strong>Users:</strong> Application developers, data integrators</li>
          <li><strong>Use cases:</strong> Address validation, user location selection</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Step 2: Choose Register Type</h2>
      <p>
        Refer to <router-link to="/implement/register-types">Register Types</router-link>
        for detailed guidance. Key decision points:
      </p>

      <div class="decision-grid">
        <div class="decision-item">
          <h4>Do definitions evolve?</h4>
          <p>
            If the meaning of items changes over time, you need Concept capability.
          </p>
        </div>
        <div class="decision-item">
          <h4>Do you need audit trails?</h4>
          <p>
            If you must prove who approved what, you need Governance capability.
          </p>
        </div>
        <div class="decision-item">
          <h4>Will external users depend on this?</h4>
          <p>
            If so, consider CCR for full commitments.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Step 3: Design Identifier Scheme</h2>
      <p>
        Identifiers are critical—they must be unique and persistent. See
        <router-link to="/implement/identifier-design">Identifier Design</router-link>
        for detailed guidance.
      </p>

      <h3>Key Decisions</h3>
      <table class="decisions-table">
        <thead>
          <tr>
            <th>Decision</th>
            <th>Options</th>
            <th>Guidance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scheme type</td>
            <td>UUID, URN, URL, DOI, custom</td>
            <td>Match to persistence requirements</td>
          </tr>
          <tr>
            <td>Namespace</td>
            <td>Organization-based, domain-based</td>
            <td>Ensure uniqueness across all registers</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>Opaque, hierarchical, semantic</td>
            <td>Opaque is safest for persistence</td>
          </tr>
          <tr>
            <td>Resolution</td>
            <td>None, HTTP redirect, URN resolver</td>
            <td>HTTP URLs are most convenient</td>
          </tr>
        </tbody>
      </table>

      <div class="example-box">
        <h4>Example Identifier Patterns</h4>
        <pre><code>UUID:     550e8400-e29b-41d4-a716-446655440000
URN:      urn:iso:std:iso:19135:country:US
URL:      https://register.example.org/country/US
DOI:      10.1234/register.country.US
Custom:   REG-2024-00001</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Step 4: Establish Governance</h2>
      <p>
        Define who does what. See <router-link to="/implement/governance">Governance</router-link>
        for role definitions.
      </p>

      <h3>Minimum Roles to Fill</h3>
      <ul>
        <li><strong>Owner:</strong> Accountable for the register</li>
        <li><strong>Manager:</strong> Day-to-day operations</li>
        <li><strong>Control Body:</strong> Approves changes (if governed)</li>
      </ul>

      <h3>Governance Decisions</h3>
      <ul>
        <li>Who can submit proposals?</li>
        <li>What approval process applies?</li>
        <li>How are disputes resolved?</li>
        <li>How are changes communicated?</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Step 5: Create Specification</h2>
      <p>
        Document all decisions in a register specification. Use the
        <router-link to="/implement/register-specification">Register Specification</router-link>
        template as a starting point.
      </p>

      <h3>Specification Sections</h3>
      <div class="spec-checklist">
        <div class="spec-item">
          <span class="check">☐</span>
          <span>Title and description</span>
        </div>
        <div class="spec-item">
          <span class="check">☐</span>
          <span>Scope and purpose</span>
        </div>
        <div class="spec-item">
          <span class="check">☐</span>
          <span>Identifier scheme</span>
        </div>
        <div class="spec-item">
          <span class="check">☐</span>
          <span>Content requirements (attributes)</span>
        </div>
        <div class="spec-item">
          <span class="check">☐</span>
          <span>Governance model (roles, processes)</span>
        </div>
        <div class="spec-item">
          <span class="check">☐</span>
          <span>Commitments (access, persistence, transparency)</span>
        </div>
        <div class="spec-item">
          <span class="check">☐</span>
          <span>Conformance claims</span>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Step 6: Implement and Populate</h2>
      <p>
        With planning complete, build or configure your register system.
      </p>

      <h3>Implementation Options</h3>
      <div class="options-grid">
        <div class="option">
          <h4>Build Custom</h4>
          <p>Full control, high effort. Best for complex requirements.</p>
        </div>
        <div class="option">
          <h4>Use Existing Platform</h4>
          <p>Adapt existing tools. Moderate effort, some constraints.</p>
        </div>
        <div class="option">
          <h4>FERIN-Compliant Software</h4>
          <p>Purpose-built. Low effort, may have licensing costs.</p>
        </div>
      </div>

      <h3>Initial Population</h3>
      <p>
        If migrating existing data, see the
        <router-link to="/upgrade">Upgrade Guide</router-link>.
        Key considerations:
      </p>
      <ul>
        <li>Should bulk import bypass normal governance?</li>
        <li>How will existing content be identified?</li>
        <li>What change history should be created?</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Decision Points Summary</h2>
      <table class="summary-table">
        <thead>
          <tr>
            <th>Decision</th>
            <th>Options</th>
            <th>See</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simple vs governed</td>
            <td>Content only vs governed register</td>
            <td>Register Types</td>
          </tr>
          <tr>
            <td>Versioning scheme</td>
            <td>Semantic, date-based, sequential</td>
            <td>Versioning</td>
          </tr>
          <tr>
            <td>Identifier type</td>
            <td>UUID, URN, URL, DOI</td>
            <td>Identifier Design</td>
          </tr>
          <tr>
            <td>Role assignments</td>
            <td>Who fills each role</td>
            <td>Governance</td>
          </tr>
          <tr>
            <td>Commitment level</td>
            <td>Access, persistence, transparency levels</td>
            <td>Commitments</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Next Steps</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/implement/identifier-design">Identifier Design</router-link>
          - Designing persistent identifiers
        </li>
        <li>
          <router-link to="/implement/versioning">Versioning</router-link>
          - Managing content changes
        </li>
        <li>
          <router-link to="/implement/register-specification">Register Specification</router-link>
          - Complete template and samples
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

.steps-overview {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin: var(--spacing-xl) 0;
}

.step {
  display: flex;
  gap: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.step-number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-bold);
  border-radius: 50%;
}

.step-content h3 {
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-lg);
}

.step-content p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.decision-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.decision-item {
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.decision-item h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-sm);
}

.decision-item p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.decisions-table,
.summary-table {
  margin: var(--spacing-md) 0;
}

.example-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.example-box h4 {
  margin-bottom: var(--spacing-sm);
}

.example-box pre {
  background: var(--color-primary-dark);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin: 0;
}

.example-box code {
  color: var(--color-text-inverse);
}

.spec-checklist {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin: var(--spacing-md) 0;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
}

.spec-item .check {
  color: var(--color-accent);
  font-weight: var(--font-weight-bold);
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.option {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.option h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-sm);
}

.option p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
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
  .decision-grid,
  .options-grid {
    grid-template-columns: 1fr;
  }
}
</style>
