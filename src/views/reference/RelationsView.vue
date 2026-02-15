<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Relations</h1>
      <p class="page-lead">
        Complete reference for relationship types between concepts and
        register items.
      </p>
    </header>

    <section class="content-section">
      <h2>Relation Types</h2>

      <table class="relations-table">
        <thead>
          <tr>
            <th>Relation</th>
            <th>From</th>
            <th>To</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>hasConcept</code></td>
            <td>Concept</td>
            <td>Concept</td>
            <td>No</td>
            <td>Generalization (parent/child relationship)</td>
          </tr>
          <tr>
            <td><code>instanceOf</code></td>
            <td>Concept</td>
            <td>Concept</td>
            <td>No</td>
            <td>Membership in a category</td>
          </tr>
          <tr>
            <td><code>hasDefinition</code></td>
            <td>Concept</td>
            <td>Concept</td>
            <td>No</td>
            <td>Schema or type reference</td>
          </tr>
          <tr>
            <td><code>supersedes</code></td>
            <td>Concept/Item</td>
            <td>Concept/Item</td>
            <td>No</td>
            <td>Replacement relationship</td>
          </tr>
          <tr>
            <td><code>inherits</code></td>
            <td>Concept</td>
            <td>Concept</td>
            <td>No</td>
            <td>Property inheritance</td>
          </tr>
          <tr>
            <td><code>hasPart</code></td>
            <td>Concept</td>
            <td>Concept</td>
            <td>No</td>
            <td>Composition (whole/part)</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Detailed Relation Specifications</h2>

      <div class="relation-details">
        <div class="relation">
          <h3>hasConcept</h3>
          <p class="relation-type">Generalization-Specialization</p>
          <p>
            Indicates that one concept is a specialization (subtype) of another.
            The child concept inherits meaning from the parent but may add
            specificity.
          </p>
          <h4>Example</h4>
          <pre><code>LengthUnit hasConcept Unit
  (LengthUnit is a specialization of Unit)

Meter hasConcept LengthUnit
  (Meter is a specialization of LengthUnit)</code></pre>
          <h4>Characteristics</h4>
          <ul>
            <li>Transitive: If A hasConcept B and B hasConcept C, then A hasConcept C</li>
            <li>Asymmetric: If A hasConcept B, then not B hasConcept A</li>
            <li>Supports multiple inheritance (with caution)</li>
          </ul>
        </div>

        <div class="relation">
          <h3>instanceOf</h3>
          <p class="relation-type">Type-Instance</p>
          <p>
            Indicates that one concept is an instance of another concept treated
            as a type or category.
          </p>
          <h4>Example</h4>
          <pre><code>Meter instanceOf UnitType
  (Meter is an instance of the UnitType category)

USD instanceOf CurrencyType
  (USD is an instance of the CurrencyType category)</code></pre>
          <h4>Characteristics</h4>
          <ul>
            <li>Not transitive</li>
            <li>Indicates membership rather than hierarchy</li>
            <li>Often used for classification</li>
          </ul>
        </div>

        <div class="relation">
          <h3>hasDefinition</h3>
          <p class="relation-type">Schema Reference</p>
          <p>
            Indicates that a concept's structure or constraints are defined by
            another concept acting as a schema.
          </p>
          <h4>Example</h4>
          <pre><code>AddressConcept hasDefinition AddressSchema
  (AddressConcept is defined by the AddressSchema)

PersonName hasDefinition TextPattern
  (PersonName is defined by a text pattern)</code></pre>
          <h4>Characteristics</h4>
          <ul>
            <li>Used for validation and structure</li>
            <li>Schema concepts define required/optional attributes</li>
            <li>Supports type checking</li>
          </ul>
        </div>

        <div class="relation">
          <h3>supersedes</h3>
          <p class="relation-type">Replacement</p>
          <p>
            Indicates that one concept or item replaces another. Used for
            versioning and content evolution.
          </p>
          <h4>Example</h4>
          <pre><code>MeterDefinition2023 supersedes MeterDefinition1960
  (The 2023 definition replaces the 1960 definition)

