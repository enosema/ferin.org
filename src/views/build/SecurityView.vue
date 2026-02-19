<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Security Considerations</h1>
      <p class="page-lead">
        Securing FERIN registers: authentication, authorization, data protection,
        and threat modeling for enterprise and government deployments.
      </p>
    </header>

    <section class="content-section">
      <h2>Security Overview</h2>
      <p>
        Registers often contain sensitive or business-critical data. This guide
        covers security considerations for protecting register content, operations,
        and user access.
      </p>

      <div class="security-domains">
        <div class="domain">
          <h4>Authentication</h4>
          <p>Verifying who users are</p>
        </div>
        <div class="domain">
          <h4>Authorization</h4>
          <p>Controlling what users can do</p>
        </div>
        <div class="domain">
          <h4>Data Protection</h4>
          <p>Protecting content at rest and in transit</p>
        </div>
        <div class="domain">
          <h4>Audit & Compliance</h4>
          <p>Recording and monitoring activity</p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Authentication Patterns</h2>
      <p>
        Choose authentication based on your user community and risk profile.
      </p>

      <h3>Pattern Comparison</h3>
      <table class="auth-comparison">
        <thead>
          <tr>
            <th>Pattern</th>
            <th>Complexity</th>
            <th>Security</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>API Keys</td>
            <td>Low</td>
            <td>Medium</td>
            <td>Server-to-server, internal tools</td>
          </tr>
          <tr>
            <td>Username/Password</td>
            <td>Low</td>
            <td>Low-Medium</td>
            <td>Simple applications, low risk</td>
          </tr>
          <tr>
            <td>OAuth 2.0 / OIDC</td>
            <td>Medium</td>
            <td>High</td>
            <td>User-facing apps, SSO integration</td>
          </tr>
          <tr>
            <td>SAML 2.0</td>
            <td>High</td>
            <td>High</td>
            <td>Enterprise SSO, federated identity</td>
          </tr>
          <tr>
            <td>mTLS</td>
            <td>High</td>
            <td>Very High</td>
            <td>Government, financial, high-security</td>
          </tr>
        </tbody>
      </table>

      <h3>OAuth 2.0 Implementation</h3>
      <p>For user-facing applications, OAuth 2.0 with OIDC is recommended:</p>
      <div class="oauth-flow">
        <pre><code>// Authorization Code Flow with PKCE
1. User redirects to authorization server
2. User authenticates and consents
3. Authorization server returns code
4. Application exchanges code for tokens
5. Access token used for API requests

// Token structure
{
  "sub": "user-123",           // Subject (user ID)
  "iss": "https://auth.example.com",  // Issuer
  "aud": "https://api.example.com",   // Audience
  "exp": 1704067200,           // Expiration
  "roles": ["proposer", "viewer"],
  "org": "acme-corp"
}</code></pre>
      </div>

      <h3>mTLS for High Security</h3>
      <p>
        For government or high-security deployments, mutual TLS provides
        strong authentication:
      </p>
      <ul>
        <li>Client certificates issued by trusted CA</li>
        <li>Certificate validates at TLS handshake</li>
        <li>Certificate attributes map to authorization</li>
        <li>No tokens or credentials in application layer</li>
      </ul>

      <div class="warning-box">
        <strong>Key Management:</strong> mTLS security depends on proper
        certificate lifecycle management. Implement certificate rotation,
        revocation checking, and expiration monitoring.
      </div>
    </section>

    <section class="content-section">
      <h2>Authorization Model</h2>
      <p>
        FERIN defines specific roles that map to authorization permissions.
      </p>

      <h3>Role-Based Access Control (RBAC)</h3>
      <div class="rbac-model">
        <div class="role-card">
          <h4>Anonymous / Public</h4>
          <p>Unauthenticated access to public resources</p>
          <ul>
            <li>Read published items (if access commitment allows)</li>
            <li>View public metadata</li>
            <li>No write operations</li>
          </ul>
        </div>
        <div class="role-card">
          <h4>Proposer</h4>
          <p>Can submit proposals for changes</p>
          <ul>
            <li>All public access</li>
            <li>Submit proposals</li>
            <li>View own proposals</li>
            <li>Modify own draft proposals</li>
          </ul>
        </div>
        <div class="role-card">
          <h4>Register Manager</h4>
          <p>Day-to-day operations</p>
          <ul>
            <li>All proposer access</li>
            <li>Validate proposals</li>
            <li>Manage operational settings</li>
            <li>View all proposals</li>
          </ul>
        </div>
        <div class="role-card">
          <h4>Control Body</h4>
          <p>Approves or rejects proposals</p>
          <ul>
            <li>All manager access</li>
            <li>Approve/reject proposals</li>
            <li>Provide decision rationale</li>
            <li>Delegate within scope</li>
          </ul>
        </div>
        <div class="role-card owner">
          <h4>Register Owner</h4>
          <p>Full administrative access</p>
          <ul>
            <li>All control body access</li>
            <li>Assign roles</li>
            <li>Modify register configuration</li>
            <li>Handle appeals</li>
          </ul>
        </div>
      </div>

      <h3>Attribute-Based Access Control (ABAC)</h3>
      <p>
        For fine-grained control, use ABAC to consider additional attributes:
      </p>
      <div class="abac-example">
        <pre><code>// ABAC policy example
