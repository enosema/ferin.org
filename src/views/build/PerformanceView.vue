<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Performance and Scale</h1>
      <p class="page-lead">
        Optimizing FERIN registers for speed and scale: database tuning,
        caching strategies, query patterns, and capacity planning.
      </p>
    </header>

    <section class="content-section">
      <h2>Performance Fundamentals</h2>
      <p>
        Register performance depends on three factors: database efficiency,
        application architecture, and caching strategy. Optimize all three
        for best results.
      </p>

      <div class="performance-factors">
        <div class="factor">
          <h4>Database</h4>
          <p>Schema design, indexing, queries</p>
          <span class="impact">High Impact</span>
        </div>
        <div class="factor">
          <h4>Application</h4>
          <p>Code efficiency, connection pooling</p>
          <span class="impact">Medium Impact</span>
        </div>
        <div class="factor">
          <h4>Caching</h4>
          <p>Read replicas, CDN, application cache</p>
          <span class="impact">High Impact</span>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Database Optimization</h2>

      <h3>Schema Design Principles</h3>
      <ul>
        <li>
          <strong>Normalize for integrity:</strong> Keep concepts, items, and
          versions in separate tables
        </li>
        <li>
          <strong>Denormalize for reads:</strong> Add computed columns for
          common queries
        </li>
        <li>
          <strong>Partition large tables:</strong> Partition by date or status
          for tables over 10M rows
        </li>
        <li>
          <strong>Use appropriate types:</strong> Don't store JSON in text
          columns; use native JSON types
        </li>
      </ul>

      <h3>Indexing Strategy</h3>
      <p>
        Proper indexing is the single most important performance optimization:
      </p>

      <div class="indexing-guide">
        <table>
          <thead>
            <tr>
              <th>Query Pattern</th>
              <th>Recommended Index</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lookup by identifier</td>
              <td>UNIQUE INDEX on identifier</td>
              <td>Always needed</td>
            </tr>
            <tr>
              <td>Filter by status</td>
              <td>INDEX on (valid, published)</td>
              <td>Composite for common combinations</td>
            </tr>
            <tr>
              <td>Date range queries</td>
              <td>INDEX on date_added, date_modified</td>
              <td>Supports pagination by date</td>
            </tr>
            <tr>
              <td>Full-text search</td>
              <td>FULLTEXT or GIN index</td>
              <td>Database-specific</td>
            </tr>
            <tr>
              <td>Concept hierarchy</td>
              <td>INDEX on parent_id, CTE optimization</td>
              <td>Consider closure tables</td>
            </tr>
            <tr>
              <td>JSON content queries</td>
              <td>GIN index on JSON column</td>
              <td>For PostgreSQL</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Query Optimization</h3>
      <div class="query-patterns">
        <div class="pattern good">
          <h4>Good: Paginated with Index</h4>
          <pre><code>SELECT * FROM items
WHERE status = 'valid'
ORDER BY date_added DESC
LIMIT 20 OFFSET 0;</code></pre>
          <p>Uses index on (status, date_added)</p>
        </div>
        <div class="pattern bad">
          <h4>Bad: Unfiltered Large Result</h4>
          <pre><code>SELECT * FROM items
ORDER BY date_added DESC;</code></pre>
          <p>Scans entire table, sorts in memory</p>
        </div>
        <div class="pattern good">
          <h4>Good: Cursor-Based Pagination</h4>
          <pre><code>SELECT * FROM items
