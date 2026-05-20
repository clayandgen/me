<template>
  <div class="space-hero">
    <Starfield :fixed="true" />

    <div class="telemetry-panel">
      <div class="tp-header">
        <span class="tp-dot"></span>
        TELEMETRY · LIVE
      </div>
      <div class="tp-row" v-for="s in stats" :key="s.label">
        <span class="tp-label">{{ s.label }}</span>
        <span class="tp-value">{{ s.value }}</span>
      </div>
    </div>

    <section class="fold-1">
      <div class="callsign">// transmission ↯ 38.4 MHz</div>

      <div class="left-stack">
        <h1 class="title">
          <span class="title-line">CLAY</span>
          <span class="title-line">ITO</span>
        </h1>
        <div class="subtitle">
          Staff Software Engineer · writing code for satellites from Colorado
        </div>

        <div class="stack-chips">
          <span class="chip" v-for="t in tech" :key="t">{{ t }}</span>
        </div>

        <div class="hero-links">
          <router-link to="/work" class="cta-link">→ Work</router-link>
          <router-link to="/about" class="cta-link">→ About</router-link>
          <router-link to="/contact" class="cta-link">→ Contact</router-link>
          <a
            href="https://github.com/clayandgen"
            target="_blank"
            rel="noopener"
            class="cta-link cta-link--gh"
          >
            → GitHub
          </a>
        </div>

        <div class="now-card">
          <div class="now-header">
            <span class="now-led"></span>
            <span class="now-tag">// now in orbit</span>
          </div>
          <div class="now-body">
            <div class="now-title">OpenC3 · COSMOS</div>
            <div class="now-sub">
              Building open-source satellite ground software — command and control for spacecraft in orbit.
            </div>
            <router-link to="/work" class="now-link">view mission log →</router-link>
          </div>
        </div>
      </div>

      <div class="earth-scope">
        <svg viewBox="0 0 520 520" class="scope-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="earth-fill" cx="0.38" cy="0.36" r="0.7">
              <stop offset="0%" stop-color="#79d5ff" />
              <stop offset="50%" stop-color="#1f5a96" />
              <stop offset="100%" stop-color="#03101f" />
            </radialGradient>
            <radialGradient id="earth-shade" cx="0.78" cy="0.7" r="0.7">
              <stop offset="0%" stop-color="rgba(0,0,0,0)" />
              <stop offset="70%" stop-color="rgba(0,0,0,0.55)" />
              <stop offset="100%" stop-color="rgba(0,0,0,0.85)" />
            </radialGradient>
            <radialGradient id="atmo-glow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="78%" stop-color="rgba(90,200,250,0)" />
              <stop offset="92%" stop-color="rgba(90,200,250,0.45)" />
              <stop offset="100%" stop-color="rgba(90,200,250,0)" />
            </radialGradient>
            <linearGradient id="beam-grad" x1="0.5" x2="0.5" y1="0" y2="1">
              <stop offset="0%" stop-color="#5ac8fa" stop-opacity="0.85" />
              <stop offset="100%" stop-color="#5ac8fa" stop-opacity="0" />
            </linearGradient>
            <clipPath id="earth-clip">
              <circle cx="260" cy="260" r="132" />
            </clipPath>
            <path
              id="orbit-path"
              d="M 470 260 A 210 62 0 0 1 50 260 A 210 62 0 0 1 470 260"
            />
            <g id="sat-icon" transform="translate(-14,-14)">
              <rect x="0" y="11" width="9" height="3.5" fill="#5ac8fa" stroke="#0a1830" stroke-width="0.4" />
              <rect x="19" y="11" width="9" height="3.5" fill="#5ac8fa" stroke="#0a1830" stroke-width="0.4" />
              <rect x="9" y="9" width="10" height="9" fill="#dde3eb" stroke="#fff" stroke-width="0.5" />
              <circle cx="14" cy="7" r="1.5" fill="#ff4d6d" />
              <path d="M 4 16 L 14 24 L 24 16 Z" fill="url(#beam-grad)" opacity="0.6" />
            </g>
          </defs>

          <circle cx="260" cy="260" r="170" fill="url(#atmo-glow)" />

          <g transform="rotate(-18 260 260)">
            <path
              d="M 50 260 A 210 62 0 0 1 470 260"
              fill="none"
              stroke="rgba(90,200,250,0.22)"
              stroke-dasharray="4 6"
              stroke-width="1"
            />
            <g>
              <use href="#sat-icon" />
              <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                <mpath href="#orbit-path" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="0;0;1;1;0"
                keyTimes="0;0.499;0.5;0.999;1"
                dur="14s"
                repeatCount="indefinite"
              />
            </g>
          </g>

          <circle
            cx="260"
            cy="260"
            r="132"
            fill="url(#earth-fill)"
            stroke="rgba(90,200,250,0.4)"
            stroke-width="0.8"
          />

          <g clip-path="url(#earth-clip)">
            <g class="continents">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 260 260"
                to="360 260 260"
                dur="90s"
                repeatCount="indefinite"
              />
              <path
                d="M 195 230 Q 210 215 235 222 Q 252 232 248 252 Q 240 268 215 268 Q 198 260 192 248 Z"
                fill="rgba(140,205,140,0.42)"
              />
              <path
                d="M 270 215 Q 295 210 312 225 Q 318 245 300 252 Q 280 250 268 235 Z"
                fill="rgba(140,205,140,0.42)"
              />
              <path
                d="M 260 280 Q 285 285 300 308 Q 295 328 275 332 Q 256 322 254 300 Z"
                fill="rgba(200,180,130,0.4)"
              />
              <path
                d="M 200 290 Q 220 295 232 312 Q 224 326 208 322 Q 195 312 195 300 Z"
                fill="rgba(140,205,140,0.35)"
              />
              <path
                d="M 320 245 Q 335 250 340 270 Q 332 282 322 278 Z"
                fill="rgba(180,200,150,0.35)"
              />
            </g>
          </g>

          <g stroke="rgba(255,255,255,0.18)" stroke-width="0.5" fill="none">
            <ellipse cx="260" cy="260" rx="132" ry="28" />
            <ellipse cx="260" cy="260" rx="132" ry="68" />
            <ellipse cx="260" cy="260" rx="132" ry="105" />
            <ellipse cx="260" cy="260" rx="34" ry="132" />
            <ellipse cx="260" cy="260" rx="80" ry="132" />
            <ellipse cx="260" cy="260" rx="115" ry="132" />
          </g>

          <circle cx="260" cy="260" r="132" fill="url(#earth-shade)" pointer-events="none" />

          <g transform="rotate(-18 260 260)">
            <path
              d="M 470 260 A 210 62 0 0 1 50 260"
              fill="none"
              stroke="rgba(90,200,250,0.55)"
              stroke-dasharray="4 6"
              stroke-width="1"
            />
            <g>
              <use href="#sat-icon" />
              <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                <mpath href="#orbit-path" />
              </animateMotion>
              <animate
                attributeName="opacity"
                values="1;1;0;0;1"
                keyTimes="0;0.499;0.5;0.999;1"
                dur="14s"
                repeatCount="indefinite"
              />
            </g>
          </g>

          <g class="ground-station">
            <circle cx="218" cy="332" r="2.5" fill="#ff8a3d" />
            <circle cx="218" cy="332" r="6" fill="none" stroke="#ff8a3d" stroke-width="0.8" opacity="0.7">
              <animate attributeName="r" from="3" to="22" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.8" to="0" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="218" cy="332" r="12" fill="none" stroke="#ff8a3d" stroke-width="0.6" opacity="0.5">
              <animate attributeName="r" from="3" to="22" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.8" to="0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
            </circle>
            <text
              x="226"
              y="328"
              fill="#ffd0a8"
              font-family="JetBrains Mono, monospace"
              font-size="9"
              letter-spacing="1.5"
            >BOULDER, CO, USA</text>
          </g>

          <g class="hud-layer" font-family="JetBrains Mono, monospace" font-size="10" letter-spacing="2">
            <path d="M 20 100 L 20 20 L 110 20" stroke="#5ac8fa" stroke-width="1.2" fill="none" opacity="0.75" />
            <path d="M 500 100 L 500 20 L 410 20" stroke="#5ac8fa" stroke-width="1.2" fill="none" opacity="0.75" />
            <path d="M 20 420 L 20 500 L 110 500" stroke="#5ac8fa" stroke-width="1.2" fill="none" opacity="0.75" />
            <path d="M 500 420 L 500 500 L 410 500" stroke="#5ac8fa" stroke-width="1.2" fill="none" opacity="0.75" />

            <circle cx="42" cy="46" r="3" fill="#5cff8a">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
            </circle>
            <text x="56" y="50" fill="#5ac8fa">TRACKING</text>
            <text x="42" y="70" fill="rgba(255,255,255,0.55)" font-size="8">ALT 408 KM · LEO</text>

            <text x="478" y="50" fill="#5ac8fa" text-anchor="end">SAT-01 · CI-OPS</text>
            <text x="478" y="70" fill="rgba(255,255,255,0.55)" font-size="8" text-anchor="end">NOMINAL · 14.5 ORB/DAY</text>

            <text x="42" y="480" fill="rgba(255,255,255,0.55)" font-size="8">LAT 40.01 N · LON 105.27 W</text>
            <text x="478" y="480" fill="rgba(255,255,255,0.55)" font-size="8" text-anchor="end">{{ utcClock }}</text>
          </g>
        </svg>
      </div>

      <div class="scroll-cue">↓ scroll for open-source missions</div>
    </section>

    <section class="fold-2">
      <div class="section-tag">// open-source missions · live from github</div>
      <h2 class="section-title">COSMOS Plugins from the field</h2>
      <p class="section-sub">
        Plugins I&apos;ve built on top of <b>OpenC3 COSMOS</b> to extend satellite ground
        operations — mapping, space weather, orbital tracking, robotics, and more.
        Pulled live from <code>github.com/clayandgen</code>.
      </p>

      <div class="repo-grid" v-if="loadingRepos">
        <div class="repo-card repo-card--skeleton" v-for="n in 6" :key="n">
          <div class="sk sk-line sk-line--head"></div>
          <div class="sk sk-line"></div>
          <div class="sk sk-line sk-line--short"></div>
        </div>
      </div>

      <div class="repo-error" v-else-if="repoError">
        ⚠ couldn&apos;t reach github right now —
        <a href="https://github.com/clayandgen" target="_blank" rel="noopener">
          jump to github.com/clayandgen
        </a>
      </div>

      <div class="repo-grid" v-else>
        <a
          v-for="r in repos"
          :key="r.name"
          class="repo-card"
          :href="r.url"
          target="_blank"
          rel="noopener"
        >
          <div class="repo-head">
            <span class="repo-name">{{ r.name }}</span>
            <span class="repo-lang" v-if="r.lang" :style="{ '--lang-color': r.color }">
              <span class="lang-dot"></span>{{ r.lang }}
            </span>
          </div>
          <div class="repo-desc">{{ r.desc || "no description yet — open the repo to peek inside." }}</div>
          <div class="repo-foot">
            <span class="repo-meta">
              <span v-if="r.stars">★ {{ r.stars }}</span>
              <span>updated {{ r.updated }}</span>
            </span>
            <span class="repo-arrow">↗</span>
          </div>
        </a>
      </div>

      <a
        href="https://github.com/clayandgen"
        target="_blank"
        rel="noopener"
        class="all-repos"
      >
        view all {{ totalRepos || 26 }} repos on github.com/clayandgen →
      </a>
    </section>

    <footer class="status-bar">
      <span class="sb-item"><span class="sb-led green"></span> SIGNAL LOCKED</span>
      <span class="sb-item">LAT 40.01° N · LON 105.27° W</span>
      <span class="sb-item">{{ utcClock }}</span>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Starfield from "./Starfield.vue";

