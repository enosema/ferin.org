<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Conceptual Model</h1>
      <p class="page-lead">
        The UML-based model defining FERIN's structure: components, identifiers,
        statuses, relations, and proposals.
      </p>
    </header>

    <section class="content-section">
      <h2>Model Overview</h2>
      <p>
        The FERIN conceptual model is organized into packages:
      </p>

      <div class="model-overview">
        <div class="package">
          <h3>Components Package</h3>
          <p>Core entities: Register, Register Item, Concept, Concept Version</p>
        </div>
        <div class="package">
          <h3>Identifiers Package</h3>
          <p>Identifier types and assignment rules</p>
        </div>
        <div class="package">
          <h3>Statuses Package</h3>
          <p>Status values and transitions</p>
        </div>
        <div class="package">
          <h3>Relations Package</h3>
          <p>Relationship types between entities</p>
        </div>
        <div class="package">
          <h3>Proposal Package</h3>
          <p>Proposal and appeal structures</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Components Package</h2>

      <h3>Core Entities</h3>
      <div class="entity-diagram">
        <pre class="diagram">
┌─────────────────────────────────────────────────────────────────┐
│                           REGISTER                               │
├─────────────────────────────────────────────────────────────────┤
│ + title : String                                                 │
│ + description : String                                           │
│ + specification : RegisterSpecification                          │
│ + owner : RegisterOwner                                          │
│ + manager : RegisterManager                                      │
├─────────────────────────────────────────────────────────────────┤
│ + addItem(item) : void                                           │
│ + getItem(id) : RegisterItem                                     │
│ + query(criteria) : Collection                                   │
└─────────────────────────────────────────────────────────────────┘
                                │
                                │ contains
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                        REGISTER ITEM                              │
├─────────────────────────────────────────────────────────────────┤
│ + identifier : ObjectIdentifier                                  │
│ + functionalId : FunctionalIdentifier [0..1]                     │
│ + status : Status                                                │
│ + dateAdded : DateTime                                           │
│ + dateModified : DateTime                                        │
│ + content : Any                                                  │
├─────────────────────────────────────────────────────────────────┤
│ + realizedConcept : Concept [0..1]                               │
└─────────────────────────────────────────────────────────────────┘
                                │
                                │ realizes
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                           CONCEPT                                 │
├─────────────────────────────────────────────────────────────────┤
│ + identifier : ObjectIdentifier                                  │
│ + currentDefinition : ConceptDefinition                          │
│ + versions : ConceptVersion [*]                                  │
│ + status : Status                                                │
├─────────────────────────────────────────────────────────────────┤
│ + addVersion(definition) : ConceptVersion                        │
│ + getDefinition(atDate) : ConceptDefinition                      │
└─────────────────────────────────────────────────────────────────┘
        </pre>
      </div>

      <h3>LutaML Class Definitions</h3>
      <p>
        The FERIN conceptual model can be expressed using LutaML (LML) syntax,
        which provides a human-readable format for defining information models
        that can be directly serialized to multiple formats.
      </p>

      <div class="lml-definition">
        <h4>Core Classes</h4>
        <pre class="lml-code"><code>package FERIN {

  class Register {
    attribute title, String {
      definition "The official title of the register"
    }
    attribute description, String {
      definition "A description of the register's purpose and scope"
      cardinality 0..1
    }
    attribute specification, RegisterSpecification
    attribute owner, RegisterOwner
    attribute manager, RegisterManager
    attribute controlBody, ControlBody { cardinality 0..1 }
    attribute operationalStatus, OperationalStatus

    xml {
      root "register"
      map_element "title" { attribute title }
      map_element "description" { attribute description }
    }
  }

  class Concept {
    attribute identifier, ObjectIdentifier
    attribute currentDefinition, ConceptDefinition
    attribute versions, ConceptVersion { cardinality 0..n }
    attribute status, Status
    attribute dateAdded, DateTime
    attribute dateModified, DateTime

    xml {
      root "concept"
      map_attribute "id" { attribute identifier }
      map_element "definition" { attribute currentDefinition }
    }
  }

  class ConceptVersion {
    attribute identifier, ObjectIdentifier
    attribute definition, ConceptDefinition
    attribute validFrom, DateTime
    attribute validUntil, DateTime { cardinality 0..1 }
    attribute status, Status
    attribute changeReason, String { cardinality 0..1 }
  }

  class RegisterItem {
    attribute identifier, ObjectIdentifier
    attribute functionalId, FunctionalIdentifier { cardinality 0..1 }
    attribute concept, Concept { cardinality 0..1 }
    attribute status, Status
    attribute content, Content
    attribute dateAdded, DateTime
    attribute dateModified, DateTime

    xml {
      root "item"
      map_attribute "id" { attribute identifier }
      map_attribute "functionalId" { attribute functionalId }
      map_element "content" { attribute content }
    }
  }

  class Status {
    attribute valid, Boolean { default: true }
    attribute published, Boolean { default: true }
    attribute superseded, Boolean { default: false }
    attribute supersededBy, RegisterItem { cardinality 0..1 }
    attribute redacted, Boolean { default: false }
    attribute deleted, Boolean { default: false }
  }
}</code></pre>
      </div>

      <div class="lml-definition">
        <h4>Identifier Classes</h4>
        <pre class="lml-code"><code>package FERIN::Identifiers {

  class Identifier {
    attribute value, String
    attribute assignedDate, DateTime

    definition {
      Base class for all identifier types in FERIN.
    }
  }

  class ObjectIdentifier {
    attribute value, String
    attribute persistent, Boolean { default: true }
    attribute opaque, Boolean { default: false }
    attribute scheme, String

    definition {
      A unique, persistent identifier that never changes
      once assigned. Object identifiers are typically
      UUIDs or other opaque identifiers.
    }
  }

  class FunctionalIdentifier {
    attribute value, String
    attribute semantic, Boolean { default: true }
    attribute resolvable, Boolean { default: false }
    attribute validFrom, DateTime
    attribute validUntil, DateTime { cardinality 0..1 }

    definition {
      A human-meaningful identifier that may be reassigned
      through governance processes. Examples include
      country codes, currency codes, etc.
    }
  }
}</code></pre>
      </div>

      <div class="lml-definition">
        <h4>Governance Classes</h4>
        <pre class="lml-code"><code>package FERIN::Governance {

  enum OperationalStatus {
    value "establishment" {
      definition "Register is being set up"
    }
    value "operational" {
      definition "Register is actively maintained"
    }
    value "dormant" {
      definition "Register exists but not actively updated"
    }
    value "decommissioned" {
      definition "Register has been retired"
    }
  }

  class RegisterOwner {
    attribute name, String
    attribute contactInfo, String { cardinality 0..1 }
    attribute responsibilities, String

    definition {
      The entity accountable for the register's existence
      and strategic direction.
    }
  }

  class RegisterManager {
    attribute name, String
    attribute contactInfo, String { cardinality 0..1 }
    attribute responsibilities, String

    definition {
      The entity responsible for day-to-day register operations.
    }
  }

  class ControlBody {
    attribute name, String
    attribute members, String { cardinality 0..n }
    attribute meetingSchedule, String { cardinality 0..1 }

    definition {
      The entity responsible for reviewing and deciding
      on proposals to change register content.
    }
  }

  class Proposal {
    attribute identifier, ObjectIdentifier
    attribute proposer, String
    attribute actionType, ActionType
    attribute justification, String
    attribute status, ProposalStatus
    attribute dateSubmitted, DateTime
    attribute dateDecided, DateTime { cardinality 0..1 }
    attribute decision, Decision { cardinality 0..1 }
  }

  enum ActionType {
    value "add"
    value "change"
    value "invalidate"
    value "supersede"
    value "unpublish"
    value "redact"
    value "delete"
  }

  enum ProposalStatus {
    value "submitted"
    value "under_review"
    value "approved"
    value "rejected"
    value "withdrawn"
  }
}</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Identifiers Package</h2>

      <h3>Identifier Types</h3>
      <div class="identifier-diagram">
        <pre class="diagram">
                    ┌───────────────────┐
                    │    Identifier     │«abstract»
                    ├───────────────────┤
                    │ + value : String  │
                    └─────────┬─────────┘
                              │
              ┌───────────────┴───────────────┐
              │                               │
              ▼                               ▼
