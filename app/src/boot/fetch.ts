import { boot } from 'quasar/wrappers'
import { isFetchEnabledKey } from 'src/composables/fetch'
import { ref } from 'vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ router, app }) => {
  const isFetchEnabled = ref(process.env.MODE !== 'ssr' || !!process.env.SERVER)
  app.provide(isFetchEnabledKey, isFetchEnabled)
  if (!isFetchEnabled.value) {
    router.isReady().then(() => {
      const cancel = router.beforeEach(() => {
        isFetchEnabled.value = true
        cancel()
      })
    })
  }
})
