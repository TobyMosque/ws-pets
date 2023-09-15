import { InjectionKey, Ref, inject } from 'vue'
export const isFetchEnabledKey: InjectionKey<Ref<boolean>> = Symbol('is-fetch-enabled-key')

export function useIsFetchEnabled () {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const isFetchEnabled = inject(isFetchEnabledKey)!
  return isFetchEnabled
}

export async function useFetch<T> (suspenseFn: () => Promise<T>): Promise<T | undefined> {
  const isFetchEnabled = useIsFetchEnabled()
  if (isFetchEnabled.value) {
    return await suspenseFn()
  }
}