policy proposal_submit:
  condition:
    user.role: proposer
    user.org_verified: true
    item.status: published OR user.is_owner

policy proposal_approve:
  condition:
    user.role: control_body
    user.org: proposal.target_org
    NOT user.is_proposer_for(proposal)</code></pre>
      </div>
    </section>

    <section class="content-section">
      <h2>Data Protection</h2>

      <h3>Encryption in Transit</h3>
      <p>All API communication must use TLS 1.2 or higher:</p>
      <ul>
        <li>Enforce HTTPS for all endpoints</li>
        <li>Use HSTS headers to prevent downgrade attacks</li>
        <li>Configure strong cipher suites</li>
        <li>Implement certificate pinning for mobile/native apps</li>
      </ul>

      <h3>Encryption at Rest</h3>
      <p>
        Protect sensitive data stored in databases and files:
      </p>
      <table class="encryption-table">
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Protection</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item content</td>
            <td>Application-level encryption</td>
            <td>For highly sensitive content</td>
          </tr>
          <tr>
            <td>User credentials</td>
            <td>Bcrypt/Argon2 hashing</td>
            <td>Never store plaintext</td>
          </tr>
          <tr>
            <td>API keys</td>
            <td>Hashed or encrypted</td>
            <td>Display only once on creation</td>
          </tr>
          <tr>
            <td>Audit logs</td>
            <td>Integrity protection (HMAC)</td>
            <td>Prevent tampering</td>
          </tr>
          <tr>
            <td>Database</td>
            <td>TDE or volume encryption</td>
            <td>Defense in depth</td>
          </tr>
        </tbody>
      </table>

      <h3>Personal Data Protection</h3>
      <p>
        When registers contain personal data, implement GDPR/privacy compliance:
      </p>
      <ul>
        <li>Data minimization: collect only necessary data</li>
        <li>Retention policies: define and enforce retention periods</li>
        <li>Right to access: users can view their data</li>
        <li>Right to erasure: implement redaction capabilities</li>
        <li>Consent management: track consent for processing</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Audit Logging</h2>
      <p>
        Comprehensive audit logs are essential for governed registers.
      </p>

      <h3>What to Log</h3>
      <div class="audit-events">
        <div class="event-category">
          <h4>Authentication Events</h4>
          <ul>
            <li>Login attempts (success/failure)</li>
            <li>Token issuance and refresh</li>
            <li>Password changes</li>
            <li>Session termination</li>
          </ul>
        </div>
        <div class="event-category">
          <h4>Authorization Events</h4>
          <ul>
            <li>Access denied events</li>
            <li>Role assignments/changes</li>
            <li>Permission modifications</li>
          </ul>
        </div>
        <div class="event-category">
          <h4>Data Events</h4>
          <ul>
            <li>Item create/update/delete</li>
            <li>Status changes</li>
            <li>Proposal submissions</li>
            <li>Decision records</li>
          </ul>
        </div>
        <div class="event-category">
          <h4>Administrative Events</h4>
          <ul>
            <li>Configuration changes</li>
            <li>Role management</li>
            <li>System maintenance</li>
          </ul>
        </div>
      </div>

      <h3>Log Format</h3>
      <div class="log-format">
        <pre><code>{
  "timestamp": "2024-01-15T10:30:00Z",
  "eventId": "evt_abc123",
  "eventType": "ITEM_UPDATE",
  "actor": {
    "userId": "user-123",
    "role": "proposer",
    "ipAddress": "192.168.1.100",
    "userAgent": "Mozilla/5.0..."
  },
  "resource": {
    "type": "RegisterItem",
    "id": "rum:m",
    "version": "2.0.0"
  },
  "action": "UPDATE",
  "outcome": "SUCCESS",
  "details": {
    "fields": ["definition"],
    "proposalId": "prop_456"
  }
}</code></pre>
      </div>

      <h3>Log Protection</h3>
      <ul>
        <li>Store logs in append-only storage</li>
        <li>Use HMAC or digital signatures for integrity</li>
        <li>Replicate to separate, secure storage</li>
        <li>Define retention periods based on requirements</li>
        <li>Restrict log access to authorized personnel</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Threat Modeling</h2>
      <p>
        Consider these threat categories when designing your register security:
      </p>

      <div class="threat-model">
        <div class="threat">
          <h4>Unauthorized Access</h4>
          <p><strong>Threat:</strong> Attacker gains access to restricted data.</p>
          <p><strong>Mitigations:</strong></p>
          <ul>
            <li>Strong authentication (MFA)</li>
            <li>Principle of least privilege</li>
            <li>Regular access reviews</li>
            <li>Session timeouts</li>
          </ul>
        </div>
        <div class="threat">
          <h4>Data Tampering</h4>
          <p><strong>Threat:</strong> Attacker modifies register content.</p>
          <p><strong>Mitigations:</strong></p>
          <ul>
            <li>Integrity-protected audit logs</li>
            <li>Digital signatures on critical items</li>
            <li>Change detection monitoring</li>
            <li>Regular integrity checks</li>
          </ul>
        </div>
        <div class="threat">
          <h4>Denial of Service</h4>
          <p><strong>Threat:</strong> Attacker makes register unavailable.</p>
          <p><strong>Mitigations:</strong></p>
          <ul>
            <li>Rate limiting</li>
            <li>Traffic filtering</li>
            <li>Auto-scaling</li>
            <li>CDN for read traffic</li>
          </ul>
        </div>
        <div class="threat">
          <h4>Insider Threat</h4>
          <p><strong>Threat:</strong> Authorized user abuses access.</p>
          <p><strong>Mitigations:</strong></p>
          <ul>
            <li>Segregation of duties</li>
            <li>Audit all actions</li>
            <li>Regular access reviews</li>
            <li>Anomaly detection</li>
          </ul>
        </div>
        <div class="threat">
          <h4>Data Exfiltration</h4>
          <p><strong>Threat:</strong> Sensitive data stolen in bulk.</p>
          <p><strong>Mitigations:</strong></p>
          <ul>
            <li>Data classification</li>
            <li>Export controls</li>
            <li>DLP monitoring</li>
            <li>Encryption</li>
          </ul>
        </div>
        <div class="threat">
          <h4>Supply Chain</h4>
          <p><strong>Threat:</strong> Compromise via dependencies.</p>
          <p><strong>Mitigations:</strong></p>
          <ul>
            <li>Dependency scanning</li>
            <li>SBOM maintenance</li>
            <li>Vendor assessment</li>
            <li>Patch management</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Security Checklist</h2>
      <div class="security-checklist">
        <div class="checklist-section">
          <h4>Authentication</h4>
          <ul>
            <li>☐ MFA enabled for admin roles</li>
            <li>☐ Strong password policy enforced</li>
            <li>☐ Session timeout configured</li>
            <li>☐ Failed login lockout enabled</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Authorization</h4>
          <ul>
            <li>☐ RBAC implemented per FERIN roles</li>
            <li>☐ Least privilege enforced</li>
            <li>☐ Regular access review scheduled</li>
            <li>☐ API rate limiting configured</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Data Protection</h4>
          <ul>
            <li>☐ TLS 1.2+ enforced</li>
            <li>☐ Sensitive data encrypted at rest</li>
            <li>☐ Encryption keys rotated</li>
            <li>☐ Backup encryption enabled</li>
          </ul>
        </div>
        <div class="checklist-section">
          <h4>Monitoring</h4>
          <ul>
            <li>☐ Audit logging enabled</li>
            <li>☐ Log integrity protected</li>
            <li>☐ Alerting for suspicious activity</li>
            <li>☐ Incident response plan defined</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Related Topics</h2>
      <ul class="next-steps">
        <li>
          <router-link to="/build/api-design">API Design</router-link>
          - Authentication patterns in API design
        </li>
        <li>
          <router-link to="/build/governance">Governance</router-link>
          - Role definitions and responsibilities
        </li>
        <li>
          <router-link to="/build/operations">Operations</router-link>
          - Monitoring and incident response
        </li>
        <li>
          <router-link to="/build/destructive-actions">Destructive Actions</router-link>
          - Secure handling of deletions
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

