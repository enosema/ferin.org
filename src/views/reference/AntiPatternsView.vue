<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Anti-Patterns</h1>
      <p class="page-lead">
        Common mistakes to avoid when implementing FERIN-compliant registers.
        Learn from others' failures.
      </p>
    </header>

    <section class="content-section">
      <h2>Why Anti-Patterns Matter</h2>
      <p>
        FERIN is deceptively simple. Many implementations fail not because the
        standard is complex, but because of poor design decisions. Understanding
        these anti-patterns will help you avoid them.
      </p>
    </section>

    <section class="content-section">
      <h2>Content Anti-Patterns</h2>

      <div class="anti-pattern">
        <h3>Concept Granularity Too Fine</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Creating a new concept for every minor variation. Example: separate
            concepts for "Meter (SI)", "Meter (survey)", "Meter (US)".
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>Concept explosion makes navigation impossible</li>
            <li>Users can't find the right concept</li>
            <li>Maintenance burden becomes unmanageable</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Use concept versions or attributes to capture variations. Only create
            new concepts when the fundamental meaning differs.
          </p>
        </div>
      </div>

      <div class="anti-pattern">
        <h3>Concept Granularity Too Coarse</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Putting everything in one concept. Example: a single "Unit" concept
            with a "type" attribute to distinguish length from weight.
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>Can't model domain-specific properties</li>
            <li>Validation becomes complex</li>
            <li>Relations become meaningless</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Create separate concepts for distinct types. Use inheritance for
            shared properties.
          </p>
        </div>
      </div>

      <div class="anti-pattern">
        <h3>Using Concept Versions as Concepts</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Creating a new concept version when the meaning has fundamentally
            changed, instead of creating a new concept.
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>Version history becomes confusing</li>
            <li>References to old versions become misleading</li>
            <li>Can't properly model supersession</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            If the meaning changes, create a new concept with a supersession
            relation to the old one. Reserve versions for refinements.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Identifier Anti-Patterns</h2>

      <div class="anti-pattern">
        <h3>Meaningful Identifiers</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Embedding meaning in identifiers. Example: <code>us-dollar</code>
            as an identifier.
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>Can't change the name without breaking references</li>
            <li>What if the meaning changes?</li>
            <li>Identifier becomes misleading over time</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Use opaque identifiers (UUIDs, sequential numbers). Use functional
            identifiers separately for human-readable codes.
          </p>
        </div>
      </div>

      <div class="anti-pattern">
        <h3>URL-Based Identifiers That Break</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Using URLs tied to specific infrastructure. Example:
            <code>https://app-v1.internal.company.com/item/123</code>
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>URLs break when infrastructure changes</li>
            <li>Can't migrate to new domains</li>
            <li>Internal URLs exposed externally</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Use stable, organization-level domains. Implement redirects for
            backward compatibility when infrastructure changes.
          </p>
        </div>
      </div>

      <div class="anti-pattern">
        <h3>Reusing Identifiers</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Reusing an identifier after content is deleted. "US was deleted,
            so we can use it for a new United States entry."
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>Old references now point to wrong content</li>
            <li>Breaks trust in the register</li>
            <li>Audit trails become ambiguous</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Never reuse identifiers. Mark as retired or invalid. Use a new
            identifier for new content.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Versioning Anti-Patterns</h2>

      <div class="anti-pattern">
        <h3>Versioning Everything as Major</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Creating a new version for every minor change, treating all changes
            as substantive.
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>Version explosion</li>
            <li>Users can't tell what's significant</li>
            <li>Maintenance complexity</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Distinguish substantive from non-substantive changes. Only version
            when meaning or compatibility changes.
          </p>
        </div>
      </div>

      <div class="anti-pattern">
        <h3>Modifying In-Place Without History</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Updating content directly without creating change records or
            preserving previous state.
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>Lost history</li>
            <li>Can't audit what changed</li>
            <li>Can't rollback</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Always create change records. Implement append-only model for
            significant content.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Governance Anti-Patterns</h2>

      <div class="anti-pattern">
        <h3>Inadequate Role Separation</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            One person holding both Manager and Control Body roles in a
            high-risk register, able to approve their own changes without
            independent review.
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>No real accountability</li>
            <li>Potential for abuse</li>
            <li>Regulatory failure</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Match role separation to your register's risk level. For high-risk
            registers, ensure Control Body independence. For low-risk registers,
            combined roles are acceptable with documentation.
            <router-link to="/learn/risk-management">See Risk Management</router-link>
            for guidance on assessing your register's risk level.
          </p>
        </div>
      </div>

      <div class="anti-pattern">
        <h3>Governance Theater</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Having governance processes on paper that are routinely bypassed
            in practice.
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>Process becomes meaningless</li>
            <li>Real decisions happen elsewhere</li>
            <li>Can't trust documentation</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Either follow your governance or change it to match reality.
            Inconsistent governance is worse than minimal governance.
          </p>
        </div>
      </div>

      <div class="anti-pattern">
        <h3>Missing Temporal Constraints</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Not tracking when items become valid or expire. Content is just
            "valid" without time context.
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>Can't handle planned changes</li>
            <li>Historical queries become impossible</li>
            <li>Transitions are sudden and disruptive</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Track validFrom and validUntil dates. Plan transitions. Support
            time-travel queries.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Integration Anti-Patterns</h2>

      <div class="anti-pattern">
        <h3>Ignoring Cross-Register Dependencies</h3>
        <div class="problem">
          <h4>Problem</h4>
          <p>
            Items reference content in other registers without tracking those
            dependencies.
          </p>
        </div>
        <div class="consequence">
          <h4>Consequences</h4>
          <ul>
            <li>References break when external content changes</li>
            <li>No notification of upstream changes</li>
            <li>Can't assess impact of changes</li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            Document external dependencies. Subscribe to notifications from
            upstream registers. Version your references.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/getting-started">Getting Started</router-link>
          - Implementation guide
        </li>
        <li>
          <router-link to="/build/identifier-design">Identifier Design</router-link>
          - Identifier anti-patterns
        </li>
        <li>
          <router-link to="/learn/governance">Governance</router-link>
          - Governance anti-patterns
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

.anti-pattern {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
}

.anti-pattern h3 {
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-md);
  color: var(--color-error);
}

.anti-pattern h4 {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
}

.problem,
.consequence,
.solution {
  margin-bottom: var(--spacing-md);
}

.solution {
  margin-bottom: 0;
  padding-top: var(--spacing-md);
  border-top: 1px dashed rgba(16, 185, 129, 0.3);
}

.solution h4 {
  color: var(--color-success);
}

.problem p,
.consequence p,
.solution p {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
}

.consequence ul,
.solution ul {
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
</style>
