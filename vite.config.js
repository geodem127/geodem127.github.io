import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
  base: "/geodem127.github.io/",
  // base: '/',
  build: {
    outDir: "dist",

  },

  // root: 'dist/index.html',
  // assetsInclude: true,


})
