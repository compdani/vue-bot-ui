<template>
  <v-toolbar
    :color="colorScheme"
    dark
    class="qkb-board-header"
    elevation="2"
  >
    <slot name="header">
      <v-toolbar-title class="qkb-board-header__title">
        {{ botTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="expandable"
        @click="$emit('toggle-expand')"
        :icon="isExpanded ? mdiWindowRestore : mdiWindowMaximize"
        variant="text"
        density="comfortable"
        :title="isExpanded ? 'Collapse' : 'Expand'"
      ></v-btn>
    </slot>
  </v-toolbar>
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
  border-top-left-radius: 16px !important;
  border-top-right-radius: 16px !important;
}

.qkb-board-header__title {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.02em;
}
</style>
