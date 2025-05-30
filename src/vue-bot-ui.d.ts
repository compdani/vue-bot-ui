import { App, Plugin } from 'vue'
import VueBotUI from './components/BotUI.vue'

declare const plugin: Plugin

export default plugin
export { VueBotUI }

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    VueBotUI: typeof VueBotUI
  }
} 