<script>

import Header from "./Core/Header";
import NavDrawer from "./Core/NavDrawer";
import ViewBody from "./Core/ViewBody";
import Footer from "./Core/Footer";


    export default {
        components:{Header, NavDrawer,ViewBody,Footer,},
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
