<template>
  <article class="content-page migration-page">
    <nav class="breadcrumb">
      <router-link to="/implement/migration">Migration Guide</router-link>
      <span class="separator">/</span>
      <span class="current">Migration Paths</span>
    </nav>

    <header class="page-header">
      <h1>Migration Paths</h1>
      <p class="page-lead">
        Four detailed migration paths based on your current conformance class
        and desired capabilities.
      </p>
    </header>

    <section class="content-section">
      <h2>Choose Your Path</h2>
      <p>
        Select the migration path that matches your situation:
      </p>

      <div class="path-selector">
        <button
          v-for="path in paths"
          :key="path.id"
          :class="['path-button', { active: selectedPath === path.id }]"
          @click="selectedPath = path.id"
        >
          <span class="path-letter">{{ path.letter }}</span>
          <span class="path-name">{{ path.name }}</span>
          <span :class="['path-complexity', path.complexity]">{{ path.complexityLabel }}</span>
        </button>
      </div>
    </section>

    <!-- Path A -->
    <section class="content-section path-section" id="path-a" v-show="selectedPath === 'a'">
      <div class="path-header">
        <h2>Path A: Content Register</h2>
        <span class="complexity-badge low">Low Complexity</span>
      </div>
      <p class="path-summary">
        Migrate from 2015 Core conformance to 2026 Content Register.
        Minimal changes required.
      </p>

      <div class="path-details">
        <div class="detail-card">
          <h3>When to Use</h3>
          <ul>
            <li>Your register used 2015 Core conformance only</li>
            <li>Simple content management without formal governance</li>
            <li>Internal use without external stakeholders</li>
            <li>Quick migration is priority</li>
          </ul>
        </div>

        <div class="detail-card">
          <h3>What You Get</h3>
          <ul>
            <li>Basic register functionality</li>
            <li>Object identifiers</li>
            <li>Basic status dimensions</li>
            <li>Simple versioning</li>
            <li>Technology freedom</li>
          </ul>
        </div>

        <div class="detail-card">
          <h3>What You Don't Get</h3>
          <ul>
            <li>Formal governance processes</li>
            <li>Concept plane capabilities</li>
            <li>Commitments framework</li>
            <li>Proposal workflow</li>
          </ul>
        </div>
      </div>

      <div class="migration-steps">
        <h3>Migration Steps</h3>
        <ol>
          <li>
            <strong>Update terminology</strong>
            <p>Replace deprecated terms, adopt new terminology</p>
            <span class="effort">1-2 days</span>
          </li>
          <li>
            <strong>Migrate status model</strong>
            <p>Convert single status to status dimensions</p>
            <span class="effort">2-3 days</span>
          </li>
          <li>
            <strong>Update version model</strong>
            <p>Add major/minor version structure</p>
            <span class="effort">1 day</span>
          </li>
          <li>
            <strong>Remove XML dependencies</strong>
            <p>If using normative schema, decouple</p>
            <span class="effort">1-2 days</span>
          </li>
          <li>
            <strong>Test and validate</strong>
            <p>Verify migration correctness</p>
            <span class="effort">2-3 days</span>
          </li>
        </ol>
        <div class="total-effort">
          <strong>Total Effort:</strong> ~1-2 weeks
        </div>
      </div>
    </section>

    <!-- Path B -->
    <section class="content-section path-section" id="path-b" v-show="selectedPath === 'b'">
      <div class="path-header">
        <h2>Path B: Governed Content Register</h2>
        <span class="complexity-badge medium">Medium Complexity</span>
      </div>
      <p class="path-summary">
        Migrate from 2015 Extended conformance to 2026 Governed Content Register.
        Direct equivalent with new requirements.
      </p>

      <div class="path-details">
        <div class="detail-card">
          <h3>When to Use</h3>
          <ul>
            <li>Your register used 2015 Extended conformance</li>
            <li>Formal governance with control body</li>
            <li>Proposal management required</li>
            <li>External stakeholders involved</li>
          </ul>
        </div>

        <div class="detail-card">
          <h3>What You Get</h3>
          <ul>
            <li>All Content Register features</li>
            <li>Full governance processes</li>
            <li>Proposal workflow</li>
            <li>Commitments framework</li>
            <li>Register specification</li>
          </ul>
        </div>

        <div class="detail-card">
          <h3>New Requirements</h3>
          <ul>
            <li>Formal register specification document</li>
            <li>Commitments declaration</li>
            <li>Updated role names</li>
            <li>Process documentation</li>
          </ul>
        </div>
      </div>

      <div class="migration-steps">
        <h3>Migration Steps</h3>
        <ol>
          <li>
            <strong>Update terminology</strong>
            <p>Replace deprecated terms, adopt new terminology</p>
            <span class="effort">1-2 days</span>
          </li>
          <li>
            <strong>Migrate status model</strong>
            <p>Convert single status to status dimensions</p>
            <span class="effort">2-3 days</span>
          </li>
          <li>
            <strong>Update version model</strong>
            <p>Add major/minor version structure</p>
            <span class="effort">1 day</span>
          </li>
          <li>
            <strong>Update governance model</strong>
            <p>Rename roles, update processes</p>
            <span class="effort">2-3 days</span>
          </li>
          <li>
            <strong>Create register specification</strong>
            <p>Document all required elements</p>
            <span class="effort">3-5 days</span>
          </li>
          <li>
            <strong>Declare commitments</strong>
            <p>Determine and document commitment levels</p>
            <span class="effort">1-2 days</span>
          </li>
          <li>
            <strong>Update change tracking</strong>
            <p>Migrate to Change objects</p>
            <span class="effort">2-3 days</span>
          </li>
          <li>
            <strong>Test and validate</strong>
            <p>Verify migration correctness</p>
            <span class="effort">3-5 days</span>
          </li>
        </ol>
        <div class="total-effort">
          <strong>Total Effort:</strong> ~2-4 weeks
        </div>
      </div>
    </section>

    <!-- Path C -->
    <section class="content-section path-section" id="path-c" v-show="selectedPath === 'c'">
      <div class="path-header">
        <h2>Path C: Governed Concept Register</h2>
        <span class="complexity-badge high">High Complexity</span>
      </div>
      <p class="path-summary">
        Migrate from 2015 Hierarchical conformance to 2026 Governed Concept Register.
        Adds concept plane capabilities.
      </p>

      <div class="path-details">
        <div class="detail-card">
          <h3>When to Use</h3>
          <ul>
            <li>Your register used 2015 Hierarchical conformance</li>
            <li>You need concept hierarchy capabilities</li>
            <li>Semantic relationships are important</li>
            <li>Future-proofing for advanced features</li>
          </ul>
        </div>

        <div class="detail-card">
          <h3>What You Get</h3>
          <ul>
            <li>All Governed Content features</li>
            <li>Explicit concept plane</li>
            <li>Concept versions</li>
            <li>Concept relations</li>
            <li>Two-plane architecture</li>
          </ul>
        </div>

        <div class="detail-card">
          <h3>Key Challenges</h3>
          <ul>
            <li>Extracting concepts from existing content</li>
            <li>Implementing concept plane</li>
            <li>Linking content to concepts</li>
            <li>More complex data model</li>
          </ul>
        </div>
      </div>

      <div class="migration-steps">
        <h3>Migration Steps</h3>
        <ol>
          <li>
            <strong>Update terminology</strong>
            <p>Replace deprecated terms, adopt new terminology</p>
            <span class="effort">1-2 days</span>
          </li>
          <li>
            <strong>Migrate status model</strong>
            <p>Convert single status to status dimensions</p>
            <span class="effort">2-3 days</span>
          </li>
          <li>
            <strong>Extract concepts</strong>
            <p>Identify and extract concepts from existing content</p>
            <span class="effort">1-2 weeks</span>
          </li>
          <li>
            <strong>Implement concept plane</strong>
            <p>Create concept management infrastructure</p>
            <span class="effort">1-2 weeks</span>
          </li>
          <li>
            <strong>Link content to concepts</strong>
            <p>Establish concept-content relationships</p>
            <span class="effort">3-5 days</span>
          </li>
          <li>
            <strong>Update governance model</strong>
            <p>Add concept governance processes</p>
            <span class="effort">3-5 days</span>
          </li>
          <li>
            <strong>Create register specification</strong>
            <p>Include concept organization system</p>
            <span class="effort">3-5 days</span>
          </li>
          <li>
            <strong>Test and validate</strong>
            <p>Verify both planes work correctly</p>
            <span class="effort">1 week</span>
          </li>
        </ol>
        <div class="total-effort">
          <strong>Total Effort:</strong> ~4-8 weeks
        </div>
      </div>
    </section>

    <!-- Path D -->
    <section class="content-section path-section" id="path-d" v-show="selectedPath === 'd'">
      <div class="path-header">
        <h2>Path D: Comprehensive Concept Register (CCR)</h2>
        <span class="complexity-badge highest">Highest Complexity</span>
      </div>
      <p class="path-summary">
        Full FERIN implementation with all capabilities including inheritance,
        composition, and concept domains.
      </p>

      <div class="path-details">
        <div class="detail-card">
          <h3>When to Use</h3>
          <ul>
            <li>Maximum capability needed</li>
            <li>Complex concept hierarchies</li>
            <li>Inheritance between concepts</li>
            <li>Partitive relationships important</li>
            <li>Concept domain management</li>
          </ul>
        </div>

        <div class="detail-card">
          <h3>What You Get</h3>
          <ul>
            <li>All Governed Concept features</li>
            <li>Concept inheritance</li>
            <li>Partitive concepts</li>
            <li>Concept domains</li>
            <li>Concept composition</li>
            <li>Definition migration</li>
          </ul>
        </div>

        <div class="detail-card">
          <h3>Key Challenges</h3>
          <ul>
            <li>Complex data model implementation</li>
            <li>Inheritance rule processing</li>
            <li>Composition management</li>
            <li>Most testing required</li>
          </ul>
        </div>
      </div>

      <div class="migration-steps">
        <h3>Migration Steps</h3>
        <ol>
          <li>
            <strong>Complete Path C first</strong>
            <p>Establish Governed Concept Register</p>
            <span class="effort">4-8 weeks</span>
          </li>
          <li>
            <strong>Implement inheritance</strong>
            <p>Add property inheritance between concepts</p>
            <span class="effort">1-2 weeks</span>
          </li>
          <li>
            <strong>Implement composition</strong>
            <p>Add partitive relationship support</p>
            <span class="effort">1 week</span>
          </li>
          <li>
            <strong>Implement concept domains</strong>
            <p>Add domain management capabilities</p>
            <span class="effort">1 week</span>
          </li>
          <li>
            <strong>Implement definition migration</strong>
            <p>Support concept definition changes</p>
            <span class="effort">1 week</span>
          </li>
          <li>
            <strong>Comprehensive testing</strong>
            <p>Test all advanced features</p>
            <span class="effort">2 weeks</span>
          </li>
        </ol>
        <div class="total-effort">
          <strong>Total Effort:</strong> ~10-16 weeks
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Path Comparison</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Path A</th>
            <th>Path B</th>
            <th>Path C</th>
            <th>Path D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content management</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Governance processes</td>
            <td>—</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Concept plane</td>
            <td>—</td>
            <td>—</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Concept relations</td>
            <td>—</td>
            <td>—</td>
            <td>Basic</td>
            <td>Full</td>
          </tr>
          <tr>
            <td>Concept inheritance</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>Commitments</td>
            <td>—</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr class="effort-row">
            <td><strong>Typical effort</strong></td>
            <td>1-2 weeks</td>
            <td>2-4 weeks</td>
            <td>4-8 weeks</td>
            <td>10-16 weeks</td>
          </tr>
        </tbody>
      </table>
    </section>

    <nav class="page-nav">
      <router-link to="/implement/migration/governance" class="nav-prev">
        <span class="nav-label">Previous</span>
        <span class="nav-title">Governance Migration</span>
      </router-link>
      <router-link to="/implement/migration/checklist" class="nav-next">
        <span class="nav-label">Next</span>
        <span class="nav-title">Implementation Checklist</span>
      </router-link>
    </nav>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const selectedPath = ref('b')

