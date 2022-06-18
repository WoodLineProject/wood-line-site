<script>
import {i18n} from "../plugins/i18n";
import {mapGetters, mapActions} from "vuex";


export default {
    name: "App",
    mounted() {

    },
    computed:{
        ...mapGetters('locale', ['currentLocale']),
    },
    methods: {
        ...mapActions('locale',['changeCurrentLocale']),
        changeLocale() {
            //i18n.global.locale =  i18n.global.locale === 'rus' ? 'ukr' : 'rus'
           this.changeCurrentLocale(this.currentLocale === 'rus' ? 'ukr' : 'rus' );
        },
    }
}
</script>
<template>
    <v-app>
        <div>
            <v-btn @click="changeLocale">change locale</v-btn>
            <h1>{{ $t('app.test')}}</h1>
        </div>
    </v-app>
</template>
