<template>
  <Transition name="qkb-attach-fade">
    <v-card
      v-if="show"
      class="qkb-attachment-panel"
      elevation="8"
    >
      <v-card-title class="qkb-attachment-panel__header d-flex align-center justify-space-between pa-3">
        <span class="text-subtitle-2 font-weight-bold">Pending Attachments</span>
        <v-btn
          @click="$emit('add-files')"
          :color="colorScheme"
          size="small"
          variant="flat"
          prepend-icon="mdi-plus"
        >
          Add
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-3">
        <!-- Attachment list -->
        <div v-if="attachments.length === 0" class="qkb-attachment-panel__empty text-center text-caption text-grey py-4">
          No files yet — pick a file or paste an image.
        </div>
        
        <v-list v-else density="compact" class="pa-0">
          <v-list-item
            v-for="(att, idx) in attachments"
            :key="idx"
            class="px-2 mb-2 rounded"
          >
            <template v-slot:prepend>
              <v-avatar
                v-if="att.type === 'input_image' && att.previewUrl"
                :image="att.previewUrl"
                size="44"
                rounded="lg"
                class="qkb-attachment-panel__preview"
              ></v-avatar>
              <v-avatar
                v-else
                size="44"
                rounded="lg"
                color="grey-lighten-3"
              >
                <span class="text-h6">📄</span>
              </v-avatar>
            </template>

            <v-list-item-title class="text-caption font-weight-medium">
              {{ att.name }}
            </v-list-item-title>

            <template v-slot:append>
              <v-btn
                @click="$emit('remove-attachment', idx)"
                icon="mdi-close"
                size="x-small"
                variant="text"
                color="error"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>

      <v-divider></v-divider>
      
      <v-card-text class="pa-2 text-caption text-grey">
        Accepts images, PDFs, docs. Paste images directly.
      </v-card-text>
    </v-card>
  </Transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  attachments: {
    type: Array,
    default: () => []
  },
  colorScheme: {
    type: String,
    default: '#1b53d0'
  },
  windowPosition: {
    type: Object,
    default: () => ({
      bottom: '80px',
      right: '20px',
      top: null,
      left: null
    })
  },
  windowZIndex: {
    type: Number,
    default: 9999
  }
})

defineEmits(['add-files', 'remove-attachment'])
</script>

<style scoped>
.qkb-attachment-panel {
  position: absolute;
  min-width: 260px;
  max-width: 320px;
  z-index: v-bind('windowZIndex + 1');
  bottom: 100%;
  right: 0;
  margin-bottom: 8px;
  border-radius: 12px !important;
}

.qkb-attachment-panel__header {
  border-bottom: 1px solid #f0f0f0;
}

.qkb-attachment-panel__preview {
  border: 1.5px solid #e8eaed;
}

/* Transition */
.qkb-attach-fade-enter-active,
.qkb-attach-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.qkb-attach-fade-enter-from,
.qkb-attach-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
