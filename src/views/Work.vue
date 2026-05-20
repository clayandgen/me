<template>
  <div class="work">
    <Starfield />

    <div class="topbar">
      <router-link to="/" class="back-link">
        <svg class="back-arrow" viewBox="0 0 24 12" aria-hidden="true">
          <path d="M 1 6 L 23 6 M 1 6 L 7 1 M 1 6 L 7 11" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="back-text">return to base</span>
      </router-link>
      <div class="hud">
        <span class="hud-dot"></span>
        MISSION LOG · CAREER TRAJECTORY · {{ missions.length }} STOPS
      </div>
    </div>

    <header class="intro">
      <div class="intro-tag">// flight recorder</div>
      <h1 class="intro-title">Career Trajectory</h1>
      <div class="intro-sub">
        A guided tour through the companies I&apos;ve worked at. Click to expand its mission log.
      </div>
    </header>

    <section class="trajectory">
      <WorkItem
        v-for="(m, i) in missions"
        :key="m.workplace"
        :workplace="m.workplace"
        :title="m.title"
        :dates="m.dates"
        :description="m.description"
        :link="m.link"
        :linkTitle="m.linkTitle"
        :color="m.color"
        :accent="m.accent"
        :planetSize="m.planetSize"
        :ring="m.ring"
        :satellite="m.satellite"
        :side="i % 2 === 0 ? 'left' : 'right'"
        :index="missions.length - i"
        :coord="m.coord"
      />
    </section>

    <section class="telemetry">
      <div class="telemetry-header">
        <div class="telemetry-tag">// onboard telemetry</div>
        <div class="telemetry-title">Crew Profile</div>
      </div>
      <div class="telemetry-grid">
        <Things
          tag="affinity log"
          title="Things I love"
          description="
            - Vue<br/>
            - Ruby<br/>
            - Python<br/>
            - Open-source software<br/>
            - Data/Dev Ops done right<br/>
            - Collaborative agile crews<br/>
            - Test-driven development<br/>
            - Holistic engineering (no silos!)<br/>
            - Linters &amp; microservices
          "
        />
        <Things
          tag="hazard log"
          title="Things I avoid"
          description="
            - Test in Prod<br/>
            - Monolith architecture<br/>
            - Thinking more devs == faster delivery<br/>
            - 'We'll figure out UI/UX later'<br/>
            - Missing documentation / comments<br/>
            - Spaghetti (the code)<br/>
            - Cheese (the food)
          "
        />
      </div>
    </section>

    <footer class="signoff">
      <div class="signoff-line">// end of transmission</div>
      <div class="signoff-text">📡 keep looking up</div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Starfield from "../components/Starfield.vue";
import WorkItem from "../components/WorkItem.vue";
import Things from "../components/Things.vue";

