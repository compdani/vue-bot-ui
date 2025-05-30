<template>
  <div class="qkb-msg-bubble-component qkb-msg-bubble-component--button-options">
    <div class="qkb-msg-bubble-component__text">{{ mainData.text }}</div>
    <div class="qkb-msg-bubble-component__options-wrapper">
      <div
        v-for="(item, index) in mainData.options"
        :key="index"
        :class="{ active: selectedItem === item.value }"
        class="qkb-mb-button-options__item"
      >
        <button
          v-if="item.action !== 'url'"
          class="qkb-mb-button-options__btn"
          @click="handleButtonClick(item)"
        >
          <span>{{ item.text }}</span>
        </button>
        <a
          v-else
          :href="item.value"
          target="_blank"
          class="qkb-mb-button-options__btn qkb-mb-button-options__url"
        >
          <span>{{ item.text }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EventBus from '../../helpers/event-bus.js'

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

const selectedItem = ref(null)

const handleButtonClick = (item) => {
  selectedItem.value = item.value
  
  // Emit event through the event bus to BotUI parent
  EventBus.emit('button-clicked', {
    action: item.action || 'click',
    value: item.value,
    text: item.text,
    originalItem: item
  })
}

// Keep the isFunction for backward compatibility but we don't use it anymore
const isFunction = (option) => {
  if (typeof option === 'object' && option.onClick) {
    return true
  }
  return false
}

</script>

<style scoped>
.qkb-msg-bubble-component__text {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.4;
  background: v-bind('msgBubbleBgBot');
  color: v-bind('msgBubbleColorBot');
  margin-bottom: 8px;
}

.qkb-msg-bubble-component__options-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.qkb-mb-button-options__item {
  width: 100%;
}

.qkb-mb-button-options__btn {
  display: block;
  width: 100%;
  padding: 10px 16px;
  border: 1px solid v-bind('msgBubbleBgUser');
  border-radius: 12px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  color: v-bind('msgBubbleBgUser');
  transition: all 0.2s;
}

.qkb-mb-button-options__btn:hover {
  background: v-bind('msgBubbleBgUser');
  color: v-bind('msgBubbleColorUser');
}

.qkb-mb-button-options__item.active .qkb-mb-button-options__btn {
  background: v-bind('msgBubbleBgUser');
  color: v-bind('msgBubbleColorUser');
}
</style>
