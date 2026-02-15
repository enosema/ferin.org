<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Composite Registers</h1>
      <p class="page-lead">
        A register that is internally composed of two or more simple registers
        but acts as a single register. Each internal register may have its own
        namespace and governance processes.
      </p>
    </header>

    <section class="content-section">
      <h2>What is a Composite Register?</h2>
      <p>
        Composite registers allow organizations to create unified views across
        multiple registers while maintaining separate governance, namespaces,
        or hosting environments for each component.
      </p>

      <div class="diagram-container">
        <img
          src="@/assets/images/diagrams/register-composite.svg"
          alt="Composite register structure showing sub-registers within a unified register"
          class="diagram"
        />
        <p class="diagram-caption">
          A composite register presents a unified interface while internally
          delegating to sub-registers.
        </p>
      </div>
    </section>

    <section class="content-section">
      <h2>When to Use Composite Registers</h2>
      <p>
        Composite registers are useful when you need to:
      </p>

      <div class="use-cases">
        <div class="use-case">
          <div class="use-case-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>Segregate Managerial Duty</h3>
          <p>
            Different teams or organizations manage different sub-registers while
            users access content through a single interface.
          </p>
        </div>

        <div class="use-case">
          <div class="use-case-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
              <path d="M16 16h5v5"></path>
            </svg>
          </div>
          <h3>Facilitate Availability</h3>
          <p>
            Sub-registers can be hosted in different locations or on different
            schedules while maintaining a unified access point.
          </p>
        </div>

        <div class="use-case">
          <div class="use-case-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M9 21V9"></path>
            </svg>
          </div>
          <h3>Limit Data Sovereignty</h3>
          <p>
            Each sub-register can maintain its own data governance policies
            while participating in the composite.
          </p>
        </div>

        <div class="use-case">
          <div class="use-case-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" x2="22" y1="12" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3>Scope Regulatory Concerns</h3>
          <p>
            Different jurisdictions or regulatory frameworks can apply to
            different sub-registers within the composite.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Topologies</h2>
      <p>
        ISO 19135:2026 Annex E describes three common topologies for composite
        registers. Each has different characteristics for governance, performance,
        and failure modes.
      </p>

      <div class="topology">
        <h3>Hierarchical Structure</h3>
        <div class="topology-content">
          <div class="topology-diagram">
            <img
              src="@/assets/images/diagrams/register-hierarchical.svg"
              alt="Hierarchical register topology with parent-child relationships"
              class="diagram"
            />
          </div>
          <div class="topology-description">
            <p>
              Sub-registers are organized under a parent register in a tree
              structure. The parent register coordinates access and may provide
              cross-cutting concerns like search across all sub-registers.
            </p>
            <h4>Characteristics</h4>
            <ul>
              <li>Clear authority flow from parent to children</li>
              <li>Sub-registers inherit some governance from parent</li>
              <li>Parent handles cross-register queries</li>
              <li>Sub-register failure may affect availability</li>
            </ul>
            <h4>Examples</h4>
            <p class="examples">
              INSPIRE Registry, DGIWG Feature Concept Dictionary
            </p>
          </div>
        </div>
      </div>

      <div class="topology">
        <h3>Federated Structure</h3>
        <div class="topology-content">
          <div class="topology-diagram">
            <img
              src="@/assets/images/diagrams/register-federated.svg"
              alt="Federated register topology with peer-to-peer relationships"
              class="diagram"
            />
          </div>
          <div class="topology-description">
            <p>
              Independent registers that mutually recognize each other. There is
              no central authority; each register operates autonomously while
              agreeing to shared conventions.
            </p>
            <h4>Characteristics</h4>
            <ul>
              <li>Peer-to-peer relationships between registers</li>
              <li>Each register maintains full autonomy</li>
              <li>Shared conventions for interoperability</li>
              <li>Failure of one register doesn't affect others</li>
            </ul>
            <h4>Examples</h4>
            <p class="examples">
              UN/FAO Land Cover Legend Registry
            </p>
          </div>
        </div>
      </div>

      <div class="topology">
        <h3>Hub and Spoke Structure</h3>
        <div class="topology-content">
          <div class="topology-diagram">
            <img
              src="@/assets/images/diagrams/register-hub-spoke.svg"
              alt="Hub and spoke register topology with central hub and specialized spokes"
              class="diagram"
            />
          </div>
          <div class="topology-description">
            <p>
              A central authoritative hub coordinates with specialized spoke
              registers. The hub provides core content and governance; spokes
              add domain-specific extensions.
            </p>
            <h4>Characteristics</h4>
            <ul>
              <li>Central hub is authoritative and required</li>
              <li>Spokes extend hub with specialized content</li>
              <li>Hub-spoke dependencies are explicit</li>
              <li>Hub failure affects entire composite</li>
            </ul>
            <h4>Examples</h4>
            <p class="examples">
              UN/ISO 19114 MLE register
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Governance Considerations</h2>
      <p>
        Composite registers introduce additional governance challenges beyond
        those of simple registers:
      </p>

      <div class="considerations">
        <div class="consideration">
          <h4>Conflict Resolution</h4>
          <p>
            How are conflicts between sub-registers resolved? Define clear
            precedence rules and escalation paths when sub-registers disagree
            on content or governance decisions.
          </p>
        </div>

        <div class="consideration">
          <h4>Unified View Maintenance</h4>
          <p>
            Who maintains the unified view? The composite itself may need a
            dedicated manager or coordinating body to handle cross-register
            concerns.
          </p>
        </div>

        <div class="consideration">
          <h4>Identifier Coordination</h4>
          <p>
            How are identifiers coordinated across sub-registers? Consider
            namespace prefixes, identifier delegation, and resolution services.
          </p>
        </div>

        <div class="consideration">
          <h4>Sub-Register Availability</h4>
          <p>
            What happens when a sub-register is unavailable? Define fallback
            behaviors, caching strategies, and degraded service modes.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/learn/register-types">Register Types</router-link>
          - Conformance classes and capabilities
        </li>
        <li>
          <router-link to="/learn/governance">Governance Model</router-link>
          - Roles and processes
        </li>
        <li>
          <router-link to="/build/identifier-design">Identifier Design</router-link>
          - Designing persistent identifiers
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

