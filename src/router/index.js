/**
 * Vue Router Configuration
 *
 * Route definitions for SSG with vite-ssg
 * Structure: About, Learn, Build, Upgrade, Reference, News
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
  // Learn section (formerly Understand)
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
        path: 'composite-registers',
        name: 'composite-registers',
        component: () => import('@/views/learn/CompositeRegistersView.vue')
      },
      {
        path: 'commitments',
        name: 'commitments',
        component: () => import('@/views/learn/CommitmentsView.vue')
      },
      {
        path: 'ccr-deep-dive',
        name: 'ccr-deep-dive',
        component: () => import('@/views/learn/CcrDeepDiveView.vue')
      },
      {
        path: 'advanced-concepts',
        name: 'advanced-concepts',
        component: () => import('@/views/learn/AdvancedConceptsView.vue')
      }
    ]
  },
  // Build section (formerly Implement)
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
        path: 'technology-choices',
        name: 'technology-choices',
        component: () => import('@/views/build/TechnologyChoicesView.vue')
      },
      {
        path: 'integration-patterns',
        name: 'integration-patterns',
        component: () => import('@/views/build/IntegrationPatternsView.vue')
      },
      {
        path: 'governance',
        name: 'governance',
        component: () => import('@/views/build/GovernanceView.vue')
      },
      {
        path: 'risk-management',
        name: 'risk-management',
        component: () => import('@/views/build/RiskManagementView.vue')
      },
      {
        path: 'schema-evolution',
        name: 'schema-evolution',
        component: () => import('@/views/build/SchemaEvolutionView.vue')
      },
      {
        path: 'temporal-data',
        name: 'temporal-data',
        component: () => import('@/views/build/TemporalDataView.vue')
      },
      {
        path: 'semantic-interoperability',
        name: 'semantic-interoperability',
        component: () => import('@/views/build/SemanticInteroperabilityView.vue')
      },
      {
        path: 'api-design',
        name: 'api-design',
        component: () => import('@/views/build/ApiDesignView.vue')
      },
      {
        path: 'security',
        name: 'security',
        component: () => import('@/views/build/SecurityView.vue')
      },
      {
        path: 'operations',
        name: 'operations',
        component: () => import('@/views/build/OperationsView.vue')
      },
      {
        path: 'performance',
        name: 'performance',
        component: () => import('@/views/build/PerformanceView.vue')
      },
      {
        path: 'destructive-actions',
        name: 'destructive-actions',
        component: () => import('@/views/build/DestructiveActionsView.vue')
      }
    ]
  },
  // Upgrade section (Migration Guide)
  {
    path: '/upgrade',
    name: 'upgrade',
    component: () => import('@/views/upgrade/IndexView.vue')
  },
  {
    path: '/upgrade/paradigm-shifts',
    name: 'upgrade-paradigm-shifts',
    component: () => import('@/views/upgrade/ParadigmShiftsView.vue')
  },
  {
    path: '/upgrade/terminology',
    name: 'upgrade-terminology',
    component: () => import('@/views/upgrade/TerminologyView.vue')
  },
  {
    path: '/upgrade/conformance',
    name: 'upgrade-conformance',
    component: () => import('@/views/upgrade/ConformanceView.vue')
  },
  {
    path: '/upgrade/status-model',
    name: 'upgrade-status-model',
    component: () => import('@/views/upgrade/StatusModelView.vue')
  },
  {
    path: '/upgrade/data-model',
    name: 'upgrade-data-model',
    component: () => import('@/views/upgrade/DataModelView.vue')
  },
  {
    path: '/upgrade/governance',
    name: 'upgrade-governance',
    component: () => import('@/views/upgrade/GovernanceView.vue')
  },
  {
    path: '/upgrade/paths',
    name: 'upgrade-paths',
    component: () => import('@/views/upgrade/PathsView.vue')
  },
  {
    path: '/upgrade/checklist',
    name: 'upgrade-checklist',
    component: () => import('@/views/upgrade/ChecklistView.vue')
  },
  {
    path: '/upgrade/faq',
    name: 'upgrade-faq',
    component: () => import('@/views/upgrade/FaqView.vue')
  },
  // Reference section (includes former Conform/Samples)
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
      },
      {
        path: 'samples',
        name: 'samples',
        component: () => import('@/views/reference/SamplesView.vue')
      },
      {
        path: 'conformance',
        name: 'reference-conformance',
        component: () => import('@/views/reference/ConformanceView.vue')
      },
      {
        path: 'case-studies',
        name: 'case-studies',
        component: () => import('@/views/reference/CaseStudiesView.vue')
      },
      {
        path: 'specification-templates',
        name: 'specification-templates',
        component: () => import('@/views/reference/SpecificationTemplatesView.vue')
      }
    ]
  },
  // News section
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/NewsView.vue')
  },
  {
    path: '/news/:id',
    name: 'news-detail',
    component: () => import('@/views/NewsDetailView.vue')
  },
  // Legacy redirects for old URLs
  {
    path: '/understand',
    redirect: '/learn'
  },
  {
    path: '/understand/:pathMatch(.*)*',
    redirect: to => `/learn${to.params.pathMatch ? '/' + to.params.pathMatch.join('/') : ''}`
  },
  {
    path: '/implement',
    redirect: '/build'
  },
  {
    path: '/implement/:pathMatch(.*)*',
    redirect: to => `/build${to.params.pathMatch ? '/' + to.params.pathMatch.join('/') : ''}`
  },
  {
    path: '/implement/migration',
    redirect: '/upgrade'
  },
  {
    path: '/implement/migration/:pathMatch(.*)*',
    redirect: to => `/upgrade${to.params.pathMatch ? '/' + to.params.pathMatch.join('/') : ''}`
  },
  {
    path: '/conform',
    redirect: '/reference/samples'
  },
  {
    path: '/conform/:pathMatch(.*)*',
    redirect: to => `/reference${to.params.pathMatch ? '/' + to.params.pathMatch.join('/') : ''}`
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
