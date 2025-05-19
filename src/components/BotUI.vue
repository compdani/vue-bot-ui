<template>
  <div class="qkb-bot-ui" :class="uiClasses">
    <transition name="qkb-fadeUp">
      <div class="qkb-board" v-if="botActive">
        <BoardHeader :bot-title="optionsMain.botTitle" @close-bot="botToggle">
          <template #header>
            <slot name="header"></slot>
          </template>
        </BoardHeader>
        <BoardContent :bot-typing="botTyping" :main-data="messages">
          <template #botTyping>
            <slot name="botTyping"></slot>
          </template>
        </BoardContent>
        <BoardAction
          :input-disable="inputDisable"
          :input-placeholder="optionsMain.inputPlaceholder"
          :input-disable-placeholder="optionsMain.inputDisablePlaceholder"
          @msg-send="sendMessage"
        >
          <template #actions>
            <slot name="actions"></slot>
          </template>
          <template #sendButton>
            <slot name="sendButton"></slot>
          </template>
        </BoardAction>
      </div>
    </transition>
    <div class="qkb-bot-bubble">
      <button class="qkb-bubble-btn" @click="botToggle">
        <slot name="bubbleButton">
          <transition name="qkb-scaleUp">
            <component 
              :is="BubbleIcon" 
              v-if="!botActive" 
              key="1" 
              class="qkb-bubble-btn-icon" 
            />
            <component 
              :is="CloseIcon" 
              v-else 
              key="2" 
              class="qkb-bubble-btn-icon qkb-bubble-btn-icon--close" 
            />
          </transition>
        </slot>
      </button>
    </div>
    <AppStyle :options="optionsMain" />
    <div class="qkb-preload-image">
      <div v-if="optionsMain.botAvatarImg" class="qkb-msg-avatar__img"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import EventBus from '../helpers/event-bus'
import Config from '../config'
import BoardHeader from './Board/Header.vue'
import BoardContent from './Board/Content.vue'
import BoardAction from './Board/Action.vue'
import AppStyle from './AppStyle.vue'
import BubbleIcon from '../assets/icons/bubble.svg'
import CloseIcon from '../assets/icons/close.svg'

const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  },
  messages: {
    type: Array
  },
  botTyping: {
    type: Boolean,
    default: false
  },
  inputDisable: {
    type: Boolean,
    default: false
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  openDelay: {
    type: Number
  }
})

const emit = defineEmits(['init', 'destroy', 'msg-send'])

const botActive = ref(false)

const defaultOptions = {
  botTitle: 'Chatbot',
  colorScheme: '#1b53d0',
  textColor: '#fff',
  bubbleBtnSize: 56,
  animation: true,
  boardContentBg: '#fff',
  botAvatarSize: 32,
  botAvatarImg: 'http://placehold.it/200x200',
  msgBubbleBgBot: '#f0f0f0',
  msgBubbleColorBot: '#000',
  msgBubbleBgUser: '#4356e0',
  msgBubbleColorUser: '#fff',
  inputPlaceholder: 'Message',
  inputDisableBg: '#fff',
  inputDisablePlaceholder: null
}

const optionsMain = computed(() => ({ ...defaultOptions, ...props.options }))

const uiClasses = computed(() => {
  const classes = []
  if (optionsMain.value.animation) {
    classes.push('qkb-bot-ui--animate')
  }
  return classes
})

const botOpen = () => {
  if (!botActive.value) {
    botToggle()
  }
}

const botClose = () => {
  if (botActive.value) {
    botToggle()
  }
}

const botToggle = () => {
  botActive.value = !botActive.value

  if (botActive.value) {
    EventBus.on('select-button-option', selectOption)
    emit('init')
  } else {
    EventBus.off('select-button-option')
    emit('destroy')
  }
}

const sendMessage = (value) => {
  emit('msg-send', value)
}

const selectOption = (value) => {
  emit('msg-send', value)
}

if (props.isOpen) {
  if (props.openDelay) {
    setTimeout(botOpen, props.openDelay)
  } else {
    botToggle()
  }
}

onMounted(() => {
  document.addEventListener(Config.EVENT_OPEN, botOpen)
  document.addEventListener(Config.EVENT_CLOSE, botClose)
  document.addEventListener(Config.EVENT_TOGGLE, botToggle)
})

onBeforeUnmount(() => {
  EventBus.off('select-button-option')
})
</script>

<style scoped>
.qkb-bot-ui {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.qkb-bot-ui--animate .qkb-board {
  transition: all 0.3s ease-in-out;
}

.qkb-board {
  position: absolute;
  right: 0;
  bottom: calc(100% + 20px);
  width: 350px;
  height: 500px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.qkb-bot-bubble {
  position: relative;
}

.qkb-bubble-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, box-shadow 0.2s;
  background: #1a4bff;
  box-shadow: 0 2px 10px rgba(26, 75, 255, 0.3);
}

.qkb-bubble-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 3px 15px rgba(26, 75, 255, 0.4);
}

.qkb-bubble-btn-icon {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.qkb-bubble-btn-icon--close {
  transform: rotate(45deg);
}

/* Transitions */
.qkb-fadeUp-enter-active,
.qkb-fadeUp-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.qkb-fadeUp-enter-from,
.qkb-fadeUp-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.qkb-scaleUp-enter-active,
.qkb-scaleUp-leave-active {
  transition: transform 0.2s;
}

.qkb-scaleUp-enter-from,
.qkb-scaleUp-leave-to {
  transform: scale(0);
}
</style>