.content-section h4 {
  font-size: var(--font-size-base);
  margin: var(--spacing-md) 0 var(--spacing-sm);
}

.diagram-container {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
  text-align: center;
}

.diagram {
  max-width: 100%;
  height: auto;
  max-height: 400px;
}

.diagram-caption {
  margin-top: var(--spacing-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  font-style: italic;
}

.use-cases {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.use-case {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.use-case-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(30, 58, 95, 0.1) 100%);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
}

.use-case h3 {
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-sm);
}

.use-case p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.topology {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
}

.topology h3 {
  margin: 0 0 var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--color-border);
}

.topology-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--spacing-xl);
}

.topology-diagram {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.topology-diagram .diagram {
  max-height: 250px;
}

.topology-description {
  display: flex;
  flex-direction: column;
}

.topology-description p {
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
}

.topology-description ul {
  margin: 0 0 var(--spacing-md);
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.topology-description li {
  margin-bottom: var(--spacing-xs);
}

.topology-description .examples {
  background: rgba(13, 148, 136, 0.05);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-size: var(--font-size-sm);
  margin: 0;
}

.considerations {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.consideration {
  background: rgba(13, 148, 136, 0.05);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.consideration h4 {
  margin: 0 0 var(--spacing-sm);
  color: var(--color-accent);
}

.consideration p {
  font-size: var(--font-size-sm);
  margin: 0;
  color: var(--color-text-light);
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

@media (max-width: 900px) {
  .topology-content {
    grid-template-columns: 1fr;
  }

  .topology-diagram {
    order: -1;
  }
}

@media (max-width: 768px) {
  .use-cases {
    grid-template-columns: 1fr;
  }

  .considerations {
    grid-template-columns: 1fr;
  }
}
</style>
