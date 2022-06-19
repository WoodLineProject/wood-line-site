import ukr from '../locales/ukr/main_locale.js'
import rus from '../locales/rus/main_locale.js'
import {createI18n} from "vue-i18n";


export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'rus',
    fallbackLocale:  'ukr',
    messages: {
        ukr, rus
    }
})


