/**
 * Content Loader Utility
 *
 * Loads YAML/JSON content files for use in Vue components.
 * Works with both Vite dev server and SSG builds.
 */

import { parse } from 'yaml'

// Cache for loaded content
const contentCache = new Map()

/**
 * Load a YAML content file
 * @param {string} path - Path relative to src/content/
 * @returns {Promise<object>} Parsed content
 */
export async function loadContent(path) {
  const cacheKey = path

  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)
  }

  try {
    // Use Vite's glob import for SSG compatibility
    // Updated syntax: query: '?raw' instead of as: 'raw'
    const modules = import.meta.glob('/src/content/**/*.yaml', { query: '?raw', import: 'default' })
    const fullPath = `/src/content/${path}.yaml`

    if (!modules[fullPath]) {
      console.warn(`Content file not found: ${fullPath}`)
      return null
    }

    const raw = await modules[fullPath]()
    const content = parse(raw)

    contentCache.set(cacheKey, content)
    return content
  } catch (error) {
    console.error(`Failed to load content: ${path}`, error)
    return null
  }
}

/**
 * Load site configuration
 * @returns {Promise<object>}
 */
export async function loadSiteConfig() {
  return loadContent('site')
}

/**
 * Load all content files in a directory
 * @param {string} directory - Directory name under src/content/
 * @returns {Promise<object[]>}
 */
export async function loadDirectory(directory) {
  const modules = import.meta.glob('/src/content/**/*.yaml', { query: '?raw', import: 'default' })
  const contents = []

  for (const [path, loader] of Object.entries(modules)) {
    if (path.includes(`/${directory}/`) && !path.endsWith('site.yaml')) {
      try {
        const raw = await loader()
        const content = parse(raw)
        contents.push({
          ...content,
          _path: path.replace('/src/content/', '').replace('.yaml', '')
        })
      } catch (error) {
        console.error(`Failed to load: ${path}`, error)
      }
    }
  }

  return contents
}

/**
 * Preload all content for SSG
 * @returns {Promise<object>} All content indexed by path
 */
export async function preloadAllContent() {
  const modules = import.meta.glob('/src/content/**/*.yaml', { query: '?raw', import: 'default' })
  const allContent = {}

  for (const [path, loader] of Object.entries(modules)) {
    try {
      const raw = await loader()
      const content = parse(raw)
      const key = path.replace('/src/content/', '').replace('.yaml', '')
      allContent[key] = content
    } catch (error) {
      console.error(`Failed to preload: ${path}`, error)
    }
  }

  return allContent
}
