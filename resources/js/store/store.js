import Vue from 'vue'
import Vuex from 'vuex'
import AppStore from "./app-store";
import AuthStore from "./auth-store";
Vue.use(Vuex)

 export const store = new Vuex.Store({
    modules: {
        appStore:AppStore,
        authStore:AuthStore,
    },
})

