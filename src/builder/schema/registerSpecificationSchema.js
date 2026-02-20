/**
 * JSON Schema for ISO 19135 Register Specification
 * Based on ISO 19135:2025 Annex RUM template structure
 */

export const registerSpecificationSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  title: 'Register Specification',
  description: 'ISO 19135 compliant register specification document',

  properties: {
    // Section 1: Scope
    scope: {
      type: 'object',
      title: 'Scope',
      description: 'Defines the purpose and boundaries of the register',
      properties: {
        purpose: {
          type: 'string',
          title: 'Purpose',
          description: 'The overall purpose and intent of the register',
          minLength: 10
        },
        contentIncluded: {
          type: 'string',
          title: 'Content Included',
          description: 'Types of content that are included in the register'
        },
        contentExcluded: {
          type: 'string',
          title: 'Content Excluded',
          description: 'Types of content that are explicitly excluded from the register'
        },
        targetUsers: {
          type: 'array',
          title: 'Target Users',
          description: 'Categories of users the register serves',
          items: {
            type: 'string'
          }
        }
      },
      required: ['purpose']
    },

    // Section 2: Normative References
    normativeReferences: {
      type: 'array',
      title: 'Normative References',
      description: 'Standards and documents that must be followed',
      items: {
        type: 'object',
        title: 'Reference',
        properties: {
          identifier: {
            type: 'string',
            title: 'Identifier',
            description: 'Standard identifier (e.g., ISO 19135:2025)'
          },
          title: {
            type: 'string',
            title: 'Title',
            description: 'Full title of the referenced document'
          },
          url: {
            type: 'string',
            format: 'uri',
            title: 'URL',
            description: 'Link to the referenced document'
          }
        },
        required: ['identifier', 'title']
      }
    },

    // Section 3: Terms and Definitions
    termsAndDefinitions: {
      type: 'array',
      title: 'Terms and Definitions',
      description: 'Custom terms and definitions used in this specification',
      items: {
        type: 'object',
        title: 'Term Definition',
        properties: {
          term: {
            type: 'string',
            title: 'Term',
            description: 'The term being defined'
          },
          definition: {
            type: 'string',
            title: 'Definition',
            description: 'The definition of the term'
          },
          source: {
            type: 'string',
            title: 'Source',
            description: 'Source of the definition if borrowed from another document'
          }
        },
        required: ['term', 'definition']
      }
    },

    // Section 4: Conventions
    conventions: {
      type: 'object',
      title: 'Conventions',
      description: 'Identification and versioning conventions used',
      properties: {
        identifierScheme: {
          type: 'object',
          title: 'Identifier Scheme',
          description: 'How items in the register are identified',
          properties: {
            format: {
              type: 'string',
              title: 'Identifier Format',
              description: 'Pattern or format for identifiers (e.g., URN, URI, UUID)'
            },
            assignmentRules: {
              type: 'string',
              title: 'Assignment Rules',
              description: 'Rules for how identifiers are assigned'
            },
            persistencePolicy: {
              type: 'string',
              title: 'Persistence Policy',
              description: 'Policy on identifier persistence across changes'
            },
            examples: {
              type: 'array',
              title: 'Examples',
              items: { type: 'string' }
            }
          }
        },
        versioningScheme: {
          type: 'object',
          title: 'Versioning Scheme',
          description: 'How versions are managed',
          properties: {
            scheme: {
              type: 'string',
              title: 'Scheme Type',
              enum: ['semantic', 'date-based', 'sequential', 'custom'],
              default: 'semantic'
            },
            format: {
              type: 'string',
              title: 'Version Format',
              description: 'Format of version numbers (e.g., major.minor.patch)'
            },
            majorChangeCriteria: {
              type: 'string',
              title: 'Major Change Criteria',
              description: 'What constitutes a major (breaking) change'
            },
            minorChangeCriteria: {
              type: 'string',
              title: 'Minor Change Criteria',
              description: 'What constitutes a minor (non-breaking) change'
            },
            compatibilityPolicy: {
              type: 'string',
              title: 'Compatibility Policy',
              description: 'Policy for maintaining backward compatibility'
            }
          }
        },
        temporalApplicability: {
          type: 'object',
          title: 'Temporal Applicability',
          description: 'How time-based validity is handled',
          properties: {
            supported: {
              type: 'boolean',
              title: 'Supported',
              default: false
            },
            format: {
              type: 'string',
              title: 'Format',
              description: 'Date/time format used (e.g., ISO 8601)'
            },
            rules: {
              type: 'array',
              title: 'Applicability Rules',
              items: { type: 'string' }
            }
          }
        }
      }
    },

    // Section 5: Audience and Accessibility
    audienceAndAccessibility: {
      type: 'object',
      title: 'Audience and Accessibility',
      properties: {
        targetAudience: {
          type: 'array',
          title: 'Target Audience',
          description: 'Categories of intended users',
          items: { type: 'string' }
        },
        accessibilityRequirements: {
          type: 'string',
          title: 'Accessibility Requirements',
          description: 'Accessibility standards or guidelines followed (e.g., Section 508, WCAG)'
        },
        languagesSupported: {
          type: 'array',
          title: 'Languages Supported',
          description: 'Languages the register content is available in',
          items: { type: 'string' }
        },
        accessLevel: {
          type: 'string',
          title: 'Access Level',
          enum: ['public', 'restricted', 'private'],
          default: 'public'
        }
      }
    },

    // Section 6: Roles and Responsibilities
    rolesAndResponsibilities: {
      type: 'object',
      title: 'Roles and Responsibilities',
      description: 'The six roles defined in ISO 19135',
      properties: {
        registerOwner: {
          $ref: '#/definitions/role'
        },
        registerManager: {
          $ref: '#/definitions/role'
        },
        systemManager: {
          $ref: '#/definitions/role'
        },
        controlBody: {
          $ref: '#/definitions/role'
        },
        proposer: {
          $ref: '#/definitions/role'
        },
        user: {
          $ref: '#/definitions/role'
        }
      }
    },

    // Section 7: Governance Processes
    governanceProcesses: {
      type: 'object',
      title: 'Governance Processes',
      properties: {
        proposalProcess: {
          type: 'object',
          title: 'Proposal Process',
          properties: {
            description: {
              type: 'string',
              title: 'Description',
              description: 'How proposals are submitted and initially processed'
            },
            allowedActions: {
              type: 'array',
              title: 'Allowed Actions',
              items: { type: 'string' }
            },
            formsAndUrls: {
              type: 'array',
              title: 'Forms and URLs',
              items: {
                type: 'object',
                properties: {
                  label: { type: 'string' },
                  url: { type: 'string', format: 'uri' }
                }
              }
            }
          }
        },
        approvalProcess: {
          type: 'object',
          title: 'Approval Process',
          properties: {
            description: {
              type: 'string',
              title: 'Description'
            },
            criteria: {
              type: 'array',
              title: 'Approval Criteria',
              items: { type: 'string' }
            },
            steps: {
              type: 'array',
              title: 'Process Steps',
              items: {
                type: 'object',
                properties: {
                  action: { type: 'string' },
                  description: { type: 'string' }
                }
              }
            }
          }
        },
        contentManagement: {
          type: 'object',
          title: 'Content Management Process',
          properties: {
            description: {
              type: 'string',
              title: 'Description'
            },
            versionUpdateRules: {
              type: 'array',
              title: 'Version Update Rules',
              items: {
                type: 'object',
                properties: {
                  action: { type: 'string' },
                  versionChange: { type: 'string' }
                }
              }
            }
          }
        },
        appealProcess: {
          type: 'object',
          title: 'Appeal Process',
          properties: {
            description: {
              type: 'string',
              title: 'Description',
              description: 'Process for appealing decisions'
            },
            timeframe: {
              type: 'string',
              title: 'Timeframe'
            }
          }
        }
      }
    },

    // Section 8: Content Requirements
    contentRequirements: {
      type: 'object',
      title: 'Content Requirements',
      properties: {
        concepts: {
          type: 'array',
          title: 'Concepts',
          description: 'Types of concepts managed in the register',
          items: {
            type: 'object',
            title: 'Concept',
            properties: {
              name: {
                type: 'string',
                title: 'Concept Name'
              },
              identifier: {
                type: 'string',
                title: 'Concept Identifier'
              },
              description: {
                type: 'string',
                title: 'Description'
              },
              attributes: {
                type: 'array',
                title: 'Attributes',
                items: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    type: { type: 'string' },
                    required: { type: 'boolean' },
                    description: { type: 'string' },
                    multiplicity: { type: 'string' }
                  }
                }
              }
            }
          }
        },
        statuses: {
          type: 'object',
          title: 'Statuses',
          properties: {
            validityStatuses: {
              type: 'array',
              title: 'Validity Statuses',
              items: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  description: { type: 'string' }
                }
              }
            },
            publicationStatuses: {
              type: 'array',
              title: 'Publication Statuses',
              items: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  description: { type: 'string' }
                }
              }
            }
          }
        },
        relations: {
          type: 'array',
          title: 'Relations',
          description: 'Types of relationships between register items',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              description: { type: 'string' },
              sourceType: { type: 'string' },
              targetType: { type: 'string' }
            }
          }
        },
        actions: {
          type: 'array',
          title: 'Actions',
          description: 'Actions that can be performed on register items',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              description: { type: 'string' }
            }
          }
        },
        repositories: {
          type: 'array',
          title: 'Content Repositories',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              type: {
                type: 'string',
                enum: ['proposal-input', 'proposal-deliberation', 'published', 'other']
              },
              description: { type: 'string' },
              accessLevel: { type: 'string' }
            }
          }
        }
      }
    },

    // Section 9: Other Information
    otherInformation: {
      type: 'object',
      title: 'Other Information',
      properties: {
        operator: {
          type: 'string',
          title: 'Operator',
          description: 'Organization that operates the register'
        },
        contact: {
          type: 'object',
          title: 'Contact Information',
          properties: {
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
            phone: { type: 'string' },
            address: { type: 'string' }
          }
        },
        accessLocation: {
          type: 'string',
          format: 'uri',
          title: 'Access Location',
          description: 'URL where the register can be accessed'
        },
        additionalInformation: {
          type: 'string',
          title: 'Additional Information'
        }
      }
    },

    // Section 10: Bibliography
    bibliography: {
      type: 'array',
      title: 'Bibliography',
      description: 'Informative references (non-normative)',
      items: {
        type: 'object',
        title: 'Bibliographic Entry',
        properties: {
          identifier: { type: 'string' },
          title: { type: 'string' },
          url: { type: 'string', format: 'uri' }
        }
      }
    },

    // Section 11: Conformance Claims
    conformanceClaims: {
      type: 'object',
      title: 'Conformance Claims',
      properties: {
        registerTypes: {
          type: 'array',
          title: 'Register Types',
          description: 'Types of register implementation claimed',
          items: {
            type: 'string',
            enum: [
              'content',
              'concept',
              'governed-content',
              'governed-concept',
              'ccr'
            ]
          }
        },
        iso19135Version: {
          type: 'string',
          title: 'ISO 19135 Version',
          default: '2025'
        }
      }
    },

    // Document metadata (for export purposes)
    documentMetadata: {
      type: 'object',
      title: 'Document Metadata',
      properties: {
        title: {
          type: 'string',
          title: 'Specification Title',
          description: 'Full title of this register specification document'
        },
        abbreviation: {
          type: 'string',
          title: 'Abbreviation',
          description: 'Short name or acronym for the register'
        },
        identifier: {
          type: 'string',
          title: 'Document Identifier',
          description: 'Unique identifier for this specification document'
        },
        version: {
          type: 'string',
          title: 'Version',
          default: '1.0.0',
          pattern: '^\\d+\\.\\d+\\.\\d+$'
        },
        date: {
          type: 'string',
          format: 'date',
          title: 'Document Date'
        },
        status: {
          type: 'string',
          title: 'Document Status',
          enum: ['draft', 'final', 'superseded', 'withdrawn'],
          default: 'draft'
        },
        organization: {
          type: 'string',
          title: 'Responsible Organization'
        }
      },
      required: ['title']
    }
  },

  definitions: {
    role: {
      type: 'object',
      title: 'Role',
      properties: {
        name: {
          type: 'string',
          title: 'Name/Title',
          description: 'Name or title of the person or body'
        },
        organization: {
          type: 'string',
          title: 'Organization',
          description: 'Organization they represent'
        },
        description: {
          type: 'string',
          title: 'Description',
          description: 'Description of this role in the register context'
        },
        responsibilities: {
          type: 'array',
          title: 'Responsibilities',
          items: { type: 'string' }
        },
        contact: {
          type: 'object',
          properties: {
            email: { type: 'string', format: 'email' },
            url: { type: 'string', format: 'uri' }
          }
        },
        isoClause: {
          type: 'string',
          title: 'ISO 19135 Clause',
          description: 'Reference to the ISO 19135 requirement this satisfies'
        }
      }
    }
  }
}

