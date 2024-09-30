import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// import config from './config';
import dotenv from 'dotenv';
dotenv.config()

console.log("rocess.env: ", process.env)

export default defineConfig({
  plugins: [react()],
  // base: "/geodem127.github.io/",
  // base: '/',
  base: process.env.NODE_ENV === "prod" ? process.env.VITE_REACT_APP_BASE_URL : process.env.VITE_REACT_APP_BASE_URL_LOCAL,
  build: {
    outDir: "dist",

  },

  // root: 'dist/index.html',
  // assetsInclude: true,


})

// export default ({ mode }) => {
//   process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));
//   console.log("process.env: ", process.env)
//   return defineConfig({
//     plugins: [react()],
//     // base: "/geodem127.github.io/",
//     // base: '/',
//     base: process.env.BASE_URL,
//     build: {
//       outDir: "dist",

//     },
//   });
// }

