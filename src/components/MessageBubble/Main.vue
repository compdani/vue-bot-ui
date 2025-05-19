<template>
  <div class="qkb-msg-bubble" :class="bubbleClass">
    <div v-if="message.agent === 'bot'" class="qkb-msg-avatar">
      <div class="qkb-msg-avatar__img">&nbsp;</div>
    </div>
    <component
      v-if="componentType"
      :is="componentType"
      :main-data="message"
    />
    <div v-if="message.createdAt" class="qkb-msg-bubble__time">
      {{ message.createdAt }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SingleText from './SingleText.vue'
import ButtonOptions from './ButtonOptions.vue'

const props = defineProps({
  message: {
    type: Object,
    required: true
  }
})

const bubbleClass = computed(() => 
  props.message.agent === 'bot'
    ? 'qkb-msg-bubble--bot'
    : 'qkb-msg-bubble--user'
)

const componentType = computed(() => {
  switch (props.message.type) {
    case 'button':
      return ButtonOptions
    default:
      return SingleText
  }
})
</script>

<style scoped>
.qkb-msg-bubble {
  display: flex;
  gap: 12px;
  max-width: 85%;
  margin: 4px 0;
}

.qkb-msg-bubble--bot {
  align-self: flex-start;
}

.qkb-msg-bubble--user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.qkb-msg-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: #f0f4ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qkb-msg-avatar__img {
  width: 24px;
  height: 24px;
  background-size: cover;
  background-position: center;
}

.qkb-msg-bubble__time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}
</style>
