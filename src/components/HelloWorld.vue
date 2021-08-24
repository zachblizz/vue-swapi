<template>
  <div>
    <Search />
    <div v-if="isLoading">Loading chars...</div>
    <div v-else class="cards-container">
      <div v-for="char in data.results" v-bind:key="char.name">
        <char-card :char="char" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { store, GET_DATA_ACTION } from "../store";

import CharCard from "./CharCard.vue";
import Search from "./Search.vue";

export default {
  components: { CharCard, Search },
  name: "HelloWorld",
  computed: mapState(["isLoading", "data"]),
  mounted() {
    store.dispatch(GET_DATA_ACTION);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
</style>
