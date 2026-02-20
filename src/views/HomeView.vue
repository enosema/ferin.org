<template>
  <div class="home-view">
    <HeroSection>
      <p class="hero-eyebrow">Implementation guide for ISO 19135:2026</p>
      <h1 class="hero-title">Manage authoritative information with <span class="gradient-text">FERIN</span></h1>
      <p class="hero-description">
        Build authoritative registers with persistent identification, controlled evolution, and complete change history
        according to the International Standard for Information Registration
      </p>
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

    <section class="section acronym-section animate-on-scroll">
      <div class="container">
        <div class="acronym-explanation">
          <div class="acronym-visual">
            <div class="acronym-letters">
              <span class="letter" data-letter="F">F</span>
              <span class="letter" data-letter="E">E</span>
              <span class="letter" data-letter="R">R</span>
              <span class="letter" data-letter="IN">IN</span>
            </div>
          </div>
          <div class="acronym-content">
            <h2>What is FERIN?</h2>
            <div class="acronym-breakdown">
              <div class="breakdown-item">
                <span class="breakdown-letter">F</span>
                <span class="breakdown-word">ramework</span>
              </div>
              <span class="breakdown-connector">for</span>
              <div class="breakdown-item">
                <span class="breakdown-letter">E</span>
                <span class="breakdown-word">xtensible</span>
              </div>
              <div class="breakdown-item">
                <span class="breakdown-letter">R</span>
                <span class="breakdown-word">egistration</span>
              </div>
              <span class="breakdown-connector">of</span>
              <div class="breakdown-item">
                <span class="breakdown-letter">IN</span>
                <span class="breakdown-word">formation</span>
              </div>
            </div>
            <p class="acronym-description">
              A standardized framework for managing information in registers
              that serves both human and machine consumers. FERIN provides
              persistent identification, controlled evolution, and complete
              change history for any domain, and is standardized in ISO
              19135:2026, the International Standard for Information
              Registration.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section audience-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll">Choose Your Path</h2>
        <p class="section-subtitle animate-on-scroll">
          Whether you're new to FERIN, building a register, or migrating from the previous edition,
          we have guidance tailored to your journey.
        </p>

        <div class="audience-cards">
          <FeatureCard
            v-for="(card, index) in pathCards"
            :key="card.title"
            :title="card.title"
            :description="card.description"
            :to="card.to"
            :link-text="card.linkText"
            class="animate-on-scroll"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <template #icon>
              <component :is="card.icon" />
            </template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <section class="section featured-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll">Key Implementation Topics</h2>
        <p class="section-subtitle animate-on-scroll">
          Essential guidance for building FERIN-compliant registers.
        </p>

        <div class="featured-grid">
          <router-link
            v-for="(item, index) in featuredItems"
            :key="item.to"
            :to="item.to"
            class="featured-item animate-on-scroll"
            :style="{ animationDelay: `${index * 0.08}s` }"
          >
            <span class="featured-label">{{ item.label }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section news-section">
      <div class="container">
        <h2 class="section-title animate-on-scroll">Latest News</h2>
        <p class="section-subtitle animate-on-scroll">
          Stay updated with the latest from the FERIN community.
        </p>

        <div class="news-preview">
          <router-link
            v-for="item in latestNews"
            :key="item.id"
            :to="`/news/${item.id}`"
            class="news-card animate-on-scroll"
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

        <div class="news-cta animate-on-scroll">
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

    <section class="section trust-section animate-on-scroll">
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
import { onMounted, h } from 'vue'
import HeroSection from '@/components/content/HeroSection.vue'
import GradientButton from '@/components/ui/GradientButton.vue'
import FeatureCard from '@/components/content/FeatureCard.vue'
import { getLatestNews, formatNewsDate } from '@/data/news.js'

const latestNews = getLatestNews(2)

// Icon components
const LearnIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' }),
  h('path', { d: 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' })
])

const BuildIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('rect', { width: 18, height: 18, x: 3, y: 3, rx: 2 }),
  h('path', { d: 'M3 9h18' }),
  h('path', { d: 'M9 21V9' })
])

const UpgradeIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M12 19V5' }),
  h('path', { d: 'm5 12 7-7 7 7' })
])

const AdoptIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' }),
  h('path', { d: 'M3 3v5h5' }),
  h('path', { d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16' }),
  h('path', { d: 'M16 21h5v-5' })
])

const IntegrateIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M9 17H7A5 5 0 0 1 7 7h2' }),
  h('path', { d: 'M15 7h2a5 5 0 1 1 0 10h-2' }),
  h('line', { x1: 8, x2: 16, y1: 12, y2: 12 })
])

const SearchIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('circle', { cx: 11, cy: 11, r: 8 }),
  h('path', { d: 'm21 21-4.3-4.3' })
])

