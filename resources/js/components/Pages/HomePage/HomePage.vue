<script>
import {mapActions, mapGetters} from "vuex";

const trans_prefix = 'pages.homePage';

export default {
    name: "HomePage",
    data() {
        return {
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
        ...mapActions('appStore', ['getCarouselImageAsync'])
    },
}
</script>

<template>
    <div class="d-flex flex-row" style="width: 90%">
        <v-card class="d-flex flex-row align-self-start pl-5" style="width: 50%" shaped>
            <div style="width: 100%">
                <v-card-title class="justify-center">
                    <span class="textInHomePage">{{ $t(`${trans_prefix}.title`) }}</span>
                </v-card-title>

                <div class="d-flex flex-row">
                    <div id="lineInHomePage" class="my-auto"></div>
                    <v-card-title class="text-center">
                        <span id="projectName" class="textInHomePage">{{ $t(`projectName`) }}</span>
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

                <div class="d-flex flex-row justify-center" >
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
                        <router-link style="text-decoration: none;" :to="{ name: 'catalog'}">
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
                        <router-link style="text-decoration: none;" :to="{ name: 'catalog'}">
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
                        <router-link style="text-decoration: none;" :to="{ name: 'catalog'}">
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
                    <div id="lineInHomePage" class="my-auto"></div>
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
                    <div id="lineInHomePage" class="my-auto"></div>
                </div>
            </div>
        </v-card>

        <v-card class="d-flex flex-row align-self-start ml-5" style="width: 45%; height: 100%;" shaped>
            <v-carousel
                continuous
                cycle
                hide-delimiters
                style="width: 100%; height: 50%"
                class="my-auto">
                <!--            <v-carousel-item-->
                <!--                v-for="i in carouselImage"-->
                <!--                :key="i.id"-->
                <!--                :src="i.path"-->
                <!--                reverse-transition="fade-transition"-->
                <!--                transition="fade-transition"-->
                <!--            ></v-carousel-item>-->
                <v-carousel-item
                    v-for="i in carouselImage"
                    :key="i.id"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                >
                    <v-sheet
                        height="100%"
                    >
                        <v-img id="imgInHomePage"
                               height="100%"
                               width="100%"
                               max-height="100%"
                               max-width="100%"
                               min-height="100%"
                               min-width="100%"
                               :src="i.path"
                        ></v-img>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-card>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@1,700&display=swap');

.textInHomePage {
    word-break: keep-all;
    font-size: 20pt;
    font-family: 'Overpass', sans-serif;
}

.textInIcons {
    word-break: keep-all;
    font-size: 15pt;
    font-family: 'Overpass', sans-serif;
}

.textBtn {
    font-size: 15pt;
    font-weight: bold;
    font-family: 'Overpass', sans-serif;
}

#lineInHomePage {
    background-color: #4F53B1;
    width: 100%;
    height: 5pt;
}
</style>
