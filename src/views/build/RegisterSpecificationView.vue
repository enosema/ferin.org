<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Register Specification</h1>
      <p class="page-lead">
        Every register must have a specification documenting its scope,
        governance, and commitments. Here's a complete template.
      </p>
    </header>

    <section class="content-section">
      <h2>Specification Template</h2>
      <p>
        Use this template as a starting point. Adapt sections to your register's needs.
      </p>

      <div class="template">
        <div class="template-section">
          <h3>1. General Information</h3>
          <div class="template-fields">
            <div class="field">
              <label>Register Title:</label>
              <input type="text" placeholder="Full name of the register" disabled />
            </div>
            <div class="field">
              <label>Register Abbreviation:</label>
              <input type="text" placeholder="Short name/acronym" disabled />
            </div>
            <div class="field">
              <label>Version:</label>
              <input type="text" placeholder="Specification version" disabled />
            </div>
            <div class="field">
              <label>Date:</label>
              <input type="text" placeholder="Date of this specification" disabled />
            </div>
          </div>
        </div>

        <div class="template-section">
          <h3>2. Scope and Purpose</h3>
          <div class="template-fields">
            <div class="field full">
              <label>Purpose:</label>
              <textarea placeholder="Why does this register exist?" disabled></textarea>
            </div>
            <div class="field full">
              <label>Scope:</label>
              <textarea placeholder="What content is included?" disabled></textarea>
            </div>
            <div class="field full">
              <label>Out of Scope:</label>
              <textarea placeholder="What is explicitly NOT included?" disabled></textarea>
            </div>
            <div class="field full">
              <label>Target Users:</label>
              <textarea placeholder="Who will use this register?" disabled></textarea>
            </div>
          </div>
        </div>

        <div class="template-section">
          <h3>3. Identifier Scheme</h3>
          <div class="template-fields">
            <div class="field full">
              <label>Identifier Format:</label>
              <textarea placeholder="Pattern for identifiers (e.g., urn:example:register:{uuid})" disabled></textarea>
            </div>
            <div class="field">
              <label>Functional Identifiers:</label>
              <input type="text" placeholder="Yes/No, and format if yes" disabled />
            </div>
            <div class="field">
              <label>Assignment Rules:</label>
              <input type="text" placeholder="How are identifiers assigned?" disabled />
            </div>
            <div class="field full">
              <label>Persistence Policy:</label>
              <textarea placeholder="Commitment to identifier persistence" disabled></textarea>
            </div>
          </div>
        </div>

        <div class="template-section">
          <h3>4. Content Requirements</h3>
          <div class="template-fields">
            <div class="field full">
              <label>Required Attributes:</label>
              <textarea placeholder="Attributes every item must have" disabled></textarea>
            </div>
            <div class="field full">
              <label>Optional Attributes:</label>
              <textarea placeholder="Additional attributes items may have" disabled></textarea>
            </div>
            <div class="field full">
              <label>Validation Rules:</label>
              <textarea placeholder="Constraints on attribute values" disabled></textarea>
            </div>
            <div class="field full">
              <label>Relations:</label>
              <textarea placeholder="Relationships between items" disabled></textarea>
            </div>
          </div>
        </div>

        <div class="template-section">
          <h3>5. Versioning</h3>
          <div class="template-fields">
            <div class="field">
              <label>Versioning Scheme:</label>
              <input type="text" placeholder="e.g., Semantic, Date-based, Sequential" disabled />
            </div>
            <div class="field full">
              <label>Substantive Change Criteria:</label>
              <textarea placeholder="What constitutes a substantive change?" disabled></textarea>
            </div>
            <div class="field full">
              <label>Compatibility Policy:</label>
              <textarea placeholder="How are breaking changes handled?" disabled></textarea>
            </div>
          </div>
        </div>

        <div class="template-section">
          <h3>6. Governance Model</h3>
          <div class="template-fields">
            <div class="field">
              <label>Register Owner:</label>
              <input type="text" placeholder="Name and contact" disabled />
            </div>
            <div class="field">
              <label>Register Manager:</label>
              <input type="text" placeholder="Name and contact" disabled />
            </div>
            <div class="field">
              <label>Control Body:</label>
              <input type="text" placeholder="Name/committee and contact" disabled />
            </div>
            <div class="field">
              <label>System Manager:</label>
              <input type="text" placeholder="Name and contact" disabled />
            </div>
            <div class="field full">
              <label>Proposal Process:</label>
              <textarea placeholder="How are proposals submitted and processed?" disabled></textarea>
            </div>
            <div class="field full">
              <label>Approval Criteria:</label>
              <textarea placeholder="What criteria for approval?" disabled></textarea>
            </div>
            <div class="field full">
              <label>Appeal Process:</label>
              <textarea placeholder="How are decisions appealed?" disabled></textarea>
            </div>
          </div>
        </div>

        <div class="template-section">
          <h3>7. Commitments</h3>
          <div class="commitments-table">
            <table>
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
                  <td><input type="text" placeholder="High/Medium/Low" disabled /></td>
                  <td><input type="text" placeholder="Details" disabled /></td>
                </tr>
                <tr>
                  <td>Access - Content</td>
                  <td><input type="text" placeholder="High/Medium/Low" disabled /></td>
                  <td><input type="text" placeholder="Details" disabled /></td>
                </tr>
                <tr>
                  <td>Access - Historic</td>
                  <td><input type="text" placeholder="High/Medium/Low" disabled /></td>
                  <td><input type="text" placeholder="Details" disabled /></td>
                </tr>
                <tr>
                  <td>Persistence - Identifier</td>
                  <td><input type="text" placeholder="High/Medium/Low" disabled /></td>
                  <td><input type="text" placeholder="Details" disabled /></td>
                </tr>
                <tr>
                  <td>Persistence - Content</td>
                  <td><input type="text" placeholder="High/Medium/Low" disabled /></td>
                  <td><input type="text" placeholder="Details" disabled /></td>
                </tr>
                <tr>
                  <td>Transparency</td>
                  <td><input type="text" placeholder="High/Medium/Low" disabled /></td>
                  <td><input type="text" placeholder="Details" disabled /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="template-section">
          <h3>8. Conformance Claims</h3>
          <div class="template-fields">
            <div class="field full">
              <label>Register Type(s):</label>
              <div class="checkboxes">
                <label><input type="checkbox" disabled /> Content Register</label>
                <label><input type="checkbox" disabled /> Concept Register</label>
                <label><input type="checkbox" disabled /> Governed Content Register</label>
                <label><input type="checkbox" disabled /> Governed Concept Register</label>
                <label><input type="checkbox" disabled /> Complete Concept Register (CCR)</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>How Detailed Should It Be?</h2>
      <table class="detail-table">
        <thead>
          <tr>
            <th>Register Type</th>
            <th>Recommended Depth</th>
            <th>Focus Areas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content Register</td>
            <td>Basic</td>
            <td>Scope, identifiers, minimal content requirements</td>
          </tr>
          <tr>
            <td>Concept Register</td>
            <td>Moderate</td>
            <td>+ Concept model, relations</td>
          </tr>
          <tr>
            <td>Governed registers</td>
            <td>Comprehensive</td>
            <td>+ Full governance, proposal process</td>
          </tr>
          <tr>
            <td>CCR</td>
            <td>Complete</td>
            <td>+ All commitments detailed</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Common Specification Mistakes</h2>

      <div class="mistakes">
        <div class="mistake">
          <h4>Vague Scope</h4>
          <p><strong>Problem:</strong> "Contains useful information about things"</p>
          <p><strong>Better:</strong> "Contains ISO 3166-1 country codes with English names"</p>
        </div>

        <div class="mistake">
          <h4>Missing Governance Details</h4>
          <p><strong>Problem:</strong> "Approved by committee"</p>
          <p><strong>Better:</strong> "Approved by Data Governance Committee, majority vote, meeting every Tuesday"</p>
        </div>

        <div class="mistake">
          <h4>Uncritical Commitment Claims</h4>
          <p><strong>Problem:</strong> "High persistence" without defining what that means</p>
          <p><strong>Better:</strong> "Identifiers guaranteed for minimum 25 years, with succession plan documented"</p>
        </div>

        <div class="mistake">
          <h4>No Change Criteria</h4>
          <p><strong>Problem:</strong> What justifies a new version is undefined</p>
          <p><strong>Better:</strong> Clear list of substantive vs non-substantive change criteria</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>See Also</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/reference/samples">Samples</router-link>
          - Complete register specification examples
        </li>
        <li>
          <router-link to="/build/getting-started">Getting Started</router-link>
          - Implementation guide
        </li>
        <li>
          <router-link to="/reference/commitments">Commitments</router-link>
          - Detailed commitment specifications
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

