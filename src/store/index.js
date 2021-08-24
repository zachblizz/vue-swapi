import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const GET_DATA_ACTION = "get-swapi-data";
export const UPDATE_MUTATION = "updateState";
export const LOADING = "loading";
export const DATA = "data";

export const store = new Vuex.Store({
  state: {
    data: {},
    isLoading: false
  },
  mutations: {
    [UPDATE_MUTATION] (state, { type, payload }) {
      switch (type) {
        case LOADING:
          state.isLoading = payload;
          if (payload) {
            state.data = {};
          }
          break;
        case DATA:
          state.data = payload;
          state.isLoading = false;
          break;
        default:
          throw new Error(`Unknown type ${type}`);
      }
    },
  },
  actions: {
    async [GET_DATA_ACTION] ({ commit }, searchInfo) {
      let query = "";

      if (searchInfo) {
        query = `?${searchInfo.term}=${searchInfo.value}`;
      }

      commit(UPDATE_MUTATION, { type: LOADING, payload: true });
      const resp = await axios.get(`https://swapi.dev/api/people/${query}`);
      commit(UPDATE_MUTATION, { type: DATA, payload: resp.data });
    }
  }
});
