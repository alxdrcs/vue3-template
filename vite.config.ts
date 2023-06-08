import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVitePlugins } from './config'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: createVitePlugins(true),
  server: {
    host: true,
    port: 8001,
    open: true,
    https: false,
    proxy: {}
  }
})
