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
          @click.prevent="scrollTo(heading.id)"
        >
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  contentSelector: {
    type: String,
    default: '.content-page'
  }
})

const headings = ref([])
const activeId = ref('')

const extractHeadings = () => {
  const content = document.querySelector(props.contentSelector)
  if (!content) return []

  const found = []
  const elements = content.querySelectorAll('h2, h3')

  elements.forEach((el, index) => {
    if (!el.id) {
      el.id = `heading-${index}`
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
  const content = document.querySelector(props.contentSelector)
  if (!content) return

  const headingElements = content.querySelectorAll('h2, h3')
  let current = ''

  for (const el of headingElements) {
    const rect = el.getBoundingClientRect()
    if (rect.top <= 100) {
      current = el.id
    }
  }

  activeId.value = current || ''
}

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 100
    const top = el.offsetTop - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(() => {
  headings.value = extractHeadings()
  window.addEventListener('scroll', updateActive, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActive)
})
</script>
