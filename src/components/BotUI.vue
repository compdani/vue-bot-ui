<template>
  <div class="qkb-bot-ui" :class="uiClasses">
    <transition name="qkb-fadeUp">
      <div class="qkb-board" v-if="botActive">
        <BoardHeader 
          :bot-title="optionsMain.botTitle" 
          :color-scheme="optionsMain.colorScheme"
          :text-color="optionsMain.textColor"
          @close-bot="botToggle"
        >
          <template #header>
            <slot name="header"></slot>
          </template>
        </BoardHeader>
        <BoardContent 
          :bot-typing="botTyping" 
          :main-data="messages"
          :board-content-bg="optionsMain.boardContentBg"
          :bot-avatar-size="optionsMain.botAvatarSize"
          :bot-avatar-img="optionsMain.botAvatarImg"
          :msg-bubble-bg-bot="optionsMain.msgBubbleBgBot"
          :msg-bubble-color-bot="optionsMain.msgBubbleColorBot"
          :msg-bubble-bg-user="optionsMain.msgBubbleBgUser"
          :msg-bubble-color-user="optionsMain.msgBubbleColorUser"
        >
          <template #botTyping>
            <slot name="botTyping"></slot>
          </template>
        </BoardContent>
        <BoardAction
          :input-disable="inputDisable"
          :input-placeholder="optionsMain.inputPlaceholder"
          :input-disable-placeholder="optionsMain.inputDisablePlaceholder"
          :input-disable-button-placeholder="optionsMain.inputDisableButtonPlaceholder"
          :input-disable-bg="optionsMain.inputDisableBg"
          :msg-bubble-bg-user="optionsMain.msgBubbleBgUser"
          :last-message-type="lastMessageType"
          :enable-attachments="optionsMain.enableAttachments"
          :window-position="optionsMain.windowPosition"
          :window-z-index="optionsMain.windowZIndex"
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
    <div class="qkb-preload-image">
      <div v-if="optionsMain.botAvatarImg" class="qkb-msg-avatar__img"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Config from '../config'
import BoardHeader from './Board/Header.vue'
import BoardContent from './Board/Content.vue'
import BoardAction from './Board/Action.vue'
import BubbleIcon from '../assets/icons/bubble.svg'
import CloseIcon from '../assets/icons/close.svg'
import EventBus from '../helpers/event-bus.js'

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

const emit = defineEmits(['init', 'destroy', 'msg-send', 'button-clicked'])

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
  inputDisablePlaceholder: 'Please wait for bot response',
  inputDisableButtonPlaceholder: null,
  enableAttachments: false,
  bubbleZIndex: 9998,
  bubblePosition: {
    bottom: '20px',
    right: '20px',
    top: null,
    left: null
  },
  windowZIndex: 9999,
  windowPosition: {
    bottom: '80px',
    right: '20px',
    top: null,
    left: null
  }
}

const optionsMain = computed(() => ({ ...defaultOptions, ...props.options }))

const uiClasses = computed(() => {
  const classes = []
  if (optionsMain.value.animation) {
    classes.push('qkb-bot-ui--animate')
  }
  return classes
})

const lastMessageType = computed(() => {
  if (!props.messages || props.messages.length === 0) {
    return null
  }
  const lastMessage = props.messages[props.messages.length - 1]
  return lastMessage.type || null
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
    emit('init')
  } else {
    emit('destroy')
  }
}

const sendMessage = (value) => {
  emit('msg-send', value)
}

// Handle button clicks from event bus
const handleButtonClick = (buttonData) => {
  emit('button-clicked', buttonData)
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
  
  // Listen for button clicks from event bus
  EventBus.on('button-clicked', handleButtonClick)
})

onUnmounted(() => {
  // Clean up event bus listener
  EventBus.off('button-clicked', handleButtonClick)
})
</script>

<style scoped>
.qkb-bot-ui {
  position: fixed;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.qkb-bot-ui--animate .qkb-board {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.qkb-board {
  position: fixed;
  width: 350px;
  height: 500px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: v-bind('optionsMain.windowZIndex');
  bottom: v-bind('optionsMain.windowPosition.bottom || "auto"');
  right: v-bind('optionsMain.windowPosition.right || "auto"');
  top: v-bind('optionsMain.windowPosition.top || "auto"');
  left: v-bind('optionsMain.windowPosition.left || "auto"');
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.qkb-bot-bubble {
  position: fixed;
  z-index: v-bind('optionsMain.bubbleZIndex');
  bottom: v-bind('optionsMain.bubblePosition.bottom || "auto"');
  right: v-bind('optionsMain.bubblePosition.right || "auto"');
  top: v-bind('optionsMain.bubblePosition.top || "auto"');
  left: v-bind('optionsMain.bubblePosition.left || "auto"');
}

.qkb-bubble-btn {
  width: v-bind('optionsMain.bubbleBtnSize + "px"');
  height: v-bind('optionsMain.bubbleBtnSize + "px"');
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
  background: v-bind('optionsMain.colorScheme');
  box-shadow: 0 6px 20px rgba(26, 75, 255, 0.35), 0 2px 6px rgba(26, 75, 255, 0.2);
}

.qkb-bubble-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 28px rgba(26, 75, 255, 0.45), 0 4px 10px rgba(26, 75, 255, 0.25);
}

.qkb-bubble-btn:active {
  transform: translateY(-1px) scale(1.02);
}

.qkb-bubble-btn-icon {
  width: 26px;
  height: 26px;
  fill: v-bind('optionsMain.textColor');
  transition: transform 0.2s ease;
}

.qkb-bubble-btn-icon--close {
  transform: rotate(0deg);
}

/* Transitions */
.qkb-fadeUp-enter-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.qkb-fadeUp-leave-active {
  transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.4, 0, 1, 1);
}

.qkb-fadeUp-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.qkb-fadeUp-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.98);
}

.qkb-scaleUp-enter-active,
.qkb-scaleUp-leave-active {
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
}

.qkb-scaleUp-enter-from,
.qkb-scaleUp-leave-to {
  transform: scale(0) rotate(-45deg);
  opacity: 0;
}
</style>
