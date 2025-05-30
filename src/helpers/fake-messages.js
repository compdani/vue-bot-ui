export const fakeMessages = [
  {
    'type': 'text',
    'text': 'Hello! 👋 Welcome to our support system. I can help you with various topics.',
    'disableInput': false
  },
  {
    'type': 'button',
    'text': 'How can I help you today? Choose an option below:',
    'options': [
      {
        'text': '🔍 Search Support Articles',
        'value': 'search',
        'onClick': () => {
          console.log('search')
        }
      },
      {
        'text': '🎫 Submit Support Ticket',
        'value': 'submit_ticket',
        'onClick': () => {
          console.log('submit_ticket')
        }
      },
      {
        'text': '💬 Test Multi-line Input',
        'value': 'test_input',
        'onClick': () => {
          console.log('test_input')
        }
      }
    ],
    'disableInput': true
  },
  {
    'type': 'text',
    'text': 'Great! Try the new input features:\n\n✨ Press Enter to send messages\n✨ Press Ctrl+Enter (or Cmd+Enter on Mac) to add line breaks\n✨ The input auto-resizes as you type\n\nGo ahead, try typing a multi-line message!',
    'disableInput': false
  },
  {
    'type': 'button',
    'text': 'Here are some helpful resources I found for you:',
    'options': [
      {
        'text': '📚 Getting Started Guide',
        'value': 'https://github.com/JuzSer/vue-bot-ui#quick-start',
        'action': 'url'
      },
      {
        'text': '⚙️ Configuration Options',
        'value': 'https://github.com/JuzSer/vue-bot-ui#ui-customization-options',
        'action': 'url'
      },
      {
        'text': '❌ Not what I\'m looking for',
        'value': 'result_not_match',
        'onClick': () => {
          console.log('result_not_match')
        }
      }
    ],
    'disableInput': true
  },
  {
    'type': 'text',
    'text': 'No problem! Let me help you differently.\n\nTry testing the new input features:\n• Type multiple lines using Ctrl+Enter\n• Send with Enter\n• Watch the auto-resize in action!',
    'disableInput': false
  },
  {
    'type': 'button',
    'text': 'Perfect! Your request has been processed. What would you like to do next?',
    'options': [
      {
        'text': '🔄 Try Again',
        'value': 'restart',
        'action': 'postback'
      },
      {
        'text': '📖 View Documentation',
        'value': 'https://github.com/JuzSer/vue-bot-ui',
        'action': 'url'
      }
    ],
    'disableInput': false
  }
]
