import { copyFileSync } from 'node:fs';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: "types",
      afterBuild: () => {
        copyFileSync("types/lib.d.ts", "types/lib.d.cts");
      }
    })
  ],
  build: {
    lib: {
      entry: 'src/lib.tsx',
      name: 'CopyToClipboard',
      fileName: (format) => `lib.${format}.${format === "umd" ? "cjs" : "js"}`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', /^react\//, 'clipboard'],
      output: {
        globals: {
          vue: 'React',
          react: 'React',
        }
      }
    }
  }
})
