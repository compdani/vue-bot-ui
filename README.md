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
- 🎯 Responsive design
- ⌨️ Smart keyboard controls (Shift+Enter to send, Enter for new lines)
- 🔄 Auto-resizing text input
- 💻 TypeScript support

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
        textColor: '#ffffff',
        bubbleZIndex: 10000,
        bubblePosition: {
          bottom: '30px',
          right: '30px',
          top: null,
          left: null
        },
        windowZIndex: 9999,
        windowPosition: {
          bottom: '20px',
          right: '20px',
          top: null,
          left: null
        }
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

## Button Message Implementation Example

Here's a complete example showing how to implement button messages with onClick functions defined in the message data:

```vue
<template>
  <VueBotUI
    :messages="messages"
    :options="botOptions"
    :bot-typing="isTyping"
    @msg-send="handleMessageSend"
  />
</template>

<script>
export default {
  data() {
    return {
      isTyping: false,
      messages: [
        {
          agent: 'bot',
          type: 'text',
          text: 'Hello! Welcome to our support system. How can I help you today?',
          disableInput: false
        }
      ],
      botOptions: {
        botTitle: 'Support Assistant',
        colorScheme: '#2563eb',
        textColor: '#ffffff'
      }
    }
  },
  methods: {
    // Handle regular text messages
    handleMessageSend(message) {
      console.log('Text message sent:', message)
      
      // Add user message to chat
      this.messages.push({
        agent: 'user',
        type: 'text',
        text: message.text,
        disableInput: false
      })
      
      // Process the text message
      this.processUserInput(message.text)
    },

    processUserInput(input) {
      // Show typing indicator
      this.isTyping = true

      // Simulate API call or processing delay
      setTimeout(() => {
        this.handleBotResponse(input)
        this.isTyping = false
      }, 1500)
    },

    handleBotResponse(userInput) {
      // Handle different user inputs
      if (userInput.toLowerCase().includes('help') || userInput === 'get_help') {
        this.sendMainMenu()
      } else if (userInput === 'technical_support') {
        this.sendTechnicalSupportMenu()
      } else if (userInput === 'billing_support') {
        this.sendBillingSupport()
      } else if (userInput === 'login_issue') {
        this.sendLoginHelp()
      } else if (userInput === 'human_support') {
        this.connectToHuman()
      } else {
        this.sendDefaultResponse()
      }
    },

    // Bot response methods with onClick functions in message data
    sendMainMenu() {
      this.addBotMessage({
        type: 'button',
        text: 'I can help you with several things. Please choose an option:',
        disableInput: true,
        onClick: (option) => {
          // Handle button click for this specific message
          console.log('Main menu option selected:', option)
          
          // Add user's selection to chat
          this.messages.push({
            agent: 'user',
            type: 'text',
            text: option.text,
            disableInput: false
          })
          
          // Process the selection
          this.processUserInput(option.value)
        },
        options: [
          {
            text: '🔧 Technical Support',
            value: 'technical_support',
            action: 'postback'
          },
          {
            text: '💳 Billing Questions',
            value: 'billing_support',
            action: 'postback'
          },
          {
            text: '📖 User Guide',
            value: 'https://example.com/guide',
            action: 'url'
          },
          {
            text: '👤 Talk to Human',
            value: 'human_support',
            action: 'postback'
          }
        ]
      })
    },

    sendTechnicalSupportMenu() {
      this.addBotMessage({
        type: 'button',
        text: 'What kind of technical issue are you experiencing?',
        disableInput: true,
        onClick: (option) => {
          // Custom handling for technical support menu
          console.log('Technical support option selected:', option)
          
          // Log analytics for technical issues
          this.logAnalytics('technical_support_selection', option.value)
          
          // Add user's selection to chat
          this.messages.push({
            agent: 'user',
            type: 'text',
            text: option.text,
            disableInput: false
          })
          
          // Process the selection
          this.processUserInput(option.value)
        },
        options: [
          {
            text: '🚫 Login Problems',
            value: 'login_issue',
            action: 'postback'
          },
          {
            text: '🐛 Bug Report',
            value: 'bug_report',
            action: 'postback'
          },
          {
            text: '⚡ Performance Issues',
            value: 'performance_issue',
            action: 'postback'
          },
          {
            text: '⬅️ Back to Main Menu',
            value: 'get_help',
            action: 'postback'
          }
        ]
      })
    },

    sendBillingSupport() {
      this.addBotMessage({
        type: 'text',
        text: 'I understand you have billing questions. Let me connect you with our billing specialist.',
        disableInput: false
      })
      
      // Follow up with priority selection
      setTimeout(() => {
        this.addBotMessage({
          type: 'button',
          text: 'How urgent is your billing issue?',
          disableInput: true,
          onClick: (option) => {
            // Custom handling for billing priority
            console.log('Billing priority selected:', option)
            
            // Call external billing API with priority
            this.callBillingAPI(option.value)
            
            // Add user's selection to chat
            this.messages.push({
              agent: 'user',
              type: 'text',
              text: option.text,
              disableInput: false
            })
            
            // Show confirmation message
            this.addBotMessage({
              type: 'text',
              text: `Got it! I've escalated your ${option.value} priority billing issue to our specialist team.`,
              disableInput: false
            })
          },
          options: [
            {
              text: '🔴 High Priority',
              value: 'high',
              action: 'postback'
            },
            {
              text: '🟡 Medium Priority',
              value: 'medium',
              action: 'postback'
            },
            {
              text: '🟢 Low Priority',
              value: 'low',
              action: 'postback'
            }
          ]
        })
      }, 1000)
    },

    sendLoginHelp() {
      this.addBotMessage({
        type: 'text',
        text: 'I can help you with login issues. First, please try clearing your browser cache and cookies, then attempt to log in again.',
        disableInput: false
      })
    },

    connectToHuman() {
      this.addBotMessage({
        type: 'text',
        text: 'I\'m connecting you with a human agent. Please wait a moment...',
        disableInput: true
      })
      
      // Call external API for human handoff
      this.callSupportAPI('connect_human')
    },

    sendDefaultResponse() {
      this.addBotMessage({
        type: 'button',
        text: 'I\'m not sure I understand. Here are some things I can help you with:',
        disableInput: true,
        onClick: (option) => {
          // Default fallback handling
          this.messages.push({
            agent: 'user',
            type: 'text',
            text: option.text,
            disableInput: false
          })
          this.processUserInput(option.value)
        },
        options: [
          {
            text: '❓ Get Help',
            value: 'get_help',
            action: 'postback'
          },
          {
            text: '📞 Contact Support',
            value: 'human_support',
            action: 'postback'
          }
        ]
      })
    },

    addBotMessage(message) {
      this.messages.push({
        agent: 'bot',
        ...message
      })
    },

    // Example external API integrations
    async callSupportAPI(action, data = {}) {
      try {
        const response = await fetch('/api/support', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action, data })
        })
        return await response.json()
      } catch (error) {
        console.error('Support API error:', error)
      }
    },

    async callBillingAPI(priority) {
      try {
        const response = await fetch('/api/billing/escalate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ priority, userId: this.currentUser?.id })
        })
        return await response.json()
      } catch (error) {
        console.error('Billing API error:', error)
      }
    },

    logAnalytics(event, value) {
      // Example analytics logging
      if (window.gtag) {
        window.gtag('event', event, { value })
      }
    }
  },

  mounted() {
    // Initialize with main menu
    setTimeout(() => {
      this.sendMainMenu()
    }, 2000)
  }
}
</script>

