<template>
  <div class="qkb-msg-bubble qkb-msg-bubble--bot">
    <div class="qkb-msg-avatar">
      <div class="qkb-msg-avatar__img">&nbsp;</div>
    </div>
    <div class="qkb-msg-bubble-component qkb-msg-bubble-component--typing">
      <div class="qkb-msg-bubble-component__text">
        <div class="qkb-msg-bubble__typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
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
  }
})
</script>

<style scoped>
.qkb-msg-bubble {
  display: flex;
  gap: 10px;
  max-width: 80%;
  align-self: flex-start;
}

.qkb-msg-avatar {
  width: v-bind('botAvatarSize + "px"');
  height: v-bind('botAvatarSize + "px"');
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.qkb-msg-avatar__img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: v-bind('"url(" + botAvatarImg + ")"');
}

.qkb-msg-bubble-component__text {
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.4;
  background: v-bind('msgBubbleBgBot');
}

.qkb-msg-bubble__typing-indicator {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 10px 15px;
}

.qkb-msg-bubble__typing-indicator span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: v-bind('msgBubbleColorBot');
  animation: typing 1s infinite;
}

.qkb-msg-bubble__typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.qkb-msg-bubble__typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>
