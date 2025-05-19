<template>
  <div id="app">
    <img
      alt="Vue Bot UI"
      src="./assets/logo.png"
    />
    <VueBotUI
      :options="botOptions"
      :messages="messageData"
      :bot-typing="botTyping"
      :input-disable="inputDisable"
      :is-open="false"
      @init="botStart"
      @msg-send="msgSend"
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
  inputPlaceholder: 'Type hereeee...',
  inputDisableBg: '#fff',
  inputDisablePlaceholder: 'Hit the buttons above to respond'
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
      type: 'text',
      text: 'Hello'
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
</script>

<style scoped>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
