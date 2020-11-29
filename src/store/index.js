import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// store file
import ajax from './modules/ajax';
import auth from './modules/auth';
import cache from "./modules/cache";
import data from './modules/data';
import dataSource from './modules/dataSource';
import mirror from './modules/mirror';
import options from './modules/options';
import planner from './modules/planner';
import settings from './modules/settings';
import ui from './modules/ui';
// import compressor from "@/utils/compressor";

Vue.use(Vuex);

const previousState = localStorage.getItem("penguin-stats-state");
if (previousState) {
  localStorage.removeItem("penguin-stats-state")
  localStorage.setItem("penguin-stats-data", {data: previousState["data"]});
  localStorage.setItem("penguin-stats-settings", {settings: previousState["settings"]});
  localStorage.setItem("penguin-stats-auth", {auth: previousState["auth"]});
  localStorage.setItem("penguin-stats-cacheTTL", {cacheUpdateAt: previousState["cacheUpdateAt"]});
}

// const persistStorage = {
//   getItem: (key) => {
//     Console.debug("VuexPersist", "getting item", key)
//     localStorage.getItem(key)
//   },
//   setItem: (key, value) => {
//     Console.debug("VuexPersist", "setting item", key, `${value.length}`)
//     localStorage.setItem(key, value)
//   },
//   removeItem: (key) => {
//     Console.debug("VuexPersist", "removing item", key)
//     localStorage.removeItem(key)
//   }
// }

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "penguin-stats-data",
      paths: [
        "data",
        "dataSource"
      ]
    }),
    createPersistedState({
      key: "penguin-stats-settings",
      paths: [
        "settings",
        "planner",
        "options"
      ]
    }),
    createPersistedState({
      key: "penguin-stats-auth",
      paths: [
        "auth"
      ]
    }),
    createPersistedState({
      key: "penguin-stats-mirror",
      paths: [
        "mirror"
      ]
    }),
    // createPersistedState({
    //   key: "penguin-stats-cache",
    //   paths: [
    //     "cache"
    //   ]
    // }),
  ],
  modules: {
    ajax,
    auth,
    cache,
    data,
    dataSource,
    settings,
    planner,
    mirror,
    options,
    ui
  }
});