import Vue from 'vue';
import { db } from '@/initFirebase';
import Vuex from 'vuex';
import { firestoreAction, vuexfireMutations } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    topics: [],
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    setTopics(state, data) {
      state.topics = data;
    },
    ...vuexfireMutations,
  },
  actions: {
    fetchUser({ commit }, user) {
      if (user) commit('setUser', user);
      else commit('setUser', user);
    },
    bindTopics: firestoreAction(({ bindFirestoreRef }) => (
      bindFirestoreRef('topics', db.collection('topics'))
    )),
  },
  modules: {
  },
});
