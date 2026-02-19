<template>
  <div class="home-view">
    <HeroSection>
      <h1>FERIN</h1>
      <p class="hero-tagline">The International Standard for Information Registration</p>
      <p class="hero-description">Practical guidance for implementing ISO 19135:2026</p>
      <div class="hero-actions">
        <GradientButton to="/learn/core-concepts" size="lg">
          Start Learning
        </GradientButton>
        <GradientButton to="/build/getting-started" variant="outline" size="lg">
          Build a Register
        </GradientButton>
        <GradientButton to="/upgrade" variant="outline" size="lg">
          Upgrade from 2015
        </GradientButton>
      </div>
    </HeroSection>

    <section class="section acronym-section">
      <div class="container">
        <div class="acronym-explanation">
          <img src="@/assets/images/ferin-logo.svg" alt="FERIN Logo" class="acronym-logo" />
          <div class="acronym-content">
            <h2>What does FERIN mean?</h2>
            <p class="acronym-full">
              <strong>F</strong>ramework for <strong>E</strong>xtensible
              <strong>R</strong>egistration of <strong>I</strong>nformation
            </p>
            <p>
              FERIN is a standardized framework for managing information in registers
              that serves both human and machine consumers. It provides persistent
              identification, controlled evolution, and complete change history for
              any domain—not just geographic information.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section audience-section">
      <div class="container">
        <h2 class="section-title">Choose Your Path</h2>
        <p class="section-subtitle">
          Whether you're new to FERIN, building a register, or migrating from the previous edition,
          we have guidance tailored to your journey.
        </p>

        <div class="audience-cards">
          <FeatureCard
            title="Learn About FERIN"
            description="Understand the framework principles, register types, and conceptual model."
            to="/learn/core-concepts"
            link-text="Start Learning"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </template>
          </FeatureCard>

          <FeatureCard
            title="Build a Register"
            description="Implement a new FERIN-compliant register from design to deployment."
            to="/build/getting-started"
            link-text="Start Building"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
              </svg>
            </template>
          </FeatureCard>

          <FeatureCard
            title="Upgrade from 2015"
            description="Migrate your ISO 19135-1:2015 register to the new FERIN framework."
            to="/upgrade"
            link-text="View Upgrade Guide"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19V5"></path>
                <path d="m5 12 7-7 7 7"></path>
              </svg>
            </template>
          </FeatureCard>

          <FeatureCard
            title="Adopt for Existing Data"
            description="Formalize an existing registry or code list using FERIN patterns."
            to="/build/register-specification"
            link-text="Plan Adoption"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                <path d="M16 21h5v-5"></path>
              </svg>
            </template>
          </FeatureCard>

          <FeatureCard
            title="Integrate Systems"
            description="Connect applications and services to a FERIN register via APIs."
            to="/build/api-design"
            link-text="Explore Integration"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
                <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
                <line x1="8" x2="16" y1="12" y2="12"></line>
              </svg>
            </template>
          </FeatureCard>

          <FeatureCard
            title="Find Answers"
            description="Search documentation, glossary, samples, and reference materials."
            to="/reference/faq"
            link-text="Browse Reference"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <section class="section featured-section">
      <div class="container">
        <h2 class="section-title">Key Implementation Topics</h2>
        <p class="section-subtitle">
          Essential guidance for building FERIN-compliant registers.
        </p>

        <div class="featured-grid">
          <router-link to="/build/versioning#substantive-vs-non-substantive" class="featured-item">
            <span class="featured-label">Decision Framework</span>
            <h3>Substantive vs Non-Substantive Changes</h3>
            <p>How to decide whether a change requires a new version or can be applied to the current one.</p>
          </router-link>

          <router-link to="/build/identifier-design" class="featured-item">
            <span class="featured-label">Implementation Guide</span>
            <h3>Designing Persistent Identifiers</h3>
            <p>Choosing and implementing identifier schemes that remain stable over time.</p>
          </router-link>

          <router-link to="/build/risk-management" class="featured-item">
            <span class="featured-label">Best Practices</span>
            <h3>Risk-Based Governance</h3>
            <p>Match your governance rigor to your register's risk level, from personal registers to public registries.</p>
          </router-link>

          <router-link to="/upgrade" class="featured-item">
            <span class="featured-label">Migration Guide</span>
            <h3>Upgrade from 2015 Edition</h3>
            <p>Migrate your existing ISO 19135-1:2015 register to the new FERIN framework.</p>
          </router-link>

          <router-link to="/learn/core-concepts#granularity" class="featured-item">
            <span class="featured-label">Conceptual Guide</span>
            <h3>Concept Granularity</h3>
            <p>When to create a new concept vs. a new version of an existing concept.</p>
          </router-link>

          <router-link to="/learn/commitments" class="featured-item">
            <span class="featured-label">Reference</span>
            <h3>Commitment Levels Explained</h3>
            <p>Understanding access, persistence, and transparency commitments.</p>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section news-section">
      <div class="container">
        <h2 class="section-title">Latest News</h2>
        <p class="section-subtitle">
          Stay updated with the latest from the FERIN community.
        </p>

        <div class="news-preview">
          <router-link
            v-for="item in latestNews"
            :key="item.id"
            :to="`/news/${item.id}`"
            class="news-card"
            :class="{ featured: item.featured }"
          >
            <div class="news-date">
              <span class="day">{{ formatNewsDate(item.date).day }}</span>
              <span class="month">{{ formatNewsDate(item.date).month }}</span>
              <span class="year">{{ formatNewsDate(item.date).year }}</span>
            </div>
            <div class="news-content">
              <span class="news-tag">{{ item.tag }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.summary }}</p>
              <span class="read-more">Read full announcement →</span>
            </div>
          </router-link>
        </div>

        <div class="news-cta">
          <router-link to="/news" class="news-link">
            View all announcements
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section trust-section">
      <div class="container">
        <div class="trust-content">
          <div class="trust-badges">
            <div class="trust-badge">
              <span class="badge-label">Defined in</span>
              <span class="badge-value">ISO 19135:2026</span>
            </div>
            <div class="trust-badge">
              <span class="badge-label">Developed by</span>
              <span class="badge-value">ISO/TC 211</span>
            </div>
            <div class="trust-badge">
              <span class="badge-label">Guidance by</span>
              <span class="badge-value">Enosema Foundation</span>
            </div>
          </div>
          <p class="trust-notice">
            FERIN is codified in ISO 19135:2026. This site provides interpretation
            and practical guidance beyond the standard specification. FERIN is a
            non-registered trademark of the Enosema Foundation.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '@/components/content/HeroSection.vue'