.security-domains {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.domain {
  background: rgba(13, 148, 136, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
}

.domain h4 {
  margin-bottom: var(--spacing-sm);
  color: var(--color-accent);
}

.domain p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin: 0;
}

.auth-comparison {
  margin: var(--spacing-lg) 0;
}

.oauth-flow,
.abac-example,
.log-format {
  background: var(--color-primary-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
  overflow-x: auto;
}

.oauth-flow pre,
.abac-example pre,
.log-format pre {
  background: none;
  margin: 0;
  padding: 0;
}

.oauth-flow code,
.abac-example code,
.log-format code {
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
}

.warning-box {
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  font-size: var(--font-size-sm);
}

.rbac-model {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
}

.role-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.role-card.owner {
  border-color: var(--color-accent);
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, var(--color-surface) 100%);
}

.role-card h4 {
  margin-bottom: var(--spacing-xs);
}

.role-card > p {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-sm);
}

.role-card ul {
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
}

.encryption-table {
  margin: var(--spacing-lg) 0;
}

.audit-events {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.event-category {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.event-category h4 {
  margin-bottom: var(--spacing-sm);
}

.event-category ul {
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
}

.threat-model {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.threat {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

.threat h4 {
  color: #dc2626;
  margin-bottom: var(--spacing-sm);
}

.threat p {
  font-size: var(--font-size-sm);
  margin: var(--spacing-xs) 0;
}

.threat ul {
  font-size: var(--font-size-sm);
  padding-left: var(--spacing-lg);
}

.security-checklist {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  .security-domains {
    grid-template-columns: repeat(2, 1fr);
  }

  .audit-events,
  .threat-model,
  .security-checklist {
    grid-template-columns: 1fr;
  }
}
</style>
