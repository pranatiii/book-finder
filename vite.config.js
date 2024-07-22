import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {proxy: {'/books': "http://localhost:3031"}},
  base: "/Books"

})



