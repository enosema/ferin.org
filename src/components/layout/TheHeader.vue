<!--
  Site Header Component
  Main navigation for ferin.org
-->
<template>
  <header class="header glass" ref="headerRef">
    <div class="header-container">
      <router-link to="/" class="logo">
        <img src="@/assets/images/ferin-logo.svg" alt="FERIN" class="logo-image" />
      </router-link>

      <nav class="nav" :class="{ 'nav-open': mobileMenuOpen }">
        <router-link to="/about" class="nav-link" @click="closeMobileMenu">
          About
        </router-link>
        <router-link to="/understand" class="nav-link" @click="closeMobileMenu">
          Understand
        </router-link>
        <router-link to="/implement" class="nav-link" @click="closeMobileMenu">
          Implement
        </router-link>
        <router-link to="/conform" class="nav-link" @click="closeMobileMenu">
          Conform
        </router-link>
        <router-link to="/reference" class="nav-link" @click="closeMobileMenu">
          Reference
        </router-link>
        <router-link to="/news" class="nav-link" @click="closeMobileMenu">
          News
        </router-link>
      </nav>

      <div class="header-actions">
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
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const headerRef = ref(null)

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
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
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
  gap: var(--spacing-md);
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
