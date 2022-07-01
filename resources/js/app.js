import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './components/App'
import {store} from "./store/store"
import {router} from "./routes/router"
import VueRouter from 'vue-router'
import i18n from './plugins/i18n'
import VueAxios from 'vue-axios'
import axios from './modules/axios_module'
import VueAlertify from 'vue-alertify';
import {useProp} from './plugins/alertify'

Vue.use(VueAlertify,useProp);
Vue.use(VueAxios,axios);
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
    vuetify,
    i18n
})
