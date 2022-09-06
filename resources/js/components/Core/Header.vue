<script>
import i18n from "../../plugins/i18n";
import {mapActions} from "vuex";

export default {
    name: "Header",
    methods: {
        ...mapActions('appStore',['changeIsShowDrawer']),
        changeLocale() {
            i18n.locale = i18n.locale === 'ukr'
                ? 'rus' : 'ukr';
        },
    }

}
</script>

<template>
    <v-card id="core-header" class="overflow-hidden">
        <v-app-bar
            absolute
            color="#4F53B1"
            dark
            shrink-on-scroll
            prominent
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-3"
        >
            <v-app-bar-nav-icon
                class="mt-5"
                @click="changeIsShowDrawer()">
            </v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <router-link style="text-decoration: none; color: white" :to="{ name: 'home'}">
                <h1 :class="$vuetify.breakpoint.mdAndUp ? 'ml-2 mt-2' : 'ml-2 mt-6'"
                    :style="$vuetify.breakpoint.mdAndUp ? 'word-spacing: 5px;' : 'font-size: 17pt;'"
                    id="projectName">
                    {{$t(`projectName`)}}
                </h1>
            </router-link>

            <v-spacer></v-spacer>
            <div v-if="$vuetify.breakpoint.mdAndUp" class="mt-2 d-flex flex-column">
                <v-row>
                    <v-icon>date_range</v-icon>
                    <span class="ml-1"> - пн-пт</span>
                </v-row>
                <v-row>
                    <v-icon>schedule</v-icon>
                    <span class="ml-1">{{$t(`app.timeWork`)}}</span>
                </v-row>
                <v-row>
                    <v-icon>smartphone</v-icon>
                    <span class="ml-1"> - +380932303341</span>
                </v-row>
            </div>

            <v-spacer></v-spacer>
            <v-btn
                width="15%"
                @click="changeLocale()"
                class="ma-2 mt-6 mr-5"
                outlined
                color="white"
            >
                <span v-if="$vuetify.breakpoint.mdAndUp">
                    {{ $t('current_lang.fullLocale') }}
                </span>
                <span v-else>
                    {{ $t('current_lang.shortLocale') }}
                </span>
            </v-btn>
        </v-app-bar>
        <v-sheet
            id="scrolling-techniques-3"
            class="overflow-y-auto"
        >
            <v-container style="min-height: 96pt;"></v-container>
        </v-sheet>
    </v-card>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
#projectName{
    font-family: 'Dancing Script', cursive;
    font-size: 35pt;
}
</style>
