require('./bootstrap');
import vuetify from './plugins/vuetify' // path to vuetify export
window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    vuetify,
});
