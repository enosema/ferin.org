/**
 * Default values for a new Register Specification
 * Based on ISO 19135:2025 structure
 *
 * NOTE: Default values are intentionally empty to ensure sections
 * don't appear "complete" until the user fills them in.
 */

/**
 * Create a new specification with default values
 * @returns {Object} Default specification object
 */
export function createDefaultSpecification() {
  const today = new Date().toISOString().split('T')[0]

  return {
    // Document Metadata (includes access location)
    documentMetadata: {
      title: '',
      abbreviation: '',
      identifier: '',
      version: '1.0.0',
      date: today,
      status: 'draft',
      organization: '',
      accessLocation: '',
      accessLevel: 'public'
    },

    // Section 1: Scope
    scope: {
      purpose: '',
      contentIncluded: '',
      contentExcluded: '',
      targetUsers: []
    },

    // Section 2: Normative References (empty - user must add)
    normativeReferences: [],

    // Section 3: Terms and Definitions
    termsAndDefinitions: [],

    // Section 4: Conventions (empty - user must fill)
    conventions: {
      identifierScheme: {
        format: '',
        assignmentRules: '',
        persistencePolicy: '',
        examples: []
      },
      versioningScheme: {
        scheme: '',
        format: '',
        majorChangeCriteria: '',
        minorChangeCriteria: '',
        compatibilityPolicy: ''
      },
      temporalApplicability: {
        supported: false,
        format: '',
        rules: []
      }
    },

    // Section 5: Audience and Accessibility
    audienceAndAccessibility: {
      targetAudience: [],
      accessibilityRequirements: '',
      languagesSupported: [],
      accessLevel: 'public'
    },

    // Section 6: Roles and Responsibilities
    rolesAndResponsibilities: {
      // Entities that can be assigned to roles
      entities: [],
      // Role assignments: which entities are assigned to which roles
      roleAssignments: []
    },

    // Section 7: Commitments
    commitments: {
      access: {
        publiclyAccessible: false,
        accessMechanism: '',
        accessConstraints: ''
      },
      persistence: {
        identifierPersistence: '',
        contentPersistence: '',
        historyRetention: ''
      },
      transparency: {
        changeLogProvided: false,
        deliberationPublic: false,
        appealProcessDocumented: false
      }
    },

    // Section 8: Governance Processes (empty descriptions - user must fill)
    governanceProcesses: {
      proposalProcess: {
        description: '',
        allowedActions: [],
        formsAndUrls: []
      },
      approvalProcess: {
        description: '',
        criteria: [],
        steps: []
      },
      contentManagement: {
        description: '',
        versionUpdateRules: []
      },
      appealProcess: {
        description: '',
        timeframe: ''
      }
    },

    // Section 9: Content Requirements (empty - user must configure)
    contentRequirements: {
      concepts: [],
      repositories: [],
      statuses: {
        validityStatuses: [],
        publicationStatuses: []
      },
      relations: [],
      actions: []
    },

    // Section 10: Other Information (simplified - contact only)
    otherInformation: {
      contact: {
        name: '',
        email: '',
        phone: '',
        address: ''
      },
      additionalInformation: ''
    },

    // Section 11: Bibliography
    bibliography: [],

    // Section 12: Conformance Claims
    conformanceClaims: {
      registerTypes: [],
      iso19135Version: '2025'
    }
  }
}

// ISO 19135 standard roles (used for reference)
export const standardRoles = [
  {
    key: 'registerOwner',
    title: 'Register Owner',
    icon: '👑',
    description: 'Holds ultimate responsibility for the register',
    responsibilities: ['Ultimate authority', 'Establishes policies', 'Appoints manager and control body']
  },
  {
    key: 'registerManager',
    title: 'Register Manager',
    icon: '📋',
    description: 'Responsible for content management and coordination',
    responsibilities: ['Content management', 'Liaison with control body', 'Publishes changes']
  },
  {
    key: 'systemManager',
    title: 'System Manager',
    icon: '⚙️',
    description: 'Responsible for the register system infrastructure',
    responsibilities: ['System infrastructure', 'Availability and security', 'Technical support']
  },
  {
    key: 'controlBody',
    title: 'Control Body',
    icon: '✓',
    description: 'Reviews and approves proposals',
    responsibilities: ['Review proposals', 'Make decisions', 'Document outcomes']
  },
  {
    key: 'proposer',
    title: 'Proposer',
    icon: '✏️',
    description: 'Submits proposals to modify content',
    responsibilities: ['Prepare proposals', 'Provide justification', 'Respond to inquiries']
  },
  {
    key: 'user',
    title: 'Register User',
    icon: '👤',
    description: 'Accesses and utilizes register content',
    responsibilities: ['View content', 'May submit feedback']
  }
]

