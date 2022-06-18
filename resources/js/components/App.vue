<script>
import {mapGetters, mapActions} from "vuex";

export default {
    name: "App",
    computed:{
        ...mapGetters('locale', ['currentLocale']),
    },
    methods: {
        ...mapActions('locale',['changeCurrentLocale']),
        changeLocale() {
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
