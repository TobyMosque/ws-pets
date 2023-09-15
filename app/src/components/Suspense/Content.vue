<template>
  <q-table :rows="pets" :columns="columns">
  </q-table>
</template>

<script setup lang="ts">
import { useSuspenseState } from 'src/composables/pets'
import { storeToRefs } from 'pinia'
import { usePetsStore } from 'src/stores/pet'
import { usePreFetch } from 'src/composables/prefetch'

const petsStore = usePetsStore()
const { pets } = storeToRefs(petsStore)
const { fetchPets } = petsStore

await usePreFetch(() => fetchPets(2000))
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const { columns } = useSuspenseState()!
</script>
