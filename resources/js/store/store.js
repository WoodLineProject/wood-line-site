import Vue from 'vue'
import Vuex from 'vuex'
import AppStore from "./app-store";
import AuthStore from "./auth-store";
import UserManagementStore from "./UserManagement/user-management-store";
Vue.use(Vuex)

 export const store = new Vuex.Store({
    modules: {
        appStore: AppStore,
        authStore: AuthStore,
        userManagementStore: UserManagementStore,
    },
})

