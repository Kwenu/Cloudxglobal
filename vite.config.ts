import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages publishes this project as a repository site:
// https://kwenu.github.io/Cloudxglobal/
export default defineConfig({
  plugins: [react()],
  // Relative asset URLs work both on GitHub Pages (/Cloudxglobal/) and
  // on Vercel/custom domains (/).
  base: './',
})
