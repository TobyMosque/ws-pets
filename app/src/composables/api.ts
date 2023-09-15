import { PetApi, StoreApi, UserApi, Configuration } from 'pets-sdk-api'
import { Pinia } from 'pinia'
import { useAuthStore } from 'src/stores/auth'
import { useDiStore } from 'src/stores/di'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly petApi: PetApi;
    readonly storeApi: StoreApi;
    readonly userApi: UserApi;
  }
}

function createConfiguration (pinia: Pinia) {
  return new Configuration({
    basePath: 'https://petstore3.swagger.io/api/v3',
    fetchApi: fetch,
    middleware: [{
      async pre (context) {
        const authStore = useAuthStore(pinia)
        context.init.headers = {
          ...context.init.headers,
          Authorization: `Bearer ${authStore.token}`
        }
        return { url: context.url, init: context.init }
      },
      async post (context) {
        return context.response
      },
      async onError (context) {
        return context.response
      }
    }]
  })
}

export function createApi (pinia: Pinia) {
  const config = createConfiguration(pinia)
  const petApi = new PetApi(config)
  const storeApi = new StoreApi(config)
  const userApi = new UserApi(config)
  pinia.use(() => ({ petApi, storeApi, userApi }))
}

export function usePetApi (pinia?: Pinia) {
  const di = useDiStore(pinia)
  return di.petApi
}

export function useStoreApi (pinia?: Pinia) {
  const di = useDiStore(pinia)
  return di.storeApi
}

export function useUserApi (pinia?: Pinia) {
  const di = useDiStore(pinia)
  return di.userApi
}
