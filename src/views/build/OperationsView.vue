<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Register Operations</h1>
      <p class="page-lead">
        Running FERIN registers in production: monitoring, maintenance, scaling,
        and disaster recovery for reliable service delivery.
      </p>
    </header>

    <section class="content-section">
      <h2>Operations Overview</h2>
      <p>
        A register is a long-lived system that requires ongoing operational
        attention. This guide covers the key operational concerns for running
        FERIN-compliant registers.
      </p>

      <div class="ops-areas">
        <div class="area">
          <h4>Health Monitoring</h4>
          <p>Track system health and performance</p>
        </div>
        <div class="area">
          <h4>Backup & Recovery</h4>
          <p>Protect against data loss</p>
        </div>
        <div class="area">
          <h4>Scaling</h4>
          <p>Handle growth in users and content</p>
        </div>
        <div class="area">
          <h4>Disaster Recovery</h4>
          <p>Recover from major incidents</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Health Metrics</h2>
      <p>
        Monitor these metrics to ensure register health:
      </p>

      <h3>System Metrics</h3>
      <table class="metrics-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Description</th>
            <th>Alert Threshold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>API Availability</td>
            <td>Percentage of successful requests</td>
            <td>&lt; 99.9%</td>
          </tr>
          <tr>
            <td>Response Time (p50)</td>
            <td>Median response latency</td>
            <td>&gt; 200ms</td>
          </tr>
          <tr>
            <td>Response Time (p99)</td>
            <td>99th percentile latency</td>
            <td>&gt; 1000ms</td>
          </tr>
          <tr>
            <td>Error Rate</td>
            <td>5xx responses as percentage</td>
            <td>&gt; 1%</td>
          </tr>
          <tr>
            <td>Database Connections</td>
            <td>Active connection count</td>
            <td>&gt; 80% of pool</td>
          </tr>
          <tr>
            <td>Storage Usage</td>
            <td>Database/storage utilization</td>
            <td>&gt; 80%</td>
          </tr>
        </tbody>
      </table>

      <h3>Business Metrics</h3>
      <table class="metrics-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Description</th>
            <th>Monitoring</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item Count</td>
            <td>Total items in register</td>
            <td>Growth trends</td>
          </tr>
          <tr>
            <td>Proposal Queue</td>
            <td>Pending proposals awaiting review</td>
            <td>Queue depth alerts</td>
          </tr>
          <tr>
            <td>Proposal Age</td>
            <td>Time from submission to decision</td>
            <td>SLA tracking</td>
          </tr>
          <tr>
            <td>User Activity</td>
            <td>Active users per day/week</td>
            <td>Trend analysis</td>
          </tr>
          <tr>
            <td>API Usage</td>
            <td>Requests by endpoint/client</td>
            <td>Capacity planning</td>
          </tr>
        </tbody>
      </table>

      <h3>Dashboard Example</h3>
      <div class="dashboard-layout">
        <div class="dashboard-card">
          <span class="metric-value">99.97%</span>
          <span class="metric-label">Availability (30d)</span>
        </div>
        <div class="dashboard-card">
          <span class="metric-value">47ms</span>
          <span class="metric-label">Avg Response Time</span>
        </div>
        <div class="dashboard-card">
          <span class="metric-value">1,247</span>
          <span class="metric-label">Active Items</span>
        </div>
        <div class="dashboard-card">
          <span class="metric-value">3</span>
          <span class="metric-label">Pending Proposals</span>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Monitoring Setup</h2>

      <h3>Recommended Stack</h3>
      <div class="monitoring-stack">
        <div class="stack-layer">
          <h4>Collection</h4>
          <ul>
            <li>OpenTelemetry for traces/metrics</li>
            <li>Prometheus exporters</li>
            <li>Structured logging (JSON)</li>
          </ul>
        </div>
        <div class="stack-layer">
          <h4>Storage</h4>
          <ul>
            <li>Prometheus/VictoriaMetrics for metrics</li>
            <li>Elasticsearch/Loki for logs</li>
            <li>Jaeger/Tempo for traces</li>
          </ul>
        </div>
        <div class="stack-layer">
          <h4>Visualization</h4>
          <ul>
            <li>Grafana for dashboards</li>
            <li>Custom admin UI</li>
            <li>Status page for users</li>
          </ul>
        </div>
        <div class="stack-layer">
          <h4>Alerting</h4>
          <ul>
            <li>Alertmanager for routing</li>
            <li>PagerDuty/OpsGenie for on-call</li>
            <li>Slack/Email notifications</li>
          </ul>
        </div>
      </div>

      <h3>Key Alerts</h3>
      <div class="alert-rules">
        <div class="alert-rule critical">
          <span class="severity">CRITICAL</span>
          <span class="condition">API down or error rate &gt; 5%</span>
          <span class="response">Immediate page</span>
        </div>
        <div class="alert-rule warning">
          <span class="severity">WARNING</span>
          <span class="condition">Response time p99 &gt; 1s</span>
          <span class="response">Investigate within 1 hour</span>
        </div>
        <div class="alert-rule warning">
          <span class="severity">WARNING</span>
          <span class="condition">Storage &gt; 80%</span>
          <span class="response">Plan expansion</span>
        </div>
        <div class="alert-rule info">
          <span class="severity">INFO</span>
          <span class="condition">Proposal queue &gt; 10</span>
          <span class="response">Notify Control Body</span>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Backup and Recovery</h2>

      <h3>Backup Strategy</h3>
      <p>
        Implement a tiered backup approach:
      </p>
      <table class="backup-table">
        <thead>
          <tr>
            <th>Backup Type</th>
            <th>Frequency</th>
            <th>Retention</th>
            <th>Recovery Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full database</td>
            <td>Daily</td>
            <td>90 days</td>
            <td>Hours</td>
          </tr>
          <tr>
            <td>Incremental</td>
            <td>Hourly</td>
            <td>7 days</td>
            <td>Minutes</td>
          </tr>
          <tr>
            <td>Transaction logs</td>
            <td>Continuous</td>
            <td>24 hours</td>
            <td>Seconds</td>
          </tr>
          <tr>
            <td>Configuration</td>
            <td>On change</td>
            <td>Indefinite</td>
            <td>Minutes</td>
          </tr>
        </tbody>
      </table>

      <h3>Recovery Procedures</h3>
      <div class="recovery-procedures">
        <div class="procedure">
          <h4>Point-in-Time Recovery</h4>
          <ol>
            <li>Stop application services</li>
            <li>Restore last full backup</li>
            <li>Apply incremental backups</li>
            <li>Replay transaction logs to target time</li>
            <li>Verify data integrity</li>
            <li>Resume services</li>
          </ol>
        </div>
        <div class="procedure">
          <h4>Item-Level Recovery</h4>
          <ol>
            <li>Identify affected items from audit log</li>
            <li>Export current state for reference</li>
            <li>Restore item from backup</li>
            <li>Create corrective proposal if governed</li>
            <li>Document recovery in audit trail</li>
          </ol>
        </div>
      </div>

      <div class="warning-box">
        <strong>Backup Testing:</strong> Regularly test backup restoration. A
        backup that can't be restored is not a backup. Schedule quarterly
        recovery drills.
      </div>
    </section>

    <section class="content-section">
      <h2>Scaling Strategies</h2>

      <h3>Read Scaling</h3>
      <p>
        Most register workloads are read-heavy. Scale reads with:
      </p>
      <ul>
        <li>
          <strong>Read replicas:</strong> Offload read queries to replica databases
        </li>
        <li>
          <strong>Caching:</strong> Cache frequently accessed items (Redis, CDN)
        </li>
        <li>
          <strong>CDN for static content:</strong> Serve published items via CDN
        </li>
        <li>
          <strong>API caching:</strong> Cache API responses with appropriate TTLs
        </li>
      </ul>

      <h3>Write Scaling</h3>
      <p>
        Write scaling is more complex:
      </p>
      <ul>
        <li>
          <strong>Connection pooling:</strong> Efficient database connection reuse
        </li>
        <li>
          <strong>Async processing:</strong> Queue proposals for background processing
        </li>
        <li>
          <strong>Sharding:</strong> Partition data across databases (for large registers)
        </li>
      </ul>

      <h3>Capacity Planning</h3>
      <div class="capacity-metrics">
        <div class="metric">
          <h4>Current State</h4>
          <ul>
            <li>Items: 10,000</li>
            <li>Reads/day: 100,000</li>
            <li>Writes/day: 50</li>
            <li>Storage: 5 GB</li>
          </ul>
        </div>
        <div class="metric">
          <h4>Growth Rate</h4>
          <ul>
            <li>Items: +10%/year</li>
            <li>Reads: +20%/year</li>
            <li>Writes: +5%/year</li>
            <li>Storage: +15%/year</li>
          </ul>
        </div>
        <div class="metric">
          <h4>1-Year Projection</h4>
          <ul>
            <li>Items: 11,000</li>
            <li>Reads/day: 144,000</li>
            <li>Writes/day: 53</li>
            <li>Storage: 7.5 GB</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Disaster Recovery</h2>

      <h3>Recovery Objectives</h3>
      <table class="dr-objectives">
        <thead>
          <tr>
            <th>Scenario</th>
            <th>RTO</th>
            <th>RPO</th>
            <th>Strategy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single server failure</td>
            <td>15 min</td>
            <td>0</td>
            <td>Auto-failover to standby</td>
          </tr>
          <tr>
            <td>Database corruption</td>
            <td>2 hours</td>
            <td>1 hour</td>
            <td>Point-in-time recovery</td>
          </tr>
          <tr>
            <td>Data center outage</td>
            <td>4 hours</td>
            <td>1 hour</td>
            <td>Failover to DR site</td>
          </tr>
          <tr>
            <td>Ransomware attack</td>
            <td>24 hours</td>
            <td>24 hours</td>
            <td>Isolated backup restore</td>
          </tr>
          <tr>
            <td>Regional disaster</td>
            <td>48 hours</td>
            <td>24 hours</td>
            <td>Cross-region recovery</td>
          </tr>
        </tbody>
      </table>

      <h3>DR Architecture</h3>
      <div class="dr-architecture">
        <pre><code>                    ┌─────────────────┐
                    │   Production    │
                    │    (Primary)    │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
   ┌──────────┐       ┌──────────┐       ┌──────────┐
   │  Sync    │       │  Async   │       │  Backup  │
   │Replica 1 │       │Replica 2 │       │  Storage │
   └──────────┘       └────┬─────┘       └──────────┘
                            │
                    ┌───────▼────────┐
                    │  DR Site       │
                    │  (Standby)     │
                    └────────────────┘</code></pre>
      </div>

      <h3>DR Testing Schedule</h3>
      <ul>
        <li><strong>Monthly:</strong> Automated failover tests</li>
        <li><strong>Quarterly:</strong> Full DR drill with team</li>
        <li><strong>Annually:</strong> Cross-region recovery test</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Performance Tuning</h2>

      <h3>Database Optimization</h3>
      <div class="tuning-section">
        <h4>Indexing Strategy</h4>
        <ul>
          <li>Index frequently queried fields (identifier, status, dates)</li>
          <li>Use composite indexes for common filter combinations</li>
          <li>Monitor slow queries and add indexes as needed</li>
          <li>Remove unused indexes to reduce write overhead</li>
        </ul>

        <h4>Query Optimization</h4>
        <ul>
          <li>Use pagination for large result sets</li>
          <li>Avoid SELECT * in production queries</li>
          <li>Use connection pooling</li>
          <li>Implement query timeouts</li>
        </ul>
      </div>

      <h3>Application Optimization</h3>
      <div class="tuning-section">
        <h4>Caching Layers</h4>
        <table class="cache-layers">
          <thead>
            <tr>
              <th>Layer</th>
              <th>What to Cache</th>
              <th>TTL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CDN</td>
              <td>Static assets, published items</td>
              <td>1 hour - 1 day</td>
            </tr>
            <tr>
              <td>Application</td>
              <td>Concept hierarchies, domains</td>
              <td>5-15 minutes</td>
            </tr>
            <tr>
              <td>Database</td>
              <td>Query results, item lookups</td>
              <td>1-5 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="content-section">
      <h2>Maintenance Windows</h2>
      <p>
        Plan for regular maintenance:
      </p>

      <table class="maintenance-table">
        <thead>
          <tr>
            <th>Maintenance Type</th>
            <th>Frequency</th>
            <th>Impact</th>
            <th>Communication</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Security patches</td>
            <td>As needed</td>
            <td>Usually none (rolling)</td>
            <td>None unless required</td>
          </tr>
          <tr>
            <td>Database upgrades</td>
            <td>Quarterly</td>
            <td>Brief read-only</td>
            <td>48-hour notice</td>
          </tr>
          <tr>
            <td>Major version upgrade</td>
            <td>Annually</td>
            <td>Planned downtime</td>
            <td>2-week notice</td>
          </tr>
          <tr>
            <td>Data migration</td>
            <td>As needed</td>
            <td>May require downtime</td>
            <td>1-week notice</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="content-section">
      <h2>Operational Checklist</h2>
      <div class="ops-checklist">
        <div class="checklist-section">
          <h4>Daily</h4>
          <ul>
            <li>☐ Check monitoring dashboards</li>
            <li>☐ Review error logs</li>
            <li>☐ Verify backup completion</li>
            <li>☐ Check proposal queue</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Weekly</h4>
          <ul>
            <li>☐ Review capacity trends</li>
            <li>☐ Check security alerts</li>
            <li>☐ Audit user access</li>
            <li>☐ Review SLA metrics</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Monthly</h4>
          <ul>
            <li>☐ Test backup restoration</li>
            <li>☐ Review and rotate credentials</li>
            <li>☐ Update documentation</li>
            <li>☐ Capacity planning review</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Quarterly</h4>
          <ul>
            <li>☐ Full DR drill</li>
            <li>☐ Security assessment</li>
            <li>☐ Dependency updates</li>
            <li>☐ Performance review</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/security">Security</router-link>
          - Securing your register deployment
        </li>
        <li>
          <router-link to="/build/performance">Performance</router-link>
          - Detailed performance tuning guide
        </li>
        <li>
          <router-link to="/build/api-design">API Design</router-link>
          - API patterns and rate limiting
        </li>
        <li>
          <router-link to="/build/governance">Governance</router-link>
          - Managing proposals and approvals
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

