<template>
  <article class="content-page">
    <header class="page-header">
      <h1>News</h1>
      <p class="page-lead">
        Updates and announcements from the FERIN community and Enosema Foundation.
      </p>
    </header>

    <section class="content-section">
      <div class="news-list">
        <article class="news-item featured">
          <div class="news-date">
            <span class="day">15</span>
            <span class="month">Feb</span>
            <span class="year">2026</span>
          </div>
          <div class="news-content">
            <span class="news-tag">Milestone</span>
            <h2>ISO 19135:2026 Published - Introducing the FERIN Framework</h2>
            <p>
              We are pleased to announce the publication of ISO 19135:2026, which
              introduces the FERIN (Framework for Extensible Registration of Information)
              framework. This represents a significant evolution from previous editions,
              generalizing the standard beyond geographic information to serve all domains.
            </p>
            <p>
              The FERIN framework provides a comprehensive approach to managing information
              in registers that serves both human and machine consumers, with persistent
              identification, controlled evolution, and complete change history.
            </p>

            <h3>Project Leadership</h3>
            <p>
              This standard was developed under the leadership of:
            </p>
            <ul class="leadership-list">
              <li>
                <strong>Ronald Tse</strong> (CalConnect / Ribose) - Project Leader
              </li>
              <li>
                <strong>Reese Plews</strong> (JISC Japan / Plews Consulting) - Project Leader
              </li>
            </ul>

            <h3>Project Team</h3>
            <p>
              With contributions from the ISO 19135 Project Team:
            </p>
            <div class="team-grid">
              <div class="team-member">Paul Janssen (Geonovum)</div>
              <div class="team-member">Torsten Svärd (Lantmäteriet)</div>
              <div class="team-member">Anton Strogonoff (Ribose)</div>
              <div class="team-member">Mats Åhlin (SIS)</div>
              <div class="team-member">Stefan Strobel (Strobel Geoinformatics)</div>
              <div class="team-member">Larry D. Hothem</div>
              <div class="team-member">Peter Parslow (Ordnance Survey)</div>
              <div class="team-member">Patrick Vorster (DALRRD)</div>
              <div class="team-member">Jeffrey Lau (Ribose)</div>
              <div class="team-member">Scott Simmons (OGC)</div>
              <div class="team-member">Yong Baek (IHO)</div>
              <div class="team-member">Ryu Ryan (ETRI)</div>
              <div class="team-member">Jan Hjelmager (SDFE)</div>
              <div class="team-member">Jean Brodeur</div>
              <div class="team-member">Heidi Vanparys (SDFI)</div>
              <div class="team-member">Jiantao Bi (RADI)</div>
              <div class="team-member">Roger Lott (IOGP)</div>
              <div class="team-member">Liz Kolster (NZTA)</div>
              <div class="team-member">Gobe Hobona (OGC)</div>
              <div class="team-member">Michael Craymer (NRCAN)</div>
              <div class="team-member">Marie Lambois (IGN)</div>
              <div class="team-member">Ivana Ivanova (Curtin University)</div>
              <div class="team-member">Knut Jetlund (Kartverket)</div>
            </div>

            <h3>Key Features of FERIN</h3>
            <ul>
              <li>
                <strong>Domain-agnostic:</strong> No longer limited to geographic information—applicable
                to any domain requiring managed reference data
              </li>
              <li>
                <strong>Concept and content planes:</strong> Formal separation of meaning from data,
                enabling concepts to evolve while preserving content integrity
              </li>
              <li>
                <strong>Capability-based conformance:</strong> Five register types based on capabilities,
                not hierarchy—choose what fits your needs
              </li>
              <li>
                <strong>Technology-neutral:</strong> No implementation-specific requirements—implement
                using any technology stack
              </li>
              <li>
                <strong>Explicit commitments:</strong> Clear requirements for access, persistence,
                and transparency
              </li>
            </ul>

            <h3>About This Site</h3>
            <p>
              This site (ferin.org) serves as an <strong>interpretation companion</strong> to
              ISO 19135:2026. It provides practical guidance, decision frameworks, and
              implementation patterns that complement the standard without reproducing
              its content.
            </p>
            <p>
              The site is owned and published by the <a href="https://enosema.org" target="_blank" rel="noopener">
              Enosema Foundation</a>.
            </p>

            <div class="news-actions">
              <a href="https://www.iso.org/standard/87934.html" target="_blank" rel="noopener" class="btn-primary">
                Purchase ISO 19135:2026
              </a>
              <router-link to="/learn/core-concepts" class="btn-secondary">
                Start Learning FERIN
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </section>
  </article>
</template>

<script setup>
</script>

<style scoped>
.content-page {
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: var(--spacing-2xl);
  text-align: center;
}

.page-lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
}

.content-section {
  margin-bottom: var(--spacing-2xl);
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.news-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: var(--spacing-xl);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
}

.news-item.featured {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.03) 0%, var(--color-surface) 100%);
}

.news-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: var(--spacing-sm);
}

.news-date .day {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
  line-height: 1;
}

.news-date .month {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-transform: uppercase;
}

.news-date .year {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.news-content h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
}

.news-tag {
  display: inline-block;
  background: var(--color-accent);
  color: var(--color-text-inverse);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-sm);
}

.news-content h3 {
  font-size: var(--font-size-lg);
  margin: var(--spacing-xl) 0 var(--spacing-md);
  color: var(--color-primary);
}

.news-content p {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}

.news-content ul {
  font-size: var(--font-size-base);
}

.leadership-list {
  list-style: none;
  padding: 0;
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
  background: var(--color-background);
  border-radius: var(--radius-md);
}

.news-actions {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  color: var(--color-text-inverse);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  background: transparent;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.btn-secondary:hover {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}

@media (max-width: 768px) {
  .news-item {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .news-date {
    flex-direction: row;
    gap: var(--spacing-sm);
    align-items: baseline;
  }

  .news-date .day {
    font-size: var(--font-size-2xl);
  }
}
</style>
