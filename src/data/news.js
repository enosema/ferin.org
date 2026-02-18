// News data for ferin.org
// Add new news items at the top of the array

export const newsItems = [
  {
    id: 'migration-guide-published',
    date: '2026-02-18',
    tag: 'Guide',
    title: 'Comprehensive Migration Guide: ISO 19135-1:2015 to ISO 19135:2026',
    summary: 'We are pleased to announce a comprehensive migration guide to help organizations transition their existing registers from ISO 19135-1:2015 to ISO 19135:2026.',
    featured: false,
    content: `
      <p>We are pleased to announce the publication of a comprehensive
      <a href="/implement/migration">migration guide</a> to help organizations
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
        <li>Minimal migration path for each conformance class</li>
        <li>Register specification requirements and templates</li>
        <li>Governance updates and role mapping</li>
        <li>Concept model documentation</li>
        <li>Status value mapping from 2015 to 2026</li>
        <li>Terminology changes reference</li>
        <li>Complete migration checklist</li>
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
        Visit the <a href="/implement/migration">Migration Guide</a> to begin your
        transition to ISO 19135:2026. Start with the
        <a href="/implement/migrate/minimal">Minimal Migration</a> page for the
        quickest path to compliance.
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
