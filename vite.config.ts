import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  build:{
    outDir: 'build',

  },
  server: {
    port: 8080,
  },
  plugins: [vue()],
})
