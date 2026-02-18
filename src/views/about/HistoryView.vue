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
            <h3>
              <a href="https://www.iso.org/standard/32553.html" target="_blank" rel="noopener noreferrer">
                ISO 19135:2005 (First Edition)
              </a>
            </h3>
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
            <h3>
              <a href="https://www.iso.org/standard/55998.html" target="_blank" rel="noopener noreferrer">
                ISO/TS 19135-2:2012
              </a>
              <span class="status-badge withdrawn">Withdrawn</span>
            </h3>
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
            <h3>
              <a href="https://www.iso.org/standard/54721.html" target="_blank" rel="noopener noreferrer">
                ISO 19135-1:2015 (Second Edition)
              </a>
              <span class="status-badge withdrawn">Withdrawn</span>
            </h3>
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
            <h3>
              <a href="https://www.iso.org/standard/78896.html" target="_blank" rel="noopener noreferrer">
                ISO 19135-1:2015/Amd 1:2021
              </a>
              <span class="status-badge withdrawn">Withdrawn</span>
            </h3>
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
            <h3>
              <a href="https://www.iso.org/standard/87753.html" target="_blank" rel="noopener noreferrer">
                ISO 19135:2025 (Third Edition) - The FERIN Framework
              </a>
              <span class="status-badge current">Current</span>
            </h3>
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
            <td><strong><OrganizationLink org-key="iso_tc211" /></strong></td>
            <td>
              Technical committee responsible for developing and maintaining
              the standard. Comprises national standards bodies and liaison
              organizations.
            </td>
          </tr>
          <tr>
            <td><strong><OrganizationLink org-key="cen_tc287" /></strong></td>
            <td>
              European collaboration via the Vienna Agreement, ensuring
              alignment between ISO and European standards.
            </td>
          </tr>
          <tr>
            <td><strong><OrganizationLink org-key="iho" /></strong></td>
            <td>
              International Hydrographic Organization references FERIN concepts
              in the S-100 framework for maritime data.
            </td>
          </tr>
          <tr>
            <td><strong><OrganizationLink org-key="ogc" /></strong></td>
            <td>
              Open Geospatial Consortium has long-standing collaboration with
              ISO/TC 211 on geographic standards.
            </td>
          </tr>
          <tr>
            <td><strong><OrganizationLink org-key="enosema" :show-icon="true" /></strong></td>
            <td>
              Contributor to concept relations development and site publisher.
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
      <h2>Development of ISO 19135:2026</h2>
      <p>
        ISO 19135:2026 was developed as a joint collaboration between ISO and CEN
        under the Vienna Agreement. The development process followed ISO's rigorous
        standards development stages.
      </p>

      <h3>Development Stages</h3>
      <div class="stages-table">
        <div class="stage-row stage-header">
          <span class="stage-code">Stage</span>
          <span class="stage-name">Description</span>
          <span class="stage-date">Date</span>
        </div>
        <div class="stage-row">
          <span class="stage-code">10.99</span>
          <span class="stage-name">New work item proposal approved</span>
          <span class="stage-date">2022-05</span>
        </div>
        <div class="stage-row">
          <span class="stage-code">20.00</span>
          <span class="stage-name">Working draft registered</span>
          <span class="stage-date">2022-11</span>
        </div>
        <div class="stage-row">
          <span class="stage-code">30.00</span>
          <span class="stage-name">Committee draft registered</span>
          <span class="stage-date">2023-05</span>
        </div>
        <div class="stage-row">
          <span class="stage-code">40.00</span>
          <span class="stage-name">DIS (Draft International Standard) registered</span>
          <span class="stage-date">2024-06</span>
        </div>
        <div class="stage-row">
          <span class="stage-code">50.00</span>
          <span class="stage-name">FDIS (Final Draft International Standard) registered</span>
          <span class="stage-date">2025-06</span>
        </div>
        <div class="stage-row">
          <span class="stage-code">60.60</span>
          <span class="stage-name">International Standard published</span>
          <span class="stage-date">2026-02-05</span>
        </div>
      </div>

      <h3>Project Leadership</h3>
      <p>The standard was developed under the leadership of:</p>
      <ul class="leadership-list">
        <li><strong><TeamMemberBadge member="Ronald Tse (CalConnect / Ribose)" /></strong> - Project Leader</li>
        <li><strong><TeamMemberBadge member="Reese Plews (JISC Japan / Plews Consulting)" /></strong> - Project Leader</li>
      </ul>

      <h3>Project Team</h3>
      <p>
        The ISO 19135 Project Team comprised experts from national standards bodies,
        liaison organizations, and industry:
      </p>
      <div class="team-grid">
        <div class="team-member"><TeamMemberBadge member="Jean Brodeur" /></div>
        <div class="team-member"><TeamMemberBadge member="Jiantao Bi (RADI)" /></div>
        <div class="team-member"><TeamMemberBadge member="Michael Craymer (NRCAN)" /></div>
        <div class="team-member"><TeamMemberBadge member="Gobe Hobona (OGC)" /></div>
        <div class="team-member"><TeamMemberBadge member="Jan Hjelmager (SDFE)" /></div>
        <div class="team-member"><TeamMemberBadge member="Knut Jetlund (Kartverket)" /></div>
        <div class="team-member"><TeamMemberBadge member="Paul Janssen (Geonovum)" /></div>
        <div class="team-member"><TeamMemberBadge member="Liz Kolster (NZTA)" /></div>
        <div class="team-member"><TeamMemberBadge member="Chikako Kurokawa (Asia Air Survey)" /></div>
        <div class="team-member"><TeamMemberBadge member="Jeffrey Lau (Ribose)" /></div>
        <div class="team-member"><TeamMemberBadge member="Marie Lambois (IGN)" /></div>
        <div class="team-member"><TeamMemberBadge member="Roger Lott (IOGP)" /></div>
        <div class="team-member"><TeamMemberBadge member="Peter Parslow (Ordnance Survey)" /></div>
        <div class="team-member"><TeamMemberBadge member="Ivana Ivanova (Curtin University)" /></div>
        <div class="team-member"><TeamMemberBadge member="Scott Simmons (OGC)" /></div>
        <div class="team-member"><TeamMemberBadge member="Stefan Strobel (Strobel Geoinformatics)" /></div>
        <div class="team-member"><TeamMemberBadge member="Anton Strogonoff (Ribose)" /></div>
        <div class="team-member"><TeamMemberBadge member="Torsten Svärd (Lantmäteriet)" /></div>
        <div class="team-member"><TeamMemberBadge member="Larry D. Hothem" /></div>
        <div class="team-member"><TeamMemberBadge member="Yong Baek (IHO)" /></div>
        <div class="team-member"><TeamMemberBadge member="Mats Åhlin (SIS)" /></div>
        <div class="team-member"><TeamMemberBadge member="Patrick Vorster (DALRRD)" /></div>
        <div class="team-member"><TeamMemberBadge member="Ryu Ryan (ETRI)" /></div>
        <div class="team-member"><TeamMemberBadge member="Heidi Vanparys (SDFI)" /></div>
      </div>

      <h3>Acknowledgments</h3>
      <p>
        The Project Team thanks the following for their tireless editing and
        validation of the document:
      </p>
      <ul>
        <li><strong>Nicola Perou</strong> - ISO Editor</li>
        <li><strong>Mats Åhlin</strong> and <strong>Christine Allansson</strong> - ISO/TC 211 Secretariat (<OrganizationLink org-key="sis" />)</li>
      </ul>

      <h3>ISO and CEN Support</h3>
      <div class="support-grid">
        <div class="support-item">
          <span class="support-label">ISO Technical Programme Manager</span>
          <span class="support-value">Hakim Mkinsi</span>
        </div>
        <div class="support-item">
          <span class="support-label">ISO Editorial Programme Manager</span>
          <span class="support-value">Alison Reid-Jamond</span>
        </div>
        <div class="support-item">
          <span class="support-label">CEN Secretary</span>
          <span class="support-value">Christopher Starr</span>
        </div>
        <div class="support-item">
          <span class="support-label">CEN Programme Manager</span>
          <span class="support-value">Lucia Lanfri</span>
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
        See the <router-link to="/upgrade">Upgrade Guide</router-link>
        for detailed transition guidance.
      </p>
    </section>
  </article>
