import { boot } from 'quasar/wrappers'
import { isFetchEnabledKey } from 'src/composables/prefetch'
import { ref } from 'vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app, router }) => {
  const isFetchEnabled = ref(process.env.MODE !== 'ssr' || !!process.env.SERVER)
  app.provide(isFetchEnabledKey, isFetchEnabled)

  if (process.env.MODE === 'ssr' && !!process.env.CLIENT) {
    router.isReady().then(() => {
      setTimeout(() => {
        isFetchEnabled.value = true
      }, 0)
    })
  }
})
