<template>
  <article class="content-page">
    <header class="page-header">
      <h1>API Design Patterns</h1>
      <p class="page-lead">
        Designing REST and GraphQL APIs for FERIN registers. Patterns,
        templates, and best practices for integrators.
      </p>
    </header>

    <section class="content-section">
      <h2>API Design Principles</h2>
      <p>
        A well-designed register API enables discovery, integration, and
        automation. Follow these principles:
      </p>

      <div class="principles-grid">
        <div class="principle">
          <h4>Resource-Oriented</h4>
          <p>
            Model APIs around register resources: items, concepts, proposals,
            not actions.
          </p>
        </div>
        <div class="principle">
          <h4>Versioned</h4>
          <p>
            Include API versions in URLs or headers to enable evolution without
            breaking clients.
          </p>
        </div>
        <div class="principle">
          <h4>Discoverable</h4>
          <p>
            Provide links, documentation, and metadata so clients can explore
            without prior knowledge.
          </p>
        </div>
        <div class="principle">
          <h4>Consistent</h4>
          <p>
            Use consistent naming, pagination, error formats, and conventions
            across all endpoints.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>REST API Patterns</h2>
      <p>
        REST is the most common pattern for register APIs. Here are recommended
        endpoint structures.
      </p>

      <h3>Resource Endpoints</h3>
      <div class="endpoint-table">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Endpoint</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/items</code></td>
              <td>List register items (paginated)</td>
            </tr>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/items/{id}</code></td>
              <td>Get single item by identifier</td>
            </tr>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/items/{id}/versions</code></td>
              <td>Get version history for item</td>
            </tr>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/items/{id}/versions/{version}</code></td>
              <td>Get specific version</td>
            </tr>
            <tr>
              <td><span class="method post">POST</span></td>
              <td><code>/api/v1/items</code></td>
              <td>Create new item (governed: creates proposal)</td>
            </tr>
            <tr>
              <td><span class="method patch">PATCH</span></td>
              <td><code>/api/v1/items/{id}</code></td>
              <td>Update item (governed: creates proposal)</td>
            </tr>
            <tr>
              <td><span class="method post">POST</span></td>
              <td><code>/api/v1/items/{id}/invalidate</code></td>
              <td>Invalidate item</td>
            </tr>
            <tr>
              <td><span class="method post">POST</span></td>
              <td><code>/api/v1/items/{id}/supersede</code></td>
              <td>Supersede with new item</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Concept Endpoints (Concept Registers)</h3>
      <div class="endpoint-table">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Endpoint</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/concepts</code></td>
              <td>List concepts</td>
            </tr>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/concepts/{id}</code></td>
              <td>Get concept with current definition</td>
            </tr>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/concepts/{id}/hierarchy</code></td>
              <td>Get concept hierarchy (is-a, has-part)</td>
            </tr>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/concepts/{id}/items</code></td>
              <td>Get items linked to concept</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Governance Endpoints (Governed Registers)</h3>
      <div class="endpoint-table">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Endpoint</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/proposals</code></td>
              <td>List proposals (filtered by status)</td>
            </tr>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/proposals/{id}</code></td>
              <td>Get proposal details</td>
            </tr>
            <tr>
              <td><span class="method post">POST</span></td>
              <td><code>/api/v1/proposals</code></td>
              <td>Submit new proposal</td>
            </tr>
            <tr>
              <td><span class="method post">POST</span></td>
              <td><code>/api/v1/proposals/{id}/approve</code></td>
              <td>Approve proposal (Control Body)</td>
            </tr>
            <tr>
              <td><span class="method post">POST</span></td>
              <td><code>/api/v1/proposals/{id}/reject</code></td>
              <td>Reject proposal (Control Body)</td>
            </tr>
            <tr>
              <td><span class="method get">GET</span></td>
              <td><code>/api/v1/audit-log</code></td>
              <td>Query audit log</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>Response Formats</h2>

      <h3>Item Response</h3>
      <div class="response-example">
        <pre><code>{
  "id": "urn:iso:std:iso:19135:rum:a1b2c3d4",
  "functionalId": "rum:m",
  "type": "RegisterItem",
  "content": {
    "symbol": "m",
    "name": "meter",
    "definition": "The metre is the length of the path...",
    "unitType": "base"
  },
  "status": {
    "valid": true,
    "published": true,
    "supersededBy": null
  },
  "concept": {
    "id": "urn:iso:std:iso:19135:rum:concept:meter",
    "href": "/api/v1/concepts/meter"
  },
  "dates": {
    "added": "1960-10-14",
    "modified": "1983-10-20",
    "invalidated": null
  },
  "version": {
    "number": "2.0.0",
    "href": "/api/v1/items/rum:m/versions/2.0.0"
  },
  "_links": {
    "self": { "href": "/api/v1/items/rum:m" },
    "versions": { "href": "/api/v1/items/rum:m/versions" },
    "concept": { "href": "/api/v1/concepts/meter" },
    "register": { "href": "/api/v1" }
  }
}</code></pre>
      </div>

      <h3>Paginated List Response</h3>
      <div class="response-example">
        <pre><code>{
  "items": [ ... ],
  "pagination": {
    "page": 1,
    "pageSize": 20,
    "totalItems": 156,
    "totalPages": 8
  },
  "_links": {
    "self": { "href": "/api/v1/items?page=1" },
    "next": { "href": "/api/v1/items?page=2" },
    "last": { "href": "/api/v1/items?page=8" }
  }
}</code></pre>
      </div>

      <h3>Error Response</h3>
      <div class="response-example">
        <pre><code>{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid item content",
    "details": [
      {
        "field": "content.symbol",
        "message": "Symbol must be unique",
        "value": "m"
      }
    ],
    "requestId": "req_abc123"
  }
}</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Authentication & Authorization</h2>

      <h3>Authentication Patterns</h3>
      <div class="auth-patterns">
        <div class="auth-pattern">
          <h4>API Keys</h4>
          <p>Simple, stateless authentication for server-to-server access.</p>
          <pre><code>Authorization: ApiKey sk_live_abc123...</code></pre>
          <p class="use-case">Best for: Read-only access, trusted integrations</p>
        </div>
        <div class="auth-pattern">
          <h4>OAuth 2.0 / OIDC</h4>
          <p>Delegated authorization with user context.</p>
          <pre><code>Authorization: Bearer eyJhbGciOiJSUzI1NiIs...</code></pre>
          <p class="use-case">Best for: User actions, governed operations</p>
        </div>
        <div class="auth-pattern">
          <h4>mTLS</h4>
          <p>Mutual TLS for high-security environments.</p>
          <pre><code>Client certificate verified at TLS layer</code></pre>
          <p class="use-case">Best for: Government, financial, high-value registers</p>
        </div>
      </div>

      <h3>Authorization Model</h3>
      <p>Map FERIN roles to API permissions:</p>
      <table class="permissions-table">
        <thead>
          <tr>
            <th>Role</th>
            <th>Read</th>
            <th>Propose</th>
            <th>Approve</th>
            <th>Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anonymous</td>
            <td class="yes">Yes*</td>
            <td class="no">No</td>
            <td class="no">No</td>
            <td class="no">No</td>
          </tr>
          <tr>
            <td>Authenticated User</td>
            <td class="yes">Yes</td>
            <td class="yes">Yes</td>
            <td class="no">No</td>
            <td class="no">No</td>
          </tr>
          <tr>
            <td>Register Manager</td>
            <td class="yes">Yes</td>
            <td class="yes">Yes</td>
            <td class="partial">Limited</td>
            <td class="yes">Yes</td>
          </tr>
          <tr>
            <td>Control Body</td>
            <td class="yes">Yes</td>
            <td class="yes">Yes</td>
            <td class="yes">Yes</td>
            <td class="no">No</td>
          </tr>
          <tr>
            <td>Register Owner</td>
            <td class="yes">Yes</td>
            <td class="yes">Yes</td>
            <td class="yes">Yes</td>
            <td class="yes">Yes</td>
          </tr>
        </tbody>
      </table>
      <p class="table-note">* Subject to access commitments and publication status</p>
    </section>

    <section class="content-section">
      <h2>Pagination and Filtering</h2>

      <h3>Pagination</h3>
      <p>Use cursor-based pagination for large datasets:</p>
      <div class="code-example">
        <pre><code># Cursor-based (recommended)
