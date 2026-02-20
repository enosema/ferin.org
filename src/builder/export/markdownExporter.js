/**
 * Markdown Exporter
 * Generates Markdown output for the register specification
 */

/**
 * Escape Markdown special characters
 */
function escapeMarkdown(text) {
  if (!text) return ''
  return text
    .replace(/\*/g, '\\*')
    .replace(/_/g, '\\_')
    .replace(/`/g, '\\`')
}

/**
 * Generate document header
 */
function generateHeader(meta) {
  const lines = []

  lines.push(`# ${meta.title || 'Register Specification'}`)
  lines.push('')

  if (meta.identifier) {
    lines.push(`**Identifier:** ${meta.identifier}`)
  }
  if (meta.version) {
    lines.push(`**Version:** ${meta.version}`)
  }
  if (meta.date) {
    lines.push(`**Date:** ${meta.date}`)
  }
  if (meta.status) {
    lines.push(`**Status:** ${meta.status}`)
  }
  if (meta.organization) {
    lines.push(`**Organization:** ${meta.organization}`)
  }

  lines.push('')

  return lines.join('\n')
}

/**
 * Generate table of contents
 */
function generateToc() {
  const lines = []

  lines.push('## Table of Contents')
  lines.push('')
  lines.push('- [Scope](#scope)')
  lines.push('- [Normative References](#normative-references)')
  lines.push('- [Terms and Definitions](#terms-and-definitions)')
  lines.push('- [Conventions](#conventions)')
  lines.push('  - [Identification Scheme](#identification-scheme)')
  lines.push('  - [Versioning Scheme](#versioning-scheme)')
  lines.push('- [Audience and Accessibility](#audience-and-accessibility)')
  lines.push('- [Roles and Responsibilities](#roles-and-responsibilities)')
  lines.push('- [Governance Processes](#governance-processes)')
  lines.push('- [Content Requirements](#content-requirements)')
  lines.push('- [Other Information](#other-information)')
  lines.push('- [Bibliography](#bibliography)')
  lines.push('- [Conformance Claims](#conformance-claims)')
  lines.push('')

  return lines.join('\n')
}

/**
 * Generate bullet list
 */
function generateBulletList(items) {
  if (!items || items.length === 0) return ''

  const lines = []
  for (const item of items) {
    if (typeof item === 'string') {
      lines.push(`- ${item}`)
    } else if (item.name && item.description) {
      lines.push(`- **${item.name}:** ${item.description}`)
    }
  }
  lines.push('')
  return lines.join('\n')
}

/**
 * Generate numbered list
 */
function generateNumberedList(items) {
  if (!items || items.length === 0) return ''

  const lines = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (typeof item === 'string') {
      lines.push(`${i + 1}. ${item}`)
    } else if (item.action && item.description) {
      lines.push(`${i + 1}. **${item.action}:** ${item.description}`)
    }
  }
  lines.push('')
  return lines.join('\n')
}

/**
 * Generate Markdown table
 */
function generateTable(headers, rows, title = '') {
  const lines = []

  if (title) {
    lines.push(`**${title}**`)
    lines.push('')
  }

  // Header
  lines.push('| ' + headers.join(' | ') + ' |')
  lines.push('| ' + headers.map(() => '---').join(' | ') + ' |')

  // Rows
  for (const row of rows) {
    lines.push('| ' + row.map(cell => cell || '').join(' | ') + ' |')
  }
  lines.push('')

  return lines.join('\n')
}

/**
 * Generate Scope section
 */
function generateScopeSection(scope) {
  const lines = []

  lines.push('## Scope')
  lines.push('')

  if (scope.purpose) {
    lines.push(scope.purpose)
    lines.push('')
  }

  if (scope.contentIncluded) {
    lines.push('### Content Included')
    lines.push('')
    lines.push(scope.contentIncluded)
    lines.push('')
  }

  if (scope.contentExcluded) {
    lines.push('### Content Excluded')
    lines.push('')
    lines.push(scope.contentExcluded)
    lines.push('')
  }

  if (scope.targetUsers && scope.targetUsers.length > 0) {
    lines.push('### Target Users')
    lines.push(generateBulletList(scope.targetUsers))
  }

  return lines.join('\n')
}

