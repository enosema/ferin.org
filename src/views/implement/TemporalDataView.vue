<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Temporal Data and Complete History</h1>
      <p class="page-lead">
        FERIN provides complete historical tracking through the concept plane,
        where concept relationships track both concept evolution and concept
        version relationships. Every change is recorded for point-in-time
        reconstruction and lineage tracing.
      </p>
    </header>

    <section class="content-section">
      <h2>The FERIN Temporal Model</h2>
      <p>
        Temporal data in FERIN is managed through the
        <router-link to="/understand/core-concepts">concept plane</router-link>,
        which provides rich concept semantics for tracking relationships between
        concepts and between concept versions over time.
      </p>

      <div class="conceptual-overview">
        <div class="plane">
          <h4>Concept Plane</h4>
          <ul>
            <li><strong>Concepts</strong> — abstract ideas that evolve over time</li>
            <li><strong>Concept versions</strong> — specific realizations at points in time</li>
            <li><strong>Concept relations</strong> — connections between concepts</li>
            <li><strong>Concept version relations</strong> — connections between versions</li>
          </ul>
        </div>
        <div class="plane">
          <h4>Content Plane</h4>
          <ul>
            <li><strong>Register item classes</strong> — schemas defining structure</li>
            <li><strong>Register items</strong> — instances of concepts</li>
            <li><strong>Changes</strong> — records of all modifications</li>
          </ul>
        </div>
      </div>

      <p>
        The concept plane maintains the temporal and semantic relationships,
        while the content plane stores the actual data instances. This separation
        enables independent evolution of meaning and representation.
      </p>
    </section>

    <section class="content-section">
      <h2>Concept Version Timeline</h2>
      <p>
        Each concept has one or more concept versions, connected through
        relations. The <code>#></code> relation indicates "has version" and
        <code>#=></code> indicates "current version."
      </p>

      <div class="timeline-example">
        <div class="timeline-header">
          <h3>Example: Concept X Timeline</h3>
        </div>
        <div class="timeline">
          <div class="timeline-event">
            <div class="event-marker created"></div>
            <div class="event-content">
              <span class="event-time">t₁</span>
              <span class="event-action">Add Concept</span>
              <div class="ferin-notation">
                <code>Concept X #> Concept X v1.0</code>
              </div>
            </div>
          </div>
          <div class="timeline-event">
            <div class="event-marker modified"></div>
            <div class="event-content">
              <span class="event-time">t₂</span>
              <span class="event-action">Add Concept Version</span>
              <div class="ferin-notation">
                <code>Concept X #> Concept X v1.1</code><br>
                <code>Concept X v1.1 !> Concept X v1.0</code>
              </div>
            </div>
          </div>
          <div class="timeline-event split">
            <div class="event-marker split"></div>
            <div class="event-content">
              <span class="event-time">t₃</span>
              <span class="event-action">Split</span>
              <div class="ferin-notation">
                <code>Concept Y #> Concept Y v1.0</code><br>
                <code>Concept Z #> Concept Z v1.0</code><br>
                <code>Concept Y v1.0 |> Concept X v1.1</code><br>
                <code>Concept Z v1.0 |> Concept X v1.1</code>
              </div>
            </div>
          </div>
          <div class="timeline-event merge">
            <div class="event-marker merge"></div>
            <div class="event-content">
              <span class="event-time">t₄</span>
              <span class="event-action">Merge</span>
              <div class="ferin-notation">
                <code>Concept Q #> Concept Q v1.0</code><br>
                <code>Concept Q v1.0 |> Concept Y v1.0</code><br>
                <code>Concept Q v1.0 |> Concept W v1.0</code>
              </div>
            </div>
          </div>
          <div class="timeline-event">
            <div class="event-marker invalidated"></div>
            <div class="event-content">
              <span class="event-time">t₅</span>
              <span class="event-action">Invalidate</span>
              <div class="ferin-notation">
                <code>Concept Q v1.0.status.validity → invalid</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>FERIN Relation Notation</h2>
      <p>
        FERIN uses specific notation for concept and content relations.
        These relations enable temporal tracking and lineage reconstruction.
      </p>

      <table class="notation-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Relation</th>
            <th>Temporal Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>#></code></td>
            <td>has version</td>
            <td>Links concept to its versions; links version to sub-versions</td>
          </tr>
          <tr>
            <td><code>#=></code></td>
            <td>current version</td>
            <td>Points to the current version of a concept</td>
          </tr>
          <tr>
            <td><code>!></code></td>
            <td>supersedes</td>
            <td>Indicates replacement; superseded version is no longer current</td>
          </tr>
          <tr>
            <td><code>|></code></td>
            <td>has part</td>
            <td>Indicates composition; used in splits and merges</td>
          </tr>
          <tr>
            <td><code>(@...)</code></td>
            <td>instance of</td>
            <td>Links realization to its definition</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Point-in-Time Queries</h2>
      <p>
        Because all relations and statuses can have temporal constraints,
        the register can be reconstructed at any point in time by:
      </p>

      <ol>
        <li>Filtering concept versions by their validity period</li>
        <li>Following relations that were active at that time</li>
        <li>Resolving the current version relation as it existed then</li>
      </ol>

      <div class="query-examples">
        <div class="query-example">
          <h4>Query: State at t₃</h4>
          <div class="query-result">
            <ul>
              <li>Concept X: published (has version v1.1)</li>
              <li>Concept Y: published (has version v1.0)</li>
              <li>Concept Z: published (has version v1.0)</li>
              <li>Concept W: published</li>
            </ul>
          </div>
        </div>
        <div class="query-example">
          <h4>Query: State at t₄</h4>
          <div class="query-result">
            <ul>
              <li>Concept X: superseded by Y, Z</li>
              <li>Concept Y: superseded (merged into Q)</li>
              <li>Concept Z: published</li>
              <li>Concept W: superseded (merged into Q)</li>
              <li>Concept Q: published (has version v1.0)</li>
            </ul>
          </div>
        </div>
        <div class="query-example">
          <h4>Query: Lineage of Concept Q</h4>
          <div class="query-result ferin-lineage">
            <code>Q |> [Y, W] |> Y |> X</code>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Split and Merge Operations</h2>
      <p>
        Complex transformations—splits and merges—are tracked through
        concept version relations. These are critical for reference data
        that evolves through organizational, political, or scientific changes.
      </p>

      <div class="operations">
        <div class="operation">
          <h3>Split Operation</h3>
          <p>One concept becomes multiple concepts.</p>
          <div class="operation-diagram">
            <div class="diagram-box single">
              <span class="item-id">CS</span>
              <span class="item-name">Czechoslovakia</span>
            </div>
            <div class="diagram-arrow split-arrow">
              <span>→</span>
            </div>
            <div class="diagram-boxes">
              <div class="diagram-box">
                <span class="item-id">CZ</span>
                <span class="item-name">Czech Republic</span>
              </div>
              <div class="diagram-box">
                <span class="item-id">SK</span>
                <span class="item-name">Slovakia</span>
              </div>
            </div>
          </div>
          <div class="operation-relations">
            <h4>FERIN Notation</h4>
            <pre class="ferin-code">CZ |> CS
