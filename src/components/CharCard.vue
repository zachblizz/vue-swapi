<template>
  <div class="card-wrapper">
    <div class="title">{{ char.name }}</div>
    <div class="description">Has {{ char.hair_color }} hair, {{ char.eye_color }} eyes, and is {{ Math.floor(char.height/30.48) }}ft. tall.</div>
  </div>
</template>

<script>
export default {
  name: "char-card",
  props: {
    char: Object
  }
}
</script>

<style scoped>
.card-wrapper {
  display: flex;
  padding: 1rem;
  flex-direction: column;
  border: var(--border);
  border-radius: 0.25rem;
  transition: box-shadow 150ms ease-in;
}

.card-wrapper:hover {
  box-shadow: var(--box-shadow);
}

.title {
  font-size: 1.2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: var(--main-color);
}

.description {
  color: var(--secondary-color);
  font-weight: 500;
}
</style>