/**
 * Generate Normative References section
 */
function generateNormativeReferencesSection(references) {
  const lines = []

  lines.push('## Normative References')
  lines.push('')

  if (!references || references.length === 0) {
    lines.push('No normative references specified.')
    lines.push('')
    return lines.join('\n')
  }

  for (const ref of references) {
    let line = `- **${ref.identifier || 'Reference'}**`
    if (ref.title) {
      line += `, ${ref.title}`
    }
    if (ref.url) {
      line += ` ([${ref.url}](${ref.url}))`
    }
    lines.push(line)
  }
  lines.push('')

  return lines.join('\n')
}

/**
 * Generate Terms and Definitions section
 */
function generateTermsSection(terms) {
  const lines = []

  lines.push('## Terms and Definitions')
  lines.push('')

  if (!terms || terms.length === 0) {
    lines.push('For the purposes of this document, the terms and definitions from ISO 19135 apply.')
    lines.push('')
    return lines.join('\n')
  }

  lines.push('For the purposes of this document, the terms and definitions from ISO 19135 and the following apply.')
  lines.push('')

  for (const term of terms) {
    lines.push(`### ${term.term}`)
    lines.push('')
    lines.push(term.definition)
    if (term.source) {
      lines.push('')
      lines.push(`*Source: ${term.source}*`)
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

  lines.push('## Conventions')
  lines.push('')

  // Identifier Scheme
  if (conventions.identifierScheme) {
    lines.push('### Identification Scheme')
    lines.push('')

    if (conventions.identifierScheme.format) {
      lines.push(`This register uses the following identifier format: \`${conventions.identifierScheme.format}\``)
      lines.push('')
    }

    if (conventions.identifierScheme.assignmentRules) {
      lines.push('**Assignment Rules:**')
      lines.push('')
      lines.push(conventions.identifierScheme.assignmentRules)
      lines.push('')
    }

    if (conventions.identifierScheme.persistencePolicy) {
      lines.push('**Persistence Policy:**')
      lines.push('')
      lines.push(conventions.identifierScheme.persistencePolicy)
      lines.push('')
    }

    if (conventions.identifierScheme.examples && conventions.identifierScheme.examples.length > 0) {
      lines.push('**Examples:**')
      lines.push(generateBulletList(conventions.identifierScheme.examples))
    }
  }

  // Versioning Scheme
  if (conventions.versioningScheme) {
    lines.push('### Versioning Scheme')
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
      lines.push('**Major Change Criteria:**')
      lines.push('')
      lines.push(conventions.versioningScheme.majorChangeCriteria)
      lines.push('')
    }

    if (conventions.versioningScheme.minorChangeCriteria) {
      lines.push('**Minor Change Criteria:**')
      lines.push('')
      lines.push(conventions.versioningScheme.minorChangeCriteria)
      lines.push('')
    }
  }

  // Temporal Applicability
  if (conventions.temporalApplicability?.supported) {
    lines.push('### Temporal Applicability')
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

  lines.push('## Audience and Accessibility')
  lines.push('')

  // Audience
  lines.push('### Audience')
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
    lines.push('### Accessibility')
    lines.push('')
    lines.push(audience.accessibilityRequirements)
    lines.push('')
  }

  // Languages
  if (audience.languagesSupported && audience.languagesSupported.length > 0) {
    lines.push('**Languages Supported:**')
    lines.push(generateBulletList(audience.languagesSupported))
  }

  return lines.join('\n')
}

/**
 * Generate Roles and Responsibilities section
 */
function generateRolesSection(roles) {
  const lines = []

  lines.push('## Roles and Responsibilities')
  lines.push('')

  lines.push('### General')
  lines.push('')
  lines.push('There are 6 roles defined in this register.')
  lines.push('')

  const roleNames = {
    registerOwner: 'Register Owner',
    registerManager: 'Register Manager',
    systemManager: 'System Manager',
    controlBody: 'Control Body',
    proposer: 'Proposer',
    user: 'Register User'
  }

  for (const [key, name] of Object.entries(roleNames)) {
    const role = roles[key]
    if (!role) continue

    lines.push(`### ${name}`)
    lines.push('')

    if (role.description) {
      lines.push(role.description)
      lines.push('')
    }

    if (role.name || role.organization) {
      const info = [role.name, role.organization].filter(Boolean).join(', ')
      lines.push(`**Contact:** ${info}`)
      lines.push('')
    }

    if (role.responsibilities && role.responsibilities.length > 0) {
      lines.push('**Responsibilities:**')
      lines.push(generateBulletList(role.responsibilities))
    }

    if (role.isoClause) {
      lines.push(`> *This satisfies ISO 19135:2025, ${role.isoClause}*`)
      lines.push('')
    }
  }

  return lines.join('\n')
}

/**
 * Generate Governance Processes section
 */
function generateGovernanceSection(governance) {
  const lines = []

  lines.push('## Governance Processes')
  lines.push('')

  // Proposal Process
  if (governance.proposalProcess) {
    lines.push('### Proposal Process')
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
      lines.push('**Proposal Forms:**')
      lines.push('')
      for (const form of governance.proposalProcess.formsAndUrls) {
        lines.push(`- [${form.label}](${form.url})`)
      }
      lines.push('')
    }
  }

  // Approval Process
  if (governance.approvalProcess) {
    lines.push('### Approval Process')
    lines.push('')

    if (governance.approvalProcess.description) {
      lines.push(governance.approvalProcess.description)
      lines.push('')
    }

    if (governance.approvalProcess.criteria && governance.approvalProcess.criteria.length > 0) {
      lines.push('**Approval Criteria:**')
      lines.push(generateBulletList(governance.approvalProcess.criteria))
    }

    if (governance.approvalProcess.steps && governance.approvalProcess.steps.length > 0) {
      lines.push('**Process Steps:**')
      lines.push(generateNumberedList(governance.approvalProcess.steps))
    }
  }

  // Content Management
  if (governance.contentManagement) {
    lines.push('### Content Management Process')
    lines.push('')

    if (governance.contentManagement.description) {
      lines.push(governance.contentManagement.description)
      lines.push('')
    }

    if (governance.contentManagement.versionUpdateRules && governance.contentManagement.versionUpdateRules.length > 0) {
      lines.push('**Version Update Rules:**')
      lines.push('')
      for (const rule of governance.contentManagement.versionUpdateRules) {
        lines.push(`- **${rule.action}:** ${rule.versionChange}`)
      }
      lines.push('')
    }
  }

  // Appeal Process
  if (governance.appealProcess?.description) {
    lines.push('### Appeal Process')
    lines.push('')
    lines.push(governance.appealProcess.description)
    lines.push('')

    if (governance.appealProcess.timeframe) {
      lines.push(`**Timeframe:** ${governance.appealProcess.timeframe}`)
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

  lines.push('## Content Requirements')
  lines.push('')

  // Statuses
  if (content.statuses) {
    lines.push('### Statuses')
    lines.push('')

    if (content.statuses.validityStatuses && content.statuses.validityStatuses.length > 0) {
      lines.push('#### Validity Statuses')
      lines.push(generateTable(
        ['Status', 'Description'],
        content.statuses.validityStatuses.map(s => [s.name, s.description])
      ))
    }

    if (content.statuses.publicationStatuses && content.statuses.publicationStatuses.length > 0) {
      lines.push('#### Publication Statuses')
      lines.push(generateTable(
        ['Status', 'Description'],
        content.statuses.publicationStatuses.map(s => [s.name, s.description])
      ))
    }
  }

  // Relations
  if (content.relations && content.relations.length > 0) {
    lines.push('### Relations')
    lines.push(generateTable(
      ['Relation', 'Description', 'Source', 'Target'],
      content.relations.map(r => [r.name, r.description, r.sourceType, r.targetType])
    ))
  }

  // Actions
  if (content.actions && content.actions.length > 0) {
    lines.push('### Actions')
    lines.push(generateTable(
      ['Action', 'Description'],
      content.actions.map(a => [a.name, a.description])
    ))
  }

  // Concepts
  if (content.concepts && content.concepts.length > 0) {
    lines.push('### Concepts')
    lines.push('')

    for (const concept of content.concepts) {
      lines.push(`#### ${concept.name}`)
      lines.push('')

      if (concept.identifier) {
        lines.push(`**Identifier:** \`${concept.identifier}\``)
        lines.push('')
      }

      if (concept.description) {
        lines.push(concept.description)
        lines.push('')
      }

      if (concept.attributes && concept.attributes.length > 0) {
        lines.push(generateTable(
          ['Attribute', 'Type', 'Required', 'Multiplicity', 'Description'],
          concept.attributes.map(attr => [
            attr.name,
            attr.type,
            attr.required ? 'Yes' : 'No',
            attr.multiplicity || '1',
            attr.description
          ]),
          'Concept Attributes'
        ))
      }
    }
  }

  // Repositories
  if (content.repositories && content.repositories.length > 0) {
    lines.push('### Content Repositories')
    lines.push(generateTable(
      ['Name', 'Type', 'Access', 'Description'],
      content.repositories.map(r => [r.name, r.type, r.accessLevel, r.description])
    ))
  }

  return lines.join('\n')
}

/**
 * Generate Other Information section
 */
function generateOtherInfoSection(info) {
  const lines = []

  lines.push('## Other Information')
  lines.push('')

  if (info.operator) {
    lines.push(`The register is operated by **${info.operator}**.`)
    lines.push('')
  }

  if (info.contact) {
    lines.push('### Contact Information')
    lines.push('')

    if (info.contact.name) {
      lines.push(`- **Name:** ${info.contact.name}`)
    }
    if (info.contact.email) {
      lines.push(`- **Email:** [${info.contact.email}](mailto:${info.contact.email})`)
    }
    if (info.contact.phone) {
      lines.push(`- **Phone:** ${info.contact.phone}`)
    }
    if (info.contact.address) {
      lines.push(`- **Address:** ${info.contact.address}`)
    }
    lines.push('')
  }

  if (info.accessLocation) {
    lines.push('### Access Location')
    lines.push('')
    lines.push(`[${info.accessLocation}](${info.accessLocation})`)
    lines.push('')
  }

  if (info.additionalInformation) {
    lines.push('### Additional Information')
    lines.push('')
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

  lines.push('## Bibliography')
  lines.push('')

  if (!bibliography || bibliography.length === 0) {
    lines.push('No informative references specified.')
    lines.push('')
    return lines.join('\n')
  }

  for (const entry of bibliography) {
    let line = `- **${entry.identifier || 'Reference'}**`
    if (entry.title) {
      line += `, ${entry.title}`
    }
    if (entry.url) {
      line += ` ([link](${entry.url}))`
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

  lines.push('## Conformance Claims')
  lines.push('')

  if (claims.registerTypes && claims.registerTypes.length > 0) {
    lines.push('This register claims conformance to the following register types:')
    lines.push(generateBulletList(claims.registerTypes))
  }

  if (claims.iso19135Version) {
    lines.push(`This specification conforms to **ISO 19135:${claims.iso19135Version}**.`)
    lines.push('')
  }

  return lines.join('\n')
}

/**
 * Main export function - generates complete Markdown document
 */
export function exportToMarkdown(specification) {
  const sections = []

  // Document header
  sections.push(generateHeader(specification.documentMetadata || {}))

  // Table of Contents
  sections.push(generateToc())

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

export default exportToMarkdown