.template {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  margin: var(--spacing-lg) 0;
}

.template-section {
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-border);
}

.template-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.template-section h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
}

.template-fields {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.field {
  flex: 1;
  min-width: 200px;
}

.field.full {
  flex: 100%;
}

.field label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-light);
}

.field input,
.field textarea {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-family: var(--font-sans);
  background: var(--color-background);
  color: var(--color-text-light);
  cursor: not-allowed;
}

.field textarea {
  min-height: 60px;
  resize: vertical;
}

.checkboxes {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  min-width: 0;
}

.checkboxes label {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  font-weight: var(--font-weight-normal);
  cursor: not-allowed;
  min-width: 0;
  word-break: break-word;
}

.checkboxes label input[type="checkbox"] {
  flex-shrink: 0;
  margin-top: 2px;
}

.commitments-table table {
  width: 100%;
}

.commitments-table input {
  width: 100%;
  padding: var(--spacing-xs);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  background: var(--color-background);
  color: var(--color-text-light);
}

.detail-table {
  margin: var(--spacing-lg) 0;
}

.mistakes {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.mistake {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.mistake h4 {
  font-size: var(--font-size-base);
  color: var(--color-error);
  margin: 0 0 var(--spacing-sm);
}

.mistake p {
  font-size: var(--font-size-sm);
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
</style>
