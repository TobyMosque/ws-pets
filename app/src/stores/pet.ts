import { useAsyncState } from '@vueuse/core'
import { defineStore } from 'pinia'
import { usePetApi } from 'src/composables/api'

export const usePetsStore = defineStore('pets', () => {
  const petApi = usePetApi()
  async function fetchFn () {
    return await petApi.findPetsByStatus({
      status: 'available'
    })
  }

  const { state: pets, isLoading, execute: fetchPets } = useAsyncState(fetchFn, [], { immediate: false })
  return {
    pets,
    isLoading,
    fetchPets
  }
})
