import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue()
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
      external: ['vue', 'vuetify'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify'
        },
        assetFileNames: (assetInfo) => {
          return assetInfo.name
        }
      }
    },
    cssCodeSplit: false
  }
}) 