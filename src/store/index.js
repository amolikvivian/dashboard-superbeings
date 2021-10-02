import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

export default createStore({
  state: {
    userData: null,
    userType: null,
  },
  mutations: {
    setUserData(state, payload) {
      state.userData = payload;
    },
    setUserType(state, payload) {
      state.userType = payload;
    },
  },
  actions: {},
  modules: {},
  plugins: [new VuexPersistence().plugin],
});
