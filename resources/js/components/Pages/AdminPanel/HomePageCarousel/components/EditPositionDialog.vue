<script>
import {mapActions} from "vuex";

const trans_prefix = 'adminPanel.adminHomePageCarousel';
export default {
    name: "EditPositionDialog",
    data(){
        return {
            trans_prefix,
            dialog: false,
            positions: [],
            selectedPosition: 1,
        }
    },
    props:{
        items: Array,
        item: Object,
    },
    watch:{
        dialog: "changeSelectArray",
    },
    methods:{
        ...mapActions('appStore',['getCarouselImageAsync']),
        ...mapActions('homePageCarousel',['changePositionAsync','getAllCarrouselImageAsync']),
        changeSelectArray(){
            this.selectedPosition = this.item.position;
            this.positions = [];
            let pos = 1
            this.items.forEach(e => {
                this.positions.push(pos)
                pos++
            })
        },
        changePosition(){
            this.$swal.showLoading();
            this.changePositionAsync({
                idItem: this.item.id,
                position: this.selectedPosition
            }).then(res => {
                this.$nextTick(function () {
                    this.getAllCarrouselImageAsync()
                    this.getCarouselImageAsync()
                    this.$swal.close()
                    this.alert(res)
                    this.dialog = false
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
    },
}
</script>

<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    text
                    color="#4F53B1"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>edit</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    {{ $t(`${trans_prefix}.editDialog`) }}
                </v-card-title>

                <v-card-text>
                    <v-select
                        v-model="selectedPosition"
                        :items="positions"
                        :label="$t(`${trans_prefix}.tableHeaders.position`)"
                    ></v-select>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="red"
                        text
                        @click="dialog = false"
                    >
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-btn
                        color="green"
                        text
                        @click="changePosition"
                    >
                        <v-icon>check</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
