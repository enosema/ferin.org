<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Temporal Data and Complete History</h1>
      <p class="page-lead">
        FERIN provides complete historical tracking - every change, every split,
        every merge, across the entire timeline. This enables point-in-time
        queries, lineage reconstruction, and regulatory-grade audit trails.
      </p>
    </header>

    <section class="content-section">
      <h2>The Complete Timeline</h2>
      <p>
        Every register item has a complete history. You can reconstruct the
        state of the register at any point in time, trace the lineage of any
        item through splits and merges, and provide regulatory-grade audit
        trails with immutable change records.
      </p>

      <div class="timeline-example">
        <div class="timeline-header">
          <h3>Example: Timeline of Item X</h3>
        </div>
        <div class="timeline">
          <div class="timeline-event">
            <div class="event-marker created"></div>
            <div class="event-content">
              <span class="event-time">t1</span>
              <span class="event-action">Created</span>
              <span class="event-status">status: valid</span>
            </div>
          </div>
          <div class="timeline-event">
            <div class="event-marker modified"></div>
            <div class="event-content">
              <span class="event-time">t2</span>
              <span class="event-action">Modified</span>
              <span class="event-status">version: 2</span>
            </div>
          </div>
          <div class="timeline-event split">
            <div class="event-marker split"></div>
            <div class="event-content">
              <span class="event-time">t3</span>
              <span class="event-action">Split</span>
              <div class="event-details">
                <p>X → Y, Z</p>
                <ul>
                  <li>X.status → superseded</li>
                  <li>Y created (derived from X)</li>
                  <li>Z created (derived from X)</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="timeline-event merge">
            <div class="event-marker merge"></div>
            <div class="event-content">
              <span class="event-time">t4</span>
              <span class="event-action">Merge</span>
              <div class="event-details">
                <p>Y + W → Q</p>
                <ul>
                  <li>Y.status → superseded</li>
                  <li>W.status → superseded</li>
                  <li>Q created (merged from Y, W)</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="timeline-event">
            <div class="event-marker invalidated"></div>
            <div class="event-content">
              <span class="event-time">t5</span>
              <span class="event-action">Invalidated</span>
              <span class="event-status">Q.status → invalid</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Point-in-Time Queries</h2>
      <p>
        Query the register state at any historical point. This is essential for
        audit, reproducibility, and understanding what was true at a specific
        moment.
      </p>

      <div class="query-examples">
        <div class="query-example">
          <h4>Query: State at t3</h4>
          <div class="query-result">
            <ul>
              <li>X: valid</li>
              <li>Y: valid</li>
              <li>Z: valid</li>
              <li>W: valid</li>
            </ul>
          </div>
        </div>
        <div class="query-example">
          <h4>Query: State at t4</h4>
          <div class="query-result">
            <ul>
              <li>X: superseded</li>
              <li>Y: superseded</li>
              <li>Z: valid</li>
              <li>W: superseded</li>
              <li>Q: valid</li>
            </ul>
          </div>
        </div>
        <div class="query-example">
          <h4>Query: Lineage of Q</h4>
          <div class="query-result">
            <p class="lineage">Q ← [Y, W] ← Y ← X</p>
          </div>
        </div>
      </div>

      <h3>Implementation Pattern</h3>
      <div class="code-block">
        <pre><code>-- Temporal query: state at specific timestamp
SELECT * FROM items
WHERE valid_from <= :timestamp
  AND (valid_until IS NULL OR valid_until > :timestamp)
  AND status = 'valid';

-- Reconstruct register state at historical point
SELECT * FROM items
WHERE register_id = :register_id
  AND valid_from <= :historical_timestamp
  AND (valid_until IS NULL OR valid_until > :historical_timestamp);</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Split and Merge Operations</h2>
      <p>
        Complex transformations - splits and merges - are fully tracked with
        complete lineage. This is critical for reference data that evolves
        through organizational, political, or scientific changes.
      </p>

      <div class="operations">
        <div class="operation">
          <h3>Split Operation</h3>
          <p>One item becomes multiple items.</p>
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
            <h4>Relations Created</h4>
            <ul>
              <li><code>CZ</code> has_part_of <code>CS</code></li>
              <li><code>SK</code> has_part_of <code>CS</code></li>
              <li><code>CS</code> status → <code>invalid</code></li>
            </ul>
          </div>
          <div class="operation-query">
            <h4>Query: "What replaced CS?"</h4>
            <p>Answer: "CZ or SK (context-dependent on use case)"</p>
          </div>
        </div>

        <div class="operation">
          <h3>Merge Operation</h3>
          <p>Multiple items become one item.</p>
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
            <h4>Relations Created</h4>
            <ul>
              <li><code>EUR</code> supersedes <code>[EUR-AT, EUR-BE, EUR-DE, ...]</code></li>
              <li>All source items status → <code>superseded</code></li>
            </ul>
          </div>
          <div class="operation-query">
            <h4>Query: "EUR codes in 2002?"</h4>
            <p>Answer: Must include pre-unification entries (EUR-AT, EUR-BE, etc.)</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Regulatory Compliance</h2>
      <p>
        FERIN's complete history satisfies regulatory requirements for audit
        trails, immutability, and point-in-time reconstruction.
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
                  <li>Timestamp (ISO 8601)</li>
                  <li>Actor (who made the change)</li>
                  <li>Justification (why)</li>
                  <li>Before/After values</li>
                  <li>Optional: cryptographic hash chain</li>
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
                  <li>Configurable per register</li>
                  <li>History retained even after deletion</li>
                  <li>Commitment-based retention policies</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Read-only auditor access</strong>
                <p>Auditors can view but not modify</p>
              </td>
              <td>
                <ul>
                  <li>Role-based access control</li>
                  <li>Auditor role has read-only permissions</li>
                  <li>All access logged</li>
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
                  <li>Temporal queries supported</li>
                  <li>Complete change history</li>
                  <li>Split/merge lineage preserved</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="example-box">
        <h4>Example: SEC Compliance</h4>
        <p>
          For SEC regulatory requirements, a FERIN register can provide:
        </p>
        <ul>
          <li>Cryptographic attestation of change records (hash chains)</li>
          <li>Configurable retention periods (e.g., 7 years)</li>
          <li>External auditor access with read-only credentials</li>
          <li>Point-in-time reconstruction for compliance verification</li>
          <li>Complete lineage for any item under investigation</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Commitment-Based History Access</h2>
      <p>
        Different stakeholders have different access rights to history. FERIN
        supports commitment-based access control for historical data.
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
      <h2>Implementation Patterns</h2>

      <div class="patterns">
        <div class="pattern">
          <h3>Event Sourcing</h3>
          <p>Store events, not current state. Reconstruct any point in time.</p>
          <div class="code-block">
            <pre><code>const events = [
  { type: 'created', item: 'X', data: {...}, timestamp: 't1', actor: 'alice' },
  { type: 'modified', item: 'X', delta: {...}, timestamp: 't2', actor: 'bob' },
  { type: 'split', item: 'X', children: ['Y', 'Z'], timestamp: 't3' },
  { type: 'merged', sources: ['Y', 'W'], result: 'Q', timestamp: 't4' },
  { type: 'invalidated', item: 'Q', reason: '...', timestamp: 't5' }
];

