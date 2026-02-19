<template>
  <article class="content-page">
    <header class="page-header">
      <div class="breadcrumb">
        <router-link to="/build/migrate">Migration Guide</router-link>
        <span class="separator">/</span>
        <span>Register Specification</span>
      </div>
      <h1>Register Specification Update</h1>
      <p class="page-lead">
        Defining your register's purpose, scope, governance, and commitments.
      </p>
    </header>

    <section class="content-section">
      <h2>What Changed</h2>
      <p>
        In ISO 19135-1:2015, your register was governed by a "technical standard" —
        a document that specified what the register contained and how it operated.
      </p>
      <p>
        In ISO 19135:2026, this is now called a <strong>register specification</strong>
        and has more specific requirements. The good news: most of your existing
        technical standard content can be reused.
      </p>
    </section>

    <section class="content-section">
      <h2>Required Content</h2>
      <p>
        Your register specification <em>must</em> include:
      </p>

      <div class="requirement-cards">
        <div class="requirement-card">
          <h3>1. Purpose and Scope</h3>
          <p>What does your register contain and why does it exist?</p>
          <div class="example">
            <strong>Example:</strong>
            <p>
              "This register contains coordinate reference systems (CRS) for use in
              geographic information systems. It includes projected, geographic, and
              vertical coordinate systems."
            </p>
          </div>
          <div class="from-2015">
            <strong>From 2015:</strong> You likely already have this. Review and update as needed.
          </div>
        </div>

        <div class="requirement-card">
          <h3>2. Roles and Responsibilities</h3>
          <p>Who owns, manages, and can propose changes to the register?</p>
          <ul>
            <li><strong>Register Owner</strong> — Organization that established the register</li>
            <li><strong>Register Manager</strong> — Responsible for day-to-day management</li>
            <li><strong>Control Body</strong> — Technical experts who approve proposals (if applicable)</li>
            <li><strong>Proposers</strong> — Who can submit proposals</li>
          </ul>
          <div class="from-2015">
            <strong>From 2015:</strong> You likely already have Owner, Manager, Control Body, and Submitting Organizations defined.
          </div>
        </div>

        <div class="requirement-card">
          <h3>3. Governance Processes</h3>
          <p>How are proposals handled, approved, and appealed?</p>
          <ul>
            <li>Proposal submission requirements</li>
            <li>Review and approval workflow</li>
            <li>Time limits for decisions</li>
            <li>Appeal process (if applicable)</li>
          </ul>
          <div class="from-2015">
            <strong>From 2015:</strong> Your existing governance procedures apply. Document them clearly.
          </div>
        </div>

        <div class="requirement-card new">
          <h3>4. Commitments <span class="badge new">NEW</span></h3>
          <p>What promises does your register make to users?</p>
          <p>You must declare your commitment level for:</p>
          <ul>
            <li><strong>Access</strong> — How is content accessible? (metadata/content/historic)</li>
            <li><strong>Persistence</strong> — How long is content retained?</li>
            <li><strong>Transparency</strong> — What change information is available?</li>
          </ul>
          <router-link to="/learn/commitments" class="link-more">
            Learn about commitments →
          </router-link>
        </div>

        <div class="requirement-card new">
          <h3>5. Concept Organization <span class="badge new">NEW</span></h3>
          <p>How are your concepts structured and organized?</p>
          <ul>
            <li>What concept system do you use?</li>
            <li>What concept types exist?</li>
            <li>What relations between concepts are allowed?</li>
          </ul>
          <router-link to="/build/migrate/concepts" class="link-more">
            Document your concept model →
          </router-link>
        </div>

        <div class="requirement-card">
          <h3>6. Data Requirements</h3>
          <p>What content must register items contain?</p>
          <ul>
            <li>Required vs. optional attributes</li>
            <li>Data types and constraints</li>
            <li>Register item class definitions</li>
          </ul>
          <div class="from-2015">
            <strong>From 2015:</strong> Your item class definitions remain valid. Document them in the specification.
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Minimal Commitments Declaration</h2>
      <p>
        For a basic migration, you can declare <strong>basic commitments</strong>:
      </p>

      <div class="commitment-table">
        <div class="commitment-row">
          <div class="commitment-name">Access</div>
          <div class="commitment-level">Content access</div>
          <div class="commitment-desc">Content is accessible through identifiers</div>
        </div>
        <div class="commitment-row">
          <div class="commitment-name">Persistence</div>
          <div class="commitment-level">Identifier persistence</div>
          <div class="commitment-desc">Identifiers remain valid and resolve</div>
        </div>
        <div class="commitment-row">
          <div class="commitment-name">Transparency</div>
          <div class="commitment-level">Metadata transparency</div>
          <div class="commitment-desc">Change metadata is available</div>
        </div>
      </div>

      <div class="callout">
        <h4>Higher Commitments</h4>
        <p>
          If your register has stricter requirements (e.g., full audit trail, append-only
          history), declare higher commitment levels. This gives users confidence in
          what they can rely on.
        </p>
      </div>
    </section>

    <section class="content-section">
      <h2>Register Specification Template</h2>
      <p>Use this structure for your register specification:</p>

      <div class="template">
        <pre><code>Register Specification for [Register Name]
