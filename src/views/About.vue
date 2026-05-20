<template>
  <div class="about">
    <Starfield />
    <Satellite class="floating-sat" :size="70" :beam="true" />

    <div class="topbar">
      <router-link to="/" class="back-link">
        <svg class="back-arrow" viewBox="0 0 24 12" aria-hidden="true">
          <path d="M 1 6 L 23 6 M 1 6 L 7 1 M 1 6 L 7 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="back-text">return to base</span>
      </router-link>
    </div>

    <section class="hero">
      <h1 class="hero-title">I architect &amp; ship software at scale</h1>
      <div class="hero-sub">
        From Earth observation to satellite ground software — translating mountains of data into systems people can actually fly.
      </div>
    </section>

    <section class="profile">
      <div class="profile-card">
        <div class="profile-header">
          <div class="profile-tag">// identity packet</div>
          <h2 class="profile-name">Clay Ito</h2>
          <div class="profile-role">Staff Software Engineer · Boulder, CO</div>
        </div>

        <p>
          Software engineer based in the Colorado mountains. I work across web apps,
          data operations, UI/UX, and machine learning — currently focused on satellite
          ground software: the systems on the ground that talk to spacecraft in orbit. My path started with an Applied
          Mathematics degree, which "taught me how to think". High-performance computing and elegant,
          efficient code are how I keep the day-to-day fun.
        </p>

        <p>
          My personality type is
          <a href="https://www.16personalities.com/enfj-personality" target="_blank">ENFJ</a>.
          Core values I bring to a crew:
        </p>

        <ul class="values">
          <li>
            <span class="value-name">Meaningful Work</span>
            — I want the work to push society forward, even marginally. Not interested in
            one-click burger buttons; very interested in environment, food security, safety,
            and space.
          </li>
          <li>
            <span class="value-name">Culture</span>
            — Culture is the hidden infrastructure. Know your crew, build the bond,
            care about their lives. Better relationships → better collaboration → safer,
            more sustainable code.
          </li>
          <li>
            <span class="value-name">Professional Development</span>
            — Learning outside of work teaches me what I love and what I don't. Both matter.
            It also keeps me a sharper mentor.
          </li>
          <li>
            <span class="value-name">Diversity, Inclusion, Belonging</span>
            — As a minority myself, I work to build environments where everyone can land safely
            and grow. Proud to have served as an ERG leader.
          </li>
        </ul>

        <p>
          While in grad school I worked as an Adjunct Instructor teaching CS, which set off a
          lifelong interest in teaching and mentorship. I've had phenomenal mentors; I owe the
          next class the same.
        </p>

        <p>
          More mission history on my resume:
        </p>

        <a
          class="resume-link"
          href="https://www.dropbox.com/s/csg8x7t0z5geh9i/Clay%20Kramp%20Resume.pdf?dl=0"
          target="_blank"
        >
          ↗ Clay Ito's resume (4/25/2022)
        </a>
      </div>
    </section>

    <footer class="signoff">
      <div class="signoff-text">🛰 signing off · stand by for next pass</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Starfield from "../components/Starfield.vue";
import Satellite from "../components/Satellite.vue";

export default defineComponent({
  name: "About",
  components: { Starfield, Satellite }
});
</script>

<style scoped>
.about {
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
.green { color: #5cff8a; }
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
  font-size: 1.1rem;
  max-width: 40rem;
  line-height: 1.6;
}
.profile {
  position: relative;
  z-index: 2;
  max-width: 56rem;
  margin: 4rem auto 0;
  padding: 0 3rem;
}
.profile-card {
  background: linear-gradient(135deg, rgba(20, 30, 60, 0.55) 0%, rgba(10, 10, 30, 0.2) 100%);
  border: 1px solid rgba(90, 200, 250, 0.25);
  border-radius: 16px;
  padding: 3rem;
  backdrop-filter: blur(8px);
  font-family: "Lato", sans-serif;
  color: #d4dbe4;
  font-size: 1.05rem;
  line-height: 1.7;
}
.profile-header { margin-bottom: 2rem; }
.profile-tag {
  font-family: "JetBrains Mono", monospace;
  color: #5ac8fa;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-size: 0.75rem;
}
.profile-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 3rem;
  color: white;
  margin: 0.3rem 0 0.4rem;
}
.profile-role {
  font-family: "JetBrains Mono", monospace;
  color: #ff8a3d;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
}
.profile-card p { margin: 1.25rem 0; }
.profile-card a {
  color: #5ac8fa;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}
.profile-card a:hover { color: #ff8a3d; }
.values {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}
.values li {
  margin: 1rem 0;
  padding-left: 1.5rem;
  position: relative;
}
.values li::before {
  content: "↪";
  position: absolute;
  left: 0;
  color: #5ac8fa;
}
.value-name {
  color: #ff8a3d;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
}
.resume-link {
  display: inline-block;
  margin-top: 1rem;
  font-family: "JetBrains Mono", monospace;
  color: #5ac8fa !important;
  border: 1px solid currentColor;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  letter-spacing: 0.1em;
  text-decoration: none !important;
}
.resume-link:hover {
  color: #ff8a3d !important;
  background: rgba(255, 138, 61, 0.08);
}
.floating-sat {
  position: absolute;
  top: 18%;
  right: 5%;
  z-index: 1;
  animation: float-sat 14s ease-in-out infinite;
}
.signoff {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 5rem;
  font-family: "JetBrains Mono", monospace;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.2em;
}
.signoff-line { font-size: 0.8rem; color: #5ac8fa; }
.signoff-text { margin-top: 0.5rem; font-size: 1rem; }

@keyframes float-sat {
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
  .hero, .profile { padding: 0 1.5rem; }
  .hero-title { font-size: 2.5rem; }
  .profile-card { padding: 1.5rem; }
  .floating-sat { display: none; }
}
</style>
