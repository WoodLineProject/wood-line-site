import Vue from 'vue'
import Vuex from 'vuex'
import AppStore from "./app-store";
import AuthStore from "./auth-store";
import UserManagementStore from "./UserManagement/user-management-store";
import OrdersCallBackPanelStore from "./OrdersCallBackPanel/orders-call-back-panel-store";
import EmailSenderPanelStore from "./EmailSenderPanel/email-sender-panel-store";
Vue.use(Vuex)

 export const store = new Vuex.Store({
    modules: {
        appStore: AppStore,
        authStore: AuthStore,
        userManagementStore: UserManagementStore,
        ordersCallBackPanelStore: OrdersCallBackPanelStore,
        emailSenderPanelStore: EmailSenderPanelStore
    },
})

