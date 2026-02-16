<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Versioning</h1>
      <p class="page-lead">
        Managing changes to content over time—when to create new versions,
        how to version, and how to maintain compatibility.
      </p>
    </header>

    <section class="content-section">
      <h2>Why Versioning Matters</h2>
      <p>
        Versioning enables:
      </p>
      <ul>
        <li><strong>Persistence:</strong> Old references remain valid</li>
        <li><strong>History:</strong> Understanding what changed and when</li>
        <li><strong>Compatibility:</strong> Systems can adapt at their own pace</li>
        <li><strong>Audit:</strong> Tracing the evolution of content</li>
      </ul>
    </section>

    <section class="content-section" id="substantive-vs-non-substantive">
      <h2>Substantive vs Non-Substantive Changes</h2>
      <p>
        The standard distinguishes between changes that require a new version
        and those that don't—but the distinction requires interpretation.
      </p>

      <h3>What the Standard Says</h3>
      <blockquote>
        A substantive change is one that has a major impact on the use of
        the concept or register item. A non-substantive change has minor
        or no impact on use.
      </blockquote>

      <h3>The Challenge</h3>
      <p>
        "Major impact on use" is subjective. What breaks one consumer may be
        transparent to another. Here's a decision framework:
      </p>

      <div class="decision-framework">
        <h4>Decision Tree</h4>
        <ol>
          <li>
            <strong>Does this change the identifier?</strong>
            <ul>
              <li>Yes → This is not a change, it's a new item</li>
              <li>No → Continue</li>
            </ul>
          </li>
          <li>
            <strong>Does this change what the item means?</strong>
            <ul>
              <li>Yes → Substantive (create new version)</li>
              <li>No → Continue</li>
            </ul>
          </li>
          <li>
            <strong>Could existing references become incorrect or misleading?</strong>
            <ul>
              <li>Yes → Substantive (create new version)</li>
              <li>No → Continue</li>
            </ul>
          </li>
          <li>
            <strong>Does this affect validation or processing rules?</strong>
            <ul>
              <li>Yes → Likely substantive</li>
              <li>No → Non-substantive</li>
            </ul>
          </li>
        </ol>
      </div>

      <h3>Examples</h3>
      <table class="examples-table">
        <thead>
          <tr>
            <th>Change</th>
            <th>Type</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fixing a typo in description</td>
            <td>Non-substantive</td>
            <td>Meaning unchanged</td>
          </tr>
          <tr>
            <td>Adding an optional field</td>
            <td>Non-substantive</td>
            <td>Existing use unaffected</td>
          </tr>
          <tr>
            <td>Changing a code value</td>
            <td>Substantive</td>
            <td>References using old value break</td>
          </tr>
          <tr>
            <td>Changing definition significantly</td>
            <td>Substantive</td>
            <td>Meaning changed</td>
          </tr>
          <tr>
            <td>Marking as deprecated</td>
            <td>Non-substantive</td>
            <td>Still valid, just discouraged</td>
          </tr>
          <tr>
            <td>Removing a required field</td>
            <td>Substantive</td>
            <td>Breaks systems expecting it</td>
          </tr>
          <tr>
            <td>Adding a new example</td>
            <td>Non-substantive</td>
            <td>Supplementary information only</td>
          </tr>
        </tbody>
      </table>

      <div class="tip-box">
        <strong>Tip:</strong> When in doubt, create a new version. The cost of
        an extra version is usually lower than the cost of broken integrations.
      </div>
    </section>

    <section class="content-section">
      <h2>Versioning Schemes</h2>
      <p>
        Choose a scheme that matches your content and users:
      </p>

      <div class="schemes-grid">
        <div class="scheme">
          <h3>Semantic Versioning</h3>
          <code>MAJOR.MINOR.PATCH</code> (e.g., 2.1.3)
          <p>
            Communicates change impact through version number.
          </p>
          <ul>
            <li>MAJOR: Breaking changes</li>
            <li>MINOR: New features, backward compatible</li>
            <li>PATCH: Bug fixes, backward compatible</li>
          </ul>
          <p><strong>Best for:</strong> APIs, software-like content</p>
        </div>

        <div class="scheme">
          <h3>Date-Based</h3>
          <code>YYYY-MM-DD</code> or <code>YYYYMMDD</code>
          <p>
            Simple, unambiguous, sortable.
          </p>
          <ul>
            <li>Clear when version was created</li>
            <li>Easy to sort chronologically</li>
            <li>No semantic meaning</li>
          </ul>
          <p><strong>Best for:</strong> Time-sensitive reference data</p>
        </div>

        <div class="scheme">
          <h3>Sequential</h3>
          <code>v1, v2, v3</code> or <code>1, 2, 3</code>
          <p>
            Simple counter, no embedded meaning.
          </p>
          <ul>
            <li>Easy to understand</li>
            <li>Ordering is clear</li>
            <li>Requires external documentation for meaning</li>
          </ul>
          <p><strong>Best for:</strong> Internal use, simple registers</p>
        </div>

        <div class="scheme">
          <h3>Hash-Based</h3>
          <code>a1b2c3d4</code>
          <p>
            Derived from content, ensures uniqueness.
          </p>
          <ul>
            <li>Guaranteed unique for content</li>
            <li>Detects accidental duplication</li>
            <li>Not human-readable</li>
          </ul>
          <p><strong>Best for:</strong> Content-addressable systems, git-like</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Version Compatibility</h2>
      <p>
        When you release a new version, what happens to systems using the old one?
      </p>

      <h3>Compatibility Types</h3>
      <table class="compatibility-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Definition</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Backward Compatible</td>
            <td>New version works with old consumers</td>
            <td>Adding optional fields</td>
          </tr>
          <tr>
            <td>Forward Compatible</td>
            <td>Old version works with new consumers</td>
            <td>Ignoring unknown fields</td>
          </tr>
          <tr>
            <td>Breaking Change</td>
            <td>Old consumers fail with new version</td>
            <td>Removing required fields</td>
          </tr>
        </tbody>
      </table>

      <h3>Managing Breaking Changes</h3>
      <ul>
        <li>
          <strong>Communicate early:</strong> Warn users before making breaking changes
        </li>
        <li>
          <strong>Provide migration path:</strong> Document how to adapt
        </li>
        <li>
          <strong>Overlap periods:</strong> Support both versions during transition
        </li>
        <li>
          <strong>Sunset old versions:</strong> Clear timeline for deprecation
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Version Lifecycle</h2>
      <p>
        Versions progress through states:
      </p>

      <div class="lifecycle">
        <div class="lifecycle-stage">
          <span class="stage-name">Draft</span>
          <p>Created but not yet approved</p>
        </div>
        <div class="lifecycle-arrow">→</div>
        <div class="lifecycle-stage">
          <span class="stage-name">Current</span>
          <p>The active, recommended version</p>
        </div>
        <div class="lifecycle-arrow">→</div>
        <div class="lifecycle-stage">
          <span class="stage-name">Deprecated</span>
          <p>Still works, but migrate away</p>
        </div>
        <div class="lifecycle-arrow">→</div>
        <div class="lifecycle-stage">
          <span class="stage-name">Superseded</span>
          <p>Replaced by newer version</p>
        </div>
        <div class="lifecycle-arrow">→</div>
        <div class="lifecycle-stage">
          <span class="stage-name">Retired</span>
          <p>No longer available for use</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Versioning Anti-Patterns</h2>

      <div class="anti-patterns">
        <div class="anti-pattern">
          <h4>Version Everything</h4>
          <p>
            Creating a new version for every typo fix or minor edit.
          </p>
          <p><strong>Consequence:</strong> Version explosion, user confusion.</p>
          <p><strong>Better:</strong> Batch minor changes, version meaningfully.</p>
        </div>

        <div class="anti-pattern">
          <h4>Never Version</h4>
          <p>
            Modifying content in place without creating versions.
          </p>
          <p><strong>Consequence:</strong> Lost history, broken references.</p>
          <p><strong>Better:</strong> Version substantive changes.</p>
        </div>

        <div class="anti-pattern">
          <h4>Delete Old Versions</h4>
          <p>
            Removing old versions to save space.
          </p>
          <p><strong>Consequence:</strong> Broken citations, lost history.</p>
          <p><strong>Better:</strong> Archive, don't delete.</p>
        </div>

        <div class="anti-pattern">
          <h4>Semantic Versioning for Non-Semantic Content</h4>
          <p>
            Using MAJOR.MINOR.PATCH for content where the distinctions don't apply.
          </p>
          <p><strong>Consequence:</strong> Confusing version numbers.</p>
          <p><strong>Better:</strong> Match scheme to content type.</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/implement/actions">Actions Reference</router-link>
          - Operations for managing versions
        </li>
        <li>
          <router-link to="/reference/statuses">Statuses</router-link>
          - Complete status reference
        </li>
        <li>
          <router-link to="/implement/core-concepts">Core Concepts</router-link>
          - Concept versioning details
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

