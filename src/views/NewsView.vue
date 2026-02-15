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
        <article
          v-for="item in newsItems"
          :key="item.id"
          class="news-item"
          :class="{ featured: item.featured }"
        >
          <div class="news-date">
            <span class="day">{{ formatNewsDate(item.date).day }}</span>
            <span class="month">{{ formatNewsDate(item.date).month }}</span>
            <span class="year">{{ formatNewsDate(item.date).year }}</span>
          </div>
          <div class="news-content">
            <span class="news-tag">{{ item.tag }}</span>
            <h2>{{ item.title }}</h2>

            <!-- ISO 19135:2026 announcement content -->
            <template v-if="item.id === 'iso-19135-2026-published'">
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
                <div
                  v-for="member in item.team"
                  :key="member"
                  class="team-member"
                >
                  {{ member }}
                </div>
              </div>

              <h3>Acknowledgments</h3>
              <p>
                The Project Team wishes to thank the following for their tireless editing
                and validation of the document now being published:
              </p>
              <div class="acknowledgments-section">
                <div class="acknowledgment-group">
                  <h4>ISO Editor</h4>
                  <p class="acknowledgment-person">
                    <strong>{{ item.acknowledgments.isoEditor.name }}</strong>
                    <a :href="`mailto:${item.acknowledgments.isoEditor.email}`">
                      {{ item.acknowledgments.isoEditor.email }}
                    </a>
                  </p>
                </div>
                <div class="acknowledgment-group">
                  <h4>ISO/TC 211 Secretariat</h4>
                  <div
                    v-for="secretary in item.acknowledgments.tc211Secretariat"
                    :key="secretary.email"
                    class="acknowledgment-person"
                  >
                    <strong>{{ secretary.name }}</strong>
                    <a :href="`mailto:${secretary.email}`">{{ secretary.email }}</a>
                  </div>
                </div>
              </div>

              <h3>Publication Information</h3>
              <p>
                This standard was developed as a joint collaboration with CEN.
              </p>
              <div class="publication-info">
                <div class="publication-grid">
                  <div class="publication-item">
                    <span class="publication-label">Lead Organization</span>
                    <span class="publication-value">{{ item.publication.leadOrganization }}</span>
                  </div>
                  <div class="publication-item">
                    <span class="publication-label">CEN Reference</span>
                    <span class="publication-value">{{ item.publication.cenReference }}</span>
                  </div>
                  <div class="publication-item">
                    <span class="publication-label">CEN Work Item (WI)</span>
                    <span class="publication-value">{{ item.publication.cenWorkItem }}</span>
                  </div>
                  <div class="publication-item">
                    <span class="publication-label">Stage</span>
                    <span class="publication-value">{{ item.publication.stage }}</span>
                  </div>
                  <div class="publication-item">
                    <span class="publication-label">CEN Committee</span>
                    <span class="publication-value">{{ item.publication.cenCommittee }}</span>
                  </div>
                  <div class="publication-item">
                    <span class="publication-label">CEN Secretary</span>
                    <span class="publication-value">{{ item.publication.cenSecretary }}</span>
                  </div>
                  <div class="publication-item">
                    <span class="publication-label">CEN Programme Manager</span>
                    <span class="publication-value">{{ item.publication.cenProgrammeManager }}</span>
                  </div>
                </div>

                <h4>Responsibilities</h4>
                <div class="responsibilities-table">
                  <div
                    v-for="resp in item.publication.responsibilities"
                    :key="resp.role"
                    class="responsibility-row"
                  >
                    <span class="responsibility-role">{{ resp.role }}</span>
                    <span class="responsibility-name">
                      <template v-if="resp.names">
                        {{ resp.names.join(', ') }}
                      </template>
                      <template v-else>
                        {{ resp.name }}
                        <span v-if="resp.secretariat" class="secretariat">(Secretariat: {{ resp.secretariat }})</span>
                      </template>
                    </span>
                  </div>
                </div>
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
              <p class="enosema-attribution">
                The site is owned and published by the
                <a href="https://enosema.org" target="_blank" rel="noopener">
                  <img src="/enosema-icon.svg" alt="" class="enosema-logo-inline" />
                  Enosema Foundation
                </a>.
              </p>
            </template>

            <!-- Generic content fallback for other news items -->
            <template v-else>
              <div v-html="item.content"></div>
            </template>

            <div class="news-actions">
              <a
                v-if="item.id === 'iso-19135-2026-published'"
                href="https://www.iso.org/standard/87753.html"
                target="_blank"
                rel="noopener"
                class="btn-primary"
              >
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
import { newsItems, formatNewsDate } from '@/data/news.js'
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

.news-content h4 {
  font-size: var(--font-size-base);
  margin: var(--spacing-lg) 0 var(--spacing-sm);
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}

.news-content p {
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}

.enosema-attribution {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.enosema-attribution a {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-accent);
  text-decoration: none;
}

.enosema-attribution a:hover {
  text-decoration: underline;
}

.enosema-logo-inline {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin-top: -2px;
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

.acknowledgments-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-md) 0;
}

.acknowledgment-group {
  background: var(--color-background);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}

.acknowledgment-group h4 {
  margin: 0 0 var(--spacing-sm) 0;
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-accent);
}

.acknowledgment-person {
  font-size: var(--font-size-sm);
  margin: var(--spacing-xs) 0;
}

.acknowledgment-person strong {
  display: block;
  color: var(--color-text);
}

.acknowledgment-person a {
  color: var(--color-accent);
  text-decoration: none;
  font-size: var(--font-size-xs);
}

.acknowledgment-person a:hover {
  text-decoration: underline;
}

.publication-info {
  background: var(--color-background);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-md) 0;
}

.publication-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.publication-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.publication-label {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
}

.publication-value {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
}

.responsibilities-table {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.responsibility-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border);
  gap: var(--spacing-md);
}

.responsibility-row:last-child {
  border-bottom: none;
}

.responsibility-role {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  flex-shrink: 0;
}

.responsibility-name {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  text-align: right;
}

.secretariat {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-lighter);
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

  .responsibility-row {
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .responsibility-name {
    text-align: left;
  }
}
</style>
