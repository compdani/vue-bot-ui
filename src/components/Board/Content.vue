<template>
  <div class="qkb-board-content" ref="boardContent">
    <div class="qkb-board-content__bubbles" ref="boardBubbles">
      <MessageBubbleMain
        v-for="(item, index) in mainData"
        :key="index"
        :message="item"
      />
      <div v-if="botTyping" class="qkb-board-content__bot-typing">
        <slot name="botTyping">
          <MessageTyping />
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import MessageBubbleMain from '../MessageBubble/Main.vue'
import MessageTyping from '../MessageBubble/Typing.vue'

const props = defineProps({
  mainData: {
    type: Array,
    required: true
  },
  botTyping: {
    type: Boolean,
    default: false
  }
})

const boardContent = ref(null)
const boardBubbles = ref(null)

const updateScroll = () => {
  const contentElm = boardContent.value
  const offsetHeight = boardBubbles.value.offsetHeight
  contentElm.scrollTop = offsetHeight
}

watch(() => props.mainData, () => {
  nextTick(() => {
    updateScroll()
  })
})
</script>

<style scoped>
.qkb-board-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.qkb-board-content__bubbles {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
