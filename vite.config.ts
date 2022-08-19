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
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
