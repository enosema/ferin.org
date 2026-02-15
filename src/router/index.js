/**
 * Vue Router Configuration
 *
 * Route definitions for SSG with vite-ssg
 */

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  // About section
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
  // Learn section
  {
    path: '/learn',
    name: 'learn',
    component: () => import('@/views/LearnView.vue'),
    children: [
      {
        path: '',
        name: 'learn-index',
        redirect: '/learn/core-concepts'
      },
      {
        path: 'core-concepts',
        name: 'core-concepts',
        component: () => import('@/views/learn/CoreConceptsView.vue')
      },
      {
        path: 'principles',
        name: 'principles',
        component: () => import('@/views/learn/PrinciplesView.vue')
      },
      {
        path: 'framework',
        name: 'framework',
        component: () => import('@/views/learn/FrameworkView.vue')
      },
      {
        path: 'register-types',
        name: 'register-types',
        component: () => import('@/views/learn/RegisterTypesView.vue')
      },
      {
        path: 'governance',
        name: 'governance',
        component: () => import('@/views/learn/GovernanceView.vue')
      },
      {
        path: 'risk-management',
        name: 'risk-management',
        component: () => import('@/views/learn/RiskManagementView.vue')
      },
      {
        path: 'composite-registers',
        name: 'composite-registers',
        component: () => import('@/views/learn/CompositeRegistersView.vue')
      },
      {
        path: 'schema-evolution',
        name: 'schema-evolution',
        component: () => import('@/views/learn/SchemaEvolutionView.vue')
      },
      {
        path: 'temporal-data',
        name: 'temporal-data',
        component: () => import('@/views/learn/TemporalDataView.vue')
      },
      {
        path: 'semantic-interoperability',
        name: 'semantic-interoperability',
        component: () => import('@/views/learn/SemanticInteroperabilityView.vue')
      }
    ]
  },
  // Build section
  {
    path: '/build',
    name: 'build',
    component: () => import('@/views/BuildView.vue'),
    children: [
      {
        path: '',
        name: 'build-index',
        redirect: '/build/getting-started'
      },
      {
        path: 'getting-started',
        name: 'getting-started',
        component: () => import('@/views/build/GettingStartedView.vue')
      },
      {
        path: 'identifier-design',
        name: 'identifier-design',
        component: () => import('@/views/build/IdentifierDesignView.vue')
      },
      {
        path: 'versioning',
        name: 'versioning',
        component: () => import('@/views/build/VersioningView.vue')
      },
      {
        path: 'actions',
        name: 'actions',
        component: () => import('@/views/build/ActionsView.vue')
      },
      {
        path: 'register-specification',
        name: 'register-specification',
        component: () => import('@/views/build/RegisterSpecificationView.vue')
      },
      {
        path: 'migration',
        name: 'migration',
        component: () => import('@/views/build/MigrationView.vue')
      },
      {
        path: 'technology-choices',
        name: 'technology-choices',
        component: () => import('@/views/build/TechnologyChoicesView.vue')
      },
      {
        path: 'integration-patterns',
        name: 'integration-patterns',
        component: () => import('@/views/build/IntegrationPatternsView.vue')
      }
    ]
  },
  // Reference section
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
        path: 'commitments',
        name: 'commitments',
        component: () => import('@/views/reference/CommitmentsView.vue')
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
      },
      {
        path: 'samples',
        name: 'samples',
        component: () => import('@/views/reference/SamplesView.vue')
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
