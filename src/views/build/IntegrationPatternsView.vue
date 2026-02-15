<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Integration Patterns</h1>
      <p class="page-lead">
        Practical guidance for integrating with FERIN registers - whether
        you're consuming data from a register, publishing your own register,
        or building cross-register dependencies.
      </p>
    </header>

    <section class="content-section">
      <h2>Consuming Register Data</h2>
      <p>
        When your application depends on a FERIN register, you need patterns
        for reliable access, version management, and change notification.
      </p>

      <h3>Access Patterns</h3>

      <div class="patterns">
        <div class="pattern">
          <h4>Direct API Access</h4>
          <p>
            Query the register directly for each request. Simple but creates
            runtime dependency.
          </p>
          <div class="pros-cons">
            <div class="pros">
              <strong>Pros:</strong>
              <ul>
                <li>Always up-to-date</li>
                <li>Simple implementation</li>
                <li>No local storage needed</li>
              </ul>
            </div>
            <div class="cons">
              <strong>Cons:</strong>
              <ul>
                <li>Runtime dependency on register availability</li>
                <li>Network latency on each query</li>
                <li>Rate limiting considerations</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="pattern">
          <h4>Local Cache</h4>
          <p>
            Cache register data locally, refresh on schedule or notification.
          </p>
          <div class="pros-cons">
            <div class="pros">
              <strong>Pros:</strong>
              <ul>
                <li>No runtime dependency</li>
                <li>Fast local queries</li>
                <li>Works offline</li>
              </ul>
            </div>
            <div class="cons">
              <strong>Cons:</strong>
              <ul>
                <li>Staleness between refreshes</li>
                <li>Cache invalidation complexity</li>
                <li>Local storage requirements</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="pattern">
          <h4>Event-Driven Sync</h4>
          <p>
            Subscribe to register change events, maintain local synchronized copy.
          </p>
          <div class="pros-cons">
            <div class="pros">
              <strong>Pros:</strong>
                <ul>
                <li>Near real-time updates</li>
                <li>Efficient - only transfer changes</li>
                <li>No polling overhead</li>
              </ul>
            </div>
            <div class="cons">
              <strong>Cons:</strong>
              <ul>
                <li>Requires register to support webhooks/events</li>
                <li>Event ordering considerations</li>
                <li>Recovery from missed events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3>Schema Version Negotiation</h3>
      <p>
        When consuming data, specify which schema version you need:
      </p>

      <div class="code-block">
        <pre><code># Request data at specific schema version
GET /items/meter?schemaVersion=1.0

# Response includes schema version in metadata
{
  "id": "urn:iso:std:iso:80000:1:meter",
  "schemaVersion": "1.0",
  "content": {
    "name": "meter",
    "symbol": "m",
    "description": "SI unit of length"
    # No category field - not in v1
  },
  "status": "valid"
}

# Request at newer version
GET /items/meter?schemaVersion=2.0

{
  "id": "urn:iso:std:iso:80000:1:meter",
  "schemaVersion": "2.0",
  "content": {
    "name": "meter",
    "symbol": "m",
    "description": "SI unit of length",
    "category": "SI"  # New in v2
  },
  "status": "valid"
}</code></pre>
      </div>

      <h3>Temporal Queries</h3>
      <p>
        Query the register state at a specific point in time:
      </p>

      <div class="code-block">
        <pre><code># What was the state on a specific date?
GET /items?asOf=2023-06-15T00:00:00Z

# What items were valid at that time?
GET /items?asOf=2023-06-15T00:00:00Z&status=valid

# Historical version of specific item
GET /items/meter/history?at=2020-01-01T00:00:00Z</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Publishing a Register</h2>
      <p>
        When you publish a FERIN register for others to consume, provide
        clear APIs, documentation, and change notification mechanisms.
      </p>

      <h3>API Design Principles</h3>

      <div class="principles">
        <div class="principle">
          <h4>Version Your Endpoints</h4>
          <p>
            Allow consumers to request specific schema versions. Don't force
            upgrades on your schedule.
          </p>
          <div class="code-block small">
            <pre><code># Version in query parameter
GET /items?schemaVersion=2.0

# Version in header
GET /items
Accept: application/json; version=2.0

# Version in URL path (if you prefer)
GET /v2/items</code></pre>
          </div>
        </div>

        <div class="principle">
          <h4>Provide Change Feeds</h4>
          <p>
            Enable consumers to discover changes efficiently without full sync.
          </p>
          <div class="code-block small">
            <pre><code># Get changes since timestamp
GET /changes?since=2024-01-01T00:00:00Z

Response:
{
  "changes": [
    {
      "itemId": "urn:example:item:123",
      "action": "modified",
      "timestamp": "2024-01-15T10:00:00Z",
      "schemaVersion": "2.0"
    }
  ],
  "next": "/changes?since=2024-01-15T10:00:00Z"
}</code></pre>
          </div>
        </div>

        <div class="principle">
          <h4>Support Webhooks</h4>
          <p>
            Allow consumers to register for push notifications on changes.
          </p>
          <div class="code-block small">
            <pre><code># Consumer registers webhook
POST /webhooks
{
  "url": "https://consumer.example.com/webhook",
  "events": ["item.created", "item.modified", "item.invalidated"],
  "filters": {
    "itemClass": "Unit"
  }
}

# Register sends notification
POST https://consumer.example.com/webhook
{
  "event": "item.modified",
  "itemId": "urn:example:item:123",
  "timestamp": "2024-01-15T10:00:00Z",
  "signature": "sha256=..."  # Verify authenticity
}</code></pre>
          </div>
        </div>

        <div class="principle">
          <h4>Document Commitments</h4>
          <p>
            Make your commitments explicit so consumers know what to expect.
          </p>
          <div class="commitment-doc">
            <pre><code># Register metadata endpoint
