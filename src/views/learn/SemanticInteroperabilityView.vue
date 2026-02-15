<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Semantic Interoperability</h1>
      <p class="page-lead">
        FERIN aligns naturally with semantic web technologies. This page
        explains how to implement FERIN using RDF, OWL, SKOS, and SHACL
        for maximum interoperability and linked data compatibility.
      </p>
    </header>

    <section class="content-section">
      <h2>Why Semantic Technologies</h2>
      <p>
        Semantic web technologies provide a natural fit for FERIN implementation:
      </p>

      <div class="alignment-grid">
        <div class="alignment-item">
          <h4>Open World Assumption</h4>
          <p>
            RDF allows data to exist without complete schema constraints.
            This aligns perfectly with FERIN's lazy migration model where
            data at different schema versions coexists.
          </p>
        </div>
        <div class="alignment-item">
          <h4>Multiple Shapes</h4>
          <p>
            SHACL allows multiple shapes to apply to the same data.
            Each shape can represent a schema version, enabling version
            negotiation at the semantic layer.
          </p>
        </div>
        <div class="alignment-item">
          <h4>Global Identifiers</h4>
          <p>
            URIs as identifiers are native to RDF. Every register item
            has a resolvable, globally unique identifier by design.
          </p>
        </div>
        <div class="alignment-item">
          <h4>Linked Data</h4>
          <p>
            Cross-register references are natural in RDF. Link to concepts
            in external registers without copying or synchronizing.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>RDF Mapping</h2>
      <p>
        Mapping FERIN concepts to RDF is straightforward. Here's the
        correspondence between FERIN entities and RDF patterns:
      </p>

      <div class="mapping-table">
        <table>
          <thead>
            <tr>
              <th>FERIN Entity</th>
              <th>RDF Pattern</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Register</strong></td>
              <td><code>reg:Register</code> with properties for owner, manager, specification</td>
            </tr>
            <tr>
              <td><strong>Concept</strong></td>
              <td><code>skos:Concept</code> with versions as separate resources</td>
            </tr>
            <tr>
              <td><strong>Concept Version</strong></td>
              <td>Named graph or reified statement with temporal properties</td>
            </tr>
            <tr>
              <td><strong>Register Item</strong></td>
              <td>Resource with <code>reg:status</code> and content properties</td>
            </tr>
            <tr>
              <td><strong>Status</strong></td>
              <td><code>reg:status</code> property with values: <code>valid</code>, <code>invalid</code>, <code>superseded</code></td>
            </tr>
            <tr>
              <td><strong>Relation</strong></td>
              <td>Typed properties: <code>reg:supersedes</code>, <code>skos:broader</code>, <code>dct:hasPart</code></td>
            </tr>
            <tr>
              <td><strong>Change Record</strong></td>
              <td><code>prov:Activity</code> with <code>prov:generatedAtTime</code>, <code>prov:wasAssociatedWith</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Example: Register Item in RDF</h3>
      <div class="code-block">
        <pre><code>@prefix ex: &lt;http://example.org/register/&gt; .
@prefix reg: &lt;http://purl.org/linked-data/registry#&gt; .
@prefix skos: &lt;http://www.w3.org/2004/02/skos/core#&gt; .
@prefix dct: &lt;http://purl.org/dc/terms/&gt; .
@prefix prov: &lt;http://www.w3.org/ns/prov#&gt; .
@prefix xsd: &lt;http://www.w3.org/2001/XMLSchema#&gt; .

# Register definition
ex:units-register a reg:Register ;
  reg:owner &lt;http://example.org/org/bipm&gt; ;
  dct:title "Register of Units of Measure" ;
  dct:description "SI and commonly used units" .

# Concept with multiple versions
ex:concept-meter a skos:Concept ;
  skos:prefLabel "meter"@en ;
  skos:notation "m" ;
  reg:register ex:units-register ;
  prov:generatedAtTime "1889-01-01T00:00:00Z"^^xsd:dateTime .

# Current version (in named graph for versioning)
ex:concept-meter {
  ex:concept-meter skos:definition
    "The distance travelled by light in vacuum in 1/299,792,458 second"@en ;
  dct:valid "1983-01-01T00:00:00Z"^^xsd:dateTime .
}

