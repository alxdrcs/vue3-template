import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { configCompressPlugin } from './compress'
import { configAutoImportPlugin, configComponentsPlugin, configIconsPlugin } from './unplugin'

export const createVitePlugins = (isBuild: boolean) => {
  const plugins = [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ]
  if (isBuild) {
    plugins.push(configCompressPlugin())
  }
  plugins.push(configAutoImportPlugin())
  plugins.push(configComponentsPlugin())
  plugins.push(configIconsPlugin())
  return plugins
}
