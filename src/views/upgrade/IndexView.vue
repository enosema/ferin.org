<template>
  <article class="content-page migration-guide">
    <header class="page-header">
      <div class="edition-badge">
        <span class="from-edition">ISO 19135-1:2015</span>
        <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        <span class="to-edition">ISO 19135:2026</span>
      </div>
      <h1>Upgrade Guide</h1>
      <p class="page-lead">
        A comprehensive guide for migrating registers from ISO 19135-1:2015
        (and its Amendment 1:2021) to the FERIN framework in ISO 19135:2026.
      </p>
    </header>

    <nav class="guide-nav">
      <h2>Guide Contents</h2>
      <div class="nav-grid">
        <router-link to="/upgrade/paradigm-shifts" class="nav-card">
          <span class="nav-number">1</span>
          <div class="nav-content">
            <h3>Paradigm Shifts</h3>
            <p>Understanding the four fundamental changes: two-plane architecture, capability-based conformance, commitments, and technology neutrality.</p>
          </div>
          <span class="nav-complexity essential">Essential</span>
        </router-link>

        <router-link to="/upgrade/terminology" class="nav-card">
          <span class="nav-number">2</span>
          <div class="nav-content">
            <h3>Terminology Mapping</h3>
            <p>Complete mapping of terms from 2015 to 2026, including renamed, new, and deprecated terminology.</p>
          </div>
          <span class="nav-complexity essential">Essential</span>
        </router-link>

        <router-link to="/upgrade/conformance" class="nav-card">
          <span class="nav-number">3</span>
          <div class="nav-content">
            <h3>Conformance Migration</h3>
            <p>How the three conformance classes map to the five register types, with decision guidance.</p>
          </div>
          <span class="nav-complexity essential">Essential</span>
        </router-link>

        <router-link to="/upgrade/status-model" class="nav-card">
          <span class="nav-number">4</span>
          <div class="nav-content">
            <h3>Status Model Migration</h3>
            <p>Transforming the single-status model to normalized status dimensions—the most complex data migration.</p>
          </div>
          <span class="nav-complexity complex">Complex</span>
        </router-link>

        <router-link to="/upgrade/data-model" class="nav-card">
          <span class="nav-number">5</span>
          <div class="nav-content">
            <h3>Data Model Migration</h3>
            <p>Migrating identifiers, versions, relations, and change tracking to the new framework.</p>
          </div>
          <span class="nav-complexity moderate">Moderate</span>
        </router-link>

        <router-link to="/upgrade/governance" class="nav-card">
          <span class="nav-number">6</span>
          <div class="nav-content">
            <h3>Governance Migration</h3>
            <p>Updates to roles, processes, and the new register specification requirements.</p>
          </div>
          <span class="nav-complexity moderate">Moderate</span>
        </router-link>

        <router-link to="/upgrade/paths" class="nav-card">
          <span class="nav-number">7</span>
          <div class="nav-content">
            <h3>Migration Paths</h3>
            <p>Four detailed migration paths based on your register type and desired capabilities.</p>
          </div>
          <span class="nav-complexity essential">Essential</span>
        </router-link>

        <router-link to="/upgrade/checklist" class="nav-card">
          <span class="nav-number">8</span>
          <div class="nav-content">
            <h3>Implementation Checklist</h3>
            <p>Step-by-step checklist with complexity estimates and dependencies.</p>
          </div>
          <span class="nav-complexity essential">Essential</span>
        </router-link>

        <router-link to="/upgrade/faq" class="nav-card">
          <span class="nav-number">9</span>
          <div class="nav-content">
            <h3>FAQ &amp; Common Pitfalls</h3>
            <p>Answers to common questions and warnings about frequent migration mistakes.</p>
          </div>
          <span class="nav-complexity reference">Reference</span>
        </router-link>
      </div>
    </nav>

    <section class="content-section">
      <h2>Quick Assessment</h2>
      <p>
        Before diving into the guide, assess your current situation:
      </p>

      <div class="assessment-grid">
        <div class="assessment-card">
          <h3>Your 2015 Conformance Class</h3>
          <div class="assessment-options">
            <label class="assessment-option">
              <input type="radio" name="conformance" value="core" v-model="assessment.conformance" />
              <span class="option-content">
                <strong>Core</strong>
                <span>Basic register without extended features</span>
              </span>
            </label>
            <label class="assessment-option">
              <input type="radio" name="conformance" value="extended" v-model="assessment.conformance" />
              <span class="option-content">
                <strong>Extended</strong>
                <span>Full governance, proposal management, localization</span>
              </span>
            </label>
            <label class="assessment-option">
              <input type="radio" name="conformance" value="hierarchical" v-model="assessment.conformance" />
              <span class="option-content">
                <strong>Hierarchical</strong>
                <span>Principal register or subregister structure</span>
              </span>
            </label>
          </div>
        </div>

        <div class="assessment-card">
          <h3>Migration Complexity</h3>
          <div v-if="assessment.conformance" class="complexity-result">
            <div :class="['complexity-badge', complexityLevel]">
              {{ complexityLabel }}
            </div>
            <p>{{ complexityDescription }}</p>
            <p class="recommended-path">
              <strong>Recommended path:</strong>
              <router-link :to="`/upgrade/paths#${recommendedPath}`">
                {{ recommendedPathLabel }}
              </router-link>
            </p>
          </div>
          <div v-else class="complexity-placeholder">
            <p>Select your conformance class to see complexity assessment</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>What's New at a Glance</h2>
      <div class="changes-grid">
        <div class="change-card new">
          <h4>New Concepts</h4>
          <ul>
            <li>Two-plane architecture (concept + content)</li>
            <li>Functional identifiers</li>
            <li>Commitments framework</li>
            <li>Concept relations (inheritance, partitive)</li>
            <li>Normalized status dimensions</li>
          </ul>
        </div>
        <div class="change-card changed">
          <h4>Changed Concepts</h4>
          <ul>
            <li>Conformance: hierarchy-based → capability-based</li>
            <li>Status: single value → multiple dimensions</li>
            <li>Versioning: simple → multi-layer</li>
            <li>Relations: predecessor/successor → rich model</li>
          </ul>
        </div>
        <div class="change-card removed">
          <h4>Removed Concepts</h4>
          <ul>
            <li>XML schema (technology-neutral now)</li>
            <li>"submitted" status (proposals are separate)</li>
            <li>"deprecated" terminology (use "invalid")</li>
            <li>Item removal (persistence required)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Migration Timeline Expectations</h2>
      <div class="timeline-grid">
        <div class="timeline-item">
          <div class="timeline-phase">Phase 1</div>
          <h4>Understanding</h4>
          <p>Read paradigm shifts, terminology, conformance migration</p>
          <span class="timeline-effort">1-2 days</span>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 2</div>
          <h4>Planning</h4>
          <p>Select migration path, plan data transformation</p>
          <span class="timeline-effort">2-5 days</span>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 3</div>
          <h4>Implementation</h4>
          <p>Update schemas, migrate data, update processes</p>
          <span class="timeline-effort">1-4 weeks</span>
        </div>
        <div class="timeline-item">
          <div class="timeline-phase">Phase 4</div>
          <h4>Validation</h4>
          <p>Test against conformance requirements, validate migration</p>
          <span class="timeline-effort">1-2 weeks</span>
        </div>
      </div>
      <p class="timeline-note">
        <strong>Note:</strong> Timeline varies significantly based on register complexity,
        existing implementation quality, and chosen migration path.
      </p>
    </section>

    <section class="content-section">
      <h2>Related Resources</h2>
      <ul class="related-links">
        <li>
          <a href="https://www.iso.org/standard/54721.html" target="_blank" rel="noopener noreferrer">
            ISO 19135-1:2015 (Previous Edition)
          </a>
          <span class="link-type">ISO Store</span>
        </li>
        <li>
          <a href="https://www.iso.org/standard/87753.html" target="_blank" rel="noopener noreferrer">
            ISO 19135:2026 (Current Edition)
          </a>
          <span class="link-type">ISO Store</span>
        </li>
        <li>
          <router-link to="/about/history">
            FERIN History
          </router-link>
          <span class="link-type">Background</span>
        </li>
        <li>
          <router-link to="/learn/core-concepts">
            Core Concepts
          </router-link>
          <span class="link-type">Learn FERIN</span>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'

