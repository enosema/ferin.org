/**
 * useSeo Composable
 *
 * Provides SEO meta management using @unhead/vue with Schema.org support.
 * Works with vite-ssg's built-in head management.
 */

import { useHead } from '@unhead/vue'
import { getCurrentInstance, onMounted } from 'vue'
import {
  generatePageMeta,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebSiteSchema
} from '@/utils/seoHelpers.js'
import { useSiteConfig } from './useContent.js'

/**
 * Safely call useHead only when in Vue component context
 * @param {object} config
 */
function safeUseHead(config) {
  // Only call useHead if we're in a Vue component context
  const instance = getCurrentInstance()
  if (instance) {
    useHead(config)
  }
}

/**
 * Set page SEO metadata
 * @param {object} options
 * @param {string} [options.title] - Page title
 * @param {string} [options.description] - Page description
 * @param {string} options.path - Page path (e.g., /learn/core-concepts)
 * @param {string} [options.image] - OG image path
 * @param {string} [options.type] - Page type
 */
export function usePageSeo(options) {
  const siteConfig = useSiteConfig()

  const applyMeta = () => {
    const site = siteConfig.value
    if (!site) return

    const meta = generatePageMeta({
      title: options.title,
      description: options.description,
      path: options.path,
      site,
      image: options.image,
      type: options.type
    })

    safeUseHead(meta)
  }

  // Apply immediately if site config is loaded
  if (siteConfig.value) {
    applyMeta()
  } else {
    // Wait for site config to load
    onMounted(applyMeta)
  }
}

/**
 * Add Schema.org structured data to the page
 * @param {object} schema - Schema.org JSON-LD object
 */
export function useSchemaOrg(schema) {
  safeUseHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
}

/**
 * Add article schema to a page
 * @param {object} options
 */
export function useArticleSchema(options) {
  const siteConfig = useSiteConfig()

  onMounted(() => {
    const site = siteConfig.value
    if (!site) return

    const schema = generateArticleSchema({
      ...options,
      site
    })
    useSchemaOrg(schema)
  })
}

/**
 * Add breadcrumb schema to a page
 * @param {Array<{label: string, path: string}>} items
 */
export function useBreadcrumbSchema(items) {
  const siteConfig = useSiteConfig()

  onMounted(() => {
    const site = siteConfig.value
    if (!site) return

    const schema = generateBreadcrumbSchema(items, site)
    useSchemaOrg(schema)
  })
}

/**
 * Initialize global SEO (call once in App.vue)
 */
export function useGlobalSeo() {
  const siteConfig = useSiteConfig()

  onMounted(() => {
    const site = siteConfig.value
    if (!site) return

    // Website schema
    useSchemaOrg(generateWebSiteSchema(site))

    // Organization schema
    useSchemaOrg(generateOrganizationSchema(site))

    // Global defaults
    safeUseHead({
      htmlAttrs: {
        lang: site.language || 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0d9488' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    })
  })
}

/**
 * Generate canonical URL for current page
 * @param {string} path
 * @returns {string}
 */
export function getCanonicalUrl(path) {
  const siteConfig = useSiteConfig()
  const site = siteConfig.value
  return site ? `${site.url}${path}` : path
}
