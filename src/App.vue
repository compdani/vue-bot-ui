<template>
  <v-app>
    <v-container class="py-8">
      <div class="text-center mb-8">
        <img
          alt="Vue Bot UI"
          src="./assets/logo.png"
          style="max-width: 200px;"
        />
      </div>
      
      <v-card elevation="4" class="mb-8" color="blue-lighten-5">
        <v-card-title class="text-h4 text-primary">
          Vue Bot UI Demo
        </v-card-title>
        
        <v-card-text>
          <v-card class="mb-4" elevation="2">
            <v-card-title class="text-h6 d-flex align-center">
              <v-icon icon="mdi-sparkles" class="mr-2" color="amber"></v-icon>
              New Features
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item>
                  <v-list-item-title class="font-weight-bold mb-1">
                    Multi-line Messages
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    The input now supports multiple lines with auto-resize
                  </v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <v-list-item-title class="font-weight-bold mb-1">
                    Enter Key
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Press <v-chip size="x-small" color="grey-lighten-2">Enter</v-chip> to send your message
                  </v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <v-list-item-title class="font-weight-bold mb-1">
                    New Line
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Press <v-chip size="x-small" color="grey-lighten-2">Ctrl+Enter</v-chip> (Windows/Linux) or 
                    <v-chip size="x-small" color="grey-lighten-2" class="ml-1">Cmd+Enter</v-chip> (Mac) to add a new line
                  </v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item>
                  <v-list-item-title class="font-weight-bold mb-1">
                    Auto-resize
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    The textarea automatically grows as you type longer messages
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          
          <v-alert
            type="info"
            variant="tonal"
            icon="mdi-chat"
            prominent
          >
            <v-alert-title class="text-h6">Try it out!</v-alert-title>
            Click the chat bubble to open the bot and test the new input behaviors!
          </v-alert>
        </v-card-text>
      </v-card>

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
    </v-container>
  </v-app>
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
  inputDisableButtonPlaceholder: 'Please select one of the options above',
  enableAttachments: true
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
/* No custom styles needed - using Vuetify */
</style>
