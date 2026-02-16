<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <img src="@/assets/images/ferin-logo-white.svg" alt="FERIN" class="footer-logo-img" />
          <p class="footer-description">
            <strong>F</strong>ramework for <strong>E</strong>xtensible
            <strong>R</strong>egistration of <strong>I</strong>nformation
          </p>
          <div class="footer-enosema">
            <span class="enosema-label">A project of</span>
            <a href="https://enosema.org" target="_blank" rel="noopener" class="enosema-full-link">
              <img src="/enosema-logo.svg" alt="Enosema Foundation" class="enosema-full-logo" />
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-section">
            <h4>Learn</h4>
            <router-link to="/understand/core-concepts">Core Concepts</router-link>
            <router-link to="/understand/principles">Principles</router-link>
            <router-link to="/understand/framework">Framework</router-link>
          </div>

          <div class="footer-section">
            <h4>Build</h4>
            <router-link to="/implement/getting-started">Getting Started</router-link>
            <router-link to="/implement/actions">Actions Reference</router-link>
            <router-link to="/implement/register-specification">Specification</router-link>
          </div>

          <div class="footer-section">
            <h4>Resources</h4>
            <a href="https://www.iso.org/standard/87753.html" target="_blank" rel="noopener">
              ISO Store
            </a>
            <a href="https://enosema.org" target="_blank" rel="noopener" class="enosema-link">
              <img src="/enosema-icon.svg" alt="" class="enosema-logo" />
              Enosema Foundation
            </a>
            <router-link to="/news">News</router-link>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          Copyright &copy; Enosema Foundation. All rights reserved. Trademarks belong to their respective owners.
        </p>
        <p class="publisher">
          This site is an interpretation companion to ISO 19135:2026. Site owned and published by the Enosema Foundation.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: linear-gradient(
    180deg,
    var(--color-primary-dark) 0%,
    var(--color-primary) 100%
  );
  color: var(--color-text-inverse);
  padding: var(--spacing-3xl) 0 var(--spacing-xl);
  margin-top: auto;
}

.footer-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-3xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-logo-img {
  height: 48px;
  width: auto;
}

.footer-description {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  line-height: 1.6;
}

.footer-description strong {
  color: var(--color-accent-light);
}

.footer-enosema {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.enosema-label {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
}

.enosema-full-link {
  display: inline-flex;
  align-items: center;
  transition: opacity var(--transition-fast);
}

.enosema-full-link:hover {
  opacity: 0.85;
}

.enosema-full-logo {
  height: 32px;
  width: auto;
  filter: brightness(0) invert(1);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.footer-section h4 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: var(--spacing-md);
}

.footer-section a {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: var(--spacing-xs) 0;
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}

.footer-section a:hover {
  color: var(--color-accent-light);
}

.enosema-link {
  display: flex !important;
  align-items: center;
  gap: var(--spacing-sm);
}

.enosema-logo {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  transition: transform var(--transition-fast);
}

.enosema-link:hover .enosema-logo {
  transform: scale(1.1);
}

.footer-bottom {
  padding-top: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.copyright {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.publisher {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  padding-top: var(--spacing-sm);
}

@media (max-width: 768px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>
