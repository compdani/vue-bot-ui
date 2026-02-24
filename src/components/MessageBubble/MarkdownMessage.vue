<template>
  <div class="qkb-msg-bubble-component qkb-msg-bubble-component--markdown">
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
    
    <div v-if="mainData.text" class="qkb-msg-bubble-component__text" v-html="renderedMarkdown"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'

const props = defineProps({
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

const md = new MarkdownIt({
  html: false,        // Disable HTML tags in source
  breaks: true,       // Convert '\n' in paragraphs into <br>
  linkify: true,      // Autoconvert URL-like text to links
  typographer: true   // Enable some language-neutral replacement + quotes beautification
})

const renderedMarkdown = computed(() => {
  return md.render(props.mainData.text)
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

/* Markdown-specific styles */
.qkb-msg-bubble-component__text :deep(h1) {
  font-size: 1.5em;
  margin: 0.5em 0 0.3em;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.qkb-msg-bubble-component__text :deep(h2) {
  font-size: 1.3em;
  margin: 0.5em 0 0.3em;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.qkb-msg-bubble-component__text :deep(h3) {
  font-size: 1.1em;
  margin: 0.5em 0 0.3em;
  font-weight: 600;
}

.qkb-msg-bubble-component__text :deep(p) {
  margin: 0.5em 0;
}

.qkb-msg-bubble-component__text :deep(ul),
.qkb-msg-bubble-component__text :deep(ol) {
  margin: 0.5em 0;
  padding-left: 1.5em;
}

.qkb-msg-bubble-component__text :deep(li) {
  margin: 0.3em 0;
}

.qkb-msg-bubble-component__text :deep(a) {
  color: inherit;
  text-decoration: underline;
  opacity: 0.9;
  transition: opacity 0.2s ease;
}

.qkb-msg-bubble-component__text :deep(a:hover) {
  opacity: 1;
}

.qkb-msg-bubble-component__text :deep(code) {
  background: rgba(0, 0, 0, 0.1);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
}

.qkb-msg-bubble-component__text :deep(pre) {
  background: rgba(0, 0, 0, 0.1);
  padding: 1em;
  border-radius: 4px;
  overflow-x: auto;
  margin: 0.5em 0;
}

.qkb-msg-bubble-component__text :deep(pre code) {
  background: none;
  padding: 0;
  border-radius: 0;
}

.qkb-msg-bubble-component__text :deep(blockquote) {
  border-left: 4px solid rgba(0, 0, 0, 0.1);
  margin: 0.5em 0;
  padding-left: 1em;
  opacity: 0.8;
}

.qkb-msg-bubble-component__text :deep(hr) {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 1em 0;
}

.qkb-msg-bubble-component__text :deep(table) {
  border-collapse: collapse;
  margin: 0.5em 0;
  width: 100%;
}

.qkb-msg-bubble-component__text :deep(th),
.qkb-msg-bubble-component__text :deep(td) {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5em;
  text-align: left;
}

.qkb-msg-bubble-component__text :deep(th) {
  background: rgba(0, 0, 0, 0.05);
}
</style>