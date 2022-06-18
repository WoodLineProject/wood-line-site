import { createApp } from 'vue'
import { i18n } from './plugins/i18n';
import { store } from './store/index'
import App from "./components/App.vue";
import 'vuetify/styles' // Global CSS has to be imported
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'
import * as directives from 'vuetify/lib/directives'


export const vuetify = createVuetify({
    components,
    directives,
});

createApp(App)
    .use(i18n)
    .use(vuetify)
    .use(store)
    .mount('#app');
