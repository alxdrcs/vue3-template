import { ProxyOptions, ServerOptions } from 'vite'
type ProxyTargetList = Record<string, ProxyOptions>
const httpsRE = /^https:\/\//
export const createViteServer = (viteEnv: ViteEnv): ServerOptions => {
  const { VITE_PORT, VITE_PROXY } = viteEnv
  const proxy: ProxyTargetList = {}
  for (const [prefix, target] of VITE_PROXY) {
    const isHttps = httpsRE.test(target)
    proxy[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      ...(isHttps ? { secure: false } : {})
    }
  }
  return {
    hmr: { overlay: false },
    cors: true,
    open: true,
    host: '0.0.0.0',
    port: VITE_PORT,
    headers: {
      'Cache-Control': 'no-store'
    },
    proxy
  }
}