.ops-areas {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.area {
  background: rgba(13, 148, 136, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
}

.area h4 {
  margin-bottom: var(--spacing-sm);
  color: var(--color-accent);
}

.area p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.metrics-table {
  margin: var(--spacing-lg) 0;
}

.dashboard-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.dashboard-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
}

.metric-value {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
}

.metric-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.monitoring-stack {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.stack-layer {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.stack-layer h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
}

.stack-layer ul {
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
}

.alert-rules {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin: var(--spacing-lg) 0;
}

.alert-rule {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
}

.alert-rule.critical {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.alert-rule.warning {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.alert-rule.info {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.severity {
  font-weight: var(--font-weight-bold);
  min-width: 80px;
}

.condition {
  flex: 1;
}

.response {
  color: var(--color-text-light);
}

.backup-table,
.dr-objectives,
.cache-layers,
.maintenance-table {
  margin: var(--spacing-lg) 0;
}

.recovery-procedures {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.procedure {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.procedure h4 {
  margin-bottom: var(--spacing-md);
}

.procedure ol {
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
}

.warning-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.capacity-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.capacity-metrics .metric {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.capacity-metrics .metric h4 {
  margin-bottom: var(--spacing-md);
}

.capacity-metrics .metric ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-sm);
}

.capacity-metrics .metric li {
  padding: var(--spacing-xs) 0;
}

.dr-architecture {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  overflow-x: auto;
}

.dr-architecture pre {
  background: none;
  margin: 0;
  padding: 0;
}

.dr-architecture code {
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
}

.tuning-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
}

.tuning-section h4 {
  margin-bottom: var(--spacing-sm);
}

.ops-checklist {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.checklist-section {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.checklist-section h4 {
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
}

.checklist-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-sm);
}

.checklist-section li {
  padding: var(--spacing-xs) 0;
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
  .ops-areas,
  .dashboard-layout,
  .monitoring-stack,
  .recovery-procedures,
  .capacity-metrics,
  .ops-checklist {
    grid-template-columns: 1fr;
  }
}
</style>