┌─────────────────────────┐   ┌─────────────────────────┐
│   ObjectIdentifier      │   │  FunctionalIdentifier   │
├─────────────────────────┤   ├─────────────────────────┤
│ + persistent : Boolean  │   │ + semantic : Boolean    │
│ + opaque : Boolean      │   │ + resolvable : Boolean  │
└─────────────────────────┘   └─────────────────────────┘
        </pre>
      </div>

      <h3>Identifier Assignment Rules</h3>
      <ul>
        <li>Object identifiers are assigned at creation and never change</li>
        <li>Functional identifiers may be reassigned with governance approval</li>
        <li>Both types may coexist on the same item</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Statuses Package</h2>

      <h3>Status Model</h3>
      <div class="status-diagram">
        <pre class="diagram">
┌─────────────────────────────────────────────────────────────────┐
│                          STATUS                                  │
├─────────────────────────────────────────────────────────────────┤
│ + valid : Boolean          (default: true)                      │
│ + published : Boolean      (default: true)                      │
│ + superseded : Boolean     (default: false)                     │
│ + supersededBy : Item      (if superseded)                      │
│ + redacted : Boolean       (default: false)                     │
│ + deleted : Boolean        (default: false)                     │
└─────────────────────────────────────────────────────────────────┘
        </pre>
      </div>

      <h3>Status Transitions</h3>
      <p>
        Statuses change through specific actions:
      </p>
      <table class="transitions-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Status Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Add</td>
            <td>valid=true, published=true</td>
          </tr>
          <tr>
            <td>Invalidate</td>
            <td>valid=false</td>
          </tr>
          <tr>
            <td>Unpublish</td>
            <td>published=false</td>
          </tr>
          <tr>
            <td>Supersede</td>
            <td>superseded=true, link to superseding item</td>
          </tr>
          <tr>
            <td>Redact</td>
            <td>redacted=true</td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>deleted=true</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Relations Package</h2>

      <h3>Relation Types</h3>
      <table class="relations-table">
        <thead>
          <tr>
            <th>Relation</th>
            <th>From</th>
            <th>To</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>hasConcept</code></td>
            <td>Concept</td>
            <td>Concept</td>
            <td>Generalization (parent concept)</td>
          </tr>
          <tr>
            <td><code>instanceOf</code></td>
            <td>Concept</td>
            <td>Concept</td>
            <td>Membership in a category</td>
          </tr>
          <tr>
            <td><code>hasDefinition</code></td>
            <td>Concept</td>
            <td>Concept</td>
            <td>Schema reference</td>
          </tr>
          <tr>
            <td><code>supersedes</code></td>
            <td>Concept/Item</td>
            <td>Concept/Item</td>
            <td>Replacement</td>
          </tr>
          <tr>
            <td><code>inherits</code></td>
            <td>Concept</td>
            <td>Concept</td>
            <td>Property inheritance</td>
          </tr>
          <tr>
            <td><code>hasPart</code></td>
            <td>Concept</td>
            <td>Concept</td>
            <td>Composition</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Database Mapping Guidance</h2>
      <p>
        How to map the conceptual model to different database technologies:
      </p>

      <h3>Relational Database</h3>
      <div class="mapping-example">
        <pre><code>-- Tables