const assessment = ref({
  conformance: ''
})

const complexityLevel = computed(() => {
  const levels = {
    core: 'low',
    extended: 'medium',
    hierarchical: 'high'
  }
  return levels[assessment.value.conformance] || ''
})

const complexityLabel = computed(() => {
  const labels = {
    core: 'Low Complexity',
    extended: 'Medium Complexity',
    hierarchical: 'High Complexity'
  }
  return labels[assessment.value.conformance] || ''
})

const complexityDescription = computed(() => {
  const descriptions = {
    core: 'Core registers have minimal features to migrate. Focus on status model and terminology updates.',
    extended: 'Extended registers require careful planning. Status dimensions, commitments, and governance updates needed.',
    hierarchical: 'Hierarchical registers have the most complex migration. Consider Governed Concept Register or CCR paths.'
  }
  return descriptions[assessment.value.conformance] || ''
})

const recommendedPath = computed(() => {
  const paths = {
    core: 'path-a',
    extended: 'path-b',
    hierarchical: 'path-c'
  }
  return paths[assessment.value.conformance] || ''
})

const recommendedPathLabel = computed(() => {
  const labels = {
    core: 'Path A: Content Register',
    extended: 'Path B: Governed Content Register',
    hierarchical: 'Path C: Governed Concept Register'
  }
  return labels[assessment.value.conformance] || ''
})
</script>

