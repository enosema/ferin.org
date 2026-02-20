// News data for ferin.org
// Add new news items at the top of the array

export const newsItems = [
  {
    id: 'register-specification-builder-released',
    date: '2026-02-20',
    tag: 'Tool',
    title: 'Introducing the Register Specification Builder: Create ISO 19135 Compliant Specifications with Ease',
    summary: 'We are excited to announce the release of the Register Specification Builder—an interactive, browser-based tool that guides you through creating complete ISO 19135 compliant register specifications.',
    featured: true,
    content: `
      <p>We are excited to announce the release of the <a href="/builder">Register Specification Builder</a>—an
      interactive, browser-based tool that guides you through creating complete ISO 19135 compliant
      register specifications. This tool represents a significant step forward in making the FERIN
      framework more accessible to organizations of all sizes.</p>

      <h3>The Challenge We Address</h3>
      <p>
        Creating a register specification that complies with ISO 19135:2026 can be daunting. The standard
        defines numerous requirements across multiple sections—scope, conventions, roles, governance
        processes, content requirements, and more. Organizations often struggle with:
      </p>
      <ul>
        <li><strong>Understanding what to document:</strong> The standard specifies what must be included, but not always how to structure it</li>
        <li><strong>Ensuring completeness:</strong> Missing sections can lead to non-conformance</li>
        <li><strong>Getting started:</strong> A blank document provides no guidance on best practices</li>
        <li><strong>Maintaining consistency:</strong> Keeping terminology and structure consistent throughout the document</li>
      </ul>

      <h3>Introducing the Builder</h3>
      <p>
        The Register Specification Builder addresses these challenges with a guided, step-by-step
        approach that ensures you cover all required elements while providing helpful defaults and
        examples along the way.
      </p>

      <h3>Key Features</h3>

      <h4>Guided Workflow</h4>
      <p>
        The builder organizes your specification into 11 logical sections, each with clear guidance
        on what information is needed. A visual progress indicator shows your completion status,
        helping you track what's done and what remains.
      </p>

      <h4>Complete ISO 19135 Coverage</h4>
      <p>The builder captures all required specification elements:</p>
      <ul>
        <li><strong>Document Metadata:</strong> Title, identifier, version, and status</li>
        <li><strong>Scope:</strong> Purpose, content boundaries, and target users</li>
        <li><strong>Normative References:</strong> Required standards and documents</li>
        <li><strong>Terms and Definitions:</strong> Custom terminology for your register</li>
        <li><strong>Conventions:</strong> Identifier schemes and versioning approaches</li>
        <li><strong>Audience and Accessibility:</strong> Who uses your register and how</li>
        <li><strong>Roles and Responsibilities:</strong> The six ISO 19135 roles configured for your context</li>
        <li><strong>Governance Processes:</strong> Proposal, approval, appeal, and content management workflows</li>
        <li><strong>Content Requirements:</strong> Concepts, statuses, relations, and actions</li>
        <li><strong>Other Information:</strong> Contact details and access locations</li>
        <li><strong>Bibliography:</strong> Informative references for additional context</li>
      </ul>

      <h4>Save and Resume</h4>
      <p>
        Work at your own pace. The builder saves your specification as a JSON file that you can
        load and continue editing at any time. No server required—everything stays in your browser,
        ensuring your data remains private and under your control.
      </p>

      <h4>Export to Standard Formats</h4>
      <p>
        When you're ready to publish or share your specification, export it to:
      </p>
      <ul>
        <li><strong>Metanorma AsciiDoc:</strong> Ready for processing into published documents</li>
        <li><strong>Markdown:</strong> Universal format for documentation systems</li>
        <li><strong>JSON:</strong> Machine-readable format for integration with other tools</li>
      </ul>

      <h4>Built-in Guidance</h4>
      <p>
        Each section includes helpful hints and example content to guide your decisions. The builder
        understands the ISO 19135 requirements and helps you create specifications that will pass
        conformance review.
      </p>

      <h3>Privacy and Security</h3>
      <p>
        The Register Specification Builder runs entirely in your browser. Your specification data
        never leaves your computer unless you explicitly download or export it. This approach ensures:
      </p>
      <ul>
        <li>No server to hack—your data stays with you</li>
        <li>No accounts or authentication required</li>
        <li>Works offline once loaded</li>
        <li>Full control over your sensitive register planning information</li>
      </ul>

      <h3>Who Should Use the Builder</h3>
      <p>The builder is designed for anyone creating or maintaining a register specification:</p>
      <ul>
        <li><strong>Register owners</strong> documenting their governance approach</li>
        <li><strong>Standards bodies</strong> creating reference register specifications</li>
        <li><strong>Government agencies</strong> establishing authoritative data registries</li>
        <li><strong>Organizations</strong> formalizing existing code lists and reference data</li>
        <li><strong>Consultants</strong> helping clients implement FERIN-compliant registers</li>
      </ul>

      <h3>Getting Started</h3>
      <p>
        The builder is available now at <a href="/builder">ferin.org/builder</a>. No registration
        required—simply open the tool and start creating your specification. Begin with the sample
        specification based on the RUM (Register of Units of Measure) example from the ISO standard,
        or start fresh with sensible defaults.
      </p>

      <h3>Future Development</h3>
      <p>
        This initial release focuses on the core specification creation workflow. We're actively
        developing additional capabilities based on community feedback, including:
      </p>
      <ul>
        <li>Conformance checking against ISO 19135 requirements</li>
        <li>More export formats and templates</li>
        <li>Collaboration features for team review</li>
        <li>Integration with register management systems</li>
      </ul>

      <h3>Try It Today</h3>
      <p>
        Visit the <a href="/builder">Register Specification Builder</a> and start creating your
        ISO 19135 compliant specification. We welcome your feedback to help us improve this tool
        for the FERIN community.
      </p>
    `
  },
  {
    id: 'migration-guide-published',
    date: '2026-02-18',
    tag: 'Guide',
    title: 'Comprehensive Migration Guide: ISO 19135-1:2015 to ISO 19135:2026',
    summary: 'We are pleased to announce a comprehensive migration guide to help organizations transition their existing registers from ISO 19135-1:2015 to ISO 19135:2026.',
    featured: false,
    content: `
      <p>We are pleased to announce the publication of a comprehensive
      <a href="/upgrade">upgrade guide</a> to help organizations
      transition their existing registers from ISO 19135-1:2015 to ISO 19135:2026.</p>

      <h3>Why This Guide Matters</h3>
      <p>
        ISO 19135:2026 introduces significant changes that represent a paradigm shift
        in how registers are designed and managed. The new FERIN framework brings:
      </p>
      <ul>
        <li><strong>Two-plane architecture:</strong> Separating concepts (meaning) from content (data)</li>
        <li><strong>Capability-based conformance:</strong> Modular requirements instead of monolithic classes</li>
        <li><strong>Commitments framework:</strong> Explicit promises about access, persistence, and transparency</li>
        <li><strong>Technology neutrality:</strong> No prescribed XML schema—implement with any technology</li>
      </ul>

      <h3>What's the Minimal Work Required?</h3>
      <p>
        The guide focuses on practical migration with a clear answer to the most
        common question: <em>"What's the minimum work I need to do?"</em>
      </p>
      <p>The answer is surprisingly simple:</p>
      <ol>
        <li><strong>Define your register specification</strong> — Document purpose, scope, governance, and commitments</li>
        <li><strong>Document your concept model</strong> — Define concepts, versions, relations, and register item classes</li>
      </ol>

      <h3>Guide Contents</h3>
      <p>The multi-page guide covers:</p>
      <ul>
        <li>Paradigm shifts in the new standard</li>
        <li>Terminology changes from 2015 to 2026</li>
        <li>Conformance class mapping</li>
        <li>Status value transformation</li>
        <li>Data model updates</li>
        <li>Governance changes</li>
        <li>Multiple migration paths</li>
        <li>Complete implementation checklist</li>
        <li>FAQ and common pitfalls</li>
      </ul>

      <h3>Helping the Community</h3>
      <p>
        This guide was created in response to community feedback. Many organizations
        have existing ISO 19135-1:2015 compliant registers and need clear, practical
        guidance on how to adopt the new standard. Our goal is to lower the barrier
        to adoption and help the community benefit from the improvements in FERIN.
      </p>

      <h3>Get Started</h3>
      <p>
        Visit the <a href="/upgrade">Upgrade Guide</a> to begin your
        transition to ISO 19135:2026.
      </p>
    `
  },
  {
    id: 'iso-19135-2026-published',
    date: '2026-02-05',
    tag: 'Milestone',
    title: 'ISO 19135:2026 Published - Introducing the FERIN Framework',
    summary: 'We are pleased to announce the publication of ISO 19135:2026, which introduces the FERIN framework for extensible registration of information.',
    featured: true,
    content: `
      <p>We are pleased to announce the publication of ISO 19135:2026, which
      introduces the FERIN (Framework for Extensible Registration of Information)
      framework. This represents a significant evolution from previous editions,
      generalizing the standard beyond geographic information to serve all domains.</p>

      <p>The FERIN framework provides a comprehensive approach to managing information
      in registers that serves both human and machine consumers, with persistent
      identification, controlled evolution, and complete change history.</p>

      <h3>Project Leadership</h3>
      <p>This standard was developed under the leadership of:</p>
      <ul>
        <li><strong>Ronald Tse</strong> (CalConnect / Ribose) - Project Leader</li>
        <li><strong>Reese Plews</strong> (JISC Japan / Plews Consulting) - Project Leader</li>
      </ul>

      <h3>Key Features of FERIN</h3>
      <ul>
        <li><strong>Domain-agnostic:</strong> No longer limited to geographic information—applicable to any domain requiring managed reference data</li>
        <li><strong>Concept and content planes:</strong> Formal separation of meaning from data, enabling concepts to evolve while preserving content integrity</li>
        <li><strong>Capability-based conformance:</strong> Five register types based on capabilities, not hierarchy—choose what fits your needs</li>
        <li><strong>Technology-neutral:</strong> No implementation-specific requirements—implement using any technology stack</li>
        <li><strong>Explicit commitments:</strong> Clear requirements for access, persistence, and transparency</li>
      </ul>
    `,
    team: [
      'Jean Brodeur',
      'Jiantao Bi (RADI)',
      'Michael Craymer (NRCAN)',
      'Gobe Hobona (OGC)',
      'Jan Hjelmager (SDFE)',
      'Knut Jetlund (Kartverket)',
      'Paul Janssen (Geonovum)',
      'Liz Kolster (NZTA)',
      'Chikako Kurokawa (Asia Air Survey)',
      'Jeffrey Lau (Ribose)',
      'Marie Lambois (IGN)',
      'Roger Lott (IOGP)',
      'Peter Parslow (Ordnance Survey)',
      'Ivana Ivanova (Curtin University)',
      'Scott Simmons (OGC)',
      'Stefan Strobel (Strobel Geoinformatics)',
      'Anton Strogonoff (Ribose)',
      'Torsten Svärd (Lantmäteriet)',
      'Larry D. Hothem',
      'Yong Baek (IHO)',
      'Mats Åhlin (SIS)',
      'Patrick Vorster (DALRRD)',
      'Ryu Ryan (ETRI)',
      'Heidi Vanparys (SDFI)'
    ],
    acknowledgments: {
      isoEditor: {
        name: 'Nicola Perou',
        email: 'perou@iso.org'
      },
      tc211Secretariat: [
        {
          name: 'Mats Åhlin',
          email: 'mats.ahlin@sis.se'
        },
        {
          name: 'Christine Allansson',
          email: 'christine.allansson@sis.se'
        }
      ]
    },
    publication: {
      collaboration: 'CEN',
      leadOrganization: 'ISO',
      cenReference: 'EN ISO 19135:2026',
      cenWorkItem: '00287144',
      stage: '60.60',
      cenCommittee: 'CEN/TC 287 Geographic Information',
      cenSecretary: 'Christopher Starr',
      cenProgrammeManager: 'Lucia Lanfri',
      responsibilities: [
        { role: 'Project Leader', names: ['Reese Plews', 'Ronald Tse'] },
        { role: 'Committee Manager', name: 'Mats Åhlin', secretariat: 'SIS' },
        { role: 'Convenor', name: 'Ryan Ryu' },
        { role: 'ISO Technical Programme Manager (TPM)', name: 'Hakim Mkinsi' },
        { role: 'ISO Editorial Programme Manager (EPM)', name: 'Alison Reid-Jamond' }
      ]
    }
  }
]

// Get the latest news items (for homepage display)
export function getLatestNews(count = 3) {
  return newsItems
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count)
}

// Get a news item by ID
export function getNewsById(id) {
  return newsItems.find(item => item.id === id)
}

// Format date for display
export function formatNewsDate(dateString) {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.toLocaleString('en-US', { month: 'short' })
  const year = date.getFullYear()
  return { day, month, year }
}
