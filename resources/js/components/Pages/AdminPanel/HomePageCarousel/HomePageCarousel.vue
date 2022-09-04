<script>
import {mapActions, mapGetters} from "vuex";
import EditPositionDialog from "./components/EditPositionDialog";

const trans_prefix = 'adminPanel.adminHomePageCarousel';
export default {
    name: "HomePageCarousel",
    components:{
        EditPositionDialog
    },
    data(){
        return{
            trans_prefix,
            uploadPhotoArray: [],
        }
    },
    computed:{
        ...mapGetters('homePageCarousel',['CarrouselImage']),
        headers(){
            return [
                {
                    text: this.$t(`${trans_prefix}.tableHeaders.img`),
                    value: 'path',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    text: this.$t(`${trans_prefix}.tableHeaders.position`),
                    value: 'position',
                    align: 'center',
                    class: 'my-header',
                    sortable: true,
                },
                {
                    value: 'action',
                    align: 'center',
                    class: 'my-header',
                    sortable: false,
                },
            ]
        }
    },
    mounted() {
      this.getAllCarrouselImageAsync()
    },
    methods:{
        ...mapActions('appStore',['getCarouselImageAsync']),
        ...mapActions('homePageCarousel',[
            'getAllCarrouselImageAsync',
            'uploadImageAsync',
            'deleteImageAsync',
        ]),
        deleteImage(item){
            this.$swal.showLoading();
            this.deleteImageAsync(item).then(res => {
                this.$nextTick(function () {
                    this.getAllCarrouselImageAsync()
                    this.getCarouselImageAsync()
                    this.$swal.close()
                    this.alert(res)
                });
            });
        },
        alert(result){
            if(result){
                this.$swal({
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
            }else{
                this.$swal({
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 5000
                });
            }
        },
        uploadImage(){
            this.$swal.showLoading();
            this.uploadImageAsync(this.getObjectData()).then(res => {
                this.uploadPhotoArray = []
                this.$nextTick(function () {
                    this.getAllCarrouselImageAsync()
                    this.getCarouselImageAsync()
                    this.$swal.close()
                    this.alert(res)
                });
            });
        },
        getObjectData(){
            let formData = new FormData();
            this.uploadPhotoArray.forEach(photo => formData.append('image[]',photo))
            return formData;
        },
    }
}
</script>

<template>
    <v-card height="auto mt-5">
        <v-card-title class="text-center justify-center py-6 gen-ft-style">
                <span class="display-0">
                    {{ $t(`${trans_prefix}.title`) }}
                </span>
        </v-card-title>
        <v-card-text>
            <v-row class="mb-3 ml-3">
                <v-row>
                    <v-file-input
                        v-model="uploadPhotoArray"
                        :label="$t('app.uploadPhoto')"
                        multiple
                        color="blue darken-1"
                        truncate-length="10"
                    >
                    </v-file-input>
                    <v-btn
                        class="mt-5"
                        color="blue darken-1"
                        text
                        :disabled="!uploadPhotoArray.length"
                        @click="uploadImage"
                    >
                        <v-icon>upload</v-icon>
                    </v-btn>
                </v-row>
            </v-row>
            <v-data-table
                :headers="headers"
                :items="CarrouselImage"
                hide-default-footer

            >
                <template v-slot:item.path="{item}">
                    <v-img v-if="$vuetify.breakpoint.mdAndUp"
                        max-height="171"
                        max-width="250"
                        :src="item.path"
                    ></v-img>
                    <v-img v-else
                           max-height="100"
                           max-width="150"
                           :src="item.path"
                    ></v-img>
                </template>
                <template v-slot:item.action="{ item }">
                    <v-row>
                        <edit-position-dialog
                            class="mt-0"
                            v-bind:items="CarrouselImage"
                            v-bind:item="item"/>
                        <v-btn
                            @click="deleteImage(item)"
                            color="red darken-1" text>
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-row>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>
