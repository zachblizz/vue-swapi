<template>
  <div class="search-wrapper">
    <swapi-btn
      @pageDown="onPageChange(--page)"
      evtName="pageDown"
      :isDisabled="!Boolean(data.previous)"
    >
      prev
    </swapi-btn>
    <input @keyup.enter="onSearch" placeholder="search by name" />
    <swapi-btn
      @pageUp="onPageChange(++page)"
      evtName="pageUp"
      :isDisabled="!Boolean(data.next)"
    >
      next
    </swapi-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";

import SwapiBtn from "./ui/SwapiBtn";

import { store, GET_DATA_ACTION } from "../store";

export default {
  name: "Search",
  components: {SwapiBtn},
  data() {
    return { page: 1, };
  },
  methods: {
    onSearch(evt) {
      store.dispatch(GET_DATA_ACTION, {
        term: "search",
        value: evt.target.value,
      });
    },
    onPageChange(value) {
      store.dispatch(GET_DATA_ACTION, { term: "page", value });
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
</style>