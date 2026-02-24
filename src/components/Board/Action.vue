<template>
  <div class="qkb-board-action-container">
    <!-- Hidden file input -->
    <input
      type="file"
      ref="fileInputRef"
      accept="image/*,application/pdf,.pdf,.doc,.docx,.txt,.csv,.xlsx,.xls"
      multiple
      style="display:none"
      @change="handleFileInput"
    />

    <!-- Attachment panel -->
    <AttachmentPanel
      :show="showAttachPanel"
      :attachments="pendingAttachments"
      :color-scheme="msgBubbleBgUser"
      :window-position="windowPosition"
      :window-z-index="windowZIndex"
      @add-files="triggerFileInput"
      @remove-attachment="removeAttachment"
    />

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
          <!-- Attachment button integrated in input area -->
          <button
            v-if="enableAttachments"
            type="button"
            @click="toggleAttachPanel"
            class="qkb-action-item qkb-action-item--attach"
            :class="{ 'qkb-action-item--attach-active': pendingAttachments.length > 0 }"
            :title="pendingAttachments.length > 0 ? `${pendingAttachments.length} attachment(s) – click to manage` : 'Attach files or images'"
          >
            <component :is="IconPaperclip" class="qkb-action-icon" />
            <span
              v-if="pendingAttachments.length > 0"
              class="qkb-attach-badge"
            >{{ pendingAttachments.length }}</span>
          </button>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import IconSend from '../../assets/icons/send.svg'
import IconPaperclip from '../../assets/icons/paperclip.svg'
import AttachmentPanel from './AttachmentPanel.vue'

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
  },
  enableAttachments: {
    type: Boolean,
    default: false
  },
  windowPosition: {
    type: Object,
    default: () => ({
      bottom: '80px',
      right: '20px',
      top: null,
      left: null
    })
  },
  windowZIndex: {
    type: Number,
    default: 9999
  }
})

const emit = defineEmits(['msg-send'])

const messageText = ref(null)
const qkbMessageInput = ref(null)

// ── Attachment state ──────────────────────────────────────────────────────────
const pendingAttachments = ref([])
const showAttachPanel = ref(false)
const fileInputRef = ref(null)

function toggleAttachPanel() {
  showAttachPanel.value = !showAttachPanel.value
}

function triggerFileInput() {
  fileInputRef.value?.click()
}

function removeAttachment(idx) {
  pendingAttachments.value.splice(idx, 1)
  if (pendingAttachments.value.length === 0) {
    showAttachPanel.value = false
  }
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

async function addFileAttachment(file) {
  const dataUrl = await fileToBase64(file)
  const isImage = file.type.startsWith('image/')

  if (isImage) {
    pendingAttachments.value.push({
      type: 'input_image',
      name: file.name || 'pasted-image.png',
      previewUrl: dataUrl,
      attachment: { type: 'input_image', image_url: dataUrl }
    })
  } else {
    pendingAttachments.value.push({
      type: 'input_file',
      name: file.name,
      attachment: { type: 'input_file', filename: file.name, file_data: dataUrl }
    })
  }
  showAttachPanel.value = true
}

async function handleFileInput(event) {
  const input = event.target
  if (!input.files) return
  for (const file of Array.from(input.files)) {
    await addFileAttachment(file)
  }
  // Reset so the same file can be picked again
  input.value = ''
}

async function handlePaste(event) {
  if (!props.enableAttachments) return
  const items = event.clipboardData?.items
  if (!items) return
  for (const item of Array.from(items)) {
    if (item.kind === 'file' && item.type.startsWith('image/')) {
      const file = item.getAsFile()
      if (file) {
        event.preventDefault()
        await addFileAttachment(file)
      }
    }
  }
}
// ─────────────────────────────────────────────────────────────────────────────

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
  
  // Add paste event listener if attachments are enabled
  if (props.enableAttachments) {
    document.addEventListener('paste', handlePaste)
  }
})

onUnmounted(() => {
  if (props.enableAttachments) {
    document.removeEventListener('paste', handlePaste)
  }
})

const sendMessage = () => {
  if (messageText.value && !props.inputDisable) {
    const message = { 
      text: messageText.value,
      type: 'text'
    }
    
    // Include attachments if any
    if (pendingAttachments.value.length > 0) {
      message.attachments = pendingAttachments.value.map(p => p.attachment)
    }
    
    emit('msg-send', message)
    
    // Clear message and attachments
    messageText.value = null
    pendingAttachments.value = []
    showAttachPanel.value = false
    
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
  padding: 16px 20px 18px;
  border-top: 1px solid #e8eaed;
  background: #fafbfc;
}

.qkb-board-action__wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 24px;
  padding: 4px 4px 4px 16px;
  border: 1.5px solid #e0e7ee;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.qkb-board-action__wrapper:focus-within {
  border-color: v-bind('msgBubbleBgUser');
  box-shadow: 0 0 0 3px rgba(67, 86, 224, 0.1);
}

.qkb-board-action--disabled .qkb-board-action__wrapper {
  background-color: v-bind('inputDisableBg');
  border-color: #e8eaed;
}

.qkb-board-action__msg-box {
  flex: 1;
  position: relative;
}

.qkb-board-action__input {
  width: 100%;
  padding: 8px 0;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  line-height: 1.5;
  color: #2c3e50;
  background: transparent;
  resize: none;
  font-family: inherit;
  min-height: 22px;
  max-height: 120px;
  overflow-y: auto;
}

.qkb-board-action__input::placeholder {
  color: #95a5a6;
}

.qkb-board-action--disabled .qkb-board-action__input {
  cursor: not-allowed;
  color: #95a5a6;
}

.qkb-board-action__extra {
  display: flex;
  align-items: center;
  gap: 6px;
}

.qkb-action-item {
  background: none;
  border: none;
  padding: 9px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: relative;
}

.qkb-action-item:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.qkb-action-item--attach {
  color: #5a6c7d;
}

.qkb-action-item--attach:hover {
  background: rgba(0, 0, 0, 0.05);
}

.qkb-action-item--attach-active {
  color: v-bind('msgBubbleBgUser');
  background: rgba(67, 86, 224, 0.1);
}

.qkb-action-item--send {
  background: v-bind('msgBubbleBgUser');
  color: white;
  box-shadow: 0 2px 6px rgba(67, 86, 224, 0.25);
}

.qkb-action-item--send:not(:disabled):hover {
  background: #2d3fd3;
  transform: translateY(-1px) scale(1.05);
  box-shadow: 0 4px 10px rgba(67, 86, 224, 0.35);
}

.qkb-action-item--send:not(:disabled):active {
  transform: translateY(0) scale(1);
}

.qkb-action-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.qkb-attach-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: #fff;
  border-radius: 50%;
  min-width: 16px;
  height: 16px;
  padding: 0 3px;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  box-shadow: 0 1px 3px rgba(231, 76, 60, 0.4);
  border: 1.5px solid #fff;
}
</style>
