<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Specification Templates</h1>
      <p class="page-lead">
        Ready-to-use templates for documenting FERIN register specifications.
        Customize for your register type and requirements.
      </p>
    </header>

    <section class="content-section">
      <h2>Template Overview</h2>
      <p>
        Every FERIN register should have a specification document. These
        templates provide a starting point for each register type.
      </p>

      <div class="template-cards">
        <div class="template-card">
          <span class="type-tag content">Content Register</span>
          <h4>Basic Template</h4>
          <p>Simple registers with minimal governance</p>
          <a href="#content-template" class="template-link">View Template</a>
        </div>
        <div class="template-card">
          <span class="type-tag concept">Concept Register</span>
          <h4>Concept Template</h4>
          <p>Registers with concept modeling</p>
          <a href="#concept-template" class="template-link">View Template</a>
        </div>
        <div class="template-card">
          <span class="type-tag governed">Governed Template</span>
          <h4>Governed Template</h4>
          <p>Registers with formal governance</p>
          <a href="#governed-template" class="template-link">View Template</a>
        </div>
        <div class="template-card">
          <span class="type-tag ccr">CCR Template</span>
          <h4>Complete Template</h4>
          <p>Full CCR specification</p>
          <a href="#ccr-template" class="template-link">View Template</a>
        </div>
      </div>
    </section>

    <section class="content-section" id="content-template">
      <h2>Content Register Template</h2>
      <p>
        Use this template for Content Registers and Governed Content Registers.
      </p>

      <div class="template-document">
        <pre><code># Register Specification

## 1. General Information

| Field | Value |
|-------|-------|
| Register Title | [Your Register Name] |
| Register Abbreviation | [Abbreviation] |
| Version | [Version Number] |
| Specification Date | [YYYY-MM-DD] |
| Register Type | Content Register / Governed Content Register |

## 2. Scope and Purpose

### 2.1 Purpose
[Describe why this register exists and what problem it solves.]

### 2.2 Scope
[Describe what is included in this register.]

**Included:**
- [Item type 1]
- [Item type 2]

**Excluded:**
- [Out of scope item 1]
- [Out of scope item 2]

### 2.3 Target Users
[List who will use this register and for what purposes.]

### 2.4 Use Cases
1. [Use case 1]
2. [Use case 2]

## 3. Identifier Scheme

### 3.1 Object Identifier Format
[Specify format, e.g., `urn:org:type:id`]

### 3.2 Functional Identifier Format (if used)
[Specify format, e.g., `prefix:code`]

### 3.3 Assignment Rules
[Describe how identifiers are assigned.]

### 3.4 Persistence Policy
[Describe commitment to identifier persistence.]

## 4. Content Requirements

### 4.1 Required Attributes

| Attribute | Type | Description | Constraints |
|-----------|------|-------------|-------------|
| [name] | [type] | [description] | [constraints] |

### 4.2 Optional Attributes

| Attribute | Type | Description | Constraints |
|-----------|------|-------------|-------------|

### 4.3 Content Validation Rules
[Describe any content validation rules.]

## 5. Versioning

### 5.1 Versioning Scheme
[Describe versioning approach, e.g., semantic versioning.]

### 5.2 Substantive Change Criteria
[List what constitutes a substantive change requiring a new version.]

## 6. Status Management

### 6.1 Status Values
- Valid / Invalid
- Published / Unpublished

### 6.2 Status Transitions
[Describe allowed status transitions.]

## 7. Governance (if applicable)

### 7.1 Register Owner
[Name and organization]

### 7.2 Register Manager
[Name and organization]

### 7.3 Control Body
[Name and composition]

### 7.4 Proposal Process
[Describe how proposals are submitted and processed.]

### 7.5 Approval Criteria
[List criteria for approving proposals.]

### 7.6 Appeal Process
[Describe how to appeal decisions.]

## 8. Conformance Claims

### 8.1 Register Type
[Specify claimed register type(s).]

### 8.2 Capabilities
[List implemented capabilities beyond minimum.]</code></pre>
      </div>
    </section>

    <section class="content-section" id="concept-template">
      <h2>Concept Register Template</h2>
      <p>
        Extends the Content Register template with concept modeling sections.
      </p>

      <div class="template-additions">
        <h3>Additional Sections for Concept Registers</h3>
        <pre><code>## 9. Concept Modeling

### 9.1 Concept Definition Requirements
[Describe required elements for concept definitions.]

### 9.2 Concept Versioning
[Describe how concept versions are managed.]

### 9.3 Concept-Item Linking
[Describe how concepts link to register items.]

## 10. Concept Relationships

### 10.1 Inheritance (Is-A)
[Describe if and how inheritance is used.]

### 10.2 Composition (Has-Part)
[Describe if and how composition is used.]

### 10.3 Custom Relationships
[List any custom relationship types.]

## 11. Concept Domains (if used)

### 11.1 Domain Definitions

| Domain Name | Values | Description |
|-------------|--------|-------------|
| [domain] | [values] | [description] |

## 12. Codeset Incorporation (if used)

### 12.1 Incorporated Codesets

| Codeset | Source | Scope |
|---------|--------|-------|
| [name] | [URL] | [scope] |

### 12.2 Synchronization Strategy
[Describe how incorporated codesets are synchronized.]</code></pre>
      </div>
    </section>

    <section class="content-section" id="governed-template">
      <h2>Governed Register Template</h2>
      <p>
        Extends templates with complete governance documentation.
      </p>

      <div class="template-additions">
        <h3>Additional Sections for Governed Registers</h3>
        <pre><code>## 13. Governance Framework

### 13.1 Governance Structure

