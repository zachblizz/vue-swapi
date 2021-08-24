<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
:root{
  --button-color: #fff;
  --button-bg: rgb(141, 79, 241);
  --button-bg-hover: rgb(117, 66, 199);
  --button-bg-disabled: rgba(117, 66, 199, .4);
  --border: rgb(141, 79, 241);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
