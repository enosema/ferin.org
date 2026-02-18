<template>
  <article class="content-page">
    <header class="page-header">
      <h1>From ISO 19135-1:2015 to ISO 19135:2026</h1>
      <p class="page-lead">
        The minimal migration path for existing registers.
      </p>
    </header>

    <nav class="toc">
      <h3>In This Section</h3>
      <ul>
        <li><router-link to="/implement/migrate/minimal">Minimal Migration</router-link></li>
        <li><router-link to="/implement/migrate/register-specification">Register Specification</router-link></li>
        <li><router-link to="/implement/migrate/governance">Governance Update</router-link></li>
        <li><router-link to="/implement/migrate/concepts">Concepts & Relations</router-link></li>
        <li><router-link to="/implement/migrate/statuses">Status Mapping</router-link></li>
        <li><router-link to="/implement/migrate/terminology">Terminology Changes</router-link></li>
        <li><router-link to="/implement/migrate/checklist">Full Checklist</router-link></li>
      </ul>
    </nav>

    <section class="content-section">
      <h2>Why This Migration Guide Exists</h2>
      <p>
        ISO 19135:2026 introduces the <strong>FERIN framework</strong>—a significant
        evolution from the 2015 edition. While the core concepts of registration remain,
        the structure, terminology, and requirements have changed substantially.
      </p>
      <p>
        This guide focuses on <strong>practical migration</strong>: what you actually
        need to do to bring an existing ISO 19135-1:2015 compliant register into
        conformance with ISO 19135:2026.
      </p>
    </section>

    <section class="content-section">
      <h2>What Changed at a Glance</h2>

      <div class="change-grid">
        <div class="change-card major">
          <span class="change-badge">Major</span>
          <h3>Two-Plane Architecture</h3>
          <p>
            Concepts (meaning) are now separate from content (data).
            This enables independent evolution of semantics and structure.
          </p>
        </div>

        <div class="change-card major">
          <span class="change-badge">Major</span>
          <h3>Capability-Based Conformance</h3>
          <p>
            No longer "Core/Extended/Hierarchical" but modular capabilities.
            Choose what your register needs.
          </p>
        </div>

        <div class="change-card major">
          <span class="change-badge">Major</span>
          <h3>Commitments Framework</h3>
          <p>
            Explicit promises about access, persistence, and transparency.
            Must be declared in your register specification.
          </p>
        </div>

        <div class="change-card moderate">
          <span class="change-badge moderate">Moderate</span>
          <h3>Status Model</h3>
          <p>
            Single status values replaced by independent dimensions
            (validity, publication, redaction, deletion).
          </p>
        </div>

        <div class="change-card moderate">
          <span class="change-badge moderate">Moderate</span>
          <h3>Terminology</h3>
          <p>
            15+ terms renamed or redefined. "Register item series" → "Concept",
            "Technical standard" → "Register specification".
          </p>
        </div>

        <div class="change-card info">
          <span class="change-badge info">Note</span>
          <h3>Technology Neutral</h3>
          <p>
            XML schema removed. Implement using any technology.
            Focus on capabilities, not encodings.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Conformance Class Mapping</h2>
      <p>
        Your 2015 conformance class maps directly to a 2026 register type:
      </p>

      <table class="mapping-table">
        <thead>
          <tr>
            <th>2015 Conformance</th>
            <th>2026 Register Type</th>
            <th>Migration Effort</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Core</strong></td>
            <td>Content Register</td>
            <td><span class="effort low">Low</span></td>
          </tr>
          <tr>
            <td><strong>Extended</strong></td>
            <td>Governed Content Register</td>
            <td><span class="effort medium">Medium</span></td>
          </tr>
          <tr>
            <td><strong>Hierarchical</strong></td>
            <td>Governed Concept Register</td>
            <td><span class="effort medium">Medium</span></td>
          </tr>
        </tbody>
      </table>

      <div class="callout">
        <h4>Good News</h4>
        <p>
          A <strong>Governed Content Register</strong> in 2026 is explicitly designed
          to be compatible with 2015 edition registers. If you were compliant with
          2015 Extended, you're most of the way there.
        </p>
      </div>
    </section>

    <section class="content-section">
      <h2>Next Steps</h2>
      <div class="next-steps">
        <router-link to="/implement/migrate/minimal" class="next-step-card primary">
          <span class="step-number">1</span>
          <div class="step-content">
            <h4>Minimal Migration</h4>
            <p>What's the absolute minimum work required?</p>
          </div>
        </router-link>

        <router-link to="/implement/migrate/register-specification" class="next-step-card">
          <span class="step-number">2</span>
          <div class="step-content">
            <h4>Register Specification</h4>
            <p>Define your register's purpose, scope, and commitments.</p>
          </div>
        </router-link>

        <router-link to="/implement/migrate/governance" class="next-step-card">
          <span class="step-number">3</span>
          <div class="step-content">
            <h4>Governance Update</h4>
            <p>Align roles and processes with new requirements.</p>
          </div>
        </router-link>

        <router-link to="/implement/migrate/concepts" class="next-step-card">
          <span class="step-number">4</span>
          <div class="step-content">
            <h4>Concepts & Relations</h4>
            <p>Document your concept model and allowed relations.</p>
          </div>
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

.page-header {
  margin-bottom: var(--spacing-2xl);
  text-align: center;
}

.page-lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
}

.toc {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.toc h3 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
  color: var(--color-text-light);
}

.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.toc li {
  margin: 0;
}

.toc a {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background: rgba(13, 148, 136, 0.1);
  border-radius: var(--radius-sm);
  color: var(--color-accent);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: all var(--transition-fast);
}

.toc a:hover {
  background: rgba(13, 148, 136, 0.2);
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

.change-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.change-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  position: relative;
}

.change-card.major {
  border-color: rgba(239, 68, 68, 0.3);
  background: rgba(239, 68, 68, 0.03);
}

.change-card.moderate {
  border-color: rgba(234, 179, 8, 0.3);
  background: rgba(234, 179, 8, 0.03);
}

.change-card.info {
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(59, 130, 246, 0.03);
}

.change-badge {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
}

.change-card.major .change-badge {
  background: rgba(239, 68, 68, 0.15);
  color: #dc2626;
}

.change-card.moderate .change-badge {
  background: rgba(234, 179, 8, 0.15);
  color: #ca8a04;
}

.change-card.info .change-badge {
  background: rgba(59, 130, 246, 0.15);
  color: #2563eb;
}

.change-card h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-sm);
  padding-right: 60px;
}

.change-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.mapping-table {
  width: 100%;
  margin: var(--spacing-lg) 0;
}

.mapping-table th,
.mapping-table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.mapping-table th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
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

.callout {
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.callout h4 {
  color: #16a34a;
  margin: 0 0 var(--spacing-sm);
}

.callout p {
  margin: 0;
}

.next-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.next-step-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-fast);
}

.next-step-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.next-step-card.primary {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, var(--color-surface) 100%);
  border-color: var(--color-accent);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--color-accent);
  color: white;
  border-radius: 50%;
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}

.step-content h4 {
  margin: 0 0 var(--spacing-xs);
  color: var(--color-primary);
}

.step-content p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}
</style>
