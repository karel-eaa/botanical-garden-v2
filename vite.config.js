import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/botanical-garden-v2/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
