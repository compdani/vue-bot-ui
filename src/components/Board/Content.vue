<template>
  <div class="qkb-board-content" ref="boardContent">
    <div class="qkb-board-content__bubbles" ref="boardBubbles">
      <MessageBubbleMain
        v-for="(item, index) in mainData"
        :key="index"
        :message="item"
        :bot-avatar-size="botAvatarSize"
        :bot-avatar-img="botAvatarImg"
        :msg-bubble-bg-bot="msgBubbleBgBot"
        :msg-bubble-color-bot="msgBubbleColorBot"
        :msg-bubble-bg-user="msgBubbleBgUser"
        :msg-bubble-color-user="msgBubbleColorUser"
      />
      <div v-if="botTyping" class="qkb-board-content__bot-typing">
        <slot name="botTyping">
          <MessageTyping 
            :bot-avatar-size="botAvatarSize"
            :bot-avatar-img="botAvatarImg"
            :msg-bubble-bg-bot="msgBubbleBgBot"
            :msg-bubble-color-bot="msgBubbleColorBot"
          />
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
  },
  boardContentBg: {
    type: String,
    default: '#fff'
  },
  botAvatarSize: {
    type: Number,
    default: 32
  },
  botAvatarImg: {
    type: String,
    default: 'http://placehold.it/200x200'
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
  background-color: v-bind('boardContentBg');
}

.qkb-board-content__bubbles {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
