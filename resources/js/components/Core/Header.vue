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
            color="#6A76AB"
            dark
            shrink-on-scroll
            prominent
            src="https://picsum.photos/1920/1080?random"
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-3"
        >
            <template v-slot:img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                ></v-img>
            </template>

            <v-app-bar-nav-icon @click="changeIsShowDrawer()"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <div  class="text-no-wrap mt-2">
                {{$t(`projectName`)}}
            </div>

            <v-spacer></v-spacer>
            <v-btn
                width="15%"
                @click="changeLocale()"
                class="ma-2 "
                outlined
                color="green"
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
            <v-container style="min-height: 128px;"></v-container>
        </v-sheet>
    </v-card>
</template>
<style>
#core-header {
    z-index: 0;
}
</style>
