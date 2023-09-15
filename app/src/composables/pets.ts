import { computed } from 'vue'
import { createInjectionState } from '@vueuse/core'
import { QTableColumn } from 'quasar'
import { Category } from 'pets-sdk-api'

export const [createSuspenseState, useSuspenseState] = createInjectionState(() => {
  const columns = computed(() => {
    return [
      { name: 'id', label: 'Id', field: 'id', sortable: true },
      { name: 'name', label: 'Name', field: 'name', sortable: true },
      {
        name: 'category',
        label: 'Category',
        field: 'category',
        format (category?: Category) {
          return category?.name || 'N/A'
        },
        sortable: true
      },
      { name: 'status', label: 'Status', field: 'status', sortable: true }
    ] as QTableColumn[]
  })
  return {
    columns
  }
})
