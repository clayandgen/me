<template>
  <div
    class="planet-wrap"
    :style="{ '--size': size + 'px' }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="orbit" v-if="ring"></div>
    <div
      class="planet"
      :style="{
        background: gradient,
        boxShadow: glow
      }"
    >
      <div class="planet-surface" :style="{ background: surface }"></div>
      <div class="planet-shadow"></div>
      <div class="atmosphere" v-if="atmosphere" :style="{ boxShadow: atmoGlow }"></div>
    </div>
    <div class="planet-label" v-if="label">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Planet",
  props: {
    size: { type: Number, default: 120 },
    color: { type: String, default: "#4a90e2" },
    accent: { type: String, default: "#1a3a5c" },
    ring: { type: Boolean, default: false },
    atmosphere: { type: Boolean, default: true },
    label: { type: String, default: "" }
  },
  data() {
    return { hover: false };
  },
  computed: {
    gradient(): string {
      return `radial-gradient(circle at 30% 30%, ${this.color} 0%, ${this.accent} 70%, #000 100%)`;
    },
    surface(): string {
      return `radial-gradient(circle at 70% 60%, transparent 30%, rgba(0,0,0,0.4) 70%),
              radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 40%),
              radial-gradient(circle at 60% 20%, rgba(255,255,255,0.1) 0%, transparent 30%)`;
    },
    glow(): string {
      const intensity = this.hover ? 60 : 30;
      return `0 0 ${intensity}px ${this.color}80, inset -20px -20px 50px rgba(0,0,0,0.6)`;
    },
    atmoGlow(): string {
      return `0 0 40px 8px ${this.color}40`;
    }
  }
});
</script>

<style scoped>
.planet-wrap {
  position: relative;
  width: var(--size);
  height: var(--size);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.planet {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  animation: planet-spin 60s linear infinite;
}
.planet-wrap:hover .planet {
  transform: scale(1.1);
}
.planet-surface {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  mix-blend-mode: overlay;
}
.planet-shadow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 80% 80%, transparent 40%, rgba(0,0,0,0.7) 100%);
  pointer-events: none;
}
.atmosphere {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  pointer-events: none;
  transition: box-shadow 0.5s ease;
}
.orbit {
  position: absolute;
  width: 140%;
  height: 32%;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  transform: rotateX(72deg);
  pointer-events: none;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
}
.planet-label {
  position: absolute;
  bottom: -2.5rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  color: white;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  white-space: nowrap;
  text-shadow: 0 0 12px rgba(0, 200, 255, 0.6);
  opacity: 0.85;
}
@keyframes planet-spin {
  from { background-position: 0% 50%; }
  to { background-position: 100% 50%; }
}
</style>
