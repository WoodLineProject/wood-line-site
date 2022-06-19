<script>
import headMain from "../../../constants/head-main";

export default {
    name: "Header",
    data: () => ({
        headMain,
        drawer: true,
    }),
}
</script>
<template>
    <v-card>
        <v-layout>
            <v-app-bar
                color="primary"
                prominent
            >
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>{{$t('projectName')}}</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn variant="text" icon="mdi-magnify"></v-btn>

                <v-btn variant="text" icon="mdi-filter"></v-btn>

                <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
            </v-app-bar>

            <v-navigation-drawer
                v-model="drawer"
                bottom
                temporary
            >

                <v-list :items="headMain"></v-list>
            </v-navigation-drawer>

            <v-main>
                <v-card-text>
                    <router-view></router-view>
                </v-card-text>
            </v-main>
        </v-layout>
    </v-card>
</template>
