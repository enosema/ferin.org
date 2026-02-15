/**
 * useContent Composable
 *
 * Provides reactive access to YAML content files with caching and SSG support.
 */

import { ref, readonly } from 'vue'
import { loadContent, loadSiteConfig, preloadAllContent } from '@/utils/contentLoader.js'

// Global content cache
const contentCache = ref(new Map())
const siteConfig = ref(null)
const isLoaded = ref(false)
const loadPromise = ref(null)

/**
 * Load and cache content from a YAML file
 * @param {string} path - Path relative to src/content/
 * @returns {Promise<object|null>}
 */
export async function useContent(path) {
  if (contentCache.value.has(path)) {
    return contentCache.value.get(path)
  }

  const content = await loadContent(path)
  contentCache.value.set(path, content)

  return content
}

/**
 * Get site configuration (synchronous if already loaded)
 * @returns {import('vue').Readonly<import('vue').Ref<object|null>>}
 */
export function useSiteConfig() {
  // Start loading if not already
  if (!siteConfig.value && !loadPromise.value) {
    loadPromise.value = loadSiteConfig().then(config => {
      siteConfig.value = config
      return config
    })
  }

  return readonly(siteConfig)
}

/**
 * Preload all content for SSG builds
 * Call this in main.js during SSG build
 */
export async function preloadContent() {
  if (isLoaded.value) return

  const allContent = await preloadAllContent()

  for (const [path, content] of Object.entries(allContent)) {
    contentCache.value.set(path, content)
  }

  // Set site config
  if (allContent.site) {
    siteConfig.value = allContent.site
  }

  isLoaded.value = true
  loadPromise.value = Promise.resolve(allContent.site)
}

/**
 * Get cached content synchronously (for use after preload)
 * @param {string} path - Content path
 * @returns {object|null}
 */
export function getCachedContent(path) {
  return contentCache.value.get(path) || null
}

/**
 * Get cached site config synchronously
 * @returns {object|null}
 */
export function getCachedSiteConfig() {
  return siteConfig.value
}

/**
 * Clear content cache (useful for development hot reload)
 */
export function clearContentCache() {
  contentCache.value.clear()
  siteConfig.value = null
  isLoaded.value = false
  loadPromise.value = null
}
