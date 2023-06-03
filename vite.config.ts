/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    // https://github.com/btd/rollup-plugin-visualizer/issues/124
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    visualizer({ filename: 'node_modules/.visualizer/stats.html' }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#61dafb',
          'link-color': '#61dafb',
          'border-radius-base': '0.25rem',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
