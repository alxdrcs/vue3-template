import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import Components from 'unplugin-vue-components/vite'

export const configAutoImportPlugin = () =>
  AutoImport({
    dts: 'config/unplugin/auto-imports.d.ts',
    imports: ['vue'],
    eslintrc: {
      enabled: true
    }
  })

export const configComponentsPlugin = () =>
  Components({
    dts: 'config/unplugin/components.d.ts',
    resolvers: [
      IconResolver({
        prefix: 'icon',
        customCollections: ['custom']
      })
    ]
  })

export const configIconsPlugin = () =>
  Icons({
    compiler: 'vue3',
    customCollections: {
      custom: FileSystemIconLoader('./src/assets/icons')
    },
    autoInstall: true
  })
