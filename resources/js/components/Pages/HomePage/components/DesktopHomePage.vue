<script>
import {mapActions, mapGetters} from "vuex";
import {loading} from '../../../../constants/bg-image'
const trans_prefix = 'pages.homePage';
export default {
    name: "DesktopHomePage",
    data() {
        return {
            loading,
            trans_prefix,
        }
    },
    mounted() {
        this.getCarouselImageAsync();
    },
    computed: {
        ...mapGetters('appStore', ['carouselImage'])
    },
    methods: {
        ...mapActions('appStore', ['getCarouselImageAsync']),
    },
}
</script>

<template>
    <div class="d-flex flex-row" style="width: 98%; height: auto;">
        <v-card
            class="d-flex flex-row align-self-start pl-5"
            style="
             width: 45%;
             height: 500pt
            "
            shaped>
            <div style="width: 100%">
                <div class="text-center mt-2">
                    <span class="textInHomePage">{{ $t(`${trans_prefix}.title`) }}</span>
                </div>

                <div class="d-flex flex-row">
                    <div id="lineInHomePage" class="my-auto"></div>
                    <v-card-title class="text-center">
                        <span id="projectNameHomePage" class="textInHomePage">{{ $t(`projectName`) }}</span>
                    </v-card-title>
                    <div id="lineInHomePage" class="my-auto"></div>
                </div>

                <div class="mx-auto my-3" id="check_list">
                    <div style="float: left; clear: left">
                        <v-icon class="mr-3" color="green">done</v-icon>
                    </div>
                    <span class="textInHomePage">{{ $t(`${trans_prefix}.title2`) }}</span>
                </div>

                <div class="mx-auto my-3" id="check_list">
                    <div style="float: left; clear: left">
                        <v-icon class="mr-3" color="green">done</v-icon>
                    </div>
                    <span class="textInHomePage">{{ $t(`${trans_prefix}.title3`) }}</span>
                </div>

                <div class="mx-auto my-3" id="check_list">
                    <div style="float: left; clear: left">
                        <v-icon class="mr-3" color="green">done</v-icon>
                    </div>
                    <span class="textInHomePage">{{ $t(`${trans_prefix}.title4`) }}</span>
                </div>

                <div class="d-flex flex-row justify-center">
                    <div class="d-flex flex-row">
                        <v-icon
                            size="75"
                            color="#4F53B1"
                        >
                            bed
                        </v-icon>
                        <v-card-title>
                            <span class="textInIcons">{{ $t(`${trans_prefix}.bed`) }}</span>
                        </v-card-title>
                    </div>
                    <div class="d-flex flex-row">
                        <v-icon
                            size="75"
                            color="#4F53B1"
                        >
                            sensor_window
                        </v-icon>
                        <v-card-title>
                            <span class="textInIcons">{{ $t(`${trans_prefix}.drawer`) }}</span>
                        </v-card-title>
                    </div>
                    <div class="d-flex flex-row">
                        <v-icon
                            size="75"
                            color="#4F53B1"
                        >
                            weekend
                        </v-icon>
                        <v-card-title>
                            <span class="textInIcons">{{ $t(`${trans_prefix}.sofa`) }}</span>
                        </v-card-title>
                    </div>

                    <div class="d-flex flex-row">
                        <v-icon
                            size="75"
                            color="#4F53B1"
                        >
                            panorama_vertical
                        </v-icon>
                        <v-card-title>
                            <span class="textInIcons">{{ $t(`${trans_prefix}.poof`) }}</span>
                        </v-card-title>
                    </div>
                </div>

                <div class="d-flex flex-row my-2">
                    <div class="mx-auto" style="width: 50%">
                        <router-link style="text-decoration: none;" :to="{ name: 'upholstery'}">
                            <v-btn class="mx-auto" style="width: 100%"
                                   rounded
                                   color="#4F53B1"
                                   dark
                                   elevation="12"
                                   large
                                   outlined
                            >
                                <span class="textBtn">{{ $t(`${trans_prefix}.lincToTextile`) }}</span>
                            </v-btn>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex flex-row my-2">
                    <div class="mx-auto" style="width: 50%">
                        <router-link style="text-decoration: none;" :to="{ name: 'wholesaleCustomers'}">
                            <v-btn class="mx-auto" style="width: 100%"
                                   rounded
                                   color="#4F53B1"
                                   dark
                                   elevation="12"
                                   large
                                   outlined
                            >
                                <span class="textBtn">{{ $t(`${trans_prefix}.lincToWholesale`) }}</span>
                            </v-btn>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex flex-row my-2">
                    <div class="mx-auto" style="width: 50%">
                        <router-link style="text-decoration: none;" :to="{ name: 'aboutAs'}">
                            <v-btn class="mx-auto" style="width: 100%"
                                   rounded
                                   color="#4F53B1"
                                   dark
                                   elevation="12"
                                   large
                                   outlined
                            >
                                <span class="textBtn">{{ $t(`${trans_prefix}.lincToAboutAs`) }}</span>
                            </v-btn>
                        </router-link>
                    </div>
                </div>
                <div class="d-flex flex-row my-2">
                    <div class="mx-auto" style="width: 50%">
                        <router-link style="text-decoration: none;" :to="{ name: 'catalog'}">
                            <v-btn class="mx-auto" style="width: 100%"
                                   rounded
                                   color="#4F53B1"
                                   dark
                                   elevation="12"
                                   large
                                   outlined
                            >
                                <span class="textBtn">{{ $t(`${trans_prefix}.lincToCatalog`) }}</span>
                            </v-btn>
                        </router-link>
                    </div>
                </div>
                <div id="lineInHomePage" class="mt-5"></div>
            </div>
        </v-card>
        <div class="d-flex flex-row align-self-start ml-5" style="width: 55%;">
            <v-card shaped>
                <v-carousel
                    :continuous="true"
                    height="500pt"
                    cycle
                    show-arrows-on-hover>
                    <v-carousel-item
                        v-for="i in carouselImage"
                        :key="i.id"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    >
                        <img
                            :alt="loading.img"
                            height="670pt"
                            width="100%"
                            :src="i.path"/>
                    </v-carousel-item>
                </v-carousel>
            </v-card>
        </div>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
#projectNameHomePage{
    font-family: 'Dancing Script', cursive;
    font-size: 35pt;
}
</style>
