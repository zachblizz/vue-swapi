<template>
  <div id="app">
    <Swapi />
  </div>
</template>

<script>
import Swapi from './components/Swapi.vue'

export default {
  name: 'App',
  components: { Swapi }
}
</script>

<style>
:root{
  --button-color: #fff;
  --button-bg: rgb(141, 79, 241);
  --button-bg-hover: rgb(117, 66, 199);
  --button-bg-disabled: rgb(190, 155, 248);
  --border: rgb(141, 79, 241);
  --main-color: rgb(116, 42, 236);
  --secondary-color: rgb(141, 79, 241);
  --bg-color: #fff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: rgb(36, 38, 61);
    --main-color: #ddd;
    --secondary-color: #aaa;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
}

*, html {
  background: var(--bg-color);
}
</style>