const pathCards = [
  { title: 'Learn About FERIN', description: 'Understand the framework principles, register types, and conceptual model.', to: '/learn/core-concepts', linkText: 'Start Learning', icon: LearnIcon },
  { title: 'Build a Register', description: 'Implement a new FERIN-compliant register from design to deployment.', to: '/build/getting-started', linkText: 'Start Building', icon: BuildIcon },
  { title: 'Upgrade from 2015', description: 'Migrate your ISO 19135-1:2015 register to the new FERIN framework.', to: '/upgrade', linkText: 'View Upgrade Guide', icon: UpgradeIcon },
  { title: 'Adopt for Existing Data', description: 'Formalize an existing registry or code list using FERIN patterns.', to: '/build/register-specification', linkText: 'Plan Adoption', icon: AdoptIcon },
  { title: 'Integrate Systems', description: 'Connect applications and services to a FERIN register via APIs.', to: '/build/api-design', linkText: 'Explore Integration', icon: IntegrateIcon },
  { title: 'Find Answers', description: 'Search documentation, glossary, samples, and reference materials.', to: '/reference/faq', linkText: 'Browse Reference', icon: SearchIcon }
]

const featuredItems = [
  { label: 'Decision Framework', title: 'Substantive vs Non-Substantive Changes', description: 'How to decide whether a change requires a new version or can be applied to the current one.', to: '/build/versioning#substantive-vs-non-substantive' },
  { label: 'Implementation Guide', title: 'Designing Persistent Identifiers', description: 'Choosing and implementing identifier schemes that remain stable over time.', to: '/build/identifier-design' },
  { label: 'Best Practices', title: 'Risk-Based Governance', description: 'Match your governance rigor to your register\'s risk level.', to: '/build/risk-management' },
  { label: 'Migration Guide', title: 'Upgrade from 2015 Edition', description: 'Migrate your existing ISO 19135-1:2015 register to the new FERIN framework.', to: '/upgrade' },
  { label: 'Conceptual Guide', title: 'Concept Granularity', description: 'When to create a new concept vs. a new version of an existing concept.', to: '/learn/core-concepts#granularity' },
  { label: 'Reference', title: 'Commitment Levels Explained', description: 'Understanding access, persistence, and transparency commitments.', to: '/learn/commitments' }
]

// Scroll animation observer
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes letterPop {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

.section {
  padding: var(--spacing-3xl) var(--spacing-lg);
}

.container {
  max-width: var(--content-max-width);
  margin: 0 auto;
}

/* Hero customizations */
.hero-eyebrow {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-md);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  animation: fadeInUp 0.8s ease-out;
}

.gradient-text {
  background: linear-gradient(135deg, #22d3ee 0%, #5eead4 50%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Acronym Section */
.acronym-section {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-3xl) var(--spacing-lg);
  overflow: hidden;
}

html[data-theme="dark"] .acronym-section {
  background: #0f172a;
  border-bottom-color: #1e293b;
}

.acronym-explanation {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xl);
}

.acronym-visual {
  flex-shrink: 0;
}

.acronym-letters {
  display: flex;
  gap: var(--spacing-sm);
}

.letter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  background: linear-gradient(135deg, var(--color-accent) 0%, #0891b2 100%);
  color: white;
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 12px rgba(34, 211, 238, 0.3);
  animation: letterPop 0.5s ease-out forwards;
  opacity: 0;
}

.letter:nth-child(1) { animation-delay: 0.1s; }
.letter:nth-child(2) { animation-delay: 0.2s; }
.letter:nth-child(3) { animation-delay: 0.3s; }
.letter:nth-child(4) { animation-delay: 0.4s; }
.letter:nth-child(5) { animation-delay: 0.5s; }

.letter:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 8px 20px rgba(34, 211, 238, 0.4);
  transition: all 0.3s ease;
}

html[data-theme="dark"] .letter {
  box-shadow: 0 4px 12px rgba(34, 211, 238, 0.2);
}

.acronym-content h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
}

.acronym-breakdown {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--spacing-xs);
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-lg);
  line-height: 1.8;
}

.breakdown-item {
  display: inline-flex;
  align-items: baseline;
}

.breakdown-letter {
  color: var(--color-accent);
  font-weight: var(--font-weight-bold);
  font-size: 1.1em;
}

.breakdown-word {
  color: var(--color-text);
}

.breakdown-connector {
  color: var(--color-text-light);
  font-style: italic;
}

.acronym-description {
  color: var(--color-text-light);
  margin: 0;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .acronym-explanation {
    flex-direction: column;
    text-align: center;
  }

  .acronym-breakdown {
    justify-content: center;
  }

  .letter {
    width: 52px;
    height: 52px;
    font-size: var(--font-size-2xl);
  }
}

@media (max-width: 640px) {
  .acronym-breakdown {
    font-size: var(--font-size-lg);
  }

  .letter {
    width: 44px;
    height: 44px;
    font-size: var(--font-size-xl);
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

html[data-theme="dark"] .featured-section {
  background: linear-gradient(180deg, #020617 0%, rgba(34, 211, 238, 0.03) 100%);
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

html[data-theme="dark"] .featured-item {
  background: #0f172a;
  border-color: #1e293b;
}

.featured-item:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

html[data-theme="dark"] .featured-item:hover {
  background: #1e293b;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--color-accent);
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

html[data-theme="dark"] .news-section {
  background: #0f172a;
  border-top-color: #1e293b;
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

html[data-theme="dark"] .news-card {
  background: #020617;
  border-color: #1e293b;
}

.news-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

html[data-theme="dark"] .news-card:hover {
  background: #0f172a;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--color-accent);
}

.news-card.featured {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.03) 0%, var(--color-background) 100%);
}

html[data-theme="dark"] .news-card.featured {
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.05) 0%, #020617 100%);
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

html[data-theme="dark"] .trust-section {
  background: #020617;
  border-top-color: #1e293b;
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
