<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Identifier Design</h1>
      <p class="page-lead">
        Identifiers must be unique and persistent. The standard leaves the
        scheme design to implementers—here's practical guidance.
      </p>
    </header>

    <section class="content-section">
      <h2>What Makes a Good Identifier?</h2>
      <p>
        FERIN requires identifiers to be:
      </p>
      <ul>
        <li><strong>Unique:</strong> No two items share the same identifier</li>
        <li><strong>Persistent:</strong> The identifier remains valid indefinitely</li>
        <li><strong>Consistent:</strong> Assigned using documented rules</li>
      </ul>

      <h3>The Persistence Challenge</h3>
      <p>
        "Persistent" is harder than it seems. An identifier is only as persistent as:
      </p>
      <ul>
        <li>The organization that maintains it</li>
        <li>The infrastructure that resolves it</li>
        <li>The policies governing its use</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Identifier Schemes Compared</h2>

      <table class="scheme-table">
        <thead>
          <tr>
            <th>Scheme</th>
            <th>Pros</th>
            <th>Cons</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>UUID</strong></td>
            <td>
              <ul>
                <li>Simple to generate</li>
                <li>Guaranteed unique</li>
                <li>No central authority</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Not human-readable</li>
                <li>No built-in resolution</li>
                <li>Hard to communicate verbally</li>
              </ul>
            </td>
            <td>Technical systems, internal use</td>
          </tr>
          <tr>
            <td><strong>URN</strong></td>
            <td>
              <ul>
                <li>Standard format</li>
                <li>Designed for persistence</li>
                <li>Namespace support</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Resolution not universal</li>
                <li>Namespace registration needed</li>
                <li>Complex syntax</li>
              </ul>
            </td>
            <td>Long-term references, standards</td>
          </tr>
          <tr>
            <td><strong>URL/URI</strong></td>
            <td>
              <ul>
                <li>Universally resolvable</li>
                <li>Familiar to users</li>
                <li>Easy to share</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Can break if domain changes</li>
                <li>Requires web infrastructure</li>
                <li>Link rot risk</li>
              </ul>
            </td>
            <td>Web-accessible registers</td>
          </tr>
          <tr>
            <td><strong>DOI</strong></td>
            <td>
              <ul>
                <li>Persistent by design</li>
                <li>Managed infrastructure</li>
                <li>Citable in academia</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Registration costs</li>
                <li>Administrative overhead</li>
                <li>Not suitable for all content</li>
              </ul>
            </td>
            <td>Academic, published content</td>
          </tr>
          <tr>
            <td><strong>Custom</strong></td>
            <td>
              <ul>
                <li>Full control</li>
                <li>Can match domain needs</li>
                <li>No dependencies</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>All persistence burden on you</li>
                <li>May not be recognized externally</li>
                <li>Need to document thoroughly</li>
              </ul>
            </td>
            <td>Organization-specific registers</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Functional vs Object Identifiers</h2>
      <p>
        FERIN distinguishes two types of identifiers:
      </p>

      <div class="id-types">
        <div class="id-type">
          <h3>Object Identifier</h3>
          <p>
            Identifies a specific <em>thing</em> regardless of its function.
            Think of it as a serial number—it identifies this specific item.
          </p>
          <div class="example">
            <strong>Example:</strong>
            <code>item-12345</code> identifies a specific register entry
          </div>
          <p><strong>Characteristics:</strong></p>
          <ul>
            <li>Never changes</li>
            <li>Opaque (no embedded meaning)</li>
            <li>Assigned at creation</li>
          </ul>
        </div>

        <div class="id-type">
          <h3>Functional Identifier</h3>
          <p>
            Identifies something by its <em>function</em> or <em>meaning</em>.
            Think of it as a code—identifies what something means.
          </p>
          <div class="example">
            <strong>Example:</strong>
            <code>US</code> identifies the United States country code
          </div>
          <p><strong>Characteristics:</strong></p>
          <ul>
            <li>May be reassigned (carefully!)</li>
            <li>Often meaningful/semantic</li>
            <li>May change with meaning</li>
          </ul>
        </div>
      </div>

      <h3>When to Use Each</h3>
      <table class="usage-table">
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Use</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Need stable reference for citations</td>
            <td>Object ID</td>
            <td>Won't break if meaning changes</td>
          </tr>
          <tr>
            <td>Need human-readable codes</td>
            <td>Functional ID</td>
            <td>Easier for users to work with</td>
          </tr>
          <tr>
            <td>Content may be superseded</td>
            <td>Both</td>
            <td>Object ID for history, Functional ID for current</td>
          </tr>
          <tr>
            <td>Integrating with external systems</td>
            <td>Functional ID</td>
            <td>Matches existing conventions</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Namespace Design</h2>
      <p>
        Namespaces prevent identifier collisions across registers:
      </p>

      <h3>Namespace Patterns</h3>
      <div class="namespace-patterns">
        <div class="pattern">
          <h4>Hierarchical</h4>
          <code>org.example.register.item</code>
          <p>Organized by ownership/domain</p>
        </div>
        <div class="pattern">
          <h4>Date-Based</h4>
          <code>2024.item.001</code>
          <p>Organized by time of creation</p>
        </div>
        <div class="pattern">
          <h4>Type-Based</h4>
          <code>country.US, currency.USD</code>
          <p>Organized by content type</p>
        </div>
      </div>

      <h3>Best Practices</h3>
      <ul>
        <li>Include organization identifier in namespace</li>
        <li>Document namespace rules clearly</li>
        <li>Plan for future registers in same namespace</li>
        <li>Avoid characters that cause problems in URLs</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Persistence Strategies</h2>
      <p>
        How do you ensure identifiers remain valid over time?
      </p>

      <h3>Technical Strategies</h3>
      <ul>
        <li>
          <strong>Use stable domains:</strong> Register a dedicated domain for
          your identifiers, separate from your main website
        </li>
        <li>
          <strong>Implement redirects:</strong> If infrastructure changes,
          maintain redirects from old URLs
        </li>
        <li>
          <strong>Use resolution services:</strong> DOI, URN resolvers, or
          handle systems provide persistence infrastructure
        </li>
        <li>
          <strong>Document fallbacks:</strong> If primary resolution fails,
          where can users look up the identifier?
        </li>
      </ul>

      <h3>Organizational Strategies</h3>
      <ul>
        <li>
          <strong>Identifier policy:</strong> Document the commitment to
          persistence in your register specification
        </li>
        <li>
          <strong>Succession planning:</strong> What happens if your
          organization dissolves?
        </li>
        <li>
          <strong>Escrow arrangements:</strong> For critical registers,
          consider third-party escrow of identifier mappings
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Identifier Anti-Patterns</h2>

      <div class="anti-patterns">
        <div class="anti-pattern">
          <h4>Semantic Identifiers</h4>
          <p>
            <code>/users/john-smith</code> - What happens when John Smith
            changes his name?
          </p>
          <p><strong>Better:</strong> <code>/users/12345</code> with name as attribute</p>
        </div>

        <div class="anti-pattern">
          <h4>Database IDs</h4>
          <p>
            <code>row-42</code> - Tied to specific database implementation
          </p>
          <p><strong>Better:</strong> Generate identifiers independently of storage</p>
        </div>

        <div class="anti-pattern">
          <h4>URLs That Change</h4>
          <p>
            <code>https://app-v1.example.com/item/123</code> - What about v2?
          </p>
          <p><strong>Better:</strong> <code>https://data.example.org/item/123</code></p>
        </div>

        <div class="anti-pattern">
          <h4>Reusing Identifiers</h4>
          <p>
            Reusing <code>US</code> when United States is deleted and later
            someone wants it for "Uruguay"
          </p>
          <p><strong>Better:</strong> Never reuse identifiers, mark as retired</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Example Identifier Policies</h2>

      <div class="policy-example">
        <h3>Simple Policy (Internal Register)</h3>
        <pre><code>Format: UUID
