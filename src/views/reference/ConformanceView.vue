<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Conformance Guide</h1>
      <p class="page-lead">
        How to verify and demonstrate FERIN compliance using the ISO 19135:2026
        abstract test suite.
      </p>
    </header>

    <section class="content-section">
      <h2>Understanding Conformance</h2>
      <p>
        FERIN conformance is <strong>capability-based</strong>, not hierarchical.
        You claim conformance to specific register types based on which
        capabilities you implement. This guide helps you verify those claims.
      </p>

      <div class="key-concept">
        <h3>Conformance vs Capability</h3>
        <ul>
          <li>
            <strong>Capabilities</strong> are features your register provides
          </li>
          <li>
            <strong>Conformance</strong> is a formal claim that you implement
            all required capabilities for a specific register type
          </li>
          <li>
            <strong>Testing</strong> verifies that claimed capabilities work
            correctly
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Abstract Test Suite Structure</h2>
      <p>
        ISO 19135:2026 Annex A defines an abstract test suite organized by
        register type. Each test case maps to specific requirements in the
        standard.
      </p>

      <h3>Test Suite Organization</h3>
      <table class="test-suite-table">
        <thead>
          <tr>
            <th>Test Category</th>
            <th>Register Types</th>
            <th>Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content Management</td>
            <td>All types</td>
            <td>Item lifecycle, status, versioning</td>
          </tr>
          <tr>
            <td>Identifier Management</td>
            <td>All types</td>
            <td>Uniqueness, persistence, resolution</td>
          </tr>
          <tr>
            <td>Concept Modeling</td>
            <td>CR, GCR, CCR</td>
            <td>Concepts, versions, relations</td>
          </tr>
          <tr>
            <td>Governance</td>
            <td>GCR, GCR, CCR</td>
            <td>Roles, proposals, decisions, appeals</td>
          </tr>
          <tr>
            <td>Commitments</td>
            <td>CCR</td>
            <td>Access, persistence, transparency</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Self-Assessment Checklists</h2>
      <p>
        Use these checklists to evaluate your implementation before formal
        conformance testing.
      </p>

      <div class="checklist-accordion">
        <div class="checklist-section">
          <h3>Content Register</h3>
          <p class="checklist-desc">Required for all register types</p>
          <div class="checklist-grid">
            <div class="checklist-group">
              <h4>Item Management</h4>
              <ul>
                <li>☐ Can create new register items with unique identifiers</li>
                <li>☐ Can retrieve items by identifier</li>
                <li>☐ Can update item content</li>
                <li>☐ Can invalidate items (mark as no longer valid)</li>
                <li>☐ Can supersede items (replace with new version)</li>
              </ul>
            </div>
            <div class="checklist-group">
              <h4>Status Management</h4>
              <ul>
                <li>☐ Tracks valid/invalid status</li>
                <li>☐ Tracks published/unpublished status</li>
                <li>☐ Status changes are recorded with timestamps</li>
                <li>☐ Status history is preserved</li>
              </ul>
            </div>
            <div class="checklist-group">
              <h4>Identifier Requirements</h4>
              <ul>
                <li>☐ Object identifiers are unique within the register</li>
                <li>☐ Object identifiers are never reused</li>
                <li>☐ Functional identifiers are unique (if used)</li>
                <li>☐ Identifier scheme is documented</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="checklist-section">
          <h3>Concept Register</h3>
          <p class="checklist-desc">Additional requirements for concept modeling</p>
          <div class="checklist-grid">
            <div class="checklist-group">
              <h4>Concept Management</h4>
              <ul>
                <li>☐ Can define concepts with definitions</li>
                <li>☐ Can create concept versions</li>
                <li>☐ Can link register items to concepts</li>
                <li>☐ Concept lifecycle is independent of item lifecycle</li>
              </ul>
            </div>
            <div class="checklist-group">
              <h4>Concept Relations</h4>
              <ul>
                <li>☐ Can define concept specializations (is-a)</li>
                <li>☐ Can define concept compositions (has-part)</li>
                <li>☐ Can define custom relations</li>
                <li>☐ Relations are versioned appropriately</li>
              </ul>
            </div>
            <div class="checklist-group">
              <h4>Advanced Concepts</h4>
              <ul>
                <li>☐ Supports concept domains (value sets)</li>
                <li>☐ Supports codeset incorporation</li>
                <li>☐ Domain constraints are enforced</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="checklist-section">
          <h3>Governed Register</h3>
          <p class="checklist-desc">Additional requirements for formal governance</p>
          <div class="checklist-grid">
            <div class="checklist-group">
              <h4>Role Management</h4>
              <ul>
                <li>☐ Register Owner is designated</li>
                <li>☐ Register Manager is designated</li>
                <li>☐ Control Body is established (or alternative)</li>
                <li>☐ Role assignments are documented</li>
              </ul>
            </div>
            <div class="checklist-group">
              <h4>Proposal Process</h4>
              <ul>
                <li>☐ Proposals can be submitted</li>
                <li>☐ Proposals include required information</li>
                <li>☐ Proposal status is tracked</li>
                <li>☐ Decision rationale is recorded</li>
              </ul>
            </div>
            <div class="checklist-group">
              <h4>Audit and Appeals</h4>
              <ul>
                <li>☐ All changes create audit records</li>
                <li>☐ Audit records include who, what, when</li>
                <li>☐ Appeal process is defined</li>
                <li>☐ Appeals are tracked to resolution</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="checklist-section featured">
          <h3>Complete Concept Register (CCR)</h3>
          <p class="checklist-desc">Full commitments implementation</p>
          <div class="checklist-grid">
            <div class="checklist-group">
              <h4>Access Commitments</h4>
              <ul>
                <li>☐ Metadata is publicly accessible</li>
                <li>☐ Content is accessible (as documented)</li>
                <li>☐ Historical versions are accessible</li>
                <li>☐ Access methods are documented</li>
              </ul>
            </div>
            <div class="checklist-group">
              <h4>Persistence Commitments</h4>
              <ul>
                <li>☐ Identifier persistence is guaranteed</li>
                <li>☐ Content persistence policy is documented</li>
                <li>☐ Succession plan exists (if required)</li>
                <li>☐ Long-term preservation is addressed</li>
              </ul>
            </div>
            <div class="checklist-group">
              <h4>Transparency Commitments</h4>
              <ul>
                <li>☐ Governance is visible</li>
                <li>☐ Decision processes are documented</li>
                <li>☐ Change provenance is maintained</li>
                <li>☐ Register specification is published</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Test Case Mapping</h2>
      <p>
        Each capability maps to specific test cases. Here's how to structure
        your conformance evidence.
      </p>

      <h3>Evidence Types</h3>
      <div class="evidence-grid">
        <div class="evidence-type">
          <h4>Documentation</h4>
          <ul>
            <li>Register specification</li>
            <li>Identifier scheme documentation</li>
            <li>Governance procedures</li>
            <li>Commitment statements</li>
          </ul>
        </div>
        <div class="evidence-type">
          <h4>Demonstration</h4>
          <ul>
            <li>Live API or UI walkthrough</li>
            <li>Sample transactions</li>
            <li>Workflow demonstrations</li>
            <li>Query results</li>
          </ul>
        </div>
        <div class="evidence-type">
          <h4>Artifacts</h4>
          <ul>
            <li>Sample register items</li>
            <li>Proposal records</li>
            <li>Audit logs (redacted if needed)</li>
            <li>Decision records</li>
          </ul>
        </div>
      </div>

      <h3>Test Case Example</h3>
      <div class="test-case-example">
        <h4>Test: Item Invalidation</h4>
        <table class="test-detail-table">
          <tbody>
            <tr>
              <th>Requirement</th>
              <td>Register must support invalidation of valid items</td>
            </tr>
            <tr>
              <th>Preconditions</th>
              <td>A valid item exists in the register</td>
            </tr>
            <tr>
              <th>Test Steps</th>
              <td>
                <ol>
                  <li>Submit invalidation request for the item</li>
                  <li>Verify status changes to invalid</li>
                  <li>Verify item remains retrievable</li>
                  <li>Verify invalidation timestamp is recorded</li>
                </ol>
              </td>
            </tr>
            <tr>
              <th>Expected Result</th>
              <td>Item status is invalid, history preserved, timestamp recorded</td>
            </tr>
            <tr>
              <th>Evidence Required</th>
              <td>Before/after item states, audit record</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>Common Conformance Pitfalls</h2>
      <p>
        These issues frequently cause conformance failures:
      </p>

      <div class="pitfalls-grid">
        <div class="pitfall">
          <h4>Identifier Reuse</h4>
          <p>
            <strong>Problem:</strong> Reusing identifiers after deletion.
          </p>
          <p>
            <strong>Fix:</strong> Identifiers must never be reassigned, even
            after invalidation or retirement.
          </p>
        </div>
        <div class="pitfall">
          <h4>Incomplete Audit Trails</h4>
          <p>
            <strong>Problem:</strong> Missing who/when/why for changes.
          </p>
          <p>
            <strong>Fix:</strong> Every status change must include actor,
            timestamp, and reason.
          </p>
        </div>
        <div class="pitfall">
          <h4>Status Model Mismatch</h4>
          <p>
            <strong>Problem:</strong> Using non-standard status values.
          </p>
          <p>
            <strong>Fix:</strong> Map internal statuses to FERIN valid/invalid,
            published/unpublished.
          </p>
        </div>
        <div class="pitfall">
          <h4>Missing Commitment Evidence</h4>
          <p>
            <strong>Problem:</strong> Claiming commitments without documentation.
          </p>
          <p>
            <strong>Fix:</strong> Publish explicit commitment statements and
            policies.
          </p>
        </div>
        <div class="pitfall">
          <h4>Governance Bypass</h4>
          <p>
            <strong>Problem:</strong> Emergency changes skip governance.
          </p>
          <p>
            <strong>Fix:</strong> Even expedited changes must follow documented
            procedures.
          </p>
        </div>
        <div class="pitfall">
          <h4>Versioning Inconsistency</h4>
          <p>
            <strong>Problem:</strong> Concept versions don't align with item
            versions.
          </p>
          <p>
            <strong>Fix:</strong> Document how concept and content versioning
            relate.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Conformance Claim Format</h2>
      <p>
        When claiming conformance, use this format:
      </p>

      <div class="claim-format">
        <pre><code>This register claims conformance to ISO 19135:2026:

