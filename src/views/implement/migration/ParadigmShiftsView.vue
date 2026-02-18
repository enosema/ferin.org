<template>
  <article class="content-page migration-page">
    <nav class="breadcrumb">
      <router-link to="/implement/migration">Migration Guide</router-link>
      <span class="separator">/</span>
      <span class="current">Paradigm Shifts</span>
    </nav>

    <header class="page-header">
      <h1>Understanding the Paradigm Shifts</h1>
      <p class="page-lead">
        ISO 19135:2026 introduces four fundamental conceptual changes from the 2015 edition.
        Understanding these shifts is essential before planning your migration.
      </p>
    </header>

    <div class="shifts-overview">
      <div class="shift-number">1</div>
      <h2>Two-Plane Architecture</h2>
      <p class="shift-intro">
        The most significant architectural change: separation of meaning from data.
      </p>
    </div>

    <section class="content-section">
      <h3>What Changed</h3>
      <div class="comparison">
        <div class="comparison-item before">
          <h4>2015 Edition</h4>
          <p>Single plane containing register items with embedded semantics.</p>
          <div class="diagram">
            <div class="plane single">
              <span>Register Items</span>
              <small>Semantics + Data combined</small>
            </div>
          </div>
        </div>
        <div class="comparison-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        <div class="comparison-item after">
          <h4>2026 Edition</h4>
          <p>Two distinct planes with explicit relationships.</p>
          <div class="diagram">
            <div class="plane concept">
              <span>Concept Plane</span>
              <small>Meaning & Semantics</small>
            </div>
            <div class="plane-connector">↕ linked via</div>
            <div class="plane content">
              <span>Content Plane</span>
              <small>Data & Representation</small>
            </div>
          </div>
        </div>
      </div>

      <h3>Why It Matters</h3>
      <p>
        This separation enables:
      </p>
      <ul>
        <li><strong>Independent evolution:</strong> Concept definitions can change without affecting stored content</li>
        <li><strong>Multiple representations:</strong> The same concept can be represented in different formats</li>
        <li><strong>Schema flexibility:</strong> Data structures can evolve while preserving semantic meaning</li>
        <li><strong>Better governance:</strong> Concepts and content can have different lifecycles</li>
      </ul>

      <h3>Migration Implications</h3>
      <div class="implication-box">
        <h4>What You Need to Do</h4>
        <ol>
          <li>
            <strong>Extract concepts:</strong> Identify the semantic meaning behind your existing register items
            and create corresponding concepts in the concept plane
          </li>
          <li>
            <strong>Define relationships:</strong> Link your content to concept versions
          </li>
          <li>
            <strong>Decouple schemas:</strong> Separate your data schemas from semantic definitions
          </li>
        </ol>
        <p class="note">
          <strong>Note:</strong> For a <em>Governed Content Register</em> (the 2015 equivalent),
          you can treat the concept plane as implicit—concepts exist but don't need explicit management.
        </p>
      </div>
    </section>

    <div class="shifts-overview">
      <div class="shift-number">2</div>
      <h2>Capability-Based Conformance</h2>
      <p class="shift-intro">
        Moving from a fixed hierarchy to modular capabilities you choose based on needs.
      </p>
    </div>

    <section class="content-section">
      <h3>What Changed</h3>
      <div class="comparison">
        <div class="comparison-item before">
          <h4>2015 Edition</h4>
          <p>Three hierarchical conformance classes:</p>
          <div class="hierarchy-diagram">
            <div class="hierarchy-item core">Core</div>
            <div class="hierarchy-arrow">↑ extends</div>
            <div class="hierarchy-item extended">Extended</div>
            <div class="hierarchy-arrow">↑ extends</div>
            <div class="hierarchy-item hierarchical">Hierarchical</div>
          </div>
        </div>
        <div class="comparison-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        <div class="comparison-item after">
          <h4>2026 Edition</h4>
          <p>Modular capability-based register types:</p>
          <div class="capability-diagram">
            <div class="capability-base">Content Register</div>
            <div class="capability-branches">
              <div class="capability-branch">
                <div class="capability-item concept">+ Concepts</div>
                <div class="capability-result">Concept Register</div>
              </div>
              <div class="capability-branch">
                <div class="capability-item governance">+ Governance</div>
                <div class="capability-result">Governed Content</div>
              </div>
              <div class="capability-branch combined">
                <div class="capability-item both">+ Both</div>
                <div class="capability-result">Governed Concept</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Why It Matters</h3>
      <ul>
        <li><strong>Flexibility:</strong> Add only the capabilities you need</li>
        <li><strong>Incremental adoption:</strong> Start simple, add features later</li>
        <li><strong>Clearer compliance:</strong> Each capability has explicit requirements</li>
        <li><strong>Better testing:</strong> Modular test suites for each capability</li>
      </ul>

      <h3>Migration Implications</h3>
      <div class="implication-box">
        <h4>Mapping Your Conformance Class</h4>
        <table class="mapping-table">
          <thead>
            <tr>
              <th>2015 Class</th>
              <th>2026 Type</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Core</strong></td>
              <td>Content Register</td>
              <td>Basic content management capabilities</td>
            </tr>
            <tr>
              <td><strong>Extended</strong></td>
              <td>Governed Content Register</td>
              <td>Governance capabilities without explicit concepts</td>
            </tr>
            <tr>
              <td><strong>Hierarchical</strong></td>
              <td>Governed Concept Register or CCR</td>
              <td>Concept hierarchy capabilities needed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="shifts-overview">
      <div class="shift-number">3</div>
      <h2>Commitments Framework</h2>
      <p class="shift-intro">
        Explicit promises about access, persistence, and transparency that registers make to users.
      </p>
    </div>

    <section class="content-section">
      <h3>What Changed</h3>
      <div class="comparison">
        <div class="comparison-item before">
          <h4>2015 Edition</h4>
          <ul>
            <li>No formal commitments framework</li>
            <li>Implicit assumptions about persistence</li>
            <li>Governance defined but not service levels</li>
          </ul>
        </div>
        <div class="comparison-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        <div class="comparison-item after">
          <h4>2026 Edition</h4>
          <ul>
            <li>Three commitment categories</li>
            <li>Multiple levels within each</li>
            <li>Explicit declarations required</li>
          </ul>
        </div>
      </div>

      <h3>Commitment Categories</h3>
      <div class="commitment-grid">
        <div class="commitment-category">
          <h4>Access Commitments</h4>
          <ol>
            <li><strong>Metadata access:</strong> Metadata accessible via identifiers</li>
            <li><strong>Content access:</strong> Actual content always accessible</li>
            <li><strong>Historic access:</strong> Change history always accessible</li>
          </ol>
        </div>
        <div class="commitment-category">
          <h4>Persistence Commitments</h4>
          <ol>
            <li><strong>Identifier persistence:</strong> Identifiers never change (basic)</li>
            <li><strong>Metadata persistence:</strong> Can rewind metadata state</li>
            <li><strong>Content persistence:</strong> Can rewind content state</li>
            <li><strong>Append-only:</strong> Nothing ever removed</li>
          </ol>
        </div>
        <div class="commitment-category">
          <h4>Transparency Commitments</h4>
          <ol>
            <li><strong>Metadata transparency:</strong> Change metadata available</li>
            <li><strong>Content transparency:</strong> Content changes available</li>
            <li><strong>Historic transparency:</strong> All changes available</li>
          </ol>
        </div>
      </div>

      <h3>Migration Implications</h3>
      <div class="implication-box">
        <h4>What You Need to Do</h4>
        <ol>
          <li>Review your current service levels</li>
          <li>Determine which commitment levels you can support</li>
          <li>Document commitments in your register specification</li>
          <li>Implement any missing capabilities</li>
        </ol>
        <p class="note">
          <strong>Minimum:</strong> You must at least declare identifier persistence (level 1)
          for any compliant register.
        </p>
      </div>
    </section>

    <div class="shifts-overview">
      <div class="shift-number">4</div>
      <h2>Technology Neutrality</h2>
      <p class="shift-intro">
        No prescribed implementation technology—focus on capabilities, not encodings.
      </p>
    </div>

    <section class="content-section">
      <h3>What Changed</h3>
      <div class="comparison">
        <div class="comparison-item before">
          <h4>2015 Edition</h4>
          <ul>
            <li>Normative XML schema provided</li>
            <li>Specific data model in UML</li>
            <li>Implementation details in normative sections</li>
            <li>ISO/TS 19135-2:2012 for XML encoding</li>
          </ul>
        </div>
        <div class="comparison-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        <div class="comparison-item after">
          <h4>2026 Edition</h4>
          <ul>
            <li>No normative XML schema</li>
            <li>Conceptual model only</li>
            <li>Focus on capabilities, not implementations</li>
            <li>Any encoding technology acceptable</li>
          </ul>
        </div>
      </div>

      <h3>Why It Matters</h3>
      <ul>
        <li><strong>Implementation freedom:</strong> Use JSON, XML, RDF, databases, or any technology</li>
        <li><strong>Future-proof:</strong> Not tied to specific technologies that may become obsolete</li>
        <li><strong>Modern architectures:</strong> Supports REST APIs, graph databases, etc.</li>
        <li><strong>Reduced complexity:</strong> Focus on what you need, not prescriptive schemas</li>
      </ul>

      <h3>Migration Implications</h3>
      <div class="implication-box warning">
        <h4>Breaking Change for XML Implementations</h4>
        <p>
          If your 2015 implementation uses the normative XML schema:
        </p>
        <ul>
          <li>The 2026 edition provides <strong>no replacement schema</strong></li>
          <li>You can continue using your existing XML schema</li>
          <li>Consider this an opportunity to evaluate other technologies</li>
          <li>ISO/TS 19135-2:2012 was withdrawn in 2019</li>
        </ul>
      </div>

      <div class="implication-box">
        <h4>Positive Impact</h4>
        <p>
          Technology neutrality means you're not forced to change your underlying technology:
        </p>
        <ul>
          <li>Existing XML implementations can remain (just not normative)</li>
          <li>Database implementations are equally valid</li>
          <li>JSON-based APIs are fully compliant</li>
          <li>Graph databases can be used effectively</li>
        </ul>
      </div>
    </section>

    <nav class="page-nav">
      <router-link to="/implement/migration" class="nav-prev">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Migration Guide Home</span>
      </router-link>
      <router-link to="/implement/migration/terminology" class="nav-next">
        <span class="nav-label">Next</span>
        <span class="nav-title">Terminology Mapping</span>
      </router-link>
    </nav>
  </article>
