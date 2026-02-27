import VueBotUI from './components/BotUI.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})

const Plugin = {
  install (app, options) {
    // Install Vuetify if not already installed
    if (!app._context.plugins.has(vuetify)) {
      app.use(vuetify)
    }
    
    app.component('VueBotUI', VueBotUI)

    if (options) {
      // console.log('options', options)
    }
  }
}

export default Plugin
export { VueBotUI }
