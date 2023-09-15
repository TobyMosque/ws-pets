<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-actions>
        <q-btn color="primary" label="Home" to="/"></q-btn>
      </q-card-actions>
      <q-card-section>
        <q-table :rows="pets" :loading="isLoading" :columns="columns">
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { createSuspenseState } from 'src/composables/pets'
import { storeToRefs } from 'pinia'
import { usePetsStore } from 'src/stores/pet'
import { onMounted } from 'vue'

const petsStore = usePetsStore()
const { pets, isLoading } = storeToRefs(petsStore)
const { fetchPets } = petsStore

onMounted(async () => {
  await fetchPets(2000)
})

const { columns } = createSuspenseState()
</script>
