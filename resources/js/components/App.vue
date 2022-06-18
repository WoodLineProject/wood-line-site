<script>

import i18n from "../plugins/i18n";
import ukr from '../locales/ukr/main_locale'
import rus from '../locales/rus/main_locale.js'

export default {
    mounted() {
        console.log(i18n.locale)
    },
    methods: {
        changeLocale() {
            i18n.locale = i18n.locale === 'ukr'
                ? 'rus'
                : 'ukr';

        },
    }
}
</script>
<template>
    <div>
        <v-btn @click="changeLocale">change locale</v-btn>
        <h1>{{ $t('app.test')}}</h1>
    </div>

</template>