SK |> CS
CS.status.publication → superseded</pre>
          </div>
          <div class="operation-query">
            <h4>Query: "What replaced CS?"</h4>
            <p>Follow <code>|></code> relations to find CZ and SK</p>
          </div>
        </div>

        <div class="operation">
          <h3>Merge Operation</h3>
          <p>Multiple concepts become one concept.</p>
          <div class="operation-diagram">
            <div class="diagram-boxes">
              <div class="diagram-box small">
                <span class="item-id">EUR-AT</span>
              </div>
              <div class="diagram-box small">
                <span class="item-id">EUR-BE</span>
              </div>
              <div class="diagram-box small">
                <span class="item-id">EUR-DE</span>
              </div>
              <div class="diagram-box small">
                <span class="item-id">...</span>
              </div>
            </div>
            <div class="diagram-arrow merge-arrow">
              <span>→</span>
            </div>
            <div class="diagram-box single">
              <span class="item-id">EUR</span>
              <span class="item-name">Eurozone</span>
            </div>
          </div>
          <div class="operation-relations">
            <h4>FERIN Notation</h4>
            <pre class="ferin-code">EUR |> [EUR-AT, EUR-BE, EUR-DE, ...]
EUR-AT.status.publication → superseded
EUR-BE.status.publication → superseded
...</pre>
          </div>
          <div class="operation-query">
            <h4>Query: "EUR codes in 2002?"</h4>
            <p>Query temporal constraint on relations to find pre-merge entries</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Change Records</h2>
      <p>
        Every change in FERIN creates a <strong>change record</strong> that
        captures sufficient information to replay the change history. This
        enables point-in-time reconstruction of any register object.
      </p>

      <div class="change-record-structure">
        <h3>Change Record Components</h3>
        <div class="change-components">
          <div class="change-component">
            <h4>Object Identifier</h4>
            <p>Permanent identifier for this change</p>
          </div>
          <div class="change-component">
            <h4>Action</h4>
            <p>The operation performed (add, modify, invalidate, etc.)</p>
          </div>
          <div class="change-component">
            <h4>Affected Objects</h4>
            <p>Links to modified concepts, concept versions, register items</p>
          </div>
          <div class="change-component">
            <h4>Change Content</h4>
            <p>New, replaced, or removed content</p>
          </div>
          <div class="change-component">
            <h4>Timestamp</h4>
            <p>When the change occurred</p>
          </div>
          <div class="change-component">
            <h4>Actor</h4>
            <p>Who performed the change (per governance process)</p>
          </div>
        </div>
      </div>

      <div class="change-example">
        <h4>Example: Change Record for Split</h4>
        <pre class="ferin-code">Change: uuid:550e8400-...
