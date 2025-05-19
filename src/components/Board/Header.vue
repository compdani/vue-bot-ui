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
  }
})
</script>

<style scoped>
.qkb-board-header {
  padding: 16px 20px;
  background: #1a4bff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.qkb-board-header__title {
  color: white;
  font-size: 18px;
  font-weight: 600;
}
</style>
