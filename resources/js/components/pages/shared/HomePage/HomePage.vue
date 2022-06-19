<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "HomePage",
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
    <div>
        <v-btn @click="changeLocale">change locale</v-btn>
        <h1>{{ $t('app.test')}}</h1>
    </div>
</template>
