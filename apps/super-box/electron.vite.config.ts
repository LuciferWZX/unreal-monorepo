import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()],
    server: {
      proxy: {
        '/sms': {
          // target: 'https://api.juhedx.com/sms',
          target: 'http://39.107.242.113:7862/sms',
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  }
})