</template>

<script setup>
</script>

<style scoped>
.migration-page {
  max-width: 900px;
  margin: 0 auto;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  font-size: var(--font-size-sm);
}

.breadcrumb a {
  color: var(--color-accent);
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb .separator {
  color: var(--color-text-lighter);
}

.breadcrumb .current {
  color: var(--color-text-light);
}

.page-header {
  margin-bottom: var(--spacing-2xl);
}

.page-lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
}

/* Shift Overview */
.shifts-overview {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: var(--spacing-2xl) 0 var(--spacing-xl);
  padding: var(--spacing-xl);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, rgba(30, 58, 95, 0.05) 100%);
  border-radius: var(--radius-xl);
}

.shift-number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  color: var(--color-text-inverse);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-md);
}

.shifts-overview h2 {
  margin: 0 0 var(--spacing-sm);
}

.shift-intro {
  color: var(--color-text-light);
  max-width: 600px;
}

/* Content Sections */
.content-section {
  margin-bottom: var(--spacing-2xl);
}

.content-section h3 {
  font-size: var(--font-size-lg);
  margin: var(--spacing-xl) 0 var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-accent);
}

/* Comparison */
.comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--spacing-lg);
  align-items: center;
  margin: var(--spacing-lg) 0;
}

.comparison-item {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.comparison-item.before {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.comparison-item.after {
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.comparison-item h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
}

.comparison-item.before h4 {
  color: #dc2626;
}

.comparison-item.after h4 {
  color: #16a34a;
}

.comparison-item ul {
  font-size: var(--font-size-sm);
  margin: 0;
  padding-left: var(--spacing-lg);
}

.comparison-item li {
  margin-bottom: var(--spacing-xs);
}

.comparison-arrow {
  color: var(--color-accent);
}

.comparison-arrow svg {
  width: 32px;
  height: 32px;
}

/* Diagrams */
.diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}

.plane {
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  text-align: center;
}

.plane span {
  display: block;
  font-weight: var(--font-weight-semibold);
}

.plane small {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin-top: var(--spacing-xs);
}

.plane.single {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.plane.concept {
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
}

.plane.content {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.plane-connector {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

/* Hierarchy Diagram */
.hierarchy-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-md);
}

.hierarchy-item {
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

.hierarchy-item.core {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
}

.hierarchy-item.extended {
  background: rgba(234, 179, 8, 0.1);
  color: #ca8a04;
}

.hierarchy-item.hierarchical {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.hierarchy-arrow {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

/* Capability Diagram */
.capability-diagram {
  margin-top: var(--spacing-md);
}

.capability-base {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: var(--radius-md);
  text-align: center;
  font-weight: var(--font-weight-medium);
  color: #16a34a;
}

.capability-branches {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.capability-branch {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.capability-item {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-medium);
}

.capability-item.concept {
  background: rgba(99, 102, 241, 0.1);
  color: #4f46e5;
}

.capability-item.governance {
  background: rgba(234, 179, 8, 0.1);
  color: #ca8a04;
}

.capability-item.both {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 50%, rgba(234, 179, 8, 0.1) 50%);
  color: var(--color-primary);
}

.capability-result {
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
}

/* Implication Box */
.implication-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.implication-box.warning {
  background: rgba(239, 68, 68, 0.05);
  border-color: rgba(239, 68, 68, 0.2);
}

.implication-box h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
}

.implication-box.warning h4 {
  color: #dc2626;
}

.implication-box ol,
.implication-box ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.implication-box li {
  margin-bottom: var(--spacing-sm);
}

.implication-box .note {
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(13, 148, 136, 0.1);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}

/* Commitment Grid */
.commitment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.commitment-category {
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.commitment-category h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.commitment-category ol {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.commitment-category li {
  margin-bottom: var(--spacing-sm);
}

/* Mapping Table */
.mapping-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.mapping-table th,
.mapping-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.mapping-table th {
  background: var(--color-background);
  font-weight: var(--font-weight-semibold);
}

/* Page Navigation */
.page-nav {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
}

.nav-prev,
.nav-next {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.nav-prev:hover,
.nav-next:hover {
  border-color: var(--color-accent);
  background: rgba(13, 148, 136, 0.05);
}

.nav-next {
  text-align: right;
}

.nav-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-title {
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
}

/* Responsive */
@media (max-width: 768px) {
  .comparison {
    grid-template-columns: 1fr;
  }

  .comparison-arrow {
    transform: rotate(90deg);
    justify-self: center;
  }

  .commitment-grid {
    grid-template-columns: 1fr;
  }

  .page-nav {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .nav-next {
    text-align: left;
  }
}
</style>