.decision-framework {
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.decision-framework h4 {
  margin-bottom: var(--spacing-md);
}

.decision-framework ol {
  margin: 0;
}

.decision-framework li {
  margin-bottom: var(--spacing-md);
}

.decision-framework ul {
  margin-top: var(--spacing-xs);
  padding-left: var(--spacing-lg);
}

.examples-table,
.compatibility-table {
  margin: var(--spacing-md) 0;
}

.tip-box {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.schemes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.scheme {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.scheme h3 {
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-xs);
}

.scheme code {
  display: block;
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-sm);
  background: var(--color-background);
}

.scheme p {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-sm);
}

.scheme ul {
  font-size: var(--font-size-sm);
}

.lifecycle {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin: var(--spacing-lg) 0;
}

.lifecycle-stage {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  text-align: center;
}

.stage-name {
  display: block;
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
}

.lifecycle-stage p {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
}

.lifecycle-arrow {
  color: var(--color-text-light);
  font-size: var(--font-size-lg);
}

.anti-patterns {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.anti-pattern {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.anti-pattern h4 {
  font-size: var(--font-size-base);
  color: var(--color-error);
  margin: 0 0 var(--spacing-sm);
}

.anti-pattern p {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
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
  .schemes-grid {
    grid-template-columns: 1fr;
  }

  .lifecycle {
    flex-direction: column;
  }

  .lifecycle-arrow {
    transform: rotate(90deg);
  }
}
</style>