=============================================

1. Purpose and Scope
   - Description of what the register contains
   - Intended use cases and audience
   - Boundaries (what is NOT included)

2. Roles and Responsibilities
   - Register Owner: [Organization]
   - Register Manager: [Organization/Person]
   - Control Body: [Committee/None]
   - Proposers: [Who can submit]

3. Governance Processes
   - Proposal submission requirements
   - Review timeline (e.g., 90 days for decision)
   - Approval criteria
   - Appeal process

4. Commitments
   - Access: [metadata/content/historic]
   - Persistence: [identifier/traceable/persistent/append-only]
   - Transparency: [metadata/content/historic]

5. Concept Organization
   - Concept system used
   - Concept types defined
   - Allowed relations between concepts

6. Data Requirements
   - Register item classes
   - Required attributes per class
   - Constraints and validation rules

7. Change History
   - Version history of this specification
   - Amendment process</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Next Steps</h2>
      <div class="next-steps-inline">
        <router-link to="/build/migrate/governance" class="btn-primary">
          Step 2: Governance Update →
        </router-link>
        <router-link to="/build/migrate/concepts" class="btn-secondary">
          Document Concepts →
        </router-link>
      </div>
    </section>
  </article>
</template>

<script setup>
</script>

<style scoped>
.content-page {
  max-width: 900px;
  margin: 0 auto;
}

.breadcrumb {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.breadcrumb a {
  color: var(--color-accent);
  text-decoration: none;
}

.breadcrumb .separator {
  margin: 0 var(--spacing-xs);
}

.page-header {
  margin-bottom: var(--spacing-2xl);
}

.page-lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
}

.content-section {
  margin-bottom: var(--spacing-2xl);
}

.content-section h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
}

.requirement-cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.requirement-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.requirement-card.new {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, var(--color-surface) 100%);
}

.requirement-card h3 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.badge.new {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-accent);
  color: white;
  border-radius: var(--radius-sm);
}

.requirement-card p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.requirement-card ul {
  margin: var(--spacing-md) 0;
  padding-left: var(--spacing-xl);
}

.requirement-card li {
  margin-bottom: var(--spacing-xs);
}

.example {
  background: var(--color-background);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.example strong {
  display: block;
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xs);
}

.example p {
  margin: 0;
  font-style: italic;
  color: var(--color-text);
}

.from-2015 {
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin-top: var(--spacing-md);
  font-size: var(--font-size-sm);
}

.from-2015 strong {
  color: #16a34a;
}

.link-more {
  display: inline-flex;
  align-items: center;
  color: var(--color-accent);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  margin-top: var(--spacing-md);
}

.link-more:hover {
  text-decoration: underline;
}

.commitment-table {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin: var(--spacing-lg) 0;
}

.commitment-row {
  display: grid;
  grid-template-columns: 150px 180px 1fr;
  border-bottom: 1px solid var(--color-border);
}

.commitment-row:last-child {
  border-bottom: none;
}

.commitment-row > div {
  padding: var(--spacing-md);
}

.commitment-name {
  font-weight: var(--font-weight-semibold);
  background: var(--color-surface);
}

.commitment-level {
  color: var(--color-accent);
  font-weight: var(--font-weight-medium);
}

.commitment-desc {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.callout {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.callout h4 {
  margin: 0 0 var(--spacing-sm);
  color: #2563eb;
}

.callout p {
  margin: 0;
}

.template {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.template pre {
  margin: 0;
  padding: var(--spacing-xl);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  overflow-x: auto;
}

.next-steps-inline {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  color: var(--color-text-inverse);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: transparent;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.btn-secondary:hover {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}

@media (max-width: 768px) {
  .commitment-row {
    grid-template-columns: 1fr;
  }
}
</style>