Generation: Automatic on creation
Resolution: API lookup only
Persistence: Guaranteed for register lifetime
Reuse: Never</code></pre>
      </div>

      <div class="policy-example">
        <h3>Comprehensive Policy (Public Register)</h3>
        <pre><code>Object ID Format: urn:{org}:{register}:{uuid}
Functional ID Format: {register}:{semantic-code}
Generation: Object automatic, Functional manual
Resolution: HTTP redirect to current content
Persistence: Guaranteed indefinitely
Succession: Escrow with [designated organization]
Reuse: Never; retired codes marked unavailable</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/getting-started">Getting Started</router-link>
          - Overall implementation guide
        </li>
        <li>
          <router-link to="/build/register-specification">Register Specification</router-link>
          - Documenting your identifier scheme
        </li>
        <li>
          <router-link to="/learn/principles">Principles</router-link>
          - Persistent identification principle
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

.scheme-table ul {
  font-size: var(--font-size-sm);
  margin: 0;
  padding-left: var(--spacing-md);
}

.id-types {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.id-type {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.id-type h3 {
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.id-type p {
  font-size: var(--font-size-sm);
}

.example {
  background: rgba(13, 148, 136, 0.1);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  font-size: var(--font-size-sm);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.example code {
  background: none;
  padding: 0;
  display: block;
  margin-top: var(--spacing-xs);
}

.usage-table {
  margin: var(--spacing-md) 0;
}

.namespace-patterns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-md) 0;
}

.pattern {
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.pattern h4 {
  font-size: var(--font-size-sm);
  margin: 0 0 var(--spacing-xs);
}

.pattern code {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-size: var(--font-size-xs);
}

.pattern p {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
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

.anti-pattern code {
  background: rgba(0, 0, 0, 0.1);
}

.policy-example {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
}

.policy-example h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-sm);
}

.policy-example pre {
  background: var(--color-primary-dark);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin: 0;
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

@media (max-width: 768px) {
  .id-types {
    grid-template-columns: 1fr;
  }

  .namespace-patterns {
    grid-template-columns: 1fr;
  }
}
</style>
