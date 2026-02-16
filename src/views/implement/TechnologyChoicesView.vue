<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Technology Implementation Guide</h1>
      <p class="page-lead">
        FERIN is technology-neutral. You can implement a compliant register
        using SQL databases, document stores, graph databases, or RDF triple
        stores. This guide maps FERIN concepts to each technology.
      </p>
    </header>

    <section class="content-section">
      <h2>Technology Neutrality</h2>
      <p>
        ISO 19135 deliberately does not prescribe implementation technology.
        This flexibility allows FERIN to be implemented using any storage
        system that can support the required capabilities.
      </p>

      <div class="key-insight">
        <h4>What Matters for Compliance</h4>
        <p>
          Technology choice doesn't determine FERIN compliance. These
          capabilities do:
        </p>
        <ul>
          <li><strong>Persistent identifiers</strong> - IDs must be unique and forever resolvable</li>
          <li><strong>Status tracking</strong> - Must store and query valid/invalid/superseded states</li>
          <li><strong>Change history</strong> - Every change recorded with timestamp, actor, rationale</li>
          <li><strong>Action support</strong> - Must implement add/invalidate/supersede/retire</li>
          <li><strong>Temporal queries</strong> - Must answer "what was true at time T?"</li>
          <li><strong>Commitment fulfillment</strong> - Must meet stated access/persistence/transparency promises</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Technology Comparison</h2>

      <div class="tech-mapping">
        <table>
          <thead>
            <tr>
              <th>FERIN Concept</th>
              <th>SQL</th>
              <th>Document</th>
              <th>Graph/RDF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Concept</strong></td>
              <td>Table with foreign key to versions table</td>
              <td>Document with embedded version history</td>
              <td>Node with version edges</td>
            </tr>
            <tr>
              <td><strong>Concept Version</strong></td>
              <td>Row in versions table with concept_id FK</td>
              <td>Object in versions array</td>
              <td>Version node linked to concept node</td>
            </tr>
            <tr>
              <td><strong>Register Item</strong></td>
              <td>Table with status and timestamp columns</td>
              <td>Document with status fields</td>
              <td>Node with status properties</td>
            </tr>
            <tr>
              <td><strong>Relations</strong></td>
              <td>Junction tables with relation types</td>
              <td>Reference arrays with type metadata</td>
              <td>Typed edges (native)</td>
            </tr>
            <tr>
              <td><strong>Change History</strong></td>
              <td>Audit tables or temporal tables</td>
              <td>Embedded history arrays</td>
              <td>Version nodes with temporal edges</td>
            </tr>
            <tr>
              <td><strong>Schema Version</strong></td>
              <td>Separate tables per version or version column</td>
              <td>schemaVersion field in document</td>
              <td>Named graphs or SHACL shapes</td>
            </tr>
            <tr>
              <td><strong>Point-in-Time Query</strong></td>
              <td>Temporal SQL queries</td>
              <td>Filter on embedded timestamps</td>
              <td>SPARQL GRAPH queries</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>SQL Databases</h2>
      <p>
        Relational databases are a natural fit for FERIN with their mature
        tooling, ACID guarantees, and widespread expertise.
      </p>

      <div class="tech-section">
        <h3>Strengths</h3>
        <ul>
          <li>Mature, well-understood technology</li>
          <li>ACID transactions ensure data integrity</li>
          <li>Clear schema enforcement</li>
          <li>Rich query capabilities (SQL)</li>
          <li>Temporal table support in modern databases</li>
        </ul>

        <h3>Challenges</h3>
        <ul>
          <li>Schema evolution requires migration scripts</li>
          <li>Flexible schemas need JSON columns or EAV patterns</li>
          <li>Version history requires additional tables</li>
        </ul>

        <h3>Implementation Patterns</h3>

        <div class="pattern">
          <h4>Temporal Table Pattern</h4>
          <div class="code-block">
            <pre><code>-- PostgreSQL example with temporal extension
CREATE TABLE register_items (
  id UUID PRIMARY KEY,
  content JSONB NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('valid', 'invalid', 'superseded')),
  schema_version TEXT NOT NULL,

  -- Temporal columns
  valid_from TIMESTAMP NOT NULL,
  valid_until TIMESTAMP,

  -- Lineage
  derived_from UUID[],
  superseded_by UUID
);

-- Query state at specific point in time
SELECT * FROM register_items
WHERE valid_from <= :timestamp
  AND (valid_until IS NULL OR valid_until > :timestamp)
  AND status = 'valid';</code></pre>
          </div>
        </div>

        <div class="pattern">
          <h4>Audit Table Pattern</h4>
          <div class="code-block">
            <pre><code>-- Main items table
CREATE TABLE items (
  id UUID PRIMARY KEY,
  current_version INT NOT NULL,
  status TEXT NOT NULL
);

-- Separate audit/history table
CREATE TABLE item_history (
  id UUID PRIMARY KEY,
  item_id UUID NOT NULL REFERENCES items(id),
  version INT NOT NULL,
  content JSONB NOT NULL,
  changed_at TIMESTAMP NOT NULL,
  changed_by TEXT NOT NULL,
  change_reason TEXT,
  action TEXT NOT NULL  -- created, modified, invalidated, etc.
);

