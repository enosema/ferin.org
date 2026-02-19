<template>
  <article class="content-page">
    <header class="page-header">
      <div class="breadcrumb">
        <router-link to="/build/migrate">Migration Guide</router-link>
        <span class="separator">/</span>
        <span>Terminology Changes</span>
      </div>
      <h1>Terminology Changes</h1>
      <p class="page-lead">
        A comprehensive reference for terms that changed between editions.
      </p>
    </header>

    <section class="content-section">
      <h2>Renamed Terms</h2>
      <p>These terms were renamed but retain similar meanings:</p>

      <table class="terms-table">
        <thead>
          <tr>
            <th>2015 Term</th>
            <th>2026 Term</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Register item series</td>
            <td><strong>Concept</strong></td>
            <td>Now part of the concept plane</td>
          </tr>
          <tr>
            <td>Technical standard</td>
            <td><strong>Register specification</strong></td>
            <td>Document governing the register</td>
          </tr>
          <tr>
            <td>Registry (admitted)</td>
            <td><strong>Register system</strong> (preferred)</td>
            <td>Both terms still acceptable</td>
          </tr>
          <tr>
            <td>Submitting Organization</td>
            <td><strong>Proposer</strong></td>
            <td>Role that submits proposals</td>
          </tr>
          <tr>
            <td>Registry Manager</td>
            <td><strong>System Manager</strong></td>
            <td>Manages the register system</td>
          </tr>
          <tr>
            <td>Register User</td>
            <td><strong>User</strong></td>
            <td>Simplified</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>New Terms</h2>
      <p>These terms are new in 2026:</p>

      <table class="terms-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>FERIN</strong></td>
            <td>Framework for Extensible Registration of Information — the name of the framework</td>
          </tr>
          <tr>
            <td><strong>Concept plane</strong></td>
            <td>Layer for organizing concepts, statuses, and relations</td>
          </tr>
          <tr>
            <td><strong>Content plane</strong></td>
            <td>Layer where data instances are stored and managed</td>
          </tr>
          <tr>
            <td><strong>Concept</strong></td>
            <td>Unit of knowledge created by unique combination of characteristics</td>
          </tr>
          <tr>
            <td><strong>Concept version</strong></td>
            <td>Representation of concept at a particular point in time</td>
          </tr>
          <tr>
            <td><strong>Concept definition</strong></td>
            <td>Concept that describes information requirements and properties</td>
          </tr>
          <tr>
            <td><strong>Realised concept</strong></td>
            <td>Instance of concept materialized into concrete information</td>
          </tr>
          <tr>
            <td><strong>Functional identifier</strong></td>
            <td>Redirectable identifier that always reflects original intent</td>
          </tr>
          <tr>
            <td><strong>Object identifier</strong></td>
            <td>Non-redirectable identifier permanently assigned to object</td>
          </tr>
          <tr>
            <td><strong>Commitments</strong></td>
            <td>Set of promises made by register to its users</td>
          </tr>
          <tr>
            <td><strong>Composite register</strong></td>
            <td>Register composed of one or more internal registers</td>
          </tr>
          <tr>
            <td><strong>Managed content</strong></td>
            <td>Information contained in register item that is governed</td>
          </tr>
          <tr>
            <td><strong>Unmanaged content</strong></td>
            <td>Information associated with register item NOT governed by register</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Changed Meanings</h2>
      <p>These terms exist in both editions but have different scopes or meanings:</p>

      <table class="terms-table">
        <thead>
          <tr>
            <th>Term</th>
            <th>2015 Meaning</th>
            <th>2026 Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Registration</strong></td>
            <td>Assignment of unique identifier</td>
            <td>Broader: includes concept and content management</td>
          </tr>
          <tr>
            <td><strong>Valid</strong></td>
            <td>Single status value</td>
            <td>One dimension of status (validity)</td>
          </tr>
          <tr>
            <td><strong>Invalid</strong></td>
            <td>Single status value</td>
            <td>One dimension of status (validity)</td>
          </tr>
          <tr>
            <td><strong>Identifier</strong></td>
            <td>Single identifier per item</td>
            <td>Two types: object and functional</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Removed Terms</h2>
      <p>These terms from 2015 are no longer used in 2026:</p>

      <table class="terms-table">
        <thead>
          <tr>
            <th>Removed Term</th>
            <th>Replacement / Reason</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Deprecated</strong></td>
            <td>Use "invalid" instead</td>
          </tr>
          <tr>
            <td><strong>Submitted</strong></td>
            <td>Proposals exist outside register; no longer a status</td>
          </tr>
          <tr>
            <td><strong>RE_Register</strong></td>
            <td>Concept and content separated into distinct models</td>
          </tr>
          <tr>
            <td><strong>RE_RegisterItem</strong></td>
            <td>Split into concept and content planes</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Conformance Class Terminology</h2>

      <div class="conformance-mapping">
        <div class="old-classes">
          <h3>2015 Conformance Classes</h3>
          <ul>
            <li><code>core</code></li>
            <li><code>extended-schema</code></li>
            <li><code>hierarchical</code></li>
          </ul>
        </div>

        <div class="arrow">→</div>

        <div class="new-classes">
          <h3>2026 Register Types</h3>
          <ul>
            <li><code>/req/content-register</code></li>
            <li><code>/req/concept-register</code></li>
            <li><code>/req/governed-content-register</code></li>
            <li><code>/req/governed-concept-register</code></li>
            <li><code>/req/comprehensive-concept-register</code></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Next Steps</h2>
      <div class="next-steps-inline">
        <router-link to="/build/migrate/checklist" class="btn-primary">
          Full Migration Checklist →
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

.terms-table {
  width: 100%;
  margin: var(--spacing-lg) 0;
  border-collapse: collapse;
}

.terms-table th,
.terms-table td {
  padding: var(--spacing-md);
  text-align: left;
  border: 1px solid var(--color-border);
}

.terms-table th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
}

.terms-table td:first-child {
  white-space: nowrap;
}

.terms-table strong {
  color: var(--color-accent);
}

.conformance-mapping {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-xl);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
}

.old-classes,
.new-classes {
  flex: 1;
}

.old-classes h3,
.new-classes h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
}

.old-classes ul,
.new-classes ul {
  margin: 0;
  padding-left: var(--spacing-xl);
}

.old-classes li,
.new-classes li {
  margin-bottom: var(--spacing-xs);
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
}

.arrow {
  font-size: var(--font-size-2xl);
  color: var(--color-accent);
  align-self: center;
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

@media (max-width: 768px) {
  .conformance-mapping {
    flex-direction: column;
  }

  .arrow {
    transform: rotate(90deg);
    align-self: center;
  }
}
</style>
