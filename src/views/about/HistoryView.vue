<template>
  <article class="content-page">
    <header class="page-header">
      <h1>History</h1>
      <p class="page-lead">
        FERIN evolved from procedures for geographic information registration into
        a generalized framework applicable across domains.
      </p>
    </header>

    <section class="content-section">
      <h2>Timeline</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">1994</div>
          <div class="timeline-content">
            <h3>ISO/TC 211 Established</h3>
            <p>
              The ISO Technical Committee 211 for Geographic Information/Geomatics
              is established to develop an integrated set of geographic information
              standards. The need for managing geographic reference data becomes
              apparent early in the committee's work.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">2005</div>
          <div class="timeline-content">
            <h3>ISO 19135:2005 (First Edition)</h3>
            <p>
              <strong>Geographic information - Procedures for item registration</strong>
              is published on October 15, 2005. This first edition establishes
              foundational concepts for:
            </p>
            <ul>
              <li>Establishing registers</li>
              <li>Maintaining register content</li>
              <li>Publishing registers</li>
              <li>Governance roles and processes</li>
            </ul>
            <p>
              The focus is primarily on geographic information, but the procedural
              framework proves applicable to other domains.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">2012</div>
          <div class="timeline-content">
            <h3>ISO/TS 19135-2:2012</h3>
            <p>
              A technical specification for <strong>XML Schema Implementation</strong>
              (the "grg" encoding) is published. This provides a concrete encoding
              for register data exchange.
            </p>
            <p>
              <em>Note: This specification was later withdrawn on July 2, 2019,
              as implementation-level concerns were moved out of scope.</em>
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">2015</div>
          <div class="timeline-content">
            <h3>ISO 19135-1:2015 (Second Edition)</h3>
            <p>
              A technical revision introduces significant improvements:
            </p>
            <ul>
              <li>
                <strong>Split into parts</strong>: The standard is restructured
                for better maintainability
              </li>
              <li>
                <strong>Conformance classes</strong>: Three levels introduced—Core,
                Extended, and Hierarchical
              </li>
              <li>
                <strong>Clarified governance</strong>: Better definition of roles
                and responsibilities
              </li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">2021</div>
          <div class="timeline-content">
            <h3>ISO 19135-1:2015/Amd 1:2021</h3>
            <p>
              An amendment incorporates provisions from the withdrawn XML schema
              specification, but as conceptual requirements rather than
              implementation details.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">2025</div>
          <div class="timeline-content">
            <h3>ISO 19135:2025 (Third Edition) - The FERIN Framework</h3>
            <p>
              A major revision introduces the <strong>FERIN framework</strong>:
            </p>
            <ul>
              <li>
                <strong>Generalized application</strong>: No longer limited to
                geographic information—applicable to any domain
              </li>
              <li>
                <strong>Concept and content planes</strong>: Formal separation
                of meaning from data
              </li>
              <li>
                <strong>Capability-based conformance</strong>: Five conformance
                classes based on capabilities, not hierarchy
              </li>
              <li>
                <strong>No implementation specifics</strong>: Technology-neutral
                framework without XML schema or encoding constraints
              </li>
              <li>
                <strong>Commitments</strong>: Explicit commitments for access,
                persistence, and transparency
              </li>
            </ul>
            <p>
              Published 2025, with the official designation <strong>ISO 19135:2026</strong>
              reflecting the publication year.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Key Organizations</h2>
      <table class="org-table">
        <thead>
          <tr>
            <th>Organization</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ISO/TC 211</strong></td>
            <td>
              Technical committee responsible for developing and maintaining
              the standard. Comprises national standards bodies and liaison
              organizations.
            </td>
          </tr>
          <tr>
            <td><strong>CEN/TC 287</strong></td>
            <td>
              European collaboration via the Vienna Agreement, ensuring
              alignment between ISO and European standards.
            </td>
          </tr>
          <tr>
            <td><strong>IHO</strong></td>
            <td>
              International Hydrographic Organization references FERIN concepts
              in the S-100 framework for maritime data.
            </td>
          </tr>
          <tr>
            <td><strong>OGC</strong></td>
            <td>
              Open Geospatial Consortium has long-standing collaboration with
              ISO/TC 211 on geographic standards.
            </td>
          </tr>
          <tr>
            <td><strong>Enosema Foundation</strong></td>
            <td>
              Trademark holder for FERIN and contributor to concept relations
              development.
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Evolution from Procedures to Framework</h2>
      <p>
        The 2025 edition represents a fundamental shift in philosophy:
      </p>
      <div class="comparison-grid">
        <div class="comparison-card">
          <h4>2015 Edition</h4>
          <p><em>Procedures for item registration</em></p>
          <ul>
            <li>Focus on geographic information</li>
            <li>Procedural requirements</li>
            <li>Hierarchical conformance</li>
            <li>Implementation included (XML)</li>
          </ul>
        </div>
        <div class="comparison-card">
          <h4>2025 Edition</h4>
          <p><em>Framework for Extensible Registration</em></p>
          <ul>
            <li>Domain-agnostic</li>
            <li>Conceptual framework</li>
            <li>Capability-based conformance</li>
            <li>Technology-neutral</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Migration from 2015 Edition</h2>
      <p>
        Organizations with registers conforming to the 2015 edition should be
        aware of key changes:
      </p>
      <ul>
        <li>
          <strong>Conformance classes</strong>: The Core/Extended/Hierarchical
          model is replaced by capability-based classes
        </li>
        <li>
          <strong>Concept plane</strong>: Explicit modeling of concepts is now
          a core part of the framework
        </li>
        <li>
          <strong>Commitments</strong>: New requirements for access, persistence,
          and transparency
        </li>
        <li>
          <strong>Status model</strong>: Refined status handling for both
          concepts and content
        </li>
      </ul>
      <p>
        See the <router-link to="/build/migration">Migration Guide</router-link>
        for detailed transition guidance.
      </p>
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

.timeline {
  position: relative;
  padding-left: 120px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 80px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-accent);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-xl);
  padding-left: var(--spacing-lg);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -48px;
  top: 8px;
  width: 12px;
  height: 12px;
  background: var(--color-accent);
  border-radius: 50%;
  border: 3px solid var(--color-background);
}

.timeline-date {
  position: absolute;
  left: -120px;
  top: 0;
  width: 60px;
  text-align: right;
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
  font-size: var(--font-size-sm);
}

.timeline-content h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
}

.timeline-content p:last-child {
  margin-bottom: 0;
}

.org-table {
  margin: var(--spacing-lg) 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.comparison-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.comparison-card h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-xs);
}

.comparison-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
}

.comparison-card ul {
  font-size: var(--font-size-sm);
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 60px;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item::before {
    left: -48px;
  }

  .timeline-date {
    left: -60px;
    width: 40px;
    font-size: var(--font-size-xs);
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }
}
</style>