export default defineComponent({
  name: "Work",
  components: { Starfield, WorkItem, Things },
  data() {
    return {
      missions: [
        {
          workplace: "OpenC3",
          title: "Staff Software Engineer",
          dates: "Apr 2025 - Present",
          description: `
            - Building <b>COSMOS</b>, open-source <b>satellite ground software</b> — command and control for spacecraft in orbit.<br/><br/>
            - Designing, shipping, and supporting features used by satellite operators worldwide.<br/><br/>
            - Working across the stack: real-time telemetry, command pipelines, plugin architecture, and operator UX.<br/><br/>
            - Engaging directly with the open-source community on issues and integrations.<br/><br/>`,
          link: "https://openc3.com/",
          linkTitle: "OpenC3.com",
          color: "#9b5cff",
          accent: "#321266",
          planetSize: 200,
          ring: true,
          satellite: true,
          coord: "MISSION CONTROL · BOULDER, CO"
        },
        {
          workplace: "Maxar",
          title: "Sr Staff Software Engineer | Tech Lead",
          dates: "May 2021 - Apr 2025",
          description: `
            - Tech Lead on Maxar Data Services — building tooling around the world's highest-resolution satellite imagery.<br/><br/>
            - Developed Usage and Metering for <b>SecureWatch</b>, an on-demand window into recent high-accuracy imagery + analytics.<br/><br/>
            - Led front-end engineering across multiple scrum teams; set patterns and mentored engineers.<br/><br/>
            - Asian American + Pacific Islander Employee Resource Group Leader.<br/><br/>`,
          link: "https://www.maxar.com/",
          linkTitle: "Maxar.com",
          color: "#5ac8fa",
          accent: "#0a3a5c",
          planetSize: 175,
          ring: false,
          satellite: true,
          coord: "EARTH OBSERVATION · WESTMINSTER, CO"
        },
        {
          workplace: "Credera",
          title: "Open Technology Solutions Consultant",
          dates: "Jul 2019 - Feb 2021",
          description: `
            - Software consulting based in <b>Denver, CO</b> — partnered with clients across health, home services, and transportation to ship modern web platforms.<br/><br/>
            - Lead front-end developer rebranding a suite of health services web apps.<br/><br/>
            - Built an ML-driven decisioning service to target out-of-network professionals for the largest home service company; also primary API designer.<br/><br/>
            - Lead front-end engineer on a new product line; developed shared component libraries used org-wide.<br/><br/>
            - Modernized a $6M revenue-generating app to Vue.js for the largest digital marketplace in home services.<br/><br/>
            - Modernized a transportation company's payment + accounting app (Angular + TS, Docker, K8s, CI/CD) supporting a $4B business.<br/><br/>`,
          link: "https://credera.com/",
          linkTitle: "Credera.com",
          color: "#ff8a3d",
          accent: "#5c2a0a",
          planetSize: 150,
          ring: false,
          satellite: false,
          coord: "SOFTWARE CONSULTING · DENVER, CO"
        },
        {
          workplace: "CSM",
          title: "Adjunct Instructor",
          dates: "Aug 2018 - May 2019",
          description: `
            - Instructor of 2 lectures + 3 lab sections of CSCI 262 Data Structures.<br/><br/>
            - Worked with 200+ students to benefit their learning.<br/><br/>
            - Designed labs and projects that reflected course content.<br/><br/>
            - Coordinated a TA staff for grading, office hours, and student support.<br/><br/>`,
          link: "https://www.ratemyprofessors.com/ShowRatings.jsp?tid=2482239",
          linkTitle: "Rate My Professor",
          color: "#ff4d88",
          accent: "#5c1430",
          planetSize: 130,
          ring: false,
          satellite: false,
          coord: "ACADEMIA · COLORADO"
        },
        {
          workplace: "ViaSat",
          title: "Software Engineering Intern",
          dates: "May 2017 - Aug 2017",
          description: `
            - Built software to monitor the video streaming experience across the entire Exede network.<br/><br/>
            - Visualized metrics via Grafana and shipped a companion web app.<br/><br/>
            - Queried across MariaDB, ImpalaDB, and SQLite.<br/><br/>
            - Picked up Docker, Python Pyramid, Jinja2, Kafka.<br/><br/>
            - Won Monitoring category at ViaSat Intern Hackathon (1 of 30 teams).<br/><br/>`,
          link: "https://www.viasat.com/",
          linkTitle: "ViaSat.com",
          color: "#b8c1d1",
          accent: "#2a303a",
          planetSize: 105,
          ring: false,
          satellite: true,
          coord: "INTERN · CARLSBAD, CA"
        }
      ]
    };
  }
});
</script>

<style scoped>
.work {
  position: relative;
  min-height: 100vh;
  padding-bottom: 6rem;
  color: white;
  background: #000;
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
  transition: color 0.3s;
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
.intro {
  position: relative;
  z-index: 2;
  max-width: 64rem;
  margin: 2rem auto 1rem;
  padding: 0 3rem;
}
.intro-tag {
  font-family: "JetBrains Mono", monospace;
  color: #5ac8fa;
  font-size: 0.85rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}
.intro-title {
  font-family: "JetBrains Mono", monospace;
  font-size: 4.5rem;
  margin: 0.5rem 0 1rem;
  background: linear-gradient(90deg, #ffffff 0%, #5ac8fa 60%, #ff8a3d 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 18px rgba(90, 200, 250, 0.35));
}
.intro-sub {
  font-family: "Lato", sans-serif;
  color: #c8d4e2;
  font-size: 1.05rem;
  max-width: 38rem;
  line-height: 1.6;
}
.trajectory {
  position: relative;
  z-index: 2;
  max-width: 80rem;
  margin: 3rem auto 0;
  padding: 0 3rem;
}
.telemetry {
  position: relative;
  z-index: 2;
  max-width: 80rem;
  margin: 6rem auto 0;
  padding: 0 3rem;
}
.telemetry-header { margin-bottom: 2rem; }
.telemetry-tag {
  font-family: "JetBrains Mono", monospace;
  color: #5ac8fa;
  font-size: 0.85rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}
.telemetry-title {
  font-family: "JetBrains Mono", monospace;
  color: white;
  font-size: 2.5rem;
  margin-top: 0.4rem;
}
.telemetry-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.signoff {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-top: 6rem;
  font-family: "JetBrains Mono", monospace;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.2em;
}
.signoff-line { font-size: 0.8rem; color: #5ac8fa; }
.signoff-text { margin-top: 0.5rem; font-size: 1rem; }
@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.6; }
}

@media (max-width: 900px) {
  .topbar { padding: 1rem 1.5rem; }
  .hud { display: none; }
  .intro { padding: 0 1.5rem; }
  .intro-title { font-size: 2.8rem; }
  .trajectory, .telemetry { padding: 0 1.5rem; }
}
</style>
