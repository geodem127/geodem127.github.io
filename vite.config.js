import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
console.log("defineConfig | baseUrl:", process.env.VITE_REACT_APP_BASE_URL);

export default defineConfig({
  plugins: [react()],
  // base: "/geodem127.github.io/",
  base: '/',
  build: {
    outDir: "dist",
  },
  // root: 'dist/index.html',
  // assetsInclude: true,


})
