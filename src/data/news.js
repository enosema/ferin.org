// News data for ferin.org
// Add new news items at the top of the array

export const newsItems = [
  {
    id: 'iso-19135-2026-published',
    date: '2026-02-15',
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
      'Paul Janssen (Geonovum)',
      'Torsten Svärd (Lantmäteriet)',
      'Anton Strogonoff (Ribose)',
      'Mats Åhlin (SIS)',
      'Stefan Strobel (Strobel Geoinformatics)',
      'Larry D. Hothem',
      'Peter Parslow (Ordnance Survey)',
      'Patrick Vorster (DALRRD)',
      'Jeffrey Lau (Ribose)',
      'Scott Simmons (OGC)',
      'Yong Baek (IHO)',
      'Ryu Ryan (ETRI)',
      'Jan Hjelmager (SDFE)',
      'Jean Brodeur',
      'Heidi Vanparys (SDFI)',
      'Jiantao Bi (RADI)',
      'Roger Lott (IOGP)',
      'Liz Kolster (NZTA)',
      'Gobe Hobona (OGC)',
      'Michael Craymer (NRCAN)',
      'Marie Lambois (IGN)',
      'Ivana Ivanova (Curtin University)',
      'Knut Jetlund (Kartverket)'
    ]
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
