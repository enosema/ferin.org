<template>
  <article class="content-page migration-page">
    <nav class="breadcrumb">
      <router-link to="/upgrade">Upgrade Guide</router-link>
      <span class="separator">/</span>
      <span class="current">FAQ &amp; Common Pitfalls</span>
    </nav>

    <header class="page-header">
      <h1>FAQ &amp; Common Pitfalls</h1>
      <p class="page-lead">
        Answers to frequently asked questions and warnings about
        common migration mistakes.
      </p>
    </header>

    <section class="content-section">
      <h2>Frequently Asked Questions</h2>

      <div class="faq-list">
        <details class="faq-item" v-for="faq in faqs" :key="faq.id">
          <summary class="faq-question">{{ faq.question }}</summary>
          <div class="faq-answer" v-html="faq.answer"></div>
        </details>
      </div>
    </section>

    <section class="content-section">
      <h2>Common Pitfalls</h2>

      <div class="pitfall-list">
        <div class="pitfall-card" v-for="pitfall in pitfalls" :key="pitfall.id">
          <div class="pitfall-header">
            <span class="pitfall-icon">⚠️</span>
            <h3>{{ pitfall.title }}</h3>
          </div>
          <div class="pitfall-content">
            <div class="pitfall-wrong">
              <h4>Wrong Approach</h4>
              <p>{{ pitfall.wrong }}</p>
            </div>
            <div class="pitfall-right">
              <h4>Correct Approach</h4>
              <p>{{ pitfall.right }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Quick Reference</h2>

      <div class="reference-grid">
        <div class="reference-card">
          <h3>Status Mapping Quick Reference</h3>
          <table class="mini-table">
            <tr>
              <td><code>valid</code></td>
              <td>→ validity=valid, publication=published</td>
            </tr>
            <tr>
              <td><code>invalid</code></td>
              <td>→ validity=invalid</td>
            </tr>
            <tr>
              <td><code>retired</code></td>
              <td>→ validity=valid, publication=unpublished</td>
            </tr>
            <tr>
              <td><code>superseded</code></td>
              <td>→ validity=valid + supersession relation</td>
            </tr>
            <tr>
              <td><code>submitted</code></td>
              <td>→ No direct mapping (proposals separate)</td>
            </tr>
          </table>
        </div>

        <div class="reference-card">
          <h3>Role Name Changes</h3>
          <table class="mini-table">
            <tr>
              <td>Submitting Organization</td>
              <td>→ Proposer</td>
            </tr>
            <tr>
              <td>Registry Manager</td>
              <td>→ System Manager</td>
            </tr>
            <tr>
              <td>Technical Standard</td>
              <td>→ Register Specification</td>
            </tr>
            <tr>
              <td>Register Item Series</td>
              <td>→ Concept</td>
            </tr>
          </table>
        </div>

        <div class="reference-card">
          <h3>Conformance Mapping</h3>
          <table class="mini-table">
            <tr>
              <td>Core</td>
              <td>→ Content Register</td>
            </tr>
            <tr>
              <td>Extended</td>
              <td>→ Governed Content Register</td>
            </tr>
            <tr>
              <td>Hierarchical</td>
              <td>→ Governed Concept Register</td>
            </tr>
          </table>
        </div>
      </div>
    </section>

    <nav class="page-nav">
      <router-link to="/upgrade/checklist" class="nav-prev">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Implementation Checklist</span>
      </router-link>
      <router-link to="/upgrade" class="nav-next">
        <span class="nav-label">Back to</span>
        <span class="nav-title">Upgrade Guide Home</span>
      </router-link>
    </nav>
  </article>
</template>

<script setup>
const faqs = [
  {
    id: 'faq1',
    question: 'Do I need to migrate everything at once?',
    answer: `<p>No. You can migrate incrementally:</p>
      <ul>
        <li>Start with terminology and status model updates</li>
        <li>Add governance features later if needed</li>
        <li>Concept plane can be added as a second phase</li>
      </ul>
      <p>However, declare your target register type upfront so you know what you're working toward.</p>`
  },
  {
    id: 'faq2',
    question: 'Can I keep using my existing XML schema?',
    answer: `<p>Yes. The 2026 edition is technology-neutral, which means:</p>
      <ul>
        <li>Your existing XML schema is still valid, just not normative</li>
        <li>You can continue using any encoding technology</li>
        <li>No requirement to change your underlying technology</li>
      </ul>
      <p>The standard no longer prescribes a specific implementation technology.</p>`
  },
  {
    id: 'faq3',
    question: 'What happens to items with "submitted" status?',
    answer: `<p>The "submitted" status has no equivalent in 2026 because proposals are now separate from register items. Options:</p>
      <ul>
        <li><strong>Best:</strong> Complete the review process before migration</li>
        <li><strong>Alternative:</strong> Convert to proposals in the new system</li>
        <li><strong>Simplest:</strong> Archive and handle separately</li>
      </ul>`
  },
  {
    id: 'faq4',
    question: 'Is retired the same as invalid?',
    answer: `<p><strong>No!</strong> This is a common misconception:</p>
      <ul>
        <li><strong>Retired</strong> = Still valid, just not recommended for new use (publication=unpublished)</li>
        <li><strong>Invalid</strong> = Contains errors, not suitable for any use (validity=invalid)</li>
      </ul>
      <p>A retired item might still be needed for historical data; an invalid item should not be used at all.</p>`
  },
  {
    id: 'faq5',
    question: 'Do I need to implement the concept plane?',
    answer: `<p>It depends on your target register type:</p>
      <ul>
        <li><strong>Content Register:</strong> No, concepts are implicit</li>
        <li><strong>Governed Content Register:</strong> No, this is the 2015 Extended equivalent</li>
        <li><strong>Concept Register or higher:</strong> Yes, explicit concept management required</li>
      </ul>
      <p>Most 2015 registers can migrate to Governed Content Register without implementing the concept plane.</p>`
  },
  {
    id: 'faq6',
    question: 'What are commitments and do I need them?',
    answer: `<p>Commitments are explicit promises about access, persistence, and transparency:</p>
      <ul>
        <li>Minimum required: Identifier persistence (identifiers never change)</li>
        <li>Higher levels provide stronger guarantees but require more infrastructure</li>
        <li>Declare only what you can reliably deliver</li>
      </ul>
      <p>Governed registers must declare commitments; Content Registers do not.</p>`
  },
  {
    id: 'faq7',
    question: 'Can I still remove items from my register?',
    answer: `<p>The 2026 edition requires persistence. Instead of removal:</p>
      <ul>
        <li>Use <strong>unpublished</strong> status to hide items</li>
        <li>Use <strong>redaction</strong> to hide specific content</li>
        <li>Use <strong>deletion</strong> flag (metadata remains, content removed from views)</li>
      </ul>
      <p>For highest commitment (append-only), even deleted content metadata must be retained.</p>`
  },
  {
    id: 'faq8',
    question: 'How do I handle the predecessor/successor relationship changes?',
    answer: `<p>The relationship model has expanded:</p>
      <ul>
        <li><strong>predecessor</strong> becomes a <code>supersedes</code> relation (current item supersedes predecessor)</li>
        <li><strong>successor</strong> becomes a <code>superseded by</code> relation</li>
        <li>New relations available: <code>inherits</code>, <code>has part</code>, etc.</li>
      </ul>
      <p>The direction of the relationship matters—be consistent in your implementation.</p>`
  },
  {
    id: 'faq9',
    question: 'What if my register doesn\'t fit any of the migration paths?',
    answer: `<p>Contact the FERIN community or ISO/TC 211 for guidance. Special cases include:</p>
      <ul>
        <li>Federated register topologies</li>
        <li>Custom governance models</li>
        <li>Legacy data with unusual patterns</li>
      </ul>
      <p>The standard is designed to be extensible—custom solutions are possible.</p>`
  },
  {
    id: 'faq10',
    question: 'How long should I plan for migration?',
    answer: `<p>Typical timelines by register type:</p>
      <ul>
        <li><strong>Content Register:</strong> 1-2 weeks</li>
        <li><strong>Governed Content Register:</strong> 2-4 weeks</li>
        <li><strong>Governed Concept Register:</strong> 4-8 weeks</li>
        <li><strong>CCR:</strong> 10-16 weeks</li>
      </ul>
      <p>Add buffer time for testing and stakeholder review.</p>`
  }
]

const pitfalls = [
  {
    id: 'pitfall1',
    title: 'Mapping retired → invalid',
    wrong: 'Setting validity=invalid for retired items because they\'re "not for use"',
    right: 'Retired items are still valid—they\'re just unpublished. Use validity=valid, publication=unpublished'
  },
  {
    id: 'pitfall2',
    title: 'Ignoring the "submitted" status issue',
    wrong: 'Trying to migrate submitted items as-is without handling the conceptual change',
    right: 'Process or archive all submitted items before migration; proposals are separate from register items in 2026'
  },
  {
    id: 'pitfall3',
    title: 'Over-declaring commitments',
    wrong: 'Declaring highest commitment levels because they sound good',
    right: 'Declare only what you can reliably deliver; under-delivering on commitments violates conformance'
  },
  {
    id: 'pitfall4',
    title: 'Forgetting supersession is now a relation',
    wrong: 'Trying to encode supersession in the status value itself',
    right: 'Supersession is a separate relation between items, not part of status dimensions'
  },
  {
    id: 'pitfall5',
    title: 'Removing XML schema entirely',
    wrong: 'Deleting all XML infrastructure because "the standard is technology-neutral"',
    right: 'Keep what works; technology-neutral means any technology is acceptable, including XML'
  },
  {
    id: 'pitfall6',
    title: 'Migrating without a rollback plan',
    wrong: 'Running migration directly on production data',
    right: 'Always test on a copy first, maintain rollback capability, and have a verification plan'
  },
  {
    id: 'pitfall7',
    title: 'Not updating external documentation',
    wrong: 'Migrating the system but leaving user documentation with old terminology',
    right: 'Update all documentation, APIs, training materials, and user guides with new terminology'
  },
  {
    id: 'pitfall8',
    title: 'Underestimating concept plane effort',
    wrong: 'Planning a quick migration to Governed Concept Register without understanding concept extraction',
    right: 'Extracting concepts from existing content is often the longest task—plan accordingly'
  }
]
</script>

<style scoped>
@import './migration-shared.css';

/* FAQ Styles */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.faq-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.faq-question {
  padding: var(--spacing-md) var(--spacing-lg);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  list-style: none;
  display: flex;
  align-items: center;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.faq-question::before {
  content: '+';
  margin-right: var(--spacing-md);
  font-size: var(--font-size-lg);
  color: var(--color-accent);
  transition: transform 0.2s;
}

.faq-item[open] .faq-question::before {
  content: '−';
}

.faq-item[open] .faq-question {
  border-bottom: 1px solid var(--color-border);
}

.faq-answer {
  padding: var(--spacing-lg);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

.faq-answer ul {
  margin: var(--spacing-sm) 0;
  padding-left: var(--spacing-lg);
}

.faq-answer li {
  margin-bottom: var(--spacing-xs);
}

/* Pitfall Styles */
.pitfall-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.pitfall-card {
  background: var(--color-surface);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.pitfall-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: rgba(239, 68, 68, 0.05);
}

.pitfall-icon {
  font-size: var(--font-size-lg);
}

.pitfall-header h3 {
  margin: 0;
  font-size: var(--font-size-base);
  color: #dc2626;
}

.pitfall-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
}

.pitfall-wrong h4,
.pitfall-right h4 {
  font-size: var(--font-size-sm);
  margin: 0 0 var(--spacing-sm);
}

.pitfall-wrong h4 {
  color: #dc2626;
}

.pitfall-right h4 {
  color: #16a34a;
}

.pitfall-content p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

/* Quick Reference */
.reference-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.reference-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.reference-card h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.mini-table {
  width: 100%;
  font-size: var(--font-size-sm);
}

.mini-table td {
  padding: var(--spacing-xs) 0;
  border-bottom: 1px solid var(--color-border);
}

.mini-table td:first-child {
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}

.mini-table td:last-child {
  color: var(--color-text-light);
  padding-left: var(--spacing-sm);
}

.mini-table code {
  background: var(--color-background);
  padding: 1px 4px;
  border-radius: 2px;
  font-size: var(--font-size-xs);
}

@media (max-width: 1024px) {
  .reference-grid {
    grid-template-columns: 1fr;
  }

  .pitfall-content {
    grid-template-columns: 1fr;
  }
}
</style>
