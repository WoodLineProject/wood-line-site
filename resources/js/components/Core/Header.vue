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

