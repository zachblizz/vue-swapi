<template>
  <div id="app">
    <swapi />
  </div>
</template>

<script>
import Swapi from "./components/Swapi.vue";

export default {
  name: "App",
  components: { Swapi },
};
</script>

<style>
:root {
  --button-color: rgb(141, 79, 241);
  --button-bg-hover: rgb(117, 66, 199);
  --button-bg-disabled: rgb(190, 155, 248);

  --border: 2px solid rgb(141, 79, 241);

  --main-color: rgb(116, 42, 236);
  --secondary-color: rgb(141, 79, 241);
  --bg-color: #fff;

  --box-shadow: 0 8px 10px -5px rgb(82, 27, 170);

  --loader-top-border: rgb(145, 82, 245);
  --loader-border: 3px solid rgb(223, 220, 228);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: rgb(36, 38, 61);
    --main-color: #ddd;
    --secondary-color: #aaa;
    --button-color: #fff;

    --loader-border: 3px solid rgb(89, 51, 151);
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

*,
html {
  background: var(--bg-color);
}
</style>