const paths = [
  { id: 'a', letter: 'A', name: 'Content Register', complexity: 'low', complexityLabel: 'Low' },
  { id: 'b', letter: 'B', name: 'Governed Content', complexity: 'medium', complexityLabel: 'Medium' },
  { id: 'c', letter: 'C', name: 'Governed Concept', complexity: 'high', complexityLabel: 'High' },
  { id: 'd', letter: 'D', name: 'CCR', complexity: 'highest', complexityLabel: 'Highest' }
]
</script>

<style scoped>
@import './migration-shared.css';

.path-selector {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.path-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg);
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.path-button:hover {
  border-color: var(--color-accent);
}

.path-button.active {
  border-color: var(--color-accent);
  background: rgba(13, 148, 136, 0.1);
}

.path-letter {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  color: white;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-full);
}

.path-name {
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-align: center;
}

.path-complexity {
  font-size: var(--font-size-xs);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}

.path-complexity.low {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
}

.path-complexity.medium {
  background: rgba(234, 179, 8, 0.1);
  color: #ca8a04;
}

.path-complexity.high {
  background: rgba(239, 68, 68, 0.1);
  color: #dc2626;
}

.path-complexity.highest {
  background: rgba(147, 51, 234, 0.1);
  color: #9333ea;
}

.path-section {
  padding: var(--spacing-xl);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
}