import GradientButton from '@/components/ui/GradientButton.vue'
import FeatureCard from '@/components/content/FeatureCard.vue'
import { getLatestNews, formatNewsDate } from '@/data/news.js'

const latestNews = getLatestNews(2)
</script>

<style scoped>
.section {
  padding: var(--spacing-3xl) var(--spacing-lg);
}

.container {
  max-width: var(--content-max-width);
  margin: 0 auto;
}

/* Acronym Section */
.acronym-section {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-2xl) var(--spacing-lg);
}

.acronym-explanation {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xl);
}

.acronym-logo {
  width: 200px;
  height: auto;
  flex-shrink: 0;
}

.acronym-content h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
}

.acronym-full {
  font-size: var(--font-size-xl);
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.acronym-full strong {
  color: var(--color-accent);
}

.acronym-content p:last-child {
  color: var(--color-text-light);
  margin: 0;
}

@media (max-width: 768px) {
  .acronym-explanation {
    flex-direction: column;
    text-align: center;
  }

  .acronym-logo {
    width: 160px;
  }
}

.section-title {
  text-align: center;
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-md);
}

.section-subtitle {
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 700px;
  margin: 0 auto var(--spacing-2xl);
}

/* Audience Cards */
.audience-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

@media (max-width: 1024px) {
  .audience-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .audience-cards {
    grid-template-columns: 1fr;
  }
}

/* Featured Section */
.featured-section {
  background: linear-gradient(180deg, var(--color-background) 0%, rgba(13, 148, 136, 0.05) 100%);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.featured-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  text-decoration: none;
  transition: all var(--transition-normal);
}

.featured-item:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.featured-label {
  display: inline-block;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-accent);
  margin-bottom: var(--spacing-sm);
}

.featured-item h3 {
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.featured-item p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

@media (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
}

/* News Section */
.news-section {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

.news-preview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  max-width: 1100px;
  margin: 0 auto;
}

.news-card {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: var(--spacing-xl);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  text-decoration: none;
  transition: all var(--transition-normal);
}

.news-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.news-card.featured {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.03) 0%, var(--color-background) 100%);
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
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
}

.news-content p {
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-relaxed);
}

.read-more {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
}

.news-cta {
  text-align: center;
  margin-top: var(--spacing-xl);
}

.news-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background: transparent;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
}

.news-link:hover {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}

@media (max-width: 900px) {
  .news-preview {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .news-card {
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

/* Trust Section */
.trust-section {
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
}

.trust-content {
  text-align: center;
}

.trust-badges {
  display: flex;
  justify-content: center;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-lg);
}

.trust-badge {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.badge-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-value {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}

.badge-link {
  text-decoration: none;
  transition: color var(--transition-fast);
}

.badge-link:hover {
  color: var(--color-accent);
}

.trust-notice {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .trust-badges {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
}
</style>
