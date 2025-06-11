<template>
  <div class="qkb-msg-bubble-component qkb-msg-bubble-component--markdown">
    <div class="qkb-msg-bubble-component__text" v-html="renderedMarkdown"></div>
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
</script>

<style scoped>
.qkb-msg-bubble-component {
  max-width: 100%;
}

.qkb-msg-bubble-component__text {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.4;
  background: v-bind('isUserMessage ? msgBubbleBgUser : msgBubbleBgBot');
  color: v-bind('isUserMessage ? msgBubbleColorUser : msgBubbleColorBot');
}

/* Markdown-specific styles */
.qkb-msg-bubble-component__text :deep(h1) {
  font-size: 1.5em;
  margin: 0.5em 0;
}

.qkb-msg-bubble-component__text :deep(h2) {
  font-size: 1.3em;
  margin: 0.5em 0;
}

.qkb-msg-bubble-component__text :deep(h3) {
  font-size: 1.1em;
  margin: 0.5em 0;
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
  margin: 0.25em 0;
}

.qkb-msg-bubble-component__text :deep(a) {
  color: inherit;
  text-decoration: underline;
  opacity: 0.9;
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