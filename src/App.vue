<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({ name: "App" });
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Courgette&family=JetBrains+Mono:wght@500&family=Lato&display=swap");
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #000;
  font-family: Helvetica, Arial, sans-serif;
}
* { box-sizing: border-box; }
</style>
