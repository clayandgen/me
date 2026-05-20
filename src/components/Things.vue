<template>
  <div class="things">
    <div class="things-tag">// {{ tag }}</div>
    <div class="things-title">{{ title }}</div>
    <div class="things-description" v-html="description"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Things",
  props: {
    title: String,
    description: String,
    tag: { type: String, default: "telemetry" }
  }
});
</script>

<style scoped>
.things {
  flex: 1 1 320px;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(20, 30, 60, 0.5) 0%, rgba(10, 10, 30, 0.2) 100%);
  border: 1px solid rgba(90, 200, 250, 0.25);
  border-radius: 14px;
  backdrop-filter: blur(8px);
  min-width: 280px;
}
.things-tag {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: #5ac8fa;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}
.things-title {
  font-family: "JetBrains Mono", monospace;
  color: #ff8a3d;
  font-size: 1.75rem;
  margin-bottom: 1rem;
}
.things-description {
  color: #d4dbe4;
  font-size: 1rem;
  line-height: 1.7;
  font-family: "Lato", sans-serif;
}
</style>
