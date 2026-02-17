// Composable for loading and accessing organization data
import { ref } from 'vue'
import { parse } from 'yaml'

// Cache for loaded organizations
const organizationsCache = ref(null)

/**
 * Parse team member string to extract name and affiliations
 * Examples:
 *   "Jean Brodeur" -> { name: "Jean Brodeur", affiliations: [] }
 *   "Jiantao Bi (RADI)" -> { name: "Jiantao Bi", affiliations: ["RADI"] }
 *   "Ronald Tse (CalConnect / Ribose)" -> { name: "Ronald Tse", affiliations: ["CalConnect", "Ribose"] }
 */
export function parseTeamMember(memberString) {
  const match = memberString.match(/^(.+?)\s*\((.+)\)$/)
  if (!match) {
    return { name: memberString.trim(), affiliations: [] }
  }

  const name = match[1].trim()
  const affiliationsStr = match[2]
  const affiliations = affiliationsStr
    .split('/')
    .map(a => a.trim())
    .filter(a => a.length > 0)

  return { name, affiliations }
}

/**
 * Find organization by name (supports various name formats)
 */
export function findOrganizationByName(orgName, organizations) {
  if (!organizations || !orgName) return null

  const normalizedName = orgName.toLowerCase().trim()

  // Try exact key match first (convert name to potential key format)
  const potentialKey = normalizedName.replace(/[^a-z0-9]/g, '_')
  if (organizations[potentialKey]) {
    return { key: potentialKey, ...organizations[potentialKey] }
  }

  // Search by name or full_name
  for (const [key, org] of Object.entries(organizations)) {
    const orgNameLower = org.name?.toLowerCase() || ''
    const orgFullNameLower = org.full_name?.toLowerCase() || ''

    if (
      orgNameLower === normalizedName ||
      orgFullNameLower === normalizedName ||
      orgNameLower.includes(normalizedName) ||
      normalizedName.includes(orgNameLower)
    ) {
      return { key, ...org }
    }
  }

  return null
}

/**
 * Composable for accessing organizations
 */
export function useOrganizations() {
  const organizations = ref({})
  const loading = ref(false)
  const error = ref(null)

  // Load organizations from YAML
  const loadOrganizations = async () => {
    // Use cached data if available
    if (organizationsCache.value) {
      organizations.value = organizationsCache.value
      return
    }

    loading.value = true
    error.value = null

    try {
      // Use Vite's glob import with raw query (same pattern as contentLoader.js)
      const modules = import.meta.glob('/src/content/**/*.yaml', { query: '?raw', import: 'default' })
      const orgPath = '/src/content/organizations.yaml'

      if (modules[orgPath]) {
        const raw = await modules[orgPath]()
        const data = parse(raw)
        organizations.value = data
        organizationsCache.value = data
      }
    } catch (e) {
      console.error('Failed to load organizations:', e)
      error.value = e
    } finally {
      loading.value = false
    }
  }

  // Get a single organization by key
  const getOrganization = (key) => {
    // Check cache first, then local state
    const cache = organizationsCache.value || organizations.value
    return cache[key] || null
  }

  // Get organization URL by key or name
  const getOrganizationUrl = (keyOrName) => {
    const cache = organizationsCache.value || organizations.value
    const org = getOrganization(keyOrName) ||
                findOrganizationByName(keyOrName, cache)
    return org?.url || null
  }

  // Check if an organization exists
  const hasOrganization = (key) => {
    const cache = organizationsCache.value || organizations.value
    return !!cache[key]
  }

  return {
    organizations,
    loading,
    error,
    loadOrganizations,
    getOrganization,
    getOrganizationUrl,
    hasOrganization,
    findOrganizationByName,
    parseTeamMember
  }
}

/**
 * Preload organizations for SSG builds
 * Call this in main.js during SSG build
 */
export async function preloadOrganizations() {
  if (organizationsCache.value) {
    return organizationsCache.value
  }

  try {
    const modules = import.meta.glob('/src/content/**/*.yaml', { query: '?raw', import: 'default' })
    const orgPath = '/src/content/organizations.yaml'

    if (modules[orgPath]) {
      const raw = await modules[orgPath]()
      const data = parse(raw)
      organizationsCache.value = data
      return data
    }
  } catch (e) {
    console.error('Failed to preload organizations:', e)
  }

  return null
}

/**
 * Get cached organizations synchronously (for use after preload)
 */
export function getCachedOrganizations() {
  return organizationsCache.value
}
