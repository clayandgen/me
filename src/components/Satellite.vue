<template>
  <svg
    class="satellite"
    :width="size"
    :height="size"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient :id="'panel-' + uid" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#1e90ff" />
        <stop offset="100%" stop-color="#0a2a5c" />
      </linearGradient>
    </defs>
    <g class="sat-body">
      <rect x="8" y="28" width="16" height="6" :fill="`url(#panel-${uid})`" stroke="#5ac8fa" stroke-width="0.6" />
      <line x1="8" y1="31" x2="24" y2="31" stroke="#0a1830" stroke-width="0.4" />
      <rect x="40" y="28" width="16" height="6" :fill="`url(#panel-${uid})`" stroke="#5ac8fa" stroke-width="0.6" />
      <line x1="40" y1="31" x2="56" y2="31" stroke="#0a1830" stroke-width="0.4" />
      <rect x="24" y="24" width="16" height="14" fill="#c0c8d0" stroke="#fff" stroke-width="0.8" />
      <rect x="26" y="26" width="3" height="3" fill="#ffb84d" />
      <rect x="30" y="26" width="3" height="3" fill="#5ac8fa" />
      <circle cx="32" cy="22" r="2" fill="#ff4d6d" />
      <line x1="32" y1="20" x2="32" y2="14" stroke="#fff" stroke-width="0.8" />
      <path d="M 28 14 Q 32 8 36 14" fill="none" stroke="#5ac8fa" stroke-width="0.8" />
    </g>
    <g v-if="beam" class="beam" :style="{ transformOrigin: '32px 38px' }">
      <path d="M 32 38 L 24 60 L 40 60 Z" :fill="`url(#beam-${uid})`" opacity="0.5" />
    </g>
    <defs v-if="beam">
      <linearGradient :id="'beam-' + uid" x1="0.5" x2="0.5" y1="0" y2="1">
        <stop offset="0%" stop-color="#5ac8fa" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#5ac8fa" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
let counter = 0;
export default defineComponent({
  name: "Satellite",
  props: {
    size: { type: Number, default: 64 },
    beam: { type: Boolean, default: false }
  },
  data() {
    return { uid: ++counter };
  }
});
</script>

<style scoped>
.satellite {
  filter: drop-shadow(0 0 6px rgba(90, 200, 250, 0.6));
}
.beam {
  animation: beam-pulse 2.4s ease-in-out infinite;
}
@keyframes beam-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}
</style>
