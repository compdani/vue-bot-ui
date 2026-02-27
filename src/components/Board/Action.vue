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
          <RichTextEditor
            ref="editorRef"
            v-model="messageText"
            :placeholder="placeholderText"
            :disabled="inputDisable"
            :show-toolbar="showToolbar"
          />
        </div>
        <div class="qkb-board-action__extra">
          <slot name="actions"></slot>
          <!-- Formatting toolbar toggle -->
          <v-btn
            @click="showToolbar = !showToolbar"
            :icon="mdiFormatText"
            variant="text"
            :color="showToolbar ? msgBubbleBgUser : 'grey-darken-1'"
            density="comfortable"
            size="small"
            :title="showToolbar ? 'Hide formatting toolbar' : 'Show formatting toolbar (keyboard shortcuts still work)'"
          ></v-btn>
          <!-- Attachment button integrated in input area -->
          <v-badge
            v-if="enableAttachments"
            :content="pendingAttachments.length"
            :model-value="pendingAttachments.length > 0"
            color="error"
            overlap
          >
            <v-btn
              @click="toggleAttachPanel"
              :icon="mdiPaperclip"
              variant="text"
              :color="pendingAttachments.length > 0 ? msgBubbleBgUser : 'grey-darken-1'"
              density="comfortable"
              size="small"
              :title="pendingAttachments.length > 0 ? `${pendingAttachments.length} attachment(s) – click to manage` : 'Attach files or images'"
            ></v-btn>
          </v-badge>
          <slot name="sendButton">
            <v-btn 
              @click="sendMessage"
              :disabled="!messageText || inputDisable"
              :icon="mdiSend"
              :color="msgBubbleBgUser"
              variant="flat"
              size="small"
              elevation="2"
            ></v-btn>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { mdiPaperclip, mdiSend, mdiFormatText } from '@mdi/js'
import AttachmentPanel from './AttachmentPanel.vue'
import RichTextEditor from './RichTextEditor.vue'

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

const messageText = ref('')
const editorRef = ref(null)
const showToolbar = ref(false)

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
    nextTick(() => {
      if (editorRef.value) {
        editorRef.value.focus()
      }
    })
  }
  
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
      type: 'mrkdwn' // Always send as markdown since rich text is converted to markdown
    }
    
    // Include attachments if any
    if (pendingAttachments.value.length > 0) {
      message.attachments = pendingAttachments.value.map(p => p.attachment)
    }
    
    emit('msg-send', message)
    
    // Clear message and attachments
    messageText.value = ''
    if (editorRef.value) {
      editorRef.value.clear()
    }
    pendingAttachments.value = []
    showAttachPanel.value = false
    
    nextTick(() => {
      if (editorRef.value) {
        editorRef.value.focus()
      }
    })
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
</script>

<style scoped>
.qkb-board-action-container {
  position: relative;
  overflow: visible;
}

.qkb-board-action {
  padding: 16px 20px 18px;
  border-top: 1px solid #e8eaed;
  background: #fafbfc;
}

.qkb-board-action__wrapper {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  border: 1.5px solid #e0e7ee;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.qkb-board-action__wrapper:focus-within {
  border-color: v-bind('msgBubbleBgUser');
  box-shadow: 0 0 0 3px rgba(67, 86, 224, 0.08);
}

.qkb-board-action--disabled .qkb-board-action__wrapper {
  background-color: v-bind('inputDisableBg');
  border-color: #e8eaed;
  opacity: 0.7;
}

.qkb-board-action__msg-box {
  flex: 1;
  position: relative;
  min-width: 0;
}

.qkb-board-action__extra {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  padding: 8px 12px;
  background: #fafbfc;
  border-top: 1px solid #f0f0f0;
}
</style>