GET /api/v1/items?cursor=eyJpZCI6MTAwfQ&limit=20

# Offset-based (acceptable for small sets)
GET /api/v1/items?page=2&pageSize=20</code></pre>
      </div>

      <h3>Filtering</h3>
      <p>Support common filter patterns:</p>
      <div class="code-example">
        <pre><code># Status filters
GET /api/v1/items?status=valid,published

# Date range filters
GET /api/v1/items?addedAfter=2024-01-01&addedBefore=2024-12-31

# Content filters (register-specific)
GET /api/v1/items?unitType=base

# Full-text search
GET /api/v1/items?q=meter

# Combined filters
GET /api/v1/items?status=valid&unitType=base&sort=-added</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Rate Limiting</h2>
      <p>
        Protect your API with rate limiting. Communicate limits via headers:
      </p>

      <div class="rate-limit-headers">
        <pre><code>X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1704067200
Retry-After: 3600</code></pre>
      </div>

      <h3>Recommended Limits</h3>
      <table class="limits-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Anonymous</th>
            <th>Authenticated</th>
            <th>Trusted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Read operations</td>
            <td>100/hour</td>
            <td>1000/hour</td>
            <td>10000/hour</td>
          </tr>
          <tr>
            <td>Write operations</td>
            <td>N/A</td>
            <td>50/hour</td>
            <td>500/hour</td>
          </tr>
          <tr>
            <td>Search queries</td>
            <td>30/hour</td>
            <td>300/hour</td>
            <td>3000/hour</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>GraphQL Alternative</h2>
      <p>
        For complex queries, GraphQL can provide more flexibility than REST.
      </p>

      <h3>Schema Structure</h3>
      <div class="graphql-schema">
        <pre><code>type Query {
  item(id: ID!): RegisterItem
  items(filter: ItemFilter, page: Pagination): ItemConnection!
  concept(id: ID!): Concept
  concepts(filter: ConceptFilter): ConceptConnection!
  proposal(id: ID!): Proposal
  proposals(filter: ProposalFilter): ProposalConnection!
}

