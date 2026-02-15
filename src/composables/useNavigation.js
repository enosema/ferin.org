/**
 * useNavigation Composable
 *
 * Provides navigation structure and helpers from site configuration.
 */

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSiteConfig } from './useContent.js'

/**
 * Get main navigation items
 * @returns {Promise<import('vue').ComputedRef<Array>>}
 */
export async function useNavigation() {
  const siteConfig = await useSiteConfig()

  return computed(() => {
    return siteConfig.value?.navigation?.main || []
  })
}

/**
 * Get current navigation section and breadcrumbs
 * @returns {Promise<import('vue').ComputedRef<object>>}
 */
export async function useCurrentSection() {
  const route = useRoute()
  const navItems = await useNavigation()

  return computed(() => {
    const pathParts = route.path.split('/').filter(Boolean)
    const currentSection = pathParts[0] || ''

    // Find current nav item
    const navItem = navItems.value.find(item => {
      const itemPath = item.path.replace('/', '')
      return itemPath === currentSection
    })

    // Build breadcrumbs
    const breadcrumbs = []

    // Add home
    breadcrumbs.push({ label: 'Home', path: '/' })

    // Add section
    if (navItem) {
      breadcrumbs.push({ label: navItem.label, path: navItem.path })

      // Add child if on child page
      if (navItem.children && pathParts.length > 1) {
        const childPath = `/${pathParts.join('/')}`
        const childItem = navItem.children.find(c => c.path === childPath)

        if (childItem) {
          breadcrumbs.push({ label: childItem.label, path: childItem.path })
        }
      }
    }

    return {
      currentSection,
      navItem,
      breadcrumbs,
      pathParts
    }
  })
}

/**
 * Get sidebar items for current section
 * @returns {Promise<import('vue').ComputedRef<Array>>}
 */
export async function useSidebarItems() {
  const route = useRoute()
  const navItems = await useNavigation()

  return computed(() => {
    const pathParts = route.path.split('/').filter(Boolean)
    const currentSection = pathParts[0] || ''

    // Find current nav item
    const navItem = navItems.value.find(item => {
      const itemPath = item.path.replace('/', '')
      return itemPath === currentSection
    })

    return navItem?.children || []
  })
}

/**
 * Get sibling pages (previous/next) for navigation
 * @returns {Promise<import('vue').ComputedRef<object>>}
 */
export async function useSiblingPages() {
  const route = useRoute()
  const sidebarItems = await useSidebarItems()

  return computed(() => {
    const currentIndex = sidebarItems.value.findIndex(
      item => item.path === route.path
    )

    return {
      previous: currentIndex > 0 ? sidebarItems.value[currentIndex - 1] : null,
      next: currentIndex < sidebarItems.value.length - 1
        ? sidebarItems.value[currentIndex + 1]
        : null
    }
  })
}

/**
 * Check if current path matches a navigation item
 * @param {string} path
 * @returns {boolean}
 */
export function isActivePath(currentPath, targetPath) {
  if (targetPath === '/') {
    return currentPath === '/'
  }
  return currentPath.startsWith(targetPath)
}