<style scoped>
.migration-guide {
  max-width: 1000px;
  margin: 0 auto;
}

.migration-guide .content-section {
  margin-bottom: var(--spacing-2xl);
}

.migration-guide .content-section h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-accent);
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.edition-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(30, 58, 95, 0.1) 100%);
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-lg);
}

.from-edition {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
}

.arrow-icon {
  width: 20px;
  height: 20px;
  color: var(--color-accent);
}

.to-edition {
  color: var(--color-accent);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
}

.page-lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
  max-width: 800px;
  margin: 0 auto;
}

/* Guide Navigation */
.guide-nav {
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid var(--color-border);
}

.guide-nav h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-accent);
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.nav-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.nav-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.nav-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--color-accent);
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.nav-content {
  flex: 1;
}

.nav-content h3 {
  font-size: var(--font-size-base);
  color: var(--color-primary);
  margin: 0 0 var(--spacing-xs);
}

.nav-content p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
  line-height: var(--line-height-normal);
}

.nav-complexity {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  white-space: nowrap;
}

.nav-complexity.essential {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
}

.nav-complexity.moderate {
  background: rgba(234, 179, 8, 0.1);
  color: #ca8a04;
}

.nav-complexity.complex {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.nav-complexity.reference {
  background: rgba(99, 102, 241, 0.1);
  color: #4f46e5;
}

/* Assessment */
.assessment-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.assessment-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.assessment-card h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
}

.assessment-options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.assessment-option {
  display: flex;
  cursor: pointer;
}

.assessment-option input {
  display: none;
}

.option-content {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  width: 100%;
  transition: all var(--transition-fast);
}

.assessment-option input:checked + .option-content {
  border-color: var(--color-accent);
  background: rgba(13, 148, 136, 0.05);
}

.option-content strong {
  color: var(--color-primary);
}

.option-content span {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.complexity-result {
  text-align: center;
}

.complexity-badge {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-md);
}

.complexity-badge.low {
  background: rgba(34, 197, 94, 0.15);
  color: #16a34a;
}

.complexity-badge.medium {
  background: rgba(234, 179, 8, 0.15);
  color: #ca8a04;
}

.complexity-badge.high {
  background: rgba(239, 68, 68, 0.15);
  color: #dc2626;
}

.complexity-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  color: var(--color-text-light);
}

.recommended-path {
  margin-top: var(--spacing-md);
  font-size: var(--font-size-sm);
}

/* Changes Grid */
.changes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.change-card {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.change-card.new {
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.change-card.changed {
  background: rgba(234, 179, 8, 0.05);
  border: 1px solid rgba(234, 179, 8, 0.2);
}

.change-card.removed {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.change-card h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
}

.change-card.new h4 {
  color: #16a34a;
}

.change-card.changed h4 {
  color: #ca8a04;
}

.change-card.removed h4 {
  color: #dc2626;
}

.change-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-sm);
}

.change-card li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-md);
  position: relative;
}

.change-card li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-text-light);
}

/* Timeline */
.timeline-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.timeline-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
}

.timeline-phase {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-xs);
}

.timeline-item h4 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-sm);
}

.timeline-item p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-md);
}

.timeline-effort {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
  background: rgba(13, 148, 136, 0.1);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
}

.timeline-note {
  margin-top: var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

/* Related Links */
.related-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.related-links li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.related-links a {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
}

.related-links a:hover {
  text-decoration: underline;
}

.link-type {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  background: var(--color-background);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .timeline-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }

  .assessment-grid {
    grid-template-columns: 1fr;
  }

  .changes-grid {
    grid-template-columns: 1fr;
  }

  .timeline-grid {
    grid-template-columns: 1fr;
  }

  .related-links {
    grid-template-columns: 1fr;
  }
}
</style>
