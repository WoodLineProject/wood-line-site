<script>
import {mapActions, mapGetters} from "vuex";
import {ROLE_OWNER} from "../../../../../constants/roles";
import {CheckUserAndRolesMixin} from "../../../../../mixins/check-user-and-role-mixin";

const trans_prefix = 'adminPanel.productManagement';
export default {
    name: "PhotoManager",
    data(){
        return {
            trans_prefix,
            search: '',
            selectedId: undefined,
            currentIndex: 0,
            uploadPhotoArray: [],
        }
    },
    mixins:[CheckUserAndRolesMixin],
    computed:{
        ...mapGetters('dicStore',['products']),
        ...mapGetters('productManagement',['photo']),
        filterProduct(){
            return this.products.filter((item) => {
                return item.name.toUpperCase().includes(this.search.toUpperCase())
            })
        },
        showForOwner(){
            return this.checkUserAndRoles([ROLE_OWNER])
        },
    },
    methods:{
        ...mapActions('productManagement',['getPhotoAsync','deletePhotoAsync','uploadPhotoAsync']),
        getPhoto(){
            this.$swal.showLoading();
            this.getPhotoAsync({id: this.selectedId}).then(res => {
                this.$swal.close()
            });
        },
        deleteImage(){
            this.$swal.showLoading();
            this.deletePhotoAsync({
                id: this.photo[this.currentIndex].id,
                name: this.photo[this.currentIndex].name
            }).then(res => {
                this.$swal.close()
                this.alert(res)
                this.getPhotoAsync({id: this.selectedId})
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
        uploadPhotos(){
            this.$swal.showLoading();
            this.uploadPhotoAsync(this.getObjectData()).then(res => {
                this.uploadPhotoArray = []
                this.$nextTick(function () {
                    this.getPhotoAsync({id: this.selectedId})
                    this.$swal.close()
                    this.alert(res)
                });
            });

        },
        getObjectData(){
            let formData = new FormData();
            formData.append('id', this.selectedId)
            this.uploadPhotoArray.forEach(photo => formData.append('image[]',photo))
            return formData;
        },
    },
}
</script>
<template>
    <div class="mt-5">
        <v-row>
            <v-select
                v-model="selectedId"
                :items="filterProduct"
                :label="$t(`${trans_prefix}.product.select`)"
                item-value="id"
                item-text="name"
                @change="getPhoto"
            >
                <template v-slot:prepend-item>
                    <v-list-item>
                        <v-text-field
                            v-model="search"
                            :label="$t('app.search')"
                            class="mx-4"
                        ></v-text-field>
                    </v-list-item>
                </template>
            </v-select>
        </v-row>
        <v-row v-if="!!selectedId">
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
                @click="uploadPhotos"
            >
                <v-icon>upload</v-icon>
            </v-btn>
        </v-row>
        <v-card
            v-show="photo.length"
            elevation="24"
            class="mx-auto"
        >
            <v-carousel
                class="mt-3"
                height="400"
                hide-delimiter-background
                show-arrows-on-hover
                v-model="currentIndex"
            >
                <v-carousel-item
                    v-for="(p, i) in photo"
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
                                width="400"
                                height="400"
                                class="grey lighten-2"
                                :src="p.path"
                            ></v-img>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
            <v-card-actions v-if="showForOwner">
                <v-spacer/>
                <v-btn
                    @click="deleteImage()"
                    text
                    color="red"
                >
                    <v-icon>
                        close
                    </v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
