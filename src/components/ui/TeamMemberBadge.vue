<template>
  <span class="team-member-badge">
    <span class="member-name">{{ parsedMember.name }}</span>
    <span v-if="hasAffiliations" class="member-affiliations">
      <span class="affiliation-paren">(</span>
      <template v-for="(affiliation, index) in parsedMember.affiliations" :key="index">
        <OrganizationLink
          :org-name="affiliation"
          :text="affiliation"
          class="affiliation-link"
        />
        <span v-if="index < parsedMember.affiliations.length - 1" class="affiliation-separator">/</span>
      </template>
      <span class="affiliation-paren">)</span>
    </span>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { parseTeamMember } from '@/composables/useOrganizations'
import OrganizationLink from '@/components/ui/OrganizationLink.vue'

const props = defineProps({
  // Team member string like "John Doe (Org1 / Org2)" or "Jane Smith"
  member: {
    type: String,
    required: true
  }
})

const parsedMember = computed(() => {
  return parseTeamMember(props.member)
})

const hasAffiliations = computed(() => {
  return parsedMember.value.affiliations.length > 0
})
</script>

<style scoped>
.team-member-badge {
  display: inline;
}

.member-name {
  font-weight: var(--font-weight-medium);
}

.member-affiliations {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  margin-left: var(--spacing-xs);
}

.affiliation-paren {
  color: var(--color-text-light);
}

.affiliation-link {
  color: var(--color-accent);
  font-size: inherit;
}

.affiliation-separator {
  margin: 0 var(--spacing-xs);
  color: var(--color-text-lighter);
}
</style>
