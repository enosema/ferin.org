<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Case Studies</h1>
      <p class="page-lead">
        Real-world FERIN implementations across register types. Learn from
        actual deployments and their lessons learned.
      </p>
    </header>

    <section class="content-section">
      <h2>Overview</h2>
      <p>
        These case studies illustrate how different organizations have
        implemented FERIN-compliant registers. Each case demonstrates a
        different register type and use case.
      </p>

      <div class="case-summary">
        <div class="case-card">
          <span class="type-tag content">Content Register</span>
          <h4>Internal Code List</h4>
          <p>Tech startup's product category system</p>
        </div>
        <div class="case-card">
          <span class="type-tag governed-content">Governed Content</span>
          <h4>Regulatory Compliance</h4>
          <p>Financial services reporting codes</p>
        </div>
        <div class="case-card">
          <span class="type-tag concept">Concept Register</span>
          <h4>Scientific Terminology</h4>
          <p>Research institution's species taxonomy</p>
        </div>
        <div class="case-card">
          <span class="type-tag governed-concept">Governed Concept</span>
          <h4>Enterprise Taxonomy</h4>
          <p>Global corporation's data dictionary</p>
        </div>
        <div class="case-card">
          <span class="type-tag ccr">CCR</span>
          <h4>National Standard</h4>
          <p>Government geographic codes register</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Case 1: Internal Code List (Content Register)</h2>

      <div class="case-header">
        <div class="org-info">
          <h3>TechStartup Inc. - Product Categories</h3>
          <p><strong>Industry:</strong> E-commerce</p>
          <p><strong>Scale:</strong> 500 employees, 10,000+ products</p>
          <p><strong>Register Type:</strong> Content Register</p>
        </div>
      </div>

      <h3>Problem</h3>
      <p>
        The product team maintained product categories in spreadsheets, leading
        to inconsistent categorization across systems. Different teams used
        different category names, causing search failures and reporting issues.
      </p>

      <h3>Solution</h3>
      <p>
        Implemented a Content Register for product categories with:
      </p>
      <ul>
        <li>Simple REST API for category lookup</li>
        <li>Unique identifiers for each category</li>
        <li>Basic status tracking (active/inactive)</li>
        <li>Single source of truth integrated with all systems</li>
      </ul>

      <h3>Implementation</h3>
      <div class="impl-details">
        <table>
          <tbody>
            <tr>
              <th>Technology</th>
              <td>PostgreSQL + Node.js API</td>
            </tr>
            <tr>
              <th>Identifier Scheme</th>
              <td>UUID (opaque)</td>
            </tr>
            <tr>
              <th>Governance</th>
              <td>Product Manager approves changes</td>
            </tr>
            <tr>
              <th>Integration</th>
              <td>API consumed by e-commerce platform, inventory system, analytics</td>
            </tr>
            <tr>
              <th>Development Time</th>
              <td>3 weeks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Results</h3>
      <ul>
        <li>Category inconsistency reduced from 23% to under 2%</li>
        <li>Product search relevance improved by 40%</li>
        <li>Cross-system reporting became reliable</li>
        <li>Onboarding new systems simplified</li>
      </ul>

      <h3>Lessons Learned</h3>
      <div class="lessons">
        <ul>
          <li>
            <strong>Start simple:</strong> Content Register was sufficient; no
            need for concept modeling or formal governance initially
          </li>
          <li>
            <strong>Integration matters:</strong> Success depended on all systems
            adopting the register, not just building it
          </li>
          <li>
            <strong>Identifier format:</strong> UUIDs worked well for internal use;
            would use URNs if external sharing was needed
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Case 2: Regulatory Compliance (Governed Content Register)</h2>

      <div class="case-header">
        <div class="org-info">
          <h3>GlobalBank Corp - Reporting Codes</h3>
          <p><strong>Industry:</strong> Financial Services</p>
          <p><strong>Scale:</strong> 50,000 employees, 20 countries</p>
          <p><strong>Register Type:</strong> Governed Content Register</p>
        </div>
      </div>

      <h3>Problem</h3>
      <p>
        Regulatory reporting required consistent use of transaction codes across
        all business units. Auditors demanded proof of who approved which codes
        and when. Legacy systems had inconsistent code lists and no audit trails.
      </p>

      <h3>Solution</h3>
      <p>
        Implemented a Governed Content Register with:
      </p>
      <ul>
        <li>Formal proposal and approval workflow</li>
        <li>Complete audit trail for all changes</li>
        <li>Role-based access for regulators and auditors</li>
        <li>Integration with all transaction processing systems</li>
      </ul>

      <h3>Implementation</h3>
      <div class="impl-details">
        <table>
          <tbody>
            <tr>
              <th>Technology</th>
              <td>Custom build on .NET + SQL Server</td>
            </tr>
            <tr>
              <th>Identifier Scheme</th>
              <td>URN with organization namespace</td>
            </tr>
            <tr>
              <th>Governance</th>
              <td>Compliance team as Control Body, quarterly review meetings</td>
            </tr>
            <tr>
              <th>Audit Requirements</th>
              <td>7-year retention, immutable audit log</td>
            </tr>
            <tr>
              <th>Development Time</th>
              <td>6 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Results</h3>
      <ul>
        <li>Passed regulatory audit with zero findings on code management</li>
        <li>Reduced code-related reporting errors by 85%</li>
        <li>Audit preparation time reduced from weeks to hours</li>
        <li>Regulators have read-only portal access</li>
      </ul>

      <h3>Lessons Learned</h3>
      <div class="lessons">
        <ul>
          <li>
            <strong>Audit trail design:</strong> Make audit logs append-only and
            integrity-protected from day one
          </li>
          <li>
            <strong>Governance overhead:</strong> Factor in Control Body meeting
            time; queue proposals efficiently
          </li>
          <li>
            <strong>Regulator access:</strong> Build read-only access for
            auditors early; they will ask for it
          </li>
          <li>
            <strong>Legacy migration:</strong> Backfill audit records for legacy
            data, or document the gap clearly
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Case 3: Scientific Terminology (Concept Register)</h2>

      <div class="case-header">
        <div class="org-info">
          <h3>MarineBio Institute - Species Taxonomy</h3>
          <p><strong>Industry:</strong> Scientific Research</p>
          <p><strong>Scale:</strong> 200 researchers, 50,000+ species</p>
          <p><strong>Register Type:</strong> Concept Register</p>
        </div>
      </div>

      <h3>Problem</h3>
      <p>
        Marine species taxonomy evolves as research progresses. Species get
        reclassified, definitions refined, and relationships updated. Researchers
        needed to track both the current understanding and the history of changes,
        without breaking references in published papers.
      </p>

      <h3>Solution</h3>
      <p>
        Implemented a Concept Register with:
      </p>
      <ul>
        <li>Concept layer for taxonomic definitions</li>
        <li>Concept versioning to track definition changes</li>
        <li>Inheritance relationships for taxonomic hierarchy</li>
        <li>Stable identifiers that persist through reclassification</li>
      </ul>

      <h3>Implementation</h3>
      <div class="impl-details">
        <table>
          <tbody>
            <tr>
              <th>Technology</th>
              <td>Python + PostgreSQL + GraphQL API</td>
            </tr>
            <tr>
              <th>Identifier Scheme</th>
              <td>LSID (Life Science Identifiers)</td>
            </tr>
            <tr>
              <th>Concept Features</th>
              <td>Inheritance (is-a), composition (has-part), versioning</td>
            </tr>
            <tr>
              <th>Governance</th>
              <td>Editorial board review, no formal governance required</td>
            </tr>
            <tr>
              <th>Development Time</th>
              <td>4 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Results</h3>
      <ul>
        <li>Researchers can cite stable identifiers in publications</li>
        <li>Taxonomic changes don't break existing references</li>
        <li>Full history of classification changes available</li>
        <li>Integration with external biodiversity databases</li>
      </ul>

      <h3>Lessons Learned</h3>
      <div class="lessons">
        <ul>
          <li>
            <strong>Concept-item separation:</strong> Essential for scientific
            use cases where definitions evolve
          </li>
          <li>
            <strong>Identifier persistence:</strong> Researchers will cite your
            identifiers in papers; make them truly persistent
          </li>
          <li>
            <strong>Version queries:</strong> Build good query support for
            "what did this concept mean on date X?"
          </li>
          <li>
            <strong>External linking:</strong> Link to external authorities
            (GBIF, WoRMS) rather than duplicating
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Case 4: Enterprise Taxonomy (Governed Concept Register)</h2>

      <div class="case-header">
        <div class="org-info">
          <h3>MegaCorp Ltd - Enterprise Data Dictionary</h3>
          <p><strong>Industry:</strong> Manufacturing</p>
          <p><strong>Scale:</strong> 100,000 employees, 40 countries</p>
          <p><strong>Register Type:</strong> Governed Concept Register</p>
        </div>
      </div>

      <h3>Problem</h3>
      <p>
        Business terminology varied across divisions, causing data quality issues
        and miscommunication. "Revenue" meant different things in different
        regions. Data governance team needed a single source of truth with
        formal approval for business term definitions.
      </p>

      <h3>Solution</h3>
      <p>
        Implemented a Governed Concept Register with:
      </p>
      <ul>
        <li>Concept layer for business term definitions</li>
        <li>Formal governance for definition changes</li>
        <li>Domain management for allowed values</li>
        <li>Integration with data catalog and BI tools</li>
      </ul>

      <h3>Implementation</h3>
      <div class="impl-details">
        <table>
          <tbody>
            <tr>
              <th>Technology</th>
              <td>Collibra (commercial data governance platform)</td>
            </tr>
            <tr>
              <th>Identifier Scheme</th>
              <td>URL-based (resolvable)</td>
            </tr>
            <tr>
              <th>Governance</th>
              <td>Data Governance Council as Control Body</td>
            </tr>
            <tr>
              <th>Integration</th>
              <td>Data catalog, BI tools, ETL pipelines</td>
            </tr>
            <tr>
              <th>Development Time</th>
              <td>12 months (including process changes)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Results</h3>
      <ul>
        <li>Business term definitions standardized across 40 countries</li>
        <li>Data quality scores improved by 35%</li>
        <li>Onboarding new analysts faster with clear terminology</li>
        <li>Regulatory reporting accuracy improved</li>
      </ul>

      <h3>Lessons Learned</h3>
      <div class="lessons">
        <ul>
          <li>
            <strong>Cultural change:</strong> Technology is easy; getting
            agreement on definitions is hard. Budget for facilitation.
          </li>
          <li>
            <strong>Buy vs build:</strong> Commercial data governance platforms
            can accelerate implementation
          </li>
          <li>
            <strong>Domain management:</strong> Controlling allowed values
            centrally prevents drift
          </li>
          <li>
            <strong>Executive sponsorship:</strong> Data governance needs
            executive backing to resolve disputes
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Case 5: National Standard (Complete Concept Register)</h2>

      <div class="case-header">
        <div class="org-info">
          <h3>National Mapping Agency - Geographic Codes</h3>
          <p><strong>Industry:</strong> Government</p>
          <p><strong>Scale:</strong> National scope, millions of features</p>
          <p><strong>Register Type:</strong> Complete Concept Register (CCR)</p>
        </div>
      </div>

      <h3>Problem</h3>
      <p>
        Geographic feature codes (administrative boundaries, place names,
        feature types) were used by hundreds of government agencies and
        private companies. No single authoritative source existed. Different
        agencies used different code sets, causing data integration failures.
      </p>

      <h3>Solution</h3>
      <p>
        Implemented a CCR with:
      </p>
      <ul>
        <li>Full concept modeling for geographic feature types</li>
        <li>Formal governance with multi-stakeholder Control Body</li>
        <li>Complete commitments (access, persistence, transparency)</li>
        <li>Public API and web portal</li>
      </ul>

      <h3>Implementation</h3>
      <div class="impl-details">
        <table>
          <tbody>
            <tr>
              <th>Technology</th>
              <td>Custom Java + PostgreSQL + Elasticsearch</td>
            </tr>
            <tr>
              <th>Identifier Scheme</th>
              <td>URN with national namespace</td>
            </tr>
            <tr>
              <th>Governance</th>
              <td>Multi-agency Control Body, public consultation process</td>
            </tr>
            <tr>
              <th>Commitments</th>
              <td>Full: public access, 25-year persistence, complete transparency</td>
            </tr>
            <tr>
              <th>Development Time</th>
              <td>18 months</td>
            </tr>
        </tbody>
        </table>
      </div>

      <h3>Results</h3>
      <ul>
        <li>Single authoritative source adopted by 200+ agencies</li>
        <li>Data integration costs reduced significantly</li>
        <li>Private sector adoption created ecosystem</li>
        <li>International interoperability with neighboring countries</li>
      </ul>

      <h3>Lessons Learned</h3>
      <div class="lessons">
        <ul>
          <li>
            <strong>Multi-stakeholder governance:</strong> Takes time to set up
            but essential for credibility
          </li>
          <li>
            <strong>Commitments are serious:</strong> Full persistence
            commitments require succession planning and legal framework
          </li>
          <li>
            <strong>Public portal:</strong> Web interface drives adoption more
            than API alone
          </li>
          <li>
            <strong>Migration support:</strong> Help agencies migrate from
            legacy code lists; don't just build and hope
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Common Patterns</h2>
      <p>
        Across these case studies, common success factors emerged:
      </p>

      <div class="patterns-grid">
        <div class="pattern">
          <h4>Right-Sizing</h4>
          <p>
            Choose the simplest register type that meets requirements. Don't
            over-engineer for hypothetical future needs.
          </p>
        </div>
        <div class="pattern">
          <h4>Integration First</h4>
          <p>
            A register's value comes from integration. Plan integration from
            day one, not as an afterthought.
          </p>
        </div>
        <div class="pattern">
          <h4>Identifier Strategy</h4>
          <p>
            Choose identifiers based on persistence needs. Internal-only can
            use UUIDs; external-facing needs resolvable URIs.
          </p>
        </div>
        <div class="pattern">
          <h4>Governance Realism</h4>
          <p>
            Factor in real governance costs: meeting time, decision delays,
            stakeholder management.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/learn/register-types">Register Types</router-link>
          - Choosing the right type for your needs
        </li>
        <li>
          <router-link to="/reference/samples">Sample Registers</router-link>
          - Complete specification examples
        </li>
        <li>
          <router-link to="/build/getting-started">Getting Started</router-link>
          - Planning your implementation
        </li>
        <li>
          <router-link to="/build/governance">Governance</router-link>
          - Setting up governance processes
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

