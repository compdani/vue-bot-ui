# Vue Bot UI

A highly customizable chatbot UI component for Vue.js applications.

<p align="center">
<img width="300" alt="vue bot UI" src="https://user-images.githubusercontent.com/5735071/71614782-52cc2280-2be0-11ea-8c1b-7af063401d3d.png">
</p>

## Features

- 🎨 Fully customizable UI (colors, sizes, animations)
- 💬 Multiple message types support (text, buttons)
- 🔌 Easy integration with any bot API
- ⚡ Event-driven architecture
- 🎯 Slot system for custom components
- 📱 Responsive design

## Installation

```bash
# Using npm
npm install vue-bot-ui

# Using yarn
yarn add vue-bot-ui
```

## Quick Start

1. Import and register the component:

```javascript
import { VueBotUI } from 'vue-bot-ui'

export default {
  components: {
    VueBotUI
  }
}
```

2. Use it in your template:

```vue
<template>
  <VueBotUI
    :messages="messages"
    :options="botOptions"
    @msg-send="handleMessageSend"
  />
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      botOptions: {
        botTitle: 'My Assistant',
        colorScheme: '#1b53d0',
        textColor: '#ffffff'
      }
    }
  },
  methods: {
    handleMessageSend(message) {
      // Handle the sent message
      console.log('Message sent:', message)
    }
  }
}
</script>
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `messages` | Array | `[]` | **Required.** Array of message objects |
| `options` | Object | See below | Customization options for the UI |
| `bot-typing` | Boolean | `false` | Shows bot typing indicator when true |
| `input-disable` | Boolean | `false` | Disables message input when true |
| `is-open` | Boolean | `false` | Opens the board on initialization when true |
| `open-delay` | Number | `undefined` | Delay (ms) before opening. Requires `is-open: true` |

## UI Customization Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `botTitle` | String | 'Chatbot' | Bot name shown in header |
| `colorScheme` | String | '#1b53d0' | Primary color for UI elements |
| `textColor` | String | '#fff' | Text color for header and bubble |
| `bubbleBtnSize` | Number | 56 | Size of bubble button (px) |
| `animation` | Boolean | true | Enable/disable animations |
| `boardContentBg` | String | '#fff' | Message box background |
| `botAvatarSize` | Number | 32 | Bot avatar size (px) |
| `botAvatarImg` | String | placeholder | Bot avatar image URL |
| `msgBubbleBgBot` | String | '#f0f0f0' | Bot message background |
| `msgBubbleColorBot` | String | '#000' | Bot message text color |
| `msgBubbleBgUser` | String | '#4356e0' | User message background |
| `msgBubbleColorUser` | String | '#fff' | User message text color |
| `inputPlaceholder` | String | 'Message' | Input placeholder text |
| `inputDisableBg` | String | '#fff' | Disabled input background |
| `inputDisablePlaceholder` | String | null | Disabled input placeholder |

## Message Types

### Text Message
```javascript
{
  agent: 'bot', // 'bot' or 'user'
  type: 'text',
  text: 'Hello! How can I help you?',
  disableInput: false
}
```

### Button Options
```javascript
{
  agent: 'bot',
  type: 'button',
  text: 'Please select an option:',
  disableInput: true,
  options: [
    {
      text: 'Open Google',
      value: 'https://google.com',
      action: 'url'
    },
    {
      text: 'Submit Ticket',
      value: 'submit_ticket',
      action: 'postback'
    }
  ]
}
```

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `init` | - | Fired when board opens |
| `msg-send` | `value` (Object) | Fired on message send/option select |
| `destroy` | - | Fired when board closes |

### Trigger Events
- `botui-open`: Opens the board
- `botui-close`: Closes the board
- `botui-toggle`: Toggles board state

## Available Slots

| Slot | Description |
|------|-------------|
| `header` | Board header content |
| `actions` | Additional actions beside send button |
| `sendButton` | Custom send button |
| `bubbleButton` | Custom bubble button |
| `botTyping` | Custom typing indicator |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Development

```bash
# Clone repository
git clone https://github.com/JuzSer/vue-bot-ui

# Install dependencies
yarn

# Run development server
yarn serve

# Build library
yarn build-bundle
```

## Roadmap

- [ ] Additional message bubble components (images, video)
- [ ] Enhanced button options with target property
- [ ] Additional events and callbacks
- [ ] Improved accessibility
- [ ] Comprehensive testing suite

## Credits
- Vue3 Migration from []
- Icons from [FlatIcon](https://www.flaticon.com/)
- Placeholder images from [Placehold.it](http://placehold.it)
- Date formatting by [date-fns](https://date-fns.org/)

## Contributors

- Danilo Urrutia ([@compdani](https://github.com/@compdani))
- Hoang Son Nguyen ([@juzser](https://github.com/juzser))
- Aleksey Morshnev ([@enorenio](https://github.com/enorenio))
- DOANDUYDAT ([@DOANDUYDAT](https://github.com/DOANDUYDAT))

## License

MIT

---

<p align="center">Made with ❤️ for the Vue.js community</p>
