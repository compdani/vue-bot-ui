import { App, Plugin } from 'vue'
import VueBotUI from './components/BotUI.vue'
import type { VuetifyPlugin } from 'vuetify'

declare const plugin: Plugin

export default plugin
export { VueBotUI }

// Export types
export * from './types'

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    VueBotUI: typeof VueBotUI
  }
} 