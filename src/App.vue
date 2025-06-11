<template>
  <div id="app">
    <img
      alt="Vue Bot UI"
      src="./assets/logo.png"
    />
    
    <div class="demo-instructions">
      <h2>Vue Bot UI Demo</h2>
      <div class="features">
        <h3>✨ New Features</h3>
        <div class="feature-list">
          <div class="feature">
            <strong>Multi-line Messages:</strong> The input now supports multiple lines with auto-resize
          </div>
          <div class="feature">
            <strong>Enter Key:</strong> Press <kbd>Enter</kbd> to send your message
          </div>
          <div class="feature">
            <strong>New Line:</strong> Press <kbd>Ctrl+Enter</kbd> (Windows/Linux) or <kbd>Cmd+Enter</kbd> (Mac) to add a new line
          </div>
          <div class="feature">
            <strong>Auto-resize:</strong> The textarea automatically grows as you type longer messages
          </div>
        </div>
      </div>
      
      <div class="try-it">
        <p>💬 <strong>Try it out:</strong> Click the chat bubble to open the bot and test the new input behaviors!</p>
      </div>
    </div>

    <VueBotUI
      :options="botOptions"
      :messages="messageData"
      :bot-typing="botTyping"
      :input-disable="inputDisable"
      :is-open="false"
      @init="botStart"
      @msg-send="msgSend"
      @button-clicked="handleButtonClick"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BotIcon from './assets/icons/bot.png'
import { VueBotUI } from './vue-bot-ui'
import { messageService } from './helpers/message'

const messageData = ref([])
const botTyping = ref(false)
const inputDisable = ref(false)

const botOptions = {
  botAvatarImg: BotIcon,
  boardContentBg: '#f4f4f4',
  msgBubbleBgBot: '#fff',
  inputPlaceholder: 'Type your message... (Enter to send, Ctrl+Enter for new line)',
  inputDisableBg: '#fff',
  inputDisablePlaceholder: 'Bot is typing, please wait...',
  inputDisableButtonPlaceholder: 'Please select one of the options above'
}

const botStart = () => {
  // Get token if you want to build a private bot
  // Request first message here

  // Fake typing for the first message
  botTyping.value = true
  setTimeout(() => {
    botTyping.value = false
    messageData.value.push({
      agent: 'bot',
      type: 'mrkdwn',
      text: '# Welcome to Vue Bot UI! 👋\n\nThis demo showcases the new **markdown** support with features like:\n\n- *Italic* and **bold** text\n- [Links](https://example.com)\n- `Code snippets`\n- Lists and more!\n\nTry the new input features:\n• Press Enter to send\n• Press Ctrl+Enter (or Cmd+Enter on Mac) to add line breaks\n• The input will auto-resize for longer messages'
    })
  }, 1000)
}

const msgSend = (value) => {
  // Push the user's message to board
  messageData.value.push({
    agent: 'user',
    type: 'text',
    text: value.text
  })

  getResponse()
}

// Submit the message from user to bot API, then get the response from Bot
const getResponse = () => {
  // Loading
  botTyping.value = true

  // Post the message from user here
  // Then get the response as below

  // Create new message from fake data
  messageService.createMessage()
    .then((response) => {
      const replyMessage = {
        agent: 'bot',
        ...response
      }

      inputDisable.value = response.disableInput
      messageData.value.push(replyMessage)

      // finish
      botTyping.value = false
    })
}

const handleButtonClick = (buttonData) => {
  // Handle button click logic here
  console.log('Button clicked:', buttonData)
  
  // Add user's selection to chat
  messageData.value.push({
    agent: 'user',
    type: 'text',
    text: buttonData.text,
    disableInput: false
  })
  
  // Process the selection by getting another response
  getResponse()
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.demo-instructions {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 40px;
  border-left: 4px solid #1a4bff;
}

.demo-instructions h2 {
  margin-top: 0;
  color: #1a4bff;
  font-size: 2em;
}

.demo-instructions h3 {
  color: #333;
  margin-bottom: 16px;
  font-size: 1.2em;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature {
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 3px solid #e9ecef;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.feature strong {
  color: #1a4bff;
}

kbd {
  background: #f1f3f4;
  border: 1px solid #dadce0;
  border-radius: 4px;
  color: #3c4043;
  font-family: monospace;
  font-size: 0.875em;
  padding: 2px 6px;
}

.try-it {
  margin-top: 20px;
  padding: 16px;
  background: linear-gradient(135deg, #1a4bff, #0035e0);
  color: white;
  border-radius: 8px;
  text-align: center;
}

.try-it p {
  margin: 0;
  font-size: 1.1em;
}
</style>
