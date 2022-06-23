import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ukr from '../locales/ukr/main_locale.js'
import rus from '../locales/rus/main_locale.js'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'ukr',
    fallbackLocale: 'rus',
    messages: {
        ukr, rus
    }
})
