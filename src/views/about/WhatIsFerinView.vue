<template>
  <article class="content-page">
    <header class="page-header">
      <h1>What is FERIN?</h1>
      <p class="page-lead">
        <strong>FERIN</strong> (<strong>F</strong>ramework for <strong>E</strong>xtensible
        <strong>R</strong>egistration of <strong>I</strong>nformation) is a standardized framework
        for managing information in registers that serve both human and machine consumers.
      </p>
      <p class="acronym-note">
        The abbreviation FERIN is invented by Ronald Tse and Reese Plews.
      </p>
    </header>

    <section class="content-section">
      <h2>The Problem FERIN Solves</h2>
      <p>
        Organizations need to manage collections of information—code lists, taxonomies,
        specifications, reference data—that must remain accessible and usable over time.
        Traditional approaches often fail because:
      </p>
      <ul>
        <li>Information changes but references break</li>
        <li>There's no clear governance over who can make changes</li>
        <li>History is lost when updates occur</li>
        <li>Systems can't agree on what something "means"</li>
      </ul>
      <p>
        FERIN addresses these challenges through a standardized approach to registration
        that separates <strong>meaning</strong> from <strong>data</strong>.
      </p>
    </section>

    <section class="content-section">
      <h2>Two Planes: Concept and Content</h2>
      <p>
        The fundamental insight of FERIN is that information exists in two planes:
      </p>
      <div class="concept-grid">
        <div class="concept-card">
          <h3>Concept Plane</h3>
          <p>
            Where <strong>meaning</strong> lives. A concept represents an abstract idea
            or category that can be defined and refined over time. Concepts have
            definitions, but the definitions can evolve.
          </p>
          <p><em>Example: The concept of "meter" as a unit of length.</em></p>
        </div>
        <div class="concept-card">
          <h3>Content Plane</h3>
          <p>
            Where <strong>data</strong> persists. Content represents the concrete
            representation of concepts at a point in time. Content is versioned,
            has status, and can be referenced reliably.
          </p>
          <p><em>Example: "m" as the symbol for meter, valid from 1960 to present.</em></p>
        </div>
      </div>
      <p>
        This separation allows concepts to evolve (e.g., refining the definition of "meter")
        while preserving the integrity of content that references them (e.g., datasets
        that use "m" as a unit).
      </p>
    </section>

    <section class="content-section">
      <h2>When to Use FERIN</h2>
      <p>
        FERIN is appropriate when you need:
      </p>
      <table class="decision-table">
        <thead>
          <tr>
            <th>Need</th>
            <th>FERIN Helps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Persistent identification</td>
            <td>References that don't break when content changes</td>
          </tr>
          <tr>
            <td>Change history</td>
            <td>Complete audit trail of all modifications</td>
          </tr>
          <tr>
            <td>Governance</td>
            <td>Clear roles and processes for managing changes</td>
          </tr>
          <tr>
            <td>Interoperability</td>
            <td>Standard framework understood across organizations</td>
          </tr>
          <tr>
            <td>Compliance</td>
            <td>Verifiable conformance to international standard</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>FERIN may be overkill</strong> for simple lookup tables, configuration
        data, or information that changes rarely and has no external dependencies.
      </p>
    </section>

    <section class="content-section">
      <h2>Real-World Analogy</h2>
      <p>
        Think of FERIN like a <strong>library catalog system</strong>:
      </p>
      <ul>
        <li>
          <strong>Concepts</strong> are like the abstract idea of a book (title, author,
          subject)—the metadata that gives it meaning
        </li>
        <li>
          <strong>Content</strong> is like the physical copy on the shelf—with a specific
          barcode, location, and status (available, checked out, withdrawn)
        </li>
        <li>
          <strong>Governance</strong> is the library policy for adding, updating, and
          removing books from the collection
        </li>
        <li>
          <strong>History</strong> is the circulation record showing who borrowed what,
          when, and when it was returned
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Key Benefits</h2>
      <div class="benefits-grid">
        <div class="benefit">
          <h4>Reliable References</h4>
          <p>Content can be cited with confidence that the reference remains meaningful.</p>
        </div>
        <div class="benefit">
          <h4>Controlled Evolution</h4>
          <p>Changes happen through defined processes with clear accountability.</p>
        </div>
        <div class="benefit">
          <h4>Complete History</h4>
          <p>Every change is recorded, enabling forensics and rollback understanding.</p>
        </div>
        <div class="benefit">
          <h4>Standards Compliance</h4>
          <p>Alignment with ISO 19135 enables interoperability and trust.</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Next Steps</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/learn/core-concepts">Understand the core concepts</router-link>
          in more detail
        </li>
        <li>
          <router-link to="/learn/principles">Learn the six principles</router-link>
          that guide FERIN
        </li>
        <li>
          <router-link to="/about/history">See the history</router-link>
          of how FERIN evolved
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

.page-lead strong {
  color: var(--color-primary);
}

.acronym-note {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
  margin-top: var(--spacing-md);
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

.concept-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.concept-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.concept-card h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
  color: var(--color-accent);
}

.concept-card p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
}

.concept-card p:last-child {
  margin-bottom: 0;
}

.concept-card em {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.decision-table {
  margin: var(--spacing-lg) 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.benefit {
  padding: var(--spacing-md);
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-md);
}

.benefit h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-xs);
}

.benefit p {
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

@media (max-width: 640px) {
  .concept-grid,
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