-- Get historical state
SELECT * FROM item_history
WHERE item_id = :id
  AND changed_at <= :timestamp
ORDER BY version DESC
LIMIT 1;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Document Databases</h2>
      <p>
        Document stores like MongoDB or CouchDB offer flexible schemas and
        natural embedding of version history.
      </p>

      <div class="tech-section">
        <h3>Strengths</h3>
        <ul>
          <li>Flexible schema - each document can evolve independently</li>
          <li>Natural embedding of version history</li>
          <li>JSON-native, works well with modern APIs</li>
          <li>Horizontal scaling for large registers</li>
        </ul>

        <h3>Challenges</h3>
        <ul>
          <li>No native referential integrity - must enforce in application</li>
          <li>Eventual consistency considerations</li>
          <li>Temporal queries require careful indexing</li>
        </ul>

        <h3>Implementation Pattern</h3>

        <div class="pattern">
          <h4>Embedded History Pattern</h4>
          <div class="code-block">
            <pre><code>// Document structure
{
  "_id": "urn:example:item:123",
  "schemaVersion": "2.0",
  "status": "valid",
  "currentContent": {
    "name": "Example Item",
    "description": "A sample item",
    "category": "type-a"
  },
  "history": [
    {
      "version": 1,
      "schemaVersion": "1.0",
      "content": {
        "name": "Example Item",
        "description": "A sample item"
      },
      "changedAt": "2024-01-15T10:00:00Z",
      "changedBy": "alice@example.com",
      "action": "created"
    },
    {
      "version": 2,
      "schemaVersion": "2.0",
      "content": {
        "name": "Example Item",
        "description": "A sample item",
        "category": "type-a"
      },
      "changedAt": "2024-06-20T14:30:00Z",
      "changedBy": "bob@example.com",
      "action": "modified",
      "reason": "Added category field"
    }
  ],
  "relations": [
    { "type": "supersedes", "target": "urn:example:item:100" }
  ]
}

// Query: Get state at specific time
db.items.aggregate([
  { $match: { "_id": "urn:example:item:123" } },
  { $project: {
      historicalState: {
        $filter: {
          input: "$history",
          cond: { $lte: ["$$this.changedAt", "2024-03-01T00:00:00Z"] }
        }
      }
    }
  }
])</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Graph Databases</h2>
      <p>
        Graph databases like Neo4j are excellent for FERIN due to native
        relationship support and natural modeling of concept systems.
      </p>

      <div class="tech-section">
        <h3>Strengths</h3>
        <ul>
          <li>Native relationship modeling - edges are first-class citizens</li>
          <li>Natural for concept systems (generalization, part-whole, etc.)</li>
          <li>Efficient traversal for lineage queries</li>
          <li>Flexible property model</li>
        </ul>

        <h3>Challenges</h3>
        <ul>
          <li>Steeper learning curve for teams unfamiliar with graph thinking</li>
          <li>Different query paradigm (Cypher, Gremlin)</li>
          <li>Tooling less mature than SQL</li>
        </ul>

        <h3>Implementation Pattern</h3>

        <div class="pattern">
          <h4>Node-Edge Model</h4>
          <div class="code-block">
            <pre><code>// Cypher (Neo4j) example

// Create concept with version
CREATE (c:Concept {
  id: 'urn:example:concept:meter',
  createdAt: datetime('2024-01-01T00:00:00Z')
})
CREATE (v1:ConceptVersion {
  version: 1,
  definition: 'Length of prototype bar',
  validFrom: datetime('1889-01-01T00:00:00Z'),
  validUntil: datetime('1960-01-01T00:00:00Z')
})
CREATE (v2:ConceptVersion {
  version: 2,
  definition: 'Wavelength of krypton-86',
  validFrom: datetime('1960-01-01T00:00:00Z'),
  validUntil: datetime('1983-01-01T00:00:00Z')
})
CREATE (v3:ConceptVersion {
  version: 3,
  definition: 'Distance light travels in 1/299,792,458 second',
  validFrom: datetime('1983-01-01T00:00:00Z')
})
CREATE (c)-[:HAS_VERSION]->(v1)
CREATE (c)-[:HAS_VERSION]->(v2)
CREATE (c)-[:HAS_VERSION]->(v3)

// Create register item with relations
CREATE (item:RegisterItem {
  id: 'urn:example:item:123',
  status: 'valid',
  content: {name: 'Meter', symbol: 'm'}
})
CREATE (item)-[:REALIZES]->(c)

