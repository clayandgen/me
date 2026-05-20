<template>
  <div class="contact">
    <Starfield />
    <Satellite class="hovering-sat" :size="90" :beam="true" />

    <div class="topbar">
      <router-link to="/" class="back-link">
        <svg class="back-arrow" viewBox="0 0 24 12" aria-hidden="true">
          <path d="M 1 6 L 23 6 M 1 6 L 7 1 M 1 6 L 7 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="back-text">return to base</span>
      </router-link>
      <div class="hud">
        <span class="hud-dot"></span>
        OPEN CHANNEL · LISTENING FOR EARTHLINGS
      </div>
    </div>

    <section class="hero">
      <div class="hero-tag">// open channel</div>
      <h1 class="hero-title">📡 Hailing frequencies open.</h1>
      <div class="hero-sub">
        Bounce a signal off any of the relays below — I&apos;m listening.
      </div>
    </section>

    <section class="channels">
      <a class="channel" href="mailto:krampcg23@gmail.com">
        <div class="channel-icon">✉</div>
        <div class="channel-body">
          <div class="channel-label">Subspace email</div>
          <div class="channel-value">krampcg23 {at} gmail {dot} com</div>
        </div>
        <div class="channel-arrow">↗</div>
      </a>

      <a class="channel" href="https://www.linkedin.com/in/clayandgen/" target="_blank">
        <div class="channel-icon">⌬</div>
        <div class="channel-body">
          <div class="channel-label">Professional network</div>
          <div class="channel-value">linkedin.com/in/clayandgen</div>
        </div>
        <div class="channel-arrow">↗</div>
      </a>

      <a class="channel" href="https://openc3.com/" target="_blank">
        <div class="channel-icon">🛰</div>
        <div class="channel-body">
          <div class="channel-label">Current orbit</div>
          <div class="channel-value">OpenC3 · COSMOS satellite ground software</div>
        </div>
        <div class="channel-arrow">↗</div>
      </a>
    </section>

    <footer class="signoff">
      <div class="signoff-line">// transmission window: always</div>
      <div class="signoff-text">🛰 standing by · catch you on the next pass</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Starfield from "../components/Starfield.vue";
import Satellite from "../components/Satellite.vue";

export default defineComponent({
  name: "Contact",
  components: { Starfield, Satellite }
});
</script>

<style scoped>
.contact {
  position: relative;
  min-height: 100vh;
  color: white;
  background: #000;
  padding-bottom: 6rem;
}
.topbar {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  font-family: "JetBrains Mono", monospace;
}
.back-link {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}
.back-link:hover { color: #5ac8fa; }
.back-arrow {
  width: 1.6rem;
  height: 0.8rem;
  display: block;
  flex-shrink: 0;
}
.back-text { line-height: 1; }
.hud {
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  color: #5ac8fa;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}
.hud-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #5cff8a;
  box-shadow: 0 0 8px #5cff8a;
  animation: pulse-dot 1.4s ease-in-out infinite;
}
.hero {
  position: relative;
  z-index: 2;
  max-width: 64rem;
  margin: 3rem auto 2rem;
  padding: 0 3rem;
}
.hero-tag {
  font-family: "JetBrains Mono", monospace;
  color: #5ac8fa;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-size: 0.85rem;
}
.hero-title {
  font-family: "JetBrains Mono", monospace;
  font-size: 4rem;
  margin: 0.5rem 0 1rem;
  line-height: 1.05;
  background: linear-gradient(90deg, #ffffff 0%, #5ac8fa 60%, #b388ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(90, 200, 250, 0.35));
}
.hero-sub {
  font-family: "Lato", sans-serif;
  color: #c8d4e2;
  font-size: 1.15rem;
  max-width: 40rem;
  line-height: 1.6;
}
.channels {
  position: relative;
  z-index: 2;
  max-width: 56rem;
  margin: 3rem auto 0;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.channel {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 1.75rem;
  background: linear-gradient(135deg, rgba(20, 30, 60, 0.55) 0%, rgba(10, 10, 30, 0.2) 100%);
  border: 1px solid rgba(90, 200, 250, 0.25);
  border-radius: 14px;
  color: white;
  text-decoration: none;
  backdrop-filter: blur(8px);
  transition: transform 0.3s, border-color 0.3s, background 0.3s;
}
.channel:hover {
  transform: translateX(8px);
  border-color: #ff8a3d;
  background: linear-gradient(135deg, rgba(30, 40, 80, 0.7) 0%, rgba(10, 10, 30, 0.3) 100%);
}
.channel-icon {
  font-size: 2rem;
  width: 3rem;
  text-align: center;
  color: #5ac8fa;
  filter: drop-shadow(0 0 8px rgba(90, 200, 250, 0.6));
}
.channel-body { flex: 1; }
.channel-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: #5ac8fa;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}
.channel-value {
  font-family: "Lato", sans-serif;
  font-size: 1.15rem;
  color: white;
  margin-top: 0.25rem;
}
.channel-arrow {
  font-family: "JetBrains Mono", monospace;
  color: #ff8a3d;
  font-size: 1.5rem;
}
.hovering-sat {
  position: absolute;
  top: 40%;
  right: 6%;
  z-index: 1;
  animation: hover-sat 8s ease-in-out infinite;
}
.signoff {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 5rem;
  font-family: "JetBrains Mono", monospace;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.2em;
}
.signoff-line { font-size: 0.8rem; color: #5ac8fa; }
.signoff-text { margin-top: 0.5rem; font-size: 1rem; }

@keyframes hover-sat {
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50% { transform: translateY(-30px) rotate(4deg); }
}
@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.6; }
}

@media (max-width: 900px) {
  .topbar { padding: 1rem 1.5rem; }
  .hud { display: none; }
  .hero, .channels { padding: 0 1.5rem; }
  .hero-title { font-size: 2.5rem; }
  .hovering-sat { display: none; }
}
</style>
