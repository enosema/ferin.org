<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Relationship to ISO 19135</h1>
      <p class="page-lead">
        ferin.org is an interpretation companion to ISO 19135:2026, providing
        practical guidance that complements the standard.
      </p>
    </header>

    <section class="content-section">
      <h2>About ISO 19135:2026</h2>
      <p>
        ISO 19135:2026 is the third edition of the international standard for
        item registration. It defines the FERIN framework as:
      </p>
      <blockquote>
        A framework for managing information in registers that serves both
        human and machine consumers, providing persistent identification,
        controlled evolution, and complete change history.
      </blockquote>
      <p>
        The standard is developed by <strong>ISO/TC 211</strong> (Geographic
        Information/Geomatics) but the FERIN framework is designed to be
        applicable across all domains, not just geographic information.
      </p>
    </section>

    <section class="content-section">
      <h2>What the Standard Covers</h2>
      <p>
        ISO 19135:2026 specifies:
      </p>
      <ul>
        <li>
          <strong>Conceptual model</strong>: UML-based model of registers,
          concepts, content, and their relationships
        </li>
        <li>
          <strong>Register types</strong>: Five conformance classes based on
          capabilities
        </li>
        <li>
          <strong>Governance model</strong>: Roles, responsibilities, and
          processes for managing registers
        </li>
        <li>
          <strong>Actions</strong>: Operations for adding, changing, invalidating,
          and superseding content
        </li>
        <li>
          <strong>Status model</strong>: How content status is tracked and
          transitions occur
        </li>
        <li>
          <strong>Commitments</strong>: Requirements for access, persistence,
          and transparency
        </li>
        <li>
          <strong>Conformance</strong>: How to claim and verify compliance
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>What ferin.org Adds</h2>
      <p>
        The standard provides <em>what</em> must be done. ferin.org provides
        <em>how</em> and <em>why</em>:
      </p>
      <table class="value-table">
        <thead>
          <tr>
            <th>Standard</th>
            <th>ferin.org</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Defines requirements</td>
            <td>Explains how to meet them</td>
          </tr>
          <tr>
            <td>Specifies conformance</td>
            <td>Provides implementation patterns</td>
          </tr>
          <tr>
            <td>Uses formal language</td>
            <td>Provides plain-language interpretation</td>
          </tr>
          <tr>
            <td>States what must happen</td>
            <td>Explains decision frameworks</td>
          </tr>
          <tr>
            <td>Gives abstract examples</td>
            <td>Shows concrete implementations</td>
          </tr>
          <tr>
            <td>Defines terms</td>
            <td>Provides context and anti-patterns</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Areas of Interpretation</h2>
      <p>
        ferin.org focuses on areas where the standard requires interpretation:
      </p>
      <div class="interpretation-grid">
        <div class="interpretation-item">
          <h4>Ambiguities</h4>
          <p>
            Some requirements are stated abstractly and need practical
            interpretation (e.g., "major impact on use" for substantive changes).
          </p>
        </div>
        <div class="interpretation-item">
          <h4>Gaps</h4>
          <p>
            Some practical scenarios aren't fully addressed (e.g., bulk import,
            emergency changes, cross-register references).
          </p>
        </div>
        <div class="interpretation-item">
          <h4>Implicit Knowledge</h4>
          <p>
            Some concepts assume prior knowledge (e.g., terminology management,
            versioning philosophy, governance design).
          </p>
        </div>
        <div class="interpretation-item">
          <h4>Implementation Questions</h4>
          <p>
            Practical questions arise during implementation (e.g., database
            mapping, performance, API design).
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Getting the Standard</h2>
      <p>
        ISO 19135:2026 is available for purchase from the ISO Store:
      </p>
      <div class="cta-box">
        <h4>Purchase ISO 19135:2026</h4>
        <p>
          The official standard is available from ISO. Purchase is required
          for full access to all clauses and annexes.
        </p>
        <GradientButton
          href="https://www.iso.org/standard/87934.html"
          variant="primary"
        >
          Visit ISO Store
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </template>
        </GradientButton>
      </div>
    </section>

    <section class="content-section">
      <h2>Enosema Foundation</h2>
      <p>
        This site is owned and published by the Enosema Foundation, which
        contributes to the development of the FERIN framework. Visit enosema.org for:
      </p>
      <ul>
        <li>Information about the Foundation's mission</li>
        <li>FERIN-related events and training</li>
        <li>Community resources and discussions</li>
        <li>Consulting and implementation support</li>
      </ul>
      <div class="cta-box secondary">
        <GradientButton
          href="https://enosema.org"
          variant="secondary"
        >
          Visit enosema.org
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </template>
        </GradientButton>
      </div>
    </section>

    <section class="content-section">
      <h2>About the FERIN Name</h2>
      <p>
        <strong>The abbreviation FERIN is invented by Ronald Tse and Reese Plews.</strong>
      </p>
      <p>
        FERIN stands for <strong>F</strong>ramework for <strong>E</strong>xtensible
        <strong>R</strong>egistration of <strong>I</strong>nformation. The name and
        framework are made available for broad adoption through the Enosema Foundation.
      </p>
    </section>
  </article>
</template>

<script setup>
import GradientButton from '@/components/ui/GradientButton.vue'
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

blockquote {
  font-size: var(--font-size-lg);
  font-style: normal;
  color: var(--color-text);
}

.value-table {
  margin: var(--spacing-lg) 0;
}

.interpretation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.interpretation-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.interpretation-item h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
  color: var(--color-accent);
}

.interpretation-item p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.cta-box {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(30, 58, 95, 0.1) 100%);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  margin: var(--spacing-lg) 0;
}

.cta-box.secondary {
  background: var(--color-surface);
}

.cta-box h4 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
}

.cta-box p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

@media (max-width: 640px) {
  .interpretation-grid {
    grid-template-columns: 1fr;
  }
}
</style>
