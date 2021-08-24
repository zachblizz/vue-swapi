<template>
  <div class="card-wrapper">
    <h3>{{ char.name }}</h3>
    <p>Has {{ char.hair_color }} hair, {{ char.eye_color }} eyes, and is {{ char.height }} tall.</p>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    char: Object
  }
}
</script>

<style scoped>
.card-wrapper {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--border);
  border-radius: 0.25rem;
  padding: 0 1rem;
}
</style>
