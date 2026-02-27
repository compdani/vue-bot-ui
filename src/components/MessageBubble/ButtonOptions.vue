<template>
  <div class="qkb-msg-bubble-component qkb-msg-bubble-component--button-options">
    <v-card 
      elevation="2" 
      class="qkb-msg-bubble-component__text"
      :color="msgBubbleBgBot"
    >
      <v-card-text class="pb-2">
        {{ mainData.text }}
      </v-card-text>
    </v-card>
    <div class="qkb-msg-bubble-component__options-wrapper">
      <div
        v-for="(item, index) in mainData.options"
        :key="index"
        class="qkb-mb-button-options__item"
      >
        <v-btn
          v-if="item.action !== 'url'"
          @click="handleButtonClick(item)"
          :color="selectedItem === item.value ? msgBubbleBgUser : 'white'"
          :variant="selectedItem === item.value ? 'flat' : 'outlined'"
          block
          class="qkb-mb-button-options__btn"
          elevation="2"
        >
          <span>{{ item.text }}</span>
        </v-btn>
        <v-btn
          v-else
          :href="item.value"
          target="_blank"
          color="white"
          variant="outlined"
          block
          class="qkb-mb-button-options__btn qkb-mb-button-options__url"
          elevation="2"
        >
          <span>{{ item.text }}</span>
        </v-btn>
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
  margin-bottom: 10px;
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
  text-transform: none !important;
  font-weight: 500 !important;
  letter-spacing: normal !important;
}
</style>
