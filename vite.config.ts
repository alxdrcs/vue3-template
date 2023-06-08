import { resolve } from 'path'
import { ConfigEnv, UserConfig } from 'vite'
import { createViteBuild, createVitePlugins } from './config'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: createVitePlugins(isBuild),
    build: createViteBuild(isBuild),
    server: {
      host: true,
      port: 8001,
      open: true,
      https: false,
      proxy: {}
    }
  }
}
