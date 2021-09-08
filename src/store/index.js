import { createStore } from "vuex";
import accounts from "./modules/accounts";

const store = createStore({
  modules: { accounts },
  state: {},
  getters: {},
  mutations: {
    incrementAccounts() {
      accounts.commit("increment");
    },
    fetchAccountsDetails(state, payload) {
      accounts.commit("fetchData", payload);
    }
  },
  actions: {}
});

export default store;