WHERE date_added < :cursor
ORDER BY date_added DESC
LIMIT 20;</code></pre>
          <p>Uses index, consistent performance</p>
        </div>
      </div>

      <h3>Connection Pooling</h3>
      <p>
        Database connections are expensive. Use connection pooling:
      </p>
      <ul>
        <li>
          <strong>Pool size:</strong> 10-20 connections per application instance
        </li>
        <li>
          <strong>Timeout:</strong> Set connection timeout (30-60 seconds)
        </li>
        <li>
          <strong>Validation:</strong> Test connections before use
        </li>
        <li>
          <strong>External pooler:</strong> Consider PgBouncer for PostgreSQL
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Caching Strategy</h2>

      <h3>Cache Layers</h3>
      <div class="cache-layers">
        <div class="layer">
          <h4>CDN</h4>
          <ul>
            <li>Static assets (JS, CSS, images)</li>
            <li>Published item content (immutable)</li>
            <li>API responses for public data</li>
          </ul>
          <p class="ttl">TTL: 1 hour - 1 day</p>
        </div>
        <div class="layer">
          <h4>Application Cache</h4>
          <ul>
            <li>Concept hierarchies</li>
            <li>Domain value sets</li>
            <li>Register metadata</li>
          </ul>
          <p class="ttl">TTL: 5-15 minutes</p>
        </div>
        <div class="layer">
          <h4>Database Cache</h4>
          <ul>
            <li>Query result cache</li>
            <li>Item lookup cache</li>
            <li>Count/aggregation cache</li>
          </ul>
          <p class="ttl">TTL: 1-5 minutes</p>
        </div>
      </div>

      <h3>Cache Invalidation</h3>
      <p>
        Cache invalidation is hard. Strategies:
      </p>
      <ul>
        <li>
          <strong>Time-based:</strong> Simple but may serve stale data
        </li>
        <li>
          <strong>Event-based:</strong> Invalidate on write (more complex)
        </li>
        <li>
          <strong>Version-based:</strong> Include version in cache key
        </li>
        <li>
          <strong>Tag-based:</strong> Group related entries for bulk invalidation
        </li>
      </ul>

      <h3>What to Cache</h3>
      <table class="cache-decisions">
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Cache?</th>
            <th>Strategy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Concept hierarchies</td>
            <td class="yes">Yes</td>
            <td>Cache fully, invalidate on any change</td>
          </tr>
          <tr>
            <td>Domain values</td>
            <td class="yes">Yes</td>
            <td>Cache fully, rare invalidation</td>
          </tr>
          <tr>
            <td>Published items</td>
            <td class="yes">Yes</td>
            <td>Cache by version, long TTL</td>
          </tr>
          <tr>
            <td>Draft items</td>
            <td class="no">No</td>
            <td>Too frequently updated</td>
          </tr>
          <tr>
            <td>Search results</td>
            <td class="partial">Partial</td>
            <td>Short TTL, common queries only</td>
          </tr>
          <tr>
            <td>Proposal queues</td>
            <td class="no">No</td>
            <td>Must be real-time</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Scaling Patterns</h2>

      <h3>Vertical vs Horizontal</h3>
      <div class="scaling-comparison">
        <div class="scaling-option">
          <h4>Vertical Scaling</h4>
          <p>Increase resources on single server</p>
          <ul>
            <li>Simpler to implement</li>
            <li>Limited ceiling</li>
            <li>Higher cost per unit</li>
            <li>No code changes needed</li>
          </ul>
          <p class="when">Best for: Small-medium registers (up to 10M items)</p>
        </div>
        <div class="scaling-option">
          <h4>Horizontal Scaling</h4>
          <p>Add more servers</p>
          <ul>
            <li>More complex architecture</li>
            <li>Near-infinite ceiling</li>
            <li>Better cost efficiency at scale</li>
            <li>Requires application changes</li>
          </ul>
          <p class="when">Best for: Large registers (10M+ items)</p>
        </div>
      </div>

      <h3>Read Scaling</h3>
      <p>
        Most register workloads are read-heavy (90%+ reads). Scale reads:
      </p>
      <ol>
        <li>
          <strong>Add read replicas:</strong> Direct read queries to replicas
        </li>
        <li>
          <strong>Implement caching:</strong> Reduce database load
        </li>
        <li>
          <strong>Use CDN:</strong> Serve static content at edge
        </li>
        <li>
          <strong>Separate search:</strong> Use Elasticsearch/Solr for search
        </li>
      </ol>

      <h3>Write Scaling</h3>
      <p>
        Write scaling is harder. Options:
      </p>
      <ul>
        <li>
          <strong>Queue writes:</strong> Async processing for non-critical writes
        </li>
        <li>
          <strong>Batch operations:</strong> Combine multiple writes
        </li>
        <li>
          <strong>Sharding:</strong> Partition data across databases
        </li>
      </ul>

      <div class="warning-box">
        <strong>Sharding Complexity:</strong> Sharding adds significant
        complexity. Only consider it when you've exhausted other options
        and have 100M+ items or very high write volume.
      </div>
    </section>

    <section class="content-section">
      <h2>Benchmarks</h2>
      <p>
        Expected performance on modest hardware (4 vCPU, 16GB RAM, SSD):
      </p>

      <h3>Read Performance</h3>
      <table class="benchmark-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Target</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single item lookup (cached)</td>
            <td>&lt; 5ms</td>
            <td>p99 latency</td>
          </tr>
          <tr>
            <td>Single item lookup (uncached)</td>
            <td>&lt; 20ms</td>
            <td>p99 latency</td>
          </tr>
          <tr>
            <td>Paginated list (20 items)</td>
            <td>&lt; 50ms</td>
            <td>p99 latency</td>
          </tr>
          <tr>
            <td>Search query</td>
            <td>&lt; 100ms</td>
            <td>p99 latency</td>
          </tr>
          <tr>
            <td>Concept hierarchy traversal</td>
            <td>&lt; 30ms</td>
            <td>5 levels, cached</td>
          </tr>
        </tbody>
      </table>

      <h3>Write Performance</h3>
      <table class="benchmark-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Target</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Create item</td>
            <td>&lt; 50ms</td>
            <td>Single item, indexed</td>
          </tr>
          <tr>
            <td>Update item</td>
            <td>&lt; 30ms</td>
            <td>Single field change</td>
          </tr>
          <tr>
            <td>Bulk import</td>
            <td>1000 items/sec</td>
            <td>Bypassing governance</td>
          </tr>
          <tr>
            <td>Proposal submission</td>
            <td>&lt; 100ms</td>
            <td>With validation</td>
          </tr>
        </tbody>
      </table>

      <h3>Throughput</h3>
      <table class="benchmark-table">
        <thead>
          <tr>
            <th>Scale</th>
            <th>Reads/sec</th>
            <th>Writes/sec</th>
            <th>Architecture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Small</td>
            <td>1,000</td>
            <td>100</td>
            <td>Single server</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>10,000</td>
            <td>500</td>
            <td>Primary + 2 replicas</td>
          </tr>
          <tr>
            <td>Large</td>
            <td>100,000</td>
            <td>2,000</td>
            <td>Cluster with caching</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Performance Checklist</h2>
      <div class="perf-checklist">
        <div class="checklist-section">
          <h4>Database</h4>
          <ul>
            <li>☐ Indexes on all lookup fields</li>
            <li>☐ Query plans reviewed</li>
            <li>☐ Connection pooling enabled</li>
            <li>☐ Slow query logging enabled</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Application</h4>
          <ul>
            <li>☐ N+1 queries eliminated</li>
            <li>☐ Pagination on all lists</li>
            <li>☐ Response compression enabled</li>
            <li>☐ Timeout handling in place</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Caching</h4>
          <ul>
            <li>☐ Static assets on CDN</li>
            <li>☐ Application cache for hot data</li>
            <li>☐ Cache invalidation tested</li>
            <li>☐ Cache hit ratio monitored</li>
        </ul>
        </div>
        <div class="checklist-section">
          <h4>Monitoring</h4>
          <ul>
            <li>☐ Latency percentiles tracked</li>
            <li>☐ Throughput monitored</li>
            <li>☐ Error rate alerts</li>
            <li>☐ Regular load testing</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/operations">Operations</router-link>
          - Monitoring and maintenance
        </li>
        <li>
          <router-link to="/build/api-design">API Design</router-link>
          - API patterns and rate limiting
        </li>
        <li>
          <router-link to="/build/technology-choices">Technology Choices</router-link>
          - Selecting the right stack
        </li>
        <li>
          <router-link to="/build/temporal-data">Temporal Data</router-link>
          - Efficient version storage
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

