<template>
    <input @keyup="keyup" :name="name" :placeholder="placeholder" />
</template>
<script>
export default {
  name: "SwapiInput",
  props: {
    placeholder: String,
    evtName: String,
    name: String
  },
  methods:{
    keyup(evt) {
      this.$emit(this.evtName, evt.target.value);
    }
  }
}
</script>
<style scoped>
input {
  padding: 0.5rem;
  width: 100%;
  margin: 0 1rem;
  border: var(--border);
  color: var(--main-color);
  font-size: 1rem;
}

input::placeholder,
input::-moz-placeholder,
input::-webkit-input-placeholder {
  color: var(--secondary-color);
}
</style>