## Keyboard Controls

The input field supports intuitive keyboard shortcuts:

- **Enter**: Add a new line to your message
- **Shift+Enter**: Send the message
- **Auto-resize**: The textarea automatically adjusts height as you type

This behavior matches modern chat applications and allows for both single-line quick messages and multi-line formatted text.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `messages` | Array | `[]` | **Required.** Array of message objects |
| `options` | Object | See below | Customization options for the UI |
| `bot-typing` | Boolean | `false` | Shows bot typing indicator when true |
| `input-disable` | Boolean | `false` | Disables message input when true |
| `is-open` | Boolean | `false` | Opens the board on initialization when true |
| `open-delay` | Number | `undefined` | Delay (ms) before opening. Requires `is-open: true` |
| `:onButtonClick` | Function | - | Called when a button is clicked with the button option object |

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
| `inputPlaceholder` | String | 'Type here...' | Input placeholder text |
| `inputDisableBg` | String | '#fff' | Disabled input background |
| `inputDisablePlaceholder` | String | 'Hit the buttons above to respond' | Disabled input placeholder |
| `bubbleZIndex` | Number | 9999 | Z-index for the chat bubble |
| `bubblePosition` | Object | `{bottom: '20px', right: '20px', top: null, left: null}` | Position of the chat bubble |
| `windowZIndex` | Number | 9999 | Z-index for the entire chat window |
| `windowPosition` | Object | `{bottom: '20px', right: '20px', top: null, left: null}` | Position of the entire chat window |

### Positioning Examples

```javascript
// Default bottom-right position
bubblePosition: {
  bottom: '20px',
  right: '20px',
  top: null,
  left: null
}

// Top-left position for both window and bubble
windowPosition: {
  bottom: null,
  right: null,
  top: '20px',
  left: '20px'
}

bubblePosition: {
  bottom: null,
  right: null,
  top: '20px',
  left: '20px'
}

// Custom z-index for layering
windowZIndex: 10000,
bubbleZIndex: 10001
```

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
  onClick: (option) => {
    // Handle button click
    console.log('Selected:', option)
  },
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
- Originally forked from vue-bot-ui
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