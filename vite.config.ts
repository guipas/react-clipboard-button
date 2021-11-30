import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/CopyToClipboard.tsx'),
      name: 'CopyToClipboard',
      fileName: (format) => `lib.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        globals: {
          vue: 'React'
        }
      }
    }
  }
})
