import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './components/App'
import {store} from "./store/store"
import {router} from "./routes/router"
import VueRouter from 'vue-router'
import i18n from './plugins/i18n'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
    vuetify,
    i18n
})