Register Type(s): [Content Register] [Concept Register]
                  [Governed Content Register] [Governed Concept Register]
                  [Complete Concept Register]

Capabilities Implemented:
- [List specific capabilities beyond minimum]

Commitments Declared:
- Access: [None/Low/Medium/High]
- Persistence: [None/Low/Medium/High]
- Transparency: [None/Low/Medium/High]

Conformance Date: [YYYY-MM-DD]
Register Specification: [URL to specification]</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/learn/register-types">Register Types</router-link>
          - Understanding capability-based conformance classes
        </li>
        <li>
          <router-link to="/learn/commitments">Commitments</router-link>
          - Access, persistence, and transparency specifications
        </li>
        <li>
          <router-link to="/reference/samples">Sample Registers</router-link>
          - Complete specification examples
        </li>
        <li>
          <router-link to="/build/register-specification">Register Specification</router-link>
          - Document your conformance claims
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

.key-concept {
  background: rgba(13, 148, 136, 0.1);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-lg);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  margin: var(--spacing-lg) 0;
}

.key-concept h3 {
  margin-top: 0;
  color: var(--color-accent);
}

.test-suite-table {
  margin: var(--spacing-lg) 0;
}

.checklist-accordion {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.checklist-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.checklist-section.featured {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, var(--color-surface) 100%);
}

.checklist-section h3 {
  margin-top: 0;
}

.checklist-desc {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
}

.checklist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.checklist-group h4 {
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  margin-bottom: var(--spacing-sm);
}

.checklist-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-sm);
}

.checklist-group li {
  padding: var(--spacing-xs) 0;
}

.evidence-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.evidence-type {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.evidence-type h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
}

.evidence-type ul {
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
}

.test-case-example {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.test-case-example h4 {
  margin-top: 0;
  color: var(--color-accent);
}

.test-detail-table th {
  width: 25%;
  text-align: left;
  vertical-align: top;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.test-detail-table td {
  font-size: var(--font-size-sm);
}

.pitfalls-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.pitfall {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.pitfall h4 {
  color: #dc2626;
  margin-bottom: var(--spacing-sm);
}

.pitfall p {
  font-size: var(--font-size-sm);
  margin: var(--spacing-xs) 0;
}

.claim-format {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.claim-format pre {
  background: none;
  margin: 0;
  padding: 0;
}

.claim-format code {
  color: var(--color-text-inverse);
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

@media (max-width: 768px) {
  .checklist-grid,
  .evidence-grid,
  .pitfalls-grid {
    grid-template-columns: 1fr;
  }
}
</style>
