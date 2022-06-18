import Vue from "vue";

require('./bootstrap');
import vuetify from './plugins/vuetify' // path to vuetify export
import i18n from './plugins/i18n';
import App from "./components/App";
window.Vue = require('vue').default;

Vue.component('App', require('./components/App.vue').default);

const app = new Vue({
    render: h => h(App),
    el: '#app',
    vuetify,
    i18n
});
