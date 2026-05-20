<template>
  <canvas ref="canvas" class="starfield" :class="{ 'starfield--fixed': fixed }"></canvas>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Star {
  x: number;
  y: number;
  z: number;
  r: number;
  tw: number;
  twSpeed: number;
  color: string;
}

interface Shooting {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export default defineComponent({
  name: "Starfield",
  props: {
    density: { type: Number, default: 1 },
    fixed: { type: Boolean, default: true },
    parallax: { type: Boolean, default: false },
    shootingStars: { type: Boolean, default: true }
  },
  data() {
    return {
      ctx: null as CanvasRenderingContext2D | null,
      stars: [] as Star[],
      shooters: [] as Shooting[],
      raf: 0,
      mouseX: 0,
      mouseY: 0,
      targetMouseX: 0,
      targetMouseY: 0,
      w: 0,
      h: 0,
      dpr: 1,
      lastShoot: 0,
      prevW: 0
    };
  },
  mounted() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.setupCanvas();
    this.buildStars();
    this.prevW = this.w;
    window.addEventListener("resize", this.onResize);
    if (this.parallax) {
      window.addEventListener("mousemove", this.onMove);
    }
    this.loop(performance.now());
  },
  beforeDestroy() {
    cancelAnimationFrame(this.raf);
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("mousemove", this.onMove);
  },
  methods: {
    setupCanvas() {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      if (!canvas) return;
      this.w = window.innerWidth;
      // Use the larger of inner height vs screen height so mobile address-bar
      // collapse/expand doesn't shrink the canvas and clip stars.
      this.h = Math.max(window.innerHeight, window.screen?.height || 0);
      canvas.style.width = this.w + "px";
      canvas.style.height = this.h + "px";
      canvas.width = this.w * this.dpr;
      canvas.height = this.h * this.dpr;
      this.ctx = canvas.getContext("2d");
      if (!this.ctx) return;
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.scale(this.dpr, this.dpr);
    },
    onResize() {
      this.setupCanvas();
      // Only rebuild stars when width changes meaningfully (orientation flip
      // or large desktop resize). Height-only changes (mobile address bar)
      // leave stars exactly where they were.
      if (Math.abs(this.w - this.prevW) > 80) {
        this.buildStars();
        this.prevW = this.w;
      }
    },
    buildStars() {
      const count = Math.floor((this.w * this.h) / 2400 * this.density);
      const palette = ["#ffffff", "#cfe2ff", "#ffd9a8", "#ffb3c1", "#a8e4ff"];
      this.stars = [];
      for (let i = 0; i < count; i++) {
        const z = Math.random();
        this.stars.push({
          x: Math.random() * this.w,
          y: Math.random() * this.h,
          z,
          r: 0.3 + z * 1.6,
          tw: Math.random() * Math.PI * 2,
          twSpeed: 0.5 + Math.random() * 1.5,
          color: palette[Math.floor(Math.random() * palette.length)]
        });
      }
    },
    onMove(e: MouseEvent) {
      this.targetMouseX = (e.clientX / this.w - 0.5) * 2;
      this.targetMouseY = (e.clientY / this.h - 0.5) * 2;
    },
    spawnShooter() {
      const fromLeft = Math.random() < 0.5;
      const startX = fromLeft ? -50 : this.w + 50;
      const startY = Math.random() * this.h * 0.6;
      const speed = 6 + Math.random() * 6;
      const angle = fromLeft ? Math.PI / 6 : Math.PI - Math.PI / 6;
      this.shooters.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 80 + Math.random() * 40
      });
    },
    loop(t: number) {
      this.raf = requestAnimationFrame(this.loop);
      const ctx = this.ctx;
      if (!ctx) return;
      this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
      this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;
      ctx.clearRect(0, 0, this.w, this.h);

      // nebula gradient
      const grad = ctx.createRadialGradient(
        this.w * 0.7,
        this.h * 0.3,
        0,
        this.w * 0.7,
        this.h * 0.3,
        Math.max(this.w, this.h) * 0.8
      );
      grad.addColorStop(0, "rgba(80, 40, 140, 0.25)");
      grad.addColorStop(0.4, "rgba(30, 20, 80, 0.12)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, this.w, this.h);

      const grad2 = ctx.createRadialGradient(
        this.w * 0.2,
        this.h * 0.8,
        0,
        this.w * 0.2,
        this.h * 0.8,
        Math.max(this.w, this.h) * 0.6
      );
      grad2.addColorStop(0, "rgba(180, 60, 120, 0.18)");
      grad2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, this.w, this.h);

      for (const s of this.stars) {
        s.tw += 0.02 * s.twSpeed;
        const alpha = 0.5 + Math.sin(s.tw) * 0.5;
        const px = s.x + this.mouseX * 20 * s.z;
        const py = s.y + this.mouseY * 20 * s.z;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (s.r > 1.2) {
          ctx.globalAlpha = alpha * 0.3;
          ctx.beginPath();
          ctx.arc(px, py, s.r * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      if (this.shootingStars && t - this.lastShoot > 4000 + Math.random() * 6000) {
        this.spawnShooter();
        this.lastShoot = t;
      }
      for (let i = this.shooters.length - 1; i >= 0; i--) {
        const sh = this.shooters[i];
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life++;
        const a = 1 - sh.life / sh.maxLife;
        if (a <= 0 || sh.x < -100 || sh.x > this.w + 100) {
          this.shooters.splice(i, 1);
          continue;
        }
        const tailX = sh.x - sh.vx * 6;
        const tailY = sh.y - sh.vy * 6;
        const tail = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY);
        tail.addColorStop(0, `rgba(255,255,255,${a})`);
        tail.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = tail;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }
    }
  }
});
</script>

<style scoped>
.starfield {
  display: block;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at top, #0a0a2e 0%, #050518 40%, #000000 100%);
}
.starfield--fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
}
</style>