// Role overlap warnings
export const roleOverlapWarnings = {
  'registerOwner+registerManager': 'The Register Owner should delegate operational management. Having the same entity serve both roles may create governance issues.',
  'registerOwner+controlBody': 'The Register Owner appoints the Control Body. Combining these roles removes the separation of authority.',
  'registerManager+controlBody': 'The Register Manager implements decisions made by the Control Body. Combining these roles concentrates too much power.',
  'controlBody+proposer': 'The Control Body reviews proposals. Being both proposer and reviewer creates a conflict of interest.',
  'systemManager+controlBody': 'These roles have different focuses (technical vs content). Combining them may work for small registers but consider separating as the register grows.'
}

/**
 * Create a sample specification based on the RUM example
 * @returns {Object} Sample specification object
 */
export function createSampleSpecification() {
  const spec = createDefaultSpecification()

  spec.documentMetadata = {
    title: 'Register of Units of Measure (RUM) Register Specification',
    abbreviation: 'RUM',
    identifier: 'urn:iso:reg-spec:rum:1.0.0',
    version: '1.0.0',
    date: '2025-01-15',
    status: 'final',
    organization: 'RUM Committee',
    accessLocation: 'https://www.example.com/rum-register',
    accessLevel: 'public'
  }

  spec.scope = {
    purpose: 'The Register of Units of Measure (RUM) is an information register of units of measure (UOMs).',
    contentIncluded: 'SI units, SI-derived units, SI acceptable units, and traditional units',
    contentExcluded: 'Dimensions and quantities are managed as constant data in RUM and are not part of the register.',
    targetUsers: ['Standards developers', 'Software engineers', 'Scientists', 'Data managers']
  }

  spec.normativeReferences = [
    {
      identifier: 'ISO 19135:2025',
      title: 'Information registration -- Requirements',
      url: 'https://www.iso.org/standard/87753.html'
    },
    {
      identifier: 'BIPM SI Brochure',
      title: 'The International System of Units (SI)',
      url: 'https://www.bipm.org/en/publications/si-brochure'
    },
    {
      identifier: 'RFC 3986',
      title: 'Uniform Resource Identifier (URI): Generic Syntax',
      url: 'https://www.rfc-editor.org/rfc/rfc3986'
    }
  ]

  spec.termsAndDefinitions = [
    {
      term: 'unit of measure',
      definition: 'defined scalar used to measure the quantity in a dimension',
      source: ''
    },
    {
      term: 'unit system',
      definition: 'system of units of measure that describes measurements in a universe of discourse',
      source: ''
    },
    {
      term: 'unit system manager',
      definition: 'entity that manages definitions of a unit system',
      source: ''
    }
  ]

  spec.conventions = {
    identifierScheme: {
      format: 'https://www.example.com/rum-register/concepts/{type}/{name}',
      assignmentRules: '',
      persistencePolicy: 'Identifiers are persistent and never reassigned',
      examples: []
    },
    versioningScheme: {
      scheme: 'semantic',
      format: 'major.minor.patch',
      majorChangeCriteria: 'Changes that affect the semantics or break backward compatibility',
      minorChangeCriteria: 'Changes that add new information without breaking compatibility',
      compatibilityPolicy: ''
    },
    temporalApplicability: {
      supported: true,
      format: 'ISO 8601',
      rules: [
        'applicable from: when this item becomes applicable',
        'applicable until: when this item ceases to be applicable',
        'applicable during: when this item is applicable during a period of time'
      ]
    }
  }

  spec.audienceAndAccessibility = {
    targetAudience: ['Public users', 'Standards organizations', 'Software developers'],
    accessibilityRequirements: 'Compliant with Section 508(c) for access impaired individuals',
    languagesSupported: ['en'],
    accessLevel: 'public'
  }

  // Entities
  spec.rolesAndResponsibilities.entities = [
    { id: 'entity-1', name: 'RUM Committee', type: 'organization', email: 'contact@rum-committee.org' },
    { id: 'entity-2', name: 'RUM Register Manager Team', type: 'team', email: 'manager@rum-committee.org' },
    { id: 'entity-3', name: 'RUM Technical Committee', type: 'team', email: 'technical@rum-committee.org' }
  ]

  // Role assignments
  spec.rolesAndResponsibilities.roleAssignments = [
    { entityId: 'entity-1', roleKey: 'registerOwner' },
    { entityId: 'entity-2', roleKey: 'registerManager' },
    { entityId: 'entity-2', roleKey: 'systemManager' },
    { entityId: 'entity-3', roleKey: 'controlBody' }
  ]

  // Commitments
  spec.commitments = {
    access: {
      publiclyAccessible: true,
      accessMechanism: 'Web interface and API',
      accessConstraints: 'None'
    },
    persistence: {
      identifierPersistence: 'Identifiers are permanent and will never be reassigned',
      contentPersistence: 'All content versions are retained indefinitely',
      historyRetention: 'Complete change history is maintained'
    },
    transparency: {
      changeLogProvided: true,
      deliberationPublic: false,
      appealProcessDocumented: true
    }
  }

  spec.governanceProcesses = {
    proposalProcess: {
      description: 'Proposers prepare and submit a proposal via the RUM online proposal forms.',
      allowedActions: ['Addition', 'Modification', 'Unpublishing'],
      formsAndUrls: [
        { label: 'New item or modify item form', url: 'https://www.example.com/rum-register/item-proposal/new' },
        { label: 'Unpublish item form', url: 'https://www.example.com/rum-register/unpublish/new' }
      ]
    },
    approvalProcess: {
      description: 'Control body copies a submitted proposal to its deliberation repository, renders a decision and documents its reasoning.',
      criteria: [
        'Check if the proposer is legit and authorized for proposing',
        'Check if there are duplicates in the register',
        'Check if the data entered is accurate and correct'
      ],
      steps: []
    },
    contentManagement: {
      description: 'Register manager monitors the Control body deliberation repository and copies approved proposals to a public read-only repository.',
      versionUpdateRules: [
        { action: 'Addition', versionChange: 'minor version update' },
        { action: 'Major modification', versionChange: 'minor version update' },
        { action: 'Minor modification', versionChange: 'patch version update' },
        { action: 'Unpublishing', versionChange: 'minor version update' }
      ]
    },
    appealProcess: {
      description: 'Proposers may appeal decisions within 30 days.',
      timeframe: '30 days'
    }
  }

  spec.contentRequirements = {
    concepts: [
      {
        name: 'Unit of Measure',
        identifier: 'https://www.example.com/rum-register/concepts/uom',
        description: 'Represents units of measure in the RUM register.',
        attributes: [
          { name: 'Name', type: 'string', required: true },
          { name: 'Identifier', type: 'uri', required: true },
          { name: 'Dimension', type: 'uri', required: true },
          { name: 'Quantity', type: 'uri', required: true },
          { name: 'Representation', type: 'string', required: true },
          { name: 'Source', type: 'uri', required: false }
        ]
      }
    ],
    repositories: [
      { name: 'Proposal Inputs', type: 'proposal-inputs', accessLevel: 'private', description: 'Private repository for proposal submissions' },
      { name: 'Proposal Deliberations', type: 'proposal-deliberations', accessLevel: 'private', description: 'Private repository with control body consideration' },
      { name: 'Published Information', type: 'published-information', accessLevel: 'public', description: 'Public read-only repository with approved proposals' }
    ],
    statuses: {
      validityStatuses: [
        { name: 'Valid', description: 'Contents are valid and suitable for use' },
        { name: 'Invalid', description: 'Contents are invalid and not suitable for use' }
      ],
      publicationStatuses: [
        { name: 'Published', description: 'Item is visible and recommended for use' },
        { name: 'Unpublished', description: 'Item is not visible or not recommended for use' }
      ]
    },
    relations: [
      { name: 'Superseded', description: 'This item has been superseded by another item' }
    ],
    actions: [
      { name: 'Add', description: 'Adding a new concept or item' },
      { name: 'Minor change', description: 'A change that does not affect semantics' },
      { name: 'Major change', description: 'A change that affects semantics or breaks compatibility' },
      { name: 'Unpublish', description: 'Removing an item from public visibility' }
    ]
  }

  spec.otherInformation = {
    contact: {
      name: 'RUM Register Manager',
      email: 'contact@example.com',
      phone: '',
      address: ''
    },
    additionalInformation: ''
  }

  spec.conformanceClaims.registerTypes = ['governed-concept']

  return spec
}

export default createDefaultSpecification
