<script>

import i18n from "../plugins/i18n";

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        methods: {
            changeLocale() {
                i18n.locale = i18n.locale === 'ukr'
                ? 'rus' : 'ukr';
            }
        }
    }
</script>
<template>
    <div>
        <v-btn @click="changeLocale()">{{ $t('app.test') }}</v-btn>
        <router-link :to="{ name: 'home' }">Home </router-link>
        <router-link :to="{ name: 'bar' }">About </router-link>
        <router-view></router-view>
    </div>
</template>