# Register item (realisation)
ex:item-meter a reg:RegisterItem ;
  reg:definition ex:concept-meter ;
  reg:status reg:statusValid ;
  reg:register ex:units-register ;
  dct:identifier "urn:iso:std:iso:80000:1:meter" ;
  prov:generatedAtTime "1960-10-14T00:00:00Z"^^xsd:dateTime .</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>SKOS for Concept Systems</h2>
      <p>
        SKOS (Simple Knowledge Organization System) is ideal for modeling
        FERIN concept systems. It provides standard properties for
        hierarchical and associative relationships.
      </p>

      <h3>SKOS Relationship Mapping</h3>
      <div class="mapping-table">
        <table>
          <thead>
            <tr>
              <th>FERIN Relation</th>
              <th>SKOS Property</th>
              <th>Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Generalization</td>
              <td><code>skos:broader</code> / <code>skos:narrower</code></td>
              <td>Unit → Length Unit → meter</td>
            </tr>
            <tr>
              <td>Related</td>
              <td><code>skos:related</code></td>
              <td>meter ↔ foot (conversion)</td>
            </tr>
            <tr>
              <td>Part-Whole</td>
              <td><code>dct:hasPart</code> / <code>dct:isPartOf</code></td>
              <td>Address → Street, City, PostalCode</td>
            </tr>
            <tr>
              <td>Supersession</td>
              <td><code>reg:supersedes</code> / <code>reg:supersededBy</code></td>
              <td>new-meter ← old-meter</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Example: Concept System in SKOS</h3>
      <div class="code-block">
        <pre><code>@prefix skos: &lt;http://www.w3.org/2004/02/skos/core#&gt; .
@prefix ex: &lt;http://example.org/units/&gt; .

# Concept scheme (the vocabulary)
ex:units-scheme a skos:ConceptScheme ;
  skos:prefLabel "Units of Measure"@en ;
  dct:source &lt;https://www.bipm.org/en/publications/si-brochure&gt; .

# Top concept
ex:unit a skos:Concept ;
  skos:prefLabel "Unit"@en ;
  skos:topConceptOf ex:units-scheme .

# Hierarchical structure
ex:length-unit a skos:Concept ;
  skos:prefLabel "Length Unit"@en ;
  skos:broader ex:unit ;
  skos:narrower ex:meter, ex:foot, ex:inch .

ex:meter a skos:Concept ;
  skos:prefLabel "meter"@en ;
  skos:altLabel "metre"@en-GB ;
  skos:notation "m" ;
  skos:broader ex:length-unit ;
  skos:definition "The SI unit of length"@en ;
  skos:exactMatch &lt;http://qudt.org/vocab/unit/M&gt; .

# Related concepts
ex:foot a skos:Concept ;
  skos:prefLabel "foot"@en ;
  skos:notation "ft" ;
  skos:broader ex:length-unit ;
  skos:related ex:meter ;  # Can be converted
  skos:definition "Imperial unit of length equal to 0.3048 meters"@en .</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>SHACL for Schema Validation</h2>
      <p>
        SHACL (Shapes Constraint Language) provides the schema layer for RDF.
        Multiple shapes can coexist, making it perfect for FERIN's schema
        versioning model.
      </p>

      <h3>Schema Versioning with SHACL</h3>
      <p>
        Each schema version is a separate SHACL shape. Data can be validated
        against any version, and migration is lazy.
      </p>

      <div class="code-block">
        <pre><code>@prefix sh: &lt;http://www.w3.org/ns/shacl#&gt; .
@prefix ex: &lt;http://example.org/shapes/&gt; .
@prefix unit: &lt;http://example.org/units/&gt; .

# Shape Version 1 - Original schema
ex:UnitShape-v1 a sh:NodeShape ;
  sh:targetClass unit:Unit ;
  sh:property [
    sh:path unit:name ;
    sh:datatype xsd:string ;
    sh:minCount 1 ;
    sh:maxCount 1 ;
  ] , [
    sh:path unit:symbol ;
    sh:datatype xsd:string ;
    sh:minCount 1 ;
    sh:maxCount 1 ;
  ] , [
    sh:path unit:description ;
    sh:datatype xsd:string ;
    sh:minCount 0 ;
  ] ;
  sh:closed false .  # Allow additional properties

# Shape Version 2 - Adds category (required)
ex:UnitShape-v2 a sh:NodeShape ;
  sh:targetClass unit:Unit ;
  sh:property [
    sh:path unit:name ;
    sh:datatype xsd:string ;
    sh:minCount 1 ;
  ] , [
    sh:path unit:symbol ;
    sh:datatype xsd:string ;
    sh:minCount 1 ;
  ] , [
    sh:path unit:category ;  # NEW: Required in v2
    sh:datatype xsd:string ;
    sh:minCount 1 ;
    sh:in ("SI" "Imperial" "US Customary" "Other") ;
  ] ;
  sh:closed false .

# Data can validate against either shape
# (validation is opt-in, not enforced at storage time)
unit:meter a unit:Unit ;
  unit:name "meter" ;
  unit:symbol "m" ;
  unit:description "SI unit of length" ;
  unit:category "SI" .  # Present, so validates against v2

