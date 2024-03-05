import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir: 'build',

  },
  server: {
    port: 8080,
  },
  plugins: [vue()],
})
