<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-actions>
        <q-btn color="primary" label="Home" to="/"></q-btn>
      </q-card-actions>
      <q-card-section>
        <suspense>
          <suspense-page-async></suspense-page-async>
          <template v-if="isFetchEnabled" #fallback>
            <suspense-page-fallback></suspense-page-fallback>
          </template>
        </suspense>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { createSuspenseState } from 'src/composables/pets'
import SuspensePageAsync from './SuspensePageAsync.vue'
import SuspensePageFallback from './SuspensePageFallback.vue'
import { useIsFetchEnabled } from 'src/composables/fetch'

const isFetchEnabled = useIsFetchEnabled()
createSuspenseState()
</script>
