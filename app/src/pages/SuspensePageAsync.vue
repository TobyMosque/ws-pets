<template>
  <q-table :rows="pets" :columns="columns">
  </q-table>
</template>

<script setup lang="ts">
import { useSuspenseState } from 'src/composables/pets'
import { storeToRefs } from 'pinia'
import { usePetsStore } from 'src/stores/pet'
import { useFetch } from 'src/composables/fetch'

const petsStore = usePetsStore()
const { pets } = storeToRefs(petsStore)
const { fetchPets } = petsStore

await useFetch(() => fetchPets(2000))
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const { columns } = useSuspenseState()!
</script>