Action: split
Affected: Concept CS, Concept CZ, Concept SK
Content:
  - Concept CS.status → superseded
  - Concept CZ created
  - Concept SK created
  - CZ |> CS
  - SK |> CS
Timestamp: 1993-01-01T00:00:00Z
Actor: Control Body decision CB-1992-47</pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Temporal Constraints</h2>
      <p>
        Relations and statuses can have temporal constraints indicating when
        they apply. This enables precise historical queries.
      </p>

      <div class="temporal-constraints">
        <div class="constraint-type">
          <h4>Validity Period</h4>
          <p>A status or relation applies during a specific time range</p>
          <pre class="ferin-code">CS.status.validity
  applies: until 1993-01-01</pre>
        </div>
        <div class="constraint-type">
          <h4>Effective Date</h4>
          <p>A relation becomes effective from a specific date</p>
          <pre class="ferin-code">CZ |> CS
  applies: from 1993-01-01</pre>
        </div>
        <div class="constraint-type">
          <h4>Multiple Intervals</h4>
          <p>Complex temporal patterns with multiple periods</p>
          <pre class="ferin-code">Concept.status
  applies: [1990-01-01 to 1995-12-31,
            2000-01-01 to 2005-12-31]</pre>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Regulatory Compliance</h2>
      <p>
        FERIN's complete history through change records satisfies regulatory
        requirements for audit trails, immutability, and point-in-time
        reconstruction.
      </p>

      <div class="compliance-table">
        <table>
          <thead>
            <tr>
              <th>Regulatory Requirement</th>
              <th>FERIN Implementation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Immutable audit trail</strong>
                <p>Every change must be recorded and tamper-evident</p>
              </td>
              <td>
                <ul>
                  <li>Change records with object identifiers</li>
                  <li>Timestamp and actor metadata</li>
                  <li>Before/after content in change records</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Retention period</strong>
                <p>History must be preserved for specified duration</p>
              </td>
              <td>
                <ul>
                  <li>Defined in register specification</li>
                  <li>Change records preserved indefinitely or per commitment</li>
                  <li>Deletion status marks content removed, not destroyed</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Point-in-time reconstruction</strong>
                <p>Reconstruct state at any historical date</p>
              </td>
              <td>
                <ul>
                  <li>Temporal constraints on relations and statuses</li>
                  <li>Change records enable replay</li>
                  <li>Concept version history preserved</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>Commitment-Based History Access</h2>
      <p>
        Access to historical data is governed by the register's
        <router-link to="/understand/commitments">commitments</router-link>.
        Different stakeholders have different access rights.
      </p>

      <div class="commitment-levels">
        <div class="commitment-level">
          <h4>Full Transparency</h4>
          <p class="level-description">All changes visible, all versions queryable</p>
          <p class="level-use-case">Open standards registries, public reference data</p>
        </div>
        <div class="commitment-level">
          <h4>Limited Transparency</h4>
          <p class="level-description">Current + N previous versions only</p>
          <p class="level-use-case">Commercial registries, subscription services</p>
        </div>
        <div class="commitment-level">
          <h4>Regulatory Read-Only</h4>
          <p class="level-description">Full history, immutable, access-logged</p>
          <p class="level-use-case">Compliance audits, regulatory oversight</p>
        </div>
        <div class="commitment-level">
          <h4>Internal Only</h4>
          <p class="level-description">Full to internal users, limited to external</p>
          <p class="level-use-case">Proprietary reference data, competitive data</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/understand/core-concepts">Core Concepts</router-link>
          - The concept plane and content plane model
        </li>
        <li>
          <router-link to="/implement/schema-evolution">Schema Evolution</router-link>
          - Versioning schemas independently of data
        </li>
        <li>
          <router-link to="/reference/statuses">Statuses</router-link>
          - Validity, publication, redaction, deletion statuses
        </li>
        <li>
          <router-link to="/reference/relations">Relations</router-link>
          - Complete relation reference with notation
        </li>
        <li>
          <router-link to="/implement/technology-choices">Technology Choices</router-link>
          - Implementation patterns for temporal data
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

