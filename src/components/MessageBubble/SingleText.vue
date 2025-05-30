<template>
  <div class="qkb-msg-bubble-component qkb-msg-bubble-component--single-text">
    <div class="qkb-msg-bubble-component__text">{{ mainData.text }}</div>
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
</style>