interface Repo {
  name: string;
  desc: string;
  lang: string;
  color: string;
  url: string;
  stars: number;
  updated: string;
  updatedAt: number;
}

interface GhRepo {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

const LANG_COLORS: Record<string, string> = {
  Ruby: "#cc342d",
  Vue: "#42b883",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  Go: "#00add8",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  "Common Lisp": "#3fb68b",
  MATLAB: "#e16737",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c"
};

function relTime(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime();
  const days = Math.floor(ms / 86400000);
  if (days < 1) return "today";
  if (days < 2) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  const years = Math.floor(days / 365);
  return `${years}y ago`;
}

export default defineComponent({
  name: "HelloWorld",
  components: { Starfield },
  data() {
    return {
      now: new Date(),
      tickHandle: 0,
      tech: [
        "Vue 3",
        "TypeScript",
        "Ruby",
        "Python",
        "COSMOS",
        "Satellite Ground Software",
        "Open-Source"
      ],
      repos: [] as Repo[],
      totalRepos: 0,
      loadingRepos: true,
      repoError: false
    };
  },
  computed: {
    stats(): { label: string; value: string }[] {
      return [
        { label: "Years of Experience", value: "7" },
        { label: "current role", value: "Staff SWE" },
        { label: "base of ops", value: "Boulder, CO" },
        { label: "public repos", value: this.totalRepos ? String(this.totalRepos) : "—" }
      ];
    },
    utcClock(): string {
      const n = this.now;
      const pad = (x: number) => String(x).padStart(2, "0");
      return `${n.getUTCFullYear()}-${pad(n.getUTCMonth() + 1)}-${pad(n.getUTCDate())} ${pad(n.getUTCHours())}:${pad(n.getUTCMinutes())}:${pad(n.getUTCSeconds())}Z`;
    }
  },
  mounted() {
    this.tickHandle = window.setInterval(() => {
      this.now = new Date();
    }, 1000);
    this.fetchRepos();
  },
  beforeUnmount() {
    clearInterval(this.tickHandle);
  },
  methods: {
    async fetchRepos() {
      this.loadingRepos = true;
      this.repoError = false;
      try {
        const res = await fetch(
          "https://api.github.com/users/clayandgen/repos?per_page=100&sort=updated"
        );
        if (!res.ok) throw new Error(`gh ${res.status}`);
        const all = (await res.json()) as GhRepo[];
        const live = all.filter(r => !r.fork && !r.archived);
        this.totalRepos = live.length;
        const cosmos = live.filter(r => r.name.startsWith("openc3-cosmos-"));
        const pool = cosmos.length >= 4 ? cosmos : live;
        const sorted = pool
          .slice()
          .sort((a, b) => +new Date(b.updated_at) - +new Date(a.updated_at))
          .slice(0, 6);
        this.repos = sorted.map(r => ({
          name: r.name,
          desc: r.description || "",
          lang: r.language || "",
          color: (r.language && LANG_COLORS[r.language]) || "#888",
          url: r.html_url,
          stars: r.stargazers_count,
          updated: relTime(r.updated_at),
          updatedAt: +new Date(r.updated_at)
        }));
      } catch (e) {
        console.warn("repo fetch failed", e);
        this.repoError = true;
      } finally {
        this.loadingRepos = false;
      }
    }
  }
});
</script>

<style scoped>
.space-hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  color: white;
  background: #000;
  padding-bottom: 4rem;
}
.telemetry-panel {
  position: absolute;
  top: 3rem;
  right: 4rem;
  z-index: 4;
  min-width: 14rem;
  padding: 1rem 1.1rem;
  background: linear-gradient(135deg, rgba(20, 30, 60, 0.55) 0%, rgba(10, 10, 30, 0.25) 100%);
  border: 1px solid rgba(90, 200, 250, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(8px);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: #d4dbe4;
}
.tp-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #5ac8fa;
  letter-spacing: 0.25em;
  font-size: 0.7rem;
  margin-bottom: 0.6rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed rgba(90, 200, 250, 0.3);
}
.tp-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #5cff8a;
  box-shadow: 0 0 6px #5cff8a;
  animation: pulse-dot 1.4s ease-in-out infinite;
}
.tp-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 0.3rem 0;
  letter-spacing: 0.08em;
}
.tp-label { color: rgba(255, 255, 255, 0.55); text-transform: uppercase; }
.tp-value { color: #ff8a3d; }
.fold-1 {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  min-height: 100vh;
  padding: 4rem 6rem 6rem;
  gap: 4rem;
}
.callsign {
  position: absolute;
  top: 3rem;
  left: 6rem;
  font-family: "JetBrains Mono", monospace;
  color: #5ac8fa;
  font-size: 0.9rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  opacity: 0.85;
  animation: blink 2s ease-in-out infinite;
  z-index: 3;
}
.left-stack {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.title {
  font-family: "JetBrains Mono", monospace;
  font-size: 6.5rem;
  line-height: 0.95;
  margin: 0;
  letter-spacing: 0.04em;
}
.title-line {
  display: block;
  background: linear-gradient(90deg, #ffffff 0%, #5ac8fa 50%, #b388ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 24px rgba(90, 200, 250, 0.4));
}
.title-line:nth-child(2) {
  animation: drift 8s ease-in-out infinite;
}
.subtitle {
  font-family: "Lato", sans-serif;
  font-size: 1.05rem;
  max-width: 32rem;
  color: #c8d4e2;
  line-height: 1.6;
  opacity: 0.9;
}
.stack-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 32rem;
}
.chip {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 0.7rem;
  border: 1px solid rgba(90, 200, 250, 0.4);
  border-radius: 999px;
  color: #c8e8ff;
  background: rgba(20, 30, 60, 0.35);
}
.hero-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.cta-link {
  font-family: "JetBrains Mono", monospace;
  color: #ff8a3d;
  text-decoration: none;
  letter-spacing: 0.15em;
  font-size: 0.9rem;
  padding: 0.55rem 1rem;
  border: 1px solid rgba(255, 138, 61, 0.5);
  border-radius: 6px;
  transition: background 0.3s, border-color 0.3s, color 0.3s;
}
.cta-link:hover {
  background: rgba(255, 138, 61, 0.12);
  border-color: #ff8a3d;
  color: #ffd0a8;
}
.cta-link--gh {
  color: #5ac8fa;
  border-color: rgba(90, 200, 250, 0.5);
}
.cta-link--gh:hover {
  background: rgba(90, 200, 250, 0.12);
  border-color: #5ac8fa;
  color: #c8e8ff;
}
.now-card {
  margin-top: 0.5rem;
  max-width: 28rem;
  padding: 1rem 1.1rem;
  border: 1px solid rgba(155, 92, 255, 0.4);
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(40, 20, 80, 0.45) 0%, rgba(10, 10, 30, 0.25) 100%);
  backdrop-filter: blur(8px);
}
.now-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.now-led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #b388ff;
  box-shadow: 0 0 8px #b388ff;
  animation: pulse-dot 1.6s ease-in-out infinite;
}
.now-tag {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #b388ff;
}
.now-title {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.4rem;
  color: white;
  margin-top: 0.3rem;
}
.now-sub {
  font-family: "Lato", sans-serif;
  font-size: 0.95rem;
  color: #d4dbe4;
  margin-top: 0.3rem;
  line-height: 1.5;
}
.now-link {
  display: inline-block;
  margin-top: 0.6rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  color: #5ac8fa;
  letter-spacing: 0.15em;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}
