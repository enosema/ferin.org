<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Samples</h1>
      <p class="page-lead">
        Complete register specification samples to use as reference for
        your own implementation.
      </p>
    </header>

    <section class="content-section">
      <h2>RUM: Register of Units of Measure</h2>
      <p>
        The Register of Units of Measure (RUM) is the canonical example from
        ISO 19135 Annex D. It demonstrates a Complete Concept Register (CCR)
        with full governance.
      </p>

      <div class="sample-spec">
        <h3>1. General Information</h3>
        <table class="spec-table">
          <tbody>
            <tr>
              <th>Register Title</th>
              <td>Register of Units of Measure</td>
            </tr>
            <tr>
              <th>Register Abbreviation</th>
              <td>RUM</td>
            </tr>
            <tr>
              <th>Version</th>
              <td>1.0.0</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>2025-01-15</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Scope and Purpose</h3>
        <table class="spec-table">
          <tbody>
            <tr>
              <th>Purpose</th>
              <td>
                To provide a definitive, governed register of units of measure
                for use in scientific, engineering, and commercial applications.
              </td>
            </tr>
            <tr>
              <th>Scope</th>
              <td>
                <ul>
                  <li>SI base units (meter, kilogram, second, etc.)</li>
                  <li>SI derived units (newton, joule, watt, etc.)</li>
                  <li>SI prefixes (kilo-, milli-, etc.)</li>
                  <li>Non-SI units accepted for use with SI</li>
                  <li>Traditional units in common use</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Out of Scope</th>
              <td>
                <ul>
                  <li>Historical/archaic units not in current use</li>
                  <li>Domain-specific units (e.g., particle physics)</li>
                  <li>Conversion factors (separate register)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Target Users</th>
              <td>
                Standards bodies, software developers, data integrators,
                scientific researchers
              </td>
            </tr>
          </tbody>
        </table>

        <h3>3. Identifier Scheme</h3>
        <table class="spec-table">
          <tbody>
            <tr>
              <th>Object Identifier Format</th>
              <td><code>urn:iso:std:iso:19135:rum:{uuid}</code></td>
            </tr>
            <tr>
              <th>Functional Identifier Format</th>
              <td><code>rum:{symbol}</code> (e.g., <code>rum:m</code> for meter)</td>
            </tr>
            <tr>
              <th>Assignment Rules</th>
              <td>
                Object identifiers auto-assigned on creation. Functional
                identifiers assigned by Control Body based on international
                symbol conventions.
              </td>
            </tr>
            <tr>
              <th>Persistence Policy</th>
              <td>
                Object identifiers guaranteed for the lifetime of the register.
                Succession plan documented with BIPM as successor organization.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>4. Content Requirements</h3>
        <table class="spec-table">
          <tbody>
            <tr>
              <th>Required Attributes</th>
              <td>
                <table class="nested-table">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>symbol</td>
                      <td>String</td>
                      <td>Unit symbol (e.g., "m", "kg")</td>
                    </tr>
                    <tr>
                      <td>name</td>
                      <td>String</td>
                      <td>Full unit name (e.g., "meter")</td>
                    </tr>
                    <tr>
                      <td>definition</td>
                      <td>String</td>
                      <td>Formal definition</td>
                    </tr>
                    <tr>
                      <td>unitType</td>
                      <td>Enumeration</td>
                      <td>base, derived, prefix, traditional</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <th>Optional Attributes</th>
              <td>
                <table class="nested-table">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>quantity</td>
                      <td>String</td>
                      <td>Physical quantity (e.g., "length")</td>
                    </tr>
                    <tr>
                      <td>siBaseUnit</td>
                      <td>Boolean</td>
                      <td>Is this an SI base unit?</td>
                    </tr>
                    <tr>
                      <td>derivation</td>
                      <td>String</td>
                      <td>For derived units, the derivation formula</td>
                    </tr>
                    <tr>
                      <td>status</td>
                      <td>Enumeration</td>
                      <td>current, deprecated, historical</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>5. Versioning</h3>
        <table class="spec-table">
          <tbody>
            <tr>
              <th>Versioning Scheme</th>
              <td>Semantic (MAJOR.MINOR.PATCH)</td>
            </tr>
            <tr>
              <th>Substantive Change Criteria</th>
              <td>
                <ul>
                  <li>Change to symbol or name</li>
                  <li>Change to definition that alters meaning</li>
                  <li>Change to derivation formula</li>
                  <li>Change to unitType classification</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>6. Governance Model</h3>
        <table class="spec-table">
          <tbody>
            <tr>
              <th>Register Owner</th>
              <td>ISO/TC 211 Secretariat</td>
            </tr>
            <tr>
              <th>Register Manager</th>
              <td>ISO Central Secretariat, Registry Services</td>
            </tr>
            <tr>
              <th>Control Body</th>
              <td>ISO/TC 211 WG 6 (Image, grid and coverage data)</td>
            </tr>
            <tr>
              <th>Proposal Process</th>
              <td>
                <ol>
                  <li>Proposer submits via ISO portal with justification</li>
                  <li>Manager validates completeness within 5 working days</li>
                  <li>Control Body reviews at monthly meeting</li>
                  <li>Decision communicated within 10 working days of meeting</li>
                </ol>
              </td>
            </tr>
            <tr>
              <th>Approval Criteria</th>
              <td>
                <ul>
                  <li>Unit is in recognized use</li>
                  <li>Definition is clear and unambiguous</li>
                  <li>Symbol doesn't conflict with existing units</li>
                  <li>Proposal includes supporting references</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Appeal Process</th>
              <td>
                Appeals to ISO/TC 211 Chair within 30 days. Chair's decision
                final or may escalate to ISO Technical Management Board.
              </td>
            </tr>
          </tbody>
        </table>

        <h3>7. Commitments</h3>
        <table class="spec-table">
          <thead>
            <tr>
              <th>Commitment</th>
              <th>Level</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Access - Metadata</td>
              <td>High</td>
              <td>Publicly accessible via API and web interface</td>
            </tr>
            <tr>
              <td>Access - Content</td>
              <td>High</td>
              <td>Full content publicly accessible</td>
            </tr>
            <tr>
              <td>Access - Historic</td>
              <td>High</td>
              <td>All versions accessible via API</td>
            </tr>
            <tr>
              <td>Persistence - Identifier</td>
              <td>High</td>
              <td>Indefinite; succession agreement with BIPM</td>
            </tr>
            <tr>
              <td>Persistence - Content</td>
              <td>High</td>
              <td>All versions preserved permanently</td>
            </tr>
            <tr>
              <td>Persistence - Historic</td>
              <td>High</td>
              <td>Complete change records preserved</td>
            </tr>
            <tr>
              <td>Transparency</td>
              <td>High</td>
              <td>Full provenance, proposals, and decisions visible</td>
            </tr>
          </tbody>
        </table>

        <h3>8. Conformance Claims</h3>
        <table class="spec-table">
          <tbody>
            <tr>
              <th>Register Type</th>
              <td>Complete Concept Register (CCR)</td>
            </tr>
            <tr>
              <th>Capabilities</th>
              <td>
                <ul>
                  <li>Content management</li>
                  <li>Concept plane modeling</li>
                  <li>Full governance</li>
                  <li>Complete commitments</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>Sample Items</h2>

      <h3>Meter</h3>
      <div class="sample-item">
        <pre><code>{
  "identifier": "urn:iso:std:iso:19135:rum:a1b2c3d4",
  "functionalId": "rum:m",
  "symbol": "m",
  "name": "meter",
  "definition": "The metre, symbol m, is the SI unit of length...",
  "unitType": "base",
  "quantity": "length",
  "siBaseUnit": true,
  "status": {
    "valid": true,
    "published": true,
    "superseded": false
  },
  "dates": {
    "added": "1960-10-14",
    "modified": "1983-10-20"
  },
  "versions": [
    {
      "version": "1.0.0",
      "date": "1960-10-14",
      "definition": "The metre is the length equal to 1,650,763.73 wavelengths..."
    },
    {
      "version": "2.0.0",
      "date": "1983-10-20",
      "definition": "The metre is the length of the path travelled by light..."
    }
  ]
}</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/implement/register-specification">Register Specification</router-link>
          - Template to create your own
        </li>
        <li>
          <router-link to="/implement/register-types">Register Types</router-link>
          - Understanding conformance classes
        </li>
        <li>
          <router-link to="/reference/commitments">Commitments</router-link>
          - Commitment specifications
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

.sample-spec {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.sample-spec h3 {
  font-size: var(--font-size-lg);
  margin: var(--spacing-xl) 0 var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
  color: var(--color-accent);
}

.sample-spec h3:first-of-type {
  margin-top: 0;
}

.spec-table {
  width: 100%;
  margin-bottom: var(--spacing-md);
}

.spec-table th {
  width: 30%;
  text-align: left;
  vertical-align: top;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.spec-table td {
  font-size: var(--font-size-sm);
}

.spec-table ul {
  margin: var(--spacing-xs) 0;
}

.spec-table ol {
  margin: var(--spacing-xs) 0;
}

.nested-table {
  width: 100%;
  margin-top: var(--spacing-sm);
}

.nested-table th,
.nested-table td {
  font-size: var(--font-size-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
}

.sample-item {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin: var(--spacing-md) 0;
}

.sample-item pre {
  background: none;
  margin: 0;
  padding: 0;
}

.sample-item code {
  font-size: var(--font-size-xs);
  color: var(--color-text-inverse);
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
