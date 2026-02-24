<template>
  <div class="qkb-msg-bubble-component qkb-msg-bubble-component--single-text">
    <!-- Attachments display -->
    <div v-if="mainData.attachments && mainData.attachments.length > 0" class="qkb-msg-attachments">
      <div 
        v-for="(attachment, idx) in mainData.attachments" 
        :key="idx" 
        class="qkb-msg-attachment"
      >
        <!-- Image attachment -->
        <img 
          v-if="attachment.type === 'input_image' && attachment.image_url"
          :src="attachment.image_url"
          class="qkb-msg-attachment__image"
          @click="openImage(attachment.image_url)"
          alt="Attached image"
        />
        <!-- File attachment -->
        <div 
          v-else-if="attachment.type === 'input_file'"
          class="qkb-msg-attachment__file"
        >
          <span class="qkb-msg-attachment__file-icon">📄</span>
          <span class="qkb-msg-attachment__file-name">{{ attachment.filename }}</span>
        </div>
      </div>
    </div>
    
    <div v-if="mainData.text" class="qkb-msg-bubble-component__text">{{ mainData.text }}</div>
  </div>
</template>

<script setup>
defineProps({
  mainData: {
    type: Object,
    required: true
  },
  msgBubbleBgBot: {
    type: String,
    default: '#f0f0f0'
  },
  msgBubbleColorBot: {
    type: String,
    default: '#000'
  },
  msgBubbleBgUser: {
    type: String,
    default: '#4356e0'
  },
  msgBubbleColorUser: {
    type: String,
    default: '#fff'
  },
  isUserMessage: {
    type: Boolean,
    default: false
  }
})

const openImage = (imageUrl) => {
  window.open(imageUrl, '_blank')
}
</script>

<style scoped>
.qkb-msg-bubble-component {
  max-width: 100%;
}

.qkb-msg-attachments {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
}

.qkb-msg-attachment {
  max-width: 100%;
}

.qkb-msg-attachment__image {
  max-width: 100%;
  max-height: 300px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  display: block;
}

.qkb-msg-attachment__image:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.qkb-msg-attachment__file {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: v-bind('isUserMessage ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.05)"');
  border-radius: 10px;
  border: v-bind('isUserMessage ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.08)"');
}

.qkb-msg-attachment__file-icon {
  font-size: 20px;
  line-height: 1;
}

.qkb-msg-attachment__file-name {
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.qkb-msg-bubble-component__text {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.5;
  background: v-bind('isUserMessage ? msgBubbleBgUser : msgBubbleBgBot');
  color: v-bind('isUserMessage ? msgBubbleColorUser : msgBubbleColorBot');
  box-shadow: v-bind('isUserMessage ? "0 2px 8px rgba(67, 86, 224, 0.2)" : "0 2px 6px rgba(0, 0, 0, 0.08)"');
  word-wrap: break-word;
  border: v-bind('isUserMessage ? "none" : "1px solid rgba(0, 0, 0, 0.05)"');
}
</style>
