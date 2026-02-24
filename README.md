# Vue Bot UI

A highly customizable chatbot UI component for Vue.js applications.

<p align="center">
<img width="300" alt="vue bot UI" src="https://user-images.githubusercontent.com/5735071/71614782-52cc2280-2be0-11ea-8c1b-7af063401d3d.png">
</p>

## Features

- 🎨 Fully customizable UI (colors, sizes, animations)
- 💬 Multiple message types support (text, buttons)
- 🔌 Easy integration with any bot API
- ⚡ Event-driven architecture with event bus
- 🎯 Slot system for custom components
- 🎯 Responsive design
- ⌨️ Smart keyboard controls (Shift+Enter to send, Enter for new lines)
- 🔄 Auto-resizing text input
- 💻 TypeScript support
- 🔗 URL buttons with automatic link handling

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
    @button-clicked="handleButtonClick"
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
      // Handle text messages
      console.log('Message sent:', message)
    },
    handleButtonClick(buttonData) {
      // Handle button clicks
      console.log('Button clicked:', buttonData)
      
      // Add user selection to chat
      this.messages.push({
        agent: 'user',
        type: 'text',
        text: buttonData.text
      })
      
      // Process the button action
      this.processButtonAction(buttonData)
    }
  }
}
</script>
```

## Button Message Implementation Example

Here's a complete example showing how to implement button messages with the new event bus system:

```vue
<template>
  <VueBotUI
    :messages="messages"
    :options="botOptions"
    :bot-typing="isTyping"
    @msg-send="handleMessageSend"
    @button-clicked="handleButtonClick"
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

    // Handle button clicks through event bus
    handleButtonClick(buttonData) {
      console.log('Button clicked:', buttonData)
      
      // Add user's selection to chat
      this.messages.push({
        agent: 'user',
        type: 'text',
        text: buttonData.text,
        disableInput: false
      })
      
      // Process the button action
      this.processUserInput(buttonData.value)
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

    // Bot response methods using the new action-based button system
    sendMainMenu() {
      this.addBotMessage({
        type: 'button',
        text: 'I can help you with several things. Please choose an option:',
        disableInput: true,
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
| `inputDisablePlaceholder` | String | 'Please wait for bot response' | Disabled input placeholder (general) |
| `inputDisableButtonPlaceholder` | String | 'Please select an option above' | Disabled input placeholder for button messages |
| `enableAttachments` | Boolean | false | Enable file/image attachment functionality |
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

### Z-Index Stacking

All popup elements (attachment panel, etc.) automatically use the `windowZIndex` value to maintain proper stacking order. When you customize the z-index values, all related elements will respect this hierarchy:

- **bubbleZIndex**: Main chat bubble button
- **windowZIndex**: Chat window and all contained elements (input area, messages, attachment panel)
- **Attachment Panel**: Automatically uses `windowZIndex + 1` for proper layering

**Example with custom z-index:**
```javascript
botOptions: {
  bubbleZIndex: 1005,
  windowZIndex: 1006,
  // Attachment panel will use z-index: 1007
  // All popups will be properly stacked
}
```

This ensures that if you have other elements with different z-index values on your page, the bot UI won't have stacking conflicts.

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

### Markdown Message
```javascript
{
  agent: 'bot',
  type: 'mrkdwn',
  text: '# Hello!\n\nThis is **bold** and *italic* text.\n\n- List item 1\n- List item 2\n\n[Link](https://example.com)',
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
      text: 'Open Documentation',
      value: 'https://example.com/docs',
      action: 'url' // Opens link directly, no event fired
    },
    {
      text: 'Contact Support',
      value: 'contact_support',
      action: 'postback' // Fires button-clicked event
    },
    {
      text: 'Get Help',
      value: 'help_menu',
      action: 'postback' // Fires button-clicked event
    }
  ]
}
```

**Button Action Types:**
- `url`: Opens the URL in a new tab. No `button-clicked` event is fired.
- `postback`: Emits `button-clicked` event with button data for your application to handle.

## Event Bus Architecture

Vue Bot UI uses an internal event bus to handle button clicks efficiently across the component hierarchy. This ensures that button click handlers work correctly in both development and production builds.

### How It Works

1. **Button Click**: User clicks a button in the `ButtonOptions` component
2. **Event Emission**: The component emits a `button-clicked` event through the internal event bus
3. **Event Bubbling**: The `BotUI` component listens to the event bus and re-emits the event to its parent
4. **Parent Handling**: Your parent component receives the `@button-clicked` event and processes the action

### Benefits

- ✅ **Context Preservation**: No loss of scope or binding issues
- ✅ **Production Ready**: Works reliably in compiled/minified builds  
- ✅ **Clean Architecture**: Clear separation between UI and business logic
- ✅ **URL Handling**: Direct link buttons work automatically
- ✅ **Event-Driven**: Follows Vue.js best practices for component communication

### Migration from onClick

If you're upgrading from a version that used `onClick` handlers in button options:

**Before (deprecated):**
```javascript
options: [
  {
    text: 'Submit',
    value: 'submit',
    onClick: (option) => {
      console.log('clicked:', option)
    }
  }
]
```

**After (recommended):**
```javascript
// In your message data
options: [
  {
    text: 'Submit',
    value: 'submit',
    action: 'postback'
  }
]

// In your parent component
methods: {
  handleButtonClick(buttonData) {
    console.log('clicked:', buttonData)
  }
}
```

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `init` | - | Fired when board opens |
| `msg-send` | `value` (Object) | Fired on text message send |
| `button-clicked` | `buttonData` (Object) | Fired when a button is clicked |
| `destroy` | - | Fired when board closes |

### Button Click Event Data

The `button-clicked` event provides the following data structure:

```javascript
{
  action: 'postback', // or 'url'
  value: 'button_value',
  text: 'Button Text',
  originalItem: { /* original button option object */ }
}
```

**Action Types:**
- `postback`: Button that should trigger application logic
- `url`: Button that opens a link (handled automatically, no event fired)

### Trigger Events
- `botui-open`: Opens the board
- `botui-close`: Closes the board
- `botui-toggle`: Toggles board state

## File Attachments

Vue Bot UI supports file and image attachments. When enabled, users can attach files in three ways:
- Click the paperclip button and select files
- Paste images directly from clipboard (Ctrl/Cmd + V)
- Drag and drop files (coming soon)

### Enabling Attachments

Set `enableAttachments: true` in your options:

```javascript
const botOptions = {
  botTitle: 'My Assistant',
  colorScheme: '#1b53d0',
  enableAttachments: true, // Enable file attachments
  // ... other options
}
```

### Supported File Types

- **Images**: All image formats (jpg, png, gif, webp, etc.)
- **Documents**: PDF, DOC, DOCX, TXT, CSV, XLSX, XLS

### Handling Attachments in Messages

When a user sends a message with attachments, the `msg-send` event will include an `attachments` array:

```javascript
methods: {
  handleMessageSend(message) {
    console.log('Message:', message.text)
    
    if (message.attachments && message.attachments.length > 0) {
      message.attachments.forEach(attachment => {
        if (attachment.type === 'input_image') {
          // Handle image attachment
          console.log('Image URL:', attachment.image_url) // Base64 data URL
        } else if (attachment.type === 'input_file') {
          // Handle file attachment
          console.log('Filename:', attachment.filename)
          console.log('File data:', attachment.file_data) // Base64 data URL
        }
      })
    }
    
    // Send to your backend/API
    this.sendToAPI(message)
  }
}
```

### Attachment Data Structure

**Image Attachment:**
```typescript
{
  type: 'input_image',
  image_url: 'data:image/png;base64,iVBORw0KG...' // Base64 encoded
}
```

**File Attachment:**
```typescript
{
  type: 'input_file',
  filename: 'document.pdf',
  file_data: 'data:application/pdf;base64,JVBERi0x...' // Base64 encoded
}
```

### Displaying Attachments in Messages

Attachments are automatically displayed in message bubbles when included in the message data:

- **Images**: Displayed as clickable previews (max 300px height). Click to open full size in new tab.
- **Files**: Displayed with a file icon and filename in a styled container.

To show attachments in a bot response, include them in the message object:

```javascript
messageData.value.push({
  agent: 'bot',
  type: 'text',
  text: 'Here is the image you requested:',
  attachments: [
    {
      type: 'input_image',
      image_url: 'data:image/png;base64,...'
    }
  ]
})
```

**Note**: Both user and bot messages support attachment display. The styling automatically adapts to the message sender (user/bot) with appropriate colors and backgrounds.

### Complete Example with Attachments

```vue
<template>
  <VueBotUI
    :messages="messages"
    :options="botOptions"
    :bot-typing="botTyping"
    :input-disable="inputDisable"
    @msg-send="handleMessageSend"
  />
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      botTyping: false,
      inputDisable: false,
      botOptions: {
        botTitle: 'Assistant Bot',
        colorScheme: '#008B8B',
        enableAttachments: true, // Enable attachments
        inputPlaceholder: 'Type or paste an image...'
      }
    }
  },
  methods: {
    async handleMessageSend(message) {
      // Add user message to chat
      this.messages.push({
        agent: 'user',
        type: 'text',
        text: message.text
      })
      
      this.botTyping = true
      
      // Process attachments if any
      const attachments = message.attachments || []
      
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: message.text,
            attachments: attachments
          })
        })
        
        const data = await response.json()
        
        // Add bot response
        this.messages.push({
          agent: 'bot',
          type: 'text',
          text: data.response
        })
      } catch (error) {
        console.error('Error:', error)
      } finally {
        this.botTyping = false
      }
    }
  }
}
</script>
```

### TypeScript Support

Full TypeScript definitions are included:

```typescript
import type { 
  ChatAttachment, 
  Message, 
  BotUIOptions 
} from '@dreia/vue3-bot-ui'

interface MessageWithAttachments extends Message {
  attachments?: ChatAttachment[]
}

const handleMessage = (message: MessageWithAttachments) => {
  // Fully typed attachment handling
  message.attachments?.forEach(att => {
    if (att.type === 'input_image') {
      console.log(att.image_url)
    }
  })
}
```

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