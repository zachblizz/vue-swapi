<template>
  <div class="search-wrapper">
    <button @click="onPageChange(-1)" :disabled="!Boolean(data.previous)">
      prev
    </button>
    <input @keyup="onSearch" />
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
    return {
      page: 1,
    };
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
}

input {
  padding: 0.5rem;
  width: 100%;
  margin: 0 1rem;
  border: 2px solid var(--border);
}

button {
  background: var(--button-bg);
  color: var(--button-color);
  border: none;
  font-weight: bold;
  padding: 0.25rem 1rem;
  transition: background 100ms ease-in-out;
}

button:hover {
  cursor: pointer;
  background: var(--button-bg-hover);
}

button:disabled {
  background: var(--button-bg-disabled);
  cursor: not-allowed;
}
</style>