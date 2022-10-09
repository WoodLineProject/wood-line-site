<script>
import {mapActions, mapGetters} from "vuex";
import {loading} from '../../../../constants/bg-image'

const trans_prefix = 'pages.homePage';
export default {
    name: "MobileHomePage",
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
    <div style="width: 98%; height: auto;" class="d-flex flex-column">
        <div class="mb-5" style="width: 100%;">
            <v-card shaped>
                <v-carousel
                    :continuous="true"
                    height="250pt"
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
                            height="350pt"
                            width="100%"
                            :src="i.path"/>
                    </v-carousel-item>
                </v-carousel>
            </v-card>
        </div>
        <v-card
            class="d-flex flex-row align-self-start pl-5 mb-5"
            width="100%"
            shaped>
            <div style="width: 100%">
                <v-card-title class="justify-center text-center">
                    <span class="textInHomePage">{{ $t(`${trans_prefix}.title`) }}</span>
                </v-card-title>

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

                <div class="d-flex flex-column" style="margin-left: 20%">
                    <div class="mx-auto my-3" id="check_list">
                        <v-icon
                            size="75"
                            color="#4F53B1"
                        >
                            bed
                        </v-icon>
                        <span class="textInIcons">{{ $t(`${trans_prefix}.bed`) }}</span>
                    </div>
                    <div class="mx-auto my-3" id="check_list">
                        <v-icon
                            size="75"
                            color="#4F53B1"
                        >
                            sensor_window
                        </v-icon>
                        <span class="textInIcons">{{ $t(`${trans_prefix}.drawer`) }}</span>
                    </div>
                    <div class="mx-auto my-3" id="check_list">
                        <v-icon
                            size="75"
                            color="#4F53B1"
                        >
                            weekend
                        </v-icon>
                        <span class="textInIcons">{{ $t(`${trans_prefix}.sofa`) }}</span>
                    </div>
                    <div class="mx-auto my-3" id="check_list">
                        <v-icon
                            size="75"
                            color="#4F53B1"
                        >
                            panorama_vertical
                        </v-icon>
                        <span class="textInIcons">{{ $t(`${trans_prefix}.poof`) }}</span>
                    </div>
                </div>

                <div class="d-flex flex-row my-2">
                    <div class="mx-auto" style="width: 90%">
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
                    <div class="mx-auto" style="width: 90%">
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
                    <div class="mx-auto" style="width: 90%">
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
                    <div class="mx-auto" style="width: 90%">
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
                <div id="lineInHomePage" class="mb-5"></div>
            </div>
        </v-card>
    </div>
</template>