</template>

<script setup>
import OrganizationLink from '@/components/ui/OrganizationLink.vue'
import TeamMemberBadge from '@/components/ui/TeamMemberBadge.vue'
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
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.timeline-content h3 a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.timeline-content h3 a:hover {
  color: var(--color-accent);
  text-decoration: underline;
}

.status-badge {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-badge.withdrawn {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.status-badge.current {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
}

.timeline-content p:last-child {
  margin-bottom: 0;
}

.org-table {
  margin: var(--spacing-lg) 0;
}

.org-table a {
  color: var(--color-accent);
  text-decoration: none;
}

.org-table a:hover {
  text-decoration: underline;
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

.content-section h3 {
  font-size: var(--font-size-lg);
  margin: var(--spacing-xl) 0 var(--spacing-md);
  color: var(--color-primary);
}

.stages-table {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.stage-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border);
}

.stage-row:last-child {
  border-bottom: none;
}

.stage-header {
  font-weight: var(--font-weight-bold);
  color: var(--color-text-light);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid var(--color-border);
}

.stage-code {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
  min-width: 60px;
}

.stage-name {
  font-size: var(--font-size-sm);
  color: var(--color-text);
  flex: 1;
}

.stage-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  min-width: 80px;
  text-align: right;
  font-family: var(--font-mono);
}

.leadership-list {
  list-style: none;
  padding: 0;
  margin: var(--spacing-md) 0;
}

.leadership-list li {
  padding: var(--spacing-sm) 0;
  font-size: var(--font-size-base);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-sm);
  margin: var(--spacing-md) 0;
}

.team-member {
  font-size: var(--font-size-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.support-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.support-label {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
}

.support-value {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
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
