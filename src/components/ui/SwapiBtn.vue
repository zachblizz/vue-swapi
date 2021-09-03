<template>
    <button @click="onClick()" :disabled="isDisabled">
      <slot></slot>
    </button>
</template>
<script>
export default {
  name: "swapi-btn",
  props: {
    isDisabled: Boolean,
    evtName: String,
  },
  methods: {
    onClick() {
      this.$emit(this.evtName);
    }
  }
}
</script>

<style scoped>
button {
  border: var(--border);
  color: var(--button-color);
  font-weight: bold;
  padding: 0.25rem 1rem;
  transition: background 100ms ease-in-out;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background: var(--button-bg-hover);
}

button:disabled {
  cursor: not-allowed;
  opacity: 40%;
  background-color: transparent;
}
</style>