type RegisterItem {
  id: ID!
  functionalId: String
  content: ItemContent!
  status: ItemStatus!
  concept: Concept
  versions: [ItemVersion!]!
  dates: ItemDates!
}

type Concept {
  id: ID!
  definition: String!
  parents: [Concept!]!
  children: [Concept!]!
  items: [RegisterItem!]!
}</code></pre>
      </div>

      <h3>Query Example</h3>
      <div class="graphql-query">
        <pre><code>query GetUnitWithHierarchy {
  item(id: "rum:m") {
    functionalId
    content {
      symbol
      name
      definition
    }
    concept {
      definition
      parents {
        definition
      }
    }
    versions(first: 5) {
      edges {
        node {
          version
          date
        }
      }
    }
  }
}</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>OpenAPI Specification Template</h2>
      <p>
        Use this template to document your register API:
      </p>

      <div class="openapi-template">
        <pre><code>openapi: 3.1.0
info:
  title: FERIN Register API
  version: 1.0.0
  description: API for [Register Name]

servers:
  - url: https://api.example.org/v1

paths:
  /items:
    get:
      summary: List register items
      parameters:
        - name: status
          in: query
          schema:
            type: array
            items:
              type: string
              enum: [valid, invalid, published, unpublished]
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: pageSize
          in: query
          schema:
            type: integer
            default: 20
            maximum: 100
      responses:
        '200':
          description: Paginated list of items
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ItemListResponse'

components:
  schemas:
    RegisterItem:
      type: object
      required: [id, content, status]
      properties:
        id:
          type: string
          format: uri
        functionalId:
          type: string
        content:
          type: object
        status:
          $ref: '#/components/schemas/ItemStatus'</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/security">Security</router-link>
          - Securing register APIs
        </li>
        <li>
          <router-link to="/build/integration-patterns">Integration Patterns</router-link>
          - Connecting systems to registers
        </li>
        <li>
          <router-link to="/build/operations">Operations</router-link>
          - Monitoring and managing register APIs
        </li>
        <li>
          <router-link to="/build/identifier-design">Identifier Design</router-link>
          - Designing resolvable identifiers
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

.principles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.principle {
  background: rgba(13, 148, 136, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.principle h4 {
  margin-bottom: var(--spacing-sm);
  color: var(--color-accent);
}

.principle p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.endpoint-table {
  overflow-x: auto;
  margin: var(--spacing-md) 0;
}

.endpoint-table table {
  width: 100%;
  font-size: var(--font-size-sm);
}

.endpoint-table th {
  text-align: left;
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
}

.endpoint-table td {
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
}

.endpoint-table code {
  background: var(--color-surface);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
}

.method {
  display: inline-block;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: white;
}

.method.get { background: #22c55e; }
.method.post { background: #3b82f6; }
.method.patch { background: #f59e0b; }
.method.delete { background: #ef4444; }

.response-example,
.code-example,
.graphql-schema,
.graphql-query,
.openapi-template {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
  overflow-x: auto;
}

.response-example pre,
.code-example pre,
.graphql-schema pre,
.graphql-query pre,
.openapi-template pre {
  background: none;
  margin: 0;
  padding: 0;
}

.response-example code,
.code-example code,
.graphql-schema code,
.graphql-query code,
.openapi-template code {
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
}

.auth-patterns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.auth-pattern {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.auth-pattern h4 {
  margin-bottom: var(--spacing-sm);
}

.auth-pattern p {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
}

.auth-pattern pre {
  background: var(--color-primary-dark);
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-sm);
}

.auth-pattern code {
  color: var(--color-text-inverse);
  font-size: var(--font-size-xs);
}

.use-case {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  font-style: italic;
  margin: 0;
}

.permissions-table {
  margin: var(--spacing-lg) 0;
}

.permissions-table th,
.permissions-table td {
  text-align: center;
  padding: var(--spacing-sm);
}

.permissions-table td:first-child {
  text-align: left;
}

.permissions-table .yes {
  color: #16a34a;
  font-weight: var(--font-weight-medium);
}

.permissions-table .no {
  color: var(--color-text-light);
}

.permissions-table .partial {
  color: #f59e0b;
}

.table-note {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  font-style: italic;
}

.rate-limit-headers {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
}

.rate-limit-headers pre {
  background: none;
  margin: 0;
  padding: 0;
}

.limits-table {
  margin: var(--spacing-lg) 0;
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
  .principles-grid,
  .auth-patterns {
    grid-template-columns: 1fr;
  }
}
</style>
