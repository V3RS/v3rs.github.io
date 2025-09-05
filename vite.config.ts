import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.MP4', '**/*.mov', '**/*.mp4', '**/*.avi', '**/*.webm', '**/*.MOV', '**/*.AVI', '**/*.WEBM']
})
