<template>
  <div class="mission" :class="{ 'mission--right': side === 'right', 'mission--open': open }">
    <div class="mission-line"></div>

    <div class="planet-slot" @click="open = !open">
      <Planet
        :size="planetSize"
        :color="color"
        :accent="accent"
        :ring="ring"
        :atmosphere="true"
      />
      <Satellite v-if="satellite" class="orbit-sat" :size="34" :beam="open" />
      <div class="coord">{{ coord }}</div>
    </div>

    <div class="dossier" @click="open = !open">
      <div class="dossier-header">
        <div class="mission-tag">MISSION {{ index }}</div>
        <div class="dossier-dates">{{ dates }}</div>
      </div>
      <div class="dossier-workplace">{{ workplace }}</div>
      <div class="dossier-title">{{ title }}</div>
      <div class="dossier-body" :class="{ 'dossier-body--open': open }">
        <div class="dossier-body-inner">
          <div v-html="description"></div>
          <a class="dossier-link" :href="link" target="_blank" @click.stop>
            ↗ {{ linkTitle }}
          </a>
        </div>
      </div>
      <div class="dossier-toggle">{{ open ? "▾ collapse log" : "▸ open mission log" }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Planet from "./Planet.vue";
import Satellite from "./Satellite.vue";

export default defineComponent({
  name: "WorkItem",
  components: { Planet, Satellite },
  props: {
    workplace: String,
    title: String,
    dates: String,
    description: String,
    link: String,
    linkTitle: String,
    color: { type: String, default: "#5ac8fa" },
    accent: { type: String, default: "#173a5e" },
    planetSize: { type: Number, default: 160 },
    ring: { type: Boolean, default: false },
    satellite: { type: Boolean, default: false },
    side: { type: String, default: "left" },
    index: { type: Number, default: 1 },
    coord: { type: String, default: "" }
  },
  data() {
    return { open: false };
  }
});
</script>

<style scoped>
.mission {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 4rem 0;
  min-height: 22rem;
}
.mission--right {
  direction: rtl;
}
.mission--right > * {
  direction: ltr;
}
.mission-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, transparent 0%, rgba(90, 200, 250, 0.4) 20%, rgba(90, 200, 250, 0.4) 80%, transparent 100%);
  transform: translateX(-50%);
  pointer-events: none;
}
.planet-slot {
  position: relative;
  justify-self: end;
  cursor: pointer;
  width: fit-content;
  padding: 1.5rem;
}
.mission--right .planet-slot {
  justify-self: start;
}
.orbit-sat {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -17px 0 0 -17px;
  animation: sat-orbit 14s linear infinite;
}
.coord {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  color: rgba(90, 200, 250, 0.7);
  text-align: center;
  letter-spacing: 0.15em;
  margin-top: 0.75rem;
}
.dossier {
  font-family: "Lato", sans-serif;
  color: white;
  cursor: pointer;
  padding: 1.5rem 1.75rem;
  border-left: 2px solid rgba(90, 200, 250, 0.4);
  background: linear-gradient(135deg, rgba(10, 20, 50, 0.55) 0%, rgba(10, 10, 30, 0.2) 100%);
  border-radius: 0 12px 12px 0;
  backdrop-filter: blur(6px);
  transition: transform 0.4s ease, border-color 0.4s ease, background 0.4s ease;
  max-width: 38rem;
}
.mission--right .dossier {
  border-left: none;
  border-right: 2px solid rgba(90, 200, 250, 0.4);
  border-radius: 12px 0 0 12px;
  justify-self: end;
  text-align: right;
}
.dossier:hover {
  border-color: rgba(255, 138, 61, 0.7);
  background: linear-gradient(135deg, rgba(20, 30, 60, 0.7) 0%, rgba(10, 10, 30, 0.3) 100%);
}
.mission--open .dossier {
  border-color: #ff8a3d;
}
.dossier-header {
  display: flex;
  justify-content: space-between;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: #5ac8fa;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}
.mission--right .dossier-header {
  flex-direction: row-reverse;
}
.dossier-dates {
  color: #ffb84d;
}
.dossier-workplace {
  font-family: "JetBrains Mono", monospace;
  font-size: 3rem;
  line-height: 1;
  color: white;
  margin-bottom: 0.5rem;
}
.dossier-title {
  font-size: 1.25rem;
  color: #ff8a3d;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}
.dossier-body {
  font-size: 0.95rem;
  line-height: 1.55;
  color: #d4dbe4;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.6s ease, opacity 0.4s ease, margin 0.4s ease;
}
.dossier-body--open {
  max-height: 60em;
  opacity: 1;
  margin-top: 0.5rem;
}
.dossier-body-inner {
  padding-top: 0.5rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.18);
}
.dossier-link {
  display: inline-block;
  margin-top: 1rem;
  color: #5ac8fa;
  font-family: "JetBrains Mono", monospace;
  letter-spacing: 0.1em;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}
.dossier-link:hover {
  color: #ff8a3d;
}
.dossier-toggle {
  margin-top: 0.75rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

@keyframes sat-orbit {
  from { transform: rotate(0deg) translateX(110px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
}

@media (max-width: 900px) {
  .mission {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 0;
  }
  .mission-line { left: 32px; }
  .planet-slot, .mission--right .planet-slot {
    justify-self: start;
    padding-left: 56px;
  }
  .dossier, .mission--right .dossier {
    border-left: 2px solid rgba(90, 200, 250, 0.4);
    border-right: none;
    border-radius: 0 12px 12px 0;
    margin-left: 56px;
    text-align: left;
    justify-self: start;
  }
  .mission--right .dossier-header { flex-direction: row; }
  @keyframes sat-orbit {
    from { transform: rotate(0deg) translateX(75px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(75px) rotate(-360deg); }
  }
}
</style>
