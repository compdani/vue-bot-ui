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
          v-if="item.action === 'postback'"
          class="qkb-mb-button-options__btn"
          @click="selectOption(item)"
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
import EventBus from '../../helpers/event-bus'

const props = defineProps({
  mainData: {
    type: Object,
    required: true
  }
})

const selectedItem = ref(null)

const selectOption = (value) => {
  selectedItem.value = value
  EventBus.emit('select-button-option', value)
}
</script>

<style scoped>
.qkb-msg-bubble-component__text {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.4;
  background: #f0f4ff;
  color: #1a1a1a;
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
  border: 1px solid #1a4bff;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  color: #1a4bff;
  transition: all 0.2s;
}

.qkb-mb-button-options__btn:hover {
  background: #1a4bff;
  color: white;
}

.qkb-mb-button-options__item.active .qkb-mb-button-options__btn {
  background: #1a4bff;
  color: white;
}
</style>
