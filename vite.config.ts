import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/lib.tsx',
      name: 'CopyToClipboard',
      fileName: (format) => `lib.${format}.${format === "umd" ? "cjs" : "js"}`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        globals: {
          vue: 'React',
          react: 'React',
        }
      }
    }
  }
})
