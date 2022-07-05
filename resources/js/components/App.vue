<script>

import Header from "./Core/Header";
import NavDrawer from "./Core/NavDrawer";
import ViewBody from "./Core/ViewBody";
import Footer from "./Core/Footer";
import {mapActions} from "vuex";
    export default {
        components:{Header, NavDrawer,ViewBody,Footer,},
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
        <Footer/>
    </v-app>
</template>
