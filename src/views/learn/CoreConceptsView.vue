<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Core Concepts</h1>
      <p class="page-lead">
        Understanding the fundamental concepts of FERIN: the concept plane,
        content plane, and how they work together.
      </p>
    </header>

    <section class="content-section">
      <h2>The Two Planes</h2>
      <p>
        FERIN separates information into two distinct planes of existence:
      </p>

      <div class="concept-diagram">
        <div class="plane concept-plane">
          <h3>Concept Plane</h3>
          <p class="plane-definition">Where <strong>meaning</strong> lives</p>
          <ul>
            <li><strong>Concepts</strong> — abstract ideas in concept systems</li>
            <li><strong>Concept versions</strong> — specific realizations over time</li>
            <li><strong>Concept relationships</strong> — connections between concepts</li>
            <li><strong>Concept version relationships</strong> — connections between versions</li>
          </ul>
        </div>
        <div class="plane content-plane">
          <h3>Content Plane</h3>
          <p class="plane-definition">Where <strong>data</strong> persists</p>
          <ul>
            <li><strong>Register item classes</strong> — data schemas</li>
            <li><strong>Register items</strong> — data instances</li>
            <li><strong>Changes</strong> — records of modifications</li>
          </ul>
        </div>
      </div>

      <div class="spanning-elements">
        <h4>Elements on Both Planes</h4>
        <div class="spanning-grid">
          <div class="spanning-item">
            <strong>Identifiers</strong>
            <p>Both object and functional identifiers apply to entities on both planes.</p>
          </div>
          <div class="spanning-item">
            <strong>Relationships</strong>
            <p>Typed connections exist as concept relationships, concept version relationships, and content relationships.</p>
          </div>
        </div>
      </div>

      <div class="key-insight">
        <h4>Key Relationship</h4>
        <p>
          Each <strong>concept version</strong> is backed by a <strong>register item</strong>
          (data instance) in a particular <strong>register item class</strong> (data schema).
          This separation enables concepts to evolve while preserving the integrity of
          the data that represents them.
        </p>
      </div>

      <p>
        This separation enables concepts to evolve (e.g., refining what "meter" means)
        while preserving the integrity of content that references them
        (e.g., measurements using "m").
      </p>
    </section>

    <section class="content-section">
      <h2>Key Entities</h2>

      <div class="entity-list">
        <div class="entity">
          <h3>Concept</h3>
          <p>
            An abstract idea or category that can be defined. A concept represents
            "what something means" rather than how it's represented.
          </p>
          <div class="example">
            <strong>Example:</strong> The concept of "meter" as the SI unit of length.
            The concept has a definition that has evolved over time (from a physical
            bar to a wavelength standard to the current speed-of-light definition).
          </div>
        </div>

        <div class="entity">
          <h3>Concept Version</h3>
          <p>
            A specific version of a concept's definition at a point in time.
            When a definition changes significantly, a new version is created.
          </p>
          <div class="example">
            <strong>Example:</strong> The 1960 definition of meter (wavelength of krypton-86)
            vs. the 1983 definition (distance light travels in 1/299,792,458 second).
          </div>
        </div>

        <div class="entity">
          <h3>Register Item Class</h3>
          <p>
            A data schema that defines the structure of register items. Each register
            item class specifies what fields and data types are valid for items in
            that class. Register item classes can evolve independently of the concepts
            they represent.
          </p>
          <div class="example">
            <strong>Example:</strong> A "Unit of Measure" register item class might
            define fields for name, symbol, definition, and conversion factor. This
            schema can be versioned separately from the concept of "meter" itself.
          </div>
        </div>

        <div class="entity">
          <h3>Register Item</h3>
          <p>
            A concrete piece of content in a register—an instance of a register item
            class. Register items have identifiers, status, and are managed through
            governance processes. Each concept version is backed by a register item.
          </p>
          <div class="example">
            <strong>Example:</strong> The symbol "m" for meter, with identifier
            <code>urn:iso:std:iso:19135:meter</code>, status "valid", added on
            1960-10-14 by the BIPM, in the "Unit of Measure" register item class.
          </div>
        </div>

        <div class="entity">
          <h3>Register</h3>
          <p>
            A managed collection of register items. A register has an owner,
            follows a register specification, and implements the FERIN framework.
          </p>
          <div class="example">
            <strong>Example:</strong> The Register of Units of Measure (RUM),
            containing all SI units and commonly used non-SI units.
          </div>
        </div>

        <div class="entity">
          <h3>Identifier</h3>
          <p>
            A unique label that distinguishes one entity from another. Identifiers
            exist on <strong>both the concept plane and content plane</strong>. FERIN requires
            two types of identifiers for each entity: an object identifier
            (non-redirectable, permanent) and a functional identifier (redirectable,
            supports hierarchy). This dual approach enables both stable citation and
            semantic addressing.
          </p>
          <div class="example">
            <strong>Example:</strong> The concept "meter" has an object identifier
            <code>uuid:550e8400-...</code> (permanent) and a functional identifier
            <code>/concepts/units/length/meter</code> (hierarchical, semantic).
          </div>
        </div>

        <div class="entity">
          <h3>Relationship</h3>
          <p>
            A typed connection between entities. Relationships exist on both planes:
            concept relationships and concept version relationships on the concept plane,
            and content relationships on the content plane. Relationships enable lineage
            tracking, semantic navigation, and temporal reconstruction.
          </p>
          <div class="example">
            <strong>Example:</strong> A "supersedes" relationship from meter v2 to meter v1
            indicates that v2 replaces v1. A "has-part" relationship from "Address" to
            "Street" indicates composition.
          </div>
        </div>

        <div class="entity">
          <h3>Change</h3>
          <p>
            A record of a modification to register content. Every action (add, modify,
            invalidate, supersede, etc.) creates a change record with complete information
            about what was modified, when, by whom, and why. Change records enable
            point-in-time reconstruction and complete audit trails.
          </p>
          <div class="example">
            <strong>Example:</strong> When the definition of "meter" was updated in 1983,
            a change record was created noting the action (add-version), the affected
            concept, the new definition, the timestamp, and the deciding body (CGPM).
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Identifiers</h2>
      <p>
        Every entity in FERIN requires <strong>two types of identifiers</strong>:
      </p>

      <div class="identifier-types">
        <div class="identifier-type">
          <h3>Object Identifier</h3>
          <p>
            Non-redirectable, permanently assigned to a specific object.
            Provides <strong>permanent reference</strong> for citations.
          </p>
          <div class="example">
            <strong>Example:</strong>
            <code>550e8400-e29b-41d4-a716-446655440000</code> (UUID)
          </div>
        </div>

        <div class="identifier-type">
          <h3>Functional Identifier</h3>
          <p>
            Redirectable, reflects semantic intent. Must support
            <strong>hierarchical specification</strong>.
          </p>
          <div class="example">
            <strong>Example:</strong>
            <code>/concepts/meter/v2.0</code> (URI)
          </div>
        </div>
      </div>

      <h3>What Needs Both Types</h3>
      <table class="id-requirements-table">
        <thead>
          <tr>
            <th>Entity</th>
            <th>Object ID</th>
            <th>Functional ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Register</td>
            <td>—</td>
            <td>Required</td>
          </tr>
          <tr>
            <td>Concepts</td>
            <td>Required</td>
            <td>Required</td>
          </tr>
          <tr>
            <td>Concept Versions</td>
            <td>Required</td>
            <td>Required</td>
          </tr>
          <tr>
            <td>Register Item Classes</td>
            <td>Required</td>
            <td>Required</td>
          </tr>
          <tr>
            <td>Register Items</td>
            <td>Required</td>
            <td>Required</td>
          </tr>
          <tr>
            <td>Changes</td>
            <td>Required</td>
            <td>Required</td>
          </tr>
        </tbody>
      </table>

      <p>
        See <router-link to="/build/identifier-design">Identifier Design</router-link>
        for implementation guidance.
      </p>
    </section>

    <section class="content-section" id="granularity">
      <h2>Concept Granularity</h2>

      <h3>The Challenge</h3>
      <p>
        One of the most common questions in FERIN implementation is:
        <strong>"When should I create a new concept vs. a new version of an existing concept?"</strong>
      </p>
      <p>
        This isn't explicitly defined in the standard, so here's practical guidance:
      </p>

      <h3>Decision Framework</h3>
      <table class="decision-table">
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Action</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Definition clarified but meaning unchanged</td>
            <td>New version</td>
            <td>The concept's identity remains the same</td>
          </tr>
          <tr>
            <td>Definition refined with additional precision</td>
            <td>New version</td>
            <td>Concept is the same, just better understood</td>
          </tr>
          <tr>
            <td>Definition changed to mean something different</td>
            <td>New concept</td>
            <td>Identity has fundamentally changed</td>
          </tr>
          <tr>
            <td>Scope or domain of application changed</td>
            <td>New concept</td>
            <td>Context has shifted</td>
          </tr>
          <tr>
            <td>Same term, different meaning in different contexts</td>
            <td>Multiple concepts</td>
            <td>Homonyms require distinct concepts</td>
          </tr>
        </tbody>
      </table>

      <h3>The "Would It Confuse Users?" Test</h3>
      <p>
        A practical heuristic: if existing references to the concept would become
        confusing or misleading after a change, create a new concept. If references
        would still be accurate (just less precise), create a new version.
      </p>

      <div class="example-box">
        <h4>Example: Defining "meter"</h4>
        <p>
          When the definition of meter changed from a physical bar (1889) to a
          wavelength (1960) to the speed of light (1983), these were <strong>new
          versions</strong> because the concept "meter" remained fundamentally the
          same unit of length—the precision just improved.
        </p>
        <p>
          However, if meter had been redefined as "1/10 of a nautical mile," that
          would require a <strong>new concept</strong> because the fundamental
          meaning changed.
        </p>
      </div>
    </section>

    <section class="content-section">
      <h2>Concept Systems</h2>
      <p>
        Concepts are organized into <strong>concept systems</strong>—structured
        sets of related concepts. Common patterns include:
      </p>

      <div class="concept-systems">
        <div class="system-pattern">
          <h4>Generalization-Specialization</h4>
          <p>
            Broader concepts (general) relate to narrower concepts (specific).
          </p>
          <div class="diagram-example">
            <code>Unit → Length Unit → meter</code>
          </div>
        </div>

        <div class="system-pattern">
          <h4>Whole-Part</h4>
          <p>
            Concepts that are composed of other concepts.
          </p>
          <div class="diagram-example">
            <code>Address → Street, City, PostalCode</code>
          </div>
        </div>

        <div class="system-pattern">
          <h4>Sequential</h4>
          <p>
            Concepts that follow each other in a sequence.
          </p>
          <div class="diagram-example">
            <code>Draft → Review → Approved → Published</code>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Concept Lifecycle</h2>
      <p>
        Concepts progress through a lifecycle as they are defined, refined,
        and potentially superseded:
      </p>

      <div class="lifecycle-stages">
        <div class="stage">
          <span class="stage-number">1</span>
          <h4>Proposed</h4>
          <p>A new concept is submitted for consideration</p>
        </div>
        <div class="stage">
          <span class="stage-number">2</span>
          <h4>Under Review</h4>
          <p>The concept definition is being evaluated</p>
        </div>
        <div class="stage">
          <span class="stage-number">3</span>
          <h4>Valid</h4>
          <p>The concept is approved and available for use</p>
        </div>
        <div class="stage">
          <span class="stage-number">4</span>
          <h4>Superseded</h4>
          <p>A newer version or replacement concept exists</p>
        </div>
        <div class="stage">
          <span class="stage-number">5</span>
          <h4>Invalid/Retired</h4>
          <p>The concept is no longer valid for use</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/learn/principles">Principles</router-link>
          - The six core principles of FERIN
        </li>
        <li>
          <router-link to="/learn/framework">Framework Overview</router-link>
          - Data, Governance, and Compliance pillars
        </li>
        <li>
          <router-link to="/build/versioning">Versioning</router-link>
          - Detailed guidance on versioning strategies
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
  font-size: var(--font-size-xl);
  margin: var(--spacing-lg) 0 var(--spacing-md);
}