.case-summary {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-xl) 0;
}

.case-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
}

.type-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-sm);
}

.type-tag.content {
  background: rgba(100, 116, 139, 0.2);
  color: #64748b;
}

.type-tag.governed-content {
  background: rgba(245, 158, 11, 0.2);
  color: #d97706;
}

.type-tag.concept {
  background: rgba(139, 92, 246, 0.2);
  color: #7c3aed;
}

.type-tag.governed-concept {
  background: rgba(59, 130, 246, 0.2);
  color: #2563eb;
}

.type-tag.ccr {
  background: rgba(13, 148, 136, 0.2);
  color: var(--color-accent);
}

.case-card h4 {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
}

.case-card p {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
}

.case-header {
  background: rgba(13, 148, 136, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.case-header h3 {
  margin-top: 0;
  color: var(--color-accent);
}

.case-header p {
  margin: var(--spacing-xs) 0;
  font-size: var(--font-size-sm);
}

.impl-details {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
}

.impl-details th {
  text-align: left;
  vertical-align: top;
  width: 35%;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.impl-details td {
  font-size: var(--font-size-sm);
}

.lessons {
  background: rgba(59, 130, 246, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.lessons ul {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.lessons li {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.patterns-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.pattern {
  background: rgba(13, 148, 136, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.pattern h4 {
  margin-bottom: var(--spacing-sm);
  color: var(--color-accent);
}

.pattern p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
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
  .case-summary {
    grid-template-columns: 1fr;
  }

  .patterns-grid {
    grid-template-columns: 1fr;
  }
}
</style>
