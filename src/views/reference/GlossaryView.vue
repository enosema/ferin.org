<template>
  <article class="content-page">
    <header class="page-header">
      <h1>Glossary</h1>
      <p class="page-lead">
        Key terms from ISO 19135:2026 with expanded explanations.
      </p>
    </header>

    <section class="content-section">
      <div class="letter-nav" ref="letterNavRef">
        <a
          v-for="letter in lettersWithTerms"
          :key="letter"
          :href="`#${letter}`"
          :class="{ active: activeLetter === letter }"
          @click.prevent="scrollToLetter(letter)"
        >
          {{ letter }}
        </a>
      </div>

      <div v-for="letter in lettersWithTerms" :key="letter" class="letter-section" :ref="el => sectionRefs[letter] = el">
        <h2 :id="letter">{{ letter }}</h2>
        <dl class="glossary-list">
          <template v-for="term in getTermsByLetter(letter)" :key="term.term">
            <dt>{{ term.term }}</dt>
            <dd>
              <p class="definition">{{ term.definition }}</p>
              <p v-if="term.interpretation" class="interpretation">
                <strong>Interpretation:</strong> {{ term.interpretation }}
              </p>
            </dd>
          </template>
        </dl>
      </div>
    </section>
  </article>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const terms = [
  {
    term: 'Action',
    definition: 'An operation that changes the state or content of a register.',
    interpretation: 'FERIN defines required actions (add, invalidate, supersede, etc.) and optional actions (redaction, deletion, etc.).'
  },
  {
    term: 'Addition',
    definition: 'The action of including a new concept or register item in a register.',
    interpretation: 'Requires governance approval in governed registers. Creates change history.'
  },
  {
    term: 'Appeal',
    definition: 'A formal request to reconsider a decision made by the Control Body.',
    interpretation: 'Appeals should be documented with their outcome.'
  },
  {
    term: 'Concept',
    definition: 'An abstract idea or category that can be defined and that exists in the concept plane.',
    interpretation: 'Concepts represent "what something means" independent of any specific representation.'
  },
  {
    term: 'Concept Definition',
    definition: 'A statement that describes the meaning of a concept.',
    interpretation: 'Can evolve over time through concept versions.'
  },
  {
    term: 'Concept Plane',
    definition: 'The abstract layer where concepts and their meanings exist.',
    interpretation: 'Separate from the content plane where data is stored.'
  },
  {
    term: 'Concept System',
    definition: 'A structured set of concepts related to each other.',
    interpretation: 'Common patterns: generalization-specialization, whole-part, sequential.'
  },
  {
    term: 'Concept Version',
    definition: 'A specific version of a concept definition at a point in time.',
    interpretation: 'Created when a definition changes significantly.'
  },
  {
    term: 'Content Plane',
    definition: 'The layer where concrete register items and their data exist.',
    interpretation: 'Content is versioned, has status, and can be referenced.'
  },
  {
    term: 'Control Body',
    definition: 'The entity responsible for reviewing and deciding on proposals.',
    interpretation: 'Should be separate from the Manager role in high-risk registers. For low-risk registers, combining roles may be acceptable. See Risk Management for guidance.'
  },
  {
    term: 'Correctional Change',
    definition: 'A change that corrects an error in existing content.',
    interpretation: 'May or may not require a new version depending on significance.'
  },
  {
    term: 'Deletion',
    definition: 'The action of permanently removing content from a register.',
    interpretation: 'Use carefully—breaks references. Consider invalidation instead.'
  },
  {
    term: 'Functional Identifier',
    definition: 'An identifier that always retains its original intent by enabling its association to be redirectable and change over time.',
    interpretation: 'Must support hierarchical specification (URI, URN, URL). Used for semantic addressing. Required for concepts, concept versions, register items, register item classes, and changes.'
  },
  {
    term: 'Governance',
    definition: 'The system of rules, practices, and processes for managing a register.',
    interpretation: 'Includes roles, responsibilities, and decision-making processes.'
  },
  {
    term: 'Invalidation',
    definition: 'The action of marking content as no longer valid for use.',
    interpretation: 'Content remains accessible for history but should not be used.'
  },
  {
    term: 'Managed Content',
    definition: 'Content that is subject to governance and change management.',
    interpretation: 'Distinct from administrative information about the register itself.'
  },
  {
    term: 'Object Identifier',
    definition: 'An identifier that identifies an object where the association is non-redirectable and does not change over time.',
    interpretation: 'Permanently assigned to a specific object. Only concerned with uniqueness. Required for concepts, concept versions, register items, register item classes, and changes.'
  },
  {
    term: 'Proposal',
    definition: 'A formal request to add, change, or remove content in a register.',
    interpretation: 'Requires justification and goes through governance approval.'
  },
  {
    term: 'Proposer',
    definition: 'The entity that submits a proposal for changes to the register.',
    interpretation: 'Can be any authorized stakeholder in governed registers.'
  },
  {
    term: 'Published',
    definition: 'The status of content that is visible and available to users.',
    interpretation: 'Content can be valid but unpublished (e.g., during review).'
  },
  {
    term: 'Realised Concept',
    definition: 'A concept that is linked to specific register item content.',
    interpretation: 'The bridge between concept plane and content plane.'
  },
  {
    term: 'Redaction',
    definition: 'The action of hiding or removing sensitive content.',
    interpretation: 'Can be soft delete, hard delete, or access control based.'
  },
  {
    term: 'Register',
    definition: 'A managed collection of information with defined governance.',
    interpretation: 'Has an owner, follows a specification, implements FERIN framework.'
  },
  {
    term: 'Register Item',
    definition: 'A concrete piece of content in a register.',
    interpretation: 'Has identifier, status, attributes, and is managed through actions.'
  },
  {
    term: 'Register Item Class',
    definition: 'A category of register items with common attributes.',
    interpretation: 'Defines the schema for a type of content.'
  },
  {
    term: 'Register Manager',
    definition: 'The entity responsible for day-to-day register operations.',
    interpretation: 'Coordinates proposals, maintains documentation, reports to Owner.'
  },
  {
    term: 'Register Owner',
    definition: 'The entity accountable for the register\'s existence and direction.',
    interpretation: 'Approves specification, assigns Manager, makes final decisions.'
  },
  {
    term: 'Register Specification',
    definition: 'A document defining a register\'s scope, governance, and commitments.',
    interpretation: 'Required for all FERIN-compliant registers.'
  },
  {
    term: 'Register System',
    definition: 'The technical infrastructure that implements the register.',
    interpretation: 'Database, API, user interface, etc.'
  },
  {
    term: 'Relation',
    definition: 'A defined relationship between concepts or register items.',
    interpretation: 'Types: has concept, instance of, has definition, supersedes, inherits, has part.'
  },
  {
    term: 'Status',
    definition: 'The state of a concept or register item.',
    interpretation: 'Primary statuses: valid/invalid, published/unpublished, superseded.'
  },
  {
    term: 'Substantive Change',
    definition: 'A change that has major impact on the use of content.',
    interpretation: 'Requires a new version. Contrast with non-substantive change.'
  },
  {
    term: 'Succession',
    definition: 'The transfer of responsibility for a register to another entity.',
    interpretation: 'Part of decommissioning or organizational change.'
  },
  {
    term: 'Supersession',
    definition: 'The action of replacing content with a newer version.',
    interpretation: 'Creates link from superseded to superseding item.'
  },
  {
    term: 'System Manager',
    definition: 'The entity responsible for technical operation of the register system.',
    interpretation: 'Maintains infrastructure, ensures availability, implements changes.'
  },
  {
    term: 'Unmanaged Content',
    definition: 'Content not subject to governance processes.',
    interpretation: 'May transition to managed if it becomes subject to governance.'
  },
  {
    term: 'Unpublish',
    definition: 'The action of removing content from public visibility.',
    interpretation: 'Content still exists but is hidden from normal queries.'
  },
  {
    term: 'Valid',
    definition: 'The status of content that is approved and appropriate for use.',
    interpretation: 'Contrast with invalid—content should not be used.'
  },
  {
    term: 'Version',
    definition: 'A specific snapshot of content at a point in time.',
    interpretation: 'Versions enable history, comparison, and rollback understanding.'
  }
]

