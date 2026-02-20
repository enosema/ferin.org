<template>
  <nav class="toc" v-if="headings.length > 0">
    <h4 class="toc-title">On this page</h4>
    <ul class="toc-list">
      <li
        v-for="heading in headings"
        :key="heading.id"
        class="toc-item"
      >
        <a
          :href="`#${heading.id}`"
          class="toc-link"
          :class="{
            'toc-link-h3': heading.depth === 3,
            'active': activeId === heading.id
          }"
          @click.prevent="scrollToHeading(heading.id)"
        >
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  contentSelector: {
    type: String,
    default: '.content-page'
  }
})

const route = useRoute()
const headings = ref([])
const activeId = ref('')

const extractHeadings = () => {
  // Try multiple selectors
  const selectors = [
    props.contentSelector,
    '.content-page',
    'article',
    '.content-main',
    'main'
  ]

  let content = null
  for (const selector of selectors) {
    content = document.querySelector(selector)
    if (content) break
  }

  if (!content) {
    console.warn('TOC: No content container found')
    return []
  }

  const found = []
  const elements = content.querySelectorAll('h2, h3')

  elements.forEach((el, index) => {
    // Generate ID if not present
    if (!el.id) {
      const text = el.textContent.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      el.id = `section-${text}-${index}`
    }
    found.push({
      id: el.id,
      text: el.textContent,
      depth: parseInt(el.tagName[1])
    })
  })

  return found
}

const updateActive = () => {
  if (headings.value.length === 0) return

  let current = headings.value[0]?.id || ''

  for (const heading of headings.value) {
    const el = document.getElementById(heading.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 120) {
        current = heading.id
      }
    }
  }

  activeId.value = current
}

const scrollToHeading = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const headerHeight = 100 // Account for fixed header
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    // Update URL hash without triggering scroll
    history.pushState(null, '', `#${id}`)

    // Set active state immediately
    activeId.value = id
  }
}

// Watch for route changes
const setupObserver = () => {
  // Re-extract headings after a short delay to ensure content is rendered
  setTimeout(() => {
    headings.value = extractHeadings()
  }, 100)
}

onMounted(() => {
  nextTick(() => {
    headings.value = extractHeadings()
  })
  window.addEventListener('scroll', updateActive, { passive: true })
  setupObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActive)
})
</script>
