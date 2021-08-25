<template>
  <div class="search-wrapper">
    <button @click="onPageChange(-1)" :disabled="!Boolean(data.previous)">
      prev
    </button>
    <input @keyup="onSearch" placeholder="search by name" />
    <button @click="onPageChange(1)" :disabled="!Boolean(data.next)">
      next
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { store, GET_DATA_ACTION } from "../store";

export default {
  name: "Search",
  data() {
    return { page: 1, };
  },
  methods: {
    onSearch(evt) {
      if (evt.key.toLowerCase() === "enter") {
        store.dispatch(GET_DATA_ACTION, {
          term: "search",
          value: evt.target.value,
        });
      }
    },
    onPageChange(page) {
      this.page += page;
      store.dispatch(GET_DATA_ACTION, { term: "page", value: this.page });
    },
  },
  computed: mapState(["data"]),
};
</script>

<style scoped>
.search-wrapper {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: var(--bg-color);
  padding: 1rem 0;
  transition: position 500ms ease-in-out;
}

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

button {
  border: var(--border);
  color: var(--button-color);
  font-weight: bold;
  padding: 0.25rem 1rem;
  transition: background 100ms ease-in-out;
  font-size: 1rem;
}

button:hover {
  cursor: pointer;
  background: var(--button-bg-hover);
}

button:disabled {
  cursor: not-allowed;
  opacity: 40%;
  background-color: transparent;
}
</style>