.performance-factors {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.factor {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
}

.factor h4 {
  margin-bottom: var(--spacing-sm);
}

.factor p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
}

.impact {
  display: inline-block;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  background: rgba(34, 197, 94, 0.2);
  color: #16a34a;
}

.indexing-guide,
.cache-decisions,
.benchmark-table {
  margin: var(--spacing-lg) 0;
}

.query-patterns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.pattern {
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.pattern.good {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.pattern.bad {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.pattern h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
}

.pattern pre {
  background: var(--color-primary-dark);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-sm);
}

.pattern code {
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
}

.pattern p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.cache-layers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.layer {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.layer h4 {
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
}

.layer ul {
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
  min-height: 80px;
}

.layer .ttl {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  font-style: italic;
  margin-top: var(--spacing-sm);
}

.cache-decisions .yes {
  color: #16a34a;
  font-weight: var(--font-weight-medium);
}

.cache-decisions .no {
  color: #dc2626;
}

.cache-decisions .partial {
  color: #f59e0b;
}

.scaling-comparison {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.scaling-option {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.scaling-option h4 {
  margin-bottom: var(--spacing-sm);
}

.scaling-option > p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.scaling-option ul {
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
}

.scaling-option .when {
  font-size: var(--font-size-xs);
  color: var(--color-accent);
  font-style: italic;
  margin-top: var(--spacing-md);
}

.warning-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.perf-checklist {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.checklist-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.checklist-section h4 {
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
}

.checklist-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-sm);
}

.checklist-section li {
  padding: var(--spacing-xs) 0;
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
  .performance-factors,
  .query-patterns,
  .cache-layers,
  .scaling-comparison,
  .perf-checklist {
    grid-template-columns: 1fr;
  }
}
</style>
