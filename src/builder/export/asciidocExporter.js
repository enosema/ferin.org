/**
 * AsciiDoc Exporter for Metanorma
 * Generates Metanorma-compatible AsciiDoc output
 */

/**
 * Escape AsciiDoc special characters
 */
function escapeAsciiDoc(text) {
  if (!text) return ''
  return text
    .replace(/\|/g, '\\|')
    .replace(/([<>=])/g, '\\$1')
}

/**
 * Generate document header (Metanorma format)
 */
function generateHeader(meta) {
  const lines = []

  lines.push(`= ${meta.title || 'Register Specification'}`)

  if (meta.identifier) {
    lines.push(`:docidentifier: ${meta.identifier}`)
  }
  if (meta.version) {
    lines.push(`:edition: ${meta.version}`)
  }

  const docStage = meta.status === 'draft' ? 'draft' :
                   meta.status === 'final' ? 'published' :
                   meta.status === 'superseded' ? 'withdrawn' : 'draft'
  lines.push(`:docstage: ${docStage}`)
  lines.push(':language: en')

  if (meta.organization) {
    lines.push(`:publisher: ${meta.organization}`)
  }

  lines.push('')
  lines.push('ifdef::backend-pdf[]')
  lines.push(':toc: left')
  lines.push(':toclevels: 3')
  lines.push('endif::[]')
  lines.push('')

  return lines.join('\n')
}

/**
 * Generate a section with content
 */
function generateSection(title, content, level = 2) {
  const prefix = '='.repeat(level)
  const lines = []

  lines.push(`${prefix} ${title}`)
  lines.push('')

  if (typeof content === 'string') {
    lines.push(content)
  } else if (Array.isArray(content)) {
    lines.push(...content)
  }

  lines.push('')
  return lines.join('\n')
}

/**
 * Generate a definition list
 */
function generateDefinitionList(items) {
  if (!items || items.length === 0) return ''

  const lines = []
  for (const item of items) {
    lines.push(`${item.term}::`)
    lines.push(`  ${escapeAsciiDoc(item.definition)}`)
    if (item.source) {
      lines.push(`  _Source: ${escapeAsciiDoc(item.source)}_`)
    }
    lines.push('')
  }
  return lines.join('\n')
}

/**
 * Generate a bullet list
 */
function generateBulletList(items) {
  if (!items || items.length === 0) return ''

  const lines = []
  for (const item of items) {
    if (typeof item === 'string') {
      lines.push(`* ${escapeAsciiDoc(item)}`)
    } else if (item.name && item.description) {
      lines.push(`* *${escapeAsciiDoc(item.name)}*: ${escapeAsciiDoc(item.description)}`)
    }
  }
  lines.push('')
  return lines.join('\n')
}

/**
 * Generate a table
 */
function generateTable(headers, rows, title = '') {
  const lines = []

  if (title) {
    lines.push(`.${title}`)
  }

  const colCount = headers.length
  const colSpec = ','.repeat(colCount - 1)

  lines.push(`[cols="${colSpec}",options="header"]`)
  lines.push('|===')

  // Header row
  lines.push('| ' + headers.join(' | '))

  // Data rows
  for (const row of rows) {
    lines.push('')
    for (let i = 0; i < row.length; i++) {
      const cell = row[i] || ''
      lines.push(`| ${escapeAsciiDoc(String(cell))}`)
    }
  }

  lines.push('|===')
  lines.push('')

  return lines.join('\n')
}

/**
 * Generate Scope section
 */
function generateScopeSection(scope) {
  const lines = []

  lines.push('== Scope')
  lines.push('')

  if (scope.purpose) {
    lines.push(scope.purpose)
    lines.push('')
  }

  if (scope.contentIncluded) {
    lines.push('The register includes:')
    lines.push('')
    lines.push(scope.contentIncluded)
    lines.push('')
  }

  if (scope.contentExcluded) {
    lines.push('The following are explicitly excluded:')
    lines.push('')
    lines.push(scope.contentExcluded)
    lines.push('')
  }

  if (scope.targetUsers && scope.targetUsers.length > 0) {
    lines.push('*Target users:*')
    lines.push(generateBulletList(scope.targetUsers))
  }

  return lines.join('\n')
}