CREATE TABLE registers (
  id UUID PRIMARY KEY,
  title VARCHAR(255),
  description TEXT
);

CREATE TABLE concepts (
  id UUID PRIMARY KEY,
  register_id UUID REFERENCES registers(id),
  current_definition TEXT,
  valid BOOLEAN DEFAULT true,
  published BOOLEAN DEFAULT true
);

CREATE TABLE concept_versions (
  id UUID PRIMARY KEY,
  concept_id UUID REFERENCES concepts(id),
  definition TEXT,
  created_at TIMESTAMP,
  created_by VARCHAR(255)
);

CREATE TABLE register_items (
  id UUID PRIMARY KEY,
  concept_id UUID REFERENCES concepts(id),
  functional_id VARCHAR(100) UNIQUE,
  content JSONB,
  valid BOOLEAN DEFAULT true,
  published BOOLEAN DEFAULT true
);

CREATE TABLE relations (
  id UUID PRIMARY KEY,
  from_id UUID,
  to_id UUID,
  relation_type VARCHAR(50)
);</code></pre>
      </div>

      <h3>Document Database</h3>
      <div class="mapping-example">
        <pre><code>// Concept document
{
  "_id": "uuid-here",
  "type": "concept",
  "registerId": "register-uuid",
  "currentDefinition": "...",
  "versions": [
    {
      "definition": "...",
      "createdAt": "2024-01-15",
      "createdBy": "user@example.com"
    }
  ],
  "status": {
    "valid": true,
    "published": true
  },
  "relations": [
    { "type": "hasConcept", "to": "parent-concept-uuid" }
  ]
}</code></pre>
      </div>

      <h3>Graph Database</h3>
      <div class="mapping-example">
        <pre><code>// Nodes
(:Concept {
  id: "uuid",
  currentDefinition: "...",
  valid: true,
  published: true
})

(:RegisterItem {
  id: "uuid",
  functionalId: "CODE",
  content: {...}
})

// Relationships
(:Concept)-[:HAS_CONCEPT]->(:Concept)
(:Concept)-[:SUPERSEDES]->(:Concept)
(:RegisterItem)-[:REALIZES]->(:Concept)</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/reference/statuses">Statuses</router-link>
          - Complete status reference
        </li>
        <li>
          <router-link to="/reference/relations">Relations</router-link>
          - Detailed relation specifications
        </li>
        <li>
          <router-link to="/learn/core-concepts">Core Concepts</router-link>
          - Conceptual foundations
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

.model-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.package {
  background: rgba(13, 148, 136, 0.1);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.package h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-xs);
}

.package p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.entity-diagram,
.identifier-diagram,
.status-diagram {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.diagram {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  color: var(--color-text-inverse);
  margin: 0;
  white-space: pre;
  line-height: 1.3;
}

.transitions-table,
.relations-table {
  margin: var(--spacing-md) 0;
}

.mapping-example {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin: var(--spacing-md) 0;
}

.mapping-example pre {
  background: none;
  margin: 0;
  padding: 0;
}

.mapping-example code {
  font-size: var(--font-size-xs);
  color: var(--color-text-inverse);
}

.lml-definition {
  margin: var(--spacing-xl) 0;
}

.lml-definition h4 {
  font-size: var(--font-size-base);
  color: var(--color-accent);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-xs);
  border-bottom: 1px solid var(--color-border);
}

.lml-code {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin: 0;
  display: block;
}

.lml-code code {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-inverse);
  line-height: 1.5;
  white-space: pre;
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
</style>
