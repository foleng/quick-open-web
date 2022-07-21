import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        background: path.resolve(__dirname, 'background.html'),
        popup: path.resolve(__dirname, 'popup.html'),
      },
    },
  }
})
