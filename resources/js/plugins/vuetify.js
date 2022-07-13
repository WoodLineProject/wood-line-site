import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ru from 'vuetify/es5/locale/ru'

Vue.use(Vuetify)


export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg'|| 'mdi' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    lang: {
        locales: { ru },
        current: 'ru'
    }
})
