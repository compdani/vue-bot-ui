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
  background: #f0f4ff;
  color: #1a1a1a;
}

:deep(.qkb-msg-bubble--user) .qkb-msg-bubble-component__text {
  background: #1a4bff;
  color: white;
}
</style>
