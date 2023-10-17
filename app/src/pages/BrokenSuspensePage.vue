<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-actions>
        <q-btn color="primary" label="Home" to="/"></q-btn>
      </q-card-actions>
      <q-banner class="bg-warning">
        this page doesn't work well when rendered at the server side... so try to refresh (F5)
      </q-banner>
      <q-card-section>
        <suspense>
          <template #default>
            <suspense-content></suspense-content>
          </template>
          <template #fallback>
            <suspense-fallback></suspense-fallback>
          </template>
        </suspense>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { createSuspenseState } from 'src/composables/pets'
import SuspenseContent from 'components/Suspense/Content.vue'
import SuspenseFallback from 'components/Suspense/Fallback.vue'

createSuspenseState()
</script>
