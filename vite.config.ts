import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This setting is required for GitHub Pages to find your assets (CSS/JS)
  // when deployed to a subdirectory (e.g., username.github.io/repo-name/).
  base: './', 
})