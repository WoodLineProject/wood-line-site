<script>

import Header from "./Core/Header";
import NavDrawer from "./Core/NavDrawer";

    export default {
        components:{
          Header, NavDrawer
        },
    }
</script>
<template>
    <v-app>
        <Header/>
        <nav-drawer/>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>