// Reconstruct state at any point
function getStateAt(targetTime) {
  return events
    .filter(e => e.timestamp <= targetTime)
    .reduce(applyEvent, initialState);
}

// Trace lineage
function traceLineage(itemId) {
  return events
    .filter(e => e.item === itemId || e.children?.includes(itemId) || e.result === itemId)
    .reduce(buildLineage, []);
}</code></pre>
          </div>
        </div>

        <div class="pattern">
          <h3>Temporal Tables</h3>
          <p>Store validity periods with each record.</p>
          <div class="code-block">
            <pre><code>CREATE TABLE items (
  id UUID PRIMARY KEY,
  content JSONB NOT NULL,
  status TEXT NOT NULL,
  valid_from TIMESTAMP NOT NULL,
  valid_until TIMESTAMP,
  derived_from UUID[],
  merged_into UUID
);

-- Query state at specific time
SELECT * FROM items
WHERE valid_from <= :target_time
  AND (valid_until IS NULL OR valid_until > :target_time);

-- Trace lineage
WITH RECURSIVE lineage AS (
  SELECT * FROM items WHERE id = :item_id
  UNION ALL
  SELECT i.* FROM items i
  JOIN lineage l ON i.id = ANY(l.derived_from)
)
SELECT * FROM lineage;</code></pre>
          </div>
        </div>

        <div class="pattern">
          <h3>Change Records Table</h3>
          <p>Separate table for all change metadata.</p>
          <div class="code-block">
            <pre><code>CREATE TABLE change_records (
  id UUID PRIMARY KEY,
  item_id UUID NOT NULL,
  action TEXT NOT NULL,  -- created, modified, split, merged, invalidated
  timestamp TIMESTAMP NOT NULL,
  actor TEXT NOT NULL,
  justification TEXT,
  before_state JSONB,
  after_state JSONB,
  attestation_hash TEXT  -- Optional: cryptographic proof
);

-- Complete audit trail for an item
SELECT * FROM change_records
WHERE item_id = :item_id
ORDER BY timestamp;

-- Register state at historical point
SELECT DISTINCT ON (item_id) *
FROM change_records
WHERE timestamp <= :target_time
ORDER BY item_id, timestamp DESC;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/implement/schema-evolution">Schema Evolution and Lazy Migration</router-link>
          - Versioning schemas independently of data
        </li>
        <li>
          <router-link to="/reference/statuses">Statuses Reference</router-link>
          - Valid, invalid, superseded, and other item statuses
        </li>
        <li>
          <router-link to="/reference/relations">Relations Reference</router-link>
          - Supersedes, has_part_of, and other relations
        </li>
        <li>
          <router-link to="/implement/technology-choices">Technology Implementation Guide</router-link>
          - Database-specific temporal patterns
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
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  align-items: baseline;
}

.event-time {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
}

.event-action {
  font-weight: var(--font-weight-medium);
}

.event-status {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.event-details {
  width: 100%;
  margin-top: var(--spacing-xs);
  padding: var(--spacing-sm);
  background: var(--color-background);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
}

.event-details p {
  margin: 0 0 var(--spacing-xs);
  font-weight: var(--font-weight-medium);
}

.event-details ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  color: var(--color-text-light);
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

.lineage {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text);
}

.code-block {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin: var(--spacing-md) 0;
}

.code-block pre {
  margin: 0;
  padding: var(--spacing-md);
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-relaxed);
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

.operation-relations ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.operation-relations code {
  font-family: var(--font-mono);
  background: rgba(0, 0, 0, 0.05);
  padding: 0 var(--spacing-xs);
  border-radius: var(--radius-sm);
}

.operation-query p {
  margin: 0;
  font-size: var(--font-size-sm);
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

.example-box {
  background: rgba(13, 148, 136, 0.05);
  border: 1px solid rgba(13, 148, 136, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.example-box h4 {
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.example-box ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.example-box li {
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

.patterns {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.pattern {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.pattern h3 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-base);
  color: var(--color-accent);
}

.pattern p {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
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
  .query-examples {
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