CountryCodeV2 supersedes CountryCodeV1
  (Version 2 replaces version 1)</code></pre>
          <h4>Characteristics</h4>
          <ul>
            <li>Creates a chain that can be followed to current</li>
            <li>May be transitive (follow chain to end)</li>
            <li>Used for migration and compatibility</li>
          </ul>
        </div>

        <div class="relation">
          <h3>inherits</h3>
          <p class="relation-type">Property Inheritance</p>
          <p>
            Indicates that a concept inherits specific properties from another
            concept. Similar to hasConcept but focused on property sharing.
          </p>
          <h4>Example</h4>
          <pre><code>DerivedUnit inherits BaseUnit
  (DerivedUnit inherits properties from BaseUnit)

SpecializedAddress inherits GeneralAddress
  (Specialized address inherits from general address)</code></pre>
          <h4>Characteristics</h4>
          <ul>
            <li>May be partial (inherit some properties)</li>
            <li>Can override inherited properties</li>
            <li>Use for mixins and traits</li>
          </ul>
        </div>

        <div class="relation">
          <h3>hasPart</h3>
          <p class="relation-type">Composition</p>
          <p>
            Indicates that one concept is composed of other concepts.
            Whole-part relationship.
          </p>
          <h4>Example</h4>
          <pre><code>Address hasPart Street
Address hasPart City
Address hasPart PostalCode
  (Address is composed of Street, City, and PostalCode)

FullName hasPart GivenName
FullName hasPart FamilyName
  (FullName is composed of GivenName and FamilyName)</code></pre>
          <h4>Characteristics</h4>
          <ul>
            <li>Supports cardinality (min/max parts)</li>
            <li>Parts may be optional or required</li>
            <li>Ordering may be significant</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>When to Use Each Relation</h2>

      <table class="usage-table">
        <thead>
          <tr>
            <th>Situation</th>
            <th>Use</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Concept is a more specific type of another</td>
            <td><code>hasConcept</code></td>
            <td>Creates type hierarchy</td>
          </tr>
          <tr>
            <td>Concept is an example of a category</td>
            <td><code>instanceOf</code></td>
            <td>Shows membership</td>
          </tr>
          <tr>
            <td>Concept follows a schema/pattern</td>
            <td><code>hasDefinition</code></td>
            <td>Links to structure definition</td>
          </tr>
          <tr>
            <td>Concept replaces an older one</td>
            <td><code>supersedes</code></td>
            <td>Maintains replacement chain</td>
          </tr>
          <tr>
            <td>Concept shares properties from another</td>
            <td><code>inherits</code></td>
            <td>Enables reuse</td>
          </tr>
          <tr>
            <td>Concept is composed of others</td>
            <td><code>hasPart</code></td>
            <td>Defines structure</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Relation Constraints</h2>

      <h3>Inheritance Depth</h3>
      <p>
        How deep should inheritance chains be?
      </p>
      <ul>
        <li><strong>Recommended maximum:</strong> 5-7 levels</li>
        <li>Deeper hierarchies become hard to understand and query</li>
        <li>Consider composition over deep inheritance</li>
      </ul>

      <h3>Circular References</h3>
      <p>
        Avoid circular relations:
      </p>
      <ul>
        <li><code>hasConcept</code>: A child cannot be its own ancestor</li>
        <li><code>supersedes</code>: A concept cannot supersede itself (directly or indirectly)</li>
        <li><code>hasPart</code>: A part cannot contain its whole</li>
      </ul>

      <div class="warning-box">
        <strong>Implementation Note:</strong> Your system should validate for
        circular references when relations are created. Detect cycles and
        reject invalid relations.
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/reference/conceptual-model">Conceptual Model</router-link>
          - Relations in the model
        </li>
        <li>
          <router-link to="/learn/core-concepts">Core Concepts</router-link>
          - Concept systems
        </li>
        <li>
          <router-link to="/build/actions">Actions Reference</router-link>
          - Supersede action
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

.relations-table,
.usage-table {
  margin: var(--spacing-lg) 0;
}

.relation-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.relation {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.relation h3 {
  font-size: var(--font-size-xl);
  margin: 0 0 var(--spacing-xs);
  color: var(--color-accent);
  font-family: var(--font-mono);
}

.relation-type {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
  margin-bottom: var(--spacing-md);
}

.relation > p {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
}

.relation h4 {
  font-size: var(--font-size-sm);
  margin: var(--spacing-md) 0 var(--spacing-sm);
}

.relation pre {
  background: var(--color-primary-dark);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin: var(--spacing-sm) 0;
}

.relation pre code {
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
}

.relation ul {
  font-size: var(--font-size-sm);
}

.warning-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
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
</style>
