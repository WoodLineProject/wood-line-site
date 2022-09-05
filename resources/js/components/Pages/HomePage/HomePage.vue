<script>
import {mapActions, mapGetters} from "vuex";

const trans_prefix = 'pages.homePage';

export default {
    name: "HomePage",
    data(){
      return {
          trans_prefix,
      }
    },
    mounted() {
        this.getCarouselImageAsync();
    },
    computed:{
        ...mapGetters('appStore',['carouselImage'])
    },
    methods:{
        ...mapActions('appStore',['getCarouselImageAsync'])
    },
}
</script>

<template>
    <v-card class="d-flex flex-row align-self-start pl-5" style="width: 90%">
        <div style="width: 55%">
            <div>
                <span class="textInHomePage" >{{$t(`${trans_prefix}.title`)}}</span>
            </div>
            <div>
                <span id="projectName" class="textInHomePage">{{$t(`projectName`)}}</span>
            </div>
            <div>
                <router-link style="text-decoration: none;" :to="{ name: 'catalog'}">
                    <v-btn
                        rounded
                        color="#4F53B1"
                        dark
                        elevation="24"
                        x-large
                    >
                        <span class="textInHomePage">{{ $t(`${trans_prefix}.lincToCatalog`) }}</span>
                    </v-btn>
                </router-link>
            </div>
            <div>
                <span class="textInHomePage">{{$t(`${trans_prefix}.title2`)}}</span>
            </div>
            <div class="d-flex flex-row">
                <v-icon
                    size="100"
                    color="#4F53B1"
                >
                    bed
                </v-icon>
                <v-card-title>
                    <span class="textInHomePage">{{$t(`${trans_prefix}.sofa`)}}</span>
                </v-card-title>
                <div id="lineInHomePage" class="my-auto"></div>
            </div>
        </div>

        <v-carousel
            continuous
            cycle
            hide-delimiters
            style="width: 45%;">
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
                               min-width="100%"
                               min-height="100%"
                               :src="i.path"
                        ></v-img>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@1,700&display=swap');
.textInHomePage {
    word-break: keep-all;
    font-size: 20pt;
    font-family: 'Overpass', sans-serif;

}
#lineInHomePage{
    background-color: #4F53B1;
    width: 100%;
    height: 5pt;
}
</style>
