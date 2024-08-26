import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/geodem127/geodem127.github.io',
  // root: 'dist/index.html',
  // assetsInclude: true,


})