| Role | Name/Organization | Responsibilities |
|------|-------------------|------------------|
| Register Owner | | |
| Register Manager | | |
| Control Body | | |

### 13.2 Proposal Types
[List types of proposals that can be submitted.]

### 13.3 Proposal Requirements
[List required information for proposals.]

### 13.4 Review Process
[Describe the review workflow.]

### 13.5 Decision Criteria
[List criteria used to make decisions.]

### 13.6 Timeline Requirements
| Proposal Type | Target Response |
|---------------|-----------------|
| [type] | [timeframe] |

## 14. Audit and Compliance

### 14.1 Audit Trail Requirements
[Describe what is recorded in the audit trail.]

### 14.2 Audit Trail Retention
[Specify retention period for audit records.]

### 14.3 Compliance Requirements
[List any regulatory or policy requirements.]

## 15. Transparency

### 15.1 Public Information
[Describe what is publicly visible.]

### 15.2 Confidential Information
[Describe what is kept confidential and why.]</code></pre>
      </div>
    </section>

    <section class="content-section" id="ccr-template">
      <h2>CCR Template</h2>
      <p>
        The complete template for Complete Concept Registers. Combine all
        previous sections with commitments documentation.
      </p>

      <div class="template-additions">
        <h3>Additional Sections for CCR</h3>
        <pre><code>## 16. Commitments

### 16.1 Access Commitments

| Commitment | Level | Description |
|------------|-------|-------------|
| Access - Metadata | [None/Low/Medium/High] | [description] |
| Access - Content | [None/Low/Medium/High] | [description] |
| Access - Historic | [None/Low/Medium/High] | [description] |

### 16.2 Persistence Commitments

| Commitment | Level | Description |
|------------|-------|-------------|
| Persistence - Identifier | [None/Low/Medium/High] | [description] |
| Persistence - Content | [None/Low/Medium/High] | [description] |
| Persistence - Historic | [None/Low/Medium/High] | [description] |

### 16.3 Transparency Commitments

| Commitment | Level | Description |
|------------|-------|-------------|
| Transparency | [None/Low/Medium/High] | [description] |

### 16.4 Succession Plan (if applicable)
[Describe succession arrangements if register is discontinued.]

## 17. Service Level Agreements

### 17.1 Availability
[Specify availability commitment, e.g., 99.9%]

### 17.2 Response Times
[Specify target response times for operations.]

### 17.3 Support
[Describe support arrangements.]

## 18. Operational Requirements

### 18.1 Backup and Recovery
[Describe backup procedures and recovery objectives.]

### 18.2 Security
[Describe security measures in place.]

### 18.3 Monitoring
[Describe health monitoring arrangements.]</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Completeness Checklist</h2>
      <p>
        Use this checklist to verify your specification is complete:
      </p>

      <div class="completeness-checklist">
        <div class="checklist-section">
          <h4>Essential (All Types)</h4>
          <ul>
            <li>☐ Register title and abbreviation</li>
            <li>☐ Scope and purpose</li>
            <li>☐ Identifier scheme</li>
            <li>☐ Content requirements</li>
            <li>☐ Versioning approach</li>
            <li>☐ Status management</li>
            <li>☐ Conformance claims</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Concept Registers</h4>
          <ul>
            <li>☐ Concept definition requirements</li>
            <li>☐ Concept versioning rules</li>
            <li>☐ Concept relationships</li>
            <li>☐ Domain definitions (if used)</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Governed Registers</h4>
          <ul>
            <li>☐ Role assignments</li>
            <li>☐ Proposal process</li>
            <li>☐ Approval criteria</li>
            <li>☐ Appeal process</li>
            <li>☐ Audit requirements</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>CCR Only</h4>
          <ul>
            <li>☐ Access commitments</li>
            <li>☐ Persistence commitments</li>
            <li>☐ Transparency commitments</li>
            <li>☐ Succession plan</li>
            <li>☐ SLA definitions</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Example Specifications</h2>
      <p>
        See these complete examples:
      </p>
      <ul>
        <li>
          <router-link to="/reference/samples">RUM: Register of Units of Measure</router-link>
          - Full CCR specification example
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/register-specification">Register Specification</router-link>
          - Guide to writing specifications
        </li>
        <li>
          <router-link to="/learn/register-types">Register Types</router-link>
          - Understanding conformance classes
        </li>
        <li>
          <router-link to="/reference/samples">Sample Registers</router-link>
          - Complete specification examples
        </li>
        <li>
          <router-link to="/reference/conformance">Conformance Guide</router-link>
          - Verifying your implementation
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

.template-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.template-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  text-align: center;
}

.type-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-md);
}

.type-tag.content {
  background: rgba(100, 116, 139, 0.2);
  color: #64748b;
}

.type-tag.concept {
  background: rgba(139, 92, 246, 0.2);
  color: #7c3aed;
}

.type-tag.governed {
  background: rgba(245, 158, 11, 0.2);
  color: #d97706;
}

.type-tag.ccr {
  background: rgba(13, 148, 136, 0.2);
  color: var(--color-accent);
}

.template-card h4 {
  margin-bottom: var(--spacing-sm);
}

.template-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.template-link {
  font-size: var(--font-size-sm);
  color: var(--color-accent);
}

.template-document,
.template-additions {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  overflow-x: auto;
}

.template-document pre,
.template-additions pre {
  background: none;
  margin: 0;
  padding: 0;
}

.template-document code,
.template-additions code {
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
}

.template-additions h3 {
  color: var(--color-text-inverse);
  margin-top: 0;
}

.completeness-checklist {
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
  .template-cards,
  .completeness-checklist {
    grid-template-columns: 1fr;
  }
}
</style>