const getTermsByLetter = (letter) => {
  return terms.filter(t => t.term.toUpperCase().startsWith(letter))
}

// Only show letters that have terms
const lettersWithTerms = computed(() => {
  return letters.filter(letter => getTermsByLetter(letter).length > 0)
})

// Active letter for highlighting
const activeLetter = ref(lettersWithTerms.value[0] || 'A')

// Section refs for scroll observation
const sectionRefs = {}

// Scroll to letter handler
const scrollToLetter = (letter) => {
  const element = document.getElementById(letter)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Scroll observer for highlighting current section
let observer = null

onMounted(() => {
  // Set up intersection observer for scroll highlighting
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeLetter.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }
  )

  // Observe all letter sections
  lettersWithTerms.value.forEach((letter) => {
    const element = document.getElementById(letter)
    if (element) {
      observer.observe(element)
    }
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.content-page {
  max-width: 800px;
}

.page-header {
  margin-bottom: var(--spacing-2xl);
}

.page-lead {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  line-height: var(--line-height-relaxed);
}

.content-section {
  margin-bottom: var(--spacing-2xl);
}

.letter-nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-xl);
  padding: var(--spacing-md);
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  position: sticky;
  top: calc(var(--header-height) + var(--spacing-md));
  z-index: 10;
}

.letter-nav a {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text);
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.letter-nav a:hover,
.letter-nav a.active {
  background: var(--color-accent);
  color: var(--color-text-inverse);
}

.letter-section {
  margin-bottom: var(--spacing-xl);
}

.letter-section h2 {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--color-accent);
}

.glossary-list {
  margin: 0;
}

.glossary-list dt {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-top: var(--spacing-lg);
}

.glossary-list dt:first-child {
  margin-top: 0;
}

.glossary-list dd {
  margin-left: 0;
  margin-bottom: var(--spacing-md);
}

.definition {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-xs);
}

.interpretation {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  background: rgba(13, 148, 136, 0.05);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-accent);
  margin-bottom: 0;
}
</style>
