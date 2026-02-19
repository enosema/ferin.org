<template>
  <article class="content-page">
    <header class="page-header">
      <h1>FAQ</h1>
      <p class="page-lead">
        Frequently asked questions about FERIN and its implementation.
      </p>
    </header>

    <section class="content-section">
      <div class="faq-list">
        <div class="faq-item">
          <h3>How do I decide if a change is substantive?</h3>
          <p>
            Ask: "Would existing references to this content become confusing or
            misleading after this change?" If yes, it's substantive and needs
            a new version. If the change is just clarification or correction
            that doesn't change the meaning, it's non-substantive.
          </p>
          <router-link to="/build/versioning#substantive-vs-non-substantive">
            See the decision framework →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>Can one person hold all roles in a small organization?</h3>
          <p>
            It depends on your register's <strong>risk level</strong>. For low-risk
            informative registers, combining roles is acceptable with proper documentation.
            For high-risk authoritative registers, role separation (especially between
            Manager and Control Body) is important for governance integrity.
          </p>
          <router-link to="/learn/risk-management">
            See Risk Management for guidance →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>What happens when requirements change and existing content is non-conformant?</h3>
          <p>
            Don't make existing content invalid overnight. Options include:
            grandfathering existing content with clear marking, providing a
            migration period, or creating new requirements that apply only to
            new content.
          </p>
          <router-link to="/learn/principles">
            See the Evolution Support principle →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>How do I migrate from a spreadsheet or database?</h3>
          <p>
            Plan carefully: map fields to FERIN attributes, clean data before
            migration, decide whether to preserve existing identifiers or
            assign new ones, and determine whether bulk import should bypass
            normal governance.
          </p>
          <router-link to="/upgrade">
            See the Upgrade Guide →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>What's the minimum viable register?</h3>
          <p>
            A Content Register with: unique identifiers, basic content storage,
            valid/invalid status, and a simple register specification. Add
            governance and concepts as your needs grow.
          </p>
          <router-link to="/learn/register-types">
            See Register Types →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>How do I handle emergency changes?</h3>
          <p>
            Define an expedited process: get emergency approval from an
            authorized role, apply the change, then submit for retroactive
            review. Document the emergency nature in change metadata. Don't
            skip documentation even for emergencies.
          </p>
          <router-link to="/build/actions">
            See the Actions Reference →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>Can I rollback a change?</h3>
          <p>
            FERIN doesn't define explicit rollback. Recommended approach:
            create a new version that restores previous content using the
            supersede action. This preserves history and shows what happened.
          </p>
          <router-link to="/build/actions">
            See Actions Reference →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>How do I reference concepts in other registers?</h3>
          <p>
            Use the external concept's object identifier. Document the
            dependency in your register. Consider subscribing to notifications
            from the external register to track changes.
          </p>
          <router-link to="/build/identifier-design">
            See Identifier Design →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>What identifier scheme should I use?</h3>
          <p>
            It depends on your use case. UUIDs are simple and universal.
            URLs are convenient if you have web infrastructure. DOIs are
            best for academic/published content. URNs for long-term
            standards-based references.
          </p>
          <router-link to="/build/identifier-design">
            See identifier scheme comparison →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>Do I need the concept plane?</h3>
          <p>
            Only if: definitions evolve over time, you need to track meaning
            separately from data, or you're building a terminology/taxonomy
            register. For simple code lists, the content plane alone may
            suffice.
          </p>
          <router-link to="/learn/core-concepts">
            See Core Concepts →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>How do I test conformance?</h3>
          <p>
            Map your implementation to the capabilities claimed. Verify each
            required action is supported, status model is correct, and
            commitments are met. Document evidence for each capability.
          </p>
          <router-link to="/learn/register-types">
            See Register Types and conformance →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>What's the difference between invalidation and deletion?</h3>
          <p>
            Invalidation marks content as no longer valid but preserves it
            for history. Deletion removes content entirely. Use invalidation
            in almost all cases; deletion breaks references.
          </p>
          <router-link to="/reference/statuses">
            See Statuses Reference →
          </router-link>
        </div>

        <div class="faq-item">
          <h3>How detailed should my register specification be?</h3>
          <p>
            Match to register type: Content registers need basic scope and
            identifiers. Governed registers need full governance documentation.
            CCR needs comprehensive commitments. Don't under-document
            governance or commitments.
          </p>
          <router-link to="/build/register-specification">
            See Register Specification template →
          </router-link>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Still Have Questions?</h2>
      <p>
        If your question isn't answered here:
      </p>
      <ul>
        <li>
          <router-link to="/reference/glossary">Browse the Glossary</router-link>
          for term definitions
        </li>
        <li>
          <router-link to="/reference/anti-patterns">Check Anti-patterns</router-link>
          for common mistakes
        </li>
        <li>
          Visit <a href="https://enosema.org" target="_blank" rel="noopener">
            enosema.org
          </a> for community resources
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

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.faq-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.faq-item h3 {
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-md);
  color: var(--color-primary);
}

.faq-item p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
}

.faq-item a {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.content-section > ul {
  font-size: var(--font-size-base);
}
</style>
