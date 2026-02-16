/**
 * Vue Router Configuration
 *
 * Route definitions for SSG with vite-ssg
 * Structure: About, Understand, Implement, Conform, Reference
 */

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  // About section (What FERIN Is)
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    children: [
      {
        path: '',
        name: 'about-index',
        redirect: '/about/what-is-ferin'
      },
      {
        path: 'what-is-ferin',
        name: 'what-is-ferin',
        component: () => import('@/views/about/WhatIsFerinView.vue')
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('@/views/about/HistoryView.vue')
      },
      {
        path: 'iso-19135',
        name: 'iso-19135',
        component: () => import('@/views/about/Iso19135View.vue')
      },
      {
        path: 'why-registers',
        name: 'why-registers',
        component: () => import('@/views/about/WhyRegistersView.vue')
      }
    ]
  },
  // Understand section (How to Use FERIN)
  {
    path: '/understand',
    name: 'understand',
    component: () => import('@/views/UnderstandView.vue'),
    children: [
      {
        path: '',
        name: 'understand-index',
        redirect: '/understand/core-concepts'
      },
      {
        path: 'core-concepts',
        name: 'core-concepts',
        component: () => import('@/views/understand/CoreConceptsView.vue')
      },
      {
        path: 'principles',
        name: 'principles',
        component: () => import('@/views/understand/PrinciplesView.vue')
      },
      {
        path: 'framework',
        name: 'framework',
        component: () => import('@/views/understand/FrameworkView.vue')
      },
      {
        path: 'register-types',
        name: 'register-types',
        component: () => import('@/views/understand/RegisterTypesView.vue')
      },
      {
        path: 'composite-registers',
        name: 'composite-registers',
        component: () => import('@/views/understand/CompositeRegistersView.vue')
      },
      {
        path: 'commitments',
        name: 'commitments',
        component: () => import('@/views/understand/CommitmentsView.vue')
      }
    ]
  },
  // Implement section (Building Your Register)
  {
    path: '/implement',
    name: 'implement',
    component: () => import('@/views/ImplementView.vue'),
    children: [
      {
        path: '',
        name: 'implement-index',
        redirect: '/implement/getting-started'
      },
      {
        path: 'getting-started',
        name: 'getting-started',
        component: () => import('@/views/implement/GettingStartedView.vue')
      },
      {
        path: 'identifier-design',
        name: 'identifier-design',
        component: () => import('@/views/implement/IdentifierDesignView.vue')
      },
      {
        path: 'versioning',
        name: 'versioning',
        component: () => import('@/views/implement/VersioningView.vue')
      },
      {
        path: 'actions',
        name: 'actions',
        component: () => import('@/views/implement/ActionsView.vue')
      },
      {
        path: 'register-specification',
        name: 'register-specification',
        component: () => import('@/views/implement/RegisterSpecificationView.vue')
      },
      {
        path: 'migration',
        name: 'migration',
        component: () => import('@/views/implement/MigrationView.vue')
      },
      {
        path: 'technology-choices',
        name: 'technology-choices',
        component: () => import('@/views/implement/TechnologyChoicesView.vue')
      },
      {
        path: 'integration-patterns',
        name: 'integration-patterns',
        component: () => import('@/views/implement/IntegrationPatternsView.vue')
      },
      {
        path: 'governance',
        name: 'governance',
        component: () => import('@/views/implement/GovernanceView.vue')
      },
      {
        path: 'risk-management',
        name: 'risk-management',
        component: () => import('@/views/implement/RiskManagementView.vue')
      },
      {
        path: 'schema-evolution',
        name: 'schema-evolution',
        component: () => import('@/views/implement/SchemaEvolutionView.vue')
      },
      {
        path: 'temporal-data',
        name: 'temporal-data',
        component: () => import('@/views/implement/TemporalDataView.vue')
      },
      {
        path: 'semantic-interoperability',
        name: 'semantic-interoperability',
        component: () => import('@/views/implement/SemanticInteroperabilityView.vue')
      }
    ]
  },
  // Conform section (Certification & Verification)
  {
    path: '/conform',
    name: 'conform',
    component: () => import('@/views/ConformView.vue'),
    children: [
      {
        path: '',
        name: 'conform-index',
        redirect: '/conform/samples'
      },
      {
        path: 'samples',
        name: 'samples',
        component: () => import('@/views/conform/SamplesView.vue')
      }
    ]
  },
  // Reference section (Reference Materials)
  {
    path: '/reference',
    name: 'reference',
    component: () => import('@/views/ReferenceView.vue'),
    children: [
      {
        path: '',
        name: 'reference-index',
        redirect: '/reference/glossary'
      },
      {
        path: 'glossary',
        name: 'glossary',
        component: () => import('@/views/reference/GlossaryView.vue')
      },
      {
        path: 'conceptual-model',
        name: 'conceptual-model',
        component: () => import('@/views/reference/ConceptualModelView.vue')
      },
      {
        path: 'statuses',
        name: 'statuses',
        component: () => import('@/views/reference/StatusesView.vue')
      },
      {
        path: 'relations',
        name: 'relations',
        component: () => import('@/views/reference/RelationsView.vue')
      },
      {
        path: 'anti-patterns',
        name: 'anti-patterns',
        component: () => import('@/views/reference/AntiPatternsView.vue')
      },
      {
        path: 'faq',
        name: 'faq',
        component: () => import('@/views/reference/FaqView.vue')
      }
    ]
  },
  // News section
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/NewsView.vue')
  },
  // 404 - must be last
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  }
]

// Default export for main.js
export default routes
