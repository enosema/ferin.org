<!--
  Site Header Component
  Main navigation for ferin.org
-->
<template>
  <header class="header glass" ref="headerRef">
    <div class="header-container">
      <router-link to="/" class="logo">
        <img :src="logoSrc" alt="FERIN" class="logo-image" />
      </router-link>

      <nav class="nav" :class="{ 'nav-open': mobileMenuOpen }">
        <router-link to="/about" class="nav-link" @click="closeMobileMenu">
          About
        </router-link>
        <router-link to="/learn" class="nav-link" @click="closeMobileMenu">
          Learn
        </router-link>
        <router-link to="/build" class="nav-link" @click="closeMobileMenu">
          Build
        </router-link>
        <router-link to="/upgrade" class="nav-link" @click="closeMobileMenu">
          Upgrade
        </router-link>
        <router-link to="/reference" class="nav-link" @click="closeMobileMenu">
          Reference
        </router-link>
        <router-link to="/news" class="nav-link" @click="closeMobileMenu">
          News
        </router-link>
      </nav>

      <div class="header-actions">
        <button
          class="search-trigger"
          @click="$emit('open-search')"
          aria-label="Search documentation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span class="search-label">Search</span>
          <kbd>/</kbd>
        </button>

        <ThemeToggle />

        <a href="https://enosema.org" target="_blank" rel="noopener" class="enosema-badge">
          <span class="enosema-text">by</span>
          <img src="/enosema-icon.svg" alt="Enosema Foundation" class="enosema-icon" />
        </a>

        <button
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <span class="hamburger" :class="{ 'hamburger-open': mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import logoLight from '@/assets/images/ferin-logo.svg'
import logoDark from '@/assets/images/ferin-logo-dark.svg'

defineEmits(['open-search'])

const mobileMenuOpen = ref(false)
const headerRef = ref(null)
const isDark = ref(false)

const logoSrc = computed(() => isDark.value ? logoDark : logoLight)

const updateTheme = () => {
  isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  if (headerRef.value) {
    if (window.scrollY > 10) {
      headerRef.value.classList.add('header-scrolled')
    } else {
      headerRef.value.classList.remove('header-scrolled')
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateTheme()

  // Watch for theme changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-theme') {
        updateTheme()
      }
    })
  })
  observer.observe(document.documentElement, { attributes: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--header-height);
  display: flex;
  align-items: center;
  transition: all var(--transition-normal);
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

html[data-theme="dark"] .header {
  background: rgba(2, 6, 23, 0.95);
  border-bottom-color: rgba(30, 41, 59, 0.8);
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.98) !important;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
}

html[data-theme="dark"] .header-scrolled {
  background: rgba(2, 6, 23, 0.98) !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(30, 41, 59, 0.5);
}

.header-container {
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-image {
  height: 44px;
  width: auto;
}

.nav {
  display: flex;
  gap: var(--spacing-xl);
  flex: 1;
  justify-content: center;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-shrink: 0;
}

.nav-link {
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  text-decoration: none;
  padding: var(--spacing-sm) 0;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-accent);
  transform: scaleX(0);
  transition: transform var(--transition-fast);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-accent);
}

.nav-link.router-link-active::after {
  transform: scaleX(1);
}

.search-trigger {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: var(--radius-md);
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.search-trigger:hover {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
}

.search-label {
  display: none;
}

.search-trigger kbd {
  padding: 2px 6px;
  background: var(--color-surface);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: var(--font-size-xs);
}

.enosema-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  background: rgba(52, 143, 65, 0.1);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.enosema-badge:hover {
  background: rgba(52, 143, 65, 0.15);
}

.enosema-text {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  font-weight: var(--font-weight-medium);
}

.enosema-icon {
  width: 20px;
  height: 20px;
}

.mobile-menu-btn {
  display: none;
  padding: var(--spacing-sm);
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 24px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--color-primary);
  transition: all var(--transition-fast);
}

.hamburger-open span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.hamburger-open span:nth-child(2) {
  opacity: 0;
}

.hamburger-open span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

@media (max-width: 768px) {
  .enosema-badge {
    padding: var(--spacing-xs);
  }

  .enosema-text {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .search-label {
    display: none;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex: none;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    padding: var(--spacing-lg);
    gap: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all var(--transition-normal);
    border-bottom: 1px solid var(--color-border);
  }

  html[data-theme="dark"] .nav {
    background: rgba(2, 6, 23, 0.98);
    border-bottom-color: rgba(30, 41, 59, 0.8);
  }

  .nav-open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav-link {
    padding: var(--spacing-md) 0;
    border-bottom: 1px solid var(--color-border);
  }

  .nav-link:last-child {
    border-bottom: none;
  }
}
</style>
