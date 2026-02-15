<template>
  <div class="home-view">
    <HeroSection>
      <h1>The FERIN Interpretation Companion</h1>
      <p>Everything ISO 19135:2026 doesn't tell you about the Framework for Extensible Registration of Information</p>
      <div class="hero-actions">
        <GradientButton to="/learn/core-concepts" size="lg">
          Start Learning
        </GradientButton>
        <GradientButton to="/build/getting-started" variant="outline" size="lg">
          Build a Register
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
        <h2 class="section-title">How can we help you?</h2>
        <p class="section-subtitle">
          Whether you're evaluating FERIN, building a register, or looking for specific answers,
          we have content tailored to your needs.
        </p>

        <div class="audience-cards">
          <FeatureCard
            title="I'm evaluating FERIN"
            description="Understand what FERIN is, why it exists, and whether it's right for your organization."
            to="/about/what-is-ferin"
            link-text="Explore FERIN"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </template>
          </FeatureCard>

          <FeatureCard
            title="I'm building a register"
            description="Practical guides for implementing FERIN-compliant registers, from design to deployment."
            to="/build/getting-started"
            link-text="Start Building"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3v18"></path>
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M3 15h18"></path>
              </svg>
            </template>
          </FeatureCard>

          <FeatureCard
            title="I have a specific question"
            description="Find answers to common questions or browse our comprehensive reference documentation."
            to="/reference/faq"
            link-text="Find Answers"
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
        <h2 class="section-title">Featured Interpretation Topics</h2>
        <p class="section-subtitle">
          The most common questions implementers have when working with FERIN.
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

          <router-link to="/learn/governance#roles" class="featured-item">
            <span class="featured-label">Best Practices</span>
            <h3>Role Separation in Governance</h3>
            <p>Understanding which roles can be combined and which require separation.</p>
          </router-link>

          <router-link to="/build/migration" class="featured-item">
            <span class="featured-label">Migration Guide</span>
            <h3>Migrating from Legacy Systems</h3>
            <p>Strategies for importing existing content into a FERIN-compliant register.</p>
          </router-link>

          <router-link to="/learn/core-concepts#granularity" class="featured-item">
            <span class="featured-label">Conceptual Guide</span>
            <h3>Concept Granularity</h3>
            <p>When to create a new concept vs. a new version of an existing concept.</p>
          </router-link>

          <router-link to="/reference/commitments" class="featured-item">
            <span class="featured-label">Reference</span>
            <h3>Commitment Levels Explained</h3>
            <p>Understanding access, persistence, and transparency commitments.</p>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section trust-section">
      <div class="container">
        <div class="trust-content">
          <div class="trust-badges">
            <div class="trust-badge">
              <span class="badge-label">Companion to</span>
              <span class="badge-value">ISO 19135:2026</span>
            </div>
            <div class="trust-badge">
              <span class="badge-label">Developed by</span>
              <span class="badge-value">Enosema Foundation</span>
            </div>
            <div class="trust-badge">
              <span class="badge-label">Latest News</span>
              <router-link to="/news" class="badge-value badge-link">Announcements</router-link>
            </div>
          </div>
          <p class="trust-notice">
            The abbreviation FERIN is invented by Ronald Tse and Reese Plews.
            This site is an interpretation companion to ISO 19135:2026. No content is copied
            from the standard and does not infringe on ISO copyright.
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

/* Trust Section */
.trust-section {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

.trust-content {
  text-align: center;
}

.trust-badges {
  display: flex;
  justify-content: center;
  gap: var(--spacing-2xl);
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
