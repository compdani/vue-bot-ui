<template>
  <Transition name="qkb-attach-fade">
    <div v-if="show" class="qkb-attachment-panel">
      <div class="qkb-attachment-panel__header">
        <span class="qkb-attachment-panel__title">Pending Attachments</span>
        <button
          type="button"
          @click="$emit('add-files')"
          class="qkb-attachment-panel__add-btn"
          title="Add file"
        >
          + Add
        </button>
      </div>

      <!-- Attachment list -->
      <div v-if="attachments.length === 0" class="qkb-attachment-panel__empty">
        No files yet — pick a file or paste an image.
      </div>
      <div
        v-for="(att, idx) in attachments"
        :key="idx"
        class="qkb-attachment-panel__item"
      >
        <img
          v-if="att.type === 'input_image' && att.previewUrl"
          :src="att.previewUrl"
          class="qkb-attachment-panel__preview"
          :title="att.name"
        />
        <span
          v-else
          class="qkb-attachment-panel__file-icon"
        >📄</span>
        <span class="qkb-attachment-panel__name" :title="att.name">
          {{ att.name }}
        </span>
        <button
          type="button"
          @click="$emit('remove-attachment', idx)"
          class="qkb-attachment-panel__remove-btn"
          title="Remove"
        >✕</button>
      </div>

      <div class="qkb-attachment-panel__footer">
        Accepts images, PDFs, docs. Paste images directly.
      </div>
    </div>
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
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
  padding: 12px;
  min-width: 260px;
  max-width: 320px;
  z-index: v-bind('windowZIndex + 1');
  bottom: 100%;
  right: 0;
  margin-bottom: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.qkb-attachment-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
}

.qkb-attachment-panel__title {
  font-size: 0.813rem;
  font-weight: 600;
  color: #2c3e50;
  letter-spacing: -0.01em;
}

.qkb-attachment-panel__add-btn {
  background: v-bind('colorScheme');
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.qkb-attachment-panel__add-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
}

.qkb-attachment-panel__empty {
  font-size: 0.75rem;
  color: #95a5a6;
  text-align: center;
  padding: 16px 8px;
  line-height: 1.5;
}

.qkb-attachment-panel__item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.qkb-attachment-panel__item:hover {
  background-color: #f8f9fa;
}

.qkb-attachment-panel__preview {
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
  border: 1.5px solid #e8eaed;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.qkb-attachment-panel__file-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #f0f2f5 100%);
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 1.3rem;
  border: 1.5px solid #e8eaed;
}

.qkb-attachment-panel__name {
  font-size: 0.75rem;
  color: #2c3e50;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-weight: 500;
}

.qkb-attachment-panel__remove-btn {
  background: #fff;
  border: 1.5px solid #e0e0e0;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  cursor: pointer;
  color: #95a5a6;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.qkb-attachment-panel__remove-btn:hover {
  background: #fee;
  border-color: #e74c3c;
  color: #e74c3c;
  transform: scale(1.1);
}

.qkb-attachment-panel__footer {
  font-size: 0.688rem;
  color: #95a5a6;
  margin-top: 8px;
  border-top: 1px solid #f0f0f0;
  padding-top: 8px;
  line-height: 1.4;
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
