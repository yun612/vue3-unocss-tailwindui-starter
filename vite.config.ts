import * as path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Vue(),
    // https://github.com/unocss/unocss
    Unocss(), // unocss.config.ts
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
})