.path-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.path-header h2 {
  margin: 0;
  border: none;
  padding: 0;
}

.complexity-badge {
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
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

.complexity-badge.highest {
  background: rgba(147, 51, 234, 0.15);
  color: #9333ea;
}

.path-summary {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
}

.path-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.detail-card {
  padding: var(--spacing-lg);
  background: var(--color-background);
  border-radius: var(--radius-lg);
}

.detail-card h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-md);
  color: var(--color-accent);
}

.detail-card ul {
  margin: 0;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.detail-card li {
  margin-bottom: var(--spacing-xs);
}

.migration-steps h3 {
  margin-bottom: var(--spacing-md);
}

.migration-steps ol {
  margin: 0;
  padding-left: var(--spacing-lg);
}

.migration-steps li {
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-sm);
}

.migration-steps li strong {
  display: block;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.migration-steps li p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0 0 var(--spacing-xs);
}

.migration-steps .effort {
  display: inline-block;
  font-size: var(--font-size-xs);
  background: rgba(13, 148, 136, 0.1);
  color: var(--color-accent);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
}

.total-effort {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  background: rgba(13, 148, 136, 0.1);
  border-radius: var(--radius-md);
  text-align: center;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-sm);
}

.comparison-table th,
.comparison-table td {
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: center;
  border-bottom: 1px solid var(--color-border);
}

.comparison-table th:first-child,
.comparison-table td:first-child {
  text-align: left;
}

.comparison-table th {
  background: var(--color-background);
  font-weight: var(--font-weight-semibold);
}

.comparison-table tr.effort-row {
  background: rgba(13, 148, 136, 0.05);
}

@media (max-width: 1024px) {
  .path-selector {
    grid-template-columns: repeat(2, 1fr);
  }

  .path-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .path-selector {
    grid-template-columns: 1fr;
  }
}
</style>
