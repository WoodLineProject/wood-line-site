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
            this.getUserAsync();
        },
        methods:{
            ...mapActions('authStore',['getCsrfTokenAsync','getUserAsync']),
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