/**
 * Section definitions for UI rendering
 */
export const sectionDefinitions = [
  {
    id: 'documentMetadata',
    key: 'documentMetadata',
    title: 'Register Metadata',
    description: 'Basic information about this specification document',
    icon: 'file-text',
    required: true
  },
  {
    id: 'scope',
    key: 'scope',
    title: 'Scope',
    description: 'Purpose and boundaries of the register',
    icon: 'target',
    required: true
  },
  {
    id: 'normativeReferences',
    key: 'normativeReferences',
    title: 'Normative References',
    description: 'Required standards and documents',
    icon: 'book',
    required: false
  },
  {
    id: 'termsAndDefinitions',
    key: 'termsAndDefinitions',
    title: 'Terms and Definitions',
    description: 'Custom terminology for this register',
    icon: 'list',
    required: false
  },
  {
    id: 'conventions',
    key: 'conventions',
    title: 'Conventions',
    description: 'Identifier and versioning schemes',
    icon: 'settings',
    required: true
  },
  {
    id: 'audienceAndAccessibility',
    key: 'audienceAndAccessibility',
    title: 'Audience and Accessibility',
    description: 'Target users and accessibility requirements',
    icon: 'users',
    required: true
  },
  {
    id: 'rolesAndResponsibilities',
    key: 'rolesAndResponsibilities',
    title: 'Roles and Responsibilities',
    description: 'Define entities and assign them to ISO 19135 roles',
    icon: 'user-check',
    required: true
  },
  {
    id: 'commitments',
    key: 'commitments',
    title: 'Commitments',
    description: 'Access, persistence, and transparency commitments',
    icon: 'shield',
    required: true
  },
  {
    id: 'governanceProcesses',
    key: 'governanceProcesses',
    title: 'Governance Processes',
    description: 'Proposal, approval, and content management processes',
    icon: 'git-branch',
    required: true
  },
  {
    id: 'contentRequirements',
    key: 'contentRequirements',
    title: 'Content Requirements',
    description: 'Concepts, statuses, relations, and actions',
    icon: 'database',
    required: true
  },
  {
    id: 'otherInformation',
    key: 'otherInformation',
    title: 'Contact Information',
    description: 'Contact details',
    icon: 'info',
    required: false
  },
  {
    id: 'bibliography',
    key: 'bibliography',
    title: 'Bibliography',
    description: 'Informative references',
    icon: 'book-open',
    required: false
  }
]

export default registerSpecificationSchema
