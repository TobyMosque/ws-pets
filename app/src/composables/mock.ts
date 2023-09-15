import { ref } from 'vue'
import { uid } from 'quasar'

export function useMockedList (length = 10) {
  return ref([...new Array(length)].map(() => ({ id: uid() })))
}
