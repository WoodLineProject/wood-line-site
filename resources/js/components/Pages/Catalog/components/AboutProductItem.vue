<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AboutProductItem",
    data(){
        return {
            id: null
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getProductByIdAsync({id: this.id})
        this.getPhotoByIdAsync({id: this.id})
    },
    computed:{
      ...mapGetters('dicStore',['productById','photoById'])
    },
    methods:{
        ...mapActions('dicStore',['getProductByIdAsync','getPhotoByIdAsync'])
    }
}
</script>
<template>
    <div>
        <v-card class="pt-5 pb-5 pl-5 pr-5 ">
            <v-carousel
                hide-delimiter-background
                show-arrows-on-hover
            >
                <v-carousel-item
                    v-for="(slide, i) in photoById"
                    :key="i"
                >
                    <v-sheet
                        height="100%"
                    >
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <v-img
                                contain
                                width="1000"
                                height="auto"
                                class="grey lighten-2"
                                :src="slide.path"
                            ></v-img>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-card>

    </div>
</template>