/**
 * Generate Normative References section
 */
function generateNormativeReferencesSection(references) {
  const lines = []

  lines.push('== Normative references')
  lines.push('')

  if (!references || references.length === 0) {
    lines.push('No normative references specified.')
    lines.push('')
    return lines.join('\n')
  }

  for (const ref of references) {
    let refLine = `* *${escapeAsciiDoc(ref.identifier)}*`
    if (ref.title) {
      refLine += `, ${escapeAsciiDoc(ref.title)}`
    }
    if (ref.url) {
      refLine += ` (${ref.url})`
    }
    lines.push(refLine)
  }
  lines.push('')

  return lines.join('\n')
}

/**
 * Generate Terms and Definitions section
 */
function generateTermsSection(terms) {
  const lines = []

  lines.push('== Terms and definitions')
  lines.push('')

  if (!terms || terms.length === 0) {
    lines.push('For the purposes of this document, the terms and definitions from ISO 19135 apply.')
    lines.push('')
    return lines.join('\n')
  }

  lines.push('For the purposes of this document, the terms and definitions from ISO 19135 and the following apply.')
  lines.push('')

  for (const term of terms) {
    lines.push(`=== ${term.term}`)
    lines.push('')
    lines.push(term.definition)
    if (term.source) {
      lines.push('')
      lines.push(`_Source: ${escapeAsciiDoc(term.source)}_`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

/**
 * Generate Conventions section
 */
function generateConventionsSection(conventions) {
  const lines = []

  lines.push('== Conventions')
  lines.push('')

  // Identifier Scheme
  if (conventions.identifierScheme) {
    lines.push('=== Identification scheme')
    lines.push('')

    if (conventions.identifierScheme.format) {
      lines.push(`This register uses the following identifier format: \`${conventions.identifierScheme.format}\``)
      lines.push('')
    }

    if (conventions.identifierScheme.assignmentRules) {
      lines.push('*Assignment rules:*')
      lines.push(conventions.identifierScheme.assignmentRules)
      lines.push('')
    }

    if (conventions.identifierScheme.persistencePolicy) {
      lines.push('*Persistence policy:*')
      lines.push(conventions.identifierScheme.persistencePolicy)
      lines.push('')
    }

    if (conventions.identifierScheme.examples && conventions.identifierScheme.examples.length > 0) {
      lines.push('*Examples:*')
      lines.push(generateBulletList(conventions.identifierScheme.examples))
    }
  }

  // Versioning Scheme
  if (conventions.versioningScheme) {
    lines.push('=== Versioning scheme')
    lines.push('')

    const schemeMap = {
      'semantic': 'semantic versioning (major.minor.patch)',
      'date-based': 'date-based versioning',
      'sequential': 'sequential versioning',
      'custom': 'custom versioning scheme'
    }

    const scheme = conventions.versioningScheme.scheme || 'semantic'
    lines.push(`This register uses ${schemeMap[scheme] || scheme} for its entries.`)
    lines.push('')

    if (conventions.versioningScheme.majorChangeCriteria) {
      lines.push('*Major change criteria:*')
      lines.push(conventions.versioningScheme.majorChangeCriteria)
      lines.push('')
    }

    if (conventions.versioningScheme.minorChangeCriteria) {
      lines.push('*Minor change criteria:*')
      lines.push(conventions.versioningScheme.minorChangeCriteria)
      lines.push('')
    }
  }

  // Temporal Applicability
  if (conventions.temporalApplicability?.supported) {
    lines.push('=== Temporal applicability')
    lines.push('')

    if (conventions.temporalApplicability.format) {
      lines.push(`Temporal applicability is specified in ${conventions.temporalApplicability.format} format.`)
      lines.push('')
    }

    if (conventions.temporalApplicability.rules && conventions.temporalApplicability.rules.length > 0) {
      lines.push('The following applicability rules are supported:')
      lines.push(generateBulletList(conventions.temporalApplicability.rules))
    }
  }

  return lines.join('\n')
}

/**
 * Generate Audience and Accessibility section
 */
function generateAudienceSection(audience) {
  const lines = []

  lines.push('== Audience and accessibility')
  lines.push('')

  // Audience
  lines.push('=== Audience')
  lines.push('')

  if (audience.targetAudience && audience.targetAudience.length > 0) {
    lines.push('The register serves the following user groups:')
    lines.push(generateBulletList(audience.targetAudience))
  }

  if (audience.accessLevel) {
    const accessMap = {
      'public': 'publicly accessible',
      'restricted': 'access restricted to authorized users',
      'private': 'private access only'
    }
    lines.push(`The register is ${accessMap[audience.accessLevel] || audience.accessLevel}.`)
    lines.push('')
  }

  // Accessibility
  if (audience.accessibilityRequirements) {
    lines.push('=== Accessibility')
    lines.push('')
    lines.push(audience.accessibilityRequirements)
    lines.push('')
  }

  // Languages
  if (audience.languagesSupported && audience.languagesSupported.length > 0) {
    lines.push('*Languages supported:*')
    lines.push(generateBulletList(audience.languagesSupported))
  }

  return lines.join('\n')
}

/**
 * Generate Roles and Responsibilities section
 */
function generateRolesSection(roles) {
  const lines = []

  lines.push('== Roles and responsibilities')
  lines.push('')

  lines.push('=== General')
  lines.push('')
  lines.push('There are 6 roles defined in this register.')
  lines.push('')

  const roleOrder = ['registerOwner', 'registerManager', 'systemManager', 'controlBody', 'proposer', 'user']
  const roleNames = {
    registerOwner: 'Register owner',
    registerManager: 'Register manager',
    systemManager: 'Register system manager',
    controlBody: 'Control body',
    proposer: 'Proposer',
    user: 'Register user'
  }
  const roleGroups = {
    'Content management roles': ['registerOwner', 'registerManager', 'systemManager'],
    'Content control roles': ['controlBody', 'proposer'],
    'Access roles': ['user']
  }

  for (const [groupName, roleKeys] of Object.entries(roleGroups)) {
    lines.push(`=== ${groupName}`)
    lines.push('')

    for (const roleKey of roleKeys) {
      const role = roles[roleKey]
      if (!role) continue

      lines.push(`==== ${roleNames[roleKey]}`)
      lines.push('')

      if (role.description) {
        lines.push(role.description)
        lines.push('')
      }

      if (role.name || role.organization) {
        const info = [role.name, role.organization].filter(Boolean).join(', ')
        lines.push(`*Contact:* ${info}`)
        lines.push('')
      }

      if (role.responsibilities && role.responsibilities.length > 0) {
        lines.push('*Responsibilities:*')
        lines.push(generateBulletList(role.responsibilities))
      }

      if (role.isoClause) {
        lines.push(`NOTE: This clause satisfies ISO 19135:2025, identifier:[${role.isoClause}].`)
        lines.push('')
      }
    }
  }

  return lines.join('\n')
}

/**
 * Generate Governance Processes section
 */
function generateGovernanceSection(governance) {
  const lines = []

  lines.push('== Governance processes')
  lines.push('')

  // Proposal Process
  if (governance.proposalProcess) {
    lines.push('=== Proposal process')
    lines.push('')

    if (governance.proposalProcess.description) {
      lines.push(governance.proposalProcess.description)
      lines.push('')
    }

    if (governance.proposalProcess.allowedActions && governance.proposalProcess.allowedActions.length > 0) {
      lines.push('The proposer may propose:')
      lines.push(generateBulletList(governance.proposalProcess.allowedActions))
    }

    if (governance.proposalProcess.formsAndUrls && governance.proposalProcess.formsAndUrls.length > 0) {
      lines.push('*Proposal forms:*')
      lines.push('')
      for (const form of governance.proposalProcess.formsAndUrls) {
        lines.push(`* ${form.label}: ${form.url}`)
      }
      lines.push('')
    }

    lines.push('NOTE: This clause satisfies ISO 19135:2025, identifier:[/req/proposal-process].')
    lines.push('')
  }

  // Approval Process
  if (governance.approvalProcess) {
    lines.push('=== Approval process')
    lines.push('')

    if (governance.approvalProcess.description) {
      lines.push(governance.approvalProcess.description)
      lines.push('')
    }

    if (governance.approvalProcess.criteria && governance.approvalProcess.criteria.length > 0) {
      lines.push('*Approval criteria:*')
      lines.push(generateBulletList(governance.approvalProcess.criteria))
    }

    if (governance.approvalProcess.steps && governance.approvalProcess.steps.length > 0) {
      lines.push('*Process steps:*')
      lines.push('')
      for (let i = 0; i < governance.approvalProcess.steps.length; i++) {
        const step = governance.approvalProcess.steps[i]
        lines.push(`. ${step.action}: ${step.description}`)
      }
      lines.push('')
    }

    lines.push('NOTE: This clause satisfies ISO 19135:2025, identifier:[/req/approval-process].')
    lines.push('')
  }

  // Content Management
  if (governance.contentManagement) {
    lines.push('=== Content management process')
    lines.push('')

    if (governance.contentManagement.description) {
      lines.push(governance.contentManagement.description)
      lines.push('')
    }

    if (governance.contentManagement.versionUpdateRules && governance.contentManagement.versionUpdateRules.length > 0) {
      lines.push('Version update rules:')
      lines.push('')
      for (const rule of governance.contentManagement.versionUpdateRules) {
        lines.push(`* ${rule.action}: ${rule.versionChange}`)
      }
      lines.push('')
    }

    lines.push('NOTE: This clause satisfies ISO 19135:2025, identifier:[/req/content-management-process].')
    lines.push('')
  }

  // Appeal Process
  if (governance.appealProcess?.description) {
    lines.push('=== Appeal process')
    lines.push('')
    lines.push(governance.appealProcess.description)
    lines.push('')

    if (governance.appealProcess.timeframe) {
      lines.push(`*Timeframe:* ${governance.appealProcess.timeframe}`)
      lines.push('')
    }
  }

  return lines.join('\n')
}

/**
 * Generate Content Requirements section
 */
function generateContentRequirementsSection(content) {
  const lines = []

  lines.push('== Content requirements')
  lines.push('')

  lines.push('=== General')
  lines.push('')
  lines.push('This clause describes requirements of managed content within the register.')
  lines.push('')

  // Statuses
  if (content.statuses) {
    lines.push('=== Statuses')
    lines.push('')

    if (content.statuses.validityStatuses && content.statuses.validityStatuses.length > 0) {
      lines.push('==== Validity statuses')
      lines.push(generateBulletList(content.statuses.validityStatuses.map(s =>
        `${s.name}: ${s.description}`
      )))
    }

    if (content.statuses.publicationStatuses && content.statuses.publicationStatuses.length > 0) {
      lines.push('==== Publication statuses')
      lines.push(generateBulletList(content.statuses.publicationStatuses.map(s =>
        `${s.name}: ${s.description}`
      )))
    }
  }

  // Relations
  if (content.relations && content.relations.length > 0) {
    lines.push('=== Relations')
    lines.push(generateBulletList(content.relations.map(r =>
      `${r.name}: ${r.description}`
    )))
  }

  // Actions
  if (content.actions && content.actions.length > 0) {
    lines.push('=== Actions on concepts')
    lines.push(generateBulletList(content.actions.map(a =>
      `${a.name}: ${a.description}`
    )))
  }

  // Concepts
  if (content.concepts && content.concepts.length > 0) {
    lines.push('=== Concepts')
    lines.push('')

    for (const concept of content.concepts) {
      lines.push(`==== Concept: ${concept.name}`)
      lines.push('')

      if (concept.identifier) {
        lines.push(`Identifier: \`${concept.identifier}\``)
        lines.push('')
      }

      if (concept.description) {
        lines.push(concept.description)
        lines.push('')
      }

      if (concept.attributes && concept.attributes.length > 0) {
        const rows = concept.attributes.map(attr => [
          attr.name,
          attr.type,
          attr.multiplicity || '1',
          attr.description
        ])
        lines.push(generateTable(
          ['Attribute', 'Value type', 'Multiplicity', 'Description'],
          rows,
          `${concept.name} concept attributes`
        ))
      }
    }
  }

  // Repositories
  if (content.repositories && content.repositories.length > 0) {
    lines.push('=== Content repositories')
    lines.push('')

    for (const repo of content.repositories) {
      lines.push(`==== ${repo.name}`)
      lines.push('')
      lines.push(`Type: ${repo.type}`)
      lines.push(`Access: ${repo.accessLevel}`)
      lines.push('')
      lines.push(repo.description)
      lines.push('')
    }
  }

  return lines.join('\n')
}

/**
 * Generate Other Information section
 */
function generateOtherInfoSection(info) {
  const lines = []

  lines.push('== Other information')
  lines.push('')

  if (info.operator) {
    lines.push(`The register is operated by ${info.operator}.`)
    lines.push('')
  }

  if (info.contact) {
    lines.push('The register manager can be contacted at:')
    lines.push('')

    if (info.contact.name) {
      lines.push(`* Name: ${info.contact.name}`)
    }
    if (info.contact.email) {
      lines.push(`* Email: ${info.contact.email}`)
    }
    if (info.contact.phone) {
      lines.push(`* Phone: ${info.contact.phone}`)
    }
    lines.push('')
  }

  if (info.accessLocation) {
    lines.push('*Official website:*')
    lines.push('')
    lines.push(`* ${info.accessLocation}`)
    lines.push('')
  }

  if (info.additionalInformation) {
    lines.push(info.additionalInformation)
    lines.push('')
  }

  return lines.join('\n')
}

/**
 * Generate Bibliography section
 */
function generateBibliographySection(bibliography) {
  const lines = []

  lines.push('== Bibliography')
  lines.push('')

  if (!bibliography || bibliography.length === 0) {
    lines.push('No informative references specified.')
    lines.push('')
    return lines.join('\n')
  }

  for (const entry of bibliography) {
    let line = `* *${entry.identifier || 'Reference'}*`
    if (entry.title) {
      line += `, ${escapeAsciiDoc(entry.title)}`
    }
    if (entry.url) {
      line += ` (${entry.url})`
    }
    lines.push(line)
  }
  lines.push('')

  return lines.join('\n')
}

/**
 * Generate Conformance Claims section
 */
function generateConformanceSection(claims) {
  const lines = []

  lines.push('== Conformance claims')
  lines.push('')

  if (claims.registerTypes && claims.registerTypes.length > 0) {
    lines.push('This register claims conformance to the following register types:')
    lines.push(generateBulletList(claims.registerTypes))
  }

  if (claims.iso19135Version) {
    lines.push(`This specification conforms to ISO 19135:${claims.iso19135Version}.`)
    lines.push('')
  }

  return lines.join('\n')
}

/**
 * Main export function - generates complete AsciiDoc document
 */
export function exportToAsciiDoc(specification) {
  const sections = []

  // Document header
  sections.push(generateHeader(specification.documentMetadata || {}))

  // Scope
  sections.push(generateScopeSection(specification.scope || {}))

  // Normative References
  sections.push(generateNormativeReferencesSection(specification.normativeReferences))

  // Terms and Definitions
  sections.push(generateTermsSection(specification.termsAndDefinitions))

  // Conventions
  sections.push(generateConventionsSection(specification.conventions || {}))

  // Audience and Accessibility
  sections.push(generateAudienceSection(specification.audienceAndAccessibility || {}))

  // Roles and Responsibilities
  sections.push(generateRolesSection(specification.rolesAndResponsibilities || {}))

  // Governance Processes
  sections.push(generateGovernanceSection(specification.governanceProcesses || {}))

  // Content Requirements
  sections.push(generateContentRequirementsSection(specification.contentRequirements || {}))

  // Other Information
  sections.push(generateOtherInfoSection(specification.otherInformation || {}))

  // Bibliography
  sections.push(generateBibliographySection(specification.bibliography))

  // Conformance Claims
  sections.push(generateConformanceSection(specification.conformanceClaims || {}))

  return sections.join('\n')
}

export default exportToAsciiDoc
