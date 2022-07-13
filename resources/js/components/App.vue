<script>

import Header from "./Core/Header";
import NavDrawer from "./Core/NavDrawer";
import ViewBody from "./Core/ViewBody";
import Footer from "./Core/Footer";
import {mapActions} from "vuex";
import CallMy from "./Core/CallMy";
    export default {
        components:{Header, NavDrawer,ViewBody,Footer,CallMy},
        mounted() {
            this.getCsrfTokenAsync();
            this.getCurrentUserAsync();
        },
        methods:{
            ...mapActions('authStore',['getCsrfTokenAsync','getCurrentUserAsync']),
        }
    }
</script>
<template>
    <v-app>
        <Header/>
        <nav-drawer/>
        <view-body/>
        <call-my/>
        <Footer/>
    </v-app>
</template>