unit:old-unit a unit:Unit ;
  unit:name "legacy unit" ;
  unit:symbol "lu" .
  # No category - validates against v1 only</code></pre>
      </div>

      <h3>Validation Strategy</h3>
      <p>
        Unlike traditional databases, SHACL validation is typically performed
        on-demand, not at storage time. This enables lazy migration:
      </p>

      <div class="strategy-list">
        <div class="strategy-item">
          <h4>1. Store freely</h4>
          <p>Data is stored without enforcement of any particular shape</p>
        </div>
        <div class="strategy-item">
          <h4>2. Query by shape</h4>
          <p>Consumers request data validated against specific shape version</p>
        </div>
        <div class="strategy-item">
          <h4>3. Validate on demand</h4>
          <p>SHACL engine validates data against requested shape at query time</p>
        </div>
        <div class="strategy-item">
          <h4>4. Migrate lazily</h4>
          <p>Data is updated to conform to new shapes only when needed</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Linked Data and Cross-Register References</h2>
      <p>
        RDF enables natural cross-register references. Instead of copying
        or synchronizing, you link directly to external concepts.
      </p>

      <div class="code-block">
        <pre><code># Local register item referencing external concept
@prefix ex: &lt;http://example.org/my-register/&gt; .
@prefix unit: &lt;http://example.org/my-register/units/&gt; .
@prefix qudt: &lt;http://qudt.org/vocab/unit/&gt; .
@prefix skos: &lt;http://www.w3.org/2004/02/skos/core#&gt; .

# Your register item
ex:measurement-service a ex:Service ;
  ex:name "Measurement Service" ;
  ex:usesUnit qudt:M .  # Direct reference to QUDT vocabulary

# Your local unit that extends external definition
unit:local-meter a skos:Concept ;
  skos:exactMatch qudt:M ;  # Same as QUDT meter
  skos:prefLabel "meter (local)"@en ;
  ex:localCode "MTR-001" ;  # Local extension
  ex:internalUseOnly true .</code></pre>
      </div>

      <h3>Cross-Register Dependencies</h3>
      <div class="dependencies-list">
        <ul>
          <li><strong>Track dependencies:</strong> Know which external concepts you reference</li>
          <li><strong>Subscribe to changes:</strong> Monitor external register for relevant updates</li>
          <li><strong>Version your references:</strong> Note which version of external concept you referenced</li>
          <li><strong>Handle unavailability:</strong> Define fallback behavior when external register is down</li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Provenance with PROV-O</h2>
      <p>
        Use the PROV-O ontology to model change history and governance
        processes in RDF.
      </p>

      <div class="code-block">
        <pre><code>@prefix prov: &lt;http://www.w3.org/ns/prov#&gt; .
@prefix ex: &lt;http://example.org/&gt; .

# A change activity (proposal approval)
ex:change-2024-001 a prov:Activity ;
  prov:type "approval" ;
  prov:startedAtTime "2024-03-15T10:00:00Z"^^xsd:dateTime ;
  prov:endedAtTime "2024-03-15T10:05:00Z"^^xsd:dateTime ;
  prov:wasAssociatedWith &lt;mailto:control-body@example.org&gt; ;
  prov:used ex:proposal-2024-042 ;  # The proposal being reviewed
  prov:generated ex:item-new-unit ;  # The new item created
  prov:wasInformedBy ex:proposal-2024-042 .

# The proposal
ex:proposal-2024-042 a prov:Entity ;
  prov:type "proposal" ;
  prov:wasAttributedTo &lt;mailto:proposer@example.org&gt; ;
  prov:generatedAtTime "2024-03-01T14:30:00Z"^^xsd:dateTime ;
  ex:justification "New unit required for industry standard" .

# The result
ex:item-new-unit a prov:Entity ;
  prov:wasGeneratedBy ex:change-2024-001 ;
  prov:wasDerivedFrom ex:proposal-2024-042 .</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/learn/schema-evolution">Schema Evolution</router-link>
          - Versioning schemas with SHACL shapes
        </li>
        <li>
          <router-link to="/build/technology-choices">Technology Implementation Guide</router-link>
          - RDF implementation patterns
        </li>
        <li>
          <router-link to="/learn/temporal-data">Temporal Data</router-link>
          - PROV-O for change history
        </li>
        <li>
          <router-link to="/learn/core-concepts">Core Concepts</router-link>
          - Concept plane modeling
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

.alignment-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.alignment-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.alignment-item h4 {
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.alignment-item p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.mapping-table {
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.mapping-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.mapping-table th,
.mapping-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--color-border);
}

.mapping-table th {
  background: var(--color-surface);
  font-weight: var(--font-weight-semibold);
}

.mapping-table td:first-child {
  font-weight: var(--font-weight-medium);
}

.mapping-table code {
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 4px;
  border-radius: var(--radius-sm);
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
  white-space: pre;
}

.strategy-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.strategy-item {
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.strategy-item h4 {
  margin: 0 0 var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
}

.strategy-item p {
  margin: 0;
  font-size: var(--font-size-sm);
}

.dependencies-list {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.dependencies-list ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.dependencies-list li {
  margin-bottom: var(--spacing-sm);
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
  .alignment-grid {
    grid-template-columns: 1fr;
  }

  .strategy-list {
    grid-template-columns: 1fr;
  }

  .code-block pre {
    font-size: 10px;
  }
}
</style>
