import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/vue-bot-ui.js'),
      name: 'VueBotUI',
      fileName: (format) => {
        if (format === 'es') return 'vue-bot-ui.es.js'
        if (format === 'umd') return 'vue-bot-ui.umd.js'
        return `vue-bot-ui.${format}.js`
      },
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          return assetInfo.name
        }
      }
    },
    cssCodeSplit: false
  }
}) 