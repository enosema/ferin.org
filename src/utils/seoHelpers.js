/**
 * SEO Helper Utilities
 *
 * Utilities for generating SEO metadata, structured data, and sitemaps.
 */

/**
 * Generate page metadata for @unhead/vue
 * @param {object} options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.path - Page path (e.g., /learn/core-concepts)
 * @param {object} options.site - Site configuration
 * @param {string} [options.image] - OG image path
 * @param {string} [options.type] - Page type (website, article)
 * @returns {object} Meta object for useHead
 */
export function generatePageMeta(options) {
  const {
    title,
    description,
    path,
    site,
    image = '/og-image.png',
    type = 'website'
  } = options

  const url = `${site.url}${path}`
  const fullTitle = title ? `${title} | ${site.name}` : site.title

  return {
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: site.name },
      { property: 'og:image', content: `${site.url}${image}` },
      { property: 'og:locale', content: 'en_US' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${site.url}${image}` },

      // Additional SEO
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' }
    ],
    link: [
      { rel: 'canonical', href: url }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  }
}

/**
 * Generate Schema.org structured data for a content page
 * @param {object} options
 * @returns {object} Schema.org JSON-LD object
 */
export function generateArticleSchema(options) {
  const { title, description, path, site, datePublished, dateModified } = options

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${site.url}${path}`,
    datePublished: datePublished || site.standard.published,
    dateModified: dateModified || new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: site.organization.name,
      url: site.organization.url
    },
    publisher: {
      '@type': 'Organization',
      name: site.organization.name,
      url: site.organization.url
    }
  }
}

/**
 * Generate Schema.org structured data for breadcrumb navigation
 * @param {object} options
 * @returns {object} Schema.org JSON-LD object
 */
export function generateBreadcrumbSchema(items, site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.path}`
    }))
  }
}

/**
 * Generate Schema.org structured data for the organization
 * @param {object} site
 * @returns {object} Schema.org JSON-LD object
 */
export function generateOrganizationSchema(site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.organization.name,
    url: site.organization.url,
    sameAs: site.social?.map(s => s.url) || []
  }
}

/**
 * Generate Schema.org structured data for the website
 * @param {object} site
 * @returns {object} Schema.org JSON-LD object
 */
export function generateWebSiteSchema(site) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      '@type': 'Organization',
      name: site.organization.name
    }
  }
}

/**
 * Generate sitemap entries from routes
 * @param {array} routes - Vue Router routes
 * @param {object} site - Site configuration
 * @returns {string} XML sitemap content
 */
export function generateSitemap(routes, site) {
  const urls = []

  function extractRoutes(routes, parentPath = '') {
    for (const route of routes) {
      if (route.path && !route.path.includes(':')) {
        const fullPath = route.path.startsWith('/')
          ? route.path
          : `${parentPath}/${route.path}`.replace(/\/+/g, '/')

        if (fullPath && fullPath !== '/') {
          urls.push({
            loc: `${site.url}${fullPath}`,
            changefreq: 'weekly',
            priority: fullPath.split('/').length > 2 ? '0.7' : '0.8'
          })
        }
      }

      if (route.children) {
        extractRoutes(route.children, route.path)
      }
    }
  }

  extractRoutes(routes)

  // Add homepage
  urls.unshift({
    loc: site.url,
    changefreq: 'daily',
    priority: '1.0'
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`
}
