<template>
  <q-table :rows="pets" :columns="columns">
    <template #body-cell>
      <q-td>
        <q-skeleton type="text"></q-skeleton>
      </q-td>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import { useMockedList } from 'src/composables/mock'
import { useSuspenseState } from 'src/composables/pets'

const pets = useMockedList(10)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const { columns } = useSuspenseState()!
</script>
