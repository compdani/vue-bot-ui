<template>
  <div class="qkb-board-action" :class="actionClass">
    <div class="qkb-board-action__wrapper">
      <div class="qkb-board-action__msg-box">
        <textarea
          ref="qkbMessageInput"
          v-model="messageText"
          class="qkb-board-action__input"
          :disabled="inputDisable"
          :placeholder="placeholderText"
          @keydown="handleKeydown"
          @input="resizeTextarea"
          rows="1"
        ></textarea>
      </div>
      <div class="qkb-board-action__extra">
        <slot name="actions"></slot>
        <button 
          class="qkb-action-item qkb-action-item--send" 
          @click="sendMessage"
          :disabled="!messageText || inputDisable"
        >
          <slot name="sendButton">
            <component :is="IconSend" class="qkb-action-icon qkb-action-icon--send" />
          </slot>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import IconSend from '../../assets/icons/send.svg'

const props = defineProps({
  inputPlaceholder: {
    type: String,
    default: 'Type here...'
  },
  inputDisablePlaceholder: {
    type: String,
    default: 'Please wait for bot response'
  },
  inputDisableButtonPlaceholder: {
    type: String,
    default: 'Please select an option above'
  },
  inputDisable: {
    type: Boolean,
    default: false
  },
  inputDisableBg: {
    type: String,
    default: '#fff'
  },
  msgBubbleBgUser: {
    type: String,
    default: '#4356e0'
  },
  lastMessageType: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['msg-send'])

const messageText = ref(null)
const qkbMessageInput = ref(null)

const actionClass = computed(() => {
  const actionClasses = []

  if (props.inputDisable) {
    actionClasses.push('qkb-board-action--disabled')
  }

  if (messageText.value) {
    actionClasses.push('qkb-board-action--typing')
  }

  return actionClasses
})

const placeholderText = computed(() => {
  if (!props.inputDisable) {
    return props.inputPlaceholder
  }
  
  // If input is disabled and last message type is button, use button-specific placeholder
  if (props.lastMessageType === 'button' && props.inputDisableButtonPlaceholder) {
    return props.inputDisableButtonPlaceholder
  }
  
  // Otherwise use regular disable placeholder
  return props.inputDisablePlaceholder
})

onMounted(() => {
  if (!props.inputDisable) {
    qkbMessageInput.value?.focus()
  }
  resizeTextarea()
})

const sendMessage = () => {
  if (messageText.value && !props.inputDisable) {
    emit('msg-send', { text: messageText.value })
    messageText.value = null
    qkbMessageInput.value?.focus()
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Enter') {
    if (event.shiftKey) {
      // Shift+Enter: send message
      event.preventDefault()
      sendMessage()
    } else {
      // Regular Enter: allow default behavior (add newline)
      return
    }
  }
}

const resizeTextarea = () => {
  if (qkbMessageInput.value) {
    qkbMessageInput.value.style.height = 'auto'
    qkbMessageInput.value.style.height = qkbMessageInput.value.scrollHeight + 'px'
  }
}

watch(messageText, () => {
  nextTick(() => {
    resizeTextarea()
  })
})
</script>

<style scoped>
.qkb-board-action {
  padding: 16px 20px;
  border-top: 1px solid #eee;
  background: white;
}

.qkb-board-action__wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f8f9fb;
  border-radius: 24px;
  padding: 6px;
}

.qkb-board-action--disabled .qkb-board-action__wrapper {
  background-color: v-bind('inputDisableBg');
}

.qkb-board-action__msg-box {
  flex: 1;
  position: relative;
}

.qkb-board-action__input {
  width: 100%;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  line-height: 1.5;
  color: #1a1a1a;
  background: transparent;
  resize: none;
  font-family: inherit;
  min-height: 20px;
  max-height: 120px;
  overflow-y: auto;
}

.qkb-board-action__input::placeholder {
  color: #999;
}

.qkb-board-action--disabled .qkb-board-action__input {
  cursor: not-allowed;
  color: #999;
}

.qkb-board-action__extra {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qkb-action-item {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.qkb-action-item:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.qkb-action-item--send {
  background: v-bind('msgBubbleBgUser');
  color: white;
}

.qkb-action-item--send:not(:disabled):hover {
  background: #0035e0;
  transform: scale(1.05);
}

.qkb-action-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