.concept-diagram {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.plane {
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
}

.concept-plane {
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(13, 148, 136, 0.05) 100%);
  border: 1px solid rgba(13, 148, 136, 0.3);
}

.content-plane {
  background: linear-gradient(135deg, rgba(30, 58, 95, 0.1) 0%, rgba(30, 58, 95, 0.05) 100%);
  border: 1px solid rgba(30, 58, 95, 0.3);
}

.plane h3 {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-lg);
}

.plane-definition {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.plane ul {
  font-size: var(--font-size-sm);
}

.entity-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.entity {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.entity h3 {
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.entity p {
  margin-bottom: var(--spacing-md);
}

.example {
  background: rgba(13, 148, 136, 0.05);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-md);
  font-size: var(--font-size-sm);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.example-box {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.example-box h4 {
  margin-bottom: var(--spacing-sm);
}

.decision-table {
  margin: var(--spacing-lg) 0;
}

.concept-systems {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.system-pattern {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.system-pattern h4 {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-base);
}

.system-pattern p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
}

.diagram-example {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  background: var(--color-background);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
}

.lifecycle-stages {
  display: flex;
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  overflow-x: auto;
}

.stage {
  flex: 1;
  min-width: 140px;
  text-align: center;
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.stage-number {
  display: inline-flex;
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  color: var(--color-text-inverse);
  border-radius: 50%;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-sm);
}

.stage h4 {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
}

.stage p {
  font-size: var(--font-size-xs);
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

.spanning-elements {
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-lg);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
}

.spanning-elements h4 {
  margin: 0 0 var(--spacing-md);
  text-align: center;
  color: var(--color-text);
  font-size: var(--font-size-base);
}

.spanning-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.spanning-item {
  background: var(--color-surface);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  text-align: center;
}

.spanning-item strong {
  display: block;
  margin-bottom: var(--spacing-xs);
  color: var(--color-accent);
}

.spanning-item p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

/* Identifier types section */
.identifier-types {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.identifier-type {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  min-width: 0; /* Allow grid item to shrink */
  overflow: hidden; /* Prevent content overflow */
}

.identifier-type h3 {
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
  font-size: var(--font-size-base);
}

.identifier-type p {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
}

.identifier-type .example {
  font-size: var(--font-size-xs);
  overflow-wrap: break-word;
  word-break: break-word;
}

.identifier-type .example code {
  display: inline-block;
  word-break: break-all;
  max-width: 100%;
  font-size: var(--font-size-xs);
}

.id-requirements-table {
  margin: var(--spacing-lg) 0;
}

.id-requirements-table th,
.id-requirements-table td {
  text-align: center;
}

.id-requirements-table td:first-child {
  text-align: left;
}

.key-insight {
  background: rgba(13, 148, 136, 0.05);
  border: 1px solid rgba(13, 148, 136, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.key-insight h4 {
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.key-insight p {
  margin: 0;
  font-size: var(--font-size-sm);
}

@media (max-width: 768px) {
  .concept-diagram {
    grid-template-columns: 1fr;
  }

  .concept-systems {
    grid-template-columns: 1fr;
  }

  .identifier-types {
    grid-template-columns: 1fr;
  }

  .spanning-grid {
    grid-template-columns: 1fr;
  }
}
</style>
