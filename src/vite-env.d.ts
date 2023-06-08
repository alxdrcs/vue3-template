/// <reference types="vite/client" />
interface ViteEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_PUBLIC_PATH: string
  readonly VITE_PORT: number
  readonly VITE_PROXY: [string, string][]
  readonly VITE_DROP_CONSOLE: boolean
  readonly VITE_USE_COMPRESS: boolean
  readonly VITE_COMPRESS_DELETE_ORIGIN_FILE: boolean
  readonly VITE_LEGACY: boolean
}
