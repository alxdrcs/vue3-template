import { resolve } from 'path'
import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import { createViteBuild, createVitePlugins, createViteServer } from './config'
import { wrapperEnv } from './config/utils'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  const { VITE_PUBLIC_PATH } = viteEnv
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    build: createViteBuild(isBuild),
    server: createViteServer(viteEnv)
  }
}
