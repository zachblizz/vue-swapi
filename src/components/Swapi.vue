<template>
  <div class="container">
    <Search />
    <Loader v-if="isLoading" />
    <div v-else class="cards-container">
      <char-card
        v-for="char in data.results"
        v-bind:key="char.name"
        v-bind:char="char"
      >
      </char-card>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { store, GET_DATA_ACTION } from "../store";

import CharCard from "./CharCard.vue";
import Loader from './Loader.vue';
import Search from "./Search.vue";

export default {
  components: { CharCard, Search, Loader },
  name: "Swapi",
  computed: mapState(["isLoading", "data"]),
  mounted() {
    store.dispatch(GET_DATA_ACTION);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 90%;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}


@media screen and (min-width: 1280px) {
  .container {
    width: 40%;
  }
}

@media screen and (max-width: 900px) {
  .cards-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (max-width: 700px) {
  .cards-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

.loading {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
