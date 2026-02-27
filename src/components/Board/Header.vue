<template>
  <div class="qkb-board-header">
    <slot name="header">
      <div class="qkb-board-header__title">{{ botTitle }}</div>
      <button
        v-if="expandable"
        type="button"
        @click="$emit('toggle-expand')"
        class="qkb-board-header__expand-btn"
        :title="isExpanded ? 'Collapse' : 'Expand'"
      >
        <svg viewBox="0 0 24 24" class="qkb-board-header__expand-icon">
          <path :d="isExpanded ? mdiWindowRestore : mdiWindowMaximize" fill="currentColor" />
        </svg>
      </button>
    </slot>
  </div>
</template>

<script setup>
import { mdiWindowMaximize, mdiWindowRestore } from '@mdi/js'

defineProps({
  botTitle: {
    type: String,
    default: 'Chatbot'
  },
  colorScheme: {
    type: String,
    default: '#1a4bff'
  },
  textColor: {
    type: String,
    default: '#fff'
  },
  expandable: {
    type: Boolean,
    default: true
  },
  isExpanded: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-expand'])
</script>

<style scoped>
.qkb-board-header {
  padding: 20px 20px 18px;
  background: linear-gradient(135deg, v-bind('colorScheme') 0%, color-mix(in srgb, v-bind('colorScheme') 85%, black) 100%);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.qkb-board-header__title {
  color: v-bind('textColor');
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
  flex: 1;
}

.qkb-board-header__expand-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  color: v-bind('textColor');
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.qkb-board-header__expand-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

.qkb-board-header__expand-btn:active {
  transform: scale(0.95);
}

.qkb-board-header__expand-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
}
</style>
