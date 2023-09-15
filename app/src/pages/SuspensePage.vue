<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-actions>
        <q-btn color="primary" label="Home" to="/"></q-btn>
      </q-card-actions>
      <q-card-section>
        <suspense-page></suspense-page>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { createSuspenseState } from 'src/composables/pets'
import SuspensePage from 'components/Suspense/Page.vue'

createSuspenseState()
</script>
