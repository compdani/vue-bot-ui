<template>
  <div class="qkb-board-header">
    <slot name="header">
      <div class="qkb-board-header__title">{{ botTitle }}</div>
    </slot>
  </div>
</template>

<script setup>
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
  }
})
</script>

<style scoped>
.qkb-board-header {
  padding: 20px 20px 18px;
  background: linear-gradient(135deg, v-bind('colorScheme') 0%, color-mix(in srgb, v-bind('colorScheme') 85%, black) 100%);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.qkb-board-header__title {
  color: v-bind('textColor');
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
}
</style>
