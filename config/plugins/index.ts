import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { configCompressPlugin } from './compress'
import { configAutoImportPlugin, configComponentsPlugin, configIconsPlugin } from './unplugin'

export const createVitePlugins = (viteEnv: ViteEnv, isBuild: boolean) => {
  const { VITE_LEGACY, VITE_USE_COMPRESS, VITE_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv
  const plugins = [
    vue(),
    VITE_LEGACY
      ? legacy({
          targets: ['defaults', 'not IE 11'],
          additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
      : null
  ]
  if (isBuild) {
    VITE_USE_COMPRESS && plugins.push(configCompressPlugin(VITE_COMPRESS_DELETE_ORIGIN_FILE))
  }
  plugins.push(configAutoImportPlugin())
  plugins.push(configComponentsPlugin())
  plugins.push(configIconsPlugin())
  return plugins
}
