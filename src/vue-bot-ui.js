import VueBotUI from './components/BotUI.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as compnents from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
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