// Lineage query: trace all ancestors
MATCH path = (item:RegisterItem {id: 'urn:example:item:456'})-[:SUPERSEDES*]->(ancestor)
RETURN path</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>RDF Triple Stores</h2>
      <p>
        RDF stores are ideal for FERIN implementations that need semantic
        interoperability, linked data, or integration with SHACL validation.
      </p>

      <div class="tech-section">
        <h3>Strengths</h3>
        <ul>
          <li>Native semantic web support</li>
          <li>SHACL for schema validation (multiple shapes = multiple versions)</li>
          <li>SPARQL for complex queries</li>
          <li>Linked data principles - easy cross-register references</li>
          <li>Open world assumption aligns with lazy migration</li>
        </ul>

        <h3>Challenges</h3>
        <ul>
          <li>Steeper learning curve</li>
          <li>Performance tuning more complex</li>
          <li>Tooling less familiar to most developers</li>
        </ul>

        <h3>Implementation Pattern</h3>

        <div class="pattern">
          <h4>Named Graphs + SHACL</h4>
          <div class="code-block">
            <pre><code># Data exists without schema constraints
@prefix ex: &lt;http://example.org/&gt; .
@prefix sh: &lt;http://www.w3.org/ns/shacl#&gt; .

# Item data (can exist independently of shapes)
ex:item-123 a ex:RegisterItem ;
  ex:name "Example Item" ;
  ex:description "A sample item" ;
  ex:category "type-a" ;  # Optional - new in v2
  ex:status "valid" ;
  ex:schemaVersion "2.0" .

# SHACL Shape v1 (original schema)
ex:ItemShape-v1 a sh:NodeShape ;
  sh:targetClass ex:RegisterItem ;
  sh:property [
    sh:path ex:name ;
    sh:minCount 1 ;
    sh:maxCount 1 ;
  ] , [
    sh:path ex:description ;
    sh:minCount 0 ;
  ] .

# SHACL Shape v2 (adds category requirement)
ex:ItemShape-v2 a sh:NodeShape ;
  sh:targetClass ex:RegisterItem ;
  sh:property [
    sh:path ex:name ;
    sh:minCount 1 ;
  ] , [
    sh:path ex:category ;  # New required field
    sh:minCount 1 ;
  ] .

# Query: Items valid at specific schema version
SELECT ?item WHERE {
  ?item a ex:RegisterItem .
  ?item ex:schemaVersion "1.0" .
  ?item ex:status "valid" .
}

# Validation: Check item against specific shape
# (Using SHACL engine - not SPARQL)</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Choosing Your Technology</h2>

      <div class="decision-guide">
        <div class="guide-item">
          <h4>Choose SQL if...</h4>
          <ul>
            <li>Your team has strong SQL expertise</li>
            <li>You need ACID transactions</li>
            <li>Schema is relatively stable</li>
            <li>You're building on existing relational infrastructure</li>
          </ul>
        </div>

        <div class="guide-item">
          <h4>Choose Document if...</h4>
          <ul>
            <li>Schemas evolve frequently</li>
            <li>You need horizontal scalability</li>
            <li>Content is naturally hierarchical</li>
            <li>JSON-native APIs are important</li>
          </ul>
        </div>

        <div class="guide-item">
          <h4>Choose Graph if...</h4>
          <ul>
            <li>Relationships are central to your domain</li>
            <li>Lineage queries are frequent</li>
            <li>You're building concept systems/taxonomies</li>
            <li>Traversal performance matters</li>
          </ul>
        </div>

        <div class="guide-item">
          <h4>Choose RDF if...</h4>
          <ul>
            <li>Semantic interoperability is required</li>
            <li>You need linked data capabilities</li>
            <li>SHACL validation fits your needs</li>
            <li>Cross-register references are common</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/implement/schema-evolution">Schema Evolution</router-link>
          - Versioning schemas independently of data
        </li>
        <li>
          <router-link to="/implement/temporal-data">Temporal Data</router-link>
          - Point-in-time queries and history
        </li>
        <li>
          <router-link to="/implement/semantic-interoperability">Semantic Interoperability</router-link>
          - RDF/SHACL integration details
        </li>
        <li>
          <router-link to="/implement/getting-started">Getting Started</router-link>
          - Implementation guide
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

.key-insight {
  background: rgba(13, 148, 136, 0.05);
  border: 1px solid rgba(13, 148, 136, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.key-insight h4 {
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.key-insight ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.key-insight li {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.tech-mapping {
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.tech-mapping table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.tech-mapping th,
.tech-mapping td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--color-border);
}

.tech-mapping th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
}

.tech-mapping td:first-child {
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}

.tech-section {
  margin-top: var(--spacing-lg);
}

.tech-section ul {
  margin: 0 0 var(--spacing-md);
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.tech-section li {
  margin-bottom: var(--spacing-xs);
}

.pattern {
  margin: var(--spacing-md) 0;
}

.pattern h4 {
  color: var(--color-accent);
  margin-bottom: var(--spacing-sm);
}

.code-block {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  padding: var(--spacing-md);
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-relaxed);
  white-space: pre;
}

.decision-guide {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.guide-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.guide-item h4 {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-base);
  color: var(--color-accent);
}

.guide-item ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.guide-item li {
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
  .decision-guide {
    grid-template-columns: 1fr;
  }

  .code-block pre {
    font-size: 10px;
  }
}
</style>
