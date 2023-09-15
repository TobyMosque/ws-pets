import { PetApi, StoreApi, UserApi } from 'pets-sdk-api'
import { InjectionKey, Ref, inject } from 'vue'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly petApi: PetApi;
    readonly storeApi: StoreApi;
    readonly userApi: UserApi;
  }
}

export const isFetchEnabledKey: InjectionKey<Ref<boolean>> = Symbol('is-fetch-enabled-key')
export function useIsFetchEnabled () {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const isFetchEnabled = inject(isFetchEnabledKey)!
  return isFetchEnabled
}

export async function usePreFetch <T> (fetchFn: () => Promise<T>): Promise<T | undefined> {
  const isFetchEnabled = useIsFetchEnabled()
  if (isFetchEnabled.value) {
    return await fetchFn()
  }
}
