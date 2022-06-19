
import Vue from 'vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import App from './components/App'
import {store} from "./store/store";
import {router} from "./routes/router";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
    vuetify,
})