GET /register

{
  "id": "urn:example:units-register",
  "title": "Units of Measure Register",
  "commitments": {
    "access": "public",
    "persistence": "permanent",
    "transparency": "full",
    "availability": "99.9%",
    "retention": "permanent",
    "deprecationNotice": "6 months minimum"
  },
  "schemaVersions": ["1.0", "2.0"],
  "currentSchemaVersion": "2.0"
}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Cross-Register Dependencies</h2>
      <p>
        When your register references items in other registers, you have
        dependencies that need careful management.
      </p>

      <h3>Dependency Patterns</h3>

      <div class="dependency-patterns">
        <div class="dep-pattern">
          <h4>Reference by Identifier</h4>
          <p>
            Store the external item's identifier. Resolve at runtime when needed.
          </p>
          <div class="code-block small">
            <pre><code>{
  "id": "urn:example:my-item",
  "references": {
    "unit": "urn:iso:std:iso:80000:1:meter"
  }
}

# Resolve external reference
GET https://iso.org/registers/80000/items/meter</code></pre>
          </div>
        </div>

        <div class="dep-pattern">
          <h4>Cached Reference</h4>
          <p>
            Cache key data from external item, but track source for updates.
          </p>
          <div class="code-block small">
            <pre><code>{
  "id": "urn:example:my-item",
  "unit": {
    "source": "urn:iso:std:iso:80000:1:meter",
    "cachedAt": "2024-01-15T00:00:00Z",
    "cachedData": {
      "symbol": "m",
      "name": "meter"
    }
  }
}</code></pre>
          </div>
        </div>

        <div class="dep-pattern">
          <h4>Versioned Reference</h4>
          <p>
            Reference a specific version of the external item.
          </p>
          <div class="code-block small">
            <pre><code>{
  "id": "urn:example:my-item",
  "references": {
    "unit": {
      "id": "urn:iso:std:iso:80000:1:meter",
      "version": "2.0",
      "asOf": "2024-01-15T00:00:00Z"
    }
  }
}</code></pre>
          </div>
        </div>
      </div>

      <h3>Managing Dependencies</h3>

      <div class="management-list">
        <div class="management-item">
          <h4>Track Dependencies</h4>
          <p>
            Maintain a registry of all external references. Know which items
            depend on which external sources.
          </p>
        </div>
        <div class="management-item">
          <h4>Subscribe to Changes</h4>
          <p>
            If the external register supports notifications, subscribe to
            changes affecting your dependencies.
          </p>
        </div>
        <div class="management-item">
          <h4>Plan for Unavailability</h4>
          <p>
            Define what happens when an external register is unavailable.
            Cache enough data to continue operating.
          </p>
        </div>
        <div class="management-item">
          <h4>Handle Breaking Changes</h4>
          <p>
            When external items are invalidated or superseded, assess impact
            and update references as needed.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Error Handling</h2>

      <div class="error-handling">
        <table>
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Consumer Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Register unavailable</td>
              <td>Use cached data, retry with exponential backoff, alert if prolonged</td>
            </tr>
            <tr>
              <td>Item not found</td>
              <td>Check if superseded, query history, handle gracefully</td>
            </tr>
            <tr>
              <td>Schema version unsupported</td>
              <td>Request older version, or adapt to newer version</td>
            </tr>
            <tr>
              <td>Rate limited</td>
              <td>Respect headers, implement backoff, consider caching</td>
            </tr>
            <tr>
              <td>External reference broken</td>
              <td>Use cached data, flag for review, notify register owner</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/register-specification">Register Specification</router-link>
          - Document your register's API and commitments
        </li>
        <li>
          <router-link to="/learn/schema-evolution">Schema Evolution</router-link>
          - Version negotiation strategies
        </li>
        <li>
          <router-link to="/learn/temporal-data">Temporal Data</router-link>
          - Point-in-time queries
        </li>
        <li>
          <router-link to="/reference/commitments">Commitments</router-link>
          - Access, persistence, and transparency promises
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

.pattern h4 {
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.pattern > p {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.pros-cons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.pros,
.cons {
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
}

.pros {
  background: rgba(34, 197, 94, 0.05);
}

.cons {
  background: rgba(239, 68, 68, 0.05);
}

.pros strong,
.cons strong {
  display: block;
  margin-bottom: var(--spacing-sm);
}

.pros-cons ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.pros-cons li {
  margin-bottom: var(--spacing-xs);
}

.code-block {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin: var(--spacing-md) 0;
}

.code-block.small {
  margin: var(--spacing-sm) 0;
}

.code-block pre {
  margin: 0;
  padding: var(--spacing-md);
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-relaxed);
  white-space: pre;
}

.principles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.principle {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.principle h4 {
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.principle > p {
  margin: 0 0 var(--spacing-md);
  font-size: var(--font-size-sm);
}

.commitment-doc {
  margin-top: var(--spacing-sm);
}

.dependency-patterns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.dep-pattern {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
}

.dep-pattern h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
}

.dep-pattern p {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.management-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.management-item {
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.management-item h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
}

.management-item p {
  margin: 0;
  font-size: var(--font-size-sm);
}

.error-handling {
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.error-handling table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.error-handling th,
.error-handling td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.error-handling th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
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
  .pros-cons {
    grid-template-columns: 1fr;
  }

  .dependency-patterns {
    grid-template-columns: 1fr;
  }

  .management-list {
    grid-template-columns: 1fr;
  }

  .code-block pre {
    font-size: 10px;
  }
}
</style>