.now-link:hover { color: #ff8a3d; }
.earth-scope {
  position: relative;
  width: 520px;
  height: 520px;
  justify-self: center;
  max-width: 100%;
}
.scope-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 24px rgba(90, 200, 250, 0.18));
}
.scroll-cue {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  animation: bounce 2.5s ease-in-out infinite;
  z-index: 3;
}
.fold-2 {
  position: relative;
  z-index: 2;
  max-width: 80rem;
  margin: 4rem auto 0;
  padding: 0 6rem;
}
.section-tag {
  font-family: "JetBrains Mono", monospace;
  color: #5ac8fa;
  font-size: 0.85rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}
.section-title {
  font-family: "JetBrains Mono", monospace;
  font-size: 3rem;
  margin: 0.5rem 0 1rem;
  background: linear-gradient(90deg, #ffffff 0%, #5ac8fa 60%, #b388ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.section-sub {
  font-family: "Lato", sans-serif;
  color: #c8d4e2;
  font-size: 1.05rem;
  max-width: 46rem;
  line-height: 1.6;
}
.repo-grid {
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.25rem;
}
.repo-card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.25rem 1.4rem;
  background: linear-gradient(135deg, rgba(20, 30, 60, 0.55) 0%, rgba(10, 10, 30, 0.2) 100%);
  border: 1px solid rgba(90, 200, 250, 0.25);
  border-radius: 12px;
  backdrop-filter: blur(6px);
  text-decoration: none;
  color: white;
  transition: transform 0.3s, border-color 0.3s, background 0.3s;
}
.repo-card:hover {
  transform: translateY(-4px);
  border-color: #ff8a3d;
  background: linear-gradient(135deg, rgba(30, 40, 80, 0.7) 0%, rgba(10, 10, 30, 0.3) 100%);
}
.repo-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.repo-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  color: #5ac8fa;
}
.repo-lang {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #d4dbe4;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.lang-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--lang-color);
  box-shadow: 0 0 6px var(--lang-color);
}
.repo-desc {
  font-family: "Lato", sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #c8d4e2;
}
.repo-foot {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}
.repo-arrow { color: #ff8a3d; font-size: 1rem; }
.repo-meta {
  display: inline-flex;
  gap: 1rem;
  align-items: center;
}
.repo-card--skeleton {
  pointer-events: none;
  min-height: 8.5rem;
}
.sk {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(90, 200, 250, 0.15) 50%,
    rgba(255, 255, 255, 0.04) 100%
  );
  background-size: 200% 100%;
  border-radius: 4px;
  animation: shimmer 1.4s ease-in-out infinite;
}
.sk-line { height: 0.85rem; }
.sk-line--head { width: 60%; height: 1.1rem; margin-bottom: 0.4rem; }
.sk-line--short { width: 40%; }
.repo-error {
  margin-top: 1.5rem;
  padding: 1.25rem 1.4rem;
  border: 1px dashed rgba(255, 138, 61, 0.45);
  border-radius: 12px;
  color: #ffd0a8;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.9rem;
}
.repo-error a { color: #5ac8fa; }
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.all-repos {
  display: inline-block;
  margin-top: 2.5rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  color: #5ac8fa;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}
.all-repos:hover { color: #ff8a3d; }
.status-bar {
  position: relative;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 4rem;
  padding: 0.85rem 6rem;
  border-top: 1px solid rgba(90, 200, 250, 0.2);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(10, 15, 35, 0.7) 100%);
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(200, 215, 230, 0.75);
}
.sb-item { display: inline-flex; align-items: center; gap: 0.5rem; }
.sb-led {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5cff8a;
  box-shadow: 0 0 6px #5cff8a;
}
.sb-led.green { background: #5cff8a; }
@keyframes drift {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(20px); }
}
@keyframes blink {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
}
@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.5; }
}
@keyframes bounce {
  0%, 100% { transform: translate(-50%, 0); opacity: 0.6; }
  50% { transform: translate(-50%, 6px); opacity: 1; }
}

@media (max-width: 1200px) {
  .fold-1 { padding: 4rem 3rem; gap: 2rem; }
  .title { font-size: 4.5rem; }
  .earth-scope { width: 420px; height: 420px; }
  .telemetry-panel { display: none; }
  .fold-2 { padding: 0 3rem; }
  .status-bar { padding: 0.75rem 2rem; gap: 1.25rem; font-size: 0.7rem; }
}

@media (max-width: 900px) {
  .fold-1 { grid-template-columns: 1fr; padding: 6rem 1.5rem 4rem; }
  .earth-scope { justify-self: center; width: 100%; height: auto; aspect-ratio: 1; }
  .fold-2 { padding: 0 1.5rem; }
  .section-title { font-size: 2.25rem; }
  .callsign { left: 1.5rem; }
}
</style>