.content-section h4 {
  font-size: var(--font-size-base);
  margin: var(--spacing-md) 0 var(--spacing-sm);
}

.conceptual-overview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.plane {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.plane h4 {
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.plane ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.plane li {
  margin-bottom: var(--spacing-xs);
}

.timeline-example {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.timeline-header h3 {
  margin: 0 0 var(--spacing-lg);
  font-size: var(--font-size-base);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.timeline-event {
  display: flex;
  gap: var(--spacing-md);
}

.event-marker {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 4px;
  flex-shrink: 0;
}

.event-marker.created {
  background: var(--color-success);
}

.event-marker.modified {
  background: var(--color-accent);
}

.event-marker.split {
  background: #8b5cf6;
}

.event-marker.merge {
  background: #f59e0b;
}

.event-marker.invalidated {
  background: var(--color-error);
}

.event-content {
  flex: 1;
}

.event-time {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
  margin-right: var(--spacing-sm);
}

.event-action {
  font-weight: var(--font-weight-medium);
  margin-right: var(--spacing-md);
}

.ferin-notation {
  margin-top: var(--spacing-sm);
  padding: var(--spacing-sm);
  background: var(--color-background);
  border-radius: var(--radius-md);
}

.ferin-notation code {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  display: block;
  line-height: 1.6;
}

.notation-table {
  margin: var(--spacing-lg) 0;
}

.notation-table th:first-child,
.notation-table td:first-child {
  text-align: left;
}

.notation-table code {
  font-family: var(--font-mono);
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
}

.query-examples {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.query-example {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
}

.query-example h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
}

.query-result {
  font-size: var(--font-size-sm);
}

.query-result ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.query-result li {
  margin-bottom: var(--spacing-xs);
}

.ferin-lineage code {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text);
}

.operations {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
}

.operation {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.operation h3 {
  margin: 0 0 var(--spacing-sm);
}

.operation > p {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
}

.operation-diagram {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background: var(--color-background);
  border-radius: var(--radius-md);
}

.diagram-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.diagram-box.single {
  min-width: 120px;
}

.diagram-box.small {
  padding: var(--spacing-sm);
}

.item-id {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
}

.item-name {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.diagram-boxes {
  display: flex;
  gap: var(--spacing-sm);
}

.diagram-arrow {
  font-size: var(--font-size-xl);
  color: var(--color-accent);
}

.split-arrow {
  color: #8b5cf6;
}

.merge-arrow {
  color: #f59e0b;
}

.operation-relations,
.operation-query {
  padding: var(--spacing-md);
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
}

.operation-relations h4,
.operation-query h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.operation-query p {
  margin: 0;
  font-size: var(--font-size-sm);
}

.ferin-code {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  background: var(--color-background);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin: 0;
  white-space: pre-wrap;
  line-height: 1.5;
}

.change-record-structure {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.change-record-structure h3 {
  margin: 0 0 var(--spacing-md);
}

.change-components {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.change-component {
  background: var(--color-background);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.change-component h4 {
  margin: 0 0 var(--spacing-xs);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
}

.change-component p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.change-example {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.change-example h4 {
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.temporal-constraints {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.constraint-type {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.constraint-type h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
}

.constraint-type p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.compliance-table {
  margin: var(--spacing-lg) 0;
  overflow-x: auto;
}

.compliance-table table {
  width: 100%;
  border-collapse: collapse;
}

.compliance-table th,
.compliance-table td {
  padding: var(--spacing-md);
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--color-border);
}

.compliance-table th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
}

.compliance-table td p {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.compliance-table td ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.compliance-table td li {
  margin-bottom: var(--spacing-xs);
}

.commitment-levels {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.commitment-level {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.commitment-level h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
  color: var(--color-accent);
}

.level-description {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.level-use-case {
  margin: 0;
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  font-style: italic;
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
  .conceptual-overview {
    grid-template-columns: 1fr;
  }

  .query-examples {
    grid-template-columns: 1fr;
  }

  .change-components {
    grid-template-columns: 1fr;
  }

  .temporal-constraints {
    grid-template-columns: 1fr;
  }

  .commitment-levels {
    grid-template-columns: 1fr;
  }

  .operation-diagram {
    flex-direction: column;
    align-items: flex-start;
  }

  .diagram-boxes {
    flex-direction: column;
    width: 100%;
  }
}
</style>